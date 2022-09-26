import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { routes } from './routes.js'


export class App extends React.Component {



  render() {
    return (
      <div className="App">
        <main>
          <AppHeader />
          <Routes>
            {routes.map(route =>
              <Route key={route.path}
                exact={true}
                element={route.component}
                path={route.path} />)}
          </Routes>
        </main>
      </div>
    )
  };
}

