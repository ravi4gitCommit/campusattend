import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/components/layout'
import { AttendancePage } from '@/features/attendance'
import { DashboardPage } from '@/features/dashboard'

import { ROUTE_PATHS } from './paths'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTE_PATHS.dashboard,
        element: <DashboardPage />,
      },
      {
        path: ROUTE_PATHS.attendance,
        element: <AttendancePage />,
      },
    ],
  },
])