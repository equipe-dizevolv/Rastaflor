import { supabase } from '../lib/supabase'
import { TeamMember, TeamMemberFormData, TeamMemberUpdateData } from '../types/user.types'

export const usersService = {
  /**
   * Get all team members for the current user's company
   */
  async getTeamMembers(): Promise<TeamMember[]> {
    // Get current user's company_id
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Usuário não autenticado')

    const { data: currentUser } = await supabase
      .from('users')
      .select('company_id')
      .eq('email', user.email)
      .single()

    if (!currentUser) throw new Error('Perfil de usuário não encontrado')

    // Get all users from the same company
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('company_id', currentUser.company_id)
      .order('name', { ascending: true })

    if (error) throw error
    return data as TeamMember[]
  },

  /**
   * Get a single team member by ID
   */
  async getTeamMember(id: string): Promise<TeamMember> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return data as TeamMember
  },

  /**
   * Create a new team member
   * LOCAL MODE - Creates only in users table (no Auth)
   */
  async createTeamMember(formData: TeamMemberFormData): Promise<TeamMember> {
    // Get current user's company_id
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Usuário não autenticado')

    const { data: currentUser } = await supabase
      .from('users')
      .select('company_id, role')
      .eq('email', user.email)
      .single()

    if (!currentUser) throw new Error('Perfil de usuário não encontrado')

    // Check if current user has permission (admin or manager)
    if (!['admin', 'manager'].includes(currentUser.role)) {
      throw new Error('Você não tem permissão para adicionar membros à equipe')
    }

    // LOCAL MODE - Create only in users table
    const { data, error } = await supabase
      .from('users')
      .insert({
        id: crypto.randomUUID(),
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
        company_id: currentUser.company_id,
        role: formData.role,
        is_active: formData.is_active,
        admission_date: formData.admission_date,
      })
      .select()
      .single()

    if (error) {
      if (error.code === '23505') {
        throw new Error('Já existe um usuário com este email')
      }
      throw error
    }

    console.warn('⚠️ MODO LOCAL: Usuário criado apenas na tabela users.')
    return data as TeamMember
  },

  /**
   * Update a team member
   */
  async updateTeamMember(id: string, updateData: TeamMemberUpdateData): Promise<TeamMember> {
    const { data, error } = await supabase
      .from('users')
      .update({
        ...updateData,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      if (error.code === '23505') {
        throw new Error('Já existe um usuário com este email')
      }
      throw error
    }

    return data as TeamMember
  },

  /**
   * Toggle user active status
   */
  async toggleUserStatus(id: string, isActive: boolean): Promise<TeamMember> {
    const { data, error } = await supabase
      .from('users')
      .update({
        is_active: isActive,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data as TeamMember
  },

  /**
   * Delete a team member
   */
  async deleteTeamMember(id: string): Promise<void> {
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', id)

    if (error) {
      if (error.code === '23503') {
        throw new Error('Não é possível excluir este usuário pois ele possui dados vinculados')
      }
      throw error
    }
  },

  /**
   * Search team members by name, email, or role
   */
  async searchTeamMembers(searchTerm: string): Promise<TeamMember[]> {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Usuário não autenticado')

    const { data: currentUser } = await supabase
      .from('users')
      .select('company_id')
      .eq('email', user.email)
      .single()

    if (!currentUser) throw new Error('Perfil de usuário não encontrado')

    const searchLower = searchTerm.toLowerCase()

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('company_id', currentUser.company_id)
      .or(`name.ilike.%${searchLower}%,email.ilike.%${searchLower}%,role.ilike.%${searchLower}%`)
      .order('name', { ascending: true })

    if (error) throw error
    return data as TeamMember[]
  },
}
