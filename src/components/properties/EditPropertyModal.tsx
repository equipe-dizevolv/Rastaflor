import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { Textarea } from '../ui/textarea';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { ScrollArea } from '../ui/scroll-area';
import { 
  X, 
  Building, 
  Users, 
  MapPin, 
  FileText, 
  QrCode, 
  Plus, 
  Trash2, 
  Upload,
  Download,
  Info
} from 'lucide-react';

interface Owner {
  id: string;
  name: string;
  cpf: string;
  rg: string;
  birthDate: string;
  profession: string;
  maritalStatus: string;
  phone: string;
  email: string;
  cep: string;
  city: string;
  address: string;
  number: string;
  district: string;
  complement: string;
}

interface RestorationArea {
  id: string;
  name: string;
  distanceFromFragment: string;
  areaType: string;
  specificAreaType: string;
  terrainType: string;
  areaSize: number;
  slope: number;
  depth: string;
  degradation: string;
  compaction: string;
  invasiveSpecies: boolean;
  antsTermites: boolean;
  altitude: number;
  terrainFace: string;
  latitude: number;
  longitude: number;
  observations: string;
  photo?: File;
}

interface PropertyData {
  id: string;
  name: string;
  projects: string[];
  cep: string;
  complement: string;
  city: string;
  state: string;
  address: string;
  number: string;
  district: string;
  carNumber: string;
  latitude: number;
  longitude: number;
  stage: string;
  isActive: boolean;
  owners: Owner[];
  restorationAreas: RestorationArea[];
  documents: Record<string, File[]>;
  qrCode: string;
}

interface EditPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: PropertyData | null;
  onSave: (propertyData: PropertyData) => void;
}

type TabKey = 'property' | 'owners' | 'areas' | 'documents' | 'qrcode';

export function EditPropertyModal({ isOpen, onClose, property, onSave }: EditPropertyModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('property');
  const [selectedOwnerId, setSelectedOwnerId] = useState<string | null>(null);
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);
  const [formData, setFormData] = useState<PropertyData>({
    id: '',
    name: '',
    projects: [],
    cep: '',
    complement: '',
    city: '',
    state: '',
    address: '',
    number: '',
    district: '',
    carNumber: '',
    latitude: 0,
    longitude: 0,
    stage: 'mobilization',
    isActive: true,
    owners: [],
    restorationAreas: [],
    documents: {},
    qrCode: ''
  });

  const tabs = [
    { key: 'property' as TabKey, label: 'Dados da Propriedade', icon: Building },
    { key: 'owners' as TabKey, label: 'Proprietário(s)', icon: Users },
    { key: 'areas' as TabKey, label: 'Áreas de Restauração', icon: MapPin },
    { key: 'documents' as TabKey, label: 'Documentos', icon: FileText },
    { key: 'qrcode' as TabKey, label: 'QR Code', icon: QrCode }
  ];

  const documentCategories = [
    'Documentos do Proprietário',
    'Documento da Propriedade',
    'CAR',
    'Licenças Ambientais',
    'Contratos',
    'Outros'
  ];

  useEffect(() => {
    if (property) {
      setFormData(property);
      if (property.owners.length > 0) {
        setSelectedOwnerId(property.owners[0].id);
      }
      if (property.restorationAreas.length > 0) {
        setSelectedAreaId(property.restorationAreas[0].id);
      }
    } else {
      setFormData({
        id: '',
        name: '',
        projects: [],
        cep: '',
        complement: '',
        city: '',
        state: '',
        address: '',
        number: '',
        district: '',
        carNumber: '',
        latitude: 0,
        longitude: 0,
        stage: 'mobilization',
        isActive: true,
        owners: [],
        restorationAreas: [],
        documents: {},
        qrCode: ''
      });
      setSelectedOwnerId(null);
      setSelectedAreaId(null);
    }
    setActiveTab('property');
  }, [property]);

  const handlePropertyChange = (field: keyof PropertyData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleOwnerChange = (field: keyof Owner, value: any) => {
    if (!selectedOwnerId) return;
    
    setFormData(prev => ({
      ...prev,
      owners: prev.owners.map(owner =>
        owner.id === selectedOwnerId ? { ...owner, [field]: value } : owner
      )
    }));
  };

  const handleAreaChange = (field: keyof RestorationArea, value: any) => {
    if (!selectedAreaId) return;
    
    setFormData(prev => ({
      ...prev,
      restorationAreas: prev.restorationAreas.map(area =>
        area.id === selectedAreaId ? { ...area, [field]: value } : area
      )
    }));
  };

  const addNewOwner = () => {
    const newOwner: Owner = {
      id: Date.now().toString(),
      name: '',
      cpf: '',
      rg: '',
      birthDate: '',
      profession: '',
      maritalStatus: '',
      phone: '',
      email: '',
      cep: '',
      city: '',
      address: '',
      number: '',
      district: '',
      complement: ''
    };
    
    setFormData(prev => ({
      ...prev,
      owners: [...prev.owners, newOwner]
    }));
    setSelectedOwnerId(newOwner.id);
  };

  const removeOwner = (ownerId: string) => {
    setFormData(prev => ({
      ...prev,
      owners: prev.owners.filter(owner => owner.id !== ownerId)
    }));
    
    if (selectedOwnerId === ownerId) {
      const remainingOwners = formData.owners.filter(owner => owner.id !== ownerId);
      setSelectedOwnerId(remainingOwners.length > 0 ? remainingOwners[0].id : null);
    }
  };

  const addNewArea = () => {
    const newArea: RestorationArea = {
      id: Date.now().toString(),
      name: '',
      distanceFromFragment: '',
      areaType: '',
      specificAreaType: '',
      terrainType: '',
      areaSize: 0,
      slope: 0,
      depth: '',
      degradation: '',
      compaction: '',
      invasiveSpecies: false,
      antsTermites: false,
      altitude: 0,
      terrainFace: '',
      latitude: 0,
      longitude: 0,
      observations: ''
    };
    
    setFormData(prev => ({
      ...prev,
      restorationAreas: [...prev.restorationAreas, newArea]
    }));
    setSelectedAreaId(newArea.id);
  };

  const removeArea = (areaId: string) => {
    setFormData(prev => ({
      ...prev,
      restorationAreas: prev.restorationAreas.filter(area => area.id !== areaId)
    }));
    
    if (selectedAreaId === areaId) {
      const remainingAreas = formData.restorationAreas.filter(area => area.id !== areaId);
      setSelectedAreaId(remainingAreas.length > 0 ? remainingAreas[0].id : null);
    }
  };

  const handleFileUpload = (category: string, files: FileList) => {
    const newFiles = Array.from(files);
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [category]: [...(prev.documents[category] || []), ...newFiles]
      }
    }));
  };

  const removeDocument = (category: string, fileIndex: number) => {
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [category]: prev.documents[category]?.filter((_, index) => index !== fileIndex) || []
      }
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const selectedOwner = formData.owners.find(owner => owner.id === selectedOwnerId);
  const selectedArea = formData.restorationAreas.find(area => area.id === selectedAreaId);

  const renderPropertyTab = () => (
    <div className="space-y-6">
      {/* Section Header */}
      <div>
        <h3 className="text-foreground mb-2">Dados da Propriedade</h3>
        <p className="text-secondary">Informações e características sobre a propriedade</p>
      </div>

      {/* Two Column Form Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="propertyName">Nome da Propriedade</Label>
            <Input
              id="propertyName"
              value={formData.name}
              onChange={(e) => handlePropertyChange('name', e.target.value)}
              className="bg-input border-border focus:border-primary"
              placeholder="Digite o nome da propriedade"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cep">CEP</Label>
            <Input
              id="cep"
              value={formData.cep}
              onChange={(e) => handlePropertyChange('cep', e.target.value)}
              className="bg-input border-border focus:border-primary"
              placeholder="00000-000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">Cidade e Estado</Label>
            <Input
              id="city"
              value={`${formData.city}${formData.state ? `, ${formData.state}` : ''}`}
              onChange={(e) => {
                const parts = e.target.value.split(',');
                handlePropertyChange('city', parts[0]?.trim() || '');
                handlePropertyChange('state', parts[1]?.trim() || '');
              }}
              className="bg-input border-border focus:border-primary"
              placeholder="Cidade, Estado"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="number">Número</Label>
            <Input
              id="number"
              value={formData.number}
              onChange={(e) => handlePropertyChange('number', e.target.value)}
              className="bg-input border-border focus:border-primary"
              placeholder="Número ou identificação"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="carNumber">Número do CAR</Label>
            <Input
              id="carNumber"
              value={formData.carNumber}
              onChange={(e) => handlePropertyChange('carNumber', e.target.value)}
              className="bg-input border-border focus:border-primary"
              placeholder="PA-0000000-0000.0000.0000.0000.0000.000"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Label htmlFor="latitude">Latitude</Label>
              <Info className="w-4 h-4 text-secondary cursor-help" title="Coordenada geográfica em graus decimais" />
            </div>
            <Input
              id="latitude"
              type="number"
              step="0.000001"
              value={formData.latitude || ''}
              onChange={(e) => handlePropertyChange('latitude', parseFloat(e.target.value) || 0)}
              className="bg-input border-border focus:border-primary"
              placeholder="-00.000000"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="projects">Projetos</Label>
            <Select
              value={formData.projects[0] || ''}
              onValueChange={(value) => handlePropertyChange('projects', [value])}
            >
              <SelectTrigger className="bg-input border-border focus:border-primary">
                <SelectValue placeholder="Selecione um projeto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="projeto-1">Projeto: Recuperação do Igarapé do Areal</SelectItem>
                <SelectItem value="projeto-2">Projeto: Restauração da Serra Verde</SelectItem>
                <SelectItem value="projeto-3">Projeto: Mata Atlântica Sustentável</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="complement">Complemento</Label>
            <Input
              id="complement"
              value={formData.complement}
              onChange={(e) => handlePropertyChange('complement', e.target.value)}
              className="bg-input border-border focus:border-primary"
              placeholder="Informações adicionais"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Logradouro</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handlePropertyChange('address', e.target.value)}
              className="bg-input border-border focus:border-primary"
              placeholder="Rua, avenida, estrada"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="district">Bairro</Label>
            <Input
              id="district"
              value={formData.district}
              onChange={(e) => handlePropertyChange('district', e.target.value)}
              className="bg-input border-border focus:border-primary"
              placeholder="Nome do bairro"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Label htmlFor="longitude">Longitude</Label>
              <Info className="w-4 h-4 text-secondary cursor-help" title="Coordenada geográfica em graus decimais" />
            </div>
            <Input
              id="longitude"
              type="number"
              step="0.000001"
              value={formData.longitude || ''}
              onChange={(e) => handlePropertyChange('longitude', parseFloat(e.target.value) || 0)}
              className="bg-input border-border focus:border-primary"
              placeholder="-00.000000"
            />
          </div>
        </div>
      </div>

      {/* Etapa Section */}
      <div className="space-y-3 pt-4">
        <Separator />
        <div className="space-y-3">
          <Label>Etapa</Label>
          <RadioGroup
            value={formData.stage}
            onValueChange={(value) => handlePropertyChange('stage', value)}
            className="space-y-2"
          >
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="mobilization" id="mobilization" />
              <Label htmlFor="mobilization" className="cursor-pointer">Mobilização</Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="preparation" id="preparation" />
              <Label htmlFor="preparation" className="cursor-pointer">Preparo de restauração</Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="restoration" id="restoration" />
              <Label htmlFor="restoration" className="cursor-pointer">Restauração</Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="monitoring" id="monitoring" />
              <Label htmlFor="monitoring" className="cursor-pointer">Monitoramento e manutenção</Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="completed" id="completed" />
              <Label htmlFor="completed" className="cursor-pointer">Finalizada</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* Ativo Section */}
      <div className="space-y-3 pt-2">
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="propertyActive">Ativo</Label>
            <p className="text-sm text-secondary">
              Propriedade ativa no sistema e disponível para operações
            </p>
          </div>
          <Switch
            id="propertyActive"
            checked={formData.isActive}
            onCheckedChange={(checked) => handlePropertyChange('isActive', checked)}
          />
        </div>
      </div>
    </div>
  );

  const renderOwnersTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-full">
      {/* Owners List */}
      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Proprietários</h3>
          <Button onClick={addNewOwner} size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar
          </Button>
        </div>
        
        <ScrollArea className="h-96">
          <div className="space-y-2">
            {formData.owners.map((owner) => (
              <Card
                key={owner.id}
                className={`cursor-pointer transition-colors ${
                  selectedOwnerId === owner.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedOwnerId(owner.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{owner.name || 'Novo Proprietário'}</p>
                      <p className="text-sm text-secondary">{owner.cpf}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeOwner(owner.id);
                      }}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Owner Form */}
      <div className="lg:col-span-3">
        {selectedOwner ? (
          <ScrollArea className="h-96">
            <div className="space-y-4 pr-4">
              <div>
                <Label htmlFor="ownerName">Nome do Proprietário</Label>
                <Input
                  id="ownerName"
                  value={selectedOwner.name}
                  onChange={(e) => handleOwnerChange('name', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    value={selectedOwner.cpf}
                    onChange={(e) => handleOwnerChange('cpf', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="rg">RG</Label>
                  <Input
                    id="rg"
                    value={selectedOwner.rg}
                    onChange={(e) => handleOwnerChange('rg', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="birthDate">Data de Nascimento</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={selectedOwner.birthDate}
                    onChange={(e) => handleOwnerChange('birthDate', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="profession">Profissão</Label>
                  <Input
                    id="profession"
                    value={selectedOwner.profession}
                    onChange={(e) => handleOwnerChange('profession', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="maritalStatus">Estado Civil</Label>
                  <Select
                    value={selectedOwner.maritalStatus}
                    onValueChange={(value) => handleOwnerChange('maritalStatus', value)}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Solteiro(a)</SelectItem>
                      <SelectItem value="married">Casado(a)</SelectItem>
                      <SelectItem value="divorced">Divorciado(a)</SelectItem>
                      <SelectItem value="widowed">Viúvo(a)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={selectedOwner.phone}
                    onChange={(e) => handleOwnerChange('phone', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={selectedOwner.email}
                  onChange={(e) => handleOwnerChange('email', e.target.value)}
                  className="mt-2"
                />
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ownerCep">CEP</Label>
                  <Input
                    id="ownerCep"
                    value={selectedOwner.cep}
                    onChange={(e) => handleOwnerChange('cep', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="ownerCity">Cidade</Label>
                  <Input
                    id="ownerCity"
                    value={selectedOwner.city}
                    onChange={(e) => handleOwnerChange('city', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="ownerAddress">Logradouro</Label>
                  <Input
                    id="ownerAddress"
                    value={selectedOwner.address}
                    onChange={(e) => handleOwnerChange('address', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="ownerNumber">Número</Label>
                  <Input
                    id="ownerNumber"
                    value={selectedOwner.number}
                    onChange={(e) => handleOwnerChange('number', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="ownerDistrict">Bairro</Label>
                  <Input
                    id="ownerDistrict"
                    value={selectedOwner.district}
                    onChange={(e) => handleOwnerChange('district', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="ownerComplement">Complemento</Label>
                <Input
                  id="ownerComplement"
                  value={selectedOwner.complement}
                  onChange={(e) => handleOwnerChange('complement', e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>
          </ScrollArea>
        ) : (
          <div className="flex items-center justify-center h-64 text-secondary">
            Selecione um proprietário para editar ou adicione um novo
          </div>
        )}
      </div>
    </div>
  );

  const renderAreasTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-full">
      {/* Areas List */}
      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Áreas de Restauração</h3>
          <Button onClick={addNewArea} size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar
          </Button>
        </div>
        
        <ScrollArea className="h-96">
          <div className="space-y-2">
            {formData.restorationAreas.map((area) => (
              <Card
                key={area.id}
                className={`cursor-pointer transition-colors ${
                  selectedAreaId === area.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedAreaId(area.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{area.name || 'Nova Área'}</p>
                      <p className="text-sm text-secondary">{area.areaSize} hectares</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeArea(area.id);
                      }}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Area Form */}
      <div className="lg:col-span-3">
        {selectedArea ? (
          <ScrollArea className="h-96">
            <div className="space-y-4 pr-4">
              <div>
                <Label htmlFor="areaName">Nome da área</Label>
                <Input
                  id="areaName"
                  value={selectedArea.name}
                  onChange={(e) => handleAreaChange('name', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="distanceFromFragment">Distância do fragmento florestal</Label>
                  <Input
                    id="distanceFromFragment"
                    value={selectedArea.distanceFromFragment}
                    onChange={(e) => handleAreaChange('distanceFromFragment', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="areaType">Tipo de Área</Label>
                  <Input
                    id="areaType"
                    value={selectedArea.areaType}
                    onChange={(e) => handleAreaChange('areaType', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="specificAreaType">Qual tipo de Área?</Label>
                  <Input
                    id="specificAreaType"
                    value={selectedArea.specificAreaType}
                    onChange={(e) => handleAreaChange('specificAreaType', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="terrainType">Tipo de terreno</Label>
                  <Input
                    id="terrainType"
                    value={selectedArea.terrainType}
                    onChange={(e) => handleAreaChange('terrainType', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="areaSize">Tamanho da área (hectares)</Label>
                  <Input
                    id="areaSize"
                    type="number"
                    step="0.01"
                    value={selectedArea.areaSize}
                    onChange={(e) => handleAreaChange('areaSize', parseFloat(e.target.value))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="slope">Declividade (%)</Label>
                  <Input
                    id="slope"
                    type="number"
                    value={selectedArea.slope}
                    onChange={(e) => handleAreaChange('slope', parseInt(e.target.value))}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="depth">Profundidade</Label>
                  <Input
                    id="depth"
                    value={selectedArea.depth}
                    onChange={(e) => handleAreaChange('depth', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="degradation">Degradação</Label>
                  <Input
                    id="degradation"
                    value={selectedArea.degradation}
                    onChange={(e) => handleAreaChange('degradation', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="compaction">Compactação</Label>
                <Input
                  id="compaction"
                  value={selectedArea.compaction}
                  onChange={(e) => handleAreaChange('compaction', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Switch
                    id="invasiveSpecies"
                    checked={selectedArea.invasiveSpecies}
                    onCheckedChange={(checked) => handleAreaChange('invasiveSpecies', checked)}
                  />
                  <Label htmlFor="invasiveSpecies">Presença de espécies exóticas e invasoras</Label>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Switch
                    id="antsTermites"
                    checked={selectedArea.antsTermites}
                    onCheckedChange={(checked) => handleAreaChange('antsTermites', checked)}
                  />
                  <Label htmlFor="antsTermites">Presença de formigas e cupins</Label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="altitude">Altitude</Label>
                  <Input
                    id="altitude"
                    type="number"
                    value={selectedArea.altitude}
                    onChange={(e) => handleAreaChange('altitude', parseInt(e.target.value))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="terrainFace">Face do terreno</Label>
                  <Input
                    id="terrainFace"
                    value={selectedArea.terrainFace}
                    onChange={(e) => handleAreaChange('terrainFace', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="areaLatitude">Latitude</Label>
                  <Input
                    id="areaLatitude"
                    type="number"
                    step="0.000001"
                    value={selectedArea.latitude}
                    onChange={(e) => handleAreaChange('latitude', parseFloat(e.target.value))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="areaLongitude">Longitude</Label>
                  <Input
                    id="areaLongitude"
                    type="number"
                    step="0.000001"
                    value={selectedArea.longitude}
                    onChange={(e) => handleAreaChange('longitude', parseFloat(e.target.value))}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="observations">Observações</Label>
                <Textarea
                  id="observations"
                  value={selectedArea.observations}
                  onChange={(e) => handleAreaChange('observations', e.target.value)}
                  className="mt-2"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="areaPhoto">Foto da Área</Label>
                <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 mx-auto text-secondary mb-2" />
                  <p className="text-sm text-secondary">Clique para fazer upload ou arraste a imagem</p>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        handleAreaChange('photo', e.target.files[0]);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </ScrollArea>
        ) : (
          <div className="flex items-center justify-center h-64 text-secondary">
            Selecione uma área para editar ou adicione uma nova
          </div>
        )}
      </div>
    </div>
  );

  const renderDocumentsTab = () => (
    <div className="space-y-6">
      {documentCategories.map((category) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle className="text-lg">{category}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Uploaded Files */}
            {formData.documents[category] && formData.documents[category].length > 0 && (
              <div className="space-y-2">
                {formData.documents[category].map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="font-medium">{file.name}</span>
                      <span className="text-sm text-secondary">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeDocument(category, index)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
            
            {/* Upload Area */}
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 mx-auto text-secondary mb-2" />
              <p className="text-sm text-secondary mb-2">
                Clique para fazer upload ou arraste os arquivos
              </p>
              <input
                type="file"
                multiple
                className="hidden"
                id={`upload-${category}`}
                onChange={(e) => {
                  if (e.target.files) {
                    handleFileUpload(category, e.target.files);
                  }
                }}
              />
              <Button
                variant="outline"
                onClick={() => document.getElementById(`upload-${category}`)?.click()}
              >
                Selecionar Arquivos
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderQRCodeTab = () => (
    <div className="flex flex-col items-center justify-center h-64 space-y-6">
      <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
        <QrCode className="w-32 h-32 text-secondary" />
      </div>
      <div className="text-center space-y-2">
        <h3 className="font-medium">QR Code da Propriedade</h3>
        <p className="text-sm text-secondary max-w-md">
          Este QR Code permite acesso rápido às informações desta propriedade.
          Compartilhe com a equipe de campo para facilitar o trabalho.
        </p>
        <Button variant="outline" className="mt-4">
          <Download className="w-4 h-4 mr-2" />
          Baixar QR Code
        </Button>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'property':
        return renderPropertyTab();
      case 'owners':
        return renderOwnersTab();
      case 'areas':
        return renderAreasTab();
      case 'documents':
        return renderDocumentsTab();
      case 'qrcode':
        return renderQRCodeTab();
      default:
        return renderPropertyTab();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-6xl max-h-[90vh] p-0 [&>button]:hidden"
      >
        <div className="flex h-full">
          {/* Navigation Panel */}
          <div className="w-64 bg-[#0f3d26] border-r border-[#1a4d32] p-6">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-white">
                {property ? 'Editar Propriedade' : 'Nova Propriedade'}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Modal para edição de propriedades com navegação por abas
              </DialogDescription>
            </DialogHeader>
            
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.key
                        ? 'bg-[#0a2a1a] text-white'
                        : 'text-white/80 hover:bg-[#1a4d32] hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-medium">
                {tabs.find(tab => tab.key === activeTab)?.label}
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-secondary hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 p-6 overflow-auto">
              {renderTabContent()}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-border">
              <Button
                variant="ghost"
                onClick={onClose}
                className="text-secondary hover:text-foreground"
              >
                Cancelar
              </Button>
              
              <Button
                onClick={handleSave}
                className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-40"
              >
                Salvar Alterações
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}