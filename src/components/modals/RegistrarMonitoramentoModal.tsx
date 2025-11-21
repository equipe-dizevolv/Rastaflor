import { X, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Calendar as CalendarComponent } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface RegistrarMonitoramentoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (monitoringData: MonitoringFormData) => void;
}

export interface MonitoringFormData {
  matrizId: string;
  dataMonitoramento: Date | undefined;
  responsavel: string;
  estagios: string[];
  observacoes: string;
}

const ESTAGIOS_DISPONIVEIS = [
  { id: 'vegetativo', label: 'Vegetativo', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' },
  { id: 'floracao', label: 'Floração', color: 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400' },
  { id: 'frutificacao', label: 'Frutificação', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400' },
  { id: 'fruto-verde', label: 'Fruto Verde', color: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' },
  { id: 'fruto-maduro', label: 'Fruto Maduro', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400' },
  { id: 'dispersao', label: 'Dispersão', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400' },
];

export function RegistrarMonitoramentoModal({ isOpen, onClose, onSave }: RegistrarMonitoramentoModalProps) {
  const [formData, setFormData] = useState<MonitoringFormData>({
    matrizId: '',
    dataMonitoramento: undefined,
    responsavel: '',
    estagios: [],
    observacoes: '',
  });

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  // Mock de matrizes disponíveis
  const availableMatrizes = [
    { id: '1', name: 'Fazenda São João - Área A - Matriz #001 (Ipê-amarelo)' },
    { id: '2', name: 'Fazenda São João - Área A - Matriz #002 (Jatobá)' },
    { id: '3', name: 'Sítio Primavera - Área B - Matriz #003 (Cedro)' },
    { id: '4', name: 'Chácara Verde - Área A - Matriz #004 (Peroba-rosa)' },
  ];

  // Mock de responsáveis
  const availableResponsaveis = [
    { id: '1', name: 'João Silva' },
    { id: '2', name: 'Maria Santos' },
    { id: '3', name: 'Pedro Oliveira' },
    { id: '4', name: 'Ana Costa' },
  ];

  const handleChange = (field: keyof MonitoringFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleToggleEstagio = (estagioId: string) => {
    setFormData(prev => ({
      ...prev,
      estagios: prev.estagios.includes(estagioId)
        ? prev.estagios.filter(e => e !== estagioId)
        : [...prev.estagios, estagioId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação dos campos obrigatórios
    if (!formData.matrizId || !formData.dataMonitoramento || !formData.responsavel || formData.estagios.length === 0) {
      alert('Por favor, preencha todos os campos obrigatórios (*)');
      return;
    }

    onSave(formData);
    onClose();
    
    // Reset form
    setFormData({
      matrizId: '',
      dataMonitoramento: undefined,
      responsavel: '',
      estagios: [],
      observacoes: '',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-card rounded-[12px] shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E0E0E0] dark:border-border sticky top-0 bg-white dark:bg-card z-10">
          <h2 className="text-[#1A1A1A] dark:text-white">Registrar Novo Monitoramento</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors"
          >
            <X className="w-5 h-5 text-[#777777] dark:text-[#B0B0B0]" />
          </button>
        </div>

        {/* Body - Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Seção: Identificação */}
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-[#1A1A1A] dark:text-white mb-1">Identificação</h3>
              <p className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                Informações sobre o local e data do monitoramento
              </p>
            </div>

            {/* Matriz ou Local Monitorado */}
            <div className="space-y-2">
              <label className="text-sm text-[#1A1A1A] dark:text-white">
                Matriz ou Local Monitorado <span className="text-red-600">*</span>
              </label>
              <select
                value={formData.matrizId}
                onChange={(e) => handleChange('matrizId', e.target.value)}
                className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent appearance-none"
                required
              >
                <option value="">Selecione a matriz</option>
                {availableMatrizes.map((matriz) => (
                  <option key={matriz.id} value={matriz.id}>
                    {matriz.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Data e Responsável */}
            <div className="grid grid-cols-2 gap-4">
              {/* Data do Monitoramento */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Data do Monitoramento <span className="text-red-600">*</span>
                </label>
                <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] transition-colors text-left flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                      <span className={!formData.dataMonitoramento ? 'text-[#777777] dark:text-[#B0B0B0]' : ''}>
                        {formData.dataMonitoramento
                          ? format(formData.dataMonitoramento, 'dd/MM/yyyy', { locale: ptBR })
                          : 'Selecione'
                        }
                      </span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={formData.dataMonitoramento}
                      onSelect={(date) => {
                        handleChange('dataMonitoramento', date);
                        setIsDatePickerOpen(false);
                      }}
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Responsável */}
              <div className="space-y-2">
                <label className="text-sm text-[#1A1A1A] dark:text-white">
                  Responsável <span className="text-red-600">*</span>
                </label>
                <select
                  value={formData.responsavel}
                  onChange={(e) => handleChange('responsavel', e.target.value)}
                  className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent appearance-none"
                  required
                >
                  <option value="">Selecione</option>
                  {availableResponsaveis.map((resp) => (
                    <option key={resp.id} value={resp.name}>
                      {resp.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Seção: Observações */}
          <div className="space-y-4">
            <div>
              <h3 className="text-[#1A1A1A] dark:text-white mb-1">Observações</h3>
              <p className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                Estágios observados e anotações
              </p>
            </div>

            {/* Estágio(s) Observado(s) */}
            <div className="space-y-2">
              <label className="text-sm text-[#1A1A1A] dark:text-white">
                Estágio(s) Observado(s) <span className="text-red-600">*</span>
              </label>
              
              <div className="flex flex-wrap gap-2">
                {ESTAGIOS_DISPONIVEIS.map((estagio) => {
                  const isSelected = formData.estagios.includes(estagio.id);
                  return (
                    <button
                      key={estagio.id}
                      type="button"
                      onClick={() => handleToggleEstagio(estagio.id)}
                      className={`px-3 py-1.5 rounded-[6px] text-xs transition-all ${
                        isSelected
                          ? estagio.color
                          : 'bg-[#F8F8F8] dark:bg-[#1E2621] text-[#777777] dark:text-[#B0B0B0] hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A]'
                      }`}
                    >
                      {estagio.label}
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-[#777777] dark:text-[#B0B0B0] italic">
                Clique nos estágios para selecionar (permite múltipla seleção)
              </p>
            </div>

            {/* Observações Adicionais */}
            <div className="space-y-2">
              <label className="text-sm text-[#1A1A1A] dark:text-white">
                Observações Adicionais
              </label>
              <textarea
                value={formData.observacoes}
                onChange={(e) => handleChange('observacoes', e.target.value)}
                placeholder="Condições climáticas, densidade de florescimento, saúde da planta..."
                rows={4}
                className="w-full px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
              />
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
              Salvar Monitoramento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
