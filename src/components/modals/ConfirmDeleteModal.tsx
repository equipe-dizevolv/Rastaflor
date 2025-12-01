import { X, AlertTriangle } from 'lucide-react';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  itemName?: string;
}

export function ConfirmDeleteModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "Confirmar Exclusão",
  message = "Tem certeza que deseja excluir este item?",
  itemName
}: ConfirmDeleteModalProps) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-card rounded-[12px] shadow-xl max-w-[480px] w-full mx-4 border border-[#E0E0E0] dark:border-border overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E0E0E0] dark:border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-[#1A1A1A] dark:text-white font-medium">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-5 h-5 flex items-center justify-center text-[#777777] hover:text-[#1A1A1A] dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <p className="text-[#1A1A1A] dark:text-white mb-2">
            {message}
          </p>
          {itemName && (
            <p className="text-sm text-[#777777] dark:text-[#B0B0B0]">
              Item: <span className="font-medium text-[#1A1A1A] dark:text-white">{itemName}</span>
            </p>
          )}
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-[8px]">
            <p className="text-sm text-red-800 dark:text-red-400">
              ⚠️ Esta ação não pode ser desfeita.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#E0E0E0] dark:border-border bg-[#F8F8F8] dark:bg-card">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#E0E0E0] dark:border-border rounded-[8px] text-[#1A1A1A] dark:text-white hover:bg-[#F0F0F0] dark:hover:bg-background transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-[8px] hover:bg-red-700 transition-colors"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
