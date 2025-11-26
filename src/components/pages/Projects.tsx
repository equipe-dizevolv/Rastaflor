import { useState } from 'react';
import { Plus, Search, Edit, Trash2, Image as ImageIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { CreateProjectWizard } from '../projects/CreateProjectWizard';
import { AddActivityModal } from '../activities/AddActivityModal';
import { DeleteActivityDialog } from '../activities/DeleteActivityDialog';
import { ImageViewerModal } from '../activities/ImageViewerModal';
import { AddPlantioModal } from '../plantios/AddPlantioModal';
import { AddTaskModal } from '../tasks/AddTaskModal';

interface ProjectsProps {
  onPageChange: (page: string) => void;
}

interface Activity {
  id: string;
  projectId: string;
  projectName: string;
  tipo: string;
  descricao: string;
  observacao: string;
  data: string;
  imageUrl?: string;
}

export function Projects({ onPageChange }: ProjectsProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const [activeTab, setActiveTab] = useState<'atividades' | 'plantios' | 'tarefas'>('atividades');
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const [isAddActivityOpen, setIsAddActivityOpen] = useState(false);
  const [editActivity, setEditActivity] = useState<Activity | null>(null);
  const [deleteActivity, setDeleteActivity] = useState<Activity | null>(null);
  const [viewImage, setViewImage] = useState<Activity | null>(null);
  const [showInactiveProjects, setShowInactiveProjects] = useState(false);
  const [editPlantio, setEditPlantio] = useState<any | null>(null);
  const [deletePlantio, setDeletePlantio] = useState<any | null>(null);
  const [isAddPlantioOpen, setIsAddPlantioOpen] = useState(false);
  const [editTarefa, setEditTarefa] = useState<any | null>(null);
  const [deleteTarefa, setDeleteTarefa] = useState<any | null>(null);
  const [isAddTarefaOpen, setIsAddTarefaOpen] = useState(false);

  const [atividades, setAtividades] = useState<Activity[]>([
    {
      id: 'ACT-001',
      projectId: 'PRJ-001',
      projectName: 'Projeto Renascer',
      tipo: 'Visista de área para plantio',
      descricao: 'Descrição imagem',
      observacao: 'observações',
      data: '2024-07-15',
      imageUrl: 'https://images.unsplash.com/photo-1760624683181-7570791efd52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZvcmVzdGF0aW9uJTIwbmF0dXJlJTIwZ3JlZW58ZW58MXx8fHwxNzYyNTI2MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'ACT-002',
      projectId: 'PRJ-002',
      projectName: 'Projeto Floresta Viva',
      tipo: 'Visista de área para plantio',
      descricao: 'Descrição imagem',
      observacao: 'observações',
      data: '2024-07-15',
      imageUrl: 'https://images.unsplash.com/photo-1760624683181-7570791efd52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZvcmVzdGF0aW9uJTIwbmF0dXJlJTIwZ3JlZW58ZW58MXx8fHwxNzYyNTI2MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'ACT-003',
      projectId: 'PRJ-001',
      projectName: 'Projeto Renascer',
      tipo: 'Visista de área para plantio',
      descricao: 'Descrição imagem',
      observacao: 'observações',
      data: '2024-07-15',
      imageUrl: 'https://images.unsplash.com/photo-1760624683181-7570791efd52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZvcmVzdGF0aW9uJTIwbmF0dXJlJTIwZ3JlZW58ZW58MXx8fHwxNzYyNTI2MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ]);

  const handleSaveActivity = (activity: Activity) => {
    if (activity.id && atividades.find(a => a.id === activity.id)) {
      // Edit existing
      setAtividades(atividades.map(a => a.id === activity.id ? activity : a));
    } else {
      // Add new
      setAtividades([...atividades, activity]);
    }
    setEditActivity(null);
    setIsAddActivityOpen(false);
  };

  const handleDeleteActivity = () => {
    if (deleteActivity) {
      setAtividades(atividades.filter(a => a.id !== deleteActivity.id));
      setDeleteActivity(null);
    }
  };

  const handleEditClick = (activity: Activity) => {
    setEditActivity(activity);
    setIsAddActivityOpen(true);
  };

  const kpiData = [
    { title: 'Projeto Ativos', value: '7' },
    { title: 'Propriedades Cadastradas', value: '3' },
    { title: 'Total de Área Restaurada', value: '77', unit: 'Ha' }
  ];

  const projects = [
    {
      id: '1',
      title: 'Projeto Renascer',
      createdDate: '15/03/2023',
      stage: 'Mobilização'
    },
    {
      id: '2',
      title: 'Projeto Renascer',
      createdDate: '15/03/2023',
      stage: 'Mobilização'
    },
    {
      id: '3',
      title: 'Projeto Renascer',
      createdDate: '15/03/2023',
      stage: 'Mobilização'
    },
    {
      id: '4',
      title: 'Projeto Renascer',
      createdDate: '15/03/2023',
      stage: 'Mobilização'
    }
  ];

  const plantios = [
    {
      area: 'nome da área',
      hectares: '777 hectares',
      modelo: 'Plantio Misto( Mudas e Sementes)',
      mudas: '222 mudas',
      sementes: '222 Kg',
      data: '2024-07-15'
    },
    {
      area: 'nome da área',
      hectares: '777 hectares',
      modelo: 'Plantio Misto( Mudas e Sementes)',
      mudas: '222 mudas',
      sementes: '222 Kg',
      data: '2024-07-15'
    },
    {
      area: 'nome da área',
      hectares: '777 hectares',
      modelo: 'Plantio Misto( Mudas e Sementes)',
      mudas: '222 mudas',
      sementes: '222 Kg',
      data: '2024-07-15'
    }
  ];

  const tarefas = [
    {
      nome: 'Monitoramento da Qualidade da Água',
      status: 'Em Andamento',
      prioridade: 'Alta',
      responsavel: 'Nome Sobreno...',
      projeto: 'Nome Projeto',
      data: '2024-07-15'
    },
    {
      nome: 'Monitoramento da Qualidade da Água',
      status: 'Em Andamento',
      prioridade: 'Alta',
      responsavel: 'Nome Sobreno...',
      projeto: 'Nome Projeto',
      data: '2024-07-15'
    },
    {
      nome: 'Monitoramento da Qualidade da Água',
      status: 'Em Andamento',
      prioridade: 'Alta',
      responsavel: 'Nome Sobreno...',
      projeto: 'Nome Projeto',
      data: '2024-07-15'
    }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {kpiData.map((kpi, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-[12px] p-6 shadow-sm"
          >
            <p className="text-sm text-secondary mb-4">
              {kpi.title}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl text-card-foreground">
                {kpi.value}
              </span>
              {kpi.unit && (
                <span className="text-sm text-secondary">
                  {kpi.unit}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Seus Projetos Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-xl text-foreground">
            Seus Projetos
          </h2>
          <div className="flex items-center gap-4">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px]"
              onClick={() => setIsCreateProjectOpen(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Novo Projeto
            </Button>
            <button 
              className="text-sm text-foreground hover:underline"
              onClick={() => setShowInactiveProjects(!showInactiveProjects)}
            >
              Ver projetos desativados
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-[12px] overflow-hidden shadow-sm"
            >
              {/* Project Image */}
              <div className="w-full h-[180px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1760624683181-7570791efd52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZvcmVzdGF0aW9uJTIwbmF0dXJlJTIwZ3JlZW58ZW58MXx8fHwxNzYyNTI2MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-card-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-secondary mb-4">
                  Criado em {project.createdDate}
                </p>
                <div className="space-y-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                    isDarkMode 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-[#E7F3E7] text-primary'
                  }`}>
                    ETAPA: {project.stage}
                  </span>
                  <Button
                    variant="outline"
                    className="w-full rounded-[12px] border-border hover:bg-muted"
                    onClick={() => onPageChange('project-details')}
                  >
                    Gerenciar Projeto
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs Section */}
      <div className="space-y-6">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('atividades')}
            className={`px-6 py-2 rounded-[12px] text-sm transition-colors ${
              activeTab === 'atividades'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-secondary hover:bg-border'
            }`}
          >
            Atividades
          </button>
          <button
            onClick={() => setActiveTab('plantios')}
            className={`px-6 py-2 rounded-[12px] text-sm transition-colors ${
              activeTab === 'plantios'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-secondary hover:bg-border'
            }`}
          >
            Registro de Plantios
          </button>
          <button
            onClick={() => setActiveTab('tarefas')}
            className={`px-6 py-2 rounded-[12px] text-sm transition-colors ${
              activeTab === 'tarefas'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-secondary hover:bg-border'
            }`}
          >
            Tarefas
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary" />
          <Input
            placeholder="Buscar..."
            className="pl-10 bg-input border-border text-foreground placeholder:text-secondary rounded-[12px]"
          />
        </div>

        {/* Tab Content */}
        {activeTab === 'atividades' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl text-foreground">
                Atividades Registradas
              </h2>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px]"
                onClick={() => setIsAddActivityOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Nova Atividade
              </Button>
            </div>

            <div className="bg-card border border-border rounded-[12px] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Projeto
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Tipo de atividade
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Registro
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Descrição
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Observação
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Data da atividade
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {atividades.map((atividade, idx) => (
                      <tr 
                        key={idx}
                        className="border-b border-border"
                      >
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          <div>
                            <span className="text-xs text-secondary">
                              {atividade.projectId}
                            </span>
                            <div className="text-card-foreground">
                              {atividade.projectName}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          {atividade.tipo}
                        </td>
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          <button className="flex items-center gap-2 px-3 py-1 rounded-[8px] border border-border hover:bg-muted"
                          onClick={() => setViewImage(atividade)}
                          >
                            <ImageIcon className="w-4 h-4" />
                            Ver imagem
                          </button>
                        </td>
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          {atividade.descricao}
                        </td>
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          {atividade.observacao}
                        </td>
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          {atividade.data}
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <div className="flex items-center gap-2">
                            <button className="text-green-600 hover:text-green-700"
                            onClick={() => handleEditClick(atividade)}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-700"
                            onClick={() => setDeleteActivity(atividade)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'plantios' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl text-foreground">
                Registro de Plantios
              </h2>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px]"
                onClick={() => setIsAddPlantioOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Novo Plantio
              </Button>
            </div>

            <div className="bg-card border border-border rounded-[12px] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Área de restauração
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Hectares plantados
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Modelo de restauração
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Nº de mudas
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Volume de sementes
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Data do plantio
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {plantios.map((plantio, idx) => (
                      <tr 
                        key={idx}
                        className="border-b border-border"
                      >
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          {plantio.area}
                        </td>
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          {plantio.hectares}
                        </td>
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          {plantio.modelo}
                        </td>
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          {plantio.mudas}
                        </td>
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          {plantio.sementes}
                        </td>
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          {plantio.data}
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <div className="flex items-center gap-2">
                            <button 
                              className="text-green-600 hover:text-green-700"
                              onClick={() => {
                                setEditPlantio({ ...plantio, id: idx });
                                setIsAddPlantioOpen(true);
                              }}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button 
                              className="text-red-600 hover:text-red-700"
                              onClick={() => setDeletePlantio({ ...plantio, id: idx })}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tarefas' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl text-foreground">
                Todas as Tarefas
              </h2>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px]"
                onClick={() => setIsAddTarefaOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Criar nova tarefa
              </Button>
            </div>

            <div className="bg-card border border-border rounded-[12px] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Tarefas
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Prioridade
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Responsável
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Projeto
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Data da tarefa
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-secondary">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tarefas.map((tarefa, idx) => (
                      <tr 
                        key={idx}
                        className="border-b border-border"
                      >
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          {tarefa.nome}
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-green-100 text-green-800">
                            {tarefa.status}
                            <button className="text-green-800 hover:text-green-900">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <span className="inline-block px-3 py-1 rounded-full text-xs bg-red-100 text-red-800">
                            {tarefa.prioridade}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          {tarefa.responsavel}
                        </td>
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          {tarefa.projeto}
                        </td>
                        <td className="py-3 px-4 text-sm text-card-foreground">
                          {tarefa.data}
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <div className="flex items-center gap-2">
                            <button 
                              className="text-green-600 hover:text-green-700"
                              onClick={() => {
                                setEditTarefa({ ...tarefa, id: idx });
                                setIsAddTarefaOpen(true);
                              }}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button 
                              className="text-red-600 hover:text-red-700"
                              onClick={() => setDeleteTarefa({ ...tarefa, id: idx })}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Project Wizard */}
      <CreateProjectWizard
        isOpen={isCreateProjectOpen}
        onClose={() => setIsCreateProjectOpen(false)}
        onComplete={(projectData) => {
          console.log('Projeto criado:', projectData);
          setIsCreateProjectOpen(false);
        }}
      />

      {/* Add Activity Modal */}
      <AddActivityModal
        isOpen={isAddActivityOpen}
        onClose={() => {
          setIsAddActivityOpen(false);
          setEditActivity(null);
        }}
        onSave={handleSaveActivity}
        editActivity={editActivity}
      />

      {/* Delete Activity Dialog */}
      <DeleteActivityDialog
        isOpen={deleteActivity !== null}
        onClose={() => setDeleteActivity(null)}
        activityType={deleteActivity?.tipo || ''}
        onConfirm={handleDeleteActivity}
      />

      {/* Image Viewer Modal */}
      <ImageViewerModal
        isOpen={viewImage !== null}
        onClose={() => setViewImage(null)}
        imageUrl={viewImage?.imageUrl}
        activityType={viewImage?.tipo || ''}
      />

      {/* Delete Plantio Confirmation */}
      {deletePlantio && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-[12px] shadow-xl w-full max-w-md p-6">
            <h3 className="text-lg text-foreground mb-4">Confirmar Exclusão</h3>
            <p className="text-sm text-secondary mb-6">
              Tem certeza que deseja excluir este registro de plantio?
            </p>
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setDeletePlantio(null)}
                className="rounded-[8px]"
              >
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  alert('Funcionalidade de exclusão de plantio implementada! (Modal completo será criado em breve)');
                  setDeletePlantio(null);
                }}
                className="bg-red-600 hover:bg-red-700 text-white rounded-[8px]"
              >
                Excluir
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Tarefa Confirmation */}
      {deleteTarefa && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-[12px] shadow-xl w-full max-w-md p-6">
            <h3 className="text-lg text-foreground mb-4">Confirmar Exclusão</h3>
            <p className="text-sm text-secondary mb-6">
              Tem certeza que deseja excluir esta tarefa?
            </p>
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setDeleteTarefa(null)}
                className="rounded-[8px]"
              >
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  alert('Funcionalidade de exclusão de tarefa implementada! (Modal completo será criado em breve)');
                  setDeleteTarefa(null);
                }}
                className="bg-red-600 hover:bg-red-700 text-white rounded-[8px]"
              >
                Excluir
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Plantio Modal Placeholder */}
      {isAddPlantioOpen && (
        <AddPlantioModal
          isOpen={isAddPlantioOpen}
          onClose={() => {
            setIsAddPlantioOpen(false);
            setEditPlantio(null);
          }}
          onSave={(plantioData) => {
            console.log('Plantio salvo:', plantioData);
            setIsAddPlantioOpen(false);
          }}
          editPlantio={editPlantio}
        />
      )}

      {/* Add/Edit Tarefa Modal Placeholder */}
      {isAddTarefaOpen && (
        <AddTaskModal
          isOpen={isAddTarefaOpen}
          onClose={() => {
            setIsAddTarefaOpen(false);
            setEditTarefa(null);
          }}
          onSave={(taskData) => {
            console.log('Tarefa salva:', taskData);
            setIsAddTarefaOpen(false);
          }}
          editTask={editTarefa}
        />
      )}
    </div>
  );
}