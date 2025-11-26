import { X, Plus, Trash2, Upload, QrCode } from 'lucide-react';
import { useState } from 'react';
import { AddAreaModal, AreaFormData } from './AddAreaModal';

interface EditPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (property: PropertyEditData) => void;
  property: PropertyEditData | null;
}

export interface PropertyEditData {
  id: string;
  name: string;
  cep: string;
  street?: string;
  address?: string;
  number: string;
  neighborhood?: string;
  district?: string;
  city: string;
  state: string;
  complement: string;
  latitude: string | number;
  longitude: string | number;
  owners?: Owner[];
  locations?: RestauracaoArea[];
  restorationAreas?: any[];
  documents?: Document[] | any;
}

interface Owner {
  id: string;
  name: string;
  cpf: string;
  phone: string;
}

interface RestauracaoArea extends AreaFormData {
  id: string;
}

interface Document {
  id: string;
  name: string;
  type: string;
  uploadDate: string;
  url: string;
}

type TabType = 'dados-gerais' | 'proprietarios' | 'locais' | 'documentos' | 'qrcode';

export function EditPropertyModal({ isOpen, onClose, onSave, property }: EditPropertyModalProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const [activeTab, setActiveTab] = useState<TabType>('dados-gerais');
  const [formData, setFormData] = useState<PropertyEditData | null>(property);
  const [owners, setOwners] = useState<Owner[]>(property?.owners || []);
  const [locations, setLocations] = useState<RestauracaoArea[]>(property?.locations || property?.restorationAreas || []);
  const [documents, setDocuments] = useState<Document[]>(Array.isArray(property?.documents) ? property.documents : []);
  const [isAddAreaModalOpen, setIsAddAreaModalOpen] = useState(false);
  const [editingArea, setEditingArea] = useState<RestauracaoArea | null>(null);

  const handleChange = (field: keyof PropertyEditData, value: string) => {
    setFormData(prev => prev ? { ...prev, [field]: value } : null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      onSave({ ...formData, owners, locations, documents });
    }
  };

  const handleCancel = () => {
    setFormData(property);
    setOwners(property?.owners || []);
    setLocations(property?.locations || property?.restorationAreas || []);
    setDocuments(Array.isArray(property?.documents) ? property.documents : []);
    onClose();
  };

  const addOwner = () => {
    const newOwner: Owner = {
      id: `owner-${Date.now()}`,
      name: '',
      cpf: '',
      phone: ''
    };
    setOwners([...owners, newOwner]);
  };

  const removeOwner = (id: string) => {
    setOwners(owners.filter(o => o.id !== id));
  };

  const updateOwner = (id: string, field: keyof Owner, value: string) => {
    setOwners(owners.map(o => o.id === id ? { ...o, [field]: value } : o));
  };

  const handleAddArea = (data: AreaFormData) => {
    const newArea: RestauracaoArea = {
      id: `area-${Date.now()}`,
      ...data
    };
    setLocations([...locations, newArea]);
    setIsAddAreaModalOpen(false);
    setEditingArea(null);
  };

  const handleEditArea = (data: AreaFormData) => {
    if (editingArea) {
      setLocations(locations.map(loc => 
        loc.id === editingArea.id ? { ...loc, ...data } : loc
      ));
    }
    setIsAddAreaModalOpen(false);
    setEditingArea(null);
  };

  const handleAddAreaModalClose = () => {
    setIsAddAreaModalOpen(false);
    setEditingArea(null);
  };

  const openEditArea = (area: RestauracaoArea) => {
    setEditingArea(area);
    setIsAddAreaModalOpen(true);
  };

  const removeLocation = (id: string) => {
    setLocations(locations.filter(l => l.id !== id));
  };

  if (!isOpen || !property || !formData) return null;

  const getTabTitle = () => {
    switch (activeTab) {
      case 'dados-gerais': return 'Dados Gerais';
      case 'proprietarios': return 'Proprietário(s)';
      case 'locais': return 'Lista de Locais';
      case 'documentos': return 'Documentos';
      case 'qrcode': return 'QR Code';
      default: return 'Dados Gerais';
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className={`w-full max-w-[1098px] max-h-[90vh] rounded-[12px] overflow-hidden flex shadow-lg ${
          isDarkMode ? 'bg-[#1A1A1A]' : 'bg-white'
        }`}>
          {/* Sidebar - Branca/Escura */}
          <div className={`w-[220px] flex-shrink-0 border-r ${
            isDarkMode ? 'bg-[#1A1A1A] border-[#3A3A3A]' : 'bg-white border-[#E0E0E0]'
          }`}>
            <div className="p-4 flex flex-col gap-6">
              {/* Título e Descrição */}
              <div className="space-y-2">
                <h3 className={`text-[16px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  Editar Propriedade
                </h3>
                <p className={`text-[12px] leading-[16px] ${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                  Edite as informações da propriedade usando a navegação lateral
                </p>
              </div>

              {/* Navegação */}
              <nav className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('dados-gerais')}
                  className={`h-[40px] rounded-[10px] px-3 text-left text-[14px] transition-colors ${
                    activeTab === 'dados-gerais'
                      ? 'bg-[#0F3D26] text-white font-medium'
                      : isDarkMode 
                        ? 'text-white hover:bg-[#2A2A2A]' 
                        : 'text-[#1A1A1A] hover:bg-[#F8F8F8]'
                  }`}
                >
                  Dados Gerais
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('proprietarios')}
                  className={`h-[40px] rounded-[10px] px-3 text-left text-[14px] transition-colors ${
                    activeTab === 'proprietarios'
                      ? 'bg-[#0F3D26] text-white font-medium'
                      : isDarkMode 
                        ? 'text-white hover:bg-[#2A2A2A]' 
                        : 'text-[#1A1A1A] hover:bg-[#F8F8F8]'
                  }`}
                >
                  Proprietário(s)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('locais')}
                  className={`h-[40px] rounded-[10px] px-3 text-left text-[14px] transition-colors ${
                    activeTab === 'locais'
                      ? 'bg-[#0F3D26] text-white font-medium'
                      : isDarkMode 
                        ? 'text-white hover:bg-[#2A2A2A]' 
                        : 'text-[#1A1A1A] hover:bg-[#F8F8F8]'
                  }`}
                >
                  Lista de Locais
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('documentos')}
                  className={`h-[40px] rounded-[10px] px-3 text-left text-[14px] transition-colors ${
                    activeTab === 'documentos'
                      ? 'bg-[#0F3D26] text-white font-medium'
                      : isDarkMode 
                        ? 'text-white hover:bg-[#2A2A2A]' 
                        : 'text-[#1A1A1A] hover:bg-[#F8F8F8]'
                  }`}
                >
                  Documentos
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('qrcode')}
                  className={`h-[40px] rounded-[10px] px-3 text-left text-[14px] transition-colors ${
                    activeTab === 'qrcode'
                      ? 'bg-[#0F3D26] text-white font-medium'
                      : isDarkMode 
                        ? 'text-white hover:bg-[#2A2A2A]' 
                        : 'text-[#1A1A1A] hover:bg-[#F8F8F8]'
                  }`}
                >
                  QR Code
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header Verde */}
            <div className="bg-[#0F3D26] h-[69px] flex items-center justify-between px-6 border-b border-[#E0E0E0]">
              <h2 className="text-white text-[18px]">{getTabTitle()}</h2>
              <button
                onClick={handleCancel}
                className="w-5 h-5 flex items-center justify-center text-white hover:text-white/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-auto flex flex-col">
              <div className={`flex-1 p-6 ${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-white'}`}>
                {/* Dados Gerais Tab */}
                {activeTab === 'dados-gerais' && (
                  <div className="space-y-4 max-w-[830px]">
                    {/* Nome da Propriedade */}
                    <div className="space-y-1.5">
                      <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                        Nome da Propriedade
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Fazenda Santa Maria"
                        className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                          isDarkMode 
                            ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                            : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                        } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* CEP */}
                      <div className="space-y-1.5">
                        <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                          CEP
                        </label>
                        <input
                          type="text"
                          value={formData.cep}
                          onChange={(e) => handleChange('cep', e.target.value)}
                          placeholder="00000-000"
                          className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                            isDarkMode 
                              ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                              : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                          } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                        />
                      </div>

                      {/* Número */}
                      <div className="space-y-1.5">
                        <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                          Número
                        </label>
                        <input
                          type="text"
                          value={formData.number}
                          onChange={(e) => handleChange('number', e.target.value)}
                          placeholder="123"
                          className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                            isDarkMode 
                              ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                              : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                          } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                        />
                      </div>
                    </div>

                    {/* Logradouro */}
                    <div className="space-y-1.5">
                      <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                        Logradouro
                      </label>
                      <input
                        type="text"
                        value={formData.street}
                        onChange={(e) => handleChange('street', e.target.value)}
                        placeholder="Rodovia RJ-145, Km 22"
                        className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                          isDarkMode 
                            ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                            : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                        } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                      />
                    </div>

                    {/* Complemento */}
                    <div className="space-y-1.5">
                      <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                        Complemento
                      </label>
                      <input
                        type="text"
                        value={formData.complement}
                        onChange={(e) => handleChange('complement', e.target.value)}
                        placeholder="Apto, Bloco..."
                        className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                          isDarkMode 
                            ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                            : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                        } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Cidade e Estado */}
                      <div className="space-y-1.5">
                        <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                          Cidade e Estado
                        </label>
                        <input
                          type="text"
                          value={`${formData.city}, ${formData.state}`}
                          onChange={(e) => {
                            const parts = e.target.value.split(',');
                            handleChange('city', parts[0]?.trim() || '');
                            handleChange('state', parts[1]?.trim() || '');
                          }}
                          placeholder="Goiânia, GO"
                          className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                            isDarkMode 
                              ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                              : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                          } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                        />
                      </div>

                      {/* Bairro */}
                      <div className="space-y-1.5">
                        <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                          Bairro
                        </label>
                        <input
                          type="text"
                          value={formData.neighborhood}
                          onChange={(e) => handleChange('neighborhood', e.target.value)}
                          placeholder="Setor Rural"
                          className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                            isDarkMode 
                              ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                              : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                          } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Latitude */}
                      <div className="space-y-1.5">
                        <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                          Latitude
                        </label>
                        <input
                          type="text"
                          value={formData.latitude}
                          onChange={(e) => handleChange('latitude', e.target.value)}
                          placeholder="-16.6799"
                          className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                            isDarkMode 
                              ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                              : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                          } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                        />
                      </div>

                      {/* Longitude */}
                      <div className="space-y-1.5">
                        <label className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                          Longitude
                        </label>
                        <input
                          type="text"
                          value={formData.longitude}
                          onChange={(e) => handleChange('longitude', e.target.value)}
                          placeholder="-49.255"
                          className={`w-full h-[36px] px-3 rounded-[8px] text-[14px] border transition-colors ${
                            isDarkMode 
                              ? 'bg-[#0F3D26] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                              : 'bg-[#F8F8F8] border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                          } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Proprietários Tab */}
                {activeTab === 'proprietarios' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <p className={`text-[14px] ${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                        Gerencie os proprietários desta propriedade
                      </p>
                      <button
                        type="button"
                        onClick={addOwner}
                        className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[12px] px-4 py-2 flex items-center gap-2 text-[14px] transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        Adicionar Proprietário
                      </button>
                    </div>

                    {owners.length === 0 ? (
                      <div className="text-center py-12">
                        <p className={`${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                          Nenhum proprietário cadastrado
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {owners.map((owner) => (
                          <div
                            key={owner.id}
                            className={`p-4 rounded-[12px] border ${
                              isDarkMode 
                                ? 'bg-[#0F3D26] border-[#3A3A3A]' 
                                : 'bg-[#F8F8F8] border-[#E0E0E0]'
                            }`}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <h4 className={`text-[14px] font-medium ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                                Proprietário
                              </h4>
                              <button
                                type="button"
                                onClick={() => removeOwner(owner.id)}
                                className="p-1.5 rounded-[8px] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                              >
                                <Trash2 className="w-4 h-4 text-red-600" />
                              </button>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              <div className="space-y-1">
                                <label className={`text-xs ${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                                  Nome
                                </label>
                                <input
                                  type="text"
                                  value={owner.name}
                                  onChange={(e) => updateOwner(owner.id, 'name', e.target.value)}
                                  placeholder="João da Silva"
                                  className={`w-full h-8 px-2 py-1 rounded-[8px] text-sm border ${
                                    isDarkMode 
                                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                                      : 'bg-white border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                                  } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                                />
                              </div>
                              <div className="space-y-1">
                                <label className={`text-xs ${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                                  CPF
                                </label>
                                <input
                                  type="text"
                                  value={owner.cpf}
                                  onChange={(e) => updateOwner(owner.id, 'cpf', e.target.value)}
                                  placeholder="000.000.000-00"
                                  className={`w-full h-8 px-2 py-1 rounded-[8px] text-sm border ${
                                    isDarkMode 
                                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                                      : 'bg-white border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                                  } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                                />
                              </div>
                              <div className="space-y-1">
                                <label className={`text-xs ${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                                  Telefone
                                </label>
                                <input
                                  type="text"
                                  value={owner.phone}
                                  onChange={(e) => updateOwner(owner.id, 'phone', e.target.value)}
                                  placeholder="(00) 00000-0000"
                                  className={`w-full h-8 px-2 py-1 rounded-[8px] text-sm border ${
                                    isDarkMode 
                                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white placeholder:text-[#777777]' 
                                      : 'bg-white border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#777777]'
                                  } focus:outline-none focus:ring-2 focus:ring-[#0F3D26] focus:border-transparent`}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Lista de Locais Tab */}
                {activeTab === 'locais' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <p className={`text-[14px] ${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                        Gerencie as áreas de restauração desta propriedade
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setEditingArea(null);
                          setIsAddAreaModalOpen(true);
                        }}
                        className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[12px] px-4 py-2 flex items-center gap-2 text-[14px] transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        Adicionar Área
                      </button>
                    </div>

                    {locations.length === 0 ? (
                      <div className="text-center py-12">
                        <p className={`${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                          Nenhuma área cadastrada
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {locations.map((location) => (
                          <div
                            key={location.id}
                            className={`p-4 rounded-[12px] border ${
                              isDarkMode 
                                ? 'bg-[#0F3D26] border-[#3A3A3A]' 
                                : 'bg-[#F8F8F8] border-[#E0E0E0]'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className={`text-[15px] mb-2 font-medium ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                                  {location.name || 'Área sem nome'}
                                </h4>
                                <div className="grid grid-cols-3 gap-3 text-sm">
                                  <div>
                                    <span className={`${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                                      Tipo:
                                    </span>{' '}
                                    <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                                      {location.areaType || '-'}
                                    </span>
                                  </div>
                                  <div>
                                    <span className={`${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                                      Tamanho:
                                    </span>{' '}
                                    <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                                      {location.size ? `${location.size} ha` : '-'}
                                    </span>
                                  </div>
                                  <div>
                                    <span className={`${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                                      Degradação:
                                    </span>{' '}
                                    <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                                      {location.degradation || '-'}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-1 ml-3">
                                <button
                                  type="button"
                                  onClick={() => openEditArea(location)}
                                  className={`p-1.5 rounded-[8px] transition-colors ${
                                    isDarkMode 
                                      ? 'hover:bg-[#2A2A2A]' 
                                      : 'hover:bg-white'
                                  }`}
                                >
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                                    <path 
                                      d="M14.166 2.5a2.121 2.121 0 0 1 3 3L6.25 16.417l-4.167.833.833-4.167L13.833 2.5Z" 
                                      stroke={isDarkMode ? '#B0B0B0' : '#1A1A1A'} 
                                      strokeWidth="1.667" 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => removeLocation(location.id)}
                                  className="p-1.5 rounded-[8px] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                >
                                  <Trash2 className="w-4 h-4 text-red-600" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Documentos Tab */}
                {activeTab === 'documentos' && (
                  <div className="text-center py-12">
                    <Upload className={`w-12 h-12 mx-auto mb-3 ${
                      isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'
                    }`} />
                    <p className={`mb-4 ${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                      Nenhum documento anexado
                    </p>
                    <button
                      type="button"
                      className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[12px] px-4 py-2 inline-flex items-center gap-2 text-[14px] transition-colors"
                    >
                      <Upload className="w-4 h-4" />
                      Fazer Upload
                    </button>
                  </div>
                )}

                {/* QR Code Tab */}
                {activeTab === 'qrcode' && (
                  <div className="text-center py-12">
                    <div className={`w-48 h-48 mx-auto mb-4 border-2 border-dashed rounded-[12px] flex items-center justify-center ${
                      isDarkMode 
                        ? 'bg-[#0F3D26] border-[#3A3A3A]' 
                        : 'bg-[#F8F8F8] border-[#E0E0E0]'
                    }`}>
                      <QrCode className={`w-16 h-16 ${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`} />
                    </div>
                    <p className={`mb-2 ${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                      QR Code da Propriedade: {formData.name}
                    </p>
                    <p className={`text-xs ${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                      ID: {formData.id}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className={`flex items-center justify-end gap-3 px-6 py-4 border-t ${
                isDarkMode ? 'border-[#3A3A3A] bg-[#1A1A1A]' : 'border-[#E0E0E0] bg-white'
              }`}>
                <button
                  type="button"
                  onClick={handleCancel}
                  className={`px-4 py-2 border rounded-[12px] hover:bg-opacity-80 transition-colors text-[14px] ${
                    isDarkMode 
                      ? 'bg-transparent border-[#3A3A3A] text-white hover:bg-[#2A2A2A]' 
                      : 'bg-white border-[#E0E0E0] text-[#1A1A1A] hover:bg-[#F8F8F8]'
                  }`}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0F3D26] text-white rounded-[12px] hover:bg-[#0F3D26]/90 transition-colors text-[14px]"
                >
                  Salvar Alterações
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isAddAreaModalOpen && (
        <AddAreaModal
          isOpen={isAddAreaModalOpen}
          onClose={handleAddAreaModalClose}
          onSave={editingArea ? handleEditArea : handleAddArea}
          propertyName={formData.name}
          editingArea={editingArea}
        />
      )}
    </>
  );
}