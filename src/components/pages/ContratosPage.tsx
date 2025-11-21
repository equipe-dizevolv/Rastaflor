import { useState } from 'react';
import { FileText, Plus, Eye, Download, Trash2 } from 'lucide-react';
import { CadastrarContratoModal, ContratoFormData } from '../modals/CadastrarContratoModal';

interface Contrato {
  id: string;
  nomeArquivo: string;
  fornecedor: string;
  dataUpload: string;
  tamanho: string;
  tipo: string;
}

export function ContratosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFornecedorModalOpen, setIsFornecedorModalOpen] = useState(false);
  
  // Mock de contratos cadastrados
  const [contratos, setContratos] = useState<Contrato[]>([
    {
      id: '1',
      nomeArquivo: 'Contrato Fornecimento Sementes 2025',
      fornecedor: 'Sementes Brasil Ltda',
      dataUpload: '15/11/2025',
      tamanho: '2.5 MB',
      tipo: 'PDF',
    },
    {
      id: '2',
      nomeArquivo: 'Acordo Viveiro Flora',
      fornecedor: 'Viveiro Flora Nativa',
      dataUpload: '10/11/2025',
      tamanho: '1.8 MB',
      tipo: 'PDF',
    },
    {
      id: '3',
      nomeArquivo: 'Parceria Agro Sementes',
      fornecedor: 'Agro Sementes S.A.',
      dataUpload: '05/11/2025',
      tamanho: '3.2 MB',
      tipo: 'DOCX',
    },
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveContrato = (formData: ContratoFormData) => {
    const newContrato: Contrato = {
      id: Date.now().toString(),
      nomeArquivo: formData.nomeArquivo,
      fornecedor: formData.fornecedor,
      dataUpload: new Date().toLocaleDateString('pt-BR'),
      tamanho: formData.arquivo ? `${(formData.arquivo.size / (1024 * 1024)).toFixed(2)} MB` : 'N/A',
      tipo: formData.arquivo?.name.split('.').pop()?.toUpperCase() || 'PDF',
    };

    setContratos([newContrato, ...contratos]);
  };

  const handleCreateFornecedor = () => {
    // Fecha o modal de contrato e abre o modal de fornecedor
    setIsModalOpen(false);
    setIsFornecedorModalOpen(true);
  };

  const handleView = (id: string) => {
    console.log('Visualizar contrato:', id);
    // TODO: Implementar visualização
  };

  const handleDownload = (id: string) => {
    console.log('Download contrato:', id);
    // TODO: Implementar download
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este contrato?')) {
      setContratos(contratos.filter(c => c.id !== id));
    }
  };

  return (
    <div className="px-6 pb-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[#1A1A1A] dark:text-white flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-600" />
            Contratos
          </h2>
          <p className="text-[#777777] dark:text-[#B0B0B0]">
            Gerenciamento de contratos e documentos
          </p>
        </div>

        <button
          onClick={handleOpenModal}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Novo Contrato</span>
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[12px] shadow-sm overflow-hidden">
        {/* Card Header */}
        <div className="p-6 border-b border-[#E0E0E0] dark:border-border">
          <h3 className="text-[#1A1A1A] dark:text-white">
            Contratos Cadastrados ({contratos.length})
          </h3>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E0E0E0] dark:border-border bg-[#F8F8F8] dark:bg-[#1E2621]">
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Nome do Arquivo
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Fornecedor
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Data de Upload
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Tamanho
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Tipo
                </th>
                <th className="px-4 py-3 text-right text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {contratos.map((contrato) => (
                <tr
                  key={contrato.id}
                  className="border-b border-[#E0E0E0] dark:border-border hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                      <span className="text-sm text-[#1A1A1A] dark:text-white">
                        {contrato.nomeArquivo}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#1A1A1A] dark:text-white">
                      {contrato.fornecedor}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#777777] dark:text-[#B0B0B0]">
                      {contrato.dataUpload}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#777777] dark:text-[#B0B0B0]">
                      {contrato.tamanho}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-[4px] bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 text-xs">
                      {contrato.tipo}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleView(contrato.id)}
                        className="p-2 rounded-[8px] hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] transition-colors"
                        title="Visualizar"
                      >
                        <Eye className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                      </button>
                      <button
                        onClick={() => handleDownload(contrato.id)}
                        className="p-2 rounded-[8px] hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] transition-colors"
                        title="Download"
                      >
                        <Download className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                      </button>
                      <button
                        onClick={() => handleDelete(contrato.id)}
                        className="p-2 rounded-[8px] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        title="Excluir"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {contratos.length === 0 && (
          <div className="p-12 text-center">
            <FileText className="w-12 h-12 text-[#E0E0E0] dark:text-border mx-auto mb-4" />
            <h3 className="text-[#1A1A1A] dark:text-white mb-2">
              Nenhum contrato cadastrado
            </h3>
            <p className="text-sm text-[#777777] dark:text-[#B0B0B0] mb-4">
              Clique em "Novo Contrato" para adicionar seu primeiro contrato
            </p>
            <button
              onClick={handleOpenModal}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Criar Primeiro Contrato</span>
            </button>
          </div>
        )}
      </div>

      {/* Modal Cadastrar Contrato */}
      <CadastrarContratoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveContrato}
        onCreateFornecedor={handleCreateFornecedor}
      />

      {/* TODO: Modal Criar Fornecedor */}
      {isFornecedorModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-card rounded-[12px] shadow-xl w-full max-w-md p-6">
            <h2 className="text-[#1A1A1A] dark:text-white mb-4">Criar Novo Fornecedor</h2>
            <p className="text-sm text-[#777777] dark:text-[#B0B0B0] mb-4">
              Modal de criação de fornecedor será implementado aqui
            </p>
            <button
              onClick={() => {
                setIsFornecedorModalOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors"
            >
              Voltar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
