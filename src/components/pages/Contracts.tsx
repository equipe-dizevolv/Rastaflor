import { useState } from 'react';
import { ContractTable } from '../contracts/ContractTable';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

export function Contracts() {
  const [contracts] = useState([
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
    console.log('Criar novo contrato');
  };

  const handleDownloadContract = (contractId: string) => {
    console.log('Download contract:', contractId);
  };

  const handleEditContract = (contractId: string) => {
    console.log('Edit contract:', contractId);
  };

  const handleDeleteContract = (contractId: string) => {
    console.log('Delete contract:', contractId);
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
    </div>
  );
}