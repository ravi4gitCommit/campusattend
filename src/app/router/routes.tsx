import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/components/layout'
import { AttendancePage } from '@/features/attendance'
import { LoginPage } from '@/features/auth'
import { DashboardPage } from '@/features/dashboard'

import { ROUTE_PATHS } from './paths'

export const router = createBrowserRouter([
  { path: ROUTE_PATHS.login, element: <LoginPage /> },
  {
    element: <AppLayout />,
    children: [
      { path: ROUTE_PATHS.dashboard, element: <DashboardPage /> },
      { path: ROUTE_PATHS.attendance, element: <AttendancePage /> },
    ],
  },
])