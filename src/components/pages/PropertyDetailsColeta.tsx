import { useState } from 'react';
import { MapPin, Users, TreeDeciduous, BarChart3, Navigation, Check, Eye, Edit, Trash2, Plus } from 'lucide-react';
import svgPaths from "../../imports/svg-vylkh7nglq";
import { AddMatrixModal, MatrixFormData } from '../modals/AddMatrixModal';

interface PropertyData {
  id: string;
  name: string;
  location: string;
  owners: string[];
  address: string;
  totalArea: string;
  coordinates: string;
  areasCount: number;
  matricesCount: number;
  lastCollection: string;
}

interface AreaData {
  id: string;
  name: string;
  size: string;
  matricesCount: number;
  lastCollection: string;
  status: 'Ativa' | 'Inativa';
}

interface MatrixData {
  id: string;
  commonName: string;
  scientificName: string;
  area: string;
  registrationDate: string;
  status: 'Ativa' | 'Inativa' | 'Monitoramento';
}

const mockAreas: AreaData[] = [
  {
    id: 'AREA-001',
    name: 'Área Norte',
    size: '85 ha',
    matricesCount: 12,
    lastCollection: '15/10/2025',
    status: 'Ativa'
  },
  {
    id: 'AREA-002',
    name: 'Área Sul',
    size: '95 ha',
    matricesCount: 8,
    lastCollection: '10/10/2025',
    status: 'Ativa'
  },
  {
    id: 'AREA-003',
    name: 'Área Central',
    size: '70 ha',
    matricesCount: 4,
    lastCollection: '08/10/2025',
    status: 'Monitoramento'
  }
];

const mockMatrices: MatrixData[] = [
  {
    id: 'MAT-001',
    commonName: 'Ipê-amarelo',
    scientificName: 'Handroanthus chrysotrichus',
    area: 'Área Norte',
    registrationDate: '15/03/2025',
    status: 'Ativa'
  },
  {
    id: 'MAT-002',
    commonName: 'Pau-brasil',
    scientificName: 'Paubrasilia echinata',
    area: 'Área Norte',
    registrationDate: '20/03/2025',
    status: 'Ativa'
  },
  {
    id: 'MAT-003',
    commonName: 'Jatobá',
    scientificName: 'Hymenaea courbaril',
    area: 'Área Sul',
    registrationDate: '10/04/2025',
    status: 'Ativa'
  },
  {
    id: 'MAT-004',
    commonName: 'Cedro',
    scientificName: 'Cedrela fissilis',
    area: 'Área Sul',
    registrationDate: '15/04/2025',
    status: 'Monitoramento'
  },
  {
    id: 'MAT-005',
    commonName: 'Angico-vermelho',
    scientificName: 'Anadenanthera macrocarpa',
    area: 'Área Central',
    registrationDate: '01/05/2025',
    status: 'Ativa'
  }
];

interface PropertyDetailsColetaProps {
  property: PropertyData;
  onBack: () => void;
}

type TabType = 'overview' | 'areas' | 'matrices';

export function PropertyDetailsColeta({ property, onBack }: PropertyDetailsColetaProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isAddMatrixModalOpen, setIsAddMatrixModalOpen] = useState(false);

  const handleAddMatrix = () => {
    setIsAddMatrixModalOpen(true);
  };

  const handleMatrixFormSubmit = (formData: MatrixFormData) => {
    console.log('Nova matriz cadastrada:', formData);
    // Aqui você adicionaria a lógica para salvar no backend
    setIsAddMatrixModalOpen(false);
  };

  return (
    <div className="px-6 pb-6 space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#777777] dark:text-[#B0B0B0] hover:text-[#1A1A1A] dark:hover:text-white transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor">
          <path d={svgPaths.p2d4cee60} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33333} />
          <path d="M12.6569 7.99381H3.33076" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33333} />
        </svg>
        <span className="text-sm">Voltar para Propriedades</span>
      </button>

      {/* Header with Property Name and Stats */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6 text-green-600" />
          <div>
            <h2 className="text-[#1A1A1A] dark:text-white">{property.name}</h2>
            <p className="text-[#777777] dark:text-[#B0B0B0]">{property.location}</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-3">
          <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[14px] px-4 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-[#777777] dark:text-[#B0B0B0] text-sm">Áreas</p>
                <p className="text-[#1A1A1A] dark:text-white text-xl">{property.areasCount}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[14px] px-4 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <TreeDeciduous className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-[#777777] dark:text-[#B0B0B0] text-sm">Matrizes</p>
                <p className="text-[#1A1A1A] dark:text-white text-xl">{property.matricesCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-card border-b border-[#E0E0E0] dark:border-border rounded-t-[14px] shadow-sm">
        <div className="flex items-center p-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-[12px] transition-colors ${
              activeTab === 'overview'
                ? 'bg-primary text-primary-foreground'
                : 'text-[#1A1A1A] dark:text-white hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A]'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor">
              <path d={svgPaths.p3269e00} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33333} />
              <path d={svgPaths.p4b3d400} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33333} />
              <path d={svgPaths.p2c131800} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33333} />
              <path d={svgPaths.p14877a00} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33333} />
            </svg>
            <span className="text-sm">Visão Geral</span>
          </button>

          <button
            onClick={() => setActiveTab('areas')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-[12px] transition-colors ${
              activeTab === 'areas'
                ? 'bg-primary text-primary-foreground'
                : 'text-[#1A1A1A] dark:text-white hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A]'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm">Áreas de Coleta</span>
          </button>

          <button
            onClick={() => setActiveTab('matrices')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-[12px] transition-colors ${
              activeTab === 'matrices'
                ? 'bg-primary text-primary-foreground'
                : 'text-[#1A1A1A] dark:text-white hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A]'
            }`}
          >
            <TreeDeciduous className="w-4 h-4" />
            <span className="text-sm">Árvores Matrizes</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Information Card */}
          <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[14px] p-6 shadow-sm space-y-6">
            <h3 className="text-[#1A1A1A] dark:text-white">Informações Principais</h3>

            {/* Proprietários */}
            <div className="flex gap-3">
              <Users className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-[#777777] dark:text-[#B0B0B0] text-sm">Proprietários</p>
                <p className="text-[#1A1A1A] dark:text-white">{property.owners.join(', ')}</p>
              </div>
            </div>

            {/* Endereço */}
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-[#777777] dark:text-[#B0B0B0] text-sm">Endereço</p>
                <p className="text-[#1A1A1A] dark:text-white">{property.address}</p>
                <p className="text-[#777777] dark:text-[#B0B0B0] text-sm">{property.location}</p>
              </div>
            </div>

            {/* Área Total */}
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                <path d={svgPaths.p23edf4c0} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.66627} />
                <path d={svgPaths.p13c02880} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.66627} />
                <path d={svgPaths.p2205f300} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.66627} />
                <path d={svgPaths.p4bfd700} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.66627} />
              </svg>
              <div className="flex-1">
                <p className="text-[#777777] dark:text-[#B0B0B0] text-sm">Área Total</p>
                <p className="text-[#1A1A1A] dark:text-white">{property.totalArea}</p>
              </div>
            </div>

            {/* Coordenadas GPS */}
            <div className="flex gap-3">
              <Navigation className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-[#777777] dark:text-[#B0B0B0] text-sm">Coordenadas GPS</p>
                <p className="text-[#1A1A1A] dark:text-white">{property.coordinates}</p>
              </div>
            </div>
          </div>

          {/* Activity Summary Card */}
          <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[14px] p-6 shadow-sm space-y-4">
            <h3 className="text-[#1A1A1A] dark:text-white">Resumo de Atividades</h3>

            {/* Áreas de Coleta */}
            <div className="bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[10px] p-4 flex items-center justify-between">
              <div>
                <p className="text-[#777777] dark:text-[#B0B0B0] text-sm">Áreas de Coleta</p>
                <p className="text-[#1A1A1A] dark:text-white text-2xl">{property.areasCount}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-green-600" />
            </div>

            {/* Árvores Matrizes */}
            <div className="bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[10px] p-4 flex items-center justify-between">
              <div>
                <p className="text-[#777777] dark:text-[#B0B0B0] text-sm">Árvores Matrizes</p>
                <p className="text-[#1A1A1A] dark:text-white text-2xl">{property.matricesCount}</p>
              </div>
              <TreeDeciduous className="w-8 h-8 text-green-600" />
            </div>

            {/* Última Coleta */}
            <div className="bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[10px] p-4 flex items-center justify-between">
              <div>
                <p className="text-[#777777] dark:text-[#B0B0B0] text-sm">Última Coleta</p>
                <p className="text-[#1A1A1A] dark:text-white">{property.lastCollection}</p>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'areas' && (
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[#1A1A1A] dark:text-white">Áreas de Coleta da Propriedade</h3>
              <p className="text-[#777777] dark:text-[#B0B0B0] text-sm">
                Gerenciamento de áreas cadastradas em {property.name}
              </p>
            </div>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px] px-4 py-2 flex items-center gap-2 transition-colors">
              <Plus className="w-4 h-4" />
              <span className="text-sm">Adicionar Nova Área</span>
            </button>
          </div>

          {/* Table */}
          <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[12px] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#E0E0E0] dark:border-border">
                    <th className="px-4 py-3 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                      ID
                    </th>
                    <th className="px-4 py-3 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                      Nome da Área
                    </th>
                    <th className="px-4 py-3 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                      Tamanho
                    </th>
                    <th className="px-4 py-3 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                      Nº de Matrizes
                    </th>
                    <th className="px-4 py-3 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                      Última Coleta
                    </th>
                    <th className="px-4 py-3 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                      Status
                    </th>
                    <th className="px-4 py-3 text-right text-sm text-[#777777] dark:text-[#B0B0B0]">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mockAreas.map((area) => (
                    <tr
                      key={area.id}
                      className="border-b border-[#E0E0E0] dark:border-border hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors"
                    >
                      <td className="px-4 py-4">
                        <p className="text-[#1A1A1A] dark:text-white">{area.id}</p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-[#1A1A1A] dark:text-white">{area.name}</p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-[#1A1A1A] dark:text-white">{area.size}</p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-[#1A1A1A] dark:text-white text-center">{area.matricesCount}</p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-[#1A1A1A] dark:text-white">{area.lastCollection}</p>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                            area.status === 'Ativa'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                          }`}
                        >
                          {area.status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-2 rounded-[8px] hover:bg-[#F0F0F0] dark:hover:bg-[#2A2A2A] transition-colors"
                            title="Ver detalhes"
                          >
                            <Eye className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                          </button>
                          <button
                            className="p-2 rounded-[8px] hover:bg-[#F0F0F0] dark:hover:bg-[#2A2A2A] transition-colors"
                            title="Editar"
                          >
                            <Edit className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                          </button>
                          <button
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
          </div>
        </div>
      )}

      {activeTab === 'matrices' && (
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[#1A1A1A] dark:text-white">Árvores Matrizes da Propriedade</h3>
              <p className="text-[#777777] dark:text-[#B0B0B0] text-sm">
                Gerenciamento de matrizes cadastradas em {property.name}
              </p>
            </div>
            <button
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px] px-4 py-2 flex items-center gap-2 transition-colors"
              onClick={handleAddMatrix}
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm">Adicionar Nova Matriz</span>
            </button>
          </div>

          {/* Table */}
          <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[12px] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#E0E0E0] dark:border-border">
                    <th className="px-4 py-3 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                      ID
                    </th>
                    <th className="px-4 py-3 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                      Espécie
                    </th>
                    <th className="px-4 py-3 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                      Área na Propriedade
                    </th>
                    <th className="px-4 py-3 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                      Data Cadastro
                    </th>
                    <th className="px-4 py-3 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                      Status
                    </th>
                    <th className="px-4 py-3 text-right text-sm text-[#777777] dark:text-[#B0B0B0]">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mockMatrices.map((matrix) => (
                    <tr
                      key={matrix.id}
                      className="border-b border-[#E0E0E0] dark:border-border hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors"
                    >
                      <td className="px-4 py-4">
                        <p className="text-[#1A1A1A] dark:text-white">{matrix.id}</p>
                      </td>
                      <td className="px-4 py-4">
                        <div>
                          <p className="text-[#1A1A1A] dark:text-white">{matrix.commonName}</p>
                          <p className="text-[#777777] dark:text-[#B0B0B0] text-sm italic">
                            {matrix.scientificName}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-[#1A1A1A] dark:text-white">{matrix.area}</p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-[#1A1A1A] dark:text-white">{matrix.registrationDate}</p>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                            matrix.status === 'Ativa'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : matrix.status === 'Monitoramento'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                          }`}
                        >
                          {matrix.status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-2 rounded-[8px] hover:bg-[#F0F0F0] dark:hover:bg-[#2A2A2A] transition-colors"
                            title="Ver detalhes"
                          >
                            <Eye className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                          </button>
                          <button
                            className="p-2 rounded-[8px] hover:bg-[#F0F0F0] dark:hover:bg-[#2A2A2A] transition-colors"
                            title="Editar"
                          >
                            <Edit className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                          </button>
                          <button
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
          </div>
        </div>
      )}

      {/* Add Matrix Modal */}
      <AddMatrixModal
        isOpen={isAddMatrixModalOpen}
        onClose={() => setIsAddMatrixModalOpen(false)}
        onSave={handleMatrixFormSubmit}
      />
    </div>
  );
}