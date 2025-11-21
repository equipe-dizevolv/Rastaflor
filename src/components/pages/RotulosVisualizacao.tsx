import { Download, ArrowLeft, Leaf } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface LabelItem {
  id: string;
  lote: string;
  species: string;
  collectionDate: string;
  weight: string;
  copies: number;
}

interface RotulosVisualizacaoProps {
  onBack: () => void;
  items: LabelItem[];
}

export function RotulosVisualizacao({ onBack, items }: RotulosVisualizacaoProps) {
  // Mock de dados adicionais para as etiquetas
  const getMatrixInfo = (lote: string) => {
    const matrixData: { [key: string]: { scientificName: string; location: string } } = {
      'AND-001': { scientificName: 'Carapa guianensis', location: 'Sítio Boa Esperança - Área 2' },
      'JAT-042': { scientificName: 'Hymenaea courbaril', location: 'Fazenda Santa Rosa - Área 1' },
      'IPE-003': { scientificName: 'Handroanthus albus', location: 'Chácara Vale Verde - Área 3' },
      'CED-015': { scientificName: 'Cedrela fissilis', location: 'Sítio Boa Esperança - Área 2' },
      'PAU-022': { scientificName: 'Paubrasilia echinata', location: 'Reserva Mata Atlântica - Área 1' }
    };
    return matrixData[lote] || { scientificName: 'Nome científico', location: 'Local de coleta' };
  };

  const handleDownloadPDF = () => {
    console.log('Baixando PDF...');
    alert('Funcionalidade de download será implementada com biblioteca PDF');
  };

  // Expande os itens baseado na quantidade de cópias
  const expandedLabels: Array<LabelItem & { scientificName: string; location: string }> = [];
  items.forEach(item => {
    const info = getMatrixInfo(item.lote);
    for (let i = 0; i < item.copies; i++) {
      expandedLabels.push({
        ...item,
        ...info
      });
    }
  });

  return (
    <div className="min-h-screen bg-[#3A3A3A]">
      {/* Header Fixo */}
      <div className="sticky top-0 z-10 bg-white dark:bg-card border-b border-[#E0E0E0] dark:border-border shadow-sm">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-[#777777] dark:text-[#B0B0B0] hover:text-[#1A1A1A] dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Voltar</span>
            </button>
            <div className="h-6 w-px bg-[#E0E0E0] dark:bg-border" />
            <h2 className="text-[#1A1A1A] dark:text-white">Pré-visualização de Etiquetas</h2>
          </div>
          
          <button
            onClick={handleDownloadPDF}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm">Baixar PDF / Imprimir</span>
          </button>
        </div>
      </div>

      {/* Área da Folha A4 */}
      <div className="px-6 py-8 flex justify-center">
        {/* Papel A4 */}
        <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl" style={{ padding: '10mm' }}>
          {/* Grid de Etiquetas (2 colunas) */}
          <div className="grid grid-cols-2 gap-4">
            {expandedLabels.map((label, index) => (
              <div
                key={index}
                className="border-2 border-dashed border-[#CCCCCC] rounded-[8px] p-4 bg-white"
                style={{ 
                  minHeight: '120mm',
                  breakInside: 'avoid',
                  pageBreakInside: 'avoid'
                }}
              >
                {/* Header com Logo */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E0E0E0]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-600 rounded-[6px] flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 600 }}>RastaFlor</p>
                      <p className="text-[10px] text-[#777777]">Gestão Ambiental</p>
                    </div>
                  </div>
                  
                  {/* QR Code */}
                  <div className="flex-shrink-0">
                    <QRCodeSVG
                      value={`RASTAFLOR-${label.lote}-${label.collectionDate}`}
                      size={64}
                      level="M"
                      includeMargin={false}
                    />
                  </div>
                </div>

                {/* Corpo da Etiqueta */}
                <div className="space-y-3">
                  {/* Nome Popular */}
                  <div>
                    <p className="text-[10px] text-[#777777] mb-0.5">Nome popular</p>
                    <p className="text-base text-[#1A1A1A]" style={{ fontWeight: 600 }}>
                      {label.species}
                    </p>
                  </div>

                  {/* Nome Científico */}
                  <div>
                    <p className="text-[10px] text-[#777777] mb-0.5">Nome científico</p>
                    <p className="text-sm text-[#1A1A1A] italic">
                      {label.scientificName}
                    </p>
                  </div>

                  {/* Nº de Identificação */}
                  <div>
                    <p className="text-[10px] text-[#777777] mb-0.5">Nº de identificação da matriz</p>
                    <p className="text-sm text-[#1A1A1A] font-mono" style={{ fontWeight: 600 }}>
                      {label.lote}
                    </p>
                  </div>

                  {/* Data da Coleta */}
                  <div>
                    <p className="text-[10px] text-[#777777] mb-0.5">Data da coleta</p>
                    <p className="text-sm text-[#1A1A1A]">
                      {label.collectionDate}
                    </p>
                  </div>

                  {/* Peso */}
                  <div>
                    <p className="text-[10px] text-[#777777] mb-0.5">Peso (kg)</p>
                    <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 600 }}>
                      {label.weight}
                    </p>
                  </div>

                  {/* Local de Coleta */}
                  <div>
                    <p className="text-[10px] text-[#777777] mb-0.5">Local de coleta</p>
                    <p className="text-xs text-[#1A1A1A]">
                      {label.location}
                    </p>
                  </div>
                </div>

                {/* Footer da Etiqueta */}
                <div className="mt-4 pt-3 border-t border-[#E0E0E0]">
                  <p className="text-[9px] text-[#999999] text-center">
                    Etiqueta gerada pelo sistema RastaFlor
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Informação de Contagem */}
          {expandedLabels.length > 0 && (
            <div className="mt-6 pt-4 border-t-2 border-dashed border-[#CCCCCC] text-center">
              <p className="text-xs text-[#777777]">
                Total de {expandedLabels.length} {expandedLabels.length === 1 ? 'etiqueta' : 'etiquetas'} geradas
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Instruções de Impressão */}
      <div className="fixed bottom-6 right-6 bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[8px] shadow-lg p-4 max-w-xs">
        <p className="text-xs text-[#1A1A1A] dark:text-white mb-2" style={{ fontWeight: 600 }}>
          Dicas para Impressão
        </p>
        <ul className="text-xs text-[#777777] dark:text-[#B0B0B0] space-y-1">
          <li>• Use papel A4 branco</li>
          <li>• Configure margens mínimas</li>
          <li>• Recorte pelas linhas tracejadas</li>
          <li>• Recomendado: papel adesivo</li>
        </ul>
      </div>
    </div>
  );
}
