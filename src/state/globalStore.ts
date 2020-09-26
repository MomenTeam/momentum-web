import React from 'react'
import globalHook from 'use-global-hook'
import { IGlobalActions, IGlobalStore } from './types'

const initialState: IGlobalStore = {
  metadata: undefined,
  users: [],
  userInfo: undefined,
}

const actions = {
  setMetadata: (store: any, metadata: any) => {
    store.setState({ metadata })
  },
  setUsers: (store: any, users: any) => {
    store.setState({ users: store.state.users.concat(users) })
  },
  setUserInfo: (store: any, userInfo: any) => {
    store.setState({ userInfo })
  },
  clearUsers: (store: any) => {
    store.setState({ users: [] })
  },
}

const useGlobalStore = globalHook<IGlobalStore, IGlobalActions>(React, initialState, actions)

export default useGlobalStore
