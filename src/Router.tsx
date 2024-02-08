import React from 'react'
import {
  createHashRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { About } from './pages/about/About'
import { Home } from './pages/home/Home'
import { Projects } from './pages/projects/Projects'

export enum Routes {
  home = '/',
  about = '/about',
  projects = '/projects',
}

export const GO_BACK = -1

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path={Routes.home}
      element={
        <Home>
          {/* parent paths need to render an Outlet in order to render child routes */}
          <Outlet />
        </Home>
      }
    >
      <Route path={Routes.about} element={<About />} />

      <Route path={Routes.projects} element={<Projects />} />
    </Route>,
  ),
)

export const Router = (): React.ReactElement => {
  return <RouterProvider router={router} />
}
