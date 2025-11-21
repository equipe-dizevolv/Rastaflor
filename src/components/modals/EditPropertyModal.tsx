import { X, Plus, Edit, Trash2, Upload, QrCode } from 'lucide-react';
import { useState } from 'react';

interface EditPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (property: PropertyEditData) => void;
  property: PropertyEditData;
}

export interface PropertyEditData {
  id: string;
  name: string;
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: string;
  latitude: string;
  longitude: string;
  owners?: Owner[];
  locations?: Location[];
  documents?: Document[];
}

interface Owner {
  id: string;
  name: string;
  cpf: string;
  phone: string;
}

interface Location {
  id: string;
  name: string;
  area: string;
  coordinates: string;
  matricesCount: number;
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
  const [activeTab, setActiveTab] = useState<TabType>('dados-gerais');
  const [formData, setFormData] = useState<PropertyEditData>(property);
  const [owners, setOwners] = useState<Owner[]>(property.owners || []);
  const [locations, setLocations] = useState<Location[]>(property.locations || []);
  const [documents, setDocuments] = useState<Document[]>(property.documents || []);

  const handleChange = (field: keyof PropertyEditData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...formData, owners, locations, documents });
  };

  const handleCancel = () => {
    setFormData(property);
    setOwners(property.owners || []);
    setLocations(property.locations || []);
    setDocuments(property.documents || []);
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

  const addLocation = () => {
    const newLocation: Location = {
      id: `location-${Date.now()}`,
      name: '',
      area: '',
      coordinates: '',
      matricesCount: 0
    };
    setLocations([...locations, newLocation]);
  };

  const removeLocation = (id: string) => {
    setLocations(locations.filter(l => l.id !== id));
  };

  const updateLocation = (id: string, field: keyof Location, value: string | number) => {
    setLocations(locations.map(l => l.id === id ? { ...l, [field]: value } : l));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-card rounded-[12px] shadow-xl max-w-[1100px] w-full max-h-[90vh] overflow-hidden border border-[#E0E0E0] dark:border-border flex">
        {/* Sidebar */}
        <div className="w-[220px] bg-white dark:bg-sidebar p-4 flex flex-col border-r border-[#E0E0E0] dark:border-sidebar-border">
          <h3 className="text-[#1A1A1A] dark:text-sidebar-foreground mb-6">Editar Propriedade</h3>
          <p className="text-[#777777] dark:text-sidebar-foreground/70 text-xs mb-6">
            Edite as informações da propriedade usando a navegação lateral
          </p>
          
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('dados-gerais')}
              className={`w-full text-left px-3 py-2.5 rounded-[10px] text-sm transition-colors ${
                activeTab === 'dados-gerais'
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                  : 'text-[#1A1A1A] dark:text-sidebar-foreground hover:bg-[#F0F0F0] dark:hover:bg-sidebar-accent/50'
              }`}
            >
              Dados Gerais
            </button>
            <button
              onClick={() => setActiveTab('proprietarios')}
              className={`w-full text-left px-3 py-2.5 rounded-[10px] text-sm transition-colors ${
                activeTab === 'proprietarios'
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                  : 'text-[#1A1A1A] dark:text-sidebar-foreground hover:bg-[#F0F0F0] dark:hover:bg-sidebar-accent/50'
              }`}
            >
              Proprietário(s)
            </button>
            <button
              onClick={() => setActiveTab('locais')}
              className={`w-full text-left px-3 py-2.5 rounded-[10px] text-sm transition-colors ${
                activeTab === 'locais'
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                  : 'text-[#1A1A1A] dark:text-sidebar-foreground hover:bg-[#F0F0F0] dark:hover:bg-sidebar-accent/50'
              }`}
            >
              Lista de Locais
            </button>
            <button
              onClick={() => setActiveTab('documentos')}
              className={`w-full text-left px-3 py-2.5 rounded-[10px] text-sm transition-colors ${
                activeTab === 'documentos'
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                  : 'text-[#1A1A1A] dark:text-sidebar-foreground hover:bg-[#F0F0F0] dark:hover:bg-sidebar-accent/50'
              }`}
            >
              Documentos
            </button>
            <button
              onClick={() => setActiveTab('qrcode')}
              className={`w-full text-left px-3 py-2.5 rounded-[10px] text-sm transition-colors ${
                activeTab === 'qrcode'
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                  : 'text-[#1A1A1A] dark:text-sidebar-foreground hover:bg-[#F0F0F0] dark:hover:bg-sidebar-accent/50'
              }`}
            >
              QR Code
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E0E0E0] dark:border-border bg-[rgb(15,61,38)]">
            <h2 className="text-white text-lg">{activeTab === 'dados-gerais' ? 'Dados Gerais' : activeTab === 'proprietarios' ? 'Proprietários' : activeTab === 'locais' ? 'Lista de Locais' : activeTab === 'documentos' ? 'Documentos' : 'QR Code'}</h2>
            <button
              onClick={handleCancel}
              className="w-5 h-5 flex items-center justify-center text-white hover:text-white/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <form onSubmit={handleSubmit} className="flex-1 overflow-auto p-6">
            {/* Dados Gerais Tab */}
            {activeTab === 'dados-gerais' && (
              <div className="space-y-4">
                {/* Nome da Propriedade */}
                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">
                    Nome da Propriedade
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Fazenda São João"
                    className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* CEP */}
                  <div className="space-y-2">
                    <label className="text-sm text-[#1A1A1A] dark:text-white">
                      CEP
                    </label>
                    <input
                      type="text"
                      value={formData.cep}
                      onChange={(e) => handleChange('cep', e.target.value)}
                      placeholder="00000-000"
                      className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>

                  {/* Número */}
                  <div className="space-y-2">
                    <label className="text-sm text-[#1A1A1A] dark:text-white">
                      Número
                    </label>
                    <input
                      type="text"
                      value={formData.number}
                      onChange={(e) => handleChange('number', e.target.value)}
                      placeholder="123"
                      className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Logradouro */}
                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">
                    Logradouro
                  </label>
                  <input
                    type="text"
                    value={formData.street}
                    onChange={(e) => handleChange('street', e.target.value)}
                    placeholder="Rua, Avenida..."
                    className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>

                {/* Complemento */}
                <div className="space-y-2">
                  <label className="text-sm text-[#1A1A1A] dark:text-white">
                    Complemento
                  </label>
                  <input
                    type="text"
                    value={formData.complement}
                    onChange={(e) => handleChange('complement', e.target.value)}
                    placeholder="Apto, Bloco..."
                    className="w-full h-9 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {/* Proprietários Tab */}
            {activeTab === 'proprietarios' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Gerencie os proprietários desta propriedade
                  </p>
                  <button
                    type="button"
                    onClick={addOwner}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[8px] px-3 py-1.5 flex items-center gap-2 text-sm transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Adicionar Proprietário
                  </button>
                </div>

                {owners.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-[#777777] dark:text-[#B0B0B0]">
                      Nenhum proprietário cadastrado
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {owners.map((owner) => (
                      <div
                        key={owner.id}
                        className="bg-[#F8F8F8] dark:bg-[#1E2621] p-4 rounded-[12px] border border-[#E0E0E0] dark:border-border"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-sm text-[#1A1A1A] dark:text-white">
                            Proprietário
                          </h4>
                          <div className="flex gap-1">
                            <button
                              type="button"
                              onClick={() => removeOwner(owner.id)}
                              className="p-1.5 rounded-[8px] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="space-y-1">
                            <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                              Nome
                            </label>
                            <input
                              type="text"
                              value={owner.name}
                              onChange={(e) => updateOwner(owner.id, 'name', e.target.value)}
                              placeholder="João da Silva"
                              className="w-full h-8 px-2 py-1 bg-white dark:bg-[#0F3D26] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                              CPF
                            </label>
                            <input
                              type="text"
                              value={owner.cpf}
                              onChange={(e) => updateOwner(owner.id, 'cpf', e.target.value)}
                              placeholder="000.000.000-00"
                              className="w-full h-8 px-2 py-1 bg-white dark:bg-[#0F3D26] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                              Telefone
                            </label>
                            <input
                              type="text"
                              value={owner.phone}
                              onChange={(e) => updateOwner(owner.id, 'phone', e.target.value)}
                              placeholder="(00) 00000-0000"
                              className="w-full h-8 px-2 py-1 bg-white dark:bg-[#0F3D26] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                  <p className="text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Gerencie os locais desta propriedade
                  </p>
                  <button
                    type="button"
                    onClick={addLocation}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[8px] px-3 py-1.5 flex items-center gap-2 text-sm transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Adicionar Local
                  </button>
                </div>

                {locations.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-[#777777] dark:text-[#B0B0B0]">
                      Nenhum local cadastrado
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {locations.map((location) => (
                      <div
                        key={location.id}
                        className="bg-[#F8F8F8] dark:bg-[#1E2621] p-4 rounded-[12px] border border-[#E0E0E0] dark:border-border"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-sm text-[#1A1A1A] dark:text-white">
                            Local
                          </h4>
                          <div className="flex gap-1">
                            <button
                              type="button"
                              onClick={() => removeLocation(location.id)}
                              className="p-1.5 rounded-[8px] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="space-y-1">
                            <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                              Nome
                            </label>
                            <input
                              type="text"
                              value={location.name}
                              onChange={(e) => updateLocation(location.id, 'name', e.target.value)}
                              placeholder="Local 1"
                              className="w-full h-8 px-2 py-1 bg-white dark:bg-[#0F3D26] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                              Área
                            </label>
                            <input
                              type="text"
                              value={location.area}
                              onChange={(e) => updateLocation(location.id, 'area', e.target.value)}
                              placeholder="1000 m²"
                              className="w-full h-8 px-2 py-1 bg-white dark:bg-[#0F3D26] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                              Coordenadas
                            </label>
                            <input
                              type="text"
                              value={location.coordinates}
                              onChange={(e) => updateLocation(location.id, 'coordinates', e.target.value)}
                              placeholder="-23.550520, -46.633309"
                              className="w-full h-8 px-2 py-1 bg-white dark:bg-[#0F3D26] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                              Matrizes
                            </label>
                            <input
                              type="number"
                              value={location.matricesCount}
                              onChange={(e) => updateLocation(location.id, 'matricesCount', parseInt(e.target.value))}
                              placeholder="10"
                              className="w-full h-8 px-2 py-1 bg-white dark:bg-[#0F3D26] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                            />
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
                <Upload className="w-12 h-12 mx-auto mb-3 text-[#777777] dark:text-[#B0B0B0]" />
                <p className="text-[#777777] dark:text-[#B0B0B0] mb-4">
                  Nenhum documento anexado
                </p>
                <button
                  type="button"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[8px] px-4 py-2 inline-flex items-center gap-2 text-sm transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Fazer Upload
                </button>
              </div>
            )}

            {/* QR Code Tab */}
            {activeTab === 'qrcode' && (
              <div className="text-center py-12">
                <div className="w-48 h-48 mx-auto mb-4 bg-[#F8F8F8] dark:bg-[#1E2621] border-2 border-dashed border-[#E0E0E0] dark:border-border rounded-[12px] flex items-center justify-center">
                  <QrCode className="w-16 h-16 text-[#777777] dark:text-[#B0B0B0]" />
                </div>
                <p className="text-[#777777] dark:text-[#B0B0B0] mb-2">
                  QR Code da Propriedade: {formData.name}
                </p>
                <p className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                  ID: {formData.id}
                </p>
              </div>
            )}
          </form>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#E0E0E0] dark:border-border bg-[#F8F8F8] dark:bg-[#0F3D26]">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-white dark:bg-transparent border border-[#E0E0E0] dark:border-border text-[#1A1A1A] dark:text-white rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] transition-colors text-sm"
            >
              Cancelar
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors text-sm"
            >
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}