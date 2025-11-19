import { KPICard } from '../dashboard/KPICard';

interface ExecutiveSummaryProps {
  summary: {
    hectaresRestored: number;
    seedlingsPlanted: number;
    seedsKg: number;
    totalValue: number;
    totalProperties: number;
  };
}

export function ExecutiveSummary({ summary }: ExecutiveSummaryProps) {
  const kpiData = [
    {
      title: 'Total de Hectares Restaurados',
      value: `${summary.hectaresRestored.toLocaleString('pt-BR')} ha`,
      subtitle: 'Área total recuperada'
    },
    {
      title: 'Total de Mudas Plantadas',
      value: summary.seedlingsPlanted.toLocaleString('pt-BR'),
      subtitle: 'Mudas nativas implantadas'
    },
    {
      title: 'Total de Sementes (Kg)',
      value: `${summary.seedsKg.toLocaleString('pt-BR')} kg`,
      subtitle: 'Sementes utilizadas'
    },
    {
      title: 'Valor Total do Projeto (R$)',
      value: `R$ ${summary.totalValue.toLocaleString('pt-BR')}`,
      subtitle: 'Investimento total'
    },
    {
      title: 'Total de Propriedades Assistidas',
      value: summary.totalProperties.toString(),
      subtitle: 'Propriedades no projeto'
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-foreground print:text-lg">Executive Summary</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 print:grid-cols-3 print:gap-4">
        {kpiData.map((kpi, index) => (
          <KPICard
            key={index}
            title={kpi.title}
            value={kpi.value}
            subtitle={kpi.subtitle}
          />
        ))}
      </div>
    </div>
  );
}