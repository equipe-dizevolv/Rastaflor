import { Download, ArrowLeft, TreeDeciduous, Calendar, Eye } from 'lucide-react';

interface MonitoringData {
  period: string;
  responsible: string;
  totalMonitored: number;
  matrices: {
    species: string;
    matrixId: string;
    monitoringDate: string;
    phenologicalStage: string;
    observations: string;
  }[];
}

interface MonitoramentoVisualizacaoProps {
  onBack: () => void;
  monitoringData?: MonitoringData;
}

export function MonitoramentoVisualizacao({ onBack, monitoringData }: MonitoramentoVisualizacaoProps) {
  // Mock data baseado no exemplo fornecido
  const data: MonitoringData = monitoringData || {
    period: '01/01/2025 - 21/11/2025',
    responsible: 'João Paulo',
    totalMonitored: 15,
    matrices: [
      {
        species: 'Andiroba',
        matrixId: 'AND-001',
        monitoringDate: '15/11/2025',
        phenologicalStage: 'Frutificação (Maduro)',
        observations: 'Frutos em bom estado, prontos para coleta.'
      },
      {
        species: 'Jatobá',
        matrixId: 'JAT-042',
        monitoringDate: '10/11/2025',
        phenologicalStage: 'Floração',
        observations: '-'
      },
      {
        species: 'Ipê Amarelo',
        matrixId: 'IPE-003',
        monitoringDate: '08/11/2025',
        phenologicalStage: 'Floração (Início)',
        observations: 'Primeira florada da estação.'
      },
      {
        species: 'Cedro',
        matrixId: 'CED-015',
        monitoringDate: '05/11/2025',
        phenologicalStage: 'Frutificação (Verde)',
        observations: 'Aguardar maturação.'
      },
      {
        species: 'Pau-brasil',
        matrixId: 'PAU-022',
        monitoringDate: '01/11/2025',
        phenologicalStage: 'Vegetativo',
        observations: '-'
      }
    ]
  };

  const handleExportPDF = () => {
    console.log('Exportando PDF...');
    alert('Funcionalidade de exportação será implementada com biblioteca PDF');
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] dark:bg-[#1A1A1A]">
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
            <h2 className="text-[#1A1A1A] dark:text-white">Resultados do Monitoramento</h2>
          </div>
          
          <button
            onClick={handleExportPDF}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-[8px] hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm">Exportar PDF</span>
          </button>
        </div>
      </div>

      {/* Área de Conteúdo */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Card Principal */}
          <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[12px] shadow-sm p-8 space-y-8">
            {/* Cabeçalho do Relatório */}
            <div className="border-b border-[#E0E0E0] dark:border-border pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-[8px] flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h1 className="text-2xl text-[#1A1A1A] dark:text-white" style={{ fontWeight: 600 }}>
                    Relatório de Monitoramento Fenológico
                  </h1>
                  <p className="text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Sistema de acompanhamento de matrizes
                  </p>
                </div>
              </div>
            </div>

            {/* Dados do Relatório */}
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-1">
                <p className="text-xs text-[#777777] dark:text-[#B0B0B0]">Período analisado</p>
                <p className="text-sm text-[#1A1A1A] dark:text-white" style={{ fontWeight: 600 }}>
                  {data.period}
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs text-[#777777] dark:text-[#B0B0B0]">Responsável</p>
                <p className="text-sm text-[#1A1A1A] dark:text-white" style={{ fontWeight: 600 }}>
                  {data.responsible}
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs text-[#777777] dark:text-[#B0B0B0]">Total de matrizes monitoradas</p>
                <p className="text-sm text-[#1A1A1A] dark:text-white" style={{ fontWeight: 600 }}>
                  {data.totalMonitored}
                </p>
              </div>
            </div>

            {/* Tabela de Dados */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TreeDeciduous className="w-5 h-5 text-green-600" />
                <h3 className="text-[#1A1A1A] dark:text-white" style={{ fontWeight: 600 }}>
                  Lista de Matrizes Monitoradas
                </h3>
              </div>

              <div className="border border-[#E0E0E0] dark:border-border rounded-[8px] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F8F8F8] dark:bg-[#1E2621]">
                      <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                        Espécie
                      </th>
                      <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                        Matriz (Nº Identificação)
                      </th>
                      <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                        Data do Monitoramento
                      </th>
                      <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                        Estágio Fenológico
                      </th>
                      <th className="px-4 py-3 text-left text-xs text-[#777777] dark:text-[#B0B0B0]">
                        Observações
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.matrices.map((matrix, index) => (
                      <tr
                        key={index}
                        className="border-t border-[#E0E0E0] dark:border-border hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors"
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-600" />
                            <span className="text-sm text-[#1A1A1A] dark:text-white">
                              {matrix.species}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-sm text-[#1A1A1A] dark:text-white font-mono">
                            {matrix.matrixId}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-[#777777] dark:text-[#B0B0B0]" />
                            <span className="text-sm text-[#1A1A1A] dark:text-white">
                              {matrix.monitoringDate}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                              matrix.phenologicalStage.includes('Floração')
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                                : matrix.phenologicalStage.includes('Frutificação')
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                            }`}
                          >
                            {matrix.phenologicalStage}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-sm text-[#777777] dark:text-[#B0B0B0]">
                            {matrix.observations}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Estatísticas Resumidas */}
            <div className="bg-[#F8F8F8] dark:bg-[#1E2621] rounded-[8px] p-4">
              <p className="text-xs text-[#777777] dark:text-[#B0B0B0] mb-3">Resumo do Período</p>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl text-[#1A1A1A] dark:text-white" style={{ fontWeight: 600 }}>
                    {data.matrices.filter(m => m.phenologicalStage.includes('Floração')).length}
                  </p>
                  <p className="text-xs text-[#777777] dark:text-[#B0B0B0]">Em Floração</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl text-[#1A1A1A] dark:text-white" style={{ fontWeight: 600 }}>
                    {data.matrices.filter(m => m.phenologicalStage.includes('Frutificação')).length}
                  </p>
                  <p className="text-xs text-[#777777] dark:text-[#B0B0B0]">Em Frutificação</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl text-[#1A1A1A] dark:text-white" style={{ fontWeight: 600 }}>
                    {data.matrices.filter(m => m.phenologicalStage.includes('Vegetativo')).length}
                  </p>
                  <p className="text-xs text-[#777777] dark:text-[#B0B0B0]">Vegetativas</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl text-[#1A1A1A] dark:text-white" style={{ fontWeight: 600 }}>
                    {data.totalMonitored}
                  </p>
                  <p className="text-xs text-[#777777] dark:text-[#B0B0B0]">Total</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#E0E0E0] dark:border-border text-center">
              <p className="text-xs text-[#777777] dark:text-[#B0B0B0]">
                Relatório gerado em {new Date().toLocaleDateString('pt-BR')} por RastaFlor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
