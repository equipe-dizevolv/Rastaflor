import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface AddPlantioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (plantio: any) => void;
  editPlantio?: any;
}

export function AddPlantioModal({ isOpen, onClose, onSave, editPlantio }: AddPlantioModalProps) {
  const [formData, setFormData] = useState({
    area: '',
    hectares: '',
    modelo: '',
    mudas: '',
    sementes: '',
    data: ''
  });

  useEffect(() => {
    if (editPlantio) {
      setFormData({
        area: editPlantio.area || '',
        hectares: editPlantio.hectares || '',
        modelo: editPlantio.modelo || '',
        mudas: editPlantio.mudas || '',
        sementes: editPlantio.sementes || '',
        data: editPlantio.data || ''
      });
    } else {
      setFormData({
        area: '',
        hectares: '',
        modelo: '',
        mudas: '',
        sementes: '',
        data: ''
      });
    }
  }, [editPlantio, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: editPlantio?.id || Date.now().toString()
    });
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      area: '',
      hectares: '',
      modelo: '',
      mudas: '',
      sementes: '',
      data: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-card rounded-[12px] shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#0F3D26] px-6 py-4 flex items-center justify-between">
          <h2 className="text-white text-lg">
            {editPlantio ? 'Editar Plantio' : 'Registrar Plantio'}
          </h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Grid de 2 colunas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Área de restauração */}
              <div className="space-y-2">
                <label className="text-sm text-secondary">
                  Área de restauração *
                </label>
                <Input
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  placeholder="Digite o nome da área"
                  className="bg-input border-border text-foreground rounded-[8px]"
                  required
                />
              </div>

              {/* Hectares plantados */}
              <div className="space-y-2">
                <label className="text-sm text-secondary">
                  Hectares plantados *
                </label>
                <Input
                  value={formData.hectares}
                  onChange={(e) => setFormData({ ...formData, hectares: e.target.value })}
                  placeholder="Ex: 777 hectares"
                  className="bg-input border-border text-foreground rounded-[8px]"
                  required
                />
              </div>

              {/* Modelo de restauração */}
              <div className="space-y-2">
                <label className="text-sm text-secondary">
                  Modelo de restauração *
                </label>
                <select
                  value={formData.modelo}
                  onChange={(e) => setFormData({ ...formData, modelo: e.target.value })}
                  className="w-full px-3 py-2 bg-input border border-border text-foreground rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Selecione o modelo</option>
                  <option value="Plantio Misto( Mudas e Sementes)">Plantio Misto (Mudas e Sementes)</option>
                  <option value="Plantio por Mudas">Plantio por Mudas</option>
                  <option value="Plantio por Sementes">Plantio por Sementes</option>
                  <option value="Regeneração Natural">Regeneração Natural</option>
                </select>
              </div>

              {/* Nº de mudas */}
              <div className="space-y-2">
                <label className="text-sm text-secondary">
                  Nº de mudas
                </label>
                <Input
                  value={formData.mudas}
                  onChange={(e) => setFormData({ ...formData, mudas: e.target.value })}
                  placeholder="Ex: 222 mudas"
                  className="bg-input border-border text-foreground rounded-[8px]"
                />
              </div>

              {/* Volume de sementes */}
              <div className="space-y-2">
                <label className="text-sm text-secondary">
                  Volume de sementes
                </label>
                <Input
                  value={formData.sementes}
                  onChange={(e) => setFormData({ ...formData, sementes: e.target.value })}
                  placeholder="Ex: 222 Kg"
                  className="bg-input border-border text-foreground rounded-[8px]"
                />
              </div>

              {/* Data do plantio */}
              <div className="space-y-2">
                <label className="text-sm text-secondary">
                  Data do plantio *
                </label>
                <Input
                  type="date"
                  value={formData.data}
                  onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                  className="bg-input border-border text-foreground rounded-[8px]"
                  required
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-border px-6 py-4 flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="rounded-[8px]"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[8px]"
            >
              {editPlantio ? 'Salvar Alterações' : 'Registrar Plantio'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
