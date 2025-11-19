import { X } from 'lucide-react';
import { Button } from '../ui/button';

interface ImageViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
  activityType: string;
}

export function ImageViewerModal({ isOpen, onClose, imageUrl, activityType }: ImageViewerModalProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className={`w-full max-w-4xl rounded-[12px] shadow-lg overflow-hidden ${
        isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white'
      }`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
            Registro Fotográfico - {activityType}
          </h3>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg hover:bg-gray-100 ${
              isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'text-gray-500'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image */}
        <div className="p-6">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={activityType}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />
          ) : (
            <div className={`flex flex-col items-center justify-center py-20 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              <p className="text-lg mb-2">Nenhuma imagem disponível</p>
              <p className="text-sm">Esta atividade não possui registro fotográfico</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={`flex items-center justify-end p-4 border-t ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <Button
            onClick={onClose}
            variant="outline"
            className={`rounded-[8px] ${
              isDarkMode 
                ? 'border-gray-600 text-white hover:bg-gray-700' 
                : 'border-gray-300 text-[#1A1A1A] hover:bg-gray-100'
            }`}
          >
            Fechar
          </Button>
        </div>
      </div>
    </div>
  );
}
