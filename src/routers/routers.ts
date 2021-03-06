import React from 'react'
import urls from './urls'

const Homepage = React.lazy(() => import('../components/pages/Homepage/Homepage'))
const NeedyDetail = React.lazy(() => import('../components/pages/NeedyDetail/NeedyDetail'))
const Admin = React.lazy(() => import('../components/pages/Admin/Admin'))

export interface IRouteConfig {
  url: string
  component: any
  protectedRoute?: boolean
  enabled?: boolean
  key?: string
  scopes?: string[]
  role?: string
}

export const routerDefinitions: { [key: string]: IRouteConfig } = {
  Homepage: {
    key: 'Homepage',
    url: urls.Homepage,
    component: Homepage,
    protectedRoute: true,
  },
  NeedyDetail: {
    key: 'NeedyDetail',
    url: urls.NeedyDetail,
    component: NeedyDetail,
    protectedRoute: true,
  },
  Admin: {
    key: 'Admin',
    url: urls.Admin,
    component: Admin,
    protectedRoute: true,
  },
}

const routes: IRouteConfig[] = Object.keys(routerDefinitions).map(k => {
  const route: IRouteConfig = routerDefinitions[k]
  route.enabled = route.enabled !== undefined ? route.enabled : true
  route.protectedRoute = route.protectedRoute !== undefined ? route.protectedRoute : true
  route.key = route.key ? route.key : route.url.replace('/', '')
  route.scopes = route.scopes ? route.scopes : []
  route.role = route.role ? route.role : ''
  return route
})

export { routes }
