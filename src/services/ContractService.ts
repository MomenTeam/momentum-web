import { AxiosRequestConfig } from 'axios'
import { HttpMethod } from './HttpInstance'

export default {
  all: (): AxiosRequestConfig => {
    return {
      url: '/contact/v1',
      method: HttpMethod.GET,
    }
  },
}
