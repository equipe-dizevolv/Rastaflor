import { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '../ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import { 
  Eye, 
  Edit, 
  Trash2, 
  Download,
  FileText
} from 'lucide-react';

interface Invoice {
  id: string;
  number: string;
  supplier: string;
  date: string;
  fileName: string;
  total: number;
  category: string;
  financier?: string;
  observations?: string;
}

interface InvoiceTableProps {
  invoices: Invoice[];
  onDeleteInvoice: (invoiceId: string) => void;
  onEditInvoice: (invoice: Invoice) => void;
}

export function InvoiceTable({ invoices, onDeleteInvoice, onEditInvoice }: InvoiceTableProps) {
  const [deletingInvoiceId, setDeletingInvoiceId] = useState<string | null>(null);

  const handleViewInvoice = (invoice: Invoice) => {
    // Simular abertura do arquivo
    console.log('Viewing invoice:', invoice.fileName);
    // Em um sistema real, isso abriria o arquivo em uma nova aba ou modal
  };

  const handleEditInvoice = (invoice: Invoice) => {
    onEditInvoice(invoice);
  };

  const handleDownloadFile = (fileName: string) => {
    // Simular download do arquivo
    console.log('Downloading file:', fileName);
    // Em um sistema real, isso iniciaria o download do arquivo
  };

  const handleDeleteConfirm = () => {
    if (deletingInvoiceId) {
      onDeleteInvoice(deletingInvoiceId);
      setDeletingInvoiceId(null);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  if (invoices.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="w-12 h-12 text-secondary mx-auto mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">Nenhuma nota fiscal encontrada</h3>
        <p className="text-secondary">
          Clique em "Add nova" para cadastrar sua primeira nota fiscal.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-muted/50">
            <TableHead className="text-secondary">NF Número</TableHead>
            <TableHead className="text-secondary">Nome do Fornecedor</TableHead>
            <TableHead className="text-secondary">Data</TableHead>
            <TableHead className="text-secondary">Arquivo</TableHead>
            <TableHead className="text-secondary">Total da NF</TableHead>
            <TableHead className="text-secondary text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id} className="border-border hover:bg-muted/30">
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium text-foreground">{invoice.number}</div>
                  <Badge variant="secondary" className="text-xs">
                    {invoice.category}
                  </Badge>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium text-foreground">{invoice.supplier}</div>
                  {invoice.financier && (
                    <div className="text-sm text-secondary">
                      Financiador: {invoice.financier}
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-foreground">
                {formatDate(invoice.date)}
              </TableCell>
              <TableCell>
                <button
                  onClick={() => handleDownloadFile(invoice.fileName)}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm">{invoice.fileName}</span>
                </button>
              </TableCell>
              <TableCell className="font-medium text-foreground">
                {formatCurrency(invoice.total)}
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleViewInvoice(invoice)}
                    className="h-8 w-8 p-0 hover:bg-muted"
                    title="Visualizar"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEditInvoice(invoice)}
                    className="h-8 w-8 p-0 hover:bg-muted"
                    title="Editar"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setDeletingInvoiceId(invoice.id)}
                        className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                        title="Excluir"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-card border-border">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-foreground">
                          Confirmar exclusão
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-secondary">
                          Tem certeza que deseja excluir a nota fiscal <strong>{invoice.number}</strong>? 
                          Esta ação não pode ser desfeita.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel 
                          onClick={() => setDeletingInvoiceId(null)}
                          className="border-border text-foreground hover:bg-muted"
                        >
                          Cancelar
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleDeleteConfirm}
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                          Excluir
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}