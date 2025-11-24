import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';

interface RegisterActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (activityData: ActivityFormData) => void;
  properties?: Array<{ id: string; name: string }>;
}

export interface ActivityFormData {
  activityType: string;
  date: string;
  propertyId: string;
  areaName: string;
  description: string;
  responsiblePerson: string;
}

export function RegisterActivityModal({ isOpen, onClose, onSave, properties = [] }: RegisterActivityModalProps) {
  const [formData, setFormData] = useState<ActivityFormData>({
    activityType: '',
    date: '',
    propertyId: '',
    areaName: '',
    description: '',
    responsiblePerson: ''
  });

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (onSave) {
      onSave(formData);
    }
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      activityType: '',
      date: '',
      propertyId: '',
      areaName: '',
      description: '',
      responsiblePerson: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-[#1A1A1A] rounded-[12px] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl mx-4">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-[#1A1A1A] border-b border-[#E0E0E0] dark:border-[#333333] px-6 py-4 flex items-center justify-between rounded-t-[12px]">
          <h2 className="text-xl font-semibold text-[#1A1A1A] dark:text-white">
            Registrar Atividade
          </h2>
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
                <Label htmlFor="activityType" className="text-[#1A1A1A] dark:text-white mb-2">
                  Tipo de Atividade *
                </Label>
                <Select 
                  value={formData.activityType} 
                  onValueChange={(value) => setFormData({ ...formData, activityType: value })}
                >
                  <SelectTrigger className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333]">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plantio">Plantio de Mudas</SelectItem>
                    <SelectItem value="semeadura">Semeadura Direta</SelectItem>
                    <SelectItem value="manutencao">Manutenção</SelectItem>
                    <SelectItem value="monitoramento">Monitoramento</SelectItem>
                    <SelectItem value="controle">Controle de Invasoras</SelectItem>
                    <SelectItem value="adubacao">Adubação</SelectItem>
                    <SelectItem value="irrigacao">Irrigação</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="date" className="text-[#1A1A1A] dark:text-white mb-2">
                  Data da Atividade *
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333]"
                />
              </div>

              <div>
                <Label htmlFor="propertyId" className="text-[#1A1A1A] dark:text-white mb-2">
                  Propriedade *
                </Label>
                <Select 
                  value={formData.propertyId} 
                  onValueChange={(value) => setFormData({ ...formData, propertyId: value })}
                >
                  <SelectTrigger className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333]">
                    <SelectValue placeholder="Selecione a propriedade" />
                  </SelectTrigger>
                  <SelectContent>
                    {properties.length > 0 ? (
                      properties.map((property) => (
                        <SelectItem key={property.id} value={property.id}>
                          {property.name}
                        </SelectItem>
                      ))
                    ) : (
                      <>
                        <SelectItem value="1">Fazenda Santa Rita</SelectItem>
                        <SelectItem value="2">Sítio Água Cristalina</SelectItem>
                        <SelectItem value="3">Fazenda Boa Esperança</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="areaName" className="text-[#1A1A1A] dark:text-white mb-2">
                  Nome da Área
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
                <Label htmlFor="responsiblePerson" className="text-[#1A1A1A] dark:text-white mb-2">
                  Responsável pela Atividade *
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
                <Label htmlFor="description" className="text-[#1A1A1A] dark:text-white mb-2">
                  Descrição da Atividade
                </Label>
                <Textarea
                  id="description"
                  placeholder="Descreva os detalhes da atividade realizada..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="rounded-[12px] border-[#E0E0E0] dark:border-[#333333] min-h-[100px]"
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
            disabled={!formData.activityType || !formData.date || !formData.propertyId || !formData.responsiblePerson}
          >
            Registrar Atividade
          </Button>
        </div>
      </div>
    </div>
  );
}
