import { useState } from 'react';
import { ContractTable } from '../contracts/ContractTable';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { CadastrarContratoModal, ContratoFormData } from '../modals/CadastrarContratoModal';
import { EditContractModal } from '../modals/EditContractModal';

export function Contracts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFornecedorModalOpen, setIsFornecedorModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedContract, setSelectedContract] = useState<any>(null);
  
  const [contracts, setContracts] = useState([
    {
      id: '1',
      name: 'Contrato de Restauração - Fazenda São José',
      createdBy: 'João Silva',
      date: '12/10/2024',
      fileName: 'contrato_fazenda_sao_jose.pdf'
    },
    {
      id: '2',
      name: 'Acordo de Compensação Ambiental - Mineradora XYZ',
      createdBy: 'Maria Santos',
      date: '08/10/2024',
      fileName: 'acordo_compensacao_xyz.pdf'
    },
    {
      id: '3',
      name: 'Parceria Técnica - Instituto Verde',
      createdBy: 'Carlos Oliveira',
      date: '05/10/2024',
      fileName: 'parceria_instituto_verde.pdf'
    },
    {
      id: '4',
      name: 'Contrato de Fornecimento de Mudas',
      createdBy: 'Ana Costa',
      date: '02/10/2024',
      fileName: 'fornecimento_mudas.pdf'
    }
  ]);

  const handleCreateContract = () => {
    setIsModalOpen(true);
  };

  const handleSaveContract = (formData: ContratoFormData) => {
    const newContract = {
      id: Date.now().toString(),
      name: formData.nomeArquivo,
      createdBy: 'Usuário Atual', // In a real app, this would come from auth
      date: new Date().toLocaleDateString('pt-BR'),
      fileName: formData.arquivo?.name || 'documento.pdf'
    };
    
    setContracts([newContract, ...contracts]);
  };

  const handleCreateFornecedor = () => {
    setIsModalOpen(false);
    setIsFornecedorModalOpen(true);
  };

  const handleCloseFornecedorModal = () => {
    setIsFornecedorModalOpen(false);
    setIsModalOpen(true);
  };

  const handleDownloadContract = (contractId: string) => {
    console.log('Download contract:', contractId);
  };

  const handleEditContract = (contractId: string) => {
    const contract = contracts.find(c => c.id === contractId);
    if (contract) {
      setSelectedContract(contract);
      setIsEditModalOpen(true);
    }
  };

  const handleUpdateContract = (updatedContract: any) => {
    setContracts(contracts.map(c => 
      c.id === updatedContract.id ? updatedContract : c
    ));
    setIsEditModalOpen(false);
    setSelectedContract(null);
  };

  const handleDeleteContract = (contractId: string) => {
    if (confirm('Tem certeza que deseja excluir este contrato?')) {
      setContracts(contracts.filter(c => c.id !== contractId));
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground">Gestão de Contratos</h1>
          <p className="text-secondary mt-1">Gerencie todos os contratos e acordos do projeto</p>
        </div>
        <Button 
          onClick={handleCreateContract}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="w-4 h-4 mr-2" />
          Criar Novo Contrato
        </Button>
      </div>

      {/* Contracts Table */}
      <ContractTable
        contracts={contracts}
        onDownload={handleDownloadContract}
        onEdit={handleEditContract}
        onDelete={handleDeleteContract}
      />

      {/* Modal Cadastrar Contrato */}
      <CadastrarContratoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveContract}
        onCreateFornecedor={handleCreateFornecedor}
      />

      {/* Modal Criar Fornecedor (Placeholder) */}
      {isFornecedorModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-card rounded-[12px] shadow-xl w-full max-w-md p-6">
            <h2 className="text-[#1A1A1A] dark:text-white mb-4">Criar Novo Fornecedor</h2>
            <p className="text-sm text-[#777777] dark:text-[#B0B0B0] mb-4">
              Modal de criação de fornecedor será implementado aqui
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setIsFornecedorModalOpen(false)}
                className="flex-1 px-4 py-2 bg-white dark:bg-transparent border border-[#E0E0E0] dark:border-border text-[#1A1A1A] dark:text-white rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleCloseFornecedorModal}
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors"
              >
                Voltar para Contrato
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Contract Modal */}
      <EditContractModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedContract(null);
        }}
        onSave={handleUpdateContract}
        contract={selectedContract}
      />
    </div>
  );
}