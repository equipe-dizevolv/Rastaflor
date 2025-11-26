import { useState } from 'react';
import { X, Bug } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { toast } from 'sonner@2.0.3';

interface ReportBugModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReportBugModal({ isOpen, onClose }: ReportBugModalProps) {
  const [formData, setFormData] = useState({
    pagina: '',
    descricao: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.pagina.trim() || !formData.descricao.trim()) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    // TODO: Enviar para o backend
    console.log('Bug reportado:', formData);
    
    toast.success('Bug reportado com sucesso!', {
      description: 'Nossa equipe técnica irá analisar o problema.'
    });

    // Limpar formulário
    setFormData({
      pagina: '',
      descricao: '',
    });

    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[12px] shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E0E0E0]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <Bug className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A]">Reportar Bug</h2>
              <p className="text-sm text-[#777777]">Descreva o problema encontrado</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#777777] hover:text-[#1A1A1A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Página do Bug */}
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
              Página do Bug <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="Ex: Dashboard, Propriedades, Coletas..."
              value={formData.pagina}
              onChange={(e) => handleChange('pagina', e.target.value)}
              className="rounded-lg border-[#E0E0E0]"
              required
            />
            <p className="text-xs text-[#999999] mt-1">
              Informe em qual página/tela o bug ocorreu
            </p>
          </div>

          {/* Descrição do Bug */}
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
              Descreva o bug <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Descreva detalhadamente o problema que você encontrou..."
              value={formData.descricao}
              onChange={(e) => handleChange('descricao', e.target.value)}
              className="w-full min-h-[120px] px-3 py-2 rounded-lg border border-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent resize-none text-sm"
              required
            />
            <p className="text-xs text-[#999999] mt-1">
              Quanto mais detalhes, melhor poderemos ajudar
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex gap-2">
              <Bug className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-900 font-medium">Dicas para um bom reporte:</p>
                <ul className="text-xs text-blue-800 mt-2 space-y-1 list-disc list-inside">
                  <li>Descreva o que você estava fazendo</li>
                  <li>Informe a mensagem de erro (se houver)</li>
                  <li>Mencione se o erro é recorrente</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 rounded-lg"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 rounded-lg"
              style={{ backgroundColor: '#0F3D26', color: 'white' }}
            >
              Enviar Reporte
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
