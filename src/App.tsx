import Amplify from 'aws-amplify'
import { Provider as BumbagProvider, ToastManager } from 'bumbag'
import * as dayjs from 'dayjs'
import 'dayjs/locale/tr'
import i18n from 'i18next'
import React from 'react'
import 'react-day-picker/lib/style.css'
import { initReactI18next } from 'react-i18next'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Empty } from './components/templates/empty'
import { Main } from './components/templates/main'
import config from './config/env'
import en from './i18n/en.json'
import tr from './i18n/tr.json'
import { IRouteConfig, routes } from './routers/routers'
import theme from './theme'

dayjs.locale('tr')

Amplify.configure({
  Auth: {
    identityPoolId: config.aws.identityPoolId,
    region: config.aws.region,
    identityPoolRegion: config.aws.identityPoolRegion,
    userPoolId: config.aws.userPoolId,
    userPoolWebClientId: config.aws.userPoolWebClientId,
    mandatorySignIn: config.aws.mandatorySignIn,
    authenticationFlowType: config.aws.authenticationFlowType,
  },
})

i18n.use(initReactI18next).init({
  resources: {
    en,
    tr,
  },
  lng: 'tr',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})

function App() {
  function renderRoutes() {
    return routes
      .filter((r: IRouteConfig) => r.enabled)
      .map((route: IRouteConfig) => {
        if (route.protectedRoute && route.component) {
          const RouteComponent = route.component
          return (
            <Route
              exact
              key={route.key}
              path={route.url}
              component={() => (
                <Main>
                  <RouteComponent />
                </Main>
              )}
            />
          )
        }
        if (!route.protectedRoute && route.component) {
          const RouteComponent = route.component
          return (
            <Route
              exact
              key={route.key}
              path={route.url}
              component={() => (
                <Empty>
                  <RouteComponent />
                </Empty>
              )}
            />
          )
        }
        throw {
          message: `No component or render is available for route: ${route.url}`,
          code: 0,
        }
      })
  }

  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <BumbagProvider theme={theme}>
          <Switch>{renderRoutes()} </Switch>
          <ToastManager />
        </BumbagProvider>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App
