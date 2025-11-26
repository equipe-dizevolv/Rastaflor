import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export interface AreaFormData {
  name: string;
  distanceFromFragment: string;
  areaType: string;
  terrainType: string;
  size: string;
  slope: string;
  soilDepth: string;
  degradation: string;
  compaction: string;
  invasiveSpecies: string;
  antsTermites: string;
  altitude: string;
  terrainFace: string;
  latitude: string;
  longitude: string;
}

interface AddAreaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: AreaFormData) => void;
  propertyName: string;
  editingArea?: AreaFormData | null;
}

export function AddAreaModal({ isOpen, onClose, onSave, propertyName, editingArea = null }: AddAreaModalProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');

  const [formData, setFormData] = useState<AreaFormData>(editingArea || {
    name: '',
    distanceFromFragment: '',
    areaType: '',
    terrainType: '',
    size: '',
    slope: '',
    soilDepth: '',
    degradation: '',
    compaction: '',
    invasiveSpecies: '',
    antsTermites: '',
    altitude: '',
    terrainFace: '',
    latitude: '',
    longitude: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      name: '',
      distanceFromFragment: '',
      areaType: '',
      terrainType: '',
      size: '',
      slope: '',
      soilDepth: '',
      degradation: '',
      compaction: '',
      invasiveSpecies: '',
      antsTermites: '',
      altitude: '',
      terrainFace: '',
      latitude: '',
      longitude: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div 
        className={`w-full max-w-4xl max-h-[90vh] rounded-[12px] overflow-hidden ${
          isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white'
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b ${
          isDarkMode ? 'border-[#3A3A3A]' : 'border-[#E0E0E0]'
        }`}>
          <div>
            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              Adicionar Área de Restauração
            </h2>
            <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {propertyName}
            </p>
          </div>
          <button
            onClick={handleClose}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode ? 'hover:bg-[#3A3A3A]' : 'hover:bg-gray-100'
            }`}
          >
            <X className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="p-6 space-y-6">
            {/* Grid de duas colunas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nome da área */}
              <div className="space-y-2">
                <Label htmlFor="name" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Nome da área *
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Área Norte"
                  className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}
                />
              </div>

              {/* Distância do fragmento florestal */}
              <div className="space-y-2">
                <Label htmlFor="distanceFromFragment" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Distância do fragmento florestal (metros)
                </Label>
                <Input
                  id="distanceFromFragment"
                  type="number"
                  value={formData.distanceFromFragment}
                  onChange={(e) => setFormData({ ...formData, distanceFromFragment: e.target.value })}
                  placeholder="Ex: 500"
                  className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}
                />
              </div>

              {/* Tipo de Área */}
              <div className="space-y-2">
                <Label htmlFor="areaType" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Tipo de Área *
                </Label>
                <Select
                  value={formData.areaType}
                  onValueChange={(value) => setFormData({ ...formData, areaType: value })}
                  required
                >
                  <SelectTrigger className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent className={isDarkMode ? 'bg-[#2A2A2A] border-[#3A3A3A]' : 'bg-white'}>
                    <SelectItem value="APP">APP (Área de Preservação Permanente)</SelectItem>
                    <SelectItem value="RL">RL (Reserva Legal)</SelectItem>
                    <SelectItem value="Compensação">Compensação Ambiental</SelectItem>
                    <SelectItem value="Restauração Voluntária">Restauração Voluntária</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tipo de terreno */}
              <div className="space-y-2">
                <Label htmlFor="terrainType" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Tipo de terreno
                </Label>
                <Select
                  value={formData.terrainType}
                  onValueChange={(value) => setFormData({ ...formData, terrainType: value })}
                >
                  <SelectTrigger className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent className={isDarkMode ? 'bg-[#2A2A2A] border-[#3A3A3A]' : 'bg-white'}>
                    <SelectItem value="Plano">Plano</SelectItem>
                    <SelectItem value="Ondulado">Ondulado</SelectItem>
                    <SelectItem value="Montanhoso">Montanhoso</SelectItem>
                    <SelectItem value="Escarpado">Escarpado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tamanho da área */}
              <div className="space-y-2">
                <Label htmlFor="size" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Tamanho da área (hectares) *
                </Label>
                <Input
                  id="size"
                  type="number"
                  step="0.01"
                  required
                  value={formData.size}
                  onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  placeholder="Ex: 25.5"
                  className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}
                />
              </div>

              {/* Declividade */}
              <div className="space-y-2">
                <Label htmlFor="slope" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Declividade (%)
                </Label>
                <Input
                  id="slope"
                  type="number"
                  step="0.1"
                  value={formData.slope}
                  onChange={(e) => setFormData({ ...formData, slope: e.target.value })}
                  placeholder="Ex: 15.5"
                  className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}
                />
              </div>

              {/* Profundidade do solo */}
              <div className="space-y-2">
                <Label htmlFor="soilDepth" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Profundidade do solo
                </Label>
                <Select
                  value={formData.soilDepth}
                  onValueChange={(value) => setFormData({ ...formData, soilDepth: value })}
                >
                  <SelectTrigger className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent className={isDarkMode ? 'bg-[#2A2A2A] border-[#3A3A3A]' : 'bg-white'}>
                    <SelectItem value="Raso">Raso (0-50cm)</SelectItem>
                    <SelectItem value="Médio">Médio (50-100cm)</SelectItem>
                    <SelectItem value="Profundo">Profundo (&gt;100cm)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Degradação */}
              <div className="space-y-2">
                <Label htmlFor="degradation" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Degradação
                </Label>
                <Select
                  value={formData.degradation}
                  onValueChange={(value) => setFormData({ ...formData, degradation: value })}
                >
                  <SelectTrigger className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}>
                    <SelectValue placeholder="Selecione o nível" />
                  </SelectTrigger>
                  <SelectContent className={isDarkMode ? 'bg-[#2A2A2A] border-[#3A3A3A]' : 'bg-white'}>
                    <SelectItem value="Baixa">Baixa</SelectItem>
                    <SelectItem value="Média">Média</SelectItem>
                    <SelectItem value="Alta">Alta</SelectItem>
                    <SelectItem value="Muito Alta">Muito Alta</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Compactação */}
              <div className="space-y-2">
                <Label htmlFor="compaction" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Compactação
                </Label>
                <Select
                  value={formData.compaction}
                  onValueChange={(value) => setFormData({ ...formData, compaction: value })}
                >
                  <SelectTrigger className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}>
                    <SelectValue placeholder="Selecione o nível" />
                  </SelectTrigger>
                  <SelectContent className={isDarkMode ? 'bg-[#2A2A2A] border-[#3A3A3A]' : 'bg-white'}>
                    <SelectItem value="Baixa">Baixa</SelectItem>
                    <SelectItem value="Média">Média</SelectItem>
                    <SelectItem value="Alta">Alta</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Presença de espécies exóticas e invasoras */}
              <div className="space-y-2">
                <Label htmlFor="invasiveSpecies" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Presença de espécies exóticas e invasoras
                </Label>
                <Select
                  value={formData.invasiveSpecies}
                  onValueChange={(value) => setFormData({ ...formData, invasiveSpecies: value })}
                >
                  <SelectTrigger className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent className={isDarkMode ? 'bg-[#2A2A2A] border-[#3A3A3A]' : 'bg-white'}>
                    <SelectItem value="Ausente">Ausente</SelectItem>
                    <SelectItem value="Baixa">Baixa</SelectItem>
                    <SelectItem value="Média">Média</SelectItem>
                    <SelectItem value="Alta">Alta</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Presença de formigas e cupins */}
              <div className="space-y-2">
                <Label htmlFor="antsTermites" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Presença de formigas e cupins
                </Label>
                <Select
                  value={formData.antsTermites}
                  onValueChange={(value) => setFormData({ ...formData, antsTermites: value })}
                >
                  <SelectTrigger className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent className={isDarkMode ? 'bg-[#2A2A2A] border-[#3A3A3A]' : 'bg-white'}>
                    <SelectItem value="Ausente">Ausente</SelectItem>
                    <SelectItem value="Baixa">Baixa</SelectItem>
                    <SelectItem value="Média">Média</SelectItem>
                    <SelectItem value="Alta">Alta</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Altitude */}
              <div className="space-y-2">
                <Label htmlFor="altitude" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Altitude (metros)
                </Label>
                <Input
                  id="altitude"
                  type="number"
                  value={formData.altitude}
                  onChange={(e) => setFormData({ ...formData, altitude: e.target.value })}
                  placeholder="Ex: 450"
                  className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}
                />
              </div>

              {/* Face do terreno */}
              <div className="space-y-2">
                <Label htmlFor="terrainFace" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Face do terreno
                </Label>
                <Select
                  value={formData.terrainFace}
                  onValueChange={(value) => setFormData({ ...formData, terrainFace: value })}
                >
                  <SelectTrigger className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent className={isDarkMode ? 'bg-[#2A2A2A] border-[#3A3A3A]' : 'bg-white'}>
                    <SelectItem value="Norte">Norte</SelectItem>
                    <SelectItem value="Sul">Sul</SelectItem>
                    <SelectItem value="Leste">Leste</SelectItem>
                    <SelectItem value="Oeste">Oeste</SelectItem>
                    <SelectItem value="Nordeste">Nordeste</SelectItem>
                    <SelectItem value="Noroeste">Noroeste</SelectItem>
                    <SelectItem value="Sudeste">Sudeste</SelectItem>
                    <SelectItem value="Sudoeste">Sudoeste</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Latitude */}
              <div className="space-y-2">
                <Label htmlFor="latitude" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Latitude
                </Label>
                <Input
                  id="latitude"
                  value={formData.latitude}
                  onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                  placeholder="Ex: -22.1234"
                  className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}
                />
              </div>

              {/* Longitude */}
              <div className="space-y-2">
                <Label htmlFor="longitude" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  Longitude
                </Label>
                <Input
                  id="longitude"
                  value={formData.longitude}
                  onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                  placeholder="Ex: -43.5678"
                  className={`rounded-[12px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={`flex justify-end gap-3 p-6 border-t ${
            isDarkMode ? 'border-[#3A3A3A]' : 'border-[#E0E0E0]'
          }`}>
            <Button
              type="button"
              onClick={handleClose}
              variant="outline"
              className={`rounded-[12px] ${
                isDarkMode 
                  ? 'border-[#3A3A3A] text-white hover:bg-[#3A3A3A]' 
                  : 'border-[#E0E0E0] hover:bg-gray-50'
              }`}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[12px]"
            >
              Salvar Área
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}