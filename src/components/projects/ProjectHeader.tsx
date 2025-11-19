import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Edit3, Check, X, Upload, Image as ImageIcon } from 'lucide-react';

interface ProjectHeaderProps {
  projectName: string;
  projectImage?: string;
  onEdit: () => void;
  onImageChange?: (imageUrl: string) => void;
}

export function ProjectHeader({ projectName, projectImage, onEdit, onImageChange }: ProjectHeaderProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(projectName);
  const [imageUrl, setImageUrl] = useState(projectImage || 'https://images.unsplash.com/photo-1760624683181-7570791efd52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZvcmVzdGF0aW9uJTIwbmF0dXJlJTIwZ3JlZW58ZW58MXx8fHwxNzYyNTI2MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080');

  const handleSave = () => {
    // Aqui você pode adicionar lógica para salvar no backend
    setIsEditing(false);
    // Chama o onEdit para notificar o componente pai se necessário
    onEdit();
  };

  const handleCancel = () => {
    setEditedName(projectName);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImageUrl = reader.result as string;
        setImageUrl(newImageUrl);
        if (onImageChange) {
          onImageChange(newImageUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Project Image */}
      <div className="relative group">
        <div className={`w-full h-[300px] rounded-[12px] overflow-hidden ${
          isDarkMode ? 'bg-[#2A2A2A]' : 'bg-[#F5F5F5]'
        }`}>
          <img 
            src={imageUrl}
            alt="Project"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Upload Button Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-[12px] flex items-center justify-center">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <div className="bg-white text-[#0F3D26] px-6 py-3 rounded-[12px] flex items-center gap-2 hover:bg-gray-100 transition-colors">
              <Upload className="w-5 h-5" />
              <span>Alterar Imagem</span>
            </div>
          </label>
        </div>
      </div>

      {/* Project Name */}
      <div className="flex items-center justify-between">
        {isEditing ? (
          <div className="flex items-center gap-3 flex-1">
            <Input
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className={`max-w-md rounded-[12px] text-2xl ${
                isDarkMode 
                  ? 'bg-[#2A2A2A] border-[#3A3A3A] text-white' 
                  : 'bg-white border-[#E0E0E0] text-[#1A1A1A]'
              }`}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSave();
                if (e.key === 'Escape') handleCancel();
              }}
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSave}
              className="text-green-600 hover:text-green-700 hover:bg-green-50 transition-colors"
            >
              <Check className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCancel}
              className="text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        ) : (
          <h1 className={`text-3xl flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
            {editedName}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleEdit}
              className={`hover:bg-accent/10 transition-colors ${
                isDarkMode ? 'text-white hover:text-white' : 'text-[#1A1A1A] hover:text-[#0F3D26]'
              }`}
            >
              <Edit3 className="w-5 h-5" />
            </Button>
          </h1>
        )}
      </div>
    </div>
  );
}