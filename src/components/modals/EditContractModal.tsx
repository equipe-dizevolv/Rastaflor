import { X, Upload } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Contract {
  id: string;
  name: string;
  createdBy: string;
  date: string;
  fileName: string;
}

interface EditContractModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (contract: Contract) => void;
  contract: Contract | null;
}

export function EditContractModal({ isOpen, onClose, onSave, contract }: EditContractModalProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const [formData, setFormData] = useState<Contract>({
    id: '',
    name: '',
    createdBy: '',
    date: '',
    fileName: ''
  });
  const [newFile, setNewFile] = useState<File | null>(null);

  useEffect(() => {
    if (contract) {
      setFormData(contract);
    }
  }, [contract]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedContract = {
      ...formData,
      fileName: newFile ? newFile.name : formData.fileName
    };
    onSave(updatedContract);
    onClose();
    setNewFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewFile(e.target.files[0]);
    }
  };

  if (!isOpen || !contract) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className={`w-full max-w-[700px] rounded-[12px] overflow-hidden shadow-lg ${
        isDarkMode ? 'bg-[#1A1A1A]' : 'bg-white'
      }`}>
        {/* Header Verde */}
        <div className="bg-[#0F3D26] h-[69px] flex items-center justify-between px-6 border-b border-[#E0E0E0]">
          <h2 className="text-white text-[18px]">Editar Contrato</h2>
          <button
            onClick={onClose}
            className="w-5 h-5 flex items-center justify-center text-white hover:text-white/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Nome do Contrato */}
          <div className="space-y-1.5">
            <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              Nome do Contrato *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Contrato de Restauração - Fazenda São José"
              required
              className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                isDarkMode 
                  ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                  : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
              } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Criado Por */}
            <div className="space-y-1.5">
              <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Criado Por
              </label>
              <input
                type="text"
                value={formData.createdBy}
                onChange={(e) => setFormData({ ...formData, createdBy: e.target.value })}
                placeholder="Nome do responsável"
                className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                  isDarkMode 
                    ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                    : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
              />
            </div>

            {/* Data */}
            <div className="space-y-1.5">
              <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Data *
              </label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                placeholder="DD/MM/AAAA"
                required
                className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                  isDarkMode 
                    ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                    : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
              />
            </div>
          </div>

          {/* Arquivo */}
          <div className="space-y-1.5">
            <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              Arquivo do Contrato
            </label>
            <div className={`border-2 border-dashed rounded-[8px] p-4 transition-colors ${
              isDarkMode 
                ? 'border-[#3A3A3A] hover:border-[#0F3D26]' 
                : 'border-[#E0E0E0] hover:border-[#0F3D26]'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className={`text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    {newFile ? newFile.name : formData.fileName}
                  </p>
                  <p className={`text-xs ${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                    {newFile ? 'Novo arquivo selecionado' : 'Arquivo atual'}
                  </p>
                </div>
                <label className="cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <div className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[8px] px-4 py-2 inline-flex items-center gap-2 text-[14px] transition-colors">
                    <Upload className="w-4 h-4" />
                    Trocar Arquivo
                  </div>
                </label>
              </div>
            </div>
            <p className={`text-xs ${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
              Formatos aceitos: PDF, DOC, DOCX
            </p>
          </div>

          {/* Footer */}
          <div className={`flex items-center justify-end gap-3 pt-4 border-t ${
            isDarkMode ? 'border-[#3A3A3A]' : 'border-[#E0E0E0]'
          }`}>
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2 border rounded-[12px] hover:bg-opacity-80 transition-colors text-[14px] ${
                isDarkMode 
                  ? 'bg-transparent border-[#3A3A3A] text-white hover:bg-[#2A2A2A]' 
                  : 'bg-white border-[#E0E0E0] text-[#1A1A1A] hover:bg-[#F8F8F8]'
              }`}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#0F3D26] text-white rounded-[12px] hover:bg-[#0F3D26]/90 transition-colors text-[14px]"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
