import { useState } from 'react';
import { Tag, Plus, Printer, Filter, Eye, Pencil, Copy, Trash2 } from 'lucide-react';
import { GerarRotuloModal, LabelFormData } from '../modals/GerarRotuloModal';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Checkbox } from '../ui/checkbox';

interface SavedLabel {
  id: string;
  lote: string;
  nomePopular: string;
  nomeCientifico: string;
  nomeComprador: string;
  dataColeta: string;
  peso: string;
  // Campos extras do formulário completo
  renasem?: string;
  cnpj?: string;
  porcentagemGerminacao?: string;
  validadeTeste?: string;
  municipioColeta?: string;
  destino?: string;
}

interface RotulosPageProps {
  onGenerateLabels: (items: any[]) => void;
}

export function RotulosPage({ onGenerateLabels }: RotulosPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  
  // Mock de rótulos cadastrados
  const [savedLabels, setSavedLabels] = useState<SavedLabel[]>([
    {
      id: '1',
      lote: 'LT-2025-001',
      nomePopular: 'Ipê-amarelo',
      nomeCientifico: 'Handroanthus chrysotrichus',
      nomeComprador: 'Viveiro Flora Nativa',
      dataColeta: '14/09/2025',
      peso: '2.5',
    },
    {
      id: '2',
      lote: 'LT-2025-002',
      nomePopular: 'Cedro',
      nomeCientifico: 'Cedrela fissilis',
      nomeComprador: 'Prefeitura Municipal',
      dataColeta: '19/09/2025',
      peso: '1.8',
    },
    {
      id: '3',
      lote: 'LT-2025-003',
      nomePopular: 'Peroba-rosa',
      nomeCientifico: 'Aspidosperma polyneuron',
      nomeComprador: 'Instituto Refloresta',
      dataColeta: '22/09/2025',
      peso: '3.2',
    },
    {
      id: '4',
      lote: 'LT-2025-004',
      nomePopular: 'Jatobá',
      nomeCientifico: 'Hymenaea courbaril',
      nomeComprador: 'Fazenda Verde Vale',
      dataColeta: '25/09/2025',
      peso: '4.5',
    },
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddLabel = (formData: LabelFormData) => {
    const newLabel: SavedLabel = {
      id: Date.now().toString(),
      lote: formData.lote || `LT-${new Date().getFullYear()}-${String(savedLabels.length + 1).padStart(3, '0')}`,
      nomePopular: formData.nomePopular,
      nomeCientifico: formData.nomeCientifico,
      nomeComprador: formData.nomeComprador,
      dataColeta: formData.dataColeta ? format(formData.dataColeta, 'dd/MM/yyyy', { locale: ptBR }) : 'N/A',
      peso: formData.peso,
      renasem: formData.renasem,
      cnpj: formData.cnpj,
      porcentagemGerminacao: formData.porcentagemGerminacao,
      validadeTeste: formData.validadeTeste,
      municipioColeta: formData.municipioColeta,
      destino: formData.destino,
    };

    setSavedLabels([...savedLabels, newLabel]);
  };

  const handleToggleLabel = (id: string) => {
    setSelectedLabels(prev =>
      prev.includes(id)
        ? prev.filter(labelId => labelId !== id)
        : [...prev, id]
    );
  };

  const handleToggleAll = () => {
    if (selectedLabels.length === savedLabels.length) {
      setSelectedLabels([]);
    } else {
      setSelectedLabels(savedLabels.map(label => label.id));
    }
  };

  const handlePrintSelected = () => {
    if (selectedLabels.length === 0) {
      alert('Selecione pelo menos um rótulo para imprimir');
      return;
    }
    
    const selectedItems = savedLabels
      .filter(label => selectedLabels.includes(label.id))
      .map(label => ({
        id: label.id,
        lote: label.lote,
        species: label.nomePopular,
        collectionDate: label.dataColeta,
        weight: label.peso,
        copies: 1
      }));
    
    onGenerateLabels(selectedItems);
  };

  const handleViewLabel = (id: string) => {
    // TODO: Implementar visualização detalhada
    console.log('Visualizar rótulo:', id);
  };

  const handleEditLabel = (id: string) => {
    // TODO: Implementar edição
    console.log('Editar rótulo:', id);
  };

  const handleDuplicateLabel = (id: string) => {
    const labelToDuplicate = savedLabels.find(label => label.id === id);
    if (labelToDuplicate) {
      const duplicated: SavedLabel = {
        ...labelToDuplicate,
        id: Date.now().toString(),
        lote: `${labelToDuplicate.lote}-COPY`,
      };
      setSavedLabels([...savedLabels, duplicated]);
    }
  };

  const handleDeleteLabel = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este rótulo?')) {
      setSavedLabels(savedLabels.filter(label => label.id !== id));
      setSelectedLabels(selectedLabels.filter(labelId => labelId !== id));
    }
  };

  return (
    <div className="px-6 pb-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[#1A1A1A] dark:text-white flex items-center gap-2">
            <Tag className="w-6 h-6 text-green-600" />
            Gestão de Rótulos
          </h2>
          <p className="text-[#777777] dark:text-[#B0B0B0]">
            Criação e gerenciamento de rótulos para lotes de sementes
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrintSelected}
            disabled={selectedLabels.length === 0}
            className="px-4 py-2 bg-white dark:bg-card border border-[#0f3d26] text-[#0f3d26] dark:text-white rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] transition-colors flex items-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir Selecionados ({selectedLabels.length})</span>
          </button>
          <button
            onClick={handleOpenModal}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Criar Rótulo</span>
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[12px] shadow-sm overflow-hidden">
        {/* Card Header */}
        <div className="p-6 border-b border-[#E0E0E0] dark:border-border flex items-center justify-between">
          <h3 className="text-[#1A1A1A] dark:text-white">
            Rótulos Cadastrados ({savedLabels.length})
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
                <th className="px-4 py-3 text-left w-12">
                  <Checkbox
                    checked={selectedLabels.length === savedLabels.length && savedLabels.length > 0}
                    onCheckedChange={handleToggleAll}
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Lote de Sementes
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Nome Popular
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Nome do Comprador
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Nome Científico
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Data da Coleta
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Peso na embalagem (kg)
                </th>
                <th className="px-4 py-3 text-right text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {savedLabels.map((label) => (
                <tr
                  key={label.id}
                  className="border-b border-[#E0E0E0] dark:border-border hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors"
                >
                  <td className="px-4 py-4">
                    <Checkbox
                      checked={selectedLabels.includes(label.id)}
                      onCheckedChange={() => handleToggleLabel(label.id)}
                    />
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#1A1A1A] dark:text-white font-mono">
                      {label.lote}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#1A1A1A] dark:text-white">
                      {label.nomePopular}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#777777] dark:text-[#B0B0B0]">
                      {label.nomeComprador || '-'}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#1A1A1A] dark:text-white italic">
                      {label.nomeCientifico}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#1A1A1A] dark:text-white">
                      {label.dataColeta}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#1A1A1A] dark:text-white">
                      {label.peso} kg
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleViewLabel(label.id)}
                        className="p-2 rounded-[8px] hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] transition-colors"
                        title="Visualizar"
                      >
                        <Eye className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                      </button>
                      <button
                        onClick={() => handleEditLabel(label.id)}
                        className="p-2 rounded-[8px] hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] transition-colors"
                        title="Editar"
                      >
                        <Pencil className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                      </button>
                      <button
                        onClick={() => handleDuplicateLabel(label.id)}
                        className="p-2 rounded-[8px] hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] transition-colors"
                        title="Duplicar"
                      >
                        <Copy className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                      </button>
                      <button
                        onClick={() => handleDeleteLabel(label.id)}
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
        {savedLabels.length === 0 && (
          <div className="p-12 text-center">
            <Tag className="w-12 h-12 text-[#E0E0E0] dark:text-border mx-auto mb-4" />
            <h3 className="text-[#1A1A1A] dark:text-white mb-2">
              Nenhum rótulo cadastrado
            </h3>
            <p className="text-sm text-[#777777] dark:text-[#B0B0B0] mb-4">
              Clique em "Criar Rótulo" para adicionar seu primeiro rótulo
            </p>
            <button
              onClick={handleOpenModal}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Criar Primeiro Rótulo</span>
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <GerarRotuloModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToList={handleAddLabel}
      />
    </div>
  );
}
