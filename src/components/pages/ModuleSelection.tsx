import rastaFlorLogo from 'figma:asset/9c14cc3ff4bd6d87486f75d6184b5bc3e4d36350.png';
import { Sprout, Trees, Settings } from 'lucide-react';

interface ModuleSelectionProps {
  onSelectModule: (module: 'coleta' | 'restauracao' | 'admin') => void;
}

export function ModuleSelection({ onSelectModule }: ModuleSelectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: '#14442B' }}>
      <div className="w-full max-w-6xl">
        {/* Logo e Título */}
        <div className="text-center mb-12">
          <img
            src={rastaFlorLogo}
            alt="RastaFlor Logo"
            className="h-24 w-auto mx-auto mb-6"
          />
          <h1 className="text-white mb-2">Bem-vindo ao RastaFlor</h1>
          <p className="text-white/70">Selecione o módulo que deseja acessar</p>
        </div>

        {/* Cards de Seleção */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Módulo de Coleta */}
          <button
            onClick={() => onSelectModule('coleta')}
            className="bg-white rounded-[12px] p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-left group"
          >
            <div className="w-16 h-16 rounded-[12px] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#0F3D26' }}>
              <Sprout className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-[#1A1A1A] mb-2">Módulo de Coleta</h3>
            <p className="text-[#777777]">
              Gerencie propriedades, espécies, coletas e monitoramentos de sementes
            </p>
          </button>

          {/* Módulo de Restauração */}
          <button
            onClick={() => onSelectModule('restauracao')}
            className="bg-white rounded-[12px] p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-left group"
          >
            <div className="w-16 h-16 rounded-[12px] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#0F3D26' }}>
              <Trees className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-[#1A1A1A] mb-2">Módulo de Restauração</h3>
            <p className="text-[#777777]">
              Controle projetos de restauração, plantios e manutenção de áreas
            </p>
          </button>

          {/* Painel Admin */}
          <button
            onClick={() => onSelectModule('admin')}
            className="bg-white rounded-[12px] p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-left group"
          >
            <div className="w-16 h-16 rounded-[12px] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border-2" style={{ borderColor: '#0F3D26' }}>
              <Settings className="w-8 h-8" style={{ color: '#0F3D26' }} />
            </div>
            <h3 className="text-[#1A1A1A] mb-2">Painel Admin</h3>
            <p className="text-[#777777]">
              Acesse configurações, usuários e administração da plataforma
            </p>
          </button>
        </div>

        {/* Rodapé */}
        <div className="text-center mt-12">
          <p className="text-white/60">
            Precisa de acesso a todos os módulos?{' '}
            <button className="text-white hover:underline font-medium">
              Entre em contato
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}