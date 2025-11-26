export interface TeamMember {
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
  updated_at?: string
}

export interface TeamMemberFormData {
  name: string
  email: string
  phone?: string
  role: 'admin' | 'manager' | 'technician' | 'viewer'
  is_active: boolean
  admission_date?: string
}

export interface TeamMemberUpdateData {
  name?: string
  email?: string
  phone?: string
  role?: 'admin' | 'manager' | 'technician' | 'viewer'
  is_active?: boolean
  admission_date?: string
}

export const ROLE_LABELS: Record<TeamMember['role'], string> = {
  admin: 'Administrador',
  manager: 'Gerente',
  technician: 'Técnico',
  viewer: 'Visualizador',
}

export const ROLE_OPTIONS = [
  { value: 'admin' as const, label: 'Administrador' },
  { value: 'manager' as const, label: 'Gerente' },
  { value: 'technician' as const, label: 'Técnico' },
  { value: 'viewer' as const, label: 'Visualizador' },
]
