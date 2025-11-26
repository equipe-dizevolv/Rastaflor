import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface AddSpeciesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: any) => void;
}

export function AddSpeciesModal({ isOpen, onClose, onSave }: AddSpeciesModalProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  const [formData, setFormData] = useState({
    nomeCientifico: '',
    nomePopular: '',
    familia: '',
    grupoEcologico: '',
    sindromeDispersao: '',
    origem: '',
    ocorrencia: '',
    bioma: '',
    altura: '',
    dap: '',
    formaVida: '',
    tipoFolha: '',
    floracao: '',
    frutificacao: '',
    observacoes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSave) {
      onSave(formData);
    }
    // Reset form
    setFormData({
      nomeCientifico: '',
      nomePopular: '',
      familia: '',
      grupoEcologico: '',
      sindromeDispersao: '',
      origem: '',
      ocorrencia: '',
      bioma: '',
      altura: '',
      dap: '',
      formaVida: '',
      tipoFolha: '',
      floracao: '',
      frutificacao: '',
      observacoes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div 
        className={`w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[12px] shadow-xl ${
          isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white'
        }`}
      >
        {/* Header Verde Escuro */}
        <div className="bg-[#0F3D26] p-6 flex items-center justify-between">
          <h2 className="text-white text-xl">Adicionar Nova Espécie</h2>
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
                      Nome Científico *
                    </label>
                    <Input
                      value={formData.nomeCientifico}
                      onChange={(e) => setFormData({ ...formData, nomeCientifico: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="Ex: Handroanthus impetiginosus"
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Nome Popular *
                    </label>
                    <Input
                      value={formData.nomePopular}
                      onChange={(e) => setFormData({ ...formData, nomePopular: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="Ex: Ipê-roxo"
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Família *
                    </label>
                    <Input
                      value={formData.familia}
                      onChange={(e) => setFormData({ ...formData, familia: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="Ex: Bignoniaceae"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Características Ecológicas */}
              <div>
                <h3 className={`text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  Características Ecológicas
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Grupo Ecológico *
                    </label>
                    <select
                      value={formData.grupoEcologico}
                      onChange={(e) => setFormData({ ...formData, grupoEcologico: e.target.value })}
                      className={`w-full rounded-[8px] px-3 py-2 border ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      required
                    >
                      <option value="">Selecione...</option>
                      <option value="pioneira">Pioneira</option>
                      <option value="secundaria-inicial">Secundária Inicial</option>
                      <option value="secundaria-tardia">Secundária Tardia</option>
                      <option value="climax">Clímax</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Síndrome de Dispersão *
                    </label>
                    <select
                      value={formData.sindromeDispersao}
                      onChange={(e) => setFormData({ ...formData, sindromeDispersao: e.target.value })}
                      className={`w-full rounded-[8px] px-3 py-2 border ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      required
                    >
                      <option value="">Selecione...</option>
                      <option value="zoocoria">Zoocórica (animais)</option>
                      <option value="anemocoria">Anemocórica (vento)</option>
                      <option value="autocoria">Autocórica (gravidade/explosão)</option>
                      <option value="hidrocoria">Hidrocórica (água)</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Origem *
                    </label>
                    <select
                      value={formData.origem}
                      onChange={(e) => setFormData({ ...formData, origem: e.target.value })}
                      className={`w-full rounded-[8px] px-3 py-2 border ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      required
                    >
                      <option value="">Selecione...</option>
                      <option value="nativa">Nativa</option>
                      <option value="exotica">Exótica</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Ocorrência Natural
                    </label>
                    <Input
                      value={formData.ocorrencia}
                      onChange={(e) => setFormData({ ...formData, ocorrencia: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="Ex: Mata Atlântica, Cerrado"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Bioma
                    </label>
                    <select
                      value={formData.bioma}
                      onChange={(e) => setFormData({ ...formData, bioma: e.target.value })}
                      className={`w-full rounded-[8px] px-3 py-2 border ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                    >
                      <option value="">Selecione...</option>
                      <option value="mata-atlantica">Mata Atlântica</option>
                      <option value="cerrado">Cerrado</option>
                      <option value="amazonia">Amazônia</option>
                      <option value="caatinga">Caatinga</option>
                      <option value="pampa">Pampa</option>
                      <option value="pantanal">Pantanal</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Características Morfológicas */}
              <div>
                <h3 className={`text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  Características Morfológicas
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Altura Média (metros)
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
                      placeholder="Ex: 15.5"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      DAP Médio (cm)
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
                      placeholder="Ex: 40.5"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Forma de Vida
                    </label>
                    <select
                      value={formData.formaVida}
                      onChange={(e) => setFormData({ ...formData, formaVida: e.target.value })}
                      className={`w-full rounded-[8px] px-3 py-2 border ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                    >
                      <option value="">Selecione...</option>
                      <option value="arvore">Árvore</option>
                      <option value="arbusto">Arbusto</option>
                      <option value="herbaceo">Herbáceo</option>
                      <option value="liana">Liana/Trepadeira</option>
                      <option value="palmeira">Palmeira</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Tipo de Folha
                    </label>
                    <select
                      value={formData.tipoFolha}
                      onChange={(e) => setFormData({ ...formData, tipoFolha: e.target.value })}
                      className={`w-full rounded-[8px] px-3 py-2 border ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                    >
                      <option value="">Selecione...</option>
                      <option value="perene">Perene/Sempre-verde</option>
                      <option value="decidua">Decídua</option>
                      <option value="semi-decidua">Semi-decídua</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Fenologia */}
              <div>
                <h3 className={`text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  Fenologia
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Período de Floração
                    </label>
                    <Input
                      value={formData.floracao}
                      onChange={(e) => setFormData({ ...formData, floracao: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="Ex: Agosto a Outubro"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Período de Frutificação
                    </label>
                    <Input
                      value={formData.frutificacao}
                      onChange={(e) => setFormData({ ...formData, frutificacao: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="Ex: Novembro a Janeiro"
                    />
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
                  placeholder="Informações adicionais sobre a espécie..."
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
              Salvar Espécie
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
