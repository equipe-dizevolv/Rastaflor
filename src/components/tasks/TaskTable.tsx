import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Edit, Trash2 } from 'lucide-react';

interface Task {
  id: string;
  name: string;
  project: string;
  assignee: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Em Andamento' | 'Finalizada' | 'Pendente';
  dueDate: string;
}

interface TaskTableProps {
  tasks: Task[];
  onEdit: (taskId: string) => void;
  onDelete: (taskId: string) => void;
  onStatusChange: (taskId: string, status: string) => void;
}

const priorityColors = {
  High: 'bg-red-500/10 text-red-400 border-red-500/20',
  Medium: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Low: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
};

const statusColors = {
  'Em Andamento': 'bg-primary/10 text-primary border-primary/20',
  'Finalizada': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Pendente': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
};

export function TaskTable({ tasks, onEdit, onDelete, onStatusChange }: TaskTableProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="text-left py-3 px-4 font-medium text-foreground">Nome da Tarefa</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Projeto</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Responsável</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Prioridade</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Status</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Prazo</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Ações</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr 
                key={task.id} 
                className="border-b border-border last:border-b-0 hover:bg-muted/20 transition-colors"
              >
                <td className="py-3 px-4 text-foreground">{task.name}</td>
                <td className="py-3 px-4 text-secondary">{task.project}</td>
                <td className="py-3 px-4 text-secondary">{task.assignee}</td>
                <td className="py-3 px-4">
                  <Badge 
                    variant="outline" 
                    className={priorityColors[task.priority]}
                  >
                    {task.priority}
                  </Badge>
                </td>
                <td className="py-3 px-4">
                  <Select 
                    value={task.status} 
                    onValueChange={(value) => onStatusChange(task.id, value)}
                  >
                    <SelectTrigger className="w-auto border-0 bg-transparent p-0 h-auto focus:ring-0">
                      <Badge 
                        variant="outline" 
                        className={statusColors[task.status]}
                      >
                        <SelectValue />
                      </Badge>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pendente">Pendente</SelectItem>
                      <SelectItem value="Em Andamento">Em Andamento</SelectItem>
                      <SelectItem value="Finalizada">Finalizada</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="py-3 px-4 text-secondary">{task.dueDate}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEdit(task.id)}
                      className="h-8 w-8 p-0 text-secondary hover:text-primary hover:bg-muted"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onDelete(task.id)}
                      className="h-8 w-8 p-0 text-secondary hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}