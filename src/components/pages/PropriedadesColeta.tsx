import { Plus, Filter, Eye, Edit, Trash2, MapPin, BarChart3, TreeDeciduous } from 'lucide-react';
import { useState } from 'react';
import { PropertyDetailsColeta } from './PropertyDetailsColeta';
import { AddPropertyModal, PropertyFormData } from '../modals/AddPropertyModal';
import { EditPropertyModal, PropertyEditData } from '../modals/EditPropertyModal';

interface PropertyData {
  id: string;
  name: string;
  location: string;
  owners: string[];
  address: string;
  totalArea: string;
  coordinates: string;
  areasCount: number;
  areasNames: string[];
  matricesCount: number;
  lastCollection: string;
}

const mockProperties: PropertyData[] = [
  {
    id: '1',
    name: 'Fazenda São João',
    location: 'São Paulo - SP',
    owners: ['João da Silva', 'Maria Santos'],
    address: 'Estrada Municipal km 15, Zona Rural',
    totalArea: '250 hectares',
    coordinates: '-23.5505, -46.6333',
    areasCount: 3,
    areasNames: ['Área Norte', 'Área Sul', 'Área Central'],
    matricesCount: 24,
    lastCollection: '12/10/2025'
  },
  {
    id: '2',
    name: 'Sítio Boa Esperança',
    location: 'Minas Gerais - MG',
    owners: ['Pedro Costa'],
    address: 'Rodovia BR-381, km 45',
    totalArea: '180 hectares',
    coordinates: '-19.9167, -43.9345',
    areasCount: 2,
    areasNames: ['Área Leste', 'Área Oeste'],
    matricesCount: 18,
    lastCollection: '05/10/2025'
  },
  {
    id: '3',
    name: 'Fazenda Santa Clara',
    location: 'Paraná - PR',
    owners: ['Ana Paula', 'Carlos Eduardo'],
    address: 'Estrada Velha do Paraná, s/n',
    totalArea: '320 hectares',
    coordinates: '-25.4284, -49.2733',
    areasCount: 4,
    areasNames: ['Setor A', 'Setor B', 'Setor C', 'Setor D'],
    matricesCount: 35,
    lastCollection: '18/10/2025'
  },
  {
    id: '4',
    name: 'Chácara Verde',
    location: 'Rio de Janeiro - RJ',
    owners: ['Fernanda Lima'],
    address: 'Via Rural 123',
    totalArea: '80 hectares',
    coordinates: '-22.9068, -43.1729',
    areasCount: 1,
    areasNames: ['Área Principal'],
    matricesCount: 12,
    lastCollection: '01/10/2025'
  },
  {
    id: '5',
    name: 'Fazenda Palmeiras',
    location: 'Bahia - BA',
    owners: ['Roberto Sousa', 'Juliana Martins', 'Marcos Silva'],
    address: 'Fazenda Palmeiras, Zona Rural',
    totalArea: '450 hectares',
    coordinates: '-12.9714, -38.5014',
    areasCount: 5,
    areasNames: ['Norte', 'Sul', 'Leste', 'Oeste', 'Centro'],
    matricesCount: 42,
    lastCollection: '20/10/2025'
  }
];

interface PropriedadesColetaProps {
  onViewDetails?: (propertyId: string) => void;
}

export function PropriedadesColeta({ onViewDetails }: PropriedadesColetaProps) {
  const [selectedProperty, setSelectedProperty] = useState<PropertyData | null>(null);
  const [isAddPropertyModalOpen, setIsAddPropertyModalOpen] = useState(false);
  const [isEditPropertyModalOpen, setIsEditPropertyModalOpen] = useState(false);
  const [propertyToEdit, setPropertyToEdit] = useState<PropertyData | null>(null);

  const handleViewProperty = (property: PropertyData) => {
    setSelectedProperty(property);
    if (onViewDetails) {
      onViewDetails(property.id);
    }
  };

  const handleBackToList = () => {
    setSelectedProperty(null);
  };

  const handleAddProperty = (formData: PropertyFormData) => {
    const newProperty: PropertyData = {
      id: (mockProperties.length + 1).toString(),
      name: formData.name,
      location: `${formData.city} - ${formData.state}`,
      owners: [], // Will be added later
      address: `${formData.street}, ${formData.number} - ${formData.neighborhood}`,
      totalArea: '0 hectares', // Will be added later
      coordinates: `${formData.latitude}, ${formData.longitude}`,
      areasCount: 0,
      areasNames: [],
      matricesCount: 0,
      lastCollection: '-'
    };
    mockProperties.push(newProperty);
    setIsAddPropertyModalOpen(false);
  };

  const handleEditProperty = (formData: PropertyEditData) => {
    if (propertyToEdit) {
      const updatedProperty: PropertyData = {
        ...propertyToEdit,
        name: formData.name,
        location: `${formData.city} - ${formData.state}`,
        address: `${formData.street}, ${formData.number} - ${formData.neighborhood}`,
        totalArea: '0 hectares', // Will be added later
        coordinates: `${formData.latitude}, ${formData.longitude}`,
        areasCount: 0,
        areasNames: [],
        matricesCount: 0,
        lastCollection: '-'
      };
      const index = mockProperties.findIndex((p) => p.id === propertyToEdit.id);
      if (index !== -1) {
        mockProperties[index] = updatedProperty;
      }
      setIsEditPropertyModalOpen(false);
    }
  };

  const handleDeleteProperty = (id: string, name: string) => {
    if (confirm(`Tem certeza que deseja excluir a propriedade "${name}"?`)) {
      const index = mockProperties.findIndex((p) => p.id === id);
      if (index !== -1) {
        mockProperties.splice(index, 1);
      }
      console.log('Propriedade excluída ID:', id);
    }
  };

  if (selectedProperty) {
    return <PropertyDetailsColeta property={selectedProperty} onBack={handleBackToList} />;
  }

  return (
    <>
      <div className="px-6 pb-6 space-y-6">
        {/* Properties Table Section */}
        <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[12px] shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E0E0E0] dark:border-border">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <h3 className="text-[#1A1A1A] dark:text-white">
                Propriedades Cadastradas ({mockProperties.length})
              </h3>
            </div>
            <button className="px-3 py-2 rounded-[12px] border border-[#E0E0E0] dark:border-border hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
              <span className="text-sm text-[#777777] dark:text-[#B0B0B0]">Filtros</span>
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E0E0E0] dark:border-border">
                  <th className="px-4 py-5 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Nome da Propriedade
                  </th>
                  <th className="px-4 py-5 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Proprietários
                  </th>
                  <th className="px-4 py-5 text-center text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Nº de áreas
                  </th>
                  <th className="px-4 py-5 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Áreas associadas
                  </th>
                  <th className="px-4 py-5 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Extensão da área
                  </th>
                  <th className="px-4 py-5 text-center text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Árvores matrizes associadas (Nº)
                  </th>
                  <th className="px-4 py-5 text-right text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockProperties.map((property) => (
                  <tr
                    key={property.id}
                    className="border-b border-[#E0E0E0] dark:border-border hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors"
                  >
                    <td className="px-4 py-4">
                      <div>
                        <p className="text-[#1A1A1A] dark:text-white">{property.name}</p>
                        <p className="text-sm text-[#777777] dark:text-[#B0B0B0]">{property.location}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-[#1A1A1A] dark:text-white">
                        {property.owners.join(', ')}
                      </p>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <p className="text-[#1A1A1A] dark:text-white">{property.areasCount}</p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-sm text-[#777777] dark:text-[#B0B0B0]">
                        {property.areasNames.join(', ')}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-[#1A1A1A] dark:text-white">{property.totalArea}</p>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <p className="text-[#1A1A1A] dark:text-white">{property.matricesCount}</p>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => handleViewProperty(property)}
                          className="p-2 rounded-[8px] hover:bg-[#F0F0F0] dark:hover:bg-[#2A2A2A] transition-colors"
                          title="Ver detalhes"
                        >
                          <Eye className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                        </button>
                        <button
                          onClick={() => {
                            setPropertyToEdit(property);
                            setIsEditPropertyModalOpen(true);
                          }}
                          className="p-2 rounded-[8px] hover:bg-[#F0F0F0] dark:hover:bg-[#2A2A2A] transition-colors"
                          title="Editar"
                        >
                          <Edit className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                        </button>
                        <button
                          className="p-2 rounded-[8px] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                          title="Excluir"
                          onClick={() => handleDeleteProperty(property.id, property.name)}
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

        {/* Add Property Button */}
        <button
          onClick={() => setIsAddPropertyModalOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-[12px] hover:bg-green-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Propriedade
        </button>

        {/* Add Property Modal */}
        <AddPropertyModal
          isOpen={isAddPropertyModalOpen}
          onClose={() => setIsAddPropertyModalOpen(false)}
          onSave={handleAddProperty}
        />

        {/* Edit Property Modal */}
        {propertyToEdit && (
          <EditPropertyModal
            isOpen={isEditPropertyModalOpen}
            onClose={() => {
              setIsEditPropertyModalOpen(false);
              setPropertyToEdit(null);
            }}
            onSave={handleEditProperty}
            property={{
              id: propertyToEdit.id,
              name: propertyToEdit.name,
              cep: '',
              street: '',
              number: '',
              neighborhood: '',
              city: propertyToEdit.location.split(' - ')[0] || '',
              state: propertyToEdit.location.split(' - ')[1] || '',
              complement: '',
              latitude: propertyToEdit.coordinates.split(', ')[0] || '',
              longitude: propertyToEdit.coordinates.split(', ')[1] || '',
              owners: [],
              locations: [
                { id: '1', name: 'Área da Castanheira', area: '8.5', coordinates: '-23.550520, -46.633309', matricesCount: 12 },
                { id: '2', name: 'Área Norte', area: '5.2', coordinates: '-23.550520, -46.633309', matricesCount: 8 },
                { id: '3', name: 'Área Sul', area: '3.0', coordinates: '-23.550520, -46.633309', matricesCount: 4 }
              ],
              documents: []
            }}
          />
        )}
      </div>
    </>
  );
}