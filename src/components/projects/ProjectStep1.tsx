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

interface ProjectStep1Props {
  data: any;
  onNext: (data: any) => void;
  onCancel: () => void;
  isDarkMode: boolean;
}

export function ProjectStep1({ data, onNext, onCancel, isDarkMode }: ProjectStep1Props) {
  const [formData, setFormData] = useState({
    name: data.name || '',
    executionMonths: data.executionMonths || '',
    restorationGoal: data.restorationGoal || '',
    initialStage: data.initialStage || ''
  });

  const handleNext = () => {
    onNext(formData);
  };

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2">
        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>1. Informações do Projeto</span>
        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>→</span>
        <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>2. Financiamento</span>
        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>→</span>
        <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>3. Revisão</span>
      </div>

      {/* Title */}
      <h2 className={`text-2xl text-center ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
        Informações Essenciais do Projeto
      </h2>

      {/* Form */}
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
            Nome do Projeto *
          </Label>
          <Input
            id="name"
            placeholder="Nome do projeto"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`rounded-[6px] ${
              isDarkMode 
                ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                : 'bg-white border-gray-300 text-[#1A1A1A] placeholder:text-gray-400'
            }`}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="executionMonths" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
            Tempo de execução em meses *
          </Label>
          <Input
            id="executionMonths"
            type="number"
            placeholder="Tempo de execução em meses *"
            value={formData.executionMonths}
            onChange={(e) => setFormData({ ...formData, executionMonths: e.target.value })}
            className={`rounded-[6px] ${
              isDarkMode 
                ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                : 'bg-white border-gray-300 text-[#1A1A1A] placeholder:text-gray-400'
            }`}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="restorationGoal" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
            Meta de restauração (em hectares) *
          </Label>
          <Input
            id="restorationGoal"
            type="number"
            placeholder="Meta de restauração (em hectares) *"
            value={formData.restorationGoal}
            onChange={(e) => setFormData({ ...formData, restorationGoal: e.target.value })}
            className={`rounded-[6px] ${
              isDarkMode 
                ? 'bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-500' 
                : 'bg-white border-gray-300 text-[#1A1A1A] placeholder:text-gray-400'
            }`}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="initialStage" className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
            Etapa inicial do projeto *
          </Label>
          <Select
            value={formData.initialStage}
            onValueChange={(value) => setFormData({ ...formData, initialStage: value })}
          >
            <SelectTrigger className={`rounded-[6px] ${
              isDarkMode 
                ? 'bg-[#1A1A1A] border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-[#1A1A1A]'
            }`}>
              <SelectValue placeholder="Selecione uma etapa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mobilizacao">Mobilização</SelectItem>
              <SelectItem value="planejamento">Planejamento</SelectItem>
              <SelectItem value="execucao">Execução</SelectItem>
              <SelectItem value="monitoramento">Monitoramento</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 pt-6">
        <Button
          variant="outline"
          onClick={onCancel}
          className={`flex-1 border-0 rounded-[6px] ${
            isDarkMode 
              ? 'bg-[#1A1A1A] hover:bg-[#1A1A1A]/80 text-white' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          Cancelar
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