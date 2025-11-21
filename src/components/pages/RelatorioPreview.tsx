import { ArrowLeft, Download } from 'lucide-react';
import { 
  Card1,
  Card,
  Card3,
  Card2
} from '../../imports/RastaFlor-2138-12509';

interface RelatorioPreviewProps {
  onBack: () => void;
}

export function RelatorioPreview({ onBack }: RelatorioPreviewProps) {
  const handleDownloadPDF = () => {
    console.log('Baixando PDF...');
    alert('Funcionalidade de download será implementada com biblioteca PDF');
  };

  return (
    <div className="flex flex-col h-full bg-[#f8f8f8] overflow-hidden">
      {/* Header com ações */}
      <div className="bg-[#0f3d26] border-b border-[#2b3630] px-8 py-5 flex-shrink-0">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          <h2 className="text-neutral-50 text-lg">Visualização de Relatório</h2>
          
          {/* Botões de ação */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 text-neutral-50 hover:text-green-400 transition-colors rounded-[8px] hover:bg-[#121714]/30"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </button>
            
            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-[12px] hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Gerar PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Conteúdo principal - Cards do Figma em Light Mode */}
      <div className="flex-1 overflow-y-auto bg-[#121714]">
        <div className="px-8 py-8">
          <div className="relative max-w-[1336px] mx-auto" style={{ minHeight: '1583px' }}>
            {/* Card: Equipe Envolvida no Período */}
            <Card1 />
            
            {/* Card: Propriedades Envolvidas */}
            <Card />
            
            {/* Card: Atividades Realizadas */}
            <Card3 />
            
            {/* Card: Calendário Fenológico das Espécies */}
            <Card2 />
          </div>
        </div>
      </div>
    </div>
  );
}
