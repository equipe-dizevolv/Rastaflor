import { supabase } from '../lib/supabase'
import {
  Species,
  SpeciesCreateData,
  SpeciesUpdateData,
  SpeciesFilters,
} from '../types/species.types'

export const speciesService = {
  /**
   * Get all species for the current user's company
   */
  async getAll(filters?: SpeciesFilters): Promise<Species[]> {
    try {
      // Get current user to get their company_id
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Usuário não autenticado')

      const { data: profile } = await supabase
        .from('users')
        .select('company_id')
        .eq('email', user.email)
        .single()

      if (!profile) throw new Error('Perfil de usuário não encontrado')

      let query = supabase
        .from('species')
        .select('*')
        .eq('company_id', profile.company_id)
        .order('popular_name', { ascending: true })

      // Apply filters
      if (filters?.is_active !== undefined) {
        query = query.eq('is_active', filters.is_active)
      }

      if (filters?.search) {
        query = query.or(
          `popular_name.ilike.%${filters.search}%,scientific_name.ilike.%${filters.search}%`
        )
      }

      const { data, error } = await query

      if (error) throw error

      return data || []
    } catch (error) {
      console.error('Error fetching species:', error)
      throw error
    }
  },

  /**
   * Get a single species by ID
   */
  async getById(id: string): Promise<Species | null> {
    try {
      const { data, error } = await supabase
        .from('species')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error

      return data
    } catch (error) {
      console.error('Error fetching species:', error)
      throw error
    }
  },

  /**
   * Create a new species
   */
  async create(speciesData: SpeciesCreateData): Promise<Species> {
    try {
      // Get current user to get their company_id
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Usuário não autenticado')

      const { data: profile } = await supabase
        .from('users')
        .select('company_id')
        .eq('email', user.email)
        .single()

      if (!profile) throw new Error('Perfil de usuário não encontrado')

      const { data, error } = await supabase
        .from('species')
        .insert({
          ...speciesData,
          company_id: profile.company_id,
          created_by: user.id,
          is_active: true,
        })
        .select()
        .single()

      if (error) throw error

      return data
    } catch (error) {
      console.error('Error creating species:', error)
      throw error
    }
  },

  /**
   * Update an existing species
   */
  async update(id: string, speciesData: SpeciesUpdateData): Promise<Species> {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Usuário não autenticado')

      const { data, error } = await supabase
        .from('species')
        .update({
          ...speciesData,
          updated_by: user.id,
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      return data
    } catch (error) {
      console.error('Error updating species:', error)
      throw error
    }
  },

  /**
   * Delete a species (soft delete by setting is_active to false)
   */
  async softDelete(id: string): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Usuário não autenticado')

      const { error } = await supabase
        .from('species')
        .update({
          is_active: false,
          updated_by: user.id,
        })
        .eq('id', id)

      if (error) throw error
    } catch (error) {
      console.error('Error soft deleting species:', error)
      throw error
    }
  },

  /**
   * Permanently delete a species
   */
  async delete(id: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('species')
        .delete()
        .eq('id', id)

      if (error) throw error
    } catch (error) {
      console.error('Error deleting species:', error)
      throw error
    }
  },

  /**
   * Restore a soft-deleted species
   */
  async restore(id: string): Promise<Species> {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Usuário não autenticado')

      const { data, error } = await supabase
        .from('species')
        .update({
          is_active: true,
          updated_by: user.id,
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      return data
    } catch (error) {
      console.error('Error restoring species:', error)
      throw error
    }
  },
}
