import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { PropertyCard } from './PropertyCard';
import { EditPropertyModal } from '../properties/EditPropertyModal';
import { Search, Plus, Activity } from 'lucide-react';

interface PropertyData {
  id: string;
  name: string;
  location: string;
  area: number;
  stage: string;
  status: 'active' | 'inactive';
  lastUpdate: string;
}

interface PropertyBankProps {
  properties?: any[];
  onEditProperty?: (propertyId: string) => void;
  onRegisterPlanting?: (propertyId: string) => void;
  onRegisterActivity?: () => void;
  onAddProperty?: () => void;
  onPageChange?: (page: string) => void;
}

export function PropertyBank({ 
  properties = [], 
  onEditProperty, 
  onRegisterPlanting, 
  onRegisterActivity,
  onAddProperty, 
  onPageChange 
}: PropertyBankProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [compositionFilter, setCompositionFilter] = useState('all');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.legalResponsible.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesComposition = compositionFilter === 'all' || property.composition === compositionFilter;
    
    return matchesSearch && matchesComposition;
  });

  // Mock property data for the edit modal
  const getMockPropertyData = (propertyId: string) => {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return null;

    return {
      id: propertyId,
      name: property.name,
      projects: ['Projeto Cerrado Verde'],
      cep: '74001-001',
      complement: 'Zona Rural',
      city: 'Goiânia',
      state: 'GO',
      address: 'Fazenda São João',
      number: 'KM 15',
      district: 'Setor Rural',
      carNumber: 'GO-123456789-ABCD',
      latitude: -16.6799,
      longitude: -49.2550,
      stage: 'execution',
      isActive: true,
      owners: [
        {
          id: '1',
          name: 'João Batista Ferreira',
          cpf: '123.456.789-01',
          rg: '1234567',
          birthDate: '1975-03-15',
          profession: 'Fazendeiro',
          maritalStatus: 'married',
          phone: '(62) 99999-9999',
          email: 'joao@fazenda.com',
          cep: '74001-001',
          city: 'Goiânia',
          address: 'Rua das Flores',
          number: '123',
          district: 'Centro',
          complement: 'Casa'
        },
        {
          id: '2',
          name: 'Maria Clara Batista',
          cpf: '987.654.321-01',
          rg: '7654321',
          birthDate: '1980-07-22',
          profession: 'Administradora',
          maritalStatus: 'married',
          phone: '(62) 98888-8888',
          email: 'maria@fazenda.com',
          cep: '74001-001',
          city: 'Goiânia',
          address: 'Rua das Flores',
          number: '123',
          district: 'Centro',
          complement: 'Casa'
        }
      ],
      restorationAreas: [
        {
          id: '1',
          name: 'Encosta da Castanheira',
          distanceFromFragment: '500m',
          areaType: 'Ciliar',
          specificAreaType: 'Mata Ciliar',
          terrainType: 'Encosta',
          areaSize: 12.5,
          slope: 15,
          depth: 'Média (1-2m)',
          degradation: 'Moderada',
          compaction: 'Baixa',
          invasiveSpecies: true,
          antsTermites: false,
          altitude: 850,
          terrainFace: 'Norte',
          latitude: -16.6800,
          longitude: -49.2551,
          observations: 'Área com boa drenagem natural, presença de gramíneas invasoras na borda.'
        },
        {
          id: '2',
          name: 'Baixada da Sede',
          distanceFromFragment: '1.2km',
          areaType: 'APP',
          specificAreaType: 'Área de Preservação Permanente',
          terrainType: 'Baixada',
          areaSize: 8.3,
          slope: 5,
          depth: 'Rasa (0-1m)',
          degradation: 'Alta',
          compaction: 'Alta',
          invasiveSpecies: true,
          antsTermites: true,
          altitude: 820,
          terrainFace: 'Sul',
          latitude: -16.6799,
          longitude: -49.2549,
          observations: 'Solo compactado por pisoteio de gado, necessita descompactação mecânica.'
        }
      ],
      documents: {
        'Documentos do Proprietário': [],
        'Documento da Propriedade': [],
        'CAR': [],
        'Licenças Ambientais': [],
        'Contratos': [],
        'Outros': []
      },
      qrCode: `QR-${propertyId}-${Date.now()}`
    };
  };

  const handleEditProperty = (propertyId: string) => {
    const propertyData = getMockPropertyData(propertyId);
    if (propertyData) {
      setSelectedPropertyId(propertyId);
      setIsEditModalOpen(true);
    }
  };

  const handleSaveProperty = (propertyData: any) => {
    console.log('Saving property:', propertyData);
    // Here you would typically save to your backend
    setIsEditModalOpen(false);
    setSelectedPropertyId(null);
    if (onEditProperty) {
      onEditProperty(propertyData.id);
    }
  };

  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-foreground">Banco de Áreas</CardTitle>
          <div className="flex gap-3">
            <Button
              onClick={onRegisterActivity}
              variant="outline"
              className="border-border hover:bg-muted hover:border-primary/50"
            >
              <Activity className="w-4 h-4 mr-2" />
              Registrar Atividade
            </Button>
            <Button
              onClick={() => onPageChange ? onPageChange('add-property') : onAddProperty?.()}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Nova Propriedade
            </Button>
          </div>
        </div>
        
        {/* Filters */}
        <div className="flex gap-4 pt-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary w-4 h-4" />
            <Input
              placeholder="Buscar uma área..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-input border-border focus:border-primary"
            />
          </div>
          <Select value={compositionFilter} onValueChange={setCompositionFilter}>
            <SelectTrigger className="w-48 bg-input border-border focus:border-primary">
              <SelectValue placeholder="Composição" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as composições</SelectItem>
              <SelectItem value="nativa">Vegetação Nativa</SelectItem>
              <SelectItem value="mista">Composição Mista</SelectItem>
              <SelectItem value="exotica">Espécies Exóticas</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              name={property.name}
              legalResponsible={property.legalResponsible}
              totalSize={property.totalSize}
              location={property.location}
              areas={property.areas}
              plantingStatus={property.plantingStatus}
              onEdit={handleEditProperty}
              onRegisterPlanting={onRegisterPlanting}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-secondary mb-2">Nenhuma propriedade encontrada</div>
            <div className="text-sm text-secondary">
              {searchTerm || compositionFilter !== 'all' 
                ? 'Tente ajustar os filtros de busca' 
                : 'Adicione uma nova propriedade para começar'
              }
            </div>
          </div>
        )}
      </CardContent>

      {/* Edit Property Modal */}
      <EditPropertyModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedPropertyId(null);
        }}
        property={selectedPropertyId ? getMockPropertyData(selectedPropertyId) : null}
        onSave={handleSaveProperty}
      />
    </Card>
  );
}