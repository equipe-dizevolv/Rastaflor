import { useState } from 'react';
import { MapPin, ArrowLeft, Calendar, Users, FileText, Sprout, TrendingUp, Plus, Edit, Trash2, Map } from 'lucide-react';
import { Button } from '../ui/button';
import { EditPropertyModal } from '../modals/EditPropertyModal';
import { RegisterActivityModal } from '../modals/RegisterActivityModal';
import { RegisterPlantingModal } from '../modals/RegisterPlantingModal';
import { AddAreaModal, AreaFormData } from '../modals/AddAreaModal';
import { ContractTable } from '../contracts/ContractTable';
import { InvoiceTable } from '../invoices/InvoiceTable';

interface PropertyDetailProps {
  propertyId: string;
  onBack: () => void;
}

// Mock data - in real app this would come from API/database
const mockProperties = {
  '1': {
    id: '1',
    name: 'Fazenda São José',
    location: 'Paraíba do Sul - RJ',
    address: 'Estrada Municipal 123, Km 5',
    totalArea: '150',
    availableArea: '80',
    restoredArea: '45',
    plannedArea: '35',
    owners: ['José Silva', 'Maria Silva'],
    coordinates: '-22.1234, -43.5678',
    car: 'RJ-1234567-8901234567890',
    activities: [
      {
        id: 'A1',
        type: 'Plantio',
        date: '15/11/2025',
        area: '15 ha',
        responsible: 'João Santos'
      },
      {
        id: 'A2',
        type: 'Manutenção',
        date: '10/11/2025',
        area: '20 ha',
        responsible: 'Maria Oliveira'
      },
      {
        id: 'A3',
        type: 'Monitoramento',
        date: '05/11/2025',
        area: '30 ha',
        responsible: 'Pedro Costa'
      }
    ]
  },
  '2': {
    id: '2',
    name: 'Sítio Boa Vista',
    location: 'Valença - RJ',
    address: 'Rodovia RJ-145, Km 22',
    totalArea: '95',
    availableArea: '60',
    restoredArea: '30',
    plannedArea: '30',
    owners: ['Carlos Mendes'],
    coordinates: '-22.2456, -43.7012',
    car: 'RJ-9876543-2109876543210',
    activities: [
      {
        id: 'A4',
        type: 'Plantio',
        date: '18/11/2025',
        area: '10 ha',
        responsible: 'Ana Paula'
      }
    ]
  },
  '3': {
    id: '3',
    name: 'Fazenda Santa Maria',
    location: 'Barra do Piraí - RJ',
    address: 'Zona Rural, S/N',
    totalArea: '200',
    availableArea: '120',
    restoredArea: '60',
    plannedArea: '60',
    owners: ['Antonio Pereira', 'Lucia Pereira', 'Fernando Pereira'],
    coordinates: '-22.4789, -43.8234',
    car: 'RJ-1122334-4556677889900',
    activities: [
      {
        id: 'A5',
        type: 'Monitoramento',
        date: '20/11/2025',
        area: '25 ha',
        responsible: 'Roberto Lima'
      },
      {
        id: 'A6',
        type: 'Manutenção',
        date: '12/11/2025',
        area: '15 ha',
        responsible: 'Carla Santos'
      }
    ]
  }
};

export function PropertyDetail({ propertyId, onBack }: PropertyDetailProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [isPlantingModalOpen, setIsPlantingModalOpen] = useState(false);
  const [isAddAreaModalOpen, setIsAddAreaModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'contracts' | 'invoices'>('overview');

  const property = mockProperties[propertyId as keyof typeof mockProperties] || mockProperties['1'];

  const handleEditProperty = (data: any) => {
    console.log('Editing property:', data);
    setIsEditModalOpen(false);
  };

  const handleRegisterActivity = (data: any) => {
    console.log('Registering activity:', data);
    setIsActivityModalOpen(false);
  };

  const handleRegisterPlanting = (data: any) => {
    console.log('Registering planting:', data);
    setIsPlantingModalOpen(false);
  };

  const handleAddArea = (data: AreaFormData) => {
    console.log('Adding area:', data);
    setIsAddAreaModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <Button
          onClick={onBack}
          variant="ghost"
          className={`gap-2 ${isDarkMode ? 'text-white hover:bg-[#2A2A2A]' : 'text-[#1A1A1A] hover:bg-gray-100'}`}
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>

        <div className="flex gap-3">
          <Button
            onClick={() => setIsActivityModalOpen(true)}
            className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[12px]"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Registrar Atividade
          </Button>
          <Button
            onClick={() => setIsPlantingModalOpen(true)}
            className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[12px]"
          >
            <Sprout className="w-4 h-4 mr-2" />
            Registrar Plantio
          </Button>
          <Button
            onClick={() => setIsEditModalOpen(true)}
            variant="outline"
            className={`rounded-[12px] ${
              isDarkMode 
                ? 'border-[#3A3A3A] text-white hover:bg-[#2A2A2A]' 
                : 'border-[#E0E0E0] text-[#1A1A1A] hover:bg-gray-50'
            }`}
          >
            Editar Propriedade
          </Button>
          <Button
            onClick={() => setIsAddAreaModalOpen(true)}
            className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[12px]"
          >
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Área
          </Button>
        </div>
      </div>

      {/* Property Info Card */}
      <div className={`p-6 rounded-[12px] ${
        isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white border border-[#E0E0E0]'
      }`}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-[#0F3D26] rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className={`text-2xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {property.name}
            </h2>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {property.location}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Endereço
            </p>
            <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {property.address}
            </p>
          </div>

          <div>
            <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Coordenadas GPS
            </p>
            <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {property.coordinates}
            </p>
          </div>

          <div>
            <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              CAR (Cadastro Ambiental Rural)
            </p>
            <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {property.car}
            </p>
          </div>

          <div>
            <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Área Total
            </p>
            <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {property.totalArea} ha
            </p>
          </div>

          <div>
            <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Área Disponível
            </p>
            <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {property.availableArea} ha
            </p>
          </div>

          <div>
            <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Proprietários
            </p>
            <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {property.owners.join(', ')}
            </p>
          </div>
        </div>
      </div>

      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`p-6 rounded-[12px] ${
          isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white border border-[#E0E0E0]'
        }`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Área Restaurada
              </p>
              <p className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                {property.restoredArea} ha
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div 
                className="h-2 bg-green-500 rounded-full" 
                style={{ width: `${(parseInt(property.restoredArea) / parseInt(property.totalArea)) * 100}%` }}
              />
            </div>
            <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              {((parseInt(property.restoredArea) / parseInt(property.totalArea)) * 100).toFixed(1)}% da área total
            </p>
          </div>
        </div>

        <div className={`p-6 rounded-[12px] ${
          isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white border border-[#E0E0E0]'
        }`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Área Planejada
              </p>
              <p className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                {property.plannedArea} ha
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div 
                className="h-2 bg-blue-500 rounded-full" 
                style={{ width: `${(parseInt(property.plannedArea) / parseInt(property.availableArea)) * 100}%` }}
              />
            </div>
            <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              {((parseInt(property.plannedArea) / parseInt(property.availableArea)) * 100).toFixed(1)}% da área disponível
            </p>
          </div>
        </div>

        <div className={`p-6 rounded-[12px] ${
          isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white border border-[#E0E0E0]'
        }`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Atividades Registradas
              </p>
              <p className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                {property.activities.length}
              </p>
            </div>
          </div>
          <p className={`text-sm mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Última atividade: {property.activities[0]?.date || 'N/A'}
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className={`border-b ${isDarkMode ? 'border-[#3A3A3A]' : 'border-[#E0E0E0]'}`}>
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-primary text-primary'
                : isDarkMode
                  ? 'border-transparent text-gray-400 hover:text-white'
                  : 'border-transparent text-gray-600 hover:text-[#1A1A1A]'
            }`}
          >
            Visão Geral
          </button>
          <button
            onClick={() => setActiveTab('contracts')}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === 'contracts'
                ? 'border-primary text-primary'
                : isDarkMode
                  ? 'border-transparent text-gray-400 hover:text-white'
                  : 'border-transparent text-gray-600 hover:text-[#1A1A1A]'
            }`}
          >
            Contratos
          </button>
          <button
            onClick={() => setActiveTab('invoices')}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === 'invoices'
                ? 'border-primary text-primary'
                : isDarkMode
                  ? 'border-transparent text-gray-400 hover:text-white'
                  : 'border-transparent text-gray-600 hover:text-[#1A1A1A]'
            }`}
          >
            Notas Fiscais
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Recent Activities */}
          <div className={`p-6 rounded-[12px] ${
            isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white border border-[#E0E0E0]'
          }`}>
            <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              Atividades Recentes
            </h3>

            <div className="space-y-3">
              {property.activities.map((activity) => (
                <div
                  key={activity.id}
                  className={`p-4 rounded-lg border ${
                    isDarkMode ? 'border-[#3A3A3A] bg-[#1A1A1A]' : 'border-[#E0E0E0] bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'Plantio' ? 'bg-green-500' :
                        activity.type === 'Manutenção' ? 'bg-blue-500' :
                        'bg-purple-500'
                      }`} />
                      <div>
                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                          {activity.type}
                        </p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {activity.date} • {activity.area} • {activity.responsible}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'contracts' && (
        <div className={`p-6 rounded-[12px] ${
          isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white border border-[#E0E0E0]'
        }`}>
          <ContractTable propertyId={property.id} />
        </div>
      )}

      {activeTab === 'invoices' && (
        <div className={`p-6 rounded-[12px] ${
          isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white border border-[#E0E0E0]'
        }`}>
          <InvoiceTable propertyId={property.id} />
        </div>
      )}

      {/* Modals */}
      <EditPropertyModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleEditProperty}
        property={{
          id: property.id,
          name: property.name,
          cep: '',
          street: property.address,
          number: '',
          neighborhood: '',
          city: property.location.split(' - ')[0] || '',
          state: property.location.split(' - ')[1] || '',
          complement: '',
          latitude: property.coordinates.split(',')[0]?.trim() || '',
          longitude: property.coordinates.split(',')[1]?.trim() || '',
          owners: property.owners.map((owner, index) => ({
            id: `owner-${index}`,
            name: owner,
            cpf: '',
            phone: ''
          })),
          locations: [],
          documents: []
        }}
      />

      <RegisterActivityModal
        isOpen={isActivityModalOpen}
        onClose={() => setIsActivityModalOpen(false)}
        onSave={handleRegisterActivity}
        propertyName={property.name}
      />

      <RegisterPlantingModal
        isOpen={isPlantingModalOpen}
        onClose={() => setIsPlantingModalOpen(false)}
        onSave={handleRegisterPlanting}
        propertyName={property.name}
      />

      <AddAreaModal
        isOpen={isAddAreaModalOpen}
        onClose={() => setIsAddAreaModalOpen(false)}
        onSave={handleAddArea}
        propertyName={property.name}
      />
    </div>
  );
}