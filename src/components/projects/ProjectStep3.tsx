import { Button } from '../ui/button';

interface ProjectStep3Props {
  data: any;
  onBack: () => void;
  onCreate: () => void;
  onEdit: (step: number) => void;
  isDarkMode: boolean;
}

export function ProjectStep3({ data, onBack, onCreate, onEdit, isDarkMode }: ProjectStep3Props) {
  const getStageLabel = (stage: string) => {
    const stages: { [key: string]: string } = {
      'mobilizacao': 'Mobilização',
      'planejamento': 'Planejamento',
      'execucao': 'Execução',
      'monitoramento': 'Monitoramento'
    };
    return stages[stage] || stage;
  };

  const getBankLabel = (bank: string) => {
    const banks: { [key: string]: string } = {
      'banco-do-brasil': 'Banco do Brasil',
      'caixa': 'Caixa Econômica Federal',
      'bradesco': 'Bradesco',
      'itau': 'Itaú',
      'santander': 'Santander'
    };
    return banks[bank] || bank;
  };

  const getSupplierLabel = (supplier: string) => {
    const suppliers: { [key: string]: string } = {
      'ecoplantar': 'EcoPlantar',
      'flora-nativa': 'Flora Nativa',
      'verde-vida': 'Verde Vida'
    };
    return suppliers[supplier] || supplier;
  };

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2">
        <span className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>1. Informações do Projeto</span>
        <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>→</span>
        <span className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>2. Financiamento</span>
        <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>→</span>
        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>3. Revisão</span>
      </div>

      {/* Title */}
      <h2 className={`text-2xl ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
        Revise e Crie seu Projeto
      </h2>

      {/* Review Sections */}
      <div className="grid grid-cols-2 gap-6">
        {/* Project Details */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className={`text-xl ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>Detalhes do Projeto</h3>
            <button
              onClick={() => onEdit(1)}
              className={`text-sm underline hover:no-underline ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}
            >
              Editar
            </button>
          </div>

          <div className="space-y-4">
            <div className={`border-b pb-3 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="flex justify-between items-start">
                <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>Nome do Projeto</span>
                <span className={`text-right max-w-[200px] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  {data.name || '-'}
                </span>
              </div>
            </div>

            <div className={`border-b pb-3 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="flex justify-between items-start">
                <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>Tempo de Execução</span>
                <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  {data.executionMonths ? `${data.executionMonths} meses` : '-'}
                </span>
              </div>
            </div>

            <div className={`border-b pb-3 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="flex justify-between items-start">
                <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>Meta de Restauração</span>
                <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  {data.restorationGoal ? `${data.restorationGoal} hectares` : '-'}
                </span>
              </div>
            </div>

            <div className="py-3">
              <div className="flex justify-between items-start">
                <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>Etapa Inicial</span>
                <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  {getStageLabel(data.initialStage) || '-'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className={`text-xl ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>Parceiros</h3>
            <button
              onClick={() => onEdit(2)}
              className={`text-sm underline hover:no-underline ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}
            >
              Editar
            </button>
          </div>

          <div className="space-y-4">
            <div className={`border-b pb-3 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="flex justify-between items-start">
                <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>Investimentos</span>
                <div className="text-right">
                  {data.financiers && data.financiers.length > 0 ? (
                    data.financiers.map((f: any, i: number) => (
                      <div key={i}>
                        <div className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>{getBankLabel(f.bank)}</div>
                        <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>R$ {f.amount}</div>
                      </div>
                    ))
                  ) : (
                    <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>-</span>
                  )}
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="flex justify-between items-start">
                <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>Fornecedor</span>
                <span className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
                  {getSupplierLabel(data.supplier) || '-'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 pt-4">
        <Button
          variant="outline"
          onClick={onBack}
          className={`flex-1 border-0 rounded-[8px] ${
            isDarkMode 
              ? 'bg-[#1A1A1A] hover:bg-[#1A1A1A]/80 text-white' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
          }`}
        >
          Voltar
        </Button>
        <Button
          onClick={onCreate}
          className="flex-1 bg-[#0f3d26] hover:bg-[#0f3d26]/90 text-white rounded-[8px]"
        >
          Criar Projeto
        </Button>
      </div>
    </div>
  );
}