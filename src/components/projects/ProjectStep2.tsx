import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { X } from 'lucide-react';

interface ProjectStep2Props {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
  isDarkMode: boolean;
}

export function ProjectStep2({ data, onNext, onBack, isDarkMode }: ProjectStep2Props) {
  const [selectedBank, setSelectedBank] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [financiers, setFinanciers] = useState<Array<{ bank: string; amount: string }>>(
    data.financiers || []
  );
  const [supplier, setSupplier] = useState(data.supplier || '');

  const handleAddInvestment = () => {
    if (selectedBank && investmentAmount) {
      setFinanciers([...financiers, { bank: selectedBank, amount: investmentAmount }]);
      setSelectedBank('');
      setInvestmentAmount('');
    }
  };

  const handleRemoveFinancier = (index: number) => {
    setFinanciers(financiers.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    onNext({ financiers, supplier });
  };

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2">
        <span className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>1. Informações do Projeto</span>
        <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>→</span>
        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>2. Financiamento</span>
        <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>→</span>
        <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>3. Revisão</span>
      </div>

      {/* Title */}
      <h2 className={`text-3xl text-center ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
        Financiamento e Fornecedores
      </h2>

      {/* Investment Section */}
      <div className="space-y-4">
        <h3 className={`text-xl ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>Investimento</h3>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>Selecione o Banco</Label>
            <div className="flex gap-4">
              <Select value={selectedBank} onValueChange={setSelectedBank}>
                <SelectTrigger className={`rounded-[6px] ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A] border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-[#1A1A1A]'
                }`}>
                  <SelectValue placeholder="Texto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="banco-do-brasil">Banco do Brasil</SelectItem>
                  <SelectItem value="caixa">Caixa Econômica Federal</SelectItem>
                  <SelectItem value="bradesco">Bradesco</SelectItem>
                  <SelectItem value="itau">Itaú</SelectItem>
                  <SelectItem value="santander">Santander</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-[#0f3d26] hover:bg-[#0f3d26]/90 text-white rounded-[6px] whitespace-nowrap">
                + Novo Financiador
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>Valor Investido (R$)</Label>
            <Input
              placeholder="Ex: 50.000,00"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
              className={`rounded-[6px] ${
                isDarkMode 
                  ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                  : 'bg-white border-gray-300 text-[#1A1A1A] placeholder:text-gray-400'
              }`}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleAddInvestment}
            className="bg-[#0f3d26] hover:bg-[#0f3d26]/90 text-white rounded-[6px]"
          >
            Adicionar Investimento
          </Button>
        </div>

        {/* Added Investments */}
        {financiers.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {financiers.map((financier, index) => (
              <div
                key={index}
                className={`rounded-full px-3 py-1 flex items-center gap-2 ${
                  isDarkMode ? 'bg-[#1A1A1A]' : 'bg-gray-100'
                }`}
              >
                <span className="text-[#2a7f62] text-sm">
                  {financier.bank}: R$ {financier.amount}
                </span>
                <button
                  onClick={() => handleRemoveFinancier(index)}
                  className={isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className={`border-t pt-8 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} />

      {/* Supplier Section */}
      <div className="space-y-4">
        <h3 className={`text-xl ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>Fornecedor Principal</h3>

        <div className="space-y-2">
          <Label className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>Selecione o Fornecedor</Label>
          <div className="flex items-center gap-4">
            <Select value={supplier} onValueChange={setSupplier}>
              <SelectTrigger className={`rounded-[6px] w-[250px] ${
                isDarkMode 
                  ? 'bg-[#1A1A1A] border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-[#1A1A1A]'
              }`}>
                <SelectValue placeholder="Selecione o fornecedor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ecoplantar">EcoPlantar</SelectItem>
                <SelectItem value="flora-nativa">Flora Nativa</SelectItem>
                <SelectItem value="verde-vida">Verde Vida</SelectItem>
              </SelectContent>
            </Select>
            <button className={`underline hover:no-underline ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              +Adicionar novo fornecedor
            </button>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 pt-4">
        <Button
          variant="outline"
          onClick={onBack}
          className={`flex-1 border-0 rounded-[6px] ${
            isDarkMode 
              ? 'bg-[#1A1A1A] hover:bg-[#1A1A1A]/80 text-white' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          Voltar
        </Button>
        <Button
          onClick={handleNext}
          className="flex-1 bg-[#0f3d26] hover:bg-[#0f3d26]/90 text-white rounded-[6px]"
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}