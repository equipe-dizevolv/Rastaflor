import { X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

interface AddFinanciamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: FinanciamentoFormData) => void;
  editData?: FinanciamentoFormData | null;
}

export interface FinanciamentoFormData {
  id?: number;
  nomeFinanciador: string;
  nomeRepresentante: string;
  cnpj: string;
  telefone: string;
  endereco: string;
  email: string;
  numeroProjetos: number;
  valorInvestido: string;
}

export function AddFinanciamentoModal({ isOpen, onClose, onSave, editData }: AddFinanciamentoModalProps) {
  const [formData, setFormData] = useState<FinanciamentoFormData>(
    editData || {
      nomeFinanciador: '',
      nomeRepresentante: '',
      cnpj: '',
      telefone: '',
      endereco: '',
      email: '',
      numeroProjetos: 0,
      valorInvestido: ''
    }
  );

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleChange = (field: keyof FinanciamentoFormData, value: string) => {
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

  const formatCurrency = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const amount = parseFloat(numbers) / 100;
    return amount.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handleCNPJChange = (value: string) => {
    const formatted = formatCNPJ(value);
    handleChange('cnpj', formatted);
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhone(value);
    handleChange('telefone', formatted);
  };

  const handleCurrencyChange = (value: string) => {
    const formatted = formatCurrency(value);
    handleChange('valorInvestido', formatted);
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nomeFinanciador.trim()) {
      newErrors.nomeFinanciador = 'Nome do financiador é obrigatório';
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
      nomeFinanciador: '',
      nomeRepresentante: '',
      cnpj: '',
      telefone: '',
      endereco: '',
      email: '',
      numeroProjetos: 0,
      valorInvestido: ''
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
            {editData ? 'Editar Financiador' : 'Cadastro novo Financiador'}
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
            {/* Nome do Financiador */}
            <div className="space-y-2">
              <label className="text-sm text-[#1A1A1A] dark:text-white">
                Nome do Financiador <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={formData.nomeFinanciador}
                onChange={(e) => handleChange('nomeFinanciador', e.target.value)}
                placeholder="Nome do financiador"
                className={`w-full px-4 py-2.5 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.nomeFinanciador
                    ? 'border-red-500'
                    : 'border-[#E0E0E0] dark:border-border'
                } dark:bg-background dark:text-white`}
              />
              {errors.nomeFinanciador && (
                <p className="text-xs text-red-600">{errors.nomeFinanciador}</p>
              )}
            </div>

            {/* Nome do Representante */}
            <div className="space-y-2">
              <label className="text-sm text-[#1A1A1A] dark:text-white">
                Nome do Representante <span className="text-[#777777] text-xs">(opcional)</span>
              </label>
              <input
                type="text"
                value={formData.nomeRepresentante}
                onChange={(e) => handleChange('nomeRepresentante', e.target.value)}
                placeholder="Nome do representante"
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
                placeholder="CNPJ do financiador"
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
                placeholder="Telefone do financiador"
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
                placeholder="Endereço do financiador"
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
                placeholder="E-mail do financiador"
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

            {/* Valor Investido */}
            <div className="space-y-2">
              <label className="text-sm text-[#1A1A1A] dark:text-white">
                Valor Investido <span className="text-[#777777] text-xs">(opcional)</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777777] dark:text-[#B0B0B0]">
                  R$
                </span>
                <input
                  type="text"
                  value={formData.valorInvestido}
                  onChange={(e) => handleCurrencyChange(e.target.value)}
                  placeholder="0,00"
                  className="w-full pl-12 pr-4 py-2.5 border border-[#E0E0E0] dark:border-border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-background dark:text-white"
                />
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
              className="px-4 py-2 bg-primary text-white rounded-[8px] hover:bg-primary/90 transition-colors"
            >
              {editData ? 'Salvar Alterações' : 'Criar Financiamento'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}