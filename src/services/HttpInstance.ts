import { Auth } from 'aws-amplify'
import axios, { AxiosInstance } from 'axios'
import env from '../config/env'

export enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

const axiosInstance = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: env.apiUrl,
    headers: {
      'x-api-key': env.APIKey,
    },
  })
  // Add a response interceptor
  axiosInstance.interceptors.request.use(config => {
    return new Promise(resolve => {
      Auth.currentSession()
        .then(session => {
          const idTokenExpire = session.getIdToken().getExpiration()
          const refreshToken = session.getRefreshToken()
          const currentTimeSeconds = Math.round(+new Date() / 1000)
          if (idTokenExpire < currentTimeSeconds) {
            Auth.currentAuthenticatedUser().then(res => {
              res.refreshSession(refreshToken, (err: any, data: any) => {
                if (err) {
                  Auth.signOut()
                } else {
                  config.headers.Authorization = `Bearer ${data.getIdToken().getJwtToken()}`
                  resolve(config)
                }
              })
            })
          } else {
            config.headers.Authorization = `Bearer ${session.getIdToken().getJwtToken()}`
            resolve(config)
          }
        })
        .catch(() => {
          resolve(config)
        })
    })
  })

  return axiosInstance
}

export default axiosInstance()
