import { X, Upload, FileText } from 'lucide-react';
import { useState, useRef } from 'react';

interface CadastrarContratoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (contratoData: ContratoFormData) => void;
  onCreateFornecedor?: () => void;
}

export interface ContratoFormData {
  nomeArquivo: string;
  fornecedor: string;
  arquivo: File | null;
}

export function CadastrarContratoModal({ 
  isOpen, 
  onClose, 
  onSave,
  onCreateFornecedor 
}: CadastrarContratoModalProps) {
  const [formData, setFormData] = useState<ContratoFormData>({
    nomeArquivo: '',
    fornecedor: '',
    arquivo: null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock de fornecedores disponíveis
  const availableFornecedores = [
    { id: '1', name: 'Sementes Brasil Ltda' },
    { id: '2', name: 'Viveiro Flora Nativa' },
    { id: '3', name: 'Agro Sementes S.A.' },
    { id: '4', name: 'Instituto Verde' },
  ];

  const handleChange = (field: keyof ContratoFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleChange('arquivo', file);
      
      // Sugerir nome do arquivo baseado no nome do arquivo enviado
      if (!formData.nomeArquivo) {
        const fileName = file.name.replace(/\.[^/.]+$/, ''); // Remove extensão
        handleChange('nomeArquivo', fileName);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação dos campos obrigatórios
    if (!formData.nomeArquivo || !formData.fornecedor || !formData.arquivo) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    onSave(formData);
    onClose();
    
    // Reset form
    setFormData({
      nomeArquivo: '',
      fornecedor: '',
      arquivo: null,
    });
  };

  const handleCreateFornecedor = () => {
    if (onCreateFornecedor) {
      onCreateFornecedor();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-card rounded-[12px] shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E0E0E0] dark:border-border">
          <h2 className="text-[#1A1A1A] dark:text-white">Cadastrar Novo Contrato</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors"
          >
            <X className="w-5 h-5 text-[#777777] dark:text-[#B0B0B0]" />
          </button>
        </div>

        {/* Body - Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Nome do Arquivo */}
          <div className="space-y-2">
            <label className="text-sm text-[#1A1A1A] dark:text-white">
              Nome do Arquivo
            </label>
            <input
              type="text"
              value={formData.nomeArquivo}
              onChange={(e) => handleChange('nomeArquivo', e.target.value)}
              placeholder="Nome do Arquivo"
              className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              required
            />
          </div>

          {/* Fornecedor */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm text-[#1A1A1A] dark:text-white">
                Fornecedor
              </label>
              {onCreateFornecedor && (
                <button
                  type="button"
                  onClick={handleCreateFornecedor}
                  className="text-xs text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                >
                  Deseja criar um novo Fornecedor? <span className="underline">Clique aqui</span>
                </button>
              )}
            </div>
            <select
              value={formData.fornecedor}
              onChange={(e) => handleChange('fornecedor', e.target.value)}
              className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent appearance-none"
              required
            >
              <option value="">Nome do fornecedor</option>
              {availableFornecedores.map((fornecedor) => (
                <option key={fornecedor.id} value={fornecedor.name}>
                  {fornecedor.name}
                </option>
              ))}
            </select>
          </div>

          {/* Anexar Contrato */}
          <div className="space-y-2">
            <label className="text-sm text-[#1A1A1A] dark:text-white">
              Anexar Contrato
            </label>
            
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="hidden"
            />
            
            <button
              type="button"
              onClick={handleFileClick}
              className="w-full h-32 px-4 py-6 bg-[#F8F8F8] dark:bg-[#1E2621] border-2 border-dashed border-[#E0E0E0] dark:border-border rounded-[8px] hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] hover:border-green-600 transition-all flex flex-col items-center justify-center gap-2 group"
            >
              {formData.arquivo ? (
                <>
                  <FileText className="w-8 h-8 text-green-600" />
                  <div className="text-center">
                    <p className="text-sm text-[#1A1A1A] dark:text-white mb-1">
                      {formData.arquivo.name}
                    </p>
                    <p className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                      {(formData.arquivo.size / 1024).toFixed(2)} KB
                    </p>
                    <p className="text-xs text-green-600 mt-2">
                      Clique para trocar o arquivo
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <Upload className="w-8 h-8 text-[#777777] dark:text-[#B0B0B0] group-hover:text-green-600 transition-colors" />
                  <p className="text-sm text-[#777777] dark:text-[#B0B0B0] group-hover:text-green-600 transition-colors">
                    Cliquei aqui para enviar o arquivo
                  </p>
                  <p className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                    PDF, DOC, DOCX, JPG, PNG (máx. 10MB)
                  </p>
                </>
              )}
            </button>
          </div>

          {/* Footer com Botão */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full h-12 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors"
            >
              Criar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
