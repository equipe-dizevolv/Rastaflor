import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Task {
  id: string;
  name: string;
  project: string;
  assignee: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Em Andamento' | 'Finalizada' | 'Pendente';
  dueDate: string;
}

interface EditTaskModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (task: Task) => void;
  task: Task | null;
}

export function EditTaskModal({ open, onOpenChange, onSubmit, task }: EditTaskModalProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const [formData, setFormData] = useState<Partial<Task>>({
    name: '',
    project: '',
    assignee: '',
    priority: 'Medium',
    status: 'Pendente',
    dueDate: ''
  });

  useEffect(() => {
    if (task) {
      // Convert DD/MM/YYYY to YYYY-MM-DD for input[type="date"]
      const dateParts = task.dueDate.split('/');
      const isoDate = dateParts.length === 3 
        ? `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}` 
        : task.dueDate;
      
      setFormData({
        name: task.name,
        project: task.project,
        assignee: task.assignee,
        priority: task.priority,
        status: task.status,
        dueDate: isoDate
      });
    }
  }, [task]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task && formData.name && formData.project && formData.assignee && formData.dueDate) {
      onSubmit({
        id: task.id,
        name: formData.name,
        project: formData.project,
        assignee: formData.assignee,
        priority: formData.priority as 'High' | 'Medium' | 'Low',
        status: formData.status as 'Em Andamento' | 'Finalizada' | 'Pendente',
        dueDate: formData.dueDate
      });
      onOpenChange(false);
    }
  };

  if (!open || !task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className={`w-full max-w-[600px] rounded-[12px] overflow-hidden shadow-lg ${
        isDarkMode ? 'bg-[#1A1A1A]' : 'bg-white'
      }`}>
        {/* Header Verde */}
        <div className="bg-[#0F3D26] h-[69px] flex items-center justify-between px-6 border-b border-[#E0E0E0]">
          <h2 className="text-white text-[18px]">Editar Tarefa</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="w-5 h-5 flex items-center justify-center text-white hover:text-white/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Nome da Tarefa */}
          <div className="space-y-1.5">
            <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              Nome da Tarefa *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Análise de Solo"
              required
              className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                isDarkMode 
                  ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                  : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
              } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
            />
          </div>

          {/* Projeto */}
          <div className="space-y-1.5">
            <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              Projeto *
            </label>
            <input
              type="text"
              value={formData.project}
              onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              placeholder="Ex: Restauração Mata Atlântica"
              required
              className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                isDarkMode 
                  ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                  : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
              } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
            />
          </div>

          {/* Responsável */}
          <div className="space-y-1.5">
            <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              Responsável *
            </label>
            <input
              type="text"
              value={formData.assignee}
              onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
              placeholder="Ex: João Silva"
              required
              className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                isDarkMode 
                  ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                  : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
              } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Prioridade */}
            <div className="space-y-1.5">
              <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Prioridade *
              </label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value as any })}
                required
                className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                  isDarkMode 
                    ? 'bg-[#0F3D26] border-[#3A3A3A] text-white' 
                    : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A]'
                } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
              >
                <option value="High">Alta</option>
                <option value="Medium">Média</option>
                <option value="Low">Baixa</option>
              </select>
            </div>

            {/* Status */}
            <div className="space-y-1.5">
              <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Status *
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                required
                className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                  isDarkMode 
                    ? 'bg-[#0F3D26] border-[#3A3A3A] text-white' 
                    : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A]'
                } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
              >
                <option value="Pendente">Pendente</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Finalizada">Finalizada</option>
              </select>
            </div>
          </div>

          {/* Data de Vencimento */}
          <div className="space-y-1.5">
            <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              Data de Vencimento *
            </label>
            <input
              type="date"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              required
              className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                isDarkMode 
                  ? 'bg-[#0F3D26] border-[#3A3A3A] text-white' 
                  : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A]'
              } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
            />
          </div>

          {/* Footer */}
          <div className={`flex items-center justify-end gap-3 pt-4 border-t ${
            isDarkMode ? 'border-[#3A3A3A]' : 'border-[#E0E0E0]'
          }`}>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className={`px-4 py-2 border rounded-[12px] hover:bg-opacity-80 transition-colors text-[14px] ${
                isDarkMode 
                  ? 'bg-transparent border-[#3A3A3A] text-white hover:bg-[#2A2A2A]' 
                  : 'bg-white border-[#E0E0E0] text-[#1A1A1A] hover:bg-[#F8F8F8]'
              }`}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#0F3D26] text-white rounded-[12px] hover:bg-[#0F3D26]/90 transition-colors text-[14px]"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
