import { useState } from 'react';
import { MapPin, Users, Map as MapIcon, FileText, QrCode, Info, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface AddPropertyProps {
  onPageChange: (page: string) => void;
}

export function AddProperty({ onPageChange }: AddPropertyProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const [activeTab, setActiveTab] = useState('property-data');
  const [formData, setFormData] = useState({
    name: '',
    projects: '',
    complement: '',
    cep: '',
    cityState: '',
    street: '',
    number: '',
    neighborhood: '',
    carNumber: '',
    longitude: '',
    latitude: '',
    stage: 'mobilization'
  });

  const [owners, setOwners] = useState<Array<{ name: string; cpf: string; email: string; phone: string }>>([
    { name: '', cpf: '', email: '', phone: '' }
  ]);

  const [areas, setAreas] = useState<Array<{ name: string; size: string; type: string }>>([
    { name: '', size: '', type: '' }
  ]);

  const tabs = [
    { id: 'property-data', label: 'Dados da Propriedade', icon: MapPin },
    { id: 'owners', label: 'Proprietário(s)', icon: Users },
    { id: 'restoration-areas', label: 'Áreas de Restauração', icon: MapIcon },
    { id: 'documents', label: 'Documentos', icon: FileText },
    { id: 'qrcode', label: 'QR Code', icon: QrCode },
  ];

  const handleAddOwner = () => {
    setOwners([...owners, { name: '', cpf: '', email: '', phone: '' }]);
  };

  const handleRemoveOwner = (index: number) => {
    if (owners.length > 1) {
      setOwners(owners.filter((_, i) => i !== index));
    }
  };

  const handleOwnerChange = (index: number, field: string, value: string) => {
    const updated = [...owners];
    updated[index] = { ...updated[index], [field]: value };
    setOwners(updated);
  };

  const handleAddArea = () => {
    setAreas([...areas, { name: '', size: '', type: '' }]);
  };

  const handleRemoveArea = (index: number) => {
    if (areas.length > 1) {
      setAreas(areas.filter((_, i) => i !== index));
    }
  };

  const handleAreaChange = (index: number, field: string, value: string) => {
    const updated = [...areas];
    updated[index] = { ...updated[index], [field]: value };
    setAreas(updated);
  };

  const handleSave = () => {
    console.log('Save property:', { ...formData, owners, areas });
    onPageChange('properties');
  };

  const handleCancel = () => {
    onPageChange('properties');
  };

  return (
    <div className="flex h-[calc(100vh-180px)] gap-6 p-6">
      {/* Left Sidebar Navigation */}
      <div className={`w-[280px] flex-shrink-0 rounded-[12px] p-6 ${
        isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white border border-[#E0E0E0]'
      }`}>
        <div className="mb-6">
          <h2 className={`text-xl mb-2 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
            Nova Propriedade
          </h2>
        </div>

        <nav className="space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                  isActive
                    ? 'bg-[#0F3D26] text-white'
                    : isDarkMode
                      ? 'text-gray-300 hover:bg-[#1A1A1A]'
                      : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Right Content Area */}
      <div className={`flex-1 rounded-[12px] flex flex-col ${
        isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white border border-[#E0E0E0]'
      }`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div>
            <h3 className={`text-xl ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {tabs.find(t => t.id === activeTab)?.label}
            </h3>
            <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {activeTab === 'property-data' && 'Informações e características sobre a propriedade'}
              {activeTab === 'owners' && 'Adicione os proprietários da propriedade'}
              {activeTab === 'restoration-areas' && 'Defina as áreas para restauração'}
              {activeTab === 'documents' && 'Anexe documentos relacionados'}
              {activeTab === 'qrcode' && 'Gere QR Code para identificação'}
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Property Data Tab */}
          {activeTab === 'property-data' && (
            <div className="space-y-6 max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                    Nome da Propriedade *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Digite o nome"
                    className={`rounded-[8px] ${
                      isDarkMode 
                        ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                        : 'bg-white border-gray-300 text-[#1A1A1A]'
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projects" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                    Projetos
                  </Label>
                  <Select value={formData.projects} onValueChange={(value) => setFormData({ ...formData, projects: value })}>
                    <SelectTrigger className={`rounded-[8px] ${
                      isDarkMode 
                        ? 'bg-[#1A1A1A] border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-[#1A1A1A]'
                    }`}>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="projeto1">Projeto 1</SelectItem>
                      <SelectItem value="projeto2">Projeto 2</SelectItem>
                      <SelectItem value="projeto3">Projeto 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cep" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                    CEP
                  </Label>
                  <Input
                    id="cep"
                    value={formData.cep}
                    onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
                    placeholder="00000-000"
                    className={`rounded-[8px] ${
                      isDarkMode 
                        ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                        : 'bg-white border-gray-300 text-[#1A1A1A]'
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="complement" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                    Complemento
                  </Label>
                  <Input
                    id="complement"
                    value={formData.complement}
                    onChange={(e) => setFormData({ ...formData, complement: e.target.value })}
                    placeholder="Informações adicionais"
                    className={`rounded-[8px] ${
                      isDarkMode 
                        ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                        : 'bg-white border-gray-300 text-[#1A1A1A]'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cityState" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                    Cidade e Estado
                  </Label>
                  <Input
                    id="cityState"
                    value={formData.cityState}
                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    placeholder="Cidade, Estado"
                    className={`rounded-[8px] ${
                      isDarkMode 
                        ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                        : 'bg-white border-gray-300 text-[#1A1A1A]'
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="street" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                    Logradouro
                  </Label>
                  <Input
                    id="street"
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    placeholder="Rua, avenida, etc"
                    className={`rounded-[8px] ${
                      isDarkMode 
                        ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                        : 'bg-white border-gray-300 text-[#1A1A1A]'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="number" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                    Número
                  </Label>
                  <Input
                    id="number"
                    value={formData.number}
                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                    placeholder="Número ou identificação"
                    className={`rounded-[8px] ${
                      isDarkMode 
                        ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                        : 'bg-white border-gray-300 text-[#1A1A1A]'
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="neighborhood" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                    Bairro
                  </Label>
                  <Input
                    id="neighborhood"
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    placeholder="Nome do bairro"
                    className={`rounded-[8px] ${
                      isDarkMode 
                        ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                        : 'bg-white border-gray-300 text-[#1A1A1A]'
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="carNumber" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Número do CAR
                </Label>
                <Input
                  id="carNumber"
                  value={formData.carNumber}
                  onChange={(e) => setFormData({ ...formData, carNumber: e.target.value })}
                  placeholder="PA-0000000"
                  className={`rounded-[8px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                      : 'bg-white border-gray-300 text-[#1A1A1A]'
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="longitude" className={`flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    Longitude <Info className="w-4 h-4 text-gray-400" />
                  </Label>
                  <Input
                    id="longitude"
                    value={formData.longitude}
                    onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                    placeholder="-00.000000"
                    className={`rounded-[8px] ${
                      isDarkMode 
                        ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                        : 'bg-white border-gray-300 text-[#1A1A1A]'
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="latitude" className={`flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    Latitude <Info className="w-4 h-4 text-gray-400" />
                  </Label>
                  <Input
                    id="latitude"
                    value={formData.latitude}
                    onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                    placeholder="-00.000000"
                    className={`rounded-[8px] ${
                      isDarkMode 
                        ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                        : 'bg-white border-gray-300 text-[#1A1A1A]'
                    }`}
                  />
                </div>
              </div>

              <div className={`p-6 rounded-lg border ${
                isDarkMode ? 'bg-[#1A1A1A] border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <h4 className={`font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>Etapa</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="stage"
                      value="mobilization"
                      checked={formData.stage === 'mobilization'}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-4 h-4 text-[#0F3D26]"
                    />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Mobilização</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="stage"
                      value="preparation"
                      checked={formData.stage === 'preparation'}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-4 h-4 text-[#0F3D26]"
                    />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Preparo de restauração</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="stage"
                      value="restoration"
                      checked={formData.stage === 'restoration'}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-4 h-4 text-[#0F3D26]"
                    />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Restauração</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Owners Tab */}
          {activeTab === 'owners' && (
            <div className="space-y-6 max-w-4xl">
              <div className="flex items-center justify-between">
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Adicione os proprietários desta propriedade
                </p>
                <Button
                  onClick={handleAddOwner}
                  size="sm"
                  className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[8px]"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Proprietário
                </Button>
              </div>

              <div className="space-y-4">
                {owners.map((owner, index) => (
                  <div key={index} className={`p-6 rounded-lg border ${
                    isDarkMode ? 'bg-[#1A1A1A] border-gray-700' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                        Proprietário #{index + 1}
                      </span>
                      {owners.length > 1 && (
                        <button
                          onClick={() => handleRemoveOwner(index)}
                          className="text-red-500 hover:text-red-600 p-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                          Nome Completo
                        </Label>
                        <Input
                          value={owner.name}
                          onChange={(e) => handleOwnerChange(index, 'name', e.target.value)}
                          placeholder="Nome do proprietário"
                          className={`rounded-[8px] ${
                            isDarkMode 
                              ? 'bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-500' 
                              : 'bg-white border-gray-300 text-[#1A1A1A]'
                          }`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                          CPF
                        </Label>
                        <Input
                          value={owner.cpf}
                          onChange={(e) => handleOwnerChange(index, 'cpf', e.target.value)}
                          placeholder="000.000.000-00"
                          className={`rounded-[8px] ${
                            isDarkMode 
                              ? 'bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-500' 
                              : 'bg-white border-gray-300 text-[#1A1A1A]'
                          }`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                          Email
                        </Label>
                        <Input
                          value={owner.email}
                          onChange={(e) => handleOwnerChange(index, 'email', e.target.value)}
                          placeholder="email@exemplo.com"
                          type="email"
                          className={`rounded-[8px] ${
                            isDarkMode 
                              ? 'bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-500' 
                              : 'bg-white border-gray-300 text-[#1A1A1A]'
                          }`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                          Telefone
                        </Label>
                        <Input
                          value={owner.phone}
                          onChange={(e) => handleOwnerChange(index, 'phone', e.target.value)}
                          placeholder="(00) 00000-0000"
                          className={`rounded-[8px] ${
                            isDarkMode 
                              ? 'bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-500' 
                              : 'bg-white border-gray-300 text-[#1A1A1A]'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Restoration Areas Tab */}
          {activeTab === 'restoration-areas' && (
            <div className="space-y-6 max-w-4xl">
              <div className="flex items-center justify-between">
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Defina as áreas específicas para restauração
                </p>
                <Button
                  onClick={handleAddArea}
                  size="sm"
                  className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[8px]"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Área
                </Button>
              </div>

              <div className="space-y-4">
                {areas.map((area, index) => (
                  <div key={index} className={`p-6 rounded-lg border ${
                    isDarkMode ? 'bg-[#1A1A1A] border-gray-700' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                        Área #{index + 1}
                      </span>
                      {areas.length > 1 && (
                        <button
                          onClick={() => handleRemoveArea(index)}
                          className="text-red-500 hover:text-red-600 p-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                          Nome da Área
                        </Label>
                        <Input
                          value={area.name}
                          onChange={(e) => handleAreaChange(index, 'name', e.target.value)}
                          placeholder="Ex: APP, Reserva Legal"
                          className={`rounded-[8px] ${
                            isDarkMode 
                              ? 'bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-500' 
                              : 'bg-white border-gray-300 text-[#1A1A1A]'
                          }`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                          Tamanho (hectares)
                        </Label>
                        <Input
                          value={area.size}
                          onChange={(e) => handleAreaChange(index, 'size', e.target.value)}
                          placeholder="0.00"
                          type="number"
                          className={`rounded-[8px] ${
                            isDarkMode 
                              ? 'bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-500' 
                              : 'bg-white border-gray-300 text-[#1A1A1A]'
                          }`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                          Tipo
                        </Label>
                        <Select value={area.type} onValueChange={(value) => handleAreaChange(index, 'type', value)}>
                          <SelectTrigger className={`rounded-[8px] ${
                            isDarkMode 
                              ? 'bg-[#2A2A2A] border-gray-600 text-white' 
                              : 'bg-white border-gray-300 text-[#1A1A1A]'
                          }`}>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="app">APP</SelectItem>
                            <SelectItem value="rl">Reserva Legal</SelectItem>
                            <SelectItem value="aua">Área de Uso Alternativo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === 'documents' && (
            <div className="space-y-6 max-w-4xl">
              <div className={`p-12 rounded-lg border-2 border-dashed text-center ${
                isDarkMode ? 'border-gray-600' : 'border-gray-300'
              }`}>
                <FileText className={`w-12 h-12 mx-auto mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <h3 className={`font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  Anexar Documentos
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Arraste arquivos aqui ou clique para selecionar
                </p>
                <Button className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[8px]">
                  Selecionar Arquivos
                </Button>
              </div>
            </div>
          )}

          {/* QR Code Tab */}
          {activeTab === 'qrcode' && (
            <div className="space-y-6 max-w-4xl">
              <div className="text-center py-12">
                <div className={`w-48 h-48 mx-auto mb-6 rounded-lg flex items-center justify-center ${
                  isDarkMode ? 'bg-[#1A1A1A]' : 'bg-gray-100'
                }`}>
                  <QrCode className={`w-32 h-32 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                </div>
                <h3 className={`font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  QR Code será gerado após salvar
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Complete os dados da propriedade para gerar o QR Code de identificação
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={`flex items-center justify-end gap-3 p-6 border-t ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <Button
            onClick={handleCancel}
            variant="outline"
            className={`rounded-[8px] px-6 ${
              isDarkMode 
                ? 'border-gray-600 text-white hover:bg-[#1A1A1A]' 
                : 'border-gray-300 text-[#1A1A1A] hover:bg-gray-50'
            }`}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSave}
            className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[8px] px-6"
          >
            Salvar Propriedade
          </Button>
        </div>
      </div>
    </div>
  );
}
