import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  X, 
  Upload, 
  FileText, 
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

interface CreateInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (invoiceData: Omit<Invoice, 'id'>) => void;
}

export function CreateInvoiceModal({ isOpen, onClose, onSave }: CreateInvoiceModalProps) {
  const [formData, setFormData] = useState({
    number: '',
    category: '',
    financier: '',
    supplier: '',
    date: '',
    total: '',
    observations: ''
  });
  
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const categories = [
    'Mudas e Sementes',
    'Equipamentos',
    'Transporte e Logística',
    'Serviços Especializados',
    'Materiais de Construção',
    'Consultoria Técnica',
    'Outros'
  ];

  const financiers = [
    'Instituto Chico Mendes',
    'BNDES',
    'Fundação Amazônia Sustentável',
    'Ministério do Meio Ambiente',
    'Banco Mundial',
    'Outros'
  ];

  const suppliers = [
    'Viveiro Amazônia Verde Ltda',
    'Transportadora Rural Norte',
    'Equipamentos Florestais Ltda',
    'Sementes do Brasil S.A.',
    'Construtora Eco Tech',
    'Consultoria Ambiental Norte'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.number || !formData.category || !formData.date || !formData.total || !uploadedFile) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const invoiceData = {
      number: formData.number,
      supplier: formData.supplier,
      date: formData.date,
      fileName: uploadedFile.name,
      total: parseFloat(formData.total.replace(/[^\d,]/g, '').replace(',', '.')),
      category: formData.category,
      financier: formData.financier || undefined,
      observations: formData.observations || undefined
    };

    onSave(invoiceData);
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      number: '',
      category: '',
      financier: '',
      supplier: '',
      date: '',
      total: '',
      observations: ''
    });
    setUploadedFile(null);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const handleFileUpload = (file: File) => {
    if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
      setUploadedFile(file);
    } else {
      alert('Por favor, selecione apenas arquivos PDF ou imagens.');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^\d]/g, '');
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    }).format(parseFloat(numericValue) / 100 || 0);
    return formattedValue;
  };

  const handleValueChange = (value: string) => {
    const formatted = formatCurrency(value);
    setFormData(prev => ({ ...prev, total: formatted }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-card border-border max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-foreground">Cadastrar Nota Fiscal</DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="h-8 w-8 p-0 hover:bg-muted"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <DialogDescription className="text-sm text-muted-foreground">
            Preencha os campos abaixo para cadastrar uma nova nota fiscal.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Número da Nota Fiscal */}
            <div className="space-y-2">
              <Label htmlFor="number" className="flex items-center gap-1">
                Número da Nota Fiscal
                <span className="text-destructive">*</span>
              </Label>
              <Input
                id="number"
                value={formData.number}
                onChange={(e) => setFormData(prev => ({ ...prev, number: e.target.value }))}
                className="bg-input border-border focus:border-primary"
                placeholder="Ex: NF-2024-001"
                required
              />
            </div>

            {/* Categoria */}
            <div className="space-y-2">
              <Label htmlFor="category" className="flex items-center gap-1">
                Categoria da Nota
                <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                required
              >
                <SelectTrigger className="bg-input border-border focus:border-primary">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Financiador */}
            <div className="space-y-2">
              <Label htmlFor="financier">Financiador</Label>
              <Select
                value={formData.financier}
                onValueChange={(value) => setFormData(prev => ({ ...prev, financier: value }))}
              >
                <SelectTrigger className="bg-input border-border focus:border-primary">
                  <SelectValue placeholder="Selecione um financiador" />
                </SelectTrigger>
                <SelectContent>
                  {financiers.map((financier) => (
                    <SelectItem key={financier} value={financier}>
                      {financier}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <button
                type="button"
                className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" />
                Deseja criar um novo Financiador? Clique aqui
              </button>
            </div>

            {/* Fornecedor */}
            <div className="space-y-2">
              <Label htmlFor="supplier">Fornecedor</Label>
              <Select
                value={formData.supplier}
                onValueChange={(value) => setFormData(prev => ({ ...prev, supplier: value }))}
              >
                <SelectTrigger className="bg-input border-border focus:border-primary">
                  <SelectValue placeholder="Selecione um fornecedor" />
                </SelectTrigger>
                <SelectContent>
                  {suppliers.map((supplier) => (
                    <SelectItem key={supplier} value={supplier}>
                      {supplier}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <button
                type="button"
                className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" />
                Deseja criar um novo Fornecedor? Clique aqui
              </button>
            </div>

            {/* Data da Nota */}
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-1">
                Data da Nota
                <span className="text-destructive">*</span>
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                className="bg-input border-border focus:border-primary"
                required
              />
            </div>

            {/* Valor */}
            <div className="space-y-2">
              <Label htmlFor="total" className="flex items-center gap-1">
                Valor
                <span className="text-destructive">*</span>
              </Label>
              <Input
                id="total"
                value={formData.total}
                onChange={(e) => handleValueChange(e.target.value)}
                className="bg-input border-border focus:border-primary"
                placeholder="R$ 0,00"
                required
              />
            </div>
          </div>

          {/* Upload de Arquivo */}
          <div className="space-y-2">
            <Label className="flex items-center gap-1">
              Anexe a nota fiscal como comprovante
              <span className="text-destructive">*</span>
            </Label>
            <Card 
              className={`border-2 border-dashed transition-colors ${
                dragOver 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border hover:border-primary/50'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <CardContent className="p-6">
                {uploadedFile ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-8 h-8 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{uploadedFile.name}</p>
                        <p className="text-sm text-secondary">
                          {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setUploadedFile(null)}
                      className="text-destructive hover:text-destructive/80"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <div className="space-y-2">
                      <p className="text-foreground">
                        Arraste e solte o arquivo aqui ou{' '}
                        <label htmlFor="file-upload" className="text-primary cursor-pointer hover:text-primary/80">
                          clique para selecionar
                        </label>
                      </p>
                      <p className="text-sm text-secondary">
                        Formatos aceitos: PDF, JPG, PNG (Máx. 10MB)
                      </p>
                    </div>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".pdf,image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(file);
                      }}
                      className="sr-only"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Observações */}
          <div className="space-y-2">
            <Label htmlFor="observations">Observação</Label>
            <Textarea
              id="observations"
              value={formData.observations}
              onChange={(e) => setFormData(prev => ({ ...prev, observations: e.target.value }))}
              className="bg-input border-border focus:border-primary min-h-[100px]"
              placeholder="Informações adicionais sobre a nota fiscal..."
            />
          </div>

          {/* Footer */}
          <div className="flex justify-end pt-4">
            <Button 
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Criar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}