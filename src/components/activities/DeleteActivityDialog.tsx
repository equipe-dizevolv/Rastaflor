import { AlertTriangle } from 'lucide-react';
import { Button } from '../ui/button';

interface DeleteActivityDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  activityType: string;
}

export function DeleteActivityDialog({ isOpen, onClose, onConfirm, activityType }: DeleteActivityDialogProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className={`w-full max-w-md rounded-[12px] shadow-lg ${
        isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white'
      }`}>
        <div className="p-6 space-y-4">
          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>

          {/* Title and Message */}
          <div className="text-center space-y-2">
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              Excluir Atividade
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Tem certeza que deseja excluir a atividade "{activityType}"?
            </p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Esta ação não pode ser desfeita.
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4">
            <Button
              onClick={onClose}
              variant="outline"
              className={`flex-1 rounded-[8px] ${
                isDarkMode 
                  ? 'border-gray-600 text-white hover:bg-gray-700' 
                  : 'border-gray-300 text-[#1A1A1A] hover:bg-gray-100'
              }`}
            >
              Cancelar
            </Button>
            <Button
              onClick={onConfirm}
              className="flex-1 bg-red-600 text-white hover:bg-red-700 rounded-[8px]"
            >
              Excluir
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
