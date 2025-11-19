import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { InvoiceTable } from '../invoices/InvoiceTable';
import { CreateInvoiceModal } from '../invoices/CreateInvoiceModal';
import { 
  Plus, 
  Download,
  ExternalLink
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

export function Invoices() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: '1',
      number: 'NF-2024-001',
      supplier: 'Viveiro Amazônia Verde Ltda',
      date: '2024-03-15',
      fileName: 'nota_fiscal_001.pdf',
      total: 4234.00,
      category: 'Mudas e Sementes',
      financier: 'Instituto Chico Mendes',
      observations: 'Entrega programada para março'
    },
    {
      id: '2',
      number: 'NF-2024-002',
      supplier: 'Transportadora Rural Norte',
      date: '2024-03-18',
      fileName: 'nota_fiscal_002.pdf',
      total: 1850.50,
      category: 'Transporte e Logística',
      financier: 'BNDES',
      observations: ''
    },
    {
      id: '3',
      number: 'NF-2024-003',
      supplier: 'Equipamentos Florestais Ltda',
      date: '2024-03-20',
      fileName: 'nota_fiscal_003.pdf',
      total: 8750.00,
      category: 'Equipamentos',
      observations: 'Garantia de 2 anos'
    }
  ]);

  const handleCreateInvoice = (invoiceData: Omit<Invoice, 'id'>) => {
    const newInvoice: Invoice = {
      ...invoiceData,
      id: Date.now().toString()
    };
    setInvoices(prev => [newInvoice, ...prev]);
    setIsCreateModalOpen(false);
  };

  const handleDeleteInvoice = (invoiceId: string) => {
    setInvoices(prev => prev.filter(invoice => invoice.id !== invoiceId));
  };

  const totalInvoices = invoices.length;
  const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.total, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-secondary mb-2">
            <button className="hover:text-primary transition-colors flex items-center gap-1">
              <ExternalLink className="w-4 h-4" />
              Ver página do projeto
            </button>
          </div>
          <h1 className="text-foreground">Gestão de Notas Fiscais</h1>
          <p className="text-secondary">
            Gerencie as notas fiscais do projeto: ReFlorestar PA-370 (Trecho 2)
          </p>
        </div>
        
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Download className="w-4 h-4 mr-2" />
          Receber notas fiscais
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card border-border shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-secondary">Total de Notas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-foreground">{totalInvoices}</div>
            <p className="text-sm text-secondary mt-1">Notas fiscais registradas</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-secondary">Valor Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-foreground">
              {new Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL' 
              }).format(totalAmount)}
            </div>
            <p className="text-sm text-secondary mt-1">Soma de todas as notas</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-secondary">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="default" className="bg-primary text-primary-foreground">
              Ativo
            </Badge>
            <p className="text-sm text-secondary mt-2">Sistema operacional</p>
          </CardContent>
        </Card>
      </div>

      {/* Invoices Section */}
      <Card className="bg-card border-border shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-foreground">Notas Fiscais</CardTitle>
            <Button 
              onClick={() => setIsCreateModalOpen(true)}
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add nova
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <InvoiceTable 
            invoices={invoices} 
            onDeleteInvoice={handleDeleteInvoice}
          />
        </CardContent>
      </Card>

      {/* Create Invoice Modal */}
      <CreateInvoiceModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleCreateInvoice}
      />
    </div>
  );
}