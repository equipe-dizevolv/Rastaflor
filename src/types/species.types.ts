export interface Species {
  id: string
  company_id: string

  // Identification
  popular_name: string
  scientific_name: string
  family: string
  genus?: string

  // Ecological Classification
  biome?: string
  category?: string
  conservation_status?: string

  // Additional Info
  description?: string

  // Status
  is_active: boolean

  // Timestamps
  created_at: string
  updated_at: string
  created_by?: string
  updated_by?: string
}

export interface SpeciesFormData {
  id?: string
  popular_name: string
  scientific_name: string
  family: string
  genus?: string
  biome?: string
  category?: string
  conservation_status?: string
  description?: string
}

export interface SpeciesCreateData {
  popular_name: string
  scientific_name: string
  family: string
  genus?: string
  biome?: string
  category?: string
  conservation_status?: string
  description?: string
}

export interface SpeciesUpdateData {
  popular_name?: string
  scientific_name?: string
  family?: string
  genus?: string
  biome?: string
  category?: string
  conservation_status?: string
  description?: string
}

export interface SpeciesFilters {
  search?: string
  is_active?: boolean
}
