import { X } from 'lucide-react';
import { useState } from 'react';

interface AddPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (property: PropertyFormData) => void;
}

export interface PropertyFormData {
  name: string;
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  latitude: string;
  longitude: string;
}

export function AddPropertyModal({ isOpen, onClose, onSave }: AddPropertyModalProps) {
  const [formData, setFormData] = useState<PropertyFormData>({
    name: '',
    cep: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
    latitude: '',
    longitude: ''
  });

  const handleChange = (field: keyof PropertyFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    // Reset form
    setFormData({
      name: '',
      cep: '',
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      state: '',
      latitude: '',
      longitude: ''
    });
  };

  const handleCancel = () => {
    // Reset form
    setFormData({
      name: '',
      cep: '',
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      state: '',
      latitude: '',
      longitude: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-card rounded-[12px] shadow-xl max-w-[896px] w-full max-h-[90vh] overflow-hidden border border-[#E0E0E0] dark:border-border">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E0E0E0] dark:border-border">
          <h2 className="text-[#1A1A1A] dark:text-white text-xl">Adicionar Nova Propriedade</h2>
          <button
            onClick={handleCancel}
            className="w-5 h-5 flex items-center justify-center text-[#777777] dark:text-[#B0B0B0] hover:text-[#1A1A1A] dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Nome da propriedade */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Nome da propriedade <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Ex: Fazenda São João"
                  className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              {/* Rua */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Rua
                </label>
                <input
                  type="text"
                  value={formData.street}
                  onChange={(e) => handleChange('street', e.target.value)}
                  placeholder="Ex: Estrada Municipal"
                  className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              {/* Bairro */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Bairro
                </label>
                <input
                  type="text"
                  value={formData.neighborhood}
                  onChange={(e) => handleChange('neighborhood', e.target.value)}
                  placeholder="Ex: Zona Rural"
                  className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              {/* Estado */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Estado
                </label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => handleChange('state', e.target.value)}
                  placeholder="Ex: SP"
                  maxLength={2}
                  className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent uppercase"
                />
              </div>

              {/* Latitude */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Latitude <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.latitude}
                  onChange={(e) => handleChange('latitude', e.target.value)}
                  placeholder="Ex: -23.5505"
                  className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* CEP */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  CEP <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.cep}
                  onChange={(e) => handleChange('cep', e.target.value)}
                  placeholder="Ex: 12345-678"
                  className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              {/* Número */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Número <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.number}
                  onChange={(e) => handleChange('number', e.target.value)}
                  placeholder="Ex: 123"
                  className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              {/* Cidade */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Cidade <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  placeholder="Ex: São Paulo"
                  className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              {/* Complemento */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Complemento
                </label>
                <input
                  type="text"
                  placeholder="Ex: km 15"
                  className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              {/* Longitude */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Longitude <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.longitude}
                  onChange={(e) => handleChange('longitude', e.target.value)}
                  placeholder="Ex: -46.6333"
                  className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 mt-6 pt-6 border-t border-[#E0E0E0] dark:border-border">
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
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
