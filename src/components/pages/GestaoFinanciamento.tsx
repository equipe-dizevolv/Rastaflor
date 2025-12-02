import { Plus, Search, Edit2, Trash2, Eye } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { AddFinanciamentoModal, FinanciamentoFormData } from '../modals/AddFinanciamentoModal';
import { ConfirmDeleteModal } from '../modals/ConfirmDeleteModal';

interface Financiamento {
  id: number;
  nomeFinanciador: string;
  nomeRepresentante: string;
  cnpj: string;
  telefone: string;
  endereco: string;
  email: string;
  numeroProjetos: number;
  valorInvestido: string;
  criadoEm: string;
}

export function GestaoFinanciamento() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingFinanciamento, setEditingFinanciamento] = useState<FinanciamentoFormData | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [financiamentoToDelete, setFinanciamentoToDelete] = useState<Financiamento | null>(null);

  const mockFinanciamentos: Financiamento[] = [
    {
      id: 1,
      nomeFinanciador: 'Banco Nacional de Desenvolvimento',
      nomeRepresentante: 'Carlos Alberto Silva',
      cnpj: '00.360.305/0001-04',
      telefone: '(11) 3456-7890',
      endereco: 'Av. Paulista, 1000 - São Paulo, SP',
      email: 'contato@bndes.gov.br',
      numeroProjetos: 5,
      valorInvestido: '500.000,00',
      criadoEm: '15/01/2024'
    },
    {
      id: 2,
      nomeFinanciador: 'Fundação Amazônia Sustentável',
      nomeRepresentante: 'Maria Helena Costa',
      cnpj: '09.354.935/0001-12',
      telefone: '(92) 3234-5678',
      endereco: 'Rua das Flores, 450 - Manaus, AM',
      email: 'financeiro@fas.org.br',
      numeroProjetos: 3,
      valorInvestido: '320.000,00',
      criadoEm: '22/01/2024'
    },
    {
      id: 3,
      nomeFinanciador: 'Instituto Brasileiro de Biodiversidade',
      nomeRepresentante: 'Roberto Santos',
      cnpj: '12.345.678/0001-90',
      telefone: '(61) 3322-1100',
      endereco: 'SQN 302, Bloco A - Brasília, DF',
      email: 'projetos@ibb.org.br',
      numeroProjetos: 7,
      valorInvestido: '750.000,00',
      criadoEm: '05/02/2024'
    },
    {
      id: 4,
      nomeFinanciador: 'Fundo Verde Internacional',
      nomeRepresentante: 'Ana Paula Oliveira',
      cnpj: '23.456.789/0001-01',
      telefone: '(21) 2567-8900',
      endereco: 'Av. Rio Branco, 120 - Rio de Janeiro, RJ',
      email: 'contato@fundoverde.int',
      numeroProjetos: 2,
      valorInvestido: '1.200.000,00',
      criadoEm: '10/02/2024'
    },
    {
      id: 5,
      nomeFinanciador: 'Cooperativa Agroflorestal do Sul',
      nomeRepresentante: 'José Fernando Lima',
      cnpj: '34.567.890/0001-23',
      telefone: '(47) 3344-5566',
      endereco: 'Rua das Palmeiras, 789 - Curitiba, PR',
      email: 'financeiro@coopsul.coop.br',
      numeroProjetos: 4,
      valorInvestido: '180.000,00',
      criadoEm: '18/02/2024'
    },
    {
      id: 6,
      nomeFinanciador: 'Ministério do Meio Ambiente',
      nomeRepresentante: 'Patrícia Mendes',
      cnpj: '45.678.901/0001-34',
      telefone: '(61) 2025-1000',
      endereco: 'Esplanada dos Ministérios - Brasília, DF',
      email: 'restauracao@mma.gov.br',
      numeroProjetos: 10,
      valorInvestido: '2.500.000,00',
      criadoEm: '25/02/2024'
    }
  ];

  const filteredFinanciamentos = mockFinanciamentos.filter(fin =>
    fin.nomeFinanciador.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fin.nomeRepresentante.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddFinanciamento = () => {
    setEditingFinanciamento(null);
    setIsAddModalOpen(true);
  };

  const handleEditFinanciamento = (fin: Financiamento) => {
    setEditingFinanciamento({
      id: fin.id,
      nomeFinanciador: fin.nomeFinanciador,
      nomeRepresentante: fin.nomeRepresentante,
      cnpj: fin.cnpj,
      telefone: fin.telefone,
      endereco: fin.endereco,
      email: fin.email,
      numeroProjetos: fin.numeroProjetos,
      valorInvestido: fin.valorInvestido
    });
    setIsAddModalOpen(true);
  };

  const handleSaveFinanciamento = (data: FinanciamentoFormData) => {
    if (editingFinanciamento) {
      toast.success('Financiamento atualizado com sucesso!', {
        description: `${data.nomeFinanciador} foi atualizado.`
      });
    } else {
      toast.success('Financiamento criado com sucesso!', {
        description: `${data.nomeFinanciador} foi adicionado ao sistema.`
      });
    }
    setIsAddModalOpen(false);
    setEditingFinanciamento(null);
    // TODO: Implementar lógica de salvamento no backend
  };

  const handleViewDetails = (fin: Financiamento) => {
    toast.info(`Visualizando detalhes de ${fin.nomeFinanciador}`, {
      description: 'Modal de detalhes será implementado'
    });
    // TODO: Implementar visualização de detalhes
  };

  const handleDeleteFinanciamento = (fin: Financiamento) => {
    setFinanciamentoToDelete(fin);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteFinanciamento = () => {
    if (financiamentoToDelete) {
      toast.success('Financiamento removido com sucesso!', {
        description: `${financiamentoToDelete.nomeFinanciador} foi removido do sistema.`
      });
      // TODO: Implementar lógica de exclusão
    }
    setIsDeleteModalOpen(false);
    setFinanciamentoToDelete(null);
  };

  const formatCurrency = (value: string) => {
    return `R$ ${value}`;
  };

  return (
    <div className="px-6 pb-6 space-y-6">
      {/* Search and Add Button */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777777] w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar por nome, e-mail ou representante..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[#E0E0E0] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent"
          />
        </div>
        <button
          onClick={handleAddFinanciamento}
          className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[12px] px-4 py-2 flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Novo Financiador</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#E0E0E0] rounded-[12px] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8F8F8] border-b border-[#E0E0E0]">
              <tr>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  CNPJ
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  E-mail
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Nº de projetos
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Criado em
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Financiamentos
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E0E0E0]">
              {filteredFinanciamentos.map((fin) => (
                <tr key={fin.id} className="hover:bg-[#F8F8F8] transition-colors">
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-[14px] text-[#1A1A1A] font-medium">
                        {fin.nomeFinanciador}
                      </p>
                      {fin.nomeRepresentante && (
                        <p className="text-[12px] text-[#777777]">
                          Rep.: {fin.nomeRepresentante}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[14px] text-[#777777]">
                    {fin.cnpj}
                  </td>
                  <td className="px-4 py-3 text-[14px] text-[#777777]">
                    {fin.email}
                  </td>
                  <td className="px-4 py-3 text-[14px] text-[#1A1A1A] text-center">
                    {fin.numeroProjetos}
                  </td>
                  <td className="px-4 py-3 text-[14px] text-[#777777] whitespace-nowrap">
                    {fin.criadoEm}
                  </td>
                  <td className="px-4 py-3 text-[14px] text-[#1A1A1A] font-medium">
                    {formatCurrency(fin.valorInvestido)}
                  </td>
                  <td className="px-4 py-3 text-[14px] whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditFinanciamento(fin)}
                        className="p-1.5 text-[#777777] hover:text-[#0F3D26] hover:bg-[#F0F0F0] rounded-lg transition-colors"
                        title="Editar"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteFinanciamento(fin)}
                        className="p-1.5 text-[#777777] hover:text-red-600 hover:bg-[#F0F0F0] rounded-lg transition-colors"
                        title="Excluir"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredFinanciamentos.length === 0 && (
          <div className="p-12 text-center">
            <div className="max-w-sm mx-auto">
              <div className="w-16 h-16 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[#777777]" />
              </div>
              <h3 className="text-[16px] font-medium text-[#1A1A1A] mb-2">
                Nenhum financiamento encontrado
              </h3>
              <p className="text-[14px] text-[#777777] mb-4">
                Tente ajustar os termos da sua busca
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-[#0F3D26] hover:underline text-[14px]"
              >
                Limpar busca
              </button>
            </div>
          </div>
        )}

        {/* Table Footer with Count */}
        {filteredFinanciamentos.length > 0 && (
          <div className="px-4 py-3 bg-[#F8F8F8] border-t border-[#E0E0E0]">
            <p className="text-[12px] text-[#777777]">
              Mostrando {filteredFinanciamentos.length} de {mockFinanciamentos.length} {mockFinanciamentos.length === 1 ? 'financiamento' : 'financiamentos'}
            </p>
          </div>
        )}
      </div>

      {/* Add/Edit Financiamento Modal */}
      <AddFinanciamentoModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingFinanciamento(null);
        }}
        onSave={handleSaveFinanciamento}
        editData={editingFinanciamento}
      />

      {/* Confirm Delete Modal */}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setFinanciamentoToDelete(null);
        }}
        onConfirm={confirmDeleteFinanciamento}
        title="Excluir Financiador"
        message="Tem certeza que deseja excluir este financiador?"
        itemName={financiamentoToDelete?.nomeFinanciador}
      />
    </div>
  );
}