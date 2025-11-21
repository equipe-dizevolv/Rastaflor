import { useState } from 'react';
import { RotulosPage } from './RotulosPage';
import { RotulosVisualizacao } from './RotulosVisualizacao';

interface LabelItem {
  id: string;
  lote: string;
  species: string;
  collectionDate: string;
  weight: string;
  copies: number;
}

export function Rotulos() {
  const [currentView, setCurrentView] = useState<'config' | 'visualization'>('config');
  const [labelItems, setLabelItems] = useState<LabelItem[]>([]);

  const handleGenerateLabels = (items: LabelItem[]) => {
    setLabelItems(items);
    setCurrentView('visualization');
  };

  const handleBack = () => {
    setCurrentView('config');
  };

  if (currentView === 'visualization') {
    return <RotulosVisualizacao onBack={handleBack} items={labelItems} />;
  }

  return <RotulosPage onGenerateLabels={handleGenerateLabels} />;
}
