import { Button } from '../ui/button';
import { Download, Edit, Trash2 } from 'lucide-react';

interface Contract {
  id: string;
  name: string;
  createdBy: string;
  date: string;
  fileName: string;
}

interface ContractTableProps {
  contracts: Contract[];
  onDownload: (contractId: string) => void;
  onEdit: (contractId: string) => void;
  onDelete: (contractId: string) => void;
}

export function ContractTable({ contracts, onDownload, onEdit, onDelete }: ContractTableProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="text-left py-3 px-4 font-medium text-foreground">Nome do Contrato</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Criado Por</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Data</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Arquivo</th>
              <th className="text-left py-3 px-4 font-medium text-foreground">Ações</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract) => (
              <tr 
                key={contract.id} 
                className="border-b border-border last:border-b-0 hover:bg-muted/20 transition-colors"
              >
                <td className="py-3 px-4 text-foreground font-medium">{contract.name}</td>
                <td className="py-3 px-4 text-secondary">{contract.createdBy}</td>
                <td className="py-3 px-4 text-secondary">{contract.date}</td>
                <td className="py-3 px-4 text-secondary">{contract.fileName}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onDownload(contract.id)}
                      className="h-8 w-8 p-0 text-secondary hover:text-primary hover:bg-muted"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEdit(contract.id)}
                      className="h-8 w-8 p-0 text-secondary hover:text-primary hover:bg-muted"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onDelete(contract.id)}
                      className="h-8 w-8 p-0 text-secondary hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}