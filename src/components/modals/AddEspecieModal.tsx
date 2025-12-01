import { X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

interface AddEspecieModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: EspecieFormData) => void;
}

export interface EspecieFormData {
  nomePopular: string;
  nomeCientifico: string;
  familia: string;
  classeSuccessional: string;
}

const familias = [
  'Fabaceae',
  'Myrtaceae',
  'Lauraceae',
  'Melastomataceae',
  'Annonaceae',
  'Rubiaceae',
  'Euphorbiaceae',
  'Solanaceae',
  'Bignoniaceae',
  'Sapindaceae',
  'Outra'
];

const classesSuccessionais = [
  'Pioneira',
  'Secundária Inicial',
  'Secundária Tardia',
  'Clímax'
];

export function AddEspecieModal({ isOpen, onClose, onSave }: AddEspecieModalProps) {
  const [formData, setFormData] = useState<EspecieFormData>({
    nomePopular: '',
    nomeCientifico: '',
    familia: '',
    classeSuccessional: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleChange = (field: keyof EspecieFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nomePopular.trim()) {
      newErrors.nomePopular = 'Nome popular é obrigatório';
    }

    if (!formData.nomeCientifico.trim()) {
      newErrors.nomeCientifico = 'Nome científico é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Por favor, preencha os campos obrigatórios');
      return;
    }

    onSave(formData);
    toast.success('Espécie cadastrada com sucesso!');
    handleCancel();
  };

  const handleCancel = () => {
    setFormData({
      nomePopular: '',
      nomeCientifico: '',
      familia: '',
      classeSuccessional: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-card rounded-[8px] shadow-xl max-w-[600px] w-full max-h-[90vh] overflow-hidden border border-[#E0E0E0] dark:border-border flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E0E0E0] dark:border-border">
          <h2 className="text-[#1A1A1A] dark:text-white font-medium">
            Cadastrar Nova Espécie
          </h2>
          <button
            onClick={handleCancel}
            className="w-5 h-5 flex items-center justify-center text-[#777777] hover:text-[#1A1A1A] dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Nome Popular */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Nome Popular <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={formData.nomePopular}
                  onChange={(e) => handleChange('nomePopular', e.target.value)}
                  placeholder="Ex: Ipê Amarelo"
                  className={`w-full px-4 py-2.5 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.nomePopular
                      ? 'border-red-500'
                      : 'border-[#E0E0E0] dark:border-border'
                  } dark:bg-background dark:text-white`}
                />
                {errors.nomePopular && (
                  <p className="text-xs text-red-600">{errors.nomePopular}</p>
                )}
              </div>

              {/* Nome Científico */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Nome Científico <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={formData.nomeCientifico}
                  onChange={(e) => handleChange('nomeCientifico', e.target.value)}
                  placeholder="Ex: Handroanthus albus"
                  className={`w-full px-4 py-2.5 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.nomeCientifico
                      ? 'border-red-500'
                      : 'border-[#E0E0E0] dark:border-border'
                  } dark:bg-background dark:text-white`}
                />
                {errors.nomeCientifico && (
                  <p className="text-xs text-red-600">{errors.nomeCientifico}</p>
                )}
              </div>

              {/* Família */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Família
                </label>
                <select
                  value={formData.familia}
                  onChange={(e) => handleChange('familia', e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#E0E0E0] dark:border-border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-background dark:text-white"
                >
                  <option value="">Selecione uma família</option>
                  {familias.map(familia => (
                    <option key={familia} value={familia}>
                      {familia}
                    </option>
                  ))}
                </select>
              </div>

              {/* Classe Sucessional */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Classe Sucessional
                </label>
                <select
                  value={formData.classeSuccessional}
                  onChange={(e) => handleChange('classeSuccessional', e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#E0E0E0] dark:border-border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-background dark:text-white"
                >
                  <option value="">Selecione uma classe</option>
                  {classesSuccessionais.map(classe => (
                    <option key={classe} value={classe}>
                      {classe}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#E0E0E0] dark:border-border bg-[#F8F8F8] dark:bg-card flex-shrink-0">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 border border-[#E0E0E0] dark:border-border rounded-[8px] text-[#1A1A1A] dark:text-white hover:bg-[#F0F0F0] dark:hover:bg-background transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#0F3D26] text-white rounded-[8px] hover:bg-[#0F3D26]/90 transition-colors"
            >
              Salvar Espécie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
