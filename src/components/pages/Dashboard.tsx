import { useState } from 'react';
import { Plus, Search, Edit } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { EditPropertyModal } from '../properties/EditPropertyModal';

interface DashboardProps {
  onPageChange: (page: string) => void;
}

export function Dashboard({ onPageChange }: DashboardProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const [isEditPropertyModalOpen, setIsEditPropertyModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const kpiData = [
    { title: 'Hectares Plantados (Total)', value: '87', unit: 'Ha' },
    { title: 'Mudas Plantadas (Total)', value: '32', unit: 'unidades' },
    { title: 'Quilos de sementes plantados (Total)', value: '3', unit: 'Kg' }
  ];

  const projects = [
    {
      id: '1',
      title: 'Projeto Renascer',
      createdDate: '18/03/2023',
      stage: 'Mobilização'
    },
    {
      id: '2',
      title: 'Projeto Renascer',
      createdDate: '18/03/2023',
      stage: 'Mobilização'
    },
    {
      id: '3',
      title: 'Projeto Renascer',
      createdDate: '18/03/2023',
      stage: 'Mobilização'
    },
    {
      id: '4',
      title: 'Projeto Renascer',
      createdDate: '18/03/2023',
      stage: 'Mobilização'
    }
  ];

  const properties = [
    {
      id: '1',
      name: 'Fazenda Santa Rita',
      responsible: 'João Silva Santos',
      totalSize: '85.5 Hectares',
      location: 'Zona Rural: Aibiaia - SP',
      areas: [
        { name: 'Área do Nascente', degradation: 'Alta', slope: '15-25%', type: 'APP', size: '12.3 ha' },
        { name: 'Área da Encosta', degradation: 'Média', slope: '5-15%', type: 'Reserva Legal', size: '26.7 ha' },
        { name: 'Área de Várzea', degradation: 'Baixa', slope: '0-5%', type: 'APP', size: '44.5 ha' }
      ]
    },
    {
      id: '2',
      name: 'Fazenda Santa Rita',
      responsible: 'João Silva Santos',
      totalSize: '85.5 Hectares',
      location: 'Zona Rural: Aibiaia - SP',
      areas: [
        { name: 'Área do Nascente', degradation: 'Alta', slope: '15-25%', type: 'APP', size: '12.3 ha' },
        { name: 'Área da Encosta', degradation: 'Média', slope: '5-15%', type: 'Reserva Legal', size: '26.7 ha' },
        { name: 'Área de Várzea', degradation: 'Baixa', slope: '0-5%', type: 'APP', size: '44.5 ha' }
      ]
    },
    {
      id: '3',
      name: 'Fazenda Santa Rita',
      responsible: 'João Silva Santos',
      totalSize: '85.5 Hectares',
      location: 'Zona Rural: Aibiaia - SP',
      areas: [
        { name: 'Área do Nascente', degradation: 'Alta', slope: '15-25%', type: 'APP', size: '12.3 ha' },
        { name: 'Área da Encosta', degradation: 'Média', slope: '5-15%', type: 'Reserva Legal', size: '26.7 ha' },
        { name: 'Área de Várzea', degradation: 'Baixa', slope: '0-5%', type: 'APP', size: '44.5 ha' }
      ]
    }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {kpiData.map((kpi, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-[12px] p-6 shadow-sm"
          >
            <p className="text-sm text-secondary mb-4">
              {kpi.title}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl text-card-foreground">
                {kpi.value}
              </span>
              <span className="text-sm text-secondary">
                {kpi.unit}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-xl text-foreground">
            Seus Projetos
          </h2>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px]"
            onClick={() => onPageChange('projects')}
          >
            Ver todos os projetos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-[12px] overflow-hidden shadow-sm"
            >
              {/* Project Image */}
              <div className="w-full h-[180px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1760624683181-7570791efd52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZvcmVzdGF0aW9uJTIwbmF0dXJlJTIwZ3JlZW58ZW58MXx8fHwxNzYyNTI2MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-xs text-secondary mb-4">
                  Criado em {project.createdDate}
                </p>
                <div className="space-y-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${ 
                    isDarkMode 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-[#E7F3E7] text-primary'
                  }`}>
                    ETAPA: {project.stage}
                  </span>
                  <Button
                    variant="outline"
                    className="w-full rounded-[12px] border-border hover:bg-muted"
                    onClick={() => onPageChange('project-details')}
                  >
                    Gerenciar Projeto
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Property Bank Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-xl text-foreground">
            Banco de Áreas
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary" />
          <Input
            placeholder="Buscar uma área..."
            className="pl-10 bg-input border-border text-foreground placeholder:text-secondary rounded-[12px]"
          />
        </div>

        {/* Property Cards */}
        <div className="space-y-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-card border border-border rounded-[12px] p-6 shadow-sm"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl text-card-foreground">
                    {property.name}
                  </h3>
                  <div className="space-y-1 text-sm text-secondary">
                    <p>👤 Responsável: {property.responsible}</p>
                    <p>📏 Tamanho total: {property.totalSize}</p>
                    <p>📍 {property.location}</p>
                  </div>
                </div>
                {/* Removed edit button as requested */}
              </div>

              <div className="mt-4">
                <h4 className="text-card-foreground">
                  Áreas da Propriedade
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-3 text-sm text-secondary">
                          Nome da área
                        </th>
                        <th className="text-left py-2 px-3 text-sm text-secondary">
                          Degradação
                        </th>
                        <th className="text-left py-2 px-3 text-sm text-secondary">
                          Tipo de área
                        </th>
                        <th className="text-left py-2 px-3 text-sm text-secondary">
                          Área para restauração
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {property.areas.map((area, idx) => (
                        <tr 
                          key={idx}
                          className="border-b border-border"
                        >
                          <td className="py-3 px-3 text-sm text-card-foreground">
                            {area.name}
                          </td>
                          <td className="py-3 px-3 text-sm text-card-foreground">
                            {area.degradation}
                          </td>
                          <td className="py-3 px-3 text-sm text-card-foreground">
                            {area.type}
                          </td>
                          <td className="py-3 px-3 text-sm text-card-foreground">
                            {area.size}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Property Modal */}
      <EditPropertyModal
        isOpen={isEditPropertyModalOpen}
        onClose={() => setIsEditPropertyModalOpen(false)}
        property={selectedProperty}
      />
    </div>
  );
}