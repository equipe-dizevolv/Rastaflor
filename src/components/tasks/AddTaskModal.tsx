import { useState, useEffect } from 'react';
import { X, Upload } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: any) => void;
  editTask?: any;
}

export function AddTaskModal({ isOpen, onClose, onSave, editTask }: AddTaskModalProps) {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    projeto: '',
    responsavel: '',
    prioridade: '',
    prazo: '',
    status: 'Em Andamento'
  });

  useEffect(() => {
    if (editTask) {
      setFormData({
        nome: editTask.nome || '',
        descricao: editTask.descricao || '',
        projeto: editTask.projeto || '',
        responsavel: editTask.responsavel || '',
        prioridade: editTask.prioridade || '',
        prazo: editTask.data || '',
        status: editTask.status || 'Em Andamento'
      });
    } else {
      setFormData({
        nome: '',
        descricao: '',
        projeto: '',
        responsavel: '',
        prioridade: '',
        prazo: '',
        status: 'Em Andamento'
      });
    }
  }, [editTask, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: editTask?.id || Date.now().toString(),
      data: formData.prazo
    });
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      nome: '',
      descricao: '',
      projeto: '',
      responsavel: '',
      prioridade: '',
      prazo: '',
      status: 'Em Andamento'
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-card rounded-[12px] shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#0F3D26] px-6 py-4 flex items-center justify-between">
          <h2 className="text-white text-lg">
            {editTask ? 'Editar Tarefa' : 'Criar Nova Tarefa'}
          </h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Nome da Tarefa - Full Width */}
            <div className="space-y-2">
              <label className="text-sm text-secondary">
                Nome da Tarefa *
              </label>
              <Input
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                placeholder="Digite o nome da tarefa"
                className="bg-input border-border text-foreground rounded-[8px]"
                required
              />
            </div>

            {/* Descrição - Full Width */}
            <div className="space-y-2">
              <label className="text-sm text-secondary">
                Descrição
              </label>
              <textarea
                value={formData.descricao}
                onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                placeholder="Adicione uma descrição detalhada"
                className="w-full px-3 py-2 bg-input border border-border text-foreground rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px] resize-y"
              />
            </div>

            {/* Grid de 2 colunas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Projeto */}
              <div className="space-y-2">
                <label className="text-sm text-secondary">
                  Projeto *
                </label>
                <select
                  value={formData.projeto}
                  onChange={(e) => setFormData({ ...formData, projeto: e.target.value })}
                  className="w-full px-3 py-2 bg-input border border-border text-foreground rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Selecionar projeto</option>
                  <option value="Projeto Renascer">Projeto Renascer</option>
                  <option value="Projeto Floresta Viva">Projeto Floresta Viva</option>
                  <option value="Projeto Verde Novo">Projeto Verde Novo</option>
                  <option value="Projeto Mata Nativa">Projeto Mata Nativa</option>
                </select>
              </div>

              {/* Responsável */}
              <div className="space-y-2">
                <label className="text-sm text-secondary">
                  Responsável *
                </label>
                <select
                  value={formData.responsavel}
                  onChange={(e) => setFormData({ ...formData, responsavel: e.target.value })}
                  className="w-full px-3 py-2 bg-input border border-border text-foreground rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Selecionar responsável</option>
                  <option value="Nome Sobrenome">Nome Sobrenome</option>
                  <option value="João Silva">João Silva</option>
                  <option value="Maria Santos">Maria Santos</option>
                  <option value="Pedro Costa">Pedro Costa</option>
                </select>
              </div>

              {/* Prioridade */}
              <div className="space-y-2">
                <label className="text-sm text-secondary">
                  Prioridade *
                </label>
                <select
                  value={formData.prioridade}
                  onChange={(e) => setFormData({ ...formData, prioridade: e.target.value })}
                  className="w-full px-3 py-2 bg-input border border-border text-foreground rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Selecionar prioridade</option>
                  <option value="Alta">Alta</option>
                  <option value="Média">Média</option>
                  <option value="Baixa">Baixa</option>
                </select>
              </div>

              {/* Prazo */}
              <div className="space-y-2">
                <label className="text-sm text-secondary">
                  Prazo *
                </label>
                <Input
                  type="date"
                  value={formData.prazo}
                  onChange={(e) => setFormData({ ...formData, prazo: e.target.value })}
                  className="bg-input border-border text-foreground rounded-[8px]"
                  required
                />
              </div>
            </div>

            {/* Anexos */}
            <div className="space-y-2">
              <label className="text-sm text-secondary">
                Anexos
              </label>
              <div className="border-2 border-dashed border-border rounded-[8px] p-6 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <p className="text-sm text-secondary mb-1">
                  Clique para fazer upload ou arraste arquivos
                </p>
                <p className="text-xs text-secondary">
                  PDF, DOC, PNG, JPG até 10MB
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-border px-6 py-4 flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="rounded-[8px]"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[8px]"
            >
              {editTask ? 'Salvar Alterações' : 'Criar Tarefa'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
