import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { authService } from '../services/auth.service'
import { AuthContextType, UserProfile } from '../types/auth.types'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check active session on mount
    authService.getCurrentSession()
      .then((session) => {
        if (session) {
          setUser(session.user)
          setProfile(session.profile)
        }
      })
      .catch((error) => {
        console.error('Error loading session:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      const { user: authUser, profile: userProfile } = await authService.signIn({ email, password })
      setUser(authUser)
      setProfile(userProfile)
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    setLoading(true)
    try {
      await authService.signOut()
      setUser(null)
      setProfile(null)
    } finally {
      setLoading(false)
    }
  }

  const requestPasswordReset = async (email: string) => {
    await authService.requestPasswordReset({ email })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        signIn,
        signOut,
        requestPasswordReset
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
