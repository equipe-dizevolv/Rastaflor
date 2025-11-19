import { useState, useEffect } from 'react';
import { X, Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';

interface Activity {
  id?: string;
  projectId: string;
  projectName: string;
  tipo: string;
  descricao: string;
  observacao: string;
  data: string;
  imageUrl?: string;
}

interface AddActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (activity: Activity) => void;
  editActivity?: Activity | null;
}

export function AddActivityModal({ isOpen, onClose, onSave, editActivity }: AddActivityModalProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  const [formData, setFormData] = useState<Activity>({
    projectId: '',
    projectName: '',
    tipo: '',
    descricao: '',
    observacao: '',
    data: ''
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (editActivity) {
      setFormData(editActivity);
      if (editActivity.imageUrl) {
        setImagePreview(editActivity.imageUrl);
      }
    } else {
      setFormData({
        projectId: '',
        projectName: '',
        tipo: '',
        descricao: '',
        observacao: '',
        data: ''
      });
      setImagePreview(null);
    }
  }, [editActivity, isOpen]);

  const handleProjectChange = (value: string) => {
    const projectMap: Record<string, string> = {
      'PRJ-001': 'Projeto Renascer',
      'PRJ-002': 'Projeto Floresta Viva',
      'PRJ-003': 'Projeto Mata Atlântica'
    };
    
    setFormData({
      ...formData,
      projectId: value,
      projectName: projectMap[value] || ''
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const activityData = {
      ...formData,
      id: editActivity?.id || Date.now().toString(),
      imageUrl: imagePreview || undefined
    };
    
    onSave(activityData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className={`w-full max-w-2xl rounded-[12px] shadow-lg max-h-[90vh] overflow-y-auto ${
        isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white'
      }`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div>
            <h2 className={`text-xl ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {editActivity ? 'Editar Atividade' : 'Adicionar Nova Atividade'}
            </h2>
            <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Preencha os dados da atividade realizada
            </p>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg hover:bg-gray-100 ${
              isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'text-gray-500'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Projeto */}
            <div className="space-y-2">
              <Label htmlFor="project" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                Projeto *
              </Label>
              <Select value={formData.projectId} onValueChange={handleProjectChange} required>
                <SelectTrigger className={`rounded-[8px] ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A] border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-[#1A1A1A]'
                }`}>
                  <SelectValue placeholder="Selecione o projeto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PRJ-001">PRJ-001 - Projeto Renascer</SelectItem>
                  <SelectItem value="PRJ-002">PRJ-002 - Projeto Floresta Viva</SelectItem>
                  <SelectItem value="PRJ-003">PRJ-003 - Projeto Mata Atlântica</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tipo de Atividade */}
            <div className="space-y-2">
              <Label htmlFor="tipo" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                Tipo de Atividade *
              </Label>
              <Select value={formData.tipo} onValueChange={(value) => setFormData({ ...formData, tipo: value })} required>
                <SelectTrigger className={`rounded-[8px] ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A] border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-[#1A1A1A]'
                }`}>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Visista de área para plantio">Visita de área para plantio</SelectItem>
                  <SelectItem value="Preparação do solo">Preparação do solo</SelectItem>
                  <SelectItem value="Plantio de mudas">Plantio de mudas</SelectItem>
                  <SelectItem value="Manutenção">Manutenção</SelectItem>
                  <SelectItem value="Monitoramento">Monitoramento</SelectItem>
                  <SelectItem value="Coleta de sementes">Coleta de sementes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Data da Atividade */}
          <div className="space-y-2">
            <Label htmlFor="data" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
              Data da Atividade *
            </Label>
            <Input
              id="data"
              type="date"
              value={formData.data}
              onChange={(e) => setFormData({ ...formData, data: e.target.value })}
              required
              className={`rounded-[8px] ${
                isDarkMode 
                  ? 'bg-[#1A1A1A] border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-[#1A1A1A]'
              }`}
            />
          </div>

          {/* Descrição */}
          <div className="space-y-2">
            <Label htmlFor="descricao" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
              Descrição *
            </Label>
            <Textarea
              id="descricao"
              value={formData.descricao}
              onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
              placeholder="Descreva a atividade realizada"
              required
              rows={3}
              className={`rounded-[8px] ${
                isDarkMode 
                  ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                  : 'bg-white border-gray-300 text-[#1A1A1A]'
              }`}
            />
          </div>

          {/* Observação */}
          <div className="space-y-2">
            <Label htmlFor="observacao" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
              Observação
            </Label>
            <Textarea
              id="observacao"
              value={formData.observacao}
              onChange={(e) => setFormData({ ...formData, observacao: e.target.value })}
              placeholder="Observações adicionais (opcional)"
              rows={2}
              className={`rounded-[8px] ${
                isDarkMode 
                  ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                  : 'bg-white border-gray-300 text-[#1A1A1A]'
              }`}
            />
          </div>

          {/* Upload de Imagem */}
          <div className="space-y-2">
            <Label className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
              Registro Fotográfico
            </Label>
            <div className={`p-6 rounded-lg border-2 border-dashed text-center ${
              isDarkMode ? 'border-gray-600 bg-[#1A1A1A]' : 'border-gray-300 bg-gray-50'
            }`}>
              {imagePreview ? (
                <div className="space-y-3">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setImagePreview(null)}
                    className={`rounded-[8px] ${
                      isDarkMode 
                        ? 'border-gray-600 text-white hover:bg-gray-700' 
                        : 'border-gray-300 text-[#1A1A1A] hover:bg-gray-100'
                    }`}
                  >
                    Remover Imagem
                  </Button>
                </div>
              ) : (
                <>
                  <ImageIcon className={`w-12 h-12 mx-auto mb-3 ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-400'
                  }`} />
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Arraste uma imagem ou clique para selecionar
                  </p>
                  <label htmlFor="imageUpload">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className={`rounded-[8px] cursor-pointer ${
                        isDarkMode 
                          ? 'border-gray-600 text-white hover:bg-gray-700' 
                          : 'border-gray-300 text-[#1A1A1A] hover:bg-gray-100'
                      }`}
                      onClick={() => document.getElementById('imageUpload')?.click()}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Selecionar Imagem
                    </Button>
                  </label>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className={`rounded-[8px] px-6 ${
                isDarkMode 
                  ? 'border-gray-600 text-white hover:bg-gray-700' 
                  : 'border-gray-300 text-[#1A1A1A] hover:bg-gray-100'
              }`}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[8px] px-6"
            >
              {editActivity ? 'Salvar Alterações' : 'Adicionar Atividade'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
