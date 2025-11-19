import { useState } from 'react';
import { Plus, Search, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface PropertiesProps {
  onPageChange: (page: string, propertyId?: string) => void;
}

export function Properties({ onPageChange }: PropertiesProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');

  const [properties, setProperties] = useState([
    {
      id: '1',
      name: 'Fazenda São José',
      location: 'Paraíba do Sul - RJ',
      totalArea: '150',
      availableArea: '80',
      owners: 2
    },
    {
      id: '2',
      name: 'Sítio Boa Vista',
      location: 'Valença - RJ',
      totalArea: '95',
      availableArea: '60',
      owners: 1
    },
    {
      id: '3',
      name: 'Fazenda Santa Maria',
      location: 'Barra do Piraí - RJ',
      totalArea: '200',
      availableArea: '120',
      owners: 3
    }
  ]);

  return (
    <div className="p-6 space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 max-w-md relative">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`} />
          <Input
            placeholder="Buscar propriedades..."
            className={`pl-10 rounded-[12px] ${
              isDarkMode 
                ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white placeholder:text-gray-500' 
                : 'bg-white border-[#E0E0E0] text-[#1A1A1A]'
            }`}
          />
        </div>
        <Button 
          onClick={() => onPageChange('add-property')}
          className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[12px]"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nova Propriedade
        </Button>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <div
            key={property.id}
            onClick={() => onPageChange('property-details', property.id)}
            className={`p-6 rounded-[12px] cursor-pointer transition-all hover:shadow-md ${
              isDarkMode 
                ? 'bg-[#2A2A2A] hover:bg-[#2A2A2A]/80' 
                : 'bg-white border border-[#E0E0E0] hover:border-[#0F3D26]'
            }`}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-[#0F3D26] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  {property.name}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {property.location}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Área Total
                </span>
                <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  {property.totalArea} ha
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Área Disponível
                </span>
                <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  {property.availableArea} ha
                </span>
              </div>
              <div className={`flex justify-between items-center pt-2 border-t ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Proprietários
                </span>
                <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  {property.owners}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
