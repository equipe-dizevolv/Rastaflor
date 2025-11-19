import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Edit3, User, MapPin, Sprout } from 'lucide-react';

interface PropertyArea {
  name: string;
  degradation: string;
  slope: string;
  type: string;
  size: string;
}

interface PropertyCardProps {
  id: string;
  name: string;
  legalResponsible: string;
  totalSize: string;
  location: string;
  areas: PropertyArea[];
  plantingStatus: 'pending' | 'in-progress' | 'completed';
  onEdit: (id: string) => void;
  onRegisterPlanting: (id: string) => void;
}

export function PropertyCard({
  id,
  name,
  legalResponsible,
  totalSize,
  location,
  areas,
  plantingStatus,
  onEdit,
  onRegisterPlanting
}: PropertyCardProps) {
  const getStatusBadge = () => {
    switch (plantingStatus) {
      case 'pending':
        return <Badge variant="secondary" className="bg-muted text-secondary">Aguardando</Badge>;
      case 'in-progress':
        return <Badge variant="secondary" className="bg-primary/20 text-primary">Em Andamento</Badge>;
      case 'completed':
        return <Badge variant="secondary" className="bg-green-500/20 text-green-400">Concluído</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="bg-card border-border hover:border-primary/30 transition-colors shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h3 className="text-foreground font-semibold">{name}</h3>
              {getStatusBadge()}
            </div>
            
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2 text-secondary">
                <User className="w-4 h-4" />
                <span>Responsável: {legalResponsible}</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <MapPin className="w-4 h-4" />
                <span>Tamanho total: {totalSize}</span>
              </div>
              {location && (
                <div className="flex items-center gap-2 text-secondary">
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit(id)}
            className="text-secondary hover:text-primary hover:bg-accent/10"
          >
            <Edit3 className="w-4 h-4 mr-2" />
            Editar propriedade
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Property Details Table */}
        <div className="bg-muted/20 rounded-lg p-4">
          <h4 className="text-foreground font-medium mb-3">Áreas da Propriedade</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border">
                <tr>
                  <th className="text-left py-2 text-secondary font-medium">Nome da área</th>
                  <th className="text-left py-2 text-secondary font-medium">Degradação</th>
                  <th className="text-left py-2 text-secondary font-medium">Declividade</th>
                  <th className="text-left py-2 text-secondary font-medium">Tipo de área</th>
                  <th className="text-left py-2 text-secondary font-medium">Tamanho da área</th>
                </tr>
              </thead>
              <tbody>
                {areas.map((area, index) => (
                  <tr key={index} className="border-b border-border/50 last:border-b-0">
                    <td className="py-2 text-foreground font-medium">{area.name}</td>
                    <td className="py-2 text-secondary">{area.degradation}</td>
                    <td className="py-2 text-secondary">{area.slope}</td>
                    <td className="py-2 text-secondary">{area.type}</td>
                    <td className="py-2 text-secondary">{area.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Planting Action */}
        <div className="flex justify-end">
          <Button
            onClick={() => onRegisterPlanting(id)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            disabled={plantingStatus === 'completed'}
          >
            <Sprout className="w-4 h-4 mr-2" />
            {plantingStatus === 'completed' ? 'Plantio Concluído' : 'Registrar Plantio'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}