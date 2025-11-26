import { useState } from 'react';
import { X, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface AddMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: any) => void;
  category?: 'florescendo' | 'frutificando' | 'coletadas';
}

export function AddMatrixModal({ isOpen, onClose, onSave, category = 'florescendo' }: AddMatrixModalProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  const [formData, setFormData] = useState({
    especieId: '',
    codigo: '',
    latitude: '',
    longitude: '',
    altitude: '',
    dap: '',
    altura: '',
    estadoFenologico: category,
    observacoes: '',
    dataIdentificacao: new Date().toISOString().split('T')[0]
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSave) {
      onSave(formData);
    }
    // Reset form
    setFormData({
      especieId: '',
      codigo: '',
      latitude: '',
      longitude: '',
      altitude: '',
      dap: '',
      altura: '',
      estadoFenologico: category,
      observacoes: '',
      dataIdentificacao: new Date().toISOString().split('T')[0]
    });
    onClose();
  };

  const getCategoryTitle = () => {
    switch(category) {
      case 'florescendo': return 'Florescendo';
      case 'frutificando': return 'Frutificando';
      case 'coletadas': return 'Coletadas';
      default: return 'Nova';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div 
        className={`w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-[12px] shadow-xl ${
          isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white'
        }`}
      >
        {/* Header Verde Escuro */}
        <div className="bg-[#0F3D26] p-6 flex items-center justify-between">
          <h2 className="text-white text-xl">Adicionar Matriz - {getCategoryTitle()}</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/10 rounded-lg p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="flex flex-col" style={{ height: 'calc(90vh - 180px)' }}>
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              {/* Identificação */}
              <div>
                <h3 className={`text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  Identificação
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Espécie *
                    </label>
                    <select
                      value={formData.especieId}
                      onChange={(e) => setFormData({ ...formData, especieId: e.target.value })}
                      className={`w-full rounded-[8px] px-3 py-2 border ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      required
                    >
                      <option value="">Selecione a espécie...</option>
                      <option value="1">Ipê-amarelo (Handroanthus chrysotrichus)</option>
                      <option value="2">Peroba-rosa (Aspidosperma polyneuron)</option>
                      <option value="3">Pau-marfim (Balfourodendron riedelianum)</option>
                      <option value="4">Jequitibá-rosa (Cariniana legalis)</option>
                      <option value="5">Aroeira-pimenteira (Schinus terebinthifolius)</option>
                      <option value="6">Cedro (Cedrela fissilis)</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Código da Matriz *
                    </label>
                    <Input
                      value={formData.codigo}
                      onChange={(e) => setFormData({ ...formData, codigo: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="Ex: IPE-00001-F24"
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Data de Identificação *
                    </label>
                    <Input
                      type="date"
                      value={formData.dataIdentificacao}
                      onChange={(e) => setFormData({ ...formData, dataIdentificacao: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Localização GPS */}
              <div>
                <h3 className={`text-lg mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  <MapPin className="w-5 h-5 text-green-600" />
                  Coordenadas GPS
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Latitude *
                    </label>
                    <Input
                      value={formData.latitude}
                      onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="Ex: -23.7535"
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Longitude *
                    </label>
                    <Input
                      value={formData.longitude}
                      onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="Ex: -46.6417"
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Altitude (metros)
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      value={formData.altitude}
                      onChange={(e) => setFormData({ ...formData, altitude: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="Ex: 750.5"
                    />
                  </div>
                </div>
              </div>

              {/* Características da Árvore */}
              <div>
                <h3 className={`text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  Características da Árvore
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      DAP - Diâmetro à Altura do Peito (cm)
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      value={formData.dap}
                      onChange={(e) => setFormData({ ...formData, dap: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="Ex: 45.5"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Altura Estimada (metros)
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      value={formData.altura}
                      onChange={(e) => setFormData({ ...formData, altura: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="Ex: 12.5"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Estado Fenológico *
                    </label>
                    <select
                      value={formData.estadoFenologico}
                      onChange={(e) => setFormData({ ...formData, estadoFenologico: e.target.value })}
                      className={`w-full rounded-[8px] px-3 py-2 border ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      required
                    >
                      <option value="florescendo">Florescendo</option>
                      <option value="frutificando">Frutificando</option>
                      <option value="coletadas">Coletadas</option>
                      <option value="vegetativo">Vegetativo</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Observações */}
              <div>
                <label className={`block text-sm mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Observações
                </label>
                <textarea
                  value={formData.observacoes}
                  onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                  className={`w-full rounded-[8px] px-3 py-2 border min-h-[100px] ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}
                  placeholder="Informações adicionais sobre a matriz, condições de saúde, acesso, etc."
                />
              </div>
            </div>
          </div>

          {/* Footer com Botões */}
          <div className={`px-6 py-4 border-t flex justify-end gap-3 ${
            isDarkMode ? 'border-[#3A3A3A] bg-[#2A2A2A]' : 'border-[#E0E0E0] bg-gray-50'
          }`}>
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className={`rounded-[8px] ${
                isDarkMode 
                  ? 'border-[#3A3A3A] text-gray-300 hover:bg-[#1A1A1A]' 
                  : 'border-[#E0E0E0] hover:bg-gray-100'
              }`}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[8px]"
            >
              Salvar Matriz
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
