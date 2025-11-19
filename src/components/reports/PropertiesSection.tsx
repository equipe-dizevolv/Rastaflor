import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Download, MapPin, Calendar, Ruler } from 'lucide-react';

interface Property {
  id: string;
  name: string;
  location: string;
  area: number;
  plantingDate: string;
  seedlingsPlanted: number;
  documentsAvailable: boolean;
}

interface PropertiesSectionProps {
  properties: Property[];
  onDownloadDocuments: (propertyId: string) => void;
}

export function PropertiesSection({ properties, onDownloadDocuments }: PropertiesSectionProps) {
  return (
    <Card className="h-fit shadow-sm">
      <CardHeader>
        <CardTitle className="text-foreground">Propriedades Atendidas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className="border border-border rounded-lg p-4 space-y-3 print:break-inside-avoid"
          >
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">{property.name}</h4>
              
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2 text-secondary">
                  <MapPin className="w-4 h-4" />
                  <span>{property.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-secondary">
                  <Ruler className="w-4 h-4" />
                  <span>{property.area.toLocaleString('pt-BR')} hectares</span>
                </div>
                
                <div className="flex items-center gap-2 text-secondary">
                  <Calendar className="w-4 h-4" />
                  <span>Plantio em {property.plantingDate}</span>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm text-foreground">
                  <span className="font-medium">{property.seedlingsPlanted.toLocaleString('pt-BR')}</span> mudas plantadas
                </p>
              </div>
            </div>
            
            <div className="flex justify-end print:hidden">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onDownloadDocuments(property.id)}
                disabled={!property.documentsAvailable}
                className="border-border hover:bg-muted"
              >
                <Download className="w-4 h-4 mr-2" />
                Baixar Documentos
              </Button>
            </div>
            
            <div className="hidden print:block text-xs text-secondary">
              Documentos disponíveis: {property.documentsAvailable ? 'Sim' : 'Não'}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}