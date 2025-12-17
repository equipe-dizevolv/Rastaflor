import { useState, useEffect } from 'react';
import { Plus, Search, Edit2, Trash2, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { usersService } from '../../services/users.service';
import { TeamMember } from '../../types/user.types';

// Map role to Portuguese function name
const roleToFuncao = (role: string): string => {
  const mapping: Record<string, string> = {
    'admin': 'Administrador',
    'financial': 'Financeiro',
    'technician': 'Técnico',
    'viewer': 'Visualizador'
  };
  return mapping[role] || role;
};

export function EquipeRestauracao() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load team members on mount
  useEffect(() => {
    loadTeamMembers();
  }, []);

  const loadTeamMembers = async () => {
    try {
      setLoading(true);
      setError(null);
      const members = await usersService.getTeamMembers();
      setTeamMembers(members);
    } catch (err) {
      console.error('Erro ao carregar equipe:', err);
      setError(err instanceof Error ? err.message : 'Erro ao carregar equipe');
    } finally {
      setLoading(false);
    }
  };

  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    roleToFuncao(member.role).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddMember = () => {
    setSelectedMember(null);
    setIsAddModalOpen(true);
  };

  const handleEditMember = (member: TeamMember) => {
    setSelectedMember(member);
    setIsAddModalOpen(true);
  };

  const handleDeleteMember = async (member: TeamMember) => {
    if (confirm(`Tem certeza que deseja remover ${member.name} da equipe?`)) {
      try {
        await usersService.deleteTeamMember(member.id);
        await loadTeamMembers();
        toast.success('Membro removido com sucesso!', {
          description: `${member.name} foi removido da equipe.`
        });
      } catch (err) {
        console.error('Erro ao deletar membro:', err);
        toast.error('Erro ao remover membro', {
          description: err instanceof Error ? err.message : 'Erro desconhecido'
        });
      }
    }
  };

  const handleSaveMember = async () => {
    await loadTeamMembers();
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

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-[12px] p-4 text-red-700">
          {error}
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="bg-white border border-[#E0E0E0] rounded-[12px] p-12 text-center">
          <p className="text-[#777777]">Carregando equipe...</p>
        </div>
      ) : (
        <>
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
                  {member.name}
                </h3>
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-[12px] font-medium ${
                    member.is_active
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {member.is_active ? 'Ativo' : 'Inativo'}
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
              <p className="text-[14px] text-[#777777]">{roleToFuncao(member.role)}</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-[14px] text-[#777777]">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{member.email}</span>
              </div>
              {member.phone && (
                <div className="flex items-center gap-2 text-[14px] text-[#777777]">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{member.phone}</span>
                </div>
              )}
            </div>

            {/* Admission Date */}
            {member.admission_date && (
              <div className="pt-4 border-t border-[#E0E0E0]">
                <p className="text-[12px] text-[#999999]">
                  Admissão: {new Date(member.admission_date).toLocaleDateString('pt-BR')}
                </p>
              </div>
            )}
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
        </>
      )}

      {/* Add/Edit Team Member Modal */}
      {isAddModalOpen && (
        <AddMemberModal
          isOpen={isAddModalOpen}
          onClose={() => {
            setIsAddModalOpen(false);
            setSelectedMember(null);
          }}
          member={selectedMember}
          onSave={handleSaveMember}
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
  onSave: () => void;
}

function AddMemberModal({ isOpen, onClose, member, onSave }: AddMemberModalProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const [formData, setFormData] = useState({
    name: member?.name || '',
    email: member?.email || '',
    phone: member?.phone || '',
    role: member?.role || '',
    is_active: member?.is_active ?? '',
    admission_date: member?.admission_date || new Date().toISOString().split('T')[0]
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      if (member) {
        // Update existing member
        await usersService.updateTeamMember(member.id, formData);
        toast.success('Membro atualizado com sucesso!');
      } else {
        // Create new member
        await usersService.createTeamMember(formData);
        toast.success('Membro adicionado!');
      }
      await onSave(); // Reload list
      onClose();
    } catch (err) {
      console.error('Erro ao salvar membro:', err);
      setError(err instanceof Error ? err.message : 'Erro ao salvar membro');
      toast.error('Erro ao salvar membro', {
        description: err instanceof Error ? err.message : 'Erro desconhecido'
      });
    } finally {
      setSaving(false);
    }
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
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-red-700 dark:text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className={`block text-sm mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Nome Completo *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Digite o nome completo"
                className={`w-full rounded-[8px] px-3 py-2 border ${
                  isDarkMode
                    ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white placeholder-gray-500'
                    : 'bg-white border-[#E0E0E0] placeholder-gray-400'
                }`}
                required
                disabled={saving}
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
                placeholder="exemplo@email.com"
                className={`w-full rounded-[8px] px-3 py-2 border ${
                  isDarkMode
                    ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white placeholder-gray-500'
                    : 'bg-white border-[#E0E0E0] placeholder-gray-400'
                }`}
                required
                disabled={saving}
              />
            </div>

            <div>
              <label className={`block text-sm mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Telefone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  let formatted = value;
                  if (value.length > 0) {
                    formatted = `(${value.substring(0, 2)}`;
                    if (value.length > 2) {
                      formatted += `) ${value.substring(2, 7)}`;
                    }
                    if (value.length > 7) {
                      formatted += `-${value.substring(7, 11)}`;
                    }
                  }
                  setFormData({ ...formData, phone: formatted });
                }}
                placeholder="(00) 00000-0000"
                maxLength={15}
                className={`w-full rounded-[8px] px-3 py-2 border ${
                  isDarkMode
                    ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white placeholder-gray-500'
                    : 'bg-white border-[#E0E0E0] placeholder-gray-400'
                }`}
                disabled={saving}
              />
            </div>

            <div>
              <label className={`block text-sm mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Função *
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                className={`w-full rounded-[8px] px-3 py-2 border ${
                  isDarkMode
                    ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white'
                    : 'bg-white border-[#E0E0E0]'
                }`}
                required
                disabled={saving}
              >
                <option value="" disabled hidden>Selecione uma função</option>
                <option value="admin">Administrador</option>
                <option value="financial">Financeiro</option>
                <option value="technician">Técnico</option>
                <option value="viewer">Visualizador</option>
              </select>
            </div>

            <div>
              <label className={`block text-sm mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Status *
              </label>
              <select
                value={formData.is_active === '' ? '' : formData.is_active ? 'ativo' : 'inativo'}
                onChange={(e) => setFormData({ ...formData, is_active: e.target.value === 'ativo' })}
                className={`w-full rounded-[8px] px-3 py-2 border ${
                  isDarkMode
                    ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white'
                    : 'bg-white border-[#E0E0E0]'
                }`}
                required
                disabled={saving}
              >
                <option value="" disabled hidden>Selecione um status</option>
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
              disabled={saving}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[8px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={saving}
            >
              {saving ? 'Salvando...' : (member ? 'Salvar Alterações' : 'Adicionar Membro')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
