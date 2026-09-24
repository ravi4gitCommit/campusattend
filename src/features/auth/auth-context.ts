import { createContext } from 'react'

import type { AppUser } from '@/types/auth'

export interface AuthContextValue {
  user: AppUser | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextValue | null>(null)