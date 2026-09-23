/**
 * Every route path in the app. Components link through these constants rather
 * than string literals, so a path change is a one-line change.
 */
export const ROUTE_PATHS = {
    login: '/login',
    dashboard: '/',
    attendance: '/attendance',
  } as const
  
  export type RoutePath = (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS]