import { supabase } from '../lib/supabase'
import { UserProfile, LoginCredentials, PasswordResetRequest } from '../types/auth.types'

export const authService = {
  /**
   * Sign in with email and password
   */
  async signIn({ email, password }: LoginCredentials) {
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) throw authError

    // Fetch user profile with company data
    const { data: profile, error: profileError } = await supabase
      .from('users')
      .select(`
        *,
        company:companies(*)
      `)
      .eq('email', email)
      .single()

    if (profileError) {
      // If profile doesn't exist, sign out and throw error
      await supabase.auth.signOut()
      throw new Error('Perfil de usuário não encontrado. Entre em contato com o administrador.')
    }

    // Update last login
    await supabase
      .from('users')
      .update({ last_login: new Date().toISOString() })
      .eq('id', profile.id)

    return { user: authData.user, profile: profile as UserProfile }
  },

  /**
   * Sign out current user
   */
  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  /**
   * Get current authenticated user and profile
   */
  async getCurrentSession() {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return null

    // Fetch user profile
    const { data: profile, error } = await supabase
      .from('users')
      .select(`
        *,
        company:companies(*)
      `)
      .eq('email', user.email)
      .single()

    if (error || !profile) return null

    return { user, profile: profile as UserProfile }
  },

  /**
   * Request password reset email
   */
  async requestPasswordReset({ email }: PasswordResetRequest) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })

    if (error) throw error
  },

  /**
   * Update password (called from reset password page)
   */
  async updatePassword(newPassword: string) {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })

    if (error) throw error
  },
}
