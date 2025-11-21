import { useState } from 'react';
import { FileText, Calendar } from 'lucide-react';
import { Calendar as CalendarComponent } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface ReportConfig {
  reportType: 'institution' | 'collection';
  dateFrom: Date | undefined;
  dateTo: Date | undefined;
  sections: {
    matricesByProperty: boolean;
    matricesBySpecies: boolean;
    isolatedMatrices: boolean;
    monitoringList: boolean;
    collectionsByMember: boolean;
    collectionsBySpecies: boolean;
    speciesCatalog: boolean;
    phenologicalCalendar: boolean;
  };
}

interface RelatoriosColetaProps {
  onGenerateReport: (config: ReportConfig) => void;
}

export function RelatoriosColeta({ onGenerateReport }: RelatoriosColetaProps) {
  const [reportType, setReportType] = useState<'institution' | 'collection'>('institution');
  const [dateFrom, setDateFrom] = useState<Date | undefined>(undefined);
  const [dateTo, setDateTo] = useState<Date | undefined>(undefined);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  
  const [sections, setSections] = useState({
    matricesByProperty: true,
    matricesBySpecies: true,
    isolatedMatrices: true,
    monitoringList: true,
    collectionsByMember: false,
    collectionsBySpecies: false,
    speciesCatalog: false,
    phenologicalCalendar: false
  });

  const handleSectionToggle = (section: keyof typeof sections) => {
    setSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleLast30Days = () => {
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);
    setDateFrom(thirtyDaysAgo);
    setDateTo(today);
  };

  const handleMaximum = () => {
    // Define uma data antiga como "máximo histórico"
    const oldDate = new Date('2025-03-31');
    const today = new Date();
    setDateFrom(oldDate);
    setDateTo(today);
  };

  const handleGenerateReport = () => {
    onGenerateReport({
      reportType,
      dateFrom,
      dateTo,
      sections
    });
  };

  const formatDateRange = () => {
    if (!dateFrom && !dateTo) return 'Clique aqui para selecionar o intervalo';
    if (dateFrom && !dateTo) return format(dateFrom, 'dd/MM/yyyy', { locale: ptBR });
    if (!dateFrom && dateTo) return format(dateTo, 'dd/MM/yyyy', { locale: ptBR });
    return `${format(dateFrom!, 'dd/MM/yyyy', { locale: ptBR })} - ${format(dateTo!, 'dd/MM/yyyy', { locale: ptBR })}`;
  };

  return (
    <div className="px-6 pb-6 space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-[#1A1A1A] dark:text-white flex items-center gap-2">
          <FileText className="w-6 h-6 text-green-600" />
          Relatórios
        </h2>
        <p className="text-[#777777] dark:text-[#B0B0B0]">
          Selecione as opções abaixo para gerar seu documento
        </p>
      </div>

      {/* Configuration Card */}
      <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[12px] shadow-sm p-6 space-y-6">
        {/* Tipo de Relatório */}
        <div className="space-y-2">
          <label className="text-sm text-[#1A1A1A] dark:text-white">
            Tipo de Relatório <span className="text-red-600">*</span>
          </label>
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value as 'institution' | 'collection')}
            className="w-full h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          >
            <option value="institution">Relatório da Instituição</option>
            <option value="collection">Relatório de Coleta</option>
          </select>
        </div>

        {/* Período */}
        <div className="space-y-2">
          <label className="text-sm text-[#1A1A1A] dark:text-white">
            Período <span className="text-red-600">*</span>
          </label>
          
          <div className="flex gap-3">
            <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
              <PopoverTrigger asChild>
                <button className="flex-1 h-10 px-3 py-2 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] transition-colors text-left flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                  <span className={!dateFrom && !dateTo ? 'text-[#777777] dark:text-[#B0B0B0]' : ''}>
                    {formatDateRange()}
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div className="flex">
                  <div className="p-3 border-r border-[#E0E0E0] dark:border-border">
                    <p className="text-xs text-[#777777] dark:text-[#B0B0B0] mb-2">Data Inicial</p>
                    <CalendarComponent
                      mode="single"
                      selected={dateFrom}
                      onSelect={setDateFrom}
                      locale={ptBR}
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-[#777777] dark:text-[#B0B0B0] mb-2">Data Final</p>
                    <CalendarComponent
                      mode="single"
                      selected={dateTo}
                      onSelect={setDateTo}
                      locale={ptBR}
                    />
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <button
              onClick={handleLast30Days}
              className="px-4 py-2 bg-white dark:bg-transparent border border-[#E0E0E0] dark:border-border text-[#1A1A1A] dark:text-white rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] transition-colors text-sm whitespace-nowrap"
            >
              Últimos 30 dias
            </button>

            <button
              onClick={handleMaximum}
              className="px-4 py-2 bg-white dark:bg-transparent border border-[#E0E0E0] dark:border-border text-[#1A1A1A] dark:text-white rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] transition-colors text-sm whitespace-nowrap"
            >
              Máximo
            </button>
          </div>
        </div>

        {/* Seções do Relatório */}
        <div className="space-y-3">
          <label className="text-sm text-[#1A1A1A] dark:text-white">
            Seções do Relatório
          </label>
          
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer p-2 rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors">
              <input
                type="checkbox"
                checked={sections.matricesByProperty}
                onChange={() => handleSectionToggle('matricesByProperty')}
                className="w-4 h-4 rounded border-[#E0E0E0] dark:border-border text-primary focus:ring-2 focus:ring-green-600"
              />
              <span className="text-sm text-[#1A1A1A] dark:text-white">
                Lista de Matrizes por Propriedade
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-2 rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors">
              <input
                type="checkbox"
                checked={sections.matricesBySpecies}
                onChange={() => handleSectionToggle('matricesBySpecies')}
                className="w-4 h-4 rounded border-[#E0E0E0] dark:border-border text-primary focus:ring-2 focus:ring-green-600"
              />
              <span className="text-sm text-[#1A1A1A] dark:text-white">
                Lista de Matrizes por Espécie
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-2 rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors">
              <input
                type="checkbox"
                checked={sections.isolatedMatrices}
                onChange={() => handleSectionToggle('isolatedMatrices')}
                className="w-4 h-4 rounded border-[#E0E0E0] dark:border-border text-primary focus:ring-2 focus:ring-green-600"
              />
              <span className="text-sm text-[#1A1A1A] dark:text-white">
                Lista de Matrizes Isoladas
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-2 rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors">
              <input
                type="checkbox"
                checked={sections.monitoringList}
                onChange={() => handleSectionToggle('monitoringList')}
                className="w-4 h-4 rounded border-[#E0E0E0] dark:border-border text-primary focus:ring-2 focus:ring-green-600"
              />
              <span className="text-sm text-[#1A1A1A] dark:text-white">
                Lista de Monitoramentos
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-2 rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors">
              <input
                type="checkbox"
                checked={sections.collectionsByMember}
                onChange={() => handleSectionToggle('collectionsByMember')}
                className="w-4 h-4 rounded border-[#E0E0E0] dark:border-border text-primary focus:ring-2 focus:ring-green-600"
              />
              <span className="text-sm text-[#1A1A1A] dark:text-white">
                Lista de Coletas por Membro
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-2 rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors">
              <input
                type="checkbox"
                checked={sections.collectionsBySpecies}
                onChange={() => handleSectionToggle('collectionsBySpecies')}
                className="w-4 h-4 rounded border-[#E0E0E0] dark:border-border text-primary focus:ring-2 focus:ring-green-600"
              />
              <span className="text-sm text-[#1A1A1A] dark:text-white">
                Lista de Coletas por Espécie
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-2 rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors">
              <input
                type="checkbox"
                checked={sections.speciesCatalog}
                onChange={() => handleSectionToggle('speciesCatalog')}
                className="w-4 h-4 rounded border-[#E0E0E0] dark:border-border text-primary focus:ring-2 focus:ring-green-600"
              />
              <span className="text-sm text-[#1A1A1A] dark:text-white">
                Catálogo de espécies
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-2 rounded-[8px] hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors">
              <input
                type="checkbox"
                checked={sections.phenologicalCalendar}
                onChange={() => handleSectionToggle('phenologicalCalendar')}
                className="w-4 h-4 rounded border-[#E0E0E0] dark:border-border text-primary focus:ring-2 focus:ring-green-600"
              />
              <span className="text-sm text-[#1A1A1A] dark:text-white">
                Calendário Fenológico das Espécies
              </span>
            </label>
          </div>
        </div>

        {/* Footer com Botão */}
        <div className="flex justify-end pt-4 border-t border-[#E0E0E0] dark:border-border">
          <button
            onClick={handleGenerateReport}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-[12px] hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            <FileText className="w-5 h-5" />
            <span>Gerar Relatório</span>
          </button>
        </div>
      </div>
    </div>
  );
}
