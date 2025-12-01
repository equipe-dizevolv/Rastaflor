import { Plus, Search, Edit2, Trash2, Eye } from 'lucide-react';
import { useState } from 'react';
import { AddFornecedorModal, FornecedorFormData } from '../modals/AddFornecedorModal';
import { toast } from 'sonner@2.0.3';
import { ConfirmDeleteModal } from '../modals/ConfirmDeleteModal';

interface Fornecedor {
  id: number;
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  telefone: string;
  endereco: string;
  email: string;
  projetosAssociados: number;
  criadoEm: string;
}

export function GestaoFornecedores() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFornecedor, setEditingFornecedor] = useState<FornecedorFormData | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [fornecedorToDelete, setFornecedorToDelete] = useState<Fornecedor | null>(null);
  
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([
    {
      id: 1,
      razaoSocial: 'Viveiro Natureza Ltda',
      nomeFantasia: 'Viveiro Natureza',
      cnpj: '12.345.678/0001-90',
      telefone: '(11) 98765-4321',
      endereco: 'Rua das Flores, 123 - São Paulo, SP',
      email: 'contato@veironatureza.com.br',
      projetosAssociados: 8,
      criadoEm: '15/01/2024'
    },
    {
      id: 2,
      razaoSocial: 'Sementes Nativas S.A.',
      nomeFantasia: 'Sementes Nativas',
      cnpj: '23.456.789/0001-01',
      telefone: '(19) 3456-7890',
      endereco: 'Av. Paulista, 1000 - Campinas, SP',
      email: 'vendas@sementesnativas.com.br',
      projetosAssociados: 12,
      criadoEm: '22/02/2024'
    },
    {
      id: 3,
      razaoSocial: 'Equipamentos Florestais ME',
      nomeFantasia: 'EcoEquip',
      cnpj: '34.567.890/0001-12',
      telefone: '(21) 2345-6789',
      endereco: 'Rua Verde, 456 - Rio de Janeiro, RJ',
      email: 'contato@ecoequip.com.br',
      projetosAssociados: 5,
      criadoEm: '10/03/2024'
    },
    {
      id: 4,
      razaoSocial: 'Fertilizantes Orgânicos Brasil',
      nomeFantasia: 'FertilOrg',
      cnpj: '45.678.901/0001-23',
      telefone: '(31) 3456-7890',
      endereco: 'Av. das Árvores, 789 - Belo Horizonte, MG',
      email: 'vendas@fertilorg.com.br',
      projetosAssociados: 15,
      criadoEm: '05/04/2024'
    },
    {
      id: 5,
      razaoSocial: 'Mudas & Cia Comércio',
      nomeFantasia: 'Mudas & Cia',
      cnpj: '56.789.012/0001-34',
      telefone: '(41) 2345-6789',
      endereco: 'Rua dos Pinheiros, 321 - Curitiba, PR',
      email: 'comercial@mudas-cia.com.br',
      projetosAssociados: 6,
      criadoEm: '18/05/2024'
    },
    {
      id: 6,
      razaoSocial: 'Transportes Ecológicos Ltda',
      nomeFantasia: 'TransEco',
      cnpj: '67.890.123/0001-45',
      telefone: '(48) 3456-7890',
      endereco: 'Av. Central, 555 - Florianópolis, SC',
      email: 'logistica@transeco.com.br',
      projetosAssociados: 10,
      criadoEm: '30/06/2024'
    }
  ]);

  const filteredFornecedores = fornecedores.filter(fornecedor =>
    fornecedor.razaoSocial.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fornecedor.nomeFantasia.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fornecedor.cnpj.includes(searchTerm) ||
    fornecedor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddFornecedor = () => {
    setEditingFornecedor(null);
    setIsModalOpen(true);
  };

  const handleEditFornecedor = (fornecedor: Fornecedor) => {
    setEditingFornecedor({
      id: fornecedor.id,
      razaoSocial: fornecedor.razaoSocial,
      nomeFantasia: fornecedor.nomeFantasia,
      cnpj: fornecedor.cnpj,
      telefone: fornecedor.telefone,
      endereco: fornecedor.endereco,
      email: fornecedor.email,
      projetosAssociados: fornecedor.projetosAssociados
    });
    setIsModalOpen(true);
  };

  const handleDeleteFornecedor = (fornecedor: Fornecedor) => {
    setFornecedores(fornecedores.filter(f => f.id !== fornecedor.id));
    toast.success('Fornecedor excluído com sucesso!');
  };

  const handleSaveFornecedor = (formData: FornecedorFormData) => {
    if (formData.id) {
      // Edit existing
      setFornecedores(fornecedores.map(f => 
        f.id === formData.id 
          ? { 
              ...f, 
              razaoSocial: formData.razaoSocial,
              nomeFantasia: formData.nomeFantasia,
              cnpj: formData.cnpj,
              telefone: formData.telefone,
              endereco: formData.endereco,
              email: formData.email,
              projetosAssociados: formData.projetosAssociados
            } 
          : f
      ));
      toast.success('Fornecedor atualizado com sucesso!');
    } else {
      // Add new
      const newFornecedor: Fornecedor = {
        id: Math.max(...fornecedores.map(f => f.id), 0) + 1,
        razaoSocial: formData.razaoSocial,
        nomeFantasia: formData.nomeFantasia,
        cnpj: formData.cnpj,
        telefone: formData.telefone,
        endereco: formData.endereco,
        email: formData.email,
        projetosAssociados: formData.projetosAssociados,
        criadoEm: new Date().toLocaleDateString('pt-BR')
      };
      setFornecedores([...fornecedores, newFornecedor]);
      toast.success('Fornecedor adicionado com sucesso!');
    }
    setIsModalOpen(false);
    setEditingFornecedor(null);
  };

  const handleViewDetails = (fornecedor: Fornecedor) => {
    toast.info(`Visualizando detalhes de: ${fornecedor.razaoSocial}`);
  };

  return (
    <div className="px-6 pb-6">
      <div className="bg-white dark:bg-card rounded-[12px] shadow-sm border border-[#E0E0E0] dark:border-border overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E0E0E0] dark:border-border flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777777] dark:text-[#B0B0B0] w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar fornecedores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#E0E0E0] dark:border-border rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-background dark:text-white"
              />
            </div>
          </div>
          
          <button
            onClick={handleAddFornecedor}
            className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[12px] px-4 py-2 flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Novo Fornecedor</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8F8F8] border-b border-[#E0E0E0]">
              <tr>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Razão Social
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  CNPJ
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  E-mail
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Projetos associados
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Criado em
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E0E0E0]">
              {filteredFornecedores.map((fornecedor) => (
                <tr key={fornecedor.id} className="hover:bg-[#F8F8F8] transition-colors">
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-[14px] text-[#1A1A1A] font-medium">
                        {fornecedor.razaoSocial}
                      </p>
                      {fornecedor.nomeFantasia && (
                        <p className="text-[12px] text-[#777777]">
                          {fornecedor.nomeFantasia}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[14px] text-[#777777]">
                    {fornecedor.cnpj}
                  </td>
                  <td className="px-4 py-3 text-[14px] text-[#777777]">
                    {fornecedor.email}
                  </td>
                  <td className="px-4 py-3 text-[14px] text-[#1A1A1A] text-center">
                    {fornecedor.projetosAssociados}
                  </td>
                  <td className="px-4 py-3 text-[14px] text-[#777777] whitespace-nowrap">
                    {fornecedor.criadoEm}
                  </td>
                  <td className="px-4 py-3 text-[14px] whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditFornecedor(fornecedor)}
                        className="p-1.5 text-[#777777] hover:text-[#0F3D26] hover:bg-[#F0F0F0] rounded-lg transition-colors"
                        title="Editar"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setFornecedorToDelete(fornecedor);
                          setIsDeleteModalOpen(true);
                        }}
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

          {filteredFornecedores.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#777777] dark:text-[#B0B0B0]">
                {searchTerm ? 'Nenhum fornecedor encontrado.' : 'Nenhum fornecedor cadastrado.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <AddFornecedorModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingFornecedor(null);
        }}
        onSave={handleSaveFornecedor}
        editData={editingFornecedor}
      />

      {/* Confirm Delete Modal */}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setFornecedorToDelete(null);
        }}
        onConfirm={() => {
          if (fornecedorToDelete) {
            handleDeleteFornecedor(fornecedorToDelete);
          }
          setIsDeleteModalOpen(false);
          setFornecedorToDelete(null);
        }}
        title="Excluir Fornecedor"
        message="Tem certeza que deseja excluir este fornecedor?"
        itemName={fornecedorToDelete?.razaoSocial}
      />
    </div>
  );
}