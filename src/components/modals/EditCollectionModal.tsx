import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface EditCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: string, collection: CollectionFormData) => void;
  collection: {
    id: string;
    species: string;
    scientificName: string;
    collectionDate: string;
    weight: string;
    type: string;
    origin: string;
    collectionObjective?: string;
    observations?: string;
  } | null;
}

export interface CollectionFormData {
  species: string;
  scientificName?: string;
  collectionDate: string;
  weight: string;
  collectionType: string;
  origin: string;
  originType: 'property' | 'matrix';
  collectionObjective?: string;
  observations?: string;
}

// Mock data para as espécies
const mockSpecies = [
  { id: '1', popularName: 'Ipê-amarelo', scientificName: 'Handroanthus chrysotrichus' },
  { id: '2', popularName: 'Pau-brasil', scientificName: 'Paubrasilia echinata' },
  { id: '3', popularName: 'Jatobá', scientificName: 'Hymenaea courbaril' },
  { id: '4', popularName: 'Cedro', scientificName: 'Cedrela fissilis' },
  { id: '5', popularName: 'Araucária', scientificName: 'Araucaria angustifolia' },
];

// Mock data para propriedades
const mockProperties = [
  { id: '1', name: 'Fazenda Santa Rita' },
  { id: '2', name: 'Fazenda Boa Vista' },
  { id: '3', name: 'Sítio Verde' },
  { id: '4', name: 'Reserva Alto da Serra' },
];

// Mock data para matrizes
const mockMatrices = [
  { id: '1', code: 'Matriz 001', property: 'Fazenda Santa Rita', species: 'Ipê-amarelo' },
  { id: '2', code: 'Matriz 002', property: 'Fazenda Santa Rita', species: 'Cedro' },
  { id: '3', code: 'Matriz 003', property: 'Fazenda Boa Vista', species: 'Pau-brasil' },
  { id: '4', code: 'Matriz 005', property: 'Sítio Verde', species: 'Jatobá' },
  { id: '5', code: 'Matriz 008', property: 'Reserva Alto da Serra', species: 'Araucária' },
];

export function EditCollectionModal({ isOpen, onClose, onSave, collection }: EditCollectionModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<CollectionFormData>({
    species: '',
    collectionDate: '',
    weight: '',
    collectionType: '',
    origin: '',
    originType: 'matrix',
    collectionObjective: '',
    observations: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CollectionFormData, string>>>({});

  // Preencher formulário quando o modal abrir com dados da coleta
  useEffect(() => {
    if (isOpen && collection) {
      // Converter data de dd/mm/yyyy para yyyy-mm-dd
      const [day, month, year] = collection.collectionDate.split('/');
      const formattedDate = `${year}-${month}-${day}`;
      
      // Extrair peso numérico
      const weightValue = collection.weight.replace(' kg', '');
      
      // Determinar tipo de origem
      const isMatrix = collection.origin.includes('Matriz');
      
      setFormData({
        species: collection.species,
        scientificName: collection.scientificName,
        collectionDate: formattedDate,
        weight: weightValue,
        collectionType: collection.type,
        origin: collection.origin,
        originType: isMatrix ? 'matrix' : 'property',
        collectionObjective: collection.collectionObjective || '',
        observations: collection.observations || ''
      });
      setCurrentStep(1);
      setErrors({});
    }
  }, [isOpen, collection]);

  const handleChange = (field: keyof CollectionFormData, value: string) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      
      // Auto-fill scientific name when species is selected
      if (field === 'species') {
        const selectedSpecies = mockSpecies.find(s => s.popularName === value);
        if (selectedSpecies) {
          updated.scientificName = selectedSpecies.scientificName;
        }
      }
      
      return updated;
    });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof CollectionFormData, string>> = {};

    if (step === 1) {
      if (!formData.species.trim()) {
        newErrors.species = 'Selecione uma espécie';
      }
      if (!formData.collectionDate) {
        newErrors.collectionDate = 'Data da coleta é obrigatória';
      }
      if (!formData.weight.trim()) {
        newErrors.weight = 'Peso é obrigatório';
      }
      if (!formData.collectionType.trim()) {
        newErrors.collectionType = 'Tipo de coleta é obrigatório';
      }
    } else if (step === 2) {
      if (!formData.origin.trim()) {
        newErrors.origin = 'Selecione a origem da coleta';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(currentStep) && collection) {
      onSave(collection.id, formData);
      handleCancel();
    }
  };

  const handleCancel = () => {
    setCurrentStep(1);
    setErrors({});
    onClose();
  };

  if (!isOpen || !collection) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-card rounded-[12px] shadow-xl max-w-[896px] w-full max-h-[90vh] overflow-hidden border border-[#E0E0E0] dark:border-border">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E0E0E0] dark:border-border bg-primary">
          <div>
            <h2 className="text-white text-lg">Editar Coleta</h2>
            <p className="text-white/80 text-sm mt-1">
              Etapa {currentStep} de 3: {currentStep === 1 ? 'Dados da Coleta' : currentStep === 2 ? 'Origem' : 'Observações'}
            </p>
          </div>
          <button
            onClick={handleCancel}
            className="w-5 h-5 flex items-center justify-center text-white hover:text-white/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center px-6 py-4 bg-[#F8F8F8] dark:bg-[#1E2621]">
          <div className="flex items-center flex-1 gap-2">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    step <= currentStep
                      ? 'bg-primary'
                      : 'bg-[#E0E0E0] dark:bg-[#2A2A2A]'
                  }`}
                />
                {step < 3 && <div className="w-2" />}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="overflow-auto p-6 min-h-[400px]">
            {/* ETAPA 1: Dados da Coleta */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <p className="text-[#777777] dark:text-[#B0B0B0] text-sm mb-6">
                    Informações básicas sobre a coleta
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Espécie */}
                    <div className="space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">
                        Espécie <span className="text-red-600">*</span>
                      </label>
                      <select
                        value={formData.species}
                        onChange={(e) => handleChange('species', e.target.value)}
                        className={`w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border ${
                          errors.species ? 'border-red-600' : 'border-[#E0E0E0] dark:border-border'
                        } rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                      >
                        <option value="">Selecione uma espécie...</option>
                        {mockSpecies.map((species) => (
                          <option key={species.id} value={species.popularName}>
                            {species.popularName} ({species.scientificName})
                          </option>
                        ))}
                      </select>
                      {errors.species && (
                        <p className="text-xs text-red-600">{errors.species}</p>
                      )}
                    </div>

                    {/* Data da Coleta */}
                    <div className="space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">
                        Data da Coleta <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.collectionDate}
                        onChange={(e) => handleChange('collectionDate', e.target.value)}
                        className={`w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border ${
                          errors.collectionDate ? 'border-red-600' : 'border-[#E0E0E0] dark:border-border'
                        } rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                      />
                      {errors.collectionDate && (
                        <p className="text-xs text-red-600">{errors.collectionDate}</p>
                      )}
                    </div>

                    {/* Peso de Sementes */}
                    <div className="space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">
                        Peso de Sementes (kg) <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={formData.weight}
                        onChange={(e) => handleChange('weight', e.target.value)}
                        placeholder="Ex: 2.5"
                        className={`w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border ${
                          errors.weight ? 'border-red-600' : 'border-[#E0E0E0] dark:border-border'
                        } rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                      />
                      {errors.weight && (
                        <p className="text-xs text-red-600">{errors.weight}</p>
                      )}
                    </div>

                    {/* Tipo de Coleta */}
                    <div className="space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">
                        Tipo de Coleta <span className="text-red-600">*</span>
                      </label>
                      <select
                        value={formData.collectionType}
                        onChange={(e) => handleChange('collectionType', e.target.value)}
                        className={`w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border ${
                          errors.collectionType ? 'border-red-600' : 'border-[#E0E0E0] dark:border-border'
                        } rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                      >
                        <option value="">Selecione...</option>
                        <option value="Coleta Manual">Coleta Manual</option>
                        <option value="Coleta com Rede">Coleta com Rede</option>
                        <option value="Coleta do Solo">Coleta do Solo</option>
                        <option value="Coleta com Podão">Coleta com Podão</option>
                        <option value="Coleta por Escalada">Coleta por Escalada</option>
                      </select>
                      {errors.collectionType && (
                        <p className="text-xs text-red-600">{errors.collectionType}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ETAPA 2: Origem */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <p className="text-[#777777] dark:text-[#B0B0B0] text-sm mb-6">
                    Selecione a origem da coleta
                  </p>

                  {/* Tipo de Origem */}
                  <div className="mb-6">
                    <div className="flex gap-4">
                      <label className="flex-1">
                        <input
                          type="radio"
                          name="originType"
                          value="matrix"
                          checked={formData.originType === 'matrix'}
                          onChange={(e) => {
                            handleChange('originType', e.target.value);
                            handleChange('origin', '');
                          }}
                          className="sr-only peer"
                        />
                        <div className="h-full px-4 py-3 border-2 border-[#E0E0E0] dark:border-border rounded-[8px] cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-green-50 dark:peer-checked:bg-green-900/10">
                          <p className="text-sm text-[#1A1A1A] dark:text-white">
                            Árvore Matriz
                          </p>
                          <p className="text-xs text-[#777777] dark:text-[#B0B0B0] mt-1">
                            Selecionar uma matriz cadastrada
                          </p>
                        </div>
                      </label>

                      <label className="flex-1">
                        <input
                          type="radio"
                          name="originType"
                          value="property"
                          checked={formData.originType === 'property'}
                          onChange={(e) => {
                            handleChange('originType', e.target.value);
                            handleChange('origin', '');
                          }}
                          className="sr-only peer"
                        />
                        <div className="h-full px-4 py-3 border-2 border-[#E0E0E0] dark:border-border rounded-[8px] cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-green-50 dark:peer-checked:bg-green-900/10">
                          <p className="text-sm text-[#1A1A1A] dark:text-white">
                            Propriedade
                          </p>
                          <p className="text-xs text-[#777777] dark:text-[#B0B0B0] mt-1">
                            Selecionar uma propriedade
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Select de Origem */}
                  <div className="space-y-2">
                    <label className="text-sm text-[#1A1A1A] dark:text-white">
                      {formData.originType === 'matrix' ? 'Árvore Matriz' : 'Propriedade'}{' '}
                      <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={formData.origin}
                      onChange={(e) => handleChange('origin', e.target.value)}
                      className={`w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border ${
                        errors.origin ? 'border-red-600' : 'border-[#E0E0E0] dark:border-border'
                      } rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                    >
                      <option value="">
                        Selecione {formData.originType === 'matrix' ? 'uma matriz' : 'uma propriedade'}...
                      </option>
                      {formData.originType === 'matrix'
                        ? mockMatrices.map((matrix) => (
                            <option key={matrix.id} value={`${matrix.property} - ${matrix.code}`}>
                              {matrix.property} - {matrix.code} ({matrix.species})
                            </option>
                          ))
                        : mockProperties.map((property) => (
                            <option key={property.id} value={property.name}>
                              {property.name}
                            </option>
                          ))}
                    </select>
                    {errors.origin && (
                      <p className="text-xs text-red-600">{errors.origin}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ETAPA 3: Observações */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <p className="text-[#777777] dark:text-[#B0B0B0] text-sm mb-6">
                    Informações complementares sobre a coleta
                  </p>

                  <div className="space-y-4">
                    {/* Objetivo da Coleta */}
                    <div className="space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">
                        Objetivo da Coleta
                      </label>
                      <input
                        type="text"
                        value={formData.collectionObjective}
                        onChange={(e) => handleChange('collectionObjective', e.target.value)}
                        placeholder="Ex: Restauração florestal, pesquisa, comercialização"
                        className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>

                    {/* Observações */}
                    <div className="space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">
                        Observações Gerais
                      </label>
                      <textarea
                        value={formData.observations}
                        onChange={(e) => handleChange('observations', e.target.value)}
                        placeholder="Condições climáticas, estado das sementes, observações gerais..."
                        rows={4}
                        className="w-full px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#E0E0E0] dark:border-border bg-[#F8F8F8] dark:bg-[#0F3D26]">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-white dark:bg-transparent border border-[#E0E0E0] dark:border-border text-[#1A1A1A] dark:text-white rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] transition-colors text-sm"
            >
              Cancelar
            </button>

            <div className="flex items-center gap-3">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 bg-white dark:bg-transparent border border-[#E0E0E0] dark:border-border text-[#1A1A1A] dark:text-white rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] transition-colors text-sm flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Voltar
                </button>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors text-sm flex items-center gap-2"
                >
                  Próximo
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors text-sm"
                >
                  Salvar Alterações
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
