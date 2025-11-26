import { X } from 'lucide-react';

interface ViewRotuloModalProps {
  isOpen: boolean;
  onClose: () => void;
  labelData: SavedLabel | null;
}

interface SavedLabel {
  id: string;
  lote: string;
  nomePopular: string;
  nomeCientifico: string;
  nomeComprador: string;
  dataColeta: string;
  peso: string;
  renasem?: string;
  cnpj?: string;
  porcentagemGerminacao?: string;
  validadeTeste?: string;
  municipioColeta?: string;
  destino?: string;
}

export function ViewRotuloModal({ isOpen, onClose, labelData }: ViewRotuloModalProps) {
  if (!isOpen || !labelData) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-card rounded-[12px] shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header - Verde seguindo padrão dos outros modais de visualização */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0F3D26] sticky top-0 z-10 rounded-t-[12px]">
          <h2 className="text-white">Visualizar Rótulo</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-[8px] hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Body - Visualização */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Coluna Esquerda */}
            <div className="space-y-4">
              {/* Nome popular */}
              <div className="space-y-2">
                <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Nome popular
                </label>
                <p className="text-sm text-[#1A1A1A] dark:text-white">
                  {labelData.nomePopular || '-'}
                </p>
              </div>

              {/* Nome científico */}
              <div className="space-y-2">
                <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Nome científico
                </label>
                <p className="text-sm text-[#1A1A1A] dark:text-white italic">
                  {labelData.nomeCientifico || '-'}
                </p>
              </div>

              {/* Peso na embalagem */}
              <div className="space-y-2">
                <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Peso na embalagem
                </label>
                <p className="text-sm text-[#1A1A1A] dark:text-white">
                  {labelData.peso ? `${labelData.peso} kg` : '-'}
                </p>
              </div>

              {/* RENASEM do produtor */}
              <div className="space-y-2">
                <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                  RENASEM do produtor
                </label>
                <p className="text-sm text-[#1A1A1A] dark:text-white">
                  {labelData.renasem || '-'}
                </p>
              </div>

              {/* CNPJ do produtor */}
              <div className="space-y-2">
                <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                  CNPJ do produtor
                </label>
                <p className="text-sm text-[#1A1A1A] dark:text-white font-mono">
                  {labelData.cnpj || '-'}
                </p>
              </div>

              {/* Nome do comprador */}
              <div className="space-y-2">
                <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Nome do comprador
                </label>
                <p className="text-sm text-[#1A1A1A] dark:text-white">
                  {labelData.nomeComprador || '-'}
                </p>
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="space-y-4">
              {/* Lote de sementes */}
              <div className="space-y-2">
                <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Lote de sementes
                </label>
                <p className="text-sm text-[#1A1A1A] dark:text-white font-mono">
                  {labelData.lote || '-'}
                </p>
              </div>

              {/* Porcentagem de germinação */}
              <div className="space-y-2">
                <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Porcentagem de germinação
                </label>
                <p className="text-sm text-[#1A1A1A] dark:text-white">
                  {labelData.porcentagemGerminacao ? `${labelData.porcentagemGerminacao}%` : '-'}
                </p>
              </div>

              {/* Validade | Teste de germinação */}
              <div className="space-y-2">
                <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Validade | Teste de germinação
                </label>
                <p className="text-sm text-[#1A1A1A] dark:text-white">
                  {labelData.validadeTeste || '-'}
                </p>
              </div>

              {/* Município de coleta */}
              <div className="space-y-2">
                <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Município de coleta
                </label>
                <p className="text-sm text-[#1A1A1A] dark:text-white">
                  {labelData.municipioColeta || '-'}
                </p>
              </div>

              {/* Destino */}
              <div className="space-y-2">
                <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Destino
                </label>
                <p className="text-sm text-[#1A1A1A] dark:text-white">
                  {labelData.destino || '-'}
                </p>
              </div>

              {/* Data da Coleta */}
              <div className="space-y-2">
                <label className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                  Data da Coleta
                </label>
                <p className="text-sm text-[#1A1A1A] dark:text-white">
                  {labelData.dataColeta || '-'}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-[#E0E0E0] dark:border-border">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white dark:bg-transparent border border-[#E0E0E0] dark:border-border text-[#1A1A1A] dark:text-white rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] transition-colors text-sm"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
