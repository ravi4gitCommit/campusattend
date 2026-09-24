import { env } from '@/config/env'

import { supabase } from './supabase'

/**
 * Fetch wrapper that attaches the current Supabase session's JWT to every
 * request. Every backend call in the app should go through this, not raw fetch.
 */
export async function apiFetch(path: string, options: RequestInit = {}): Promise<Response> {
  const { data } = await supabase.auth.getSession()
  const token = data.session?.access_token

  const headers = new Headers(options.headers)
  headers.set('Content-Type', 'application/json')
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  return fetch(`${env.apiBaseUrl}${path}`, { ...options, headers })
}