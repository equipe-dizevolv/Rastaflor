import { Button } from '../ui/button';
import { FileDown, Printer } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface FloatingActionButtonProps {
  onExportPDF: () => void;
  onPrint: () => void;
}

export function FloatingActionButton({ onExportPDF, onPrint }: FloatingActionButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 print:hidden">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onExportPDF}
              size="lg"
              className="w-14 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            >
              <FileDown className="w-6 h-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Salvar PDF</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onPrint}
              variant="outline"
              size="lg"
              className="w-14 h-14 rounded-full border-border bg-card hover:bg-muted shadow-lg"
            >
              <Printer className="w-6 h-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Imprimir</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}