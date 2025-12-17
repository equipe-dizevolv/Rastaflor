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
  active_module: 'restauracao' | 'coleta' | 'both'
  created_at: string
  updated_at: string
}

export interface UserProfile {
  id: string
  email: string
  name: string
  phone?: string
  company_id: string
  role: 'admin' | 'manager' | 'technician' | 'viewer'
  is_active: boolean
  admission_date?: string
  last_login?: string
  created_at: string
  updated_at: string
  company?: Company
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface PasswordResetRequest {
  email: string
}
