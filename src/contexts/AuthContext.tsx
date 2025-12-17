import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User } from '@supabase/supabase-js'
import { authService } from '../services/auth.service'
import { UserProfile } from '../types/auth.types'

interface AuthContextType {
  user: User | null
  profile: UserProfile | null
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  requestPasswordReset: (email: string) => Promise<void>
  updatePassword: (newPassword: string) => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check current session on mount
    checkSession()
  }, [])

  const checkSession = async () => {
    try {
      setLoading(true)
      const session = await authService.getCurrentSession()

      if (session) {
        setUser(session.user)
        setProfile(session.profile)
      } else {
        setUser(null)
        setProfile(null)
      }
    } catch (error) {
      console.error('Error checking session:', error)
      setUser(null)
      setProfile(null)
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    const { user: authUser, profile: userProfile } = await authService.signIn({ email, password })
    setUser(authUser)
    setProfile(userProfile)
  }

  const signOut = async () => {
    await authService.signOut()
    setUser(null)
    setProfile(null)
  }

  const requestPasswordReset = async (email: string) => {
    await authService.requestPasswordReset({ email })
  }

  const updatePassword = async (newPassword: string) => {
    await authService.updatePassword(newPassword)
  }

  const value: AuthContextType = {
    user,
    profile,
    signIn,
    signOut,
    requestPasswordReset,
    updatePassword,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
