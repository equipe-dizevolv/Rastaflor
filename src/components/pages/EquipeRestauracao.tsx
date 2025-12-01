import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { AddTeamMemberModal, TeamMemberFormData } from '../modals/AddTeamMemberModal';

interface TeamMember {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  funcao: string;
  status: 'Ativo' | 'Inativo';
  dataAdmissao: string;
}

export function EquipeRestauracao() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const mockTeamMembers: TeamMember[] = [
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao.silva@rastaflor.com',
      telefone: '(11) 98765-4321',
      funcao: 'Coordenador de Campo',
      status: 'Ativo',
      dataAdmissao: '10/01/2023'
    },
    {
      id: 2,
      nome: 'Maria Santos',
      email: 'maria.santos@rastaflor.com',
      telefone: '(11) 98765-4322',
      funcao: 'Técnica de Coleta',
      status: 'Ativo',
      dataAdmissao: '18/03/2023'
    },
    {
      id: 3,
      nome: 'Pedro Oliveira',
      email: 'pedro.oliveira@rastaflor.com',
      telefone: '(11) 98765-4323',
      funcao: 'Assistente de Campo',
      status: 'Ativo',
      dataAdmissao: '06/06/2022'
    },
    {
      id: 4,
      nome: 'Ana Costa',
      email: 'ana.costa@rastaflor.com',
      telefone: '(11) 98765-4324',
      funcao: 'Especialista em Identificação',
      status: 'Inativo',
      dataAdmissao: '04/07/2022'
    },
    {
      id: 5,
      nome: 'Carlos Ferreira',
      email: 'carlos.ferreira@rastaflor.com',
      telefone: '(11) 98765-4325',
      funcao: 'Técnico de Coleta',
      status: 'Ativo',
      dataAdmissao: '07/01/2024'
    }
  ];

  const filteredMembers = mockTeamMembers.filter(member =>
    member.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.funcao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddMember = () => {
    setSelectedMember(null);
    setIsAddModalOpen(true);
  };

  const handleEditMember = (member: TeamMember) => {
    // Convert DD/MM/YYYY to YYYY-MM-DD for the date input
    const dateParts = member.dataAdmissao.split('/');
    const isoDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    
    setSelectedMember({
      ...member,
      dataAdmissao: isoDate
    });
    setIsAddModalOpen(true);
  };

  const handleDeleteMember = (member: TeamMember) => {
    if (confirm(`Tem certeza que deseja remover ${member.nome} da equipe?`)) {
      toast.success('Membro removido com sucesso!', {
        description: `${member.nome} foi removido da equipe.`
      });
      // TODO: Implementar lógica de exclusão
    }
  };

  const handleSaveMember = (data: TeamMemberFormData) => {
    // Convert YYYY-MM-DD back to DD/MM/YYYY for display
    const dateParts = data.dataAdmissao.split('-');
    const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    
    const memberData = {
      ...data,
      dataAdmissao: formattedDate
    };
    
    console.log('Salvando membro:', memberData);
    // TODO: Implementar lógica de salvamento no backend
    setIsAddModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="px-6 pb-6 space-y-6">
      {/* Search and Add Button */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777777] w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar por nome, email ou função..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[#E0E0E0] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent"
          />
        </div>
        <button
          onClick={handleAddMember}
          className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[12px] px-4 py-2 flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Adicionar Membro</span>
        </button>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white border border-[#E0E0E0] rounded-[12px] p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Header with Name and Status */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-[16px] font-medium text-[#1A1A1A] mb-1">
                  {member.nome}
                </h3>
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-[12px] font-medium ${
                    member.status === 'Ativo'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {member.status}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditMember(member)}
                  className="p-2 text-[#777777] hover:text-[#0F3D26] hover:bg-[#F8F8F8] rounded-lg transition-colors"
                  title="Editar"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteMember(member)}
                  className="p-2 text-[#777777] hover:text-red-600 hover:bg-[#F8F8F8] rounded-lg transition-colors"
                  title="Excluir"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Function */}
            <div className="mb-4">
              <p className="text-[14px] text-[#777777]">{member.funcao}</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-[14px] text-[#777777]">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{member.email}</span>
              </div>
              <div className="flex items-center gap-2 text-[14px] text-[#777777]">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{member.telefone}</span>
              </div>
            </div>

            {/* Admission Date */}
            <div className="pt-4 border-t border-[#E0E0E0]">
              <p className="text-[12px] text-[#999999]">
                Admissão: {member.dataAdmissao}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredMembers.length === 0 && (
        <div className="bg-white border border-[#E0E0E0] rounded-[12px] p-12 text-center">
          <div className="max-w-sm mx-auto">
            <div className="w-16 h-16 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-[#777777]" />
            </div>
            <h3 className="text-[16px] font-medium text-[#1A1A1A] mb-2">
              Nenhum membro encontrado
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

      {/* Add/Edit Team Member Modal */}
      <AddTeamMemberModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setSelectedMember(null);
        }}
        memberToEdit={selectedMember}
        onSave={handleSaveMember}
      />
    </div>
  );
}
