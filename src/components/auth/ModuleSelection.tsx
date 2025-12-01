import React from 'react';
import { Sprout, Leaf, Shield } from 'lucide-react';

interface ModuleSelectionProps {
  onSelectModule: (module: 'restauracao' | 'coleta' | 'admin') => void;
}

export function ModuleSelection({ onSelectModule }: ModuleSelectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2D5016] via-[#3D6B1F] to-[#4A7C26] p-4">
      <div className="w-full max-w-5xl">
        {/* Logo e Título */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sprout className="w-12 h-12 text-white" />
            <h1 className="text-white font-bold text-4xl">RastaFlor</h1>
          </div>
          <p className="text-white/90 text-lg">Selecione o módulo desejado</p>
        </div>

        {/* Cards de Módulos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Módulo de Restauração */}
          <button
            onClick={() => onSelectModule('restauracao')}
            className="bg-white/95 backdrop-blur rounded-[12px] p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2D5016] to-[#4A7C26] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sprout className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
                Restauração
              </h2>
              <p className="text-[#777777] text-sm">
                Gestão completa de projetos de restauração ambiental
              </p>
            </div>
          </button>

          {/* Módulo de Coleta */}
          <button
            onClick={() => onSelectModule('coleta')}
            className="bg-white/95 backdrop-blur rounded-[12px] p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2D5016] to-[#4A7C26] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
                Coleta
              </h2>
              <p className="text-[#777777] text-sm">
                Gerenciamento de coleta de sementes e matrizes
              </p>
            </div>
          </button>

          {/* Painel Admin */}
          <button
            onClick={() => onSelectModule('admin')}
            className="bg-white/95 backdrop-blur rounded-[12px] p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2D5016] to-[#4A7C26] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
                Admin
              </h2>
              <p className="text-[#777777] text-sm">
                Painel administrativo e gerenciamento de empresas
              </p>
            </div>
          </button>
        </div>

        {/* Rodapé */}
        <div className="text-center mt-8">
          <p className="text-white/70 text-sm">
            Plataforma B2B SaaS para Gestão de Restauração Ambiental
          </p>
        </div>
      </div>
    </div>
  );
}
