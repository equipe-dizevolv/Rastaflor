import { User } from '@supabase/supabase-js'

export interface UserProfile {
  id: string
  email: string
  name: string
  phone?: string
  company_id: string
  role: 'admin' | 'manager' | 'technician' | 'viewer'
  is_active: boolean
  admission_date?: string
  created_at: string
  updated_at?: string
  company?: Company
}

export interface Company {
  id: string
  name: string
  cnpj: string
  email: string
  phone?: string
  street?: string
  number?: string
  city?: string
  state?: string
  cep?: string
  active_module?: 'restauracao' | 'coleta' | 'both'
  created_at: string
  updated_at?: string
}

export interface AuthContextType {
  user: User | null
  profile: UserProfile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  requestPasswordReset: (email: string) => Promise<void>
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface PasswordResetRequest {
  email: string
}
