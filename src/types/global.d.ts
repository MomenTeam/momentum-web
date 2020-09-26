declare type Dictionary<T> = { [key: string]: T }

declare module global {
  type Dictionary<T> = { [key: string]: T }
}

export interface FetchResult<R, P extends any[]> {
  loading: boolean
  data: R | undefined
  error: Error | undefined
  params: P
  cancel: any
  refresh: () => Promise<R>
  mutate: any
  // TODO 如果 options 存在 debounceInterval，或 throttleInterval，则 run 和 refresh 不会返回 Promise。类型需要修复。
  run: (...args: P) => Promise<R>
  unmount: () => void
}

export interface BaseResult<R, P extends any[]> extends FetchResult<R, P> {
  reset: () => void
  fetches: {
    [key in string]: FetchResult<R, P>
  }
}
