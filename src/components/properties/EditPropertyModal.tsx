import { useState } from 'react';
import { X, Upload, QrCode } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface EditPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property?: any;
  onSave?: (data: any) => void;
}

type TabType = 'dados-gerais' | 'propriedades' | 'car' | 'documentos' | 'qr-code';

export function EditPropertyModal({ isOpen, onClose, property, onSave }: EditPropertyModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('dados-gerais');
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  const [formData, setFormData] = useState({
    // Dados Gerais - preenche com dados da propriedade se existir
    nomePropriedade: property?.name || 'Fazenda São José',
    responsavelLegal: property?.owners?.[0]?.name || 'João da Silva',
    cpf: property?.owners?.[0]?.cpf || '123.456.789-00',
    telefone: property?.owners?.[0]?.phone || '(24) 99999-9999',
    email: property?.owners?.[0]?.email || 'joao@email.com',
    cep: property?.cep || '27600-000',
    endereco: property?.address || 'Estrada Rural, KM 10',
    numero: property?.number || 'S/N',
    complemento: property?.complement || '',
    bairro: property?.district || 'Zona Rural',
    cidade: property?.city || 'Valença',
    estado: property?.state || 'RJ',
    
    // CAR
    numeroCAR: property?.carNumber || 'RJ-1234567-ABCD1234',
    dataEmissao: '2023-01-15',
    orgaoEmissor: 'INEA',
    
    // Áreas - usa as áreas de restauração se existirem
    areas: property?.restorationAreas?.map((area: any) => ({
      nome: area.name || 'Área 1',
      tamanho: area.areaSize?.toString() || '50',
      tipo: area.areaType || 'APP',
      degradacao: area.degradation || 'Alta',
      declividade: area.slope ? `${area.slope}°` : 'Média'
    })) || [
      {
        nome: 'Área 1',
        tamanho: '50',
        tipo: 'APP',
        degradacao: 'Alta',
        declividade: 'Média'
      }
    ]
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSave) {
      onSave(formData);
    }
    onClose();
  };

  const tabs = [
    { id: 'dados-gerais', label: 'Dados Gerais' },
    { id: 'propriedades', label: 'Propriedade(s)' },
    { id: 'car', label: 'CAR' },
    { id: 'documentos', label: 'Documentos' },
    { id: 'qr-code', label: 'QR Code' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div 
        className={`w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[12px] shadow-xl ${
          isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white'
        }`}
      >
        {/* Header Verde Escuro */}
        <div className="bg-[#0F3D26] p-6 flex items-center justify-between">
          <h2 className="text-white text-xl">Editar Propriedade</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/10 rounded-lg p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className={`flex gap-2 px-6 pt-6 border-b ${
          isDarkMode ? 'border-[#3A3A3A]' : 'border-[#E0E0E0]'
        }`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`px-4 py-2 text-sm transition-colors relative ${
                activeTab === tab.id
                  ? `${isDarkMode ? 'text-white' : 'text-[#0F3D26]'}`
                  : `${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F3D26]" />
              )}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="flex flex-col" style={{ height: 'calc(90vh - 180px)' }}>
          <div className="flex-1 overflow-y-auto p-6">
            {/* Dados Gerais Tab */}
            {activeTab === 'dados-gerais' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* Nome da Propriedade */}
                  <div className="col-span-2">
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Nome da Propriedade *
                    </label>
                    <Input
                      value={formData.nomePropriedade}
                      onChange={(e) => setFormData({ ...formData, nomePropriedade: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      required
                    />
                  </div>

                  {/* Responsável Legal */}
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Responsável Legal *
                    </label>
                    <Input
                      value={formData.responsavelLegal}
                      onChange={(e) => setFormData({ ...formData, responsavelLegal: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      required
                    />
                  </div>

                  {/* CPF */}
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      CPF *
                    </label>
                    <Input
                      value={formData.cpf}
                      onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="000.000.000-00"
                      required
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Telefone *
                    </label>
                    <Input
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      required
                    />
                  </div>

                  {/* CEP */}
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      CEP *
                    </label>
                    <Input
                      value={formData.cep}
                      onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      placeholder="00000-000"
                      required
                    />
                  </div>

                  {/* Endereço */}
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Endereço *
                    </label>
                    <Input
                      value={formData.endereco}
                      onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      required
                    />
                  </div>

                  {/* Número */}
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Número
                    </label>
                    <Input
                      value={formData.numero}
                      onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                    />
                  </div>

                  {/* Complemento */}
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Complemento
                    </label>
                    <Input
                      value={formData.complemento}
                      onChange={(e) => setFormData({ ...formData, complemento: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                    />
                  </div>

                  {/* Bairro */}
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Bairro *
                    </label>
                    <Input
                      value={formData.bairro}
                      onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      required
                    />
                  </div>

                  {/* Cidade */}
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Cidade *
                    </label>
                    <Input
                      value={formData.cidade}
                      onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      required
                    />
                  </div>

                  {/* Estado */}
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Estado *
                    </label>
                    <select
                      value={formData.estado}
                      onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                      className={`w-full rounded-[8px] px-3 py-2 border ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                      required
                    >
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="SP">São Paulo</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="ES">Espírito Santo</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Propriedades Tab */}
            {activeTab === 'propriedades' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-lg ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    Áreas da Propriedade
                  </h3>
                  <Button
                    type="button"
                    className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[8px]"
                  >
                    + Adicionar Área
                  </Button>
                </div>

                {formData.areas.map((area, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-[8px] border ${
                      isDarkMode ? 'border-[#3A3A3A] bg-[#1A1A1A]' : 'border-[#E0E0E0] bg-gray-50'
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-sm mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Nome da Área *
                        </label>
                        <Input
                          value={area.nome}
                          className={`rounded-[8px] ${
                            isDarkMode 
                              ? 'bg-[#2A2A2A] border-[#3A3A3A] text-white' 
                              : 'bg-white border-[#E0E0E0]'
                          }`}
                        />
                      </div>

                      <div>
                        <label className={`block text-sm mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Tamanho (ha) *
                        </label>
                        <Input
                          value={area.tamanho}
                          className={`rounded-[8px] ${
                            isDarkMode 
                              ? 'bg-[#2A2A2A] border-[#3A3A3A] text-white' 
                              : 'bg-white border-[#E0E0E0]'
                          }`}
                        />
                      </div>

                      <div>
                        <label className={`block text-sm mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Tipo de Área *
                        </label>
                        <select
                          value={area.tipo}
                          className={`w-full rounded-[8px] px-3 py-2 border ${
                            isDarkMode 
                              ? 'bg-[#2A2A2A] border-[#3A3A3A] text-white' 
                              : 'bg-white border-[#E0E0E0]'
                          }`}
                        >
                          <option>APP</option>
                          <option>Reserva Legal</option>
                          <option>Área Produtiva</option>
                        </select>
                      </div>

                      <div>
                        <label className={`block text-sm mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Degradação *
                        </label>
                        <select
                          value={area.degradacao}
                          className={`w-full rounded-[8px] px-3 py-2 border ${
                            isDarkMode 
                              ? 'bg-[#2A2A2A] border-[#3A3A3A] text-white' 
                              : 'bg-white border-[#E0E0E0]'
                          }`}
                        >
                          <option>Alta</option>
                          <option>Média</option>
                          <option>Baixa</option>
                        </select>
                      </div>

                      <div>
                        <label className={`block text-sm mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Declividade *
                        </label>
                        <select
                          value={area.declividade}
                          className={`w-full rounded-[8px] px-3 py-2 border ${
                            isDarkMode 
                              ? 'bg-[#2A2A2A] border-[#3A3A3A] text-white' 
                              : 'bg-white border-[#E0E0E0]'
                          }`}
                        >
                          <option>Alta</option>
                          <option>Média</option>
                          <option>Baixa</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CAR Tab */}
            {activeTab === 'car' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Número do CAR *
                    </label>
                    <Input
                      value={formData.numeroCAR}
                      onChange={(e) => setFormData({ ...formData, numeroCAR: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Data de Emissão *
                    </label>
                    <Input
                      type="date"
                      value={formData.dataEmissao}
                      onChange={(e) => setFormData({ ...formData, dataEmissao: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Órgão Emissor *
                    </label>
                    <Input
                      value={formData.orgaoEmissor}
                      onChange={(e) => setFormData({ ...formData, orgaoEmissor: e.target.value })}
                      className={`rounded-[8px] ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#3A3A3A] text-white' 
                          : 'bg-white border-[#E0E0E0]'
                      }`}
                    />
                  </div>

                  <div className="col-span-2">
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Documento CAR (PDF)
                    </label>
                    <div className={`border-2 border-dashed rounded-[8px] p-8 text-center ${
                      isDarkMode ? 'border-[#3A3A3A]' : 'border-[#E0E0E0]'
                    }`}>
                      <Upload className={`w-8 h-8 mx-auto mb-2 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Clique para fazer upload ou arraste o arquivo aqui
                      </p>
                      <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        PDF até 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Documentos Tab */}
            {activeTab === 'documentos' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Documento de Propriedade
                    </label>
                    <div className={`border-2 border-dashed rounded-[8px] p-8 text-center ${
                      isDarkMode ? 'border-[#3A3A3A]' : 'border-[#E0E0E0]'
                    }`}>
                      <Upload className={`w-8 h-8 mx-auto mb-2 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Clique para fazer upload ou arraste o arquivo aqui
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Documento de Identidade
                    </label>
                    <div className={`border-2 border-dashed rounded-[8px] p-8 text-center ${
                      isDarkMode ? 'border-[#3A3A3A]' : 'border-[#E0E0E0]'
                    }`}>
                      <Upload className={`w-8 h-8 mx-auto mb-2 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Clique para fazer upload ou arraste o arquivo aqui
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Outros Documentos
                    </label>
                    <div className={`border-2 border-dashed rounded-[8px] p-8 text-center ${
                      isDarkMode ? 'border-[#3A3A3A]' : 'border-[#E0E0E0]'
                    }`}>
                      <Upload className={`w-8 h-8 mx-auto mb-2 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Clique para fazer upload ou arraste o arquivo aqui
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* QR Code Tab */}
            {activeTab === 'qr-code' && (
              <div className="space-y-6">
                <div className="text-center py-8">
                  <div className={`inline-flex p-6 rounded-[12px] ${
                    isDarkMode ? 'bg-[#1A1A1A]' : 'bg-gray-50'
                  }`}>
                    <QrCode className={`w-48 h-48 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                  </div>
                  <p className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    QR Code da Propriedade: {formData.nomePropriedade}
                  </p>
                  <p className={`mt-2 text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    ID: {property?.id || 'PROP-001'}
                  </p>
                  <Button
                    type="button"
                    className="mt-6 bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[8px]"
                  >
                    Baixar QR Code
                  </Button>
                </div>
              </div>
            )}
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
              Salvar Alterações
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}