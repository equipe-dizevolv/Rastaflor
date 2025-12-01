import { useState } from 'react';
import { ProjectHeader } from '../projects/ProjectHeader';
import { EnhancedKPICard } from '../projects/EnhancedKPICard';
import { RestorationModels } from '../projects/RestorationModels';
import { PropertyBank } from '../projects/PropertyBank';
import { EditPropertyModal } from '../properties/EditPropertyModal';
import { RegisterActivityModal, ActivityFormData } from '../modals/RegisterActivityModal';
import { RegisterPlantingModal, PlantingFormData } from '../modals/RegisterPlantingModal';
import { MapPin, Sprout, Package, Building2, Plus } from 'lucide-react';
import { ContractTable } from '../contracts/ContractTable';
import { InvoiceTable } from '../invoices/InvoiceTable';
import { Button } from '../ui/button';
import { CadastrarContratoModal, ContratoFormData } from '../modals/CadastrarContratoModal';
import { EditContractModal } from '../modals/EditContractModal';
import { CreateInvoiceModal } from '../invoices/CreateInvoiceModal';
import { EditInvoiceModal } from '../modals/EditInvoiceModal';

interface ProjectDetailsProps {
  onPageChange?: (page: string) => void;
}

interface Contract {
  id: string;
  name: string;
  createdBy: string;
  date: string;
  fileName: string;
}

interface Invoice {
  id: string;
  number: string;
  supplier: string;
  date: string;
  fileName: string;
  total: number;
  category: string;
  financier?: string;
  observations?: string;
}

export function ProjectDetails({ onPageChange }: ProjectDetailsProps = {}) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const [isEditPropertyModalOpen, setIsEditPropertyModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [isRegisterActivityModalOpen, setIsRegisterActivityModalOpen] = useState(false);
  const [isRegisterPlantingModalOpen, setIsRegisterPlantingModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'contracts' | 'invoices'>('overview');
  
  // Contracts state
  const [isContractModalOpen, setIsContractModalOpen] = useState(false);
  const [isEditContractModalOpen, setIsEditContractModalOpen] = useState(false);
  const [selectedContract, setSelectedContract] = useState<any>(null);
  const [contracts, setContracts] = useState<Contract[]>([
    {
      id: '1',
      name: 'Contrato de Restauração - Igarapé do Areal',
      createdBy: 'João Silva',
      date: '12/10/2024',
      fileName: 'contrato_igarape_areal.pdf'
    },
    {
      id: '2',
      name: 'Acordo de Compensação Ambiental',
      createdBy: 'Maria Santos',
      date: '08/10/2024',
      fileName: 'acordo_compensacao.pdf'
    }
  ]);

  // Invoices state
  const [isCreateInvoiceModalOpen, setIsCreateInvoiceModalOpen] = useState(false);
  const [isEditInvoiceModalOpen, setIsEditInvoiceModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: '1',
      number: 'NF-2024-001',
      supplier: 'Viveiro Amazônia Verde Ltda',
      date: '2024-03-15',
      fileName: 'nota_fiscal_001.pdf',
      total: 4234.00,
      category: 'Mudas e Sementes',
      financier: 'Instituto Chico Mendes',
      observations: 'Entrega programada para março'
    },
    {
      id: '2',
      number: 'NF-2024-002',
      supplier: 'Transportadora Rural Norte',
      date: '2024-03-18',
      fileName: 'nota_fiscal_002.pdf',
      total: 1850.50,
      category: 'Transporte e Logística',
      financier: 'BNDES',
      observations: ''
    }
  ]);

  // Mock data for the project
  const projectData = {
    name: 'Recuperação do Igarapé do Areal',
    kpis: [
      {
        title: 'Propriedades Associadas',
        value: '3',
        progress: 100,
        goal: '3 Total',
        icon: Building2
      },
      {
        title: 'Hectares Plantados',
        value: '2.222 Ha',
        progress: 74,
        goal: '3.000 Ha',
        icon: MapPin
      },
      {
        title: 'Mudas Plantadas',
        value: '18.450',
        progress: 82,
        goal: '22.500',
        icon: Sprout
      },
      {
        title: 'Quilos de Sementes Plantados',
        value: '456 Kg',
        progress: 65,
        goal: '700 Kg',
        icon: Package
      }
    ],
    restorationModels: [
      {
        name: 'Regeneração Natural',
        count: 12,
        percentage: 45
      },
      {
        name: 'Plantio por Mudas',
        count: 8,
        percentage: 30
      },
      {
        name: 'Semeadura Direta',
        count: 4,
        percentage: 15
      },
      {
        name: 'Modelo Misto',
        count: 3,
        percentage: 10
      }
    ],
    properties: [
      {
        id: '1',
        name: 'Fazenda Santa Rita',
        legalResponsible: 'João Silva Santos',
        totalSize: '85.5 hectares',
        location: 'Zona Rural, Atibaia - SP',
        composition: 'nativa',
        plantingStatus: 'in-progress' as const,
        areas: [
          {
            name: 'Área de Nascente',
            degradation: 'Alta',
            slope: '15-25%',
            type: 'APP',
            size: '12.3 ha'
          },
          {
            name: 'Área de Encosta',
            degradation: 'Média',
            slope: '5-15%',
            type: 'Reserva Legal',
            size: '28.7 ha'
          },
          {
            name: 'Área de Várzea',
            degradation: 'Baixa',
            slope: '0-5%',
            type: 'APP',
            size: '44.5 ha'
          }
        ]
      },
      {
        id: '2',
        name: 'Sítio Água Cristalina',
        legalResponsible: 'Maria Fernanda Costa',
        totalSize: '42.8 hectares',
        location: 'Distrito de Cachoeira, Piracaia - SP',
        composition: 'mista',
        plantingStatus: 'pending' as const,
        areas: [
          {
            name: 'Área Central',
            degradation: 'Média',
            slope: '10-20%',
            type: 'Produtiva',
            size: '25.2 ha'
          },
          {
            name: 'Área Ripária',
            degradation: 'Alta',
            slope: '0-10%',
            type: 'APP',
            size: '17.6 ha'
          }
        ]
      },
      {
        id: '3',
        name: 'Fazenda Boa Esperança',
        legalResponsible: 'Carlos Eduardo Oliveira',
        totalSize: '156.2 hectares',
        location: 'BR-381, km 45, Bom Jesus dos Perdões - SP',
        composition: 'nativa',
        plantingStatus: 'completed' as const,
        areas: [
          {
            name: 'Setor Norte',
            degradation: 'Baixa',
            slope: '5-15%',
            type: 'Reserva Legal',
            size: '78.1 ha'
          },
          {
            name: 'Setor Sul',
            degradation: 'Média',
            slope: '15-30%',
            type: 'Reserva Legal',
            size: '78.1 ha'
          }
        ]
      }
    ]
  };

  const handleEditProject = () => {
    console.log('Edit project');
  };

  const handleEditProperty = (propertyId: string) => {
    // For now, use the mock property data
    const mockProperty = {
      id: propertyId,
      name: 'Fazenda Santo Antônio',
      projects: ['projeto-1'],
      cep: '76500-000',
      complement: 'Zona Rural',
      city: 'Novo Repartimento',
      state: 'PA',
      address: 'Estrada do Santo Antônio',
      number: 'KM 25',
      district: 'Rural',
      carNumber: 'PA-1234567890123456789012345678',
      latitude: -4.3021,
      longitude: -49.9344,
      stage: 'restoration',
      isActive: true,
      owners: [
        {
          id: '1',
          name: 'João Batista Ferreira',
          cpf: '123.456.789-00',
          rg: '12345678',
          birthDate: '1965-03-15',
          profession: 'Agricultor',
          maritalStatus: 'married',
          phone: '(94) 99999-9999',
          email: 'joao.ferreira@email.com',
          cep: '76500-000',
          city: 'Novo Repartimento',
          address: 'Rua das Palmeiras',
          number: '123',
          district: 'Centro',
          complement: 'Casa 2'
        }
      ],
      restorationAreas: [
        {
          id: '1',
          name: 'Encosta da Castanheira',
          distanceFromFragment: '500m',
          areaType: 'Reserva Legal',
          specificAreaType: 'Área de Preservação Permanente',
          terrainType: 'Inclinado',
          areaSize: 78.1,
          slope: 15,
          depth: '1-2m',
          degradation: 'Média',
          compaction: 'Baixa',
          invasiveSpecies: true,
          antsTermites: false,
          altitude: 220,
          terrainFace: 'Norte',
          latitude: -4.3025,
          longitude: -49.9350,
          observations: 'Área com presença de gramíneas invasoras, necessário controle antes do plantio.'
        }
      ],
      documents: {},
      qrCode: 'https://example.com/qr/fazenda-santo-antonio'
    };
    
    setSelectedProperty(mockProperty);
    setIsEditPropertyModalOpen(true);
  };

  const handleRegisterPlanting = (propertyId: string) => {
    console.log('Register planting for property:', propertyId);
    setSelectedProperty(projectData.properties.find(p => p.id === propertyId));
    setIsRegisterPlantingModalOpen(true);
  };

  const handleRegisterActivity = () => {
    setIsRegisterActivityModalOpen(true);
  };

  const handleAddProperty = () => {
    setSelectedProperty(null);
    setIsEditPropertyModalOpen(true);
  };

  const handleSaveProperty = (propertyData: any) => {
    console.log('Save property:', propertyData);
    // Here you would normally save to your backend
  };

  const handleSaveActivity = (formData: ActivityFormData) => {
    console.log('Save activity:', formData);
    // Here you would normally save to your backend
    setIsRegisterActivityModalOpen(false);
  };

  const handleSavePlanting = (formData: PlantingFormData) => {
    console.log('Save planting:', formData);
    // Here you would normally save to your backend
    setIsRegisterPlantingModalOpen(false);
  };

  const handleAddContract = () => {
    setIsContractModalOpen(true);
  };

  const handleEditContract = (contractId: string) => {
    const contract = contracts.find(c => c.id === contractId);
    if (contract) {
      setSelectedContract(contract);
      setIsEditContractModalOpen(true);
    }
  };

  const handleSaveContract = (formData: ContratoFormData) => {
    console.log('Save contract:', formData);
    // Here you would normally save to your backend
    setIsContractModalOpen(false);
    setIsEditContractModalOpen(false);
  };

  const handleAddInvoice = () => {
    setIsCreateInvoiceModalOpen(true);
  };

  const handleEditInvoice = (invoiceId: string) => {
    const invoice = invoices.find(i => i.id === invoiceId);
    if (invoice) {
      setSelectedInvoice(invoice);
      setIsEditInvoiceModalOpen(true);
    }
  };

  const handleSaveInvoice = (formData: Invoice) => {
    console.log('Save invoice:', formData);
    // Here you would normally save to your backend
    setIsCreateInvoiceModalOpen(false);
    setIsEditInvoiceModalOpen(false);
  };

  return (
    <div className="p-6 space-y-8 max-w-none">
      {/* Project Header */}
      <ProjectHeader
        projectName={projectData.name}
        onEdit={handleEditProject}
      />

      {/* Enhanced KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectData.kpis.map((kpi, index) => (
          <EnhancedKPICard
            key={index}
            title={kpi.title}
            value={kpi.value}
            progress={kpi.progress}
            goal={kpi.goal}
            icon={kpi.icon}
          />
        ))}
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
        <>
          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Column - Restoration Models */}
            <div className="lg:col-span-1">
              <RestorationModels models={projectData.restorationModels} />
            </div>

            {/* Right Column - Property Bank */}
            <div className="lg:col-span-3">
              <PropertyBank
                properties={projectData.properties}
                onEditProperty={handleEditProperty}
                onRegisterPlanting={handleRegisterPlanting}
                onRegisterActivity={handleRegisterActivity}
                onAddProperty={handleAddProperty}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        </>
      )}

      {activeTab === 'contracts' && (
        <div className={`p-6 rounded-[12px] ${
          isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white border border-[#E0E0E0]'
        }`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Contratos</h3>
            <Button
              onClick={handleAddContract}
              className="bg-primary text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Contrato
            </Button>
          </div>
          <ContractTable
            contracts={contracts}
            onEdit={handleEditContract}
          />
        </div>
      )}

      {activeTab === 'invoices' && (
        <div className={`p-6 rounded-[12px] ${
          isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white border border-[#E0E0E0]'
        }`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Notas Fiscais</h3>
            <Button
              onClick={handleAddInvoice}
              className="bg-primary text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Nota Fiscal
            </Button>
          </div>
          <InvoiceTable
            invoices={invoices}
            onEdit={handleEditInvoice}
          />
        </div>
      )}

      {/* Edit Property Modal */}
      <EditPropertyModal
        isOpen={isEditPropertyModalOpen}
        onClose={() => setIsEditPropertyModalOpen(false)}
        property={selectedProperty}
        onSave={handleSaveProperty}
      />

      {/* Register Activity Modal */}
      <RegisterActivityModal
        isOpen={isRegisterActivityModalOpen}
        onClose={() => setIsRegisterActivityModalOpen(false)}
        properties={projectData.properties}
        onSave={handleSaveActivity}
      />

      {/* Register Planting Modal */}
      <RegisterPlantingModal
        isOpen={isRegisterPlantingModalOpen}
        onClose={() => setIsRegisterPlantingModalOpen(false)}
        property={selectedProperty}
        onSave={handleSavePlanting}
      />

      {/* Cadastrar Contrato Modal */}
      <CadastrarContratoModal
        isOpen={isContractModalOpen}
        onClose={() => setIsContractModalOpen(false)}
        onSave={handleSaveContract}
      />

      {/* Edit Contract Modal */}
      <EditContractModal
        isOpen={isEditContractModalOpen}
        onClose={() => setIsEditContractModalOpen(false)}
        contract={selectedContract}
        onSave={handleSaveContract}
      />

      {/* Create Invoice Modal */}
      <CreateInvoiceModal
        isOpen={isCreateInvoiceModalOpen}
        onClose={() => setIsCreateInvoiceModalOpen(false)}
        onSave={handleSaveInvoice}
      />

      {/* Edit Invoice Modal */}
      <EditInvoiceModal
        isOpen={isEditInvoiceModalOpen}
        onClose={() => setIsEditInvoiceModalOpen(false)}
        invoice={selectedInvoice}
        onSave={handleSaveInvoice}
      />
    </div>
  );
}