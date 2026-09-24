import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'

import { apiFetch } from '@/lib/api'
import { supabase } from '@/lib/supabase'
import type { AppUser } from '@/types/auth'

import { AuthContext, type AuthContextValue } from './auth-context'

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AppUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const loadUserProfile = useCallback(async (userId: string) => {
    const response = await apiFetch(`/api/v1/users/${userId}`)

    if (!response.ok) {
      setUser(null)
      return
    }

    const data = await response.json()

    setUser({
      id: data.id,
      collegeId: data.collegeId,
      role: data.role,
      fullName: data.fullName,
      email: data.email,
      mobile: data.mobile,
      status: data.status,
    })
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const sessionUserId = data.session?.user.id

      if (sessionUserId) {
        loadUserProfile(sessionUserId).finally(() => setIsLoading(false))
      } else {
        setIsLoading(false)
      }
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user.id) {
        void loadUserProfile(session.user.id)
      } else {
        setUser(null)
      }
    })

    return () => listener.subscription.unsubscribe()
  }, [loadUserProfile])

  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw new Error(error.message)
  }, [])

  const signOut = useCallback(async () => {
    await supabase.auth.signOut()
    setUser(null)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({ user, isLoading, signIn, signOut }),
    [user, isLoading, signIn, signOut],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}