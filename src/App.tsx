import { Provider as BumbagProvider, ToastManager } from 'bumbag'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Empty } from './components/templates/empty'
import { Main } from './components/templates/main'
import { IRouteConfig, routes } from './routers/routers'
import theme from './theme'

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
