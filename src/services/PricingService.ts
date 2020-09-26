import { AxiosRequestConfig } from 'axios'
import { HttpMethod } from './HttpInstance'

export default {
  postPricing: (): AxiosRequestConfig => {
    return {
      url: '/pricing/v1',
      method: HttpMethod.POST,
    }
  },
}
