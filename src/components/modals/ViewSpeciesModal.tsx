import { X } from 'lucide-react';
import { SpeciesFormData } from './AddSpeciesModal';

interface ViewSpeciesModalProps {
  isOpen: boolean;
  onClose: () => void;
  species: SpeciesFormData | null;
}

export function ViewSpeciesModal({ isOpen, onClose, species }: ViewSpeciesModalProps) {
  if (!isOpen || !species) return null;

  const InfoField = ({ label, value }: { label: string; value: string }) => (
    <div className="space-y-1">
      <label className="text-sm text-[#777777] dark:text-[#B0B0B0]">
        {label}
      </label>
      <p className="text-sm text-[#1A1A1A] dark:text-white">
        {value || '-'}
      </p>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-card rounded-[12px] shadow-xl max-w-[896px] w-full max-h-[90vh] overflow-hidden border border-[#E0E0E0] dark:border-border">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E0E0E0] dark:border-border bg-primary">
          <h2 className="text-white text-lg">Detalhes da Espécie</h2>
          <button
            onClick={onClose}
            className="w-5 h-5 flex items-center justify-center text-white hover:text-white/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-auto p-6 space-y-6">
          {/* Section: Identificação */}
          <div>
            <h3 className="text-[#1A1A1A] dark:text-white mb-4 font-medium">Identificação</h3>

            <div className="grid grid-cols-2 gap-4">
              <InfoField label="Nome Popular da Espécie" value={species.popularName} />
              <InfoField label="Nome Científico" value={species.scientificName} />
              <InfoField label="Família Botânica" value={species.family} />
              <InfoField label="Gênero" value={species.genus} />
            </div>
          </div>

          {/* Section: Classificação Ecológica */}
          <div>
            <h3 className="text-[#1A1A1A] dark:text-white mb-4 font-medium">Classificação Ecológica</h3>

            <div className="grid grid-cols-2 gap-4">
              <InfoField label="Bioma de Origem" value={species.biome} />
              <InfoField label="Categoria Sucessional" value={species.category} />
              <InfoField label="Status de Conservação" value={species.conservationStatus} />
            </div>
          </div>

          {/* Section: Informações Adicionais */}
          {species.description && (
            <div>
              <h3 className="text-[#1A1A1A] dark:text-white mb-4 font-medium">Informações Adicionais</h3>

              <div className="space-y-1">
                <label className="text-sm text-[#777777] dark:text-[#B0B0B0]">
                  Descrição / Observações
                </label>
                <p className="text-sm text-[#1A1A1A] dark:text-white whitespace-pre-wrap">
                  {species.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#E0E0E0] dark:border-border bg-[#F8F8F8] dark:bg-[#0F3D26]">
          <button
            type="button"
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
