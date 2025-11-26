import { X, Upload } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Invoice {
  id: string;
  number: string;
  supplier: string;
  date: string;
  fileName: string;
  total: number;
  category: string;
  financier?: string;
  observations?: string;
}

interface EditInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (invoice: Invoice) => void;
  invoice: Invoice | null;
}

export function EditInvoiceModal({ isOpen, onClose, onSave, invoice }: EditInvoiceModalProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const [formData, setFormData] = useState<Invoice>({
    id: '',
    number: '',
    supplier: '',
    date: '',
    fileName: '',
    total: 0,
    category: '',
    financier: '',
    observations: ''
  });
  const [newFile, setNewFile] = useState<File | null>(null);

  useEffect(() => {
    if (invoice) {
      setFormData(invoice);
    }
  }, [invoice]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedInvoice = {
      ...formData,
      fileName: newFile ? newFile.name : formData.fileName
    };
    onSave(updatedInvoice);
    onClose();
    setNewFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewFile(e.target.files[0]);
    }
  };

  if (!isOpen || !invoice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className={`w-full max-w-[800px] rounded-[12px] overflow-hidden shadow-lg max-h-[90vh] flex flex-col ${
        isDarkMode ? 'bg-[#1A1A1A]' : 'bg-white'
      }`}>
        {/* Header Verde */}
        <div className="bg-[#0F3D26] h-[69px] flex items-center justify-between px-6 border-b border-[#E0E0E0] flex-shrink-0">
          <h2 className="text-white text-[18px]">Editar Nota Fiscal</h2>
          <button
            onClick={onClose}
            className="w-5 h-5 flex items-center justify-center text-white hover:text-white/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-auto flex flex-col">
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* NF Número */}
              <div className="space-y-1.5">
                <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  NF Número *
                </label>
                <input
                  type="text"
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                  placeholder="Ex: NF-2024-001"
                  required
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
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                    isDarkMode 
                      ? 'bg-[#0F3D26] border-[#3A3A3A] text-white' 
                      : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A]'
                  } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                />
              </div>
            </div>

            {/* Nome do Fornecedor */}
            <div className="space-y-1.5">
              <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Nome do Fornecedor *
              </label>
              <input
                type="text"
                value={formData.supplier}
                onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
                placeholder="Ex: Viveiro Amazônia Verde Ltda"
                required
                className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                  isDarkMode 
                    ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                    : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Categoria */}
              <div className="space-y-1.5">
                <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  Categoria *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                    isDarkMode 
                      ? 'bg-[#0F3D26] border-[#3A3A3A] text-white' 
                      : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A]'
                  } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="Mudas e Sementes">Mudas e Sementes</option>
                  <option value="Transporte e Logística">Transporte e Logística</option>
                  <option value="Equipamentos">Equipamentos</option>
                  <option value="Mão de Obra">Mão de Obra</option>
                  <option value="Consultoria">Consultoria</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              {/* Total */}
              <div className="space-y-1.5">
                <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  Total da NF (R$) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.total}
                  onChange={(e) => setFormData({ ...formData, total: parseFloat(e.target.value) })}
                  placeholder="0.00"
                  required
                  className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                    isDarkMode 
                      ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                      : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                  } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                />
              </div>
            </div>

            {/* Financiador */}
            <div className="space-y-1.5">
              <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Financiador (Opcional)
              </label>
              <input
                type="text"
                value={formData.financier || ''}
                onChange={(e) => setFormData({ ...formData, financier: e.target.value })}
                placeholder="Ex: Instituto Chico Mendes"
                className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                  isDarkMode 
                    ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                    : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
              />
            </div>

            {/* Observações */}
            <div className="space-y-1.5">
              <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Observações (Opcional)
              </label>
              <textarea
                value={formData.observations || ''}
                onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                placeholder="Adicione observações sobre a nota fiscal"
                rows={3}
                className={`w-full px-3 py-2 rounded-[8px] text-[14px] border transition-colors resize-none ${
                  isDarkMode 
                    ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                    : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
              />
            </div>

            {/* Arquivo */}
            <div className="space-y-1.5">
              <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Arquivo da Nota Fiscal
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
                      accept=".pdf,.xml"
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
                Formatos aceitos: PDF, XML
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className={`flex items-center justify-end gap-3 px-6 py-4 border-t ${
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
