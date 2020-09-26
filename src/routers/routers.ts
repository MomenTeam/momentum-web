import React from 'react'
import urls from './urls'

const LoginContainer = React.lazy(() => import('../components/pages/Login/LoginContainer'))
const ProfileContainer = React.lazy(() => import('../components/pages/Profile/ProfileContainer'))
const QuestionListContainer = React.lazy(() => import('../components/pages/QuestionList/QuestionListContainer'))
const QuestionDetailContainer = React.lazy(() => import('../components/pages/QuestionDetail/QuestionDetailContainer'))

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
  QuestionList: {
    key: 'QuestionList',
    url: urls.QuestionList,
    component: QuestionListContainer,
    protectedRoute: true,
  },
  QuestionDetail: {
    key: 'QuestionDetail',
    url: urls.QuestionDetail,
    component: QuestionDetailContainer,
    protectedRoute: true,
  },
  Profile: {
    key: 'Profile',
    url: urls.Profile,
    component: ProfileContainer,
    protectedRoute: true,
  },
  Login: {
    key: 'Login',
    url: urls.Login,
    component: LoginContainer,
    protectedRoute: false,
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
