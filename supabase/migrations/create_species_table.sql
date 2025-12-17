-- Create species table for coleta module
-- Species are company-scoped (each company has their own species)

CREATE TABLE IF NOT EXISTS public.species (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,

  -- Identification
  popular_name VARCHAR(255) NOT NULL,
  scientific_name VARCHAR(255) NOT NULL,
  family VARCHAR(255) NOT NULL,
  genus VARCHAR(255),

  -- Ecological Classification
  biome VARCHAR(100),
  category VARCHAR(100), -- Categoria Sucessional
  conservation_status VARCHAR(100), -- Status de Conservação

  -- Additional Info
  description TEXT,

  -- Status
  is_active BOOLEAN DEFAULT true,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id)
);

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_species_company_id ON public.species(company_id);
CREATE INDEX IF NOT EXISTS idx_species_popular_name ON public.species(popular_name);
CREATE INDEX IF NOT EXISTS idx_species_scientific_name ON public.species(scientific_name);
CREATE INDEX IF NOT EXISTS idx_species_is_active ON public.species(is_active);

-- Add RLS (Row Level Security) policies
ALTER TABLE public.species ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see species from their own company
CREATE POLICY "Users can view their company species"
  ON public.species
  FOR SELECT
  USING (
    company_id IN (
      SELECT company_id FROM public.users WHERE id = auth.uid()
    )
  );

-- Policy: Users can insert species for their company
CREATE POLICY "Users can insert species for their company"
  ON public.species
  FOR INSERT
  WITH CHECK (
    company_id IN (
      SELECT company_id FROM public.users WHERE id = auth.uid()
    )
  );

-- Policy: Users can update species from their company
CREATE POLICY "Users can update their company species"
  ON public.species
  FOR UPDATE
  USING (
    company_id IN (
      SELECT company_id FROM public.users WHERE id = auth.uid()
    )
  );

-- Policy: Users can delete species from their company
CREATE POLICY "Users can delete their company species"
  ON public.species
  FOR DELETE
  USING (
    company_id IN (
      SELECT company_id FROM public.users WHERE id = auth.uid()
    )
  );

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_species_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to call the function before update
CREATE TRIGGER trigger_update_species_updated_at
  BEFORE UPDATE ON public.species
  FOR EACH ROW
  EXECUTE FUNCTION update_species_updated_at();

-- Add some comments for documentation
COMMENT ON TABLE public.species IS 'Stores species data for coleta module, scoped by company';
COMMENT ON COLUMN public.species.company_id IS 'References the company that owns this species';
COMMENT ON COLUMN public.species.popular_name IS 'Popular/common name of the species';
COMMENT ON COLUMN public.species.scientific_name IS 'Scientific name of the species';
COMMENT ON COLUMN public.species.family IS 'Botanical family';
COMMENT ON COLUMN public.species.genus IS 'Genus of the species';
COMMENT ON COLUMN public.species.biome IS 'Biome of origin (Mata Atlântica, Amazônia, etc)';
COMMENT ON COLUMN public.species.category IS 'Successional category (Pioneira, Secundária, etc)';
COMMENT ON COLUMN public.species.conservation_status IS 'Conservation status (LC, VU, EN, etc)';
