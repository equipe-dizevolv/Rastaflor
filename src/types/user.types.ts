export interface TeamMember {
  id: string
  email: string
  name: string
  phone?: string
  company_id: string
  role: 'admin' | 'financial' | 'technician' | 'viewer'
  is_active: boolean
  admission_date?: string
  created_at?: string
  updated_at?: string
}

export interface TeamMemberFormData {
  email: string
  name: string
  phone?: string
  role: 'admin' | 'financial' | 'technician' | 'viewer'
  is_active: boolean
  admission_date?: string
}

export interface TeamMemberUpdateData {
  email?: string
  name?: string
  phone?: string
  role?: 'admin' | 'financial' | 'technician' | 'viewer'
  is_active?: boolean
  admission_date?: string
}
