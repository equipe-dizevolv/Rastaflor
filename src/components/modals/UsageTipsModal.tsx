import { X, Info, Download } from 'lucide-react';

interface UsageTipsModalProps {
  isOpen: boolean;
  onClose: () => void;
  module: 'coleta' | 'restauracao';
}

export function UsageTipsModal({ isOpen, onClose, module }: UsageTipsModalProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');

  if (!isOpen) return null;

  const coletaSteps = [
    {
      number: 1,
      title: 'Cadastre as espécies',
      description: 'Se a espécie não estiver cadastrada, ela não aparecerá ao lançar atividades associadas.',
      hasNote: true
    },
    {
      number: 2,
      title: 'Cadastre as propriedades',
      description: '',
      hasNote: false
    },
    {
      number: 3,
      title: 'Cadastre as matrizes',
      description: 'Você pode importar as matrizes de uma tabela Excel. Baixe o modelo aqui.',
      hasNote: true,
      hasDownload: true
    },
    {
      number: 4,
      title: 'Lance as atividades de monitoramento e colheita',
      description: '',
      hasNote: false
    }
  ];

  const restauracaoSteps = [
    {
      number: 1,
      title: 'Cadastre um projeto',
      description: '',
      hasNote: false
    },
    {
      number: 2,
      title: 'Cadastre as propriedades',
      description: '',
      hasNote: false
    },
    {
      number: 3,
      title: 'Cadastre os fornecedores e financiadores',
      description: 'Você pode cadastrar diretamente nas páginas dentro do projeto ou na página de banco de dados',
      hasNote: true
    },
    {
      number: 4,
      title: 'Lance as atividades desse projeto',
      description: '',
      hasNote: false
    }
  ];

  const steps = module === 'coleta' ? coletaSteps : restauracaoSteps;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div
        className={`w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-[12px] shadow-xl ${
          isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white'
        }`}
      >
        {/* Header Verde Escuro */}
        <div className="bg-[#0F3D26] p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Info className="w-6 h-6 text-white" />
            <h2 className="text-white text-xl">Dicas de uso</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/10 rounded-lg p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 180px)' }}>
          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Siga o passo a passo para o bom uso da plataforma:
          </p>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`border rounded-[12px] p-4 ${
                  isDarkMode
                    ? 'border-[#3A3A3A] bg-[#1A1A1A]'
                    : 'border-[#E0E0E0] bg-[#F8F8F8]'
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0F3D26] text-white flex items-center justify-center">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`mb-1 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                      {step.title}
                    </h3>

                    {step.hasNote && step.description && (
                      <div
                        className={`mt-2 p-3 rounded-[8px] text-sm ${
                          isDarkMode
                            ? 'bg-blue-900/20 border border-blue-800/30'
                            : 'bg-blue-50 border border-blue-200'
                        }`}
                      >
                        <p className={`flex items-start gap-2 ${
                          isDarkMode ? 'text-blue-300' : 'text-blue-700'
                        }`}>
                          <span className="font-semibold">Obs:</span>
                          <span>{step.description}</span>
                        </p>

                        {step.hasDownload && (
                          <button
                            onClick={() => console.log('Download modelo Excel')}
                            className={`mt-2 flex items-center gap-2 px-3 py-1.5 rounded-[8px] text-sm transition-colors ${
                              isDarkMode
                                ? 'bg-blue-800/40 hover:bg-blue-800/60 text-blue-200'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                          >
                            <Download className="w-4 h-4" />
                            Baixar modelo
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Message */}
          <div
            className={`p-4 rounded-[12px] text-center ${
              isDarkMode
                ? 'bg-green-900/20 border border-green-800/30'
                : 'bg-green-50 border border-green-200'
            }`}
          >
            <p className={`text-sm ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>
              Seguindo essas etapas, você garantirá o melhor uso da plataforma.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`px-6 py-4 border-t flex justify-end ${
            isDarkMode ? 'border-[#3A3A3A] bg-[#2A2A2A]' : 'border-[#E0E0E0] bg-gray-50'
          }`}
        >
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0F3D26] text-white hover:bg-[#0F3D26]/90 rounded-[8px] transition-colors"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}
