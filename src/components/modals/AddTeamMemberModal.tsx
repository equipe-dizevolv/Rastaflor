import { useState, useEffect } from 'react';
import { X, UserPlus, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { toast } from 'sonner@2.0.3';

export interface TeamMemberFormData {
  nome: string;
  email: string;
  telefone: string;
  funcao: string;
  status: 'Ativo' | 'Inativo';
  dataAdmissao: string;
}

interface AddTeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  memberToEdit?: TeamMemberFormData | null;
  onSave: (data: TeamMemberFormData) => void;
}

export function AddTeamMemberModal({ isOpen, onClose, memberToEdit, onSave }: AddTeamMemberModalProps) {
  const [formData, setFormData] = useState<TeamMemberFormData>({
    nome: '',
    email: '',
    telefone: '',
    funcao: '',
    status: 'Ativo',
    dataAdmissao: new Date().toISOString().split('T')[0],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Populate form when editing
  useEffect(() => {
    if (memberToEdit) {
      setFormData(memberToEdit);
    } else {
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        funcao: '',
        status: 'Ativo',
        dataAdmissao: new Date().toISOString().split('T')[0],
      });
    }
    setErrors({});
  }, [memberToEdit, isOpen]);

  const funcaoOptions = [
    'Coordenador de Campo',
    'Técnico de Coleta',
    'Assistente de Campo',
    'Especialista em Identificação',
    'Analista Ambiental',
    'Gestor de Projetos',
    'Biólogo',
    'Engenheiro Florestal',
    'Técnico Agrícola',
    'Outro'
  ];

  const handleChange = (field: keyof TeamMemberFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }

    if (!formData.funcao.trim()) {
      newErrors.funcao = 'Função é obrigatória';
    }

    if (!formData.dataAdmissao) {
      newErrors.dataAdmissao = 'Data de admissão é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    onSave(formData);
    
    if (memberToEdit) {
      toast.success('Membro atualizado com sucesso!', {
        description: `${formData.nome} foi atualizado na equipe.`
      });
    } else {
      toast.success('Membro adicionado com sucesso!', {
        description: `${formData.nome} foi adicionado à equipe.`
      });
    }

    onClose();
  };

  const handleCancel = () => {
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      funcao: '',
      status: 'Ativo',
      dataAdmissao: new Date().toISOString().split('T')[0],
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[12px] shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E0E0E0]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0F3D26]/10 flex items-center justify-center">
              {memberToEdit ? (
                <User className="w-5 h-5 text-[#0F3D26]" />
              ) : (
                <UserPlus className="w-5 h-5 text-[#0F3D26]" />
              )}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A]">
                {memberToEdit ? 'Editar Membro' : 'Adicionar Novo Membro'}
              </h2>
              <p className="text-sm text-[#777777]">
                {memberToEdit ? 'Atualize as informações do membro' : 'Preencha os dados do novo membro da equipe'}
              </p>
            </div>
          </div>
          <button
            onClick={handleCancel}
            className="text-[#777777] hover:text-[#1A1A1A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Nome Completo */}
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
              Nome Completo <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="Ex: João Silva"
              value={formData.nome}
              onChange={(e) => handleChange('nome', e.target.value)}
              className={`rounded-lg ${errors.nome ? 'border-red-500' : 'border-[#E0E0E0]'}`}
            />
            {errors.nome && (
              <p className="text-xs text-red-500 mt-1">{errors.nome}</p>
            )}
          </div>

          {/* Email and Telefone - Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                placeholder="joao.silva@rastaflor.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`rounded-lg ${errors.email ? 'border-red-500' : 'border-[#E0E0E0]'}`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                Telefone <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                placeholder="(11) 98765-4321"
                value={formData.telefone}
                onChange={(e) => handleChange('telefone', e.target.value)}
                className={`rounded-lg ${errors.telefone ? 'border-red-500' : 'border-[#E0E0E0]'}`}
              />
              {errors.telefone && (
                <p className="text-xs text-red-500 mt-1">{errors.telefone}</p>
              )}
            </div>
          </div>

          {/* Função */}
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
              Função <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.funcao}
              onChange={(e) => handleChange('funcao', e.target.value)}
              className={`w-full px-3 py-2 rounded-lg border ${
                errors.funcao ? 'border-red-500' : 'border-[#E0E0E0]'
              } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent text-sm`}
            >
              <option value="">Selecione uma função</option>
              {funcaoOptions.map((funcao) => (
                <option key={funcao} value={funcao}>
                  {funcao}
                </option>
              ))}
            </select>
            {errors.funcao && (
              <p className="text-xs text-red-500 mt-1">{errors.funcao}</p>
            )}
          </div>

          {/* Status and Data de Admissão - Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.status}
                onChange={(e) => handleChange('status', e.target.value as 'Ativo' | 'Inativo')}
                className="w-full px-3 py-2 rounded-lg border border-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent text-sm"
              >
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select>
            </div>

            {/* Data de Admissão */}
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                Data de Admissão <span className="text-red-500">*</span>
              </label>
              <Input
                type="date"
                value={formData.dataAdmissao}
                onChange={(e) => handleChange('dataAdmissao', e.target.value)}
                className={`rounded-lg ${errors.dataAdmissao ? 'border-red-500' : 'border-[#E0E0E0]'}`}
              />
              {errors.dataAdmissao && (
                <p className="text-xs text-red-500 mt-1">{errors.dataAdmissao}</p>
              )}
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex gap-2">
              <User className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-900 font-medium">Informações importantes:</p>
                <ul className="text-xs text-blue-800 mt-2 space-y-1 list-disc list-inside">
                  <li>Todos os campos marcados com * são obrigatórios</li>
                  <li>O email será usado para login e comunicação</li>
                  <li>Membros inativos não terão acesso ao sistema</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="flex-1 rounded-lg"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 rounded-lg"
              style={{ backgroundColor: '#0F3D26', color: 'white' }}
            >
              {memberToEdit ? 'Salvar Alterações' : 'Adicionar Membro'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
