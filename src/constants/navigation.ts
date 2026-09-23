import { ROUTE_PATHS } from '@/app/router/paths'

export interface NavigationItem {
  label: string
  path: string
}

export const PRIMARY_NAVIGATION: NavigationItem[] = [
  { label: 'Dashboard', path: ROUTE_PATHS.dashboard },
  { label: 'Attendance', path: ROUTE_PATHS.attendance },
]