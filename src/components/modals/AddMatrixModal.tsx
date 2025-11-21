import { X, MapPin } from 'lucide-react';
import { useState } from 'react';

interface AddMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (matrix: MatrixFormData) => void;
}

export interface MatrixFormData {
  // Taxonomia
  popularName: string;
  family: string;
  genus: string;
  species: string;
  
  // Biometria
  identificationNumber: string;
  height: string;
  circumference: string;
  diameter: string;
  keepDefaultPeriods: boolean;
  
  // Localização
  latitude: string;
  longitude: string;
  matrixPosition: 'isolated' | 'border' | 'trail' | 'inside';
  inCollectionSite: boolean;
  
  // Fonte de Sementes
  origin: 'natural' | 'planted';
  categoryIdentified: boolean;
  categorySelected: boolean;
  categoryQualified: boolean;
  categoryTested: boolean;
  
  // Informações Adicionais
  exsicataCollection: 'yes' | 'no';
  vegetativeStage: string;
  speciesDensity: 'rare' | 'medium' | 'abundant';
  
  // Observações
  phytogeographicUnit: string;
  landscape: string;
  soilType: string;
  observations: string;
  photos: File[];
}

// Mock data para espécies
const mockSpecies = [
  { 
    id: '1', 
    popularName: 'Ipê-amarelo', 
    scientificName: 'Handroanthus chrysotrichus',
    family: 'Bignoniaceae',
    genus: 'Handroanthus',
    species: 'chrysotrichus'
  },
  { 
    id: '2', 
    popularName: 'Pau-brasil', 
    scientificName: 'Paubrasilia echinata',
    family: 'Fabaceae',
    genus: 'Paubrasilia',
    species: 'echinata'
  },
  { 
    id: '3', 
    popularName: 'Jatobá', 
    scientificName: 'Hymenaea courbaril',
    family: 'Fabaceae',
    genus: 'Hymenaea',
    species: 'courbaril'
  },
  { 
    id: '4', 
    popularName: 'Cedro', 
    scientificName: 'Cedrela fissilis',
    family: 'Meliaceae',
    genus: 'Cedrela',
    species: 'fissilis'
  },
  { 
    id: '5', 
    popularName: 'Araucária', 
    scientificName: 'Araucaria angustifolia',
    family: 'Araucariaceae',
    genus: 'Araucaria',
    species: 'angustifolia'
  },
];

export function AddMatrixModal({ isOpen, onClose, onSave }: AddMatrixModalProps) {
  const [currentSection, setCurrentSection] = useState<'data' | 'additional' | 'observations'>('data');
  const [formData, setFormData] = useState<MatrixFormData>({
    popularName: '',
    family: '',
    genus: '',
    species: '',
    identificationNumber: '',
    height: '',
    circumference: '',
    diameter: '',
    keepDefaultPeriods: true,
    latitude: '',
    longitude: '',
    matrixPosition: 'isolated',
    inCollectionSite: false,
    origin: 'natural',
    categoryIdentified: false,
    categorySelected: false,
    categoryQualified: false,
    categoryTested: false,
    exsicataCollection: 'no',
    vegetativeStage: '',
    speciesDensity: 'medium',
    phytogeographicUnit: '',
    landscape: '',
    soilType: '',
    observations: '',
    photos: []
  });

  const [errors, setErrors] = useState<Partial<Record<keyof MatrixFormData, string>>>({});

  const handleChange = (field: keyof MatrixFormData, value: any) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      
      // Auto-fill taxonomy when species is selected
      if (field === 'popularName') {
        const selectedSpecies = mockSpecies.find(s => s.popularName === value);
        if (selectedSpecies) {
          updated.family = selectedSpecies.family;
          updated.genus = selectedSpecies.genus;
          updated.species = selectedSpecies.species;
        }
      }
      
      return updated;
    });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            latitude: position.coords.latitude.toFixed(6),
            longitude: position.coords.longitude.toFixed(6)
          }));
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
          alert('Não foi possível obter a localização atual. Verifique as permissões do navegador.');
        }
      );
    } else {
      alert('Geolocalização não é suportada pelo seu navegador.');
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof MatrixFormData, string>> = {};

    if (!formData.popularName.trim()) {
      newErrors.popularName = 'Selecione uma espécie';
    }
    if (!formData.identificationNumber.trim()) {
      newErrors.identificationNumber = 'Número de identificação é obrigatório';
    }
    if (!formData.latitude.trim()) {
      newErrors.latitude = 'Latitude é obrigatória';
    }
    if (!formData.longitude.trim()) {
      newErrors.longitude = 'Longitude é obrigatória';
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
    setCurrentSection('data');
    setFormData({
      popularName: '',
      family: '',
      genus: '',
      species: '',
      identificationNumber: '',
      height: '',
      circumference: '',
      diameter: '',
      keepDefaultPeriods: true,
      latitude: '',
      longitude: '',
      matrixPosition: 'isolated',
      inCollectionSite: false,
      origin: 'natural',
      categoryIdentified: false,
      categorySelected: false,
      categoryQualified: false,
      categoryTested: false,
      exsicataCollection: 'no',
      vegetativeStage: '',
      speciesDensity: 'medium',
      phytogeographicUnit: '',
      landscape: '',
      soilType: '',
      observations: '',
      photos: []
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-card rounded-[12px] shadow-xl max-w-[1000px] w-full max-h-[90vh] overflow-hidden border border-[#E0E0E0] dark:border-border flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E0E0E0] dark:border-border bg-primary flex-shrink-0">
          <h2 className="text-white text-lg">Nova Matriz</h2>
          <button
            onClick={handleCancel}
            className="w-5 h-5 flex items-center justify-center text-white hover:text-white/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="flex flex-1 overflow-hidden">
          {/* Sidebar Navigation */}
          <div className="w-[220px] bg-[#F8F8F8] dark:bg-[#1E2621] border-r border-[#E0E0E0] dark:border-border flex-shrink-0 overflow-y-auto">
            <nav className="p-4 space-y-1">
              <button
                type="button"
                onClick={() => setCurrentSection('data')}
                className={`w-full text-left px-3 py-2 rounded-[8px] text-sm transition-colors ${
                  currentSection === 'data'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-[#1A1A1A] dark:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A]'
                }`}
              >
                Dados da Matriz
              </button>
              <button
                type="button"
                onClick={() => setCurrentSection('additional')}
                className={`w-full text-left px-3 py-2 rounded-[8px] text-sm transition-colors ${
                  currentSection === 'additional'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-[#1A1A1A] dark:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A]'
                }`}
              >
                Informações Adicionais
              </button>
              <button
                type="button"
                onClick={() => setCurrentSection('observations')}
                className={`w-full text-left px-3 py-2 rounded-[8px] text-sm transition-colors ${
                  currentSection === 'observations'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-[#1A1A1A] dark:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A]'
                }`}
              >
                Observações Úteis
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* SEÇÃO: Dados da Matriz */}
            {currentSection === 'data' && (
              <div className="space-y-8">
                {/* Taxonomia */}
                <div>
                  <h3 className="text-[#1A1A1A] dark:text-white mb-4">Taxonomia</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">
                        Nome Popular <span className="text-red-600">*</span>
                      </label>
                      <select
                        value={formData.popularName}
                        onChange={(e) => handleChange('popularName', e.target.value)}
                        className={`w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border ${
                          errors.popularName ? 'border-red-600' : 'border-[#E0E0E0] dark:border-border'
                        } rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                      >
                        <option value="">Selecione uma espécie...</option>
                        {mockSpecies.map((species) => (
                          <option key={species.id} value={species.popularName}>
                            {species.popularName} ({species.scientificName})
                          </option>
                        ))}
                      </select>
                      {errors.popularName && (
                        <p className="text-xs text-red-600">{errors.popularName}</p>
                      )}
                      <p className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                        Deseja criar uma nova espécie?{' '}
                        <button type="button" className="text-green-600 hover:underline">
                          Clique aqui
                        </button>
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-[#777777] dark:text-[#B0B0B0]">Família</label>
                      <input
                        type="text"
                        value={formData.family}
                        disabled
                        className="w-full h-9 px-3 py-2 bg-[#E0E0E0] dark:bg-[#2A2A2A] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#777777] dark:text-[#B0B0B0] cursor-not-allowed"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-[#777777] dark:text-[#B0B0B0]">Gênero</label>
                      <input
                        type="text"
                        value={formData.genus}
                        disabled
                        className="w-full h-9 px-3 py-2 bg-[#E0E0E0] dark:bg-[#2A2A2A] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#777777] dark:text-[#B0B0B0] cursor-not-allowed"
                      />
                    </div>

                    <div className="col-span-2 space-y-2">
                      <label className="text-sm text-[#777777] dark:text-[#B0B0B0]">Espécie</label>
                      <input
                        type="text"
                        value={formData.species}
                        disabled
                        className="w-full h-9 px-3 py-2 bg-[#E0E0E0] dark:bg-[#2A2A2A] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#777777] dark:text-[#B0B0B0] cursor-not-allowed"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#E0E0E0] dark:border-border" />

                {/* Biometria */}
                <div>
                  <h3 className="text-[#1A1A1A] dark:text-white mb-4">Biometria</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">
                        Nº de Identificação <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.identificationNumber}
                        onChange={(e) => handleChange('identificationNumber', e.target.value)}
                        placeholder="Ex: MAT-001"
                        className={`w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border ${
                          errors.identificationNumber ? 'border-red-600' : 'border-[#E0E0E0] dark:border-border'
                        } rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                      />
                      {errors.identificationNumber && (
                        <p className="text-xs text-red-600">{errors.identificationNumber}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">Altura (m)</label>
                      <input
                        type="number"
                        step="0.1"
                        value={formData.height}
                        onChange={(e) => handleChange('height', e.target.value)}
                        placeholder="Ex: 15.5"
                        className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">Circunferência (cm)</label>
                      <input
                        type="number"
                        step="0.1"
                        value={formData.circumference}
                        onChange={(e) => handleChange('circumference', e.target.value)}
                        placeholder="Ex: 120"
                        className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>

                    <div className="col-span-2 space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">Diâmetro (m)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={formData.diameter}
                        onChange={(e) => handleChange('diameter', e.target.value)}
                        placeholder="Ex: 0.38"
                        className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>

                    <div className="col-span-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.keepDefaultPeriods}
                          onChange={(e) => handleChange('keepDefaultPeriods', e.target.checked)}
                          className="w-4 h-4 rounded border-[#E0E0E0] dark:border-border text-primary focus:ring-2 focus:ring-green-600"
                        />
                        <span className="text-sm text-[#1A1A1A] dark:text-white">
                          Manter períodos de floração/frutificação padrão?
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#E0E0E0] dark:border-border" />

                {/* Localização */}
                <div>
                  <h3 className="text-[#1A1A1A] dark:text-white mb-4">Localização</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">
                        Latitude <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.latitude}
                        onChange={(e) => handleChange('latitude', e.target.value)}
                        placeholder="Ex: -23.550520"
                        className={`w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border ${
                          errors.latitude ? 'border-red-600' : 'border-[#E0E0E0] dark:border-border'
                        } rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                      />
                      {errors.latitude && (
                        <p className="text-xs text-red-600">{errors.latitude}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">
                        Longitude <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.longitude}
                        onChange={(e) => handleChange('longitude', e.target.value)}
                        placeholder="Ex: -46.633308"
                        className={`w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border ${
                          errors.longitude ? 'border-red-600' : 'border-[#E0E0E0] dark:border-border'
                        } rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                      />
                      {errors.longitude && (
                        <p className="text-xs text-red-600">{errors.longitude}</p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <button
                        type="button"
                        onClick={handleGetCurrentLocation}
                        className="w-full px-4 py-2 bg-white dark:bg-transparent border border-primary text-primary rounded-[8px] hover:bg-green-50 dark:hover:bg-green-900/10 transition-colors text-sm flex items-center justify-center gap-2"
                      >
                        <MapPin className="w-4 h-4" />
                        Preencher pela localização atual
                      </button>
                    </div>

                    <div className="col-span-2 space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">Matriz isolada?</label>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { value: 'isolated', label: 'Isolada' },
                          { value: 'border', label: 'Borda' },
                          { value: 'trail', label: 'Trilha' },
                          { value: 'inside', label: 'Dentro' }
                        ].map((option) => (
                          <label key={option.value} className="relative">
                            <input
                              type="radio"
                              name="matrixPosition"
                              value={option.value}
                              checked={formData.matrixPosition === option.value}
                              onChange={(e) => handleChange('matrixPosition', e.target.value)}
                              className="sr-only peer"
                            />
                            <div className="px-3 py-2 border-2 border-[#E0E0E0] dark:border-border rounded-[8px] cursor-pointer transition-all text-center peer-checked:border-primary peer-checked:bg-green-50 dark:peer-checked:bg-green-900/10">
                              <span className="text-sm text-[#1A1A1A] dark:text-white">{option.label}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-2">
                      <label className="flex items-center justify-between">
                        <span className="text-sm text-[#1A1A1A] dark:text-white">Em Local de coleta?</span>
                        <button
                          type="button"
                          onClick={() => handleChange('inCollectionSite', !formData.inCollectionSite)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            formData.inCollectionSite ? 'bg-primary' : 'bg-[#E0E0E0] dark:bg-[#2A2A2A]'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              formData.inCollectionSite ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#E0E0E0] dark:border-border" />

                {/* Fonte de Sementes */}
                <div>
                  <h3 className="text-[#1A1A1A] dark:text-white mb-4">Fonte de Sementes</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">Origem</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="origin"
                            value="natural"
                            checked={formData.origin === 'natural'}
                            onChange={(e) => handleChange('origin', e.target.value)}
                            className="w-4 h-4 text-primary focus:ring-2 focus:ring-green-600"
                          />
                          <span className="text-sm text-[#1A1A1A] dark:text-white">Natural</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="origin"
                            value="planted"
                            checked={formData.origin === 'planted'}
                            onChange={(e) => handleChange('origin', e.target.value)}
                            className="w-4 h-4 text-primary focus:ring-2 focus:ring-green-600"
                          />
                          <span className="text-sm text-[#1A1A1A] dark:text-white">Plantada</span>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-[#1A1A1A] dark:text-white">Categoria</label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.categoryIdentified}
                            onChange={(e) => handleChange('categoryIdentified', e.target.checked)}
                            className="w-4 h-4 rounded border-[#E0E0E0] dark:border-border text-primary focus:ring-2 focus:ring-green-600"
                          />
                          <div>
                            <span className="text-sm text-[#1A1A1A] dark:text-white block">Identificada</span>
                            <span className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                              Identificação taxonômica confirmada
                            </span>
                          </div>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.categorySelected}
                            onChange={(e) => handleChange('categorySelected', e.target.checked)}
                            className="w-4 h-4 rounded border-[#E0E0E0] dark:border-border text-primary focus:ring-2 focus:ring-green-600"
                          />
                          <div>
                            <span className="text-sm text-[#1A1A1A] dark:text-white block">Selecionada</span>
                            <span className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                              Avaliada por características desejáveis
                            </span>
                          </div>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.categoryQualified}
                            onChange={(e) => handleChange('categoryQualified', e.target.checked)}
                            className="w-4 h-4 rounded border-[#E0E0E0] dark:border-border text-primary focus:ring-2 focus:ring-green-600"
                          />
                          <div>
                            <span className="text-sm text-[#1A1A1A] dark:text-white block">Qualificada</span>
                            <span className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                              Com controle de procedência
                            </span>
                          </div>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.categoryTested}
                            onChange={(e) => handleChange('categoryTested', e.target.checked)}
                            className="w-4 h-4 rounded border-[#E0E0E0] dark:border-border text-primary focus:ring-2 focus:ring-green-600"
                          />
                          <div>
                            <span className="text-sm text-[#1A1A1A] dark:text-white block">Testada</span>
                            <span className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                              Testada cientificamente
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SEÇÃO: Informações Adicionais */}
            {currentSection === 'additional' && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">Coleta de Exsicata</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="exsicataCollection"
                        value="yes"
                        checked={formData.exsicataCollection === 'yes'}
                        onChange={(e) => handleChange('exsicataCollection', e.target.value)}
                        className="w-4 h-4 text-primary focus:ring-2 focus:ring-green-600"
                      />
                      <span className="text-sm text-[#1A1A1A] dark:text-white">Sim</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="exsicataCollection"
                        value="no"
                        checked={formData.exsicataCollection === 'no'}
                        onChange={(e) => handleChange('exsicataCollection', e.target.value)}
                        className="w-4 h-4 text-primary focus:ring-2 focus:ring-green-600"
                      />
                      <span className="text-sm text-[#1A1A1A] dark:text-white">Não</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">Estágio Vegetativo</label>
                  <select
                    value={formData.vegetativeStage}
                    onChange={(e) => handleChange('vegetativeStage', e.target.value)}
                    className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option value="">Selecione...</option>
                    <option value="vegetative">Vegetativo</option>
                    <option value="flowering">Floração</option>
                    <option value="fruiting">Frutificação</option>
                    <option value="dispersal">Dispersão</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">Densidade da Espécie</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="speciesDensity"
                        value="rare"
                        checked={formData.speciesDensity === 'rare'}
                        onChange={(e) => handleChange('speciesDensity', e.target.value)}
                        className="w-4 h-4 text-primary focus:ring-2 focus:ring-green-600"
                      />
                      <span className="text-sm text-[#1A1A1A] dark:text-white">Rara</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="speciesDensity"
                        value="medium"
                        checked={formData.speciesDensity === 'medium'}
                        onChange={(e) => handleChange('speciesDensity', e.target.value)}
                        className="w-4 h-4 text-primary focus:ring-2 focus:ring-green-600"
                      />
                      <span className="text-sm text-[#1A1A1A] dark:text-white">Média</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="speciesDensity"
                        value="abundant"
                        checked={formData.speciesDensity === 'abundant'}
                        onChange={(e) => handleChange('speciesDensity', e.target.value)}
                        className="w-4 h-4 text-primary focus:ring-2 focus:ring-green-600"
                      />
                      <span className="text-sm text-[#1A1A1A] dark:text-white">Abundante</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* SEÇÃO: Observações Úteis */}
            {currentSection === 'observations' && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">Unidade Fitogeográfica</label>
                  <select
                    value={formData.phytogeographicUnit}
                    onChange={(e) => handleChange('phytogeographicUnit', e.target.value)}
                    className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option value="">Selecione...</option>
                    <option value="mata-atlantica">Mata Atlântica</option>
                    <option value="cerrado">Cerrado</option>
                    <option value="amazonia">Amazônia</option>
                    <option value="caatinga">Caatinga</option>
                    <option value="pampa">Pampa</option>
                    <option value="pantanal">Pantanal</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">Paisagem</label>
                  <select
                    value={formData.landscape}
                    onChange={(e) => handleChange('landscape', e.target.value)}
                    className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option value="">Selecione...</option>
                    <option value="floresta-primaria">Floresta Primária</option>
                    <option value="floresta-secundaria">Floresta Secundária</option>
                    <option value="area-aberta">Área Aberta</option>
                    <option value="transicao">Transição</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">Tipo de Solo</label>
                  <select
                    value={formData.soilType}
                    onChange={(e) => handleChange('soilType', e.target.value)}
                    className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option value="">Selecione...</option>
                    <option value="arenoso">Arenoso</option>
                    <option value="argiloso">Argiloso</option>
                    <option value="humoso">Humoso</option>
                    <option value="calcario">Calcário</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">Outras Observações</label>
                  <textarea
                    value={formData.observations}
                    onChange={(e) => handleChange('observations', e.target.value)}
                    placeholder="Insira observações adicionais sobre a matriz..."
                    rows={6}
                    className="w-full px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">Anexos de Fotos</label>
                  <div className="border-2 border-dashed border-[#E0E0E0] dark:border-border rounded-[8px] p-6 text-center">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      id="photo-upload"
                    />
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      <div className="text-[#777777] dark:text-[#B0B0B0]">
                        <p className="text-sm mb-1">Clique para adicionar fotos da matriz</p>
                        <p className="text-xs">PNG, JPG ou JPEG (máx. 5MB por arquivo)</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#E0E0E0] dark:border-border bg-[#F8F8F8] dark:bg-[#0F3D26] flex-shrink-0">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-white dark:bg-transparent border border-[#E0E0E0] dark:border-border text-[#1A1A1A] dark:text-white rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] transition-colors text-sm"
          >
            Cancelar
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors text-sm"
          >
            Salvar Matriz
          </button>
        </div>
      </div>
    </div>
  );
}
