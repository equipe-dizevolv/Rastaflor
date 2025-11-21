import { useState } from 'react';
import { MonitoramentosPage } from './MonitoramentosPage';
import { MonitoramentoVisualizacao } from './MonitoramentoVisualizacao';

interface MonitoringConfig {
  viewType: 'monitored-matrices' | 'history-by-species';
  dateFrom: Date | undefined;
  dateTo: Date | undefined;
  filters: {
    showFlowering: boolean;
    showFruiting: boolean;
    onlyIsolated: boolean;
    onlyCollectionSites: boolean;
  };
}

export function Monitoramentos() {
  const [currentView, setCurrentView] = useState<'config' | 'visualization'>('config');
  const [monitoringConfig, setMonitoringConfig] = useState<MonitoringConfig | null>(null);

  const handleGenerateView = (config: MonitoringConfig) => {
    setMonitoringConfig(config);
    setCurrentView('visualization');
  };

  const handleBack = () => {
    setCurrentView('config');
  };

  if (currentView === 'visualization') {
    return <MonitoramentoVisualizacao onBack={handleBack} />;
  }

  return <MonitoramentosPage onGenerateView={handleGenerateView} />;
}
