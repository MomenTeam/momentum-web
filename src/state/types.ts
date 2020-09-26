export interface IResourceState {
  loading: boolean
  error: any
  data: any
  isSuccess: boolean
}

export interface IResourceStoreFetchAction {
  resourceKey: string
  data?: any
}

export interface IGlobalStore {
  metadata: any
  users: any
  userInfo: any
}

export interface IGlobalActions {
  setMetadata: any
  setUsers: any
  setUserInfo: any
}

export interface IResourceActions {
  fetch: (data: IResourceStoreFetchAction) => void
}

export const FetchInitalState: IResourceState = {
  loading: true,
  error: undefined,
  data: undefined,
  isSuccess: false,
}
