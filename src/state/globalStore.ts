import React from 'react'
import globalHook from 'use-global-hook'
import { IGlobalActions, IGlobalStore } from './types'

const initialState: IGlobalStore = {}

const actions = {}

const useGlobalStore = globalHook<IGlobalStore, IGlobalActions>(React, initialState, actions)

export default useGlobalStore
