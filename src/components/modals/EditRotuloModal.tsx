import { X, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Calendar as CalendarComponent } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { format, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface EditRotuloModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (labelData: LabelFormData) => void;
  initialData: SavedLabel | null;
}

export interface SavedLabel {
  id: string;
  lote: string;
  nomePopular: string;
  nomeCientifico: string;
  nomeComprador: string;
  dataColeta: string;
  peso: string;
  renasem?: string;
  cnpj?: string;
  porcentagemGerminacao?: string;
  validadeTeste?: string;
  municipioColeta?: string;
  destino?: string;
}

export interface LabelFormData {
  nomePopular: string;
  nomeCientifico: string;
  peso: string;
  renasem: string;
  cnpj: string;
  nomeComprador: string;
  lote: string;
  porcentagemGerminacao: string;
  validadeTeste: string;
  municipioColeta: string;
  destino: string;
  dataColeta: Date | undefined;
}

export function EditRotuloModal({ isOpen, onClose, onSave, initialData }: EditRotuloModalProps) {
  const [formData, setFormData] = useState<LabelFormData>({
    nomePopular: '',
    nomeCientifico: '',
    peso: '',
    renasem: '',
    cnpj: '',
    nomeComprador: '',
    lote: '',
    porcentagemGerminacao: '',
    validadeTeste: '',
    municipioColeta: '',
    destino: '',
    dataColeta: undefined
  });

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  // Carregar dados iniciais quando o modal abrir
  useEffect(() => {
    if (isOpen && initialData) {
      // Converter data de string para Date
      let dataObj: Date | undefined;
      try {
        dataObj = parse(initialData.dataColeta, 'dd/MM/yyyy', new Date());
      } catch {
        dataObj = undefined;
      }

      setFormData({
        nomePopular: initialData.nomePopular || '',
        nomeCientifico: initialData.nomeCientifico || '',
        peso: initialData.peso || '',
        renasem: initialData.renasem || '',
        cnpj: initialData.cnpj || '',
        nomeComprador: initialData.nomeComprador || '',
        lote: initialData.lote || '',
        porcentagemGerminacao: initialData.porcentagemGerminacao || '',
        validadeTeste: initialData.validadeTeste || '',
        municipioColeta: initialData.municipioColeta || '',
        destino: initialData.destino || '',
        dataColeta: dataObj
      });
    }
  }, [isOpen, initialData]);

  const handleChange = (field: keyof LabelFormData, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação dos campos obrigatórios
    if (!formData.nomePopular || !formData.nomeCientifico || !formData.peso) {
      alert('Por favor, preencha todos os campos obrigatórios (*)');
      return;
    }

    onSave(formData);
    onClose();
  };

  const formatCNPJ = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 14) {
      return numbers.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
        '$1.$2.$3/$4-$5'
      );
    }
    return value;
  };

  const handleCNPJChange = (value: string) => {
    const formatted = formatCNPJ(value);
    handleChange('cnpj', formatted);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-card rounded-[12px] shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header - Verde seguindo padrão dos outros modais de edição */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0F3D26] sticky top-0 z-10 rounded-t-[12px]">
          <h2 className="text-white">Editar Rótulo</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-[8px] hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Body - Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Coluna Esquerda */}
            <div className="space-y-4">
              {/* Nome popular */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Nome popular <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={formData.nomePopular}
                  onChange={(e) => handleChange('nomePopular', e.target.value)}
                  placeholder="Ex: Andiroba"
                  className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  required
                />
              </div>

              {/* Nome científico */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Nome científico <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={formData.nomeCientifico}
                  onChange={(e) => handleChange('nomeCientifico', e.target.value)}
                  placeholder="Ex: Carapa guianensis"
                  className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent italic"
                  required
                />
              </div>

              {/* Peso na embalagem */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Peso na embalagem <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={formData.peso}
                    onChange={(e) => handleChange('peso', e.target.value)}
                    placeholder="Ex: 12.5"
                    className="w-full h-10 px-3 py-2 pr-12 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    required
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#777777] dark:text-[#B0B0B0]">
                    kg
                  </span>
                </div>
              </div>

              {/* RENASEM do produtor */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  RENASEM do produtor
                </label>
                <input
                  type="text"
                  value={formData.renasem}
                  onChange={(e) => handleChange('renasem', e.target.value)}
                  placeholder="Ex: RJ-12345/2024"
                  className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              {/* CNPJ do produtor */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  CNPJ do produtor
                </label>
                <input
                  type="text"
                  value={formData.cnpj}
                  onChange={(e) => handleCNPJChange(e.target.value)}
                  placeholder="Ex: 12.345.678/0001-90"
                  maxLength={18}
                  className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent font-mono"
                />
              </div>

              {/* Nome do comprador */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Nome do comprador
                </label>
                <input
                  type="text"
                  value={formData.nomeComprador}
                  onChange={(e) => handleChange('nomeComprador', e.target.value)}
                  placeholder="Ex: João Silva"
                  className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="space-y-4">
              {/* Lote de sementes */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Lote de sementes
                </label>
                <input
                  type="text"
                  value={formData.lote}
                  onChange={(e) => handleChange('lote', e.target.value)}
                  placeholder="Ex: AND-001"
                  className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent font-mono"
                />
              </div>

              {/* Porcentagem de germinação */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Porcentagem de germinação
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="1"
                    min="0"
                    max="100"
                    value={formData.porcentagemGerminacao}
                    onChange={(e) => handleChange('porcentagemGerminacao', e.target.value)}
                    placeholder="Ex: 85"
                    className="w-full h-10 px-3 py-2 pr-10 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#777777] dark:text-[#B0B0B0]">
                    %
                  </span>
                </div>
              </div>

              {/* Validade | Teste de germinação */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Validade | Teste de germinação
                </label>
                <input
                  type="text"
                  value={formData.validadeTeste}
                  onChange={(e) => handleChange('validadeTeste', e.target.value)}
                  placeholder="Ex: 12 meses ou 31/12/2025"
                  className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              {/* Município de coleta */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Município de coleta
                </label>
                <input
                  type="text"
                  value={formData.municipioColeta}
                  onChange={(e) => handleChange('municipioColeta', e.target.value)}
                  placeholder="Ex: Rio de Janeiro - RJ"
                  className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              {/* Destino */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Destino
                </label>
                <input
                  type="text"
                  value={formData.destino}
                  onChange={(e) => handleChange('destino', e.target.value)}
                  placeholder="Ex: Viveiro Municipal"
                  className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              {/* Data da Coleta */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Data da Coleta
                </label>
                <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] transition-colors text-left flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                      <span className={!formData.dataColeta ? 'text-[#777777] dark:text-[#B0B0B0]' : ''}>
                        {formData.dataColeta
                          ? format(formData.dataColeta, 'dd/MM/yyyy', { locale: ptBR })
                          : 'Selecione a data'
                        }
                      </span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={formData.dataColeta}
                      onSelect={(date) => {
                        handleChange('dataColeta', date);
                        setIsDatePickerOpen(false);
                      }}
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-[#E0E0E0] dark:border-border">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-white dark:bg-transparent border border-[#E0E0E0] dark:border-border text-[#1A1A1A] dark:text-white rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] transition-colors text-sm"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors text-sm"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
