import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';

interface RegisterPlantingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (plantingData: PlantingFormData) => void;
  property?: any;
}

export interface PlantingFormData {
  propertyId: string;
  plantingMethod: string;
  plantingDate: string;
  areaName: string;
  areaSize: string;
  seedlingsQuantity: string;
  seedsQuantity: string;
  speciesUsed: string;
  spacing: string;
  responsiblePerson: string;
  observations: string;
}

export function RegisterPlantingModal({ 
  isOpen, 
  onClose, 
  onSave, 
  property
}: RegisterPlantingModalProps) {
  const [formData, setFormData] = useState<PlantingFormData>({
    propertyId: '',
    plantingMethod: '',
    plantingDate: '',
    areaName: '',
    areaSize: '',
    seedlingsQuantity: '',
    seedsQuantity: '',
    speciesUsed: '',
    spacing: '',
    responsiblePerson: '',
    observations: ''
  });

  // Update propertyId when property changes
  useEffect(() => {
    if (property?.id) {
      setFormData(prev => ({
        ...prev,
        propertyId: property.id
      }));
    }
  }, [property]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (onSave) {
      onSave(formData);
    }
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      propertyId: '',
      plantingMethod: '',
      plantingDate: '',
      areaName: '',
      areaSize: '',
      seedlingsQuantity: '',
      seedsQuantity: '',
      speciesUsed: '',
      spacing: '',
      responsiblePerson: '',
      observations: ''
    });
    onClose();
  };

  const isFormValid = () => {
    return (
      formData.plantingMethod &&
      formData.plantingDate &&
      formData.areaName &&
      formData.responsiblePerson &&
      (formData.seedlingsQuantity || formData.seedsQuantity)
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-[#1A1A1A] rounded-[12px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl mx-4">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-[#1A1A1A] border-b border-[#E0E0E0] dark:border-[#333333] px-6 py-4 flex items-center justify-between rounded-t-[12px] z-10">
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A] dark:text-white">
              Registrar Plantio
            </h2>
            {property && (
              <p className="text-sm text-[#777777] dark:text-[#999999] mt-1">
                Propriedade: {property.name}
              </p>
            )}
          </div>
          <button
            onClick={handleClose}
            className="text-[#777777] hover:text-[#1A1A1A] dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Grid 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="plantingMethod" className="text-[#1A1A1A] dark:text-white mb-2">
                  Método de Plantio *
                </Label>
                <Select 
                  value={formData.plantingMethod} 
                  onValueChange={(value) => setFormData({ ...formData, plantingMethod: value })}
                >
                  <SelectTrigger className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333]">
                    <SelectValue placeholder="Selecione o método" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mudas">Plantio por Mudas</SelectItem>
                    <SelectItem value="semeadura">Semeadura Direta</SelectItem>
                    <SelectItem value="misto">Método Misto (Mudas + Sementes)</SelectItem>
                    <SelectItem value="regeneracao">Regeneração Natural Assistida</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="plantingDate" className="text-[#1A1A1A] dark:text-white mb-2">
                  Data do Plantio *
                </Label>
                <Input
                  id="plantingDate"
                  type="date"
                  value={formData.plantingDate}
                  onChange={(e) => setFormData({ ...formData, plantingDate: e.target.value })}
                  className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333]"
                />
              </div>

              <div>
                <Label htmlFor="areaName" className="text-[#1A1A1A] dark:text-white mb-2">
                  Nome da Área *
                </Label>
                <Input
                  id="areaName"
                  type="text"
                  placeholder="Ex: Área de Nascente"
                  value={formData.areaName}
                  onChange={(e) => setFormData({ ...formData, areaName: e.target.value })}
                  className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333]"
                />
              </div>

              <div>
                <Label htmlFor="areaSize" className="text-[#1A1A1A] dark:text-white mb-2">
                  Tamanho da Área (hectares)
                </Label>
                <Input
                  id="areaSize"
                  type="number"
                  step="0.01"
                  placeholder="Ex: 12.5"
                  value={formData.areaSize}
                  onChange={(e) => setFormData({ ...formData, areaSize: e.target.value })}
                  className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333]"
                />
              </div>

              <div>
                <Label htmlFor="seedlingsQuantity" className="text-[#1A1A1A] dark:text-white mb-2">
                  Quantidade de Mudas {!formData.seedsQuantity && '*'}
                </Label>
                <Input
                  id="seedlingsQuantity"
                  type="number"
                  placeholder="Ex: 1500"
                  value={formData.seedlingsQuantity}
                  onChange={(e) => setFormData({ ...formData, seedlingsQuantity: e.target.value })}
                  className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333]"
                />
              </div>

              <div>
                <Label htmlFor="seedsQuantity" className="text-[#1A1A1A] dark:text-white mb-2">
                  Quantidade de Sementes (kg) {!formData.seedlingsQuantity && '*'}
                </Label>
                <Input
                  id="seedsQuantity"
                  type="number"
                  step="0.1"
                  placeholder="Ex: 45.5"
                  value={formData.seedsQuantity}
                  onChange={(e) => setFormData({ ...formData, seedsQuantity: e.target.value })}
                  className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333]"
                />
                <p className="text-xs text-[#777777] mt-1">
                  * Preencha pelo menos um: Mudas ou Sementes
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="speciesUsed" className="text-[#1A1A1A] dark:text-white mb-2">
                  Espécies Utilizadas
                </Label>
                <Textarea
                  id="speciesUsed"
                  placeholder="Liste as principais espécies plantadas..."
                  value={formData.speciesUsed}
                  onChange={(e) => setFormData({ ...formData, speciesUsed: e.target.value })}
                  className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333] min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="spacing" className="text-[#1A1A1A] dark:text-white mb-2">
                  Espaçamento
                </Label>
                <Input
                  id="spacing"
                  type="text"
                  placeholder="Ex: 3m x 2m"
                  value={formData.spacing}
                  onChange={(e) => setFormData({ ...formData, spacing: e.target.value })}
                  className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333]"
                />
              </div>

              <div>
                <Label htmlFor="responsiblePerson" className="text-[#1A1A1A] dark:text-white mb-2">
                  Responsável Técnico *
                </Label>
                <Input
                  id="responsiblePerson"
                  type="text"
                  placeholder="Nome completo"
                  value={formData.responsiblePerson}
                  onChange={(e) => setFormData({ ...formData, responsiblePerson: e.target.value })}
                  className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333]"
                />
              </div>

              <div>
                <Label htmlFor="observations" className="text-[#1A1A1A] dark:text-white mb-2">
                  Observações
                </Label>
                <Textarea
                  id="observations"
                  placeholder="Informações adicionais sobre o plantio..."
                  value={formData.observations}
                  onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                  className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333] min-h-[140px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white dark:bg-[#1A1A1A] border-t border-[#E0E0E0] dark:border-[#333333] px-6 py-4 rounded-b-[12px] flex justify-end gap-3">
          <Button
            onClick={handleClose}
            variant="outline"
            className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333]"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            className="rounded-[12px]"
            style={{ backgroundColor: '#0F3D26', color: 'white' }}
            disabled={!isFormValid()}
          >
            Registrar Plantio
          </Button>
        </div>
      </div>
    </div>
  );
}