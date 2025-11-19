import { useState } from 'react';
import { KPICard } from '../dashboard/KPICard';
import { TaskTable } from '../tasks/TaskTable';
import { CreateTaskModal } from '../tasks/CreateTaskModal';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

export function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: '1',
      name: 'Análise de Solo - Setor A',
      project: 'Restauração Mata Atlântica',
      assignee: 'João Silva',
      priority: 'High' as const,
      status: 'Em Andamento' as const,
      dueDate: '15/11/2024'
    },
    {
      id: '2',
      name: 'Plantio de Mudas Nativas',
      project: 'Reflorestamento Cerrado',
      assignee: 'Maria Santos',
      priority: 'Medium' as const,
      status: 'Pendente' as const,
      dueDate: '20/11/2024'
    },
    {
      id: '3',
      name: 'Monitoramento Mensal',
      project: 'Recuperação Ripária',
      assignee: 'Carlos Oliveira',
      priority: 'Low' as const,
      status: 'Finalizada' as const,
      dueDate: '10/11/2024'
    },
    {
      id: '4',
      name: 'Preparação do Terreno',
      project: 'Conectividade Florestal',
      assignee: 'Ana Costa',
      priority: 'High' as const,
      status: 'Em Andamento' as const,
      dueDate: '18/11/2024'
    }
  ]);

  const totalTasks = tasks.length;
  const inProgressTasks = tasks.filter(task => task.status === 'Em Andamento').length;
  const completedTasks = tasks.filter(task => task.status === 'Finalizada').length;

  const taskKpis = [
    { title: 'Total Tarefas', value: totalTasks.toString(), subtitle: 'Todas as tarefas' },
    { title: 'Em Andamento', value: inProgressTasks.toString(), subtitle: 'Tarefas ativas' },
    { title: 'Finalizadas', value: completedTasks.toString(), subtitle: 'Este mês' }
  ];

  const handleCreateTask = (taskData: any) => {
    const newTask = {
      id: (tasks.length + 1).toString(),
      name: taskData.name,
      project: taskData.project,
      assignee: taskData.assignee,
      priority: taskData.priority,
      status: 'Pendente' as const,
      dueDate: new Date(taskData.dueDate).toLocaleDateString('pt-BR')
    };
    setTasks(prev => [...prev, newTask]);
  };

  const handleEditTask = (taskId: string) => {
    console.log('Edit task:', taskId);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const handleStatusChange = (taskId: string, status: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, status: status as any } : task
    ));
  };

  return (
    <div className="p-6 space-y-8">
      {/* Task KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {taskKpis.map((kpi, index) => (
          <KPICard
            key={index}
            title={kpi.title}
            value={kpi.value}
            subtitle={kpi.subtitle}
          />
        ))}
      </div>

      {/* Tasks Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-foreground">Todas Tarefas</h2>
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Nova Tarefa
          </Button>
        </div>

        <TaskTable
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
        />
      </div>

      <CreateTaskModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSubmit={handleCreateTask}
      />
    </div>
  );
}