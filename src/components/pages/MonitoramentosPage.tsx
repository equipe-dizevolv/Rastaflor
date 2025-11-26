import { useState } from 'react';
import { Eye, Plus, Filter, Download, Pencil, Trash2 } from 'lucide-react';
import { RegistrarMonitoramentoModal, MonitoringFormData } from '../modals/RegistrarMonitoramentoModal';
import { EditMonitoramentoModal, MonitoringRecord as EditMonitoringRecord } from '../modals/EditMonitoramentoModal';

interface MonitoringRecord {
  id: string;
  propriedade: string;
  area: string;
  matriz: string;
  dataMonitoramento: string;
  responsavel: string;
  estagios: string[];
  observacoes: string;
}

export function MonitoramentosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingMonitoring, setEditingMonitoring] = useState<MonitoringRecord | null>(null);
  
  // Mock de monitoramentos registrados
  const [monitorings, setMonitorings] = useState<MonitoringRecord[]>([
    {
      id: '1',
      propriedade: 'Fazenda São João',
      area: 'Área A - Várzea',
      matriz: 'Matriz #001',
      dataMonitoramento: '15/11/2025',
      responsavel: 'João Silva',
      estagios: ['floracao', 'fruto-verde'],
      observacoes: 'Floração intensa, clima favorável',
    },
    {
      id: '2',
      propriedade: 'Sítio Primavera',
      area: 'Área B - Colina',
      matriz: 'Matriz #003',
      dataMonitoramento: '18/11/2025',
      responsavel: 'Maria Santos',
      estagios: ['fruto-maduro'],
      observacoes: 'Frutos prontos para coleta',
    },
    {
      id: '3',
      propriedade: 'Fazenda São João',
      area: 'Área C - Mata',
      matriz: 'Matriz #005',
      dataMonitoramento: '19/11/2025',
      responsavel: 'Pedro Oliveira',
      estagios: ['vegetativo'],
      observacoes: 'Desenvolvimento vegetativo normal',
    },
    {
      id: '4',
      propriedade: 'Chácara Verde',
      area: 'Área A - Margem',
      matriz: 'Matriz #007',
      dataMonitoramento: '20/11/2025',
      responsavel: 'Ana Costa',
      estagios: ['floracao'],
      observacoes: 'Início da floração',
    },
    {
      id: '5',
      propriedade: 'Fazenda Esperança',
      area: 'Área D - Pasto',
      matriz: 'Matriz #010',
      dataMonitoramento: '21/11/2025',
      responsavel: 'João Silva',
      estagios: ['frutificacao', 'fruto-verde'],
      observacoes: 'Frutificação abundante',
    },
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveMonitoring = (formData: MonitoringFormData) => {
    // Mock: adicionar novo monitoramento
    const newMonitoring: MonitoringRecord = {
      id: Date.now().toString(),
      propriedade: 'Nova Propriedade',
      area: 'Nova Área',
      matriz: 'Nova Matriz',
      dataMonitoramento: formData.dataMonitoramento?.toLocaleDateString('pt-BR') || '',
      responsavel: formData.responsavel,
      estagios: formData.estagios,
      observacoes: formData.observacoes,
    };
    
    setMonitorings([newMonitoring, ...monitorings]);
  };

  const handleEdit = (id: string) => {
    const monitoring = monitorings.find(m => m.id === id);
    if (monitoring) {
      setEditingMonitoring(monitoring);
      setIsEditModalOpen(true);
    }
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditingMonitoring(null);
  };

  const handleSaveEditedMonitoring = (formData: MonitoringFormData) => {
    if (!editingMonitoring) return;

    // Atualizar o monitoramento existente
    const updatedMonitoring: MonitoringRecord = {
      ...editingMonitoring,
      dataMonitoramento: formData.dataMonitoramento?.toLocaleDateString('pt-BR') || editingMonitoring.dataMonitoramento,
      responsavel: formData.responsavel,
      estagios: formData.estagios,
      observacoes: formData.observacoes,
    };
    
    setMonitorings(monitorings.map(m => m.id === editingMonitoring.id ? updatedMonitoring : m));
    setIsEditModalOpen(false);
    setEditingMonitoring(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este monitoramento?')) {
      setMonitorings(monitorings.filter(m => m.id !== id));
    }
  };

  const getEstagioColor = (estagioId: string) => {
    const cores: Record<string, string> = {
      'vegetativo': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      'floracao': 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400',
      'frutificacao': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
      'fruto-verde': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      'fruto-maduro': 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400',
      'dispersao': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    };
    return cores[estagioId] || 'bg-gray-100 text-gray-800';
  };

  const getEstagioLabel = (estagioId: string) => {
    const labels: Record<string, string> = {
      'vegetativo': 'Vegetativo',
      'floracao': 'Floração',
      'frutificacao': 'Frutificação',
      'fruto-verde': 'Fruto Verde',
      'fruto-maduro': 'Fruto Maduro',
      'dispersao': 'Dispersão',
    };
    return labels[estagioId] || estagioId;
  };

  return (
    <div className="px-6 pb-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[#1A1A1A] dark:text-white flex items-center gap-2">
            <Eye className="w-6 h-6 text-green-600" />
            Monitoramentos Fenológicos
          </h2>
          <p className="text-[#777777] dark:text-[#B0B0B0]">
            Acompanhamento do desenvolvimento das matrizes
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm">
            <Filter className="w-4 h-4" />
            <span>Filtros</span>
          </button>
          <button className="px-4 py-2 bg-white dark:bg-card border border-[#0f3d26] text-[#0f3d26] dark:text-white rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] transition-colors flex items-center gap-2 text-sm">
            <Download className="w-4 h-4" />
            <span>Exportar Lista</span>
          </button>
          <button
            onClick={handleOpenModal}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Novo Monitoramento</span>
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[12px] shadow-sm overflow-hidden">
        {/* Card Header */}
        <div className="p-6 border-b border-[#E0E0E0] dark:border-border flex items-center justify-between">
          <h3 className="text-[#1A1A1A] dark:text-white">
            Monitoramentos Registrados ({monitorings.length})
          </h3>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm">
            <Filter className="w-4 h-4" />
            <span>Filtros</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E0E0E0] dark:border-border bg-[#F8F8F8] dark:bg-[#1E2621]">
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Propriedade
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Áreas da propriedade
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Matriz ou Local Monitorado
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Data do Monitoramento
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Responsável
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Estágio
                </th>
                <th className="px-4 py-3 text-right text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {monitorings.map((monitoring) => (
                <tr
                  key={monitoring.id}
                  className="border-b border-[#E0E0E0] dark:border-border hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors"
                >
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#1A1A1A] dark:text-white">
                      {monitoring.propriedade}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#1A1A1A] dark:text-white">
                      {monitoring.area}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#1A1A1A] dark:text-white">
                      {monitoring.matriz}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#1A1A1A] dark:text-white">
                      {monitoring.dataMonitoramento}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#1A1A1A] dark:text-white">
                      {monitoring.responsavel}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-1">
                      {monitoring.estagios.map((estagio) => (
                        <span
                          key={estagio}
                          className={`px-2 py-1 rounded-[4px] text-xs ${getEstagioColor(estagio)}`}
                        >
                          {getEstagioLabel(estagio)}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(monitoring.id)}
                        className="p-2 rounded-[8px] hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] transition-colors"
                        title="Editar"
                      >
                        <Pencil className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                      </button>
                      <button
                        onClick={() => handleDelete(monitoring.id)}
                        className="p-2 rounded-[8px] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        title="Excluir"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {monitorings.length === 0 && (
          <div className="p-12 text-center">
            <Eye className="w-12 h-12 text-[#E0E0E0] dark:text-border mx-auto mb-4" />
            <h3 className="text-[#1A1A1A] dark:text-white mb-2">
              Nenhum monitoramento registrado
            </h3>
            <p className="text-sm text-[#777777] dark:text-[#B0B0B0] mb-4">
              Clique em "Novo Monitoramento" para adicionar seu primeiro registro
            </p>
            <button
              onClick={handleOpenModal}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Criar Primeiro Monitoramento</span>
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <RegistrarMonitoramentoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveMonitoring}
      />
      
      {/* Edit Modal */}
      <EditMonitoramentoModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        initialData={editingMonitoring}
        onSave={handleSaveEditedMonitoring}
      />
    </div>
  );
}