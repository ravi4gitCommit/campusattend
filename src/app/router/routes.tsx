import { createBrowserRouter } from 'react-router-dom'

import { DashboardPage } from '@/features/dashboard'

import { ROUTE_PATHS } from './paths'

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.dashboard,
    element: <DashboardPage />,
  },
])