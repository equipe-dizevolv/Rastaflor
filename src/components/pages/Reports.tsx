import { useState } from 'react';
import { ReportHeader } from '../reports/ReportHeader';
import { ExecutiveSummary } from '../reports/ExecutiveSummary';
import { PropertiesSection } from '../reports/PropertiesSection';
import { FinancialSection } from '../reports/FinancialSection';
import { DataTable } from '../reports/DataTable';
import { FloatingActionButton } from '../reports/FloatingActionButton';

export function Reports() {
  const [dateRange, setDateRange] = useState({
    from: new Date(2024, 0, 1), // January 1, 2024
    to: new Date(2024, 11, 31)  // December 31, 2024
  });

  // Mock data for the report
  const projectData = {
    name: 'Restauração Mata Atlântica - SP',
    summary: {
      hectaresRestored: 125.5,
      seedlingsPlanted: 45780,
      seedsKg: 890,
      totalValue: 485000,
      totalProperties: 3
    },
    properties: [
      {
        id: '1',
        name: 'Fazenda São João',
        location: 'Atibaia, SP',
        area: 45.2,
        plantingDate: '15/03/2024',
        seedlingsPlanted: 18500,
        documentsAvailable: true
      },
      {
        id: '2',
        name: 'Sítio Água Limpa',
        location: 'Nazaré Paulista, SP',
        area: 32.8,
        plantingDate: '22/04/2024',
        seedlingsPlanted: 12800,
        documentsAvailable: true
      },
      {
        id: '3',
        name: 'Chácara Verde Vale',
        location: 'Bragança Paulista, SP',
        area: 47.5,
        plantingDate: '10/05/2024',
        seedlingsPlanted: 14480,
        documentsAvailable: false
      }
    ],
    invoices: [
      {
        id: '1',
        description: 'Mudas Nativas - Lote 1',
        amount: 125000,
        date: '15/03/2024',
        category: 'Material Vegetal'
      },
      {
        id: '2',
        description: 'Preparação do Solo',
        amount: 85000,
        date: '08/03/2024',
        category: 'Serviços'
      },
      {
        id: '3',
        description: 'Transporte e Logística',
        amount: 45000,
        date: '20/03/2024',
        category: 'Logística'
      },
      {
        id: '4',
        description: 'Mudas Nativas - Lote 2',
        amount: 98000,
        date: '18/04/2024',
        category: 'Material Vegetal'
      },
      {
        id: '5',
        description: 'Mão de Obra Especializada',
        amount: 75000,
        date: '25/04/2024',
        category: 'Serviços'
      },
      {
        id: '6',
        description: 'Monitoramento e Manutenção',
        amount: 52000,
        date: '10/05/2024',
        category: 'Monitoramento'
      }
    ]
  };

  // Species data
  const speciesData = [
    ['Jatobá', 'Hymenaea courbaril', 5420, 'Nativa'],
    ['Ipê Amarelo', 'Handroanthus chrysotrichus', 3890, 'Nativa'],
    ['Pau Brasil', 'Caesalpinia echinata', 2150, 'Nativa'],
    ['Cedro', 'Cedrela fissilis', 4200, 'Nativa'],
    ['Jacarandá', 'Jacaranda mimosifolia', 3650, 'Nativa'],
    ['Aroeira', 'Schinus terebinthifolius', 2980, 'Nativa'],
    ['Embaúba', 'Cecropia pachystachya', 1890, 'Pioneira'],
    ['Ingá', 'Inga vera', 2200, 'Pioneira']
  ];

  // Suppliers data
  const suppliersData = [
    ['Viveiro Mata Nativa Ltda.', 'Material Vegetal', 'R$ 223.000,00', 'Ativo'],
    ['EcoServiços Ambientais', 'Serviços Especializados', 'R$ 160.000,00', 'Ativo'],
    ['Translog Sustentável', 'Logística e Transporte', 'R$ 45.000,00', 'Ativo'],
    ['Instituto Verde Pesquisa', 'Consultoria Técnica', 'R$ 35.000,00', 'Concluído'],
    ['AgroTech Monitoramento', 'Tecnologia e Sensores', 'R$ 22.000,00', 'Ativo']
  ];

  // Team data
  const teamData = [
    ['Dr. Maria Silva', 'Coordenadora de Projeto', 'Bióloga', '2 anos'],
    ['João Santos', 'Engenheiro Florestal', 'Especialista em Restauração', '3 anos'],
    ['Ana Costa', 'Técnica de Campo', 'Técnica Ambiental', '1.5 anos'],
    ['Carlos Oliveira', 'Analista de Dados', 'Engenheiro Ambiental', '1 ano'],
    ['Pedro Lima', 'Supervisor de Plantio', 'Técnico Agrícola', '4 anos']
  ];

  const handleDownloadDocuments = (propertyId: string) => {
    console.log('Downloading documents for property:', propertyId);
    // Implement document download logic
  };

  const handleExportPDF = () => {
    console.log('Exporting PDF...');
    // Implement PDF export logic
    window.print();
  };

  const handlePrint = () => {
    console.log('Printing report...');
    window.print();
  };

  return (
    <div className="p-6 space-y-8 max-w-none">
      {/* Header */}
      <ReportHeader
        projectName={projectData.name}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
      />

      {/* Executive Summary */}
      <ExecutiveSummary summary={projectData.summary} />

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 print:grid-cols-1 print:gap-6">
        {/* Left column - Properties (2/3 width) */}
        <div className="lg:col-span-2">
          <PropertiesSection
            properties={projectData.properties}
            onDownloadDocuments={handleDownloadDocuments}
          />
        </div>

        {/* Right column - Financial (1/3 width) */}
        <div className="lg:col-span-1">
          <FinancialSection invoices={projectData.invoices} />
        </div>
      </div>

      {/* Full-width data tables */}
      <div className="space-y-8 print:space-y-6">
        <DataTable
          title="Lista de Espécies"
          headers={['Nome Popular', 'Nome Científico', 'Quantidade', 'Categoria']}
          data={speciesData}
        />

        <DataTable
          title="Fornecedores"
          headers={['Empresa', 'Categoria', 'Valor Contratado', 'Status']}
          data={suppliersData}
        />

        <DataTable
          title="Equipe"
          headers={['Nome', 'Função', 'Especialização', 'Tempo no Projeto']}
          data={teamData}
        />
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton
        onExportPDF={handleExportPDF}
        onPrint={handlePrint}
      />
    </div>
  );
}