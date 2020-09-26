import React from 'react'
import globalHook from 'use-global-hook'
import HttpInstance from '../services/HttpInstance'
import ShipmentService from '../services/ShipmentService'
import { FetchInitalState, IResourceActions, IResourceState, IResourceStoreFetchAction } from './types'

export enum ResourceKey {
  GetShipmentAllActive = 'GetShipmentAllActive',
}

const ResourceMapping: { [key: string]: Function } = {
  GetShipmentAllActive: ShipmentService.getAllActiveShipment,
}

const initialState: { [key: string]: IResourceState } = {}

Object.keys(ResourceKey).map((key: string) => {
  initialState[key] = FetchInitalState
})

const actions = {
  fetch: (store: any, { resourceKey, data }: IResourceStoreFetchAction) => {
    store.setState({ [resourceKey]: { loading: true, error: undefined, data: undefined, isSuccess: false } })
    HttpInstance(ResourceMapping[resourceKey](data))
      .then(data => {
        if (data.status >= 200 || data.status < 400) {
          store.setState({ [resourceKey]: { loading: false, error: undefined, data: data.data, isSuccess: true } })
        } else {
          store.setState({ [resourceKey]: { loading: false, error: data.data, data: undefined, isSuccess: false } })
        }
      })
      .catch(error => {
        store.setState({ [resourceKey]: { loading: false, error, data: undefined } })
      })
  },
}

const useResource = globalHook<{ [key: string]: IResourceState }, IResourceActions>(React, initialState, actions)

export default useResource
