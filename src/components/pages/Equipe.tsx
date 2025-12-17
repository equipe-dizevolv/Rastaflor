import { useState, useEffect } from 'react';
import { Plus, Search, Edit2, Trash2, Mail, Phone, UserCheck, UserX } from 'lucide-react';
import { usersService } from '../../services/users.service';
import { TeamMember } from '../../types/user.types';

// Map role to Portuguese function name
const roleToFuncao = (role: string): string => {
  const mapping: Record<string, string> = {
    'admin': 'Administrador',
    'manager': 'Coordenador de Campo',
    'technician': 'Técnico(a) de Coleta',
    'viewer': 'Visualizador'
  };
  return mapping[role] || role;
};

export function Equipe() {
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

  const handleDeleteMember = async (id: string) => {
    if (confirm('Tem certeza que deseja remover este membro da equipe?')) {
      try {
        await usersService.deleteTeamMember(id);
        await loadTeamMembers(); // Reload list
        alert('Membro removido com sucesso!');
      } catch (err) {
        console.error('Erro ao deletar membro:', err);
        alert(err instanceof Error ? err.message : 'Erro ao remover membro');
      }
    }
  };

  const handleToggleStatus = async (member: TeamMember) => {
    try {
      await usersService.toggleUserStatus(member.id, !member.is_active);
      await loadTeamMembers(); // Reload list
      alert(`Membro ${member.is_active ? 'desativado' : 'ativado'} com sucesso!`);
    } catch (err) {
      console.error('Erro ao alterar status:', err);
      alert(err instanceof Error ? err.message : 'Erro ao alterar status');
    }
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

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-[12px] p-4 text-red-700 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[12px] p-12 text-center">
          <p className="text-[#777777] dark:text-[#B0B0B0]">Carregando equipe...</p>
        </div>
      ) : (
        <>
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
                  <h3 className="text-[#1A1A1A] dark:text-white">{member.name}</h3>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      member.is_active
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {member.is_active ? 'Ativo' : 'Inativo'}
                  </span>
                </div>
                <p className="text-[#777777] dark:text-[#B0B0B0] text-sm mb-3">
                  {roleToFuncao(member.role)}
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
                  title={member.is_active ? 'Desativar' : 'Ativar'}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-[#2A2A2A] rounded-lg transition-colors"
                >
                  {member.is_active ? (
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
              {member.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                  <a
                    href={`tel:${member.phone}`}
                    className="text-[#777777] dark:text-[#B0B0B0] hover:text-primary transition-colors"
                  >
                    {member.phone}
                  </a>
                </div>
              )}
              {member.admission_date && (
                <div className="flex items-center gap-2 text-sm text-[#777777] dark:text-[#B0B0B0] pt-2 border-t border-[#E0E0E0] dark:border-[#3A3A3A]">
                  Admissão: {new Date(member.admission_date).toLocaleDateString('pt-BR')}
                </div>
              )}
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
        </>
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
          onSave={loadTeamMembers}
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

// Map funcao to role
const funcaoToRole = (funcao: string): 'admin' | 'manager' | 'technician' | 'viewer' => {
  const mapping: Record<string, 'admin' | 'manager' | 'technician' | 'viewer'> = {
    'Administrador': 'admin',
    'Coordenador de Campo': 'manager',
    'Técnico(a) de Coleta': 'technician',
    'Visualizador': 'viewer'
  };
  return mapping[funcao] || 'viewer';
};

function AddMemberModal({ isOpen, onClose, member, onSave }: AddMemberModalProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const [formData, setFormData] = useState({
    name: member?.name || '',
    email: member?.email || '',
    phone: member?.phone || '',
    role: member?.role || 'technician',
    is_active: member?.is_active ?? true,
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
        alert('Membro atualizado com sucesso!');
      } else {
        // Create new member
        await usersService.createTeamMember(formData);
        alert('Membro adicionado!');
      }
      await onSave(); // Reload list
      onClose();
    } catch (err) {
      console.error('Erro ao salvar membro:', err);
      setError(err instanceof Error ? err.message : 'Erro ao salvar membro');
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
                className={`w-full rounded-[8px] px-3 py-2 border ${
                  isDarkMode
                    ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white'
                    : 'bg-white border-[#E0E0E0]'
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
                className={`w-full rounded-[8px] px-3 py-2 border ${
                  isDarkMode
                    ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white'
                    : 'bg-white border-[#E0E0E0]'
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
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full rounded-[8px] px-3 py-2 border ${
                  isDarkMode
                    ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white'
                    : 'bg-white border-[#E0E0E0]'
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
                <option value="admin">Administrador</option>
                <option value="manager">Coordenador de Campo</option>
                <option value="technician">Técnico(a) de Coleta</option>
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
                value={formData.is_active ? 'ativo' : 'inativo'}
                onChange={(e) => setFormData({ ...formData, is_active: e.target.value === 'ativo' })}
                className={`w-full rounded-[8px] px-3 py-2 border ${
                  isDarkMode
                    ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white'
                    : 'bg-white border-[#E0E0E0]'
                }`}
                required
                disabled={saving}
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
