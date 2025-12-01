import { X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

interface AddFornecedorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: FornecedorFormData) => void;
  editData?: FornecedorFormData | null;
}

export interface FornecedorFormData {
  id?: number;
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  telefone: string;
  endereco: string;
  email: string;
  projetosAssociados: number;
}

export function AddFornecedorModal({ isOpen, onClose, onSave, editData }: AddFornecedorModalProps) {
  const [formData, setFormData] = useState<FornecedorFormData>(
    editData || {
      razaoSocial: '',
      nomeFantasia: '',
      cnpj: '',
      telefone: '',
      endereco: '',
      email: '',
      projetosAssociados: 0
    }
  );

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleChange = (field: keyof FornecedorFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const formatCNPJ = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 14) {
      return numbers.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    }
    return value;
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      if (numbers.length <= 10) {
        return numbers.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
      }
      return numbers.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }
    return value;
  };

  const handleCNPJChange = (value: string) => {
    const formatted = formatCNPJ(value);
    handleChange('cnpj', formatted);
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhone(value);
    handleChange('telefone', formatted);
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.razaoSocial.trim()) {
      newErrors.razaoSocial = 'Razão social é obrigatória';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Por favor, corrija os erros no formulário');
      return;
    }

    onSave(formData);
  };

  const handleCancel = () => {
    setFormData({
      razaoSocial: '',
      nomeFantasia: '',
      cnpj: '',
      telefone: '',
      endereco: '',
      email: '',
      projetosAssociados: 0
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-card rounded-[12px] shadow-xl max-w-[600px] w-full max-h-[90vh] overflow-hidden border border-[#E0E0E0] dark:border-border flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E0E0E0] dark:border-border bg-primary flex-shrink-0">
          <h2 className="text-white text-lg">
            {editData ? 'Editar Fornecedor' : 'Novo Fornecedor'}
          </h2>
          <button
            onClick={handleCancel}
            className="w-5 h-5 flex items-center justify-center text-white hover:text-white/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-4">
            {/* Razão Social */}
            <div className="space-y-2">
              <label className="text-sm text-[#1A1A1A] dark:text-white">
                Razão Social <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={formData.razaoSocial}
                onChange={(e) => handleChange('razaoSocial', e.target.value)}
                placeholder="Razão social do fornecedor"
                className={`w-full px-4 py-2.5 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.razaoSocial
                    ? 'border-red-500'
                    : 'border-[#E0E0E0] dark:border-border'
                } dark:bg-background dark:text-white`}
              />
              {errors.razaoSocial && (
                <p className="text-xs text-red-600">{errors.razaoSocial}</p>
              )}
            </div>

            {/* Nome Fantasia */}
            <div className="space-y-2">
              <label className="text-sm text-[#1A1A1A] dark:text-white">
                Nome Fantasia <span className="text-[#777777] text-xs">(opcional)</span>
              </label>
              <input
                type="text"
                value={formData.nomeFantasia}
                onChange={(e) => handleChange('nomeFantasia', e.target.value)}
                placeholder="Nome fantasia"
                className="w-full px-4 py-2.5 border border-[#E0E0E0] dark:border-border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-background dark:text-white"
              />
            </div>

            {/* CNPJ */}
            <div className="space-y-2">
              <label className="text-sm text-[#1A1A1A] dark:text-white">
                CNPJ <span className="text-[#777777] text-xs">(opcional)</span>
              </label>
              <input
                type="text"
                value={formData.cnpj}
                onChange={(e) => handleCNPJChange(e.target.value)}
                placeholder="00.000.000/0000-00"
                maxLength={18}
                className="w-full px-4 py-2.5 border border-[#E0E0E0] dark:border-border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-background dark:text-white"
              />
            </div>

            {/* Telefone */}
            <div className="space-y-2">
              <label className="text-sm text-[#1A1A1A] dark:text-white">
                Telefone <span className="text-[#777777] text-xs">(opcional)</span>
              </label>
              <input
                type="text"
                value={formData.telefone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder="(00) 00000-0000"
                maxLength={15}
                className="w-full px-4 py-2.5 border border-[#E0E0E0] dark:border-border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-background dark:text-white"
              />
            </div>

            {/* Endereço */}
            <div className="space-y-2">
              <label className="text-sm text-[#1A1A1A] dark:text-white">
                Endereço <span className="text-[#777777] text-xs">(opcional)</span>
              </label>
              <input
                type="text"
                value={formData.endereco}
                onChange={(e) => handleChange('endereco', e.target.value)}
                placeholder="Endereço completo"
                className="w-full px-4 py-2.5 border border-[#E0E0E0] dark:border-border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-background dark:text-white"
              />
            </div>

            {/* E-mail */}
            <div className="space-y-2">
              <label className="text-sm text-[#1A1A1A] dark:text-white">
                E-mail <span className="text-[#777777] text-xs">(opcional)</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="email@exemplo.com"
                className={`w-full px-4 py-2.5 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.email
                    ? 'border-red-500'
                    : 'border-[#E0E0E0] dark:border-border'
                } dark:bg-background dark:text-white`}
              />
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email}</p>
              )}
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
              className="px-4 py-2 bg-primary text-white rounded-[8px] hover:bg-primary/90 transition-colors"
            >
              {editData ? 'Salvar Alterações' : 'Criar Fornecedor'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
