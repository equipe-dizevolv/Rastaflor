import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Mail, Phone, UserCheck, UserX } from 'lucide-react';

interface TeamMember {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  funcao: string;
  status: 'ativo' | 'inativo';
  dataAdmissao: string;
}

export function Equipe() {
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
      status: 'ativo',
      dataAdmissao: '2023-01-15'
    },
    {
      id: 2,
      nome: 'Maria Santos',
      email: 'maria.santos@rastaflor.com',
      telefone: '(11) 98765-4322',
      funcao: 'Técnica de Coleta',
      status: 'ativo',
      dataAdmissao: '2023-03-20'
    },
    {
      id: 3,
      nome: 'Pedro Oliveira',
      email: 'pedro.oliveira@rastaflor.com',
      telefone: '(11) 98765-4323',
      funcao: 'Assistente de Campo',
      status: 'ativo',
      dataAdmissao: '2023-06-10'
    },
    {
      id: 4,
      nome: 'Ana Costa',
      email: 'ana.costa@rastaflor.com',
      telefone: '(11) 98765-4324',
      funcao: 'Especialista em Identificação',
      status: 'inativo',
      dataAdmissao: '2022-11-05'
    },
    {
      id: 5,
      nome: 'Carlos Ferreira',
      email: 'carlos.ferreira@rastaflor.com',
      telefone: '(11) 98765-4325',
      funcao: 'Técnico de Coleta',
      status: 'ativo',
      dataAdmissao: '2024-01-08'
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
    setSelectedMember(member);
    setIsAddModalOpen(true);
  };

  const handleDeleteMember = (id: number) => {
    if (confirm('Tem certeza que deseja remover este membro da equipe?')) {
      console.log('Deletar membro:', id);
      // Aqui você implementaria a lógica de delete
    }
  };

  const handleToggleStatus = (member: TeamMember) => {
    console.log('Alternar status:', member.id);
    // Aqui você implementaria a lógica de ativar/desativar
  };

  return (
    <div className="px-6 pb-6 space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[12px] p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-[#1A1A1A] dark:text-white text-xl mb-1">Equipe</h2>
            <p className="text-[#777777] dark:text-[#B0B0B0] text-sm">
              Gerencie os membros da equipe de coleta de sementes
            </p>
          </div>
          <button
            onClick={handleAddMember}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px] px-4 py-2 flex items-center gap-2 transition-colors text-sm whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Adicionar Membro
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
          <input
            type="text"
            placeholder="Buscar por nome, email ou função..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[#E0E0E0] dark:border-[#3A3A3A] rounded-[8px] bg-white dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[12px] p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[#1A1A1A] dark:text-white">{member.nome}</h3>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      member.status === 'ativo'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {member.status === 'ativo' ? 'Ativo' : 'Inativo'}
                  </span>
                </div>
                <p className="text-[#777777] dark:text-[#B0B0B0] text-sm mb-3">
                  {member.funcao}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleEditMember(member)}
                  title="Editar"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-[#2A2A2A] rounded-lg transition-colors"
                >
                  <Edit2 className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                </button>
                <button
                  onClick={() => handleToggleStatus(member)}
                  title={member.status === 'ativo' ? 'Desativar' : 'Ativar'}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-[#2A2A2A] rounded-lg transition-colors"
                >
                  {member.status === 'ativo' ? (
                    <UserX className="w-4 h-4 text-orange-600" />
                  ) : (
                    <UserCheck className="w-4 h-4 text-green-600" />
                  )}
                </button>
                <button
                  onClick={() => handleDeleteMember(member.id)}
                  title="Remover"
                  className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                <a
                  href={`mailto:${member.email}`}
                  className="text-[#777777] dark:text-[#B0B0B0] hover:text-primary transition-colors"
                >
                  {member.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                <a
                  href={`tel:${member.telefone}`}
                  className="text-[#777777] dark:text-[#B0B0B0] hover:text-primary transition-colors"
                >
                  {member.telefone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#777777] dark:text-[#B0B0B0] pt-2 border-t border-[#E0E0E0] dark:border-[#3A3A3A]">
                Admissão: {new Date(member.dataAdmissao).toLocaleDateString('pt-BR')}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[12px] p-12 text-center">
          <p className="text-[#777777] dark:text-[#B0B0B0]">
            Nenhum membro encontrado
          </p>
        </div>
      )}

      {/* Add/Edit Member Modal */}
      {isAddModalOpen && (
        <AddMemberModal
          isOpen={isAddModalOpen}
          onClose={() => {
            setIsAddModalOpen(false);
            setSelectedMember(null);
          }}
          member={selectedMember}
        />
      )}
    </div>
  );
}

// Modal Component
interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member?: TeamMember | null;
}

function AddMemberModal({ isOpen, onClose, member }: AddMemberModalProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const [formData, setFormData] = useState({
    nome: member?.nome || '',
    email: member?.email || '',
    telefone: member?.telefone || '',
    funcao: member?.funcao || '',
    status: member?.status || 'ativo',
    dataAdmissao: member?.dataAdmissao || new Date().toISOString().split('T')[0]
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Salvar membro:', formData);
    // Aqui você implementaria a lógica de salvar
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div 
        className={`w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-[12px] shadow-xl ${
          isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white'
        }`}
      >
        {/* Header Verde Escuro */}
        <div className="bg-[#0F3D26] p-6 flex items-center justify-between">
          <h2 className="text-white text-xl">
            {member ? 'Editar Membro' : 'Adicionar Novo Membro'}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/10 rounded-lg p-2 transition-colors"
          >
            ×
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className={`block text-sm mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Nome Completo *
              </label>
              <input
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className={`w-full rounded-[8px] px-3 py-2 border ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                    : 'bg-white border-[#E0E0E0]'
                }`}
                required
              />
            </div>

            <div>
              <label className={`block text-sm mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full rounded-[8px] px-3 py-2 border ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                    : 'bg-white border-[#E0E0E0]'
                }`}
                required
              />
            </div>

            <div>
              <label className={`block text-sm mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Telefone *
              </label>
              <input
                type="tel"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className={`w-full rounded-[8px] px-3 py-2 border ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                    : 'bg-white border-[#E0E0E0]'
                }`}
                required
              />
            </div>

            <div>
              <label className={`block text-sm mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Função *
              </label>
              <select
                value={formData.funcao}
                onChange={(e) => setFormData({ ...formData, funcao: e.target.value })}
                className={`w-full rounded-[8px] px-3 py-2 border ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                    : 'bg-white border-[#E0E0E0]'
                }`}
                required
              >
                <option value="">Selecione...</option>
                <option value="Coordenador de Campo">Coordenador de Campo</option>
                <option value="Técnica de Coleta">Técnico(a) de Coleta</option>
                <option value="Assistente de Campo">Assistente de Campo</option>
                <option value="Especialista em Identificação">Especialista em Identificação</option>
                <option value="Motorista">Motorista</option>
              </select>
            </div>

            <div>
              <label className={`block text-sm mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Status *
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as 'ativo' | 'inativo' })}
                className={`w-full rounded-[8px] px-3 py-2 border ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                    : 'bg-white border-[#E0E0E0]'
                }`}
                required
              >
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
            </div>
          </div>

          {/* Footer */}
          <div className={`pt-4 border-t flex justify-end gap-3 ${
            isDarkMode ? 'border-[#3A3A3A]' : 'border-[#E0E0E0]'
          }`}>
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2 rounded-[8px] transition-colors ${
                isDarkMode 
                  ? 'border border-[#3A3A3A] text-gray-300 hover:bg-[#1A1A1A]' 
                  : 'border border-[#E0E0E0] hover:bg-gray-100'
              }`}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[8px] transition-colors"
            >
              {member ? 'Salvar Alterações' : 'Adicionar Membro'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
