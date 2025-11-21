import { X } from 'lucide-react';
import { useState } from 'react';

interface AddSpeciesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (species: SpeciesFormData) => void;
}

export interface SpeciesFormData {
  popularName: string;
  scientificName: string;
  family: string;
  genus: string;
  biome: string;
  category: string;
  conservationStatus: string;
  description: string;
}

export function AddSpeciesModal({ isOpen, onClose, onSave }: AddSpeciesModalProps) {
  const [formData, setFormData] = useState<SpeciesFormData>({
    popularName: '',
    scientificName: '',
    family: '',
    genus: '',
    biome: '',
    category: '',
    conservationStatus: '',
    description: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof SpeciesFormData, string>>>({});

  const handleChange = (field: keyof SpeciesFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof SpeciesFormData, string>> = {};

    if (!formData.popularName.trim()) {
      newErrors.popularName = 'Nome popular é obrigatório';
    }
    if (!formData.scientificName.trim()) {
      newErrors.scientificName = 'Nome científico é obrigatório';
    }
    if (!formData.family.trim()) {
      newErrors.family = 'Família botânica é obrigatória';
    }
    if (!formData.biome.trim()) {
      newErrors.biome = 'Bioma de origem é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
      handleCancel();
    }
  };

  const handleCancel = () => {
    setFormData({
      popularName: '',
      scientificName: '',
      family: '',
      genus: '',
      biome: '',
      category: '',
      conservationStatus: '',
      description: ''
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-card rounded-[12px] shadow-xl max-w-[896px] w-full max-h-[90vh] overflow-hidden border border-[#E0E0E0] dark:border-border">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E0E0E0] dark:border-border bg-primary">
          <h2 className="text-white text-lg">Adicionar Nova Espécie</h2>
          <button
            onClick={handleCancel}
            className="w-5 h-5 flex items-center justify-center text-white hover:text-white/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="overflow-auto p-6 space-y-6">
            {/* Section: Identificação */}
            <div>
              <h3 className="text-[#1A1A1A] dark:text-white mb-4">Identificação</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Nome Popular */}
                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">
                    Nome Popular da Espécie <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.popularName}
                    onChange={(e) => handleChange('popularName', e.target.value)}
                    placeholder="Ex: Ipê-amarelo"
                    className={`w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border ${
                      errors.popularName ? 'border-red-600' : 'border-[#E0E0E0] dark:border-border'
                    } rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                  />
                  {errors.popularName && (
                    <p className="text-xs text-red-600">{errors.popularName}</p>
                  )}
                </div>

                {/* Nome Científico */}
                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">
                    Nome Científico <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.scientificName}
                    onChange={(e) => handleChange('scientificName', e.target.value)}
                    placeholder="Ex: Handroanthus chrysotrichus"
                    className={`w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border ${
                      errors.scientificName ? 'border-red-600' : 'border-[#E0E0E0] dark:border-border'
                    } rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                  />
                  {errors.scientificName && (
                    <p className="text-xs text-red-600">{errors.scientificName}</p>
                  )}
                </div>

                {/* Família Botânica */}
                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">
                    Família Botânica <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.family}
                    onChange={(e) => handleChange('family', e.target.value)}
                    placeholder="Ex: Bignoniaceae"
                    className={`w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border ${
                      errors.family ? 'border-red-600' : 'border-[#E0E0E0] dark:border-border'
                    } rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                  />
                  {errors.family && (
                    <p className="text-xs text-red-600">{errors.family}</p>
                  )}
                </div>

                {/* Gênero */}
                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">
                    Gênero
                  </label>
                  <input
                    type="text"
                    value={formData.genus}
                    onChange={(e) => handleChange('genus', e.target.value)}
                    placeholder="Ex: Handroanthus"
                    className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Section: Classificação Ecológica */}
            <div>
              <h3 className="text-[#1A1A1A] dark:text-white mb-4">Classificação Ecológica</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Bioma de Origem */}
                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">
                    Bioma de Origem <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={formData.biome}
                    onChange={(e) => handleChange('biome', e.target.value)}
                    className={`w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border ${
                      errors.biome ? 'border-red-600' : 'border-[#E0E0E0] dark:border-border'
                    } rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                  >
                    <option value="">Selecione...</option>
                    <option value="Mata Atlântica">Mata Atlântica</option>
                    <option value="Amazônia">Amazônia</option>
                    <option value="Cerrado">Cerrado</option>
                    <option value="Caatinga">Caatinga</option>
                    <option value="Pampa">Pampa</option>
                    <option value="Pantanal">Pantanal</option>
                  </select>
                  {errors.biome && (
                    <p className="text-xs text-red-600">{errors.biome}</p>
                  )}
                </div>

                {/* Categoria Sucessional */}
                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">
                    Categoria Sucessional
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleChange('category', e.target.value)}
                    className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option value="">Selecione...</option>
                    <option value="Pioneira">Pioneira</option>
                    <option value="Secundária Inicial">Secundária Inicial</option>
                    <option value="Secundária Tardia">Secundária Tardia</option>
                    <option value="Clímax">Clímax</option>
                  </select>
                </div>

                {/* Status de Conservação */}
                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">
                    Status de Conservação
                  </label>
                  <select
                    value={formData.conservationStatus}
                    onChange={(e) => handleChange('conservationStatus', e.target.value)}
                    className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option value="">Selecione...</option>
                    <option value="LC - Pouco Preocupante">LC - Pouco Preocupante</option>
                    <option value="NT - Quase Ameaçada">NT - Quase Ameaçada</option>
                    <option value="VU - Vulnerável">VU - Vulnerável</option>
                    <option value="EN - Em Perigo">EN - Em Perigo</option>
                    <option value="CR - Criticamente em Perigo">CR - Criticamente em Perigo</option>
                    <option value="EW - Extinta na Natureza">EW - Extinta na Natureza</option>
                    <option value="EX - Extinta">EX - Extinta</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section: Informações Adicionais */}
            <div>
              <h3 className="text-[#1A1A1A] dark:text-white mb-4">Informações Adicionais</h3>
              
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Descrição / Observações
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  placeholder="Informações adicionais sobre a espécie..."
                  rows={4}
                  className="w-full px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#E0E0E0] dark:border-border bg-[#F8F8F8] dark:bg-[#0F3D26]">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-white dark:bg-transparent border border-[#E0E0E0] dark:border-border text-[#1A1A1A] dark:text-white rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] transition-colors text-sm"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors text-sm"
            >
              Salvar Espécie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
