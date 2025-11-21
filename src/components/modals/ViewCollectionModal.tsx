import { X, Calendar, Sprout, MapPin, Weight, Package, Target, FileText } from 'lucide-react';

interface ViewCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  collection: {
    id: string;
    species: string;
    scientificName: string;
    collectionDate: string;
    weight: string;
    type: string;
    origin: string;
    collector: string;
    status: string;
    collectionObjective?: string;
    observations?: string;
  } | null;
}

export function ViewCollectionModal({ isOpen, onClose, collection }: ViewCollectionModalProps) {
  if (!isOpen || !collection) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-card rounded-[12px] shadow-xl max-w-[700px] w-full max-h-[90vh] overflow-hidden border border-[#E0E0E0] dark:border-border">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E0E0E0] dark:border-border bg-primary">
          <h2 className="text-white text-lg">Detalhes da Coleta</h2>
          <button
            onClick={onClose}
            className="w-5 h-5 flex items-center justify-center text-white hover:text-white/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-auto p-6">
          <div className="space-y-6">
            {/* Seção: Informações da Espécie */}
            <div>
              <h3 className="text-[#1A1A1A] dark:text-white mb-4 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-green-600" />
                Informações da Espécie
              </h3>
              <div className="grid grid-cols-2 gap-4 pl-7">
                <div>
                  <p className="text-xs text-[#777777] dark:text-[#B0B0B0] mb-1">Nome Popular</p>
                  <p className="text-sm text-[#1A1A1A] dark:text-white">{collection.species}</p>
                </div>
                <div>
                  <p className="text-xs text-[#777777] dark:text-[#B0B0B0] mb-1">Nome Científico</p>
                  <p className="text-sm text-[#1A1A1A] dark:text-white italic">{collection.scientificName}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#E0E0E0] dark:border-border" />

            {/* Seção: Dados da Coleta */}
            <div>
              <h3 className="text-[#1A1A1A] dark:text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" />
                Dados da Coleta
              </h3>
              <div className="grid grid-cols-2 gap-4 pl-7">
                <div>
                  <p className="text-xs text-[#777777] dark:text-[#B0B0B0] mb-1">Data da Coleta</p>
                  <p className="text-sm text-[#1A1A1A] dark:text-white">{collection.collectionDate}</p>
                </div>
                <div>
                  <p className="text-xs text-[#777777] dark:text-[#B0B0B0] mb-1">Peso Coletado</p>
                  <p className="text-sm text-[#1A1A1A] dark:text-white">{collection.weight}</p>
                </div>
                <div>
                  <p className="text-xs text-[#777777] dark:text-[#B0B0B0] mb-1">Tipo de Coleta</p>
                  <p className="text-sm text-[#1A1A1A] dark:text-white">{collection.type}</p>
                </div>
                <div>
                  <p className="text-xs text-[#777777] dark:text-[#B0B0B0] mb-1">Status</p>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs ${
                      collection.status === 'Concluída'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : collection.status === 'Pendente'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}
                  >
                    {collection.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#E0E0E0] dark:border-border" />

            {/* Seção: Origem */}
            <div>
              <h3 className="text-[#1A1A1A] dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                Origem
              </h3>
              <div className="pl-7">
                <p className="text-xs text-[#777777] dark:text-[#B0B0B0] mb-1">Local de Origem</p>
                <p className="text-sm text-[#1A1A1A] dark:text-white">{collection.origin}</p>
              </div>
            </div>

            {/* Seção: Coletor */}
            {collection.collector && (
              <>
                <div className="border-t border-[#E0E0E0] dark:border-border" />
                <div>
                  <h3 className="text-[#1A1A1A] dark:text-white mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-green-600" />
                    Responsável
                  </h3>
                  <div className="pl-7">
                    <p className="text-xs text-[#777777] dark:text-[#B0B0B0] mb-1">Coletor</p>
                    <p className="text-sm text-[#1A1A1A] dark:text-white">{collection.collector}</p>
                  </div>
                </div>
              </>
            )}

            {/* Seção: Objetivo da Coleta */}
            {collection.collectionObjective && (
              <>
                <div className="border-t border-[#E0E0E0] dark:border-border" />
                <div>
                  <h3 className="text-[#1A1A1A] dark:text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-600" />
                    Objetivo da Coleta
                  </h3>
                  <div className="pl-7">
                    <p className="text-sm text-[#1A1A1A] dark:text-white">{collection.collectionObjective}</p>
                  </div>
                </div>
              </>
            )}

            {/* Seção: Observações */}
            {collection.observations && (
              <>
                <div className="border-t border-[#E0E0E0] dark:border-border" />
                <div>
                  <h3 className="text-[#1A1A1A] dark:text-white mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    Observações
                  </h3>
                  <div className="pl-7">
                    <p className="text-sm text-[#1A1A1A] dark:text-white whitespace-pre-wrap">{collection.observations}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-[#E0E0E0] dark:border-border bg-[#F8F8F8] dark:bg-[#0F3D26]">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors text-sm"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
