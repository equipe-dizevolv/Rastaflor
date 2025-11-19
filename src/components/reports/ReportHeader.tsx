import { useState } from 'react';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface ReportHeaderProps {
  projectName: string;
  dateRange: {
    from: Date;
    to: Date;
  };
  onDateRangeChange: (range: { from: Date; to: Date }) => void;
}

export function ReportHeader({ projectName, dateRange, onDateRangeChange }: ReportHeaderProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm print:border-0 print:shadow-none">
      <div className="flex items-start justify-between print:block">
        <div className="space-y-2">
          <h1 className="text-foreground">Relatório do Projeto</h1>
          <h2 className="text-primary">{projectName}</h2>
        </div>
        
        <div className="flex items-center gap-3 print:hidden">
          <span className="text-secondary text-sm">Período:</span>
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-auto justify-start text-left border-border hover:bg-muted"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {format(dateRange.from, 'dd/MM/yyyy', { locale: ptBR })} - {format(dateRange.to, 'dd/MM/yyyy', { locale: ptBR })}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="range"
                selected={{ from: dateRange.from, to: dateRange.to }}
                onSelect={(range) => {
                  if (range?.from && range?.to) {
                    onDateRangeChange({ from: range.from, to: range.to });
                    setIsCalendarOpen(false);
                  }
                }}
                numberOfMonths={2}
                locale={ptBR}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="hidden print:block text-sm text-secondary mt-4">
          Período: {format(dateRange.from, 'dd/MM/yyyy', { locale: ptBR })} - {format(dateRange.to, 'dd/MM/yyyy', { locale: ptBR })}
        </div>
      </div>
    </div>
  );
}