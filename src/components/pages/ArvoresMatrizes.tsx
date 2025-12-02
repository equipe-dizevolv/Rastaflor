import { Plus, Search, Edit2, Trash2, Eye, MapPin } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { AddMatrixModal, MatrixFormData } from '../modals/AddMatrixModal';
import { ConfirmDeleteModal } from '../modals/ConfirmDeleteModal';

interface ArvoreMatriz {
  id: number;
  dataRegistro: string;
  nomePopular: string;
  genero: string;
  especie: string;
  local: string;
  etapaFenologia: string;
  numeroIdentificacao: string;
}

export function ArvoresMatrizes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedMatriz, setSelectedMatriz] = useState<ArvoreMatriz | null>(null);

  const mockMatrizes: ArvoreMatriz[] = [
    {
      id: 1,
      dataRegistro: '15/01/2024',
      nomePopular: 'Ipê-amarelo',
      genero: 'Handroanthus',
      especie: 'chrysotrichus',
      local: 'Fazenda Santa Rita - Talhão A',
      etapaFenologia: 'Florescendo',
      numeroIdentificacao: 'MAT-001'
    },
    {
      id: 2,
      dataRegistro: '20/01/2024',
      nomePopular: 'Pau-brasil',
      genero: 'Paubrasilia',
      especie: 'echinata',
      local: 'Sítio Boa Vista - Área de Conservação',
      etapaFenologia: 'Frutificando',
      numeroIdentificacao: 'MAT-002'
    },
    {
      id: 3,
      dataRegistro: '25/01/2024',
      nomePopular: 'Jatobá',
      genero: 'Hymenaea',
      especie: 'courbaril',
      local: 'Fazenda São José - Corredor Ecológico',
      etapaFenologia: 'Coletada',
      numeroIdentificacao: 'MAT-003'
    },
    {
      id: 4,
      dataRegistro: '05/02/2024',
      nomePopular: 'Cedro',
      genero: 'Cedrela',
      especie: 'fissilis',
      local: 'Chácara Verde - Mata Nativa',
      etapaFenologia: 'Vegetativo',
      numeroIdentificacao: 'MAT-004'
    },
    {
      id: 5,
      dataRegistro: '10/02/2024',
      nomePopular: 'Araucária',
      genero: 'Araucaria',
      especie: 'angustifolia',
      local: 'Fazenda Alto da Serra - Fragmento Florestal',
      etapaFenologia: 'Florescendo',
      numeroIdentificacao: 'MAT-005'
    },
    {
      id: 6,
      dataRegistro: '15/02/2024',
      nomePopular: 'Peroba-rosa',
      genero: 'Aspidosperma',
      especie: 'polyneuron',
      local: 'Sítio Recanto - Borda de Mata',
      etapaFenologia: 'Vegetativo',
      numeroIdentificacao: 'MAT-006'
    },
    {
      id: 7,
      dataRegistro: '20/02/2024',
      nomePopular: 'Jacarandá',
      genero: 'Dalbergia',
      especie: 'nigra',
      local: 'Fazenda Primavera - APP',
      etapaFenologia: 'Frutificando',
      numeroIdentificacao: 'MAT-007'
    },
    {
      id: 8,
      dataRegistro: '25/02/2024',
      nomePopular: 'Jequitibá-rosa',
      genero: 'Cariniana',
      especie: 'legalis',
      local: 'Fazenda Monte Verde - Reserva Legal',
      etapaFenologia: 'Coletada',
      numeroIdentificacao: 'MAT-008'
    }
  ];

  const filteredMatrizes = mockMatrizes.filter(matriz =>
    matriz.nomePopular.toLowerCase().includes(searchTerm.toLowerCase()) ||
    matriz.genero.toLowerCase().includes(searchTerm.toLowerCase()) ||
    matriz.especie.toLowerCase().includes(searchTerm.toLowerCase()) ||
    matriz.local.toLowerCase().includes(searchTerm.toLowerCase()) ||
    matriz.numeroIdentificacao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddMatriz = () => {
    setIsAddModalOpen(true);
  };

  const handleSaveMatrix = (data: MatrixFormData) => {
    console.log('Salvando matriz:', data);
    toast.success('Matriz cadastrada com sucesso!', {
      description: `${data.popularName} foi adicionada ao sistema.`
    });
    setIsAddModalOpen(false);
    // TODO: Implementar lógica de salvamento no backend
  };

  const handleViewDetails = (matriz: ArvoreMatriz) => {
    toast.info(`Visualizando detalhes de ${matriz.nomePopular}`, {
      description: `Matriz: ${matriz.numeroIdentificacao}`
    });
    // TODO: Implementar visualização de detalhes
  };

  const handleEditMatriz = (matriz: ArvoreMatriz) => {
    toast.info(`Editando ${matriz.nomePopular}`, {
      description: 'Modal de edição será implementado'
    });
    // TODO: Implementar edição
  };

  const handleDeleteMatriz = (matriz: ArvoreMatriz) => {
    setSelectedMatriz(matriz);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteMatriz = () => {
    if (selectedMatriz) {
      toast.success('Matriz removida com sucesso!', {
        description: `${selectedMatriz.nomePopular} foi removida do sistema.`
      });
      // TODO: Implementar lógica de exclusão
    }
    setIsDeleteModalOpen(false);
  };

  const getStatusColor = (etapa: string) => {
    switch (etapa.toLowerCase()) {
      case 'florescendo':
        return 'bg-yellow-100 text-yellow-800';
      case 'frutificando':
        return 'bg-orange-100 text-orange-800';
      case 'coletada':
        return 'bg-green-100 text-green-800';
      case 'vegetativo':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="px-6 pb-6 space-y-6">
      {/* Search and Add Button */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777777] w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar por nome, gênero, espécie, local ou ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[#E0E0E0] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent"
          />
        </div>
        <button
          onClick={handleAddMatriz}
          className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[12px] px-4 py-2 flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Nova Matriz</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#E0E0E0] rounded-[12px] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8F8F8] border-b border-[#E0E0E0]">
              <tr>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Data de Registro
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Nome Popular
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Gênero
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Espécie
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Local
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Etapa da Fenologia
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Nº de Identificação
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#777777] uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E0E0E0]">
              {filteredMatrizes.map((matriz) => (
                <tr key={matriz.id} className="hover:bg-[#F8F8F8] transition-colors">
                  <td className="px-4 py-3 text-[14px] text-[#1A1A1A] whitespace-nowrap">
                    {matriz.dataRegistro}
                  </td>
                  <td className="px-4 py-3 text-[14px] text-[#1A1A1A] font-medium">
                    {matriz.nomePopular}
                  </td>
                  <td className="px-4 py-3 text-[14px] text-[#777777]">
                    {matriz.genero}
                  </td>
                  <td className="px-4 py-3 text-[14px] text-[#777777] italic">
                    {matriz.especie}
                  </td>
                  <td className="px-4 py-3 text-[14px] text-[#777777] max-w-xs">
                    <div className="flex items-start gap-1">
                      <MapPin className="w-3 h-3 mt-1 flex-shrink-0 text-[#0F3D26]" />
                      <span className="line-clamp-2">{matriz.local}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[14px] whitespace-nowrap">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-[12px] font-medium ${getStatusColor(matriz.etapaFenologia)}`}>
                      {matriz.etapaFenologia}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[14px] text-[#1A1A1A] font-mono font-medium">
                    {matriz.numeroIdentificacao}
                  </td>
                  <td className="px-4 py-3 text-[14px] whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleViewDetails(matriz)}
                        className="p-1.5 text-[#777777] hover:text-[#0F3D26] hover:bg-[#F0F0F0] rounded-lg transition-colors"
                        title="Ver detalhes"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditMatriz(matriz)}
                        className="p-1.5 text-[#777777] hover:text-[#0F3D26] hover:bg-[#F0F0F0] rounded-lg transition-colors"
                        title="Editar"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteMatriz(matriz)}
                        className="p-1.5 text-[#777777] hover:text-red-600 hover:bg-[#F0F0F0] rounded-lg transition-colors"
                        title="Excluir"
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

        {/* Empty State */}
        {filteredMatrizes.length === 0 && (
          <div className="p-12 text-center">
            <div className="max-w-sm mx-auto">
              <div className="w-16 h-16 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[#777777]" />
              </div>
              <h3 className="text-[16px] font-medium text-[#1A1A1A] mb-2">
                Nenhuma matriz encontrada
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

        {/* Table Footer with Count */}
        {filteredMatrizes.length > 0 && (
          <div className="px-4 py-3 bg-[#F8F8F8] border-t border-[#E0E0E0]">
            <p className="text-[12px] text-[#777777]">
              Mostrando {filteredMatrizes.length} de {mockMatrizes.length} {mockMatrizes.length === 1 ? 'matriz' : 'matrizes'}
            </p>
          </div>
        )}
      </div>

      {/* Add Matrix Modal */}
      <AddMatrixModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveMatrix}
      />

      {/* Confirm Delete Modal */}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDeleteMatriz}
        message={`Tem certeza que deseja remover a matriz ${selectedMatriz?.numeroIdentificacao}?`}
      />
    </div>
  );
}