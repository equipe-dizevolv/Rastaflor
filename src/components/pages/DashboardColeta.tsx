import { useState } from 'react';
import { Lightbulb, Leaf, Sprout, Package, Calendar, Plus, MapPin } from 'lucide-react';
import { AddSpeciesModal } from '../species/AddSpeciesModal';
import { AddMatrixModal } from '../matrices/AddMatrixModal';

export function DashboardColeta() {
  const currentMonth = 'Outubro';
  const [isAddSpeciesModalOpen, setIsAddSpeciesModalOpen] = useState(false);
  const [isAddMatrixModalOpen, setIsAddMatrixModalOpen] = useState(false);
  const [matrixCategory, setMatrixCategory] = useState<'florescendo' | 'frutificando' | 'coletadas'>('florescendo');
  
  const handleSaveSpecies = (speciesData: any) => {
    console.log('Nova espécie cadastrada:', speciesData);
    // Aqui você salvaria os dados no backend
  };

  const handleSaveMatrix = (matrixData: any) => {
    console.log('Nova matriz cadastrada:', matrixData);
    // Aqui você salvaria os dados no backend
  };

  const handleOpenMatrixModal = (category: 'florescendo' | 'frutificando' | 'coletadas') => {
    setMatrixCategory(category);
    setIsAddMatrixModalOpen(true);
  };
  
  const kpiData = [
    {
      icon: Leaf,
      title: 'Total de árvores matrizes',
      value: '87',
      color: '#16A34A'
    },
    {
      icon: Sprout,
      title: 'Espécies cadastradas (Total)',
      value: '23',
      color: '#16A34A'
    },
    {
      icon: Package,
      title: 'Sementes colhidas (Total)',
      value: '42 kg',
      subtitle: 'Este mês: 8.5 kg',
      color: '#16A34A'
    },
    {
      icon: Calendar,
      title: 'Coletas realizadas',
      value: '156',
      subtitle: 'Este mês: 24 coletas',
      color: '#16A34A'
    }
  ];

  const florescendoEspecies = [
    { comum: 'Ipê-amarelo', cientifico: 'Handroanthus chrysotrichus' },
    { comum: '', cientifico: 'Cedrela fissilis' },
    { comum: 'Peroba-rosa', cientifico: 'Aspidosperma polyneuron' }
  ];

  const frutificandoEspecies = [
    { comum: 'Pau-marfim', cientifico: 'Balfourodendron riedelianum' },
    { comum: 'Jequitibá-rosa', cientifico: 'Cariniana legalis' }
  ];

  const coletadasEspecies = [
    { comum: 'Aroeira-pimenteira', cientifico: 'Schinus terebinthifolius' },
    { comum: 'Ipê-amarelo', cientifico: 'Handroanthus chrysotrichus' }
  ];

  const florescendoMatrizes = [
    { id: 'IPE-00001-F24', especie: 'Ipê-amarelo', coordenadas: '23°45\'12.5"S 46°38\'25.1"W' },
    { id: 'PER-00007-F11', especie: 'Peroba-rosa', coordenadas: '23°45\'13.2"S 46°38\'26.8"W' },
    { id: 'IPE-00003-F24', especie: 'Ipê-amarelo', coordenadas: '23°45\'14.1"S 46°38\'27.5"W' }
  ];

  const frutificandoMatrizes = [
    { id: 'PAU-00002-F08', especie: 'Pau-marfim', coordenadas: '23°45\'15.3"S 46°38\'28.2"W' },
    { id: 'JEQ-00005-F15', especie: 'Jequitibá-rosa', coordenadas: '23°45\'16.0"S 46°38\'29.1"W' }
  ];

  const coletadasMatrizes = [
    { id: 'ARO-00009-F19', especie: 'Aroeira-pimenteira', coordenadas: '23°45\'17.2"S 46°38\'30.5"W' },
    { id: 'IPE-00001-F24', especie: 'Ipê-amarelo', coordenadas: '23°45\'12.5"S 46°38\'25.1"W' }
  ];

  return (
    <div className="px-6 pb-6 space-y-6">
      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[12px] p-6 shadow-sm"
            >
              <div className="flex items-start gap-3 mb-8">
                <Icon className="w-5 h-5 shrink-0" style={{ color: kpi.color }} />
                <h3 className="text-[#1A1A1A] dark:text-white">{kpi.title}</h3>
              </div>
              <div className="space-y-2">
                <p className="text-[#1A1A1A] dark:text-white text-[48px] leading-[48px]">{kpi.value}</p>
                {kpi.subtitle && (
                  <p className="text-[#777777] dark:text-[#B0B0B0]">{kpi.subtitle}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Calendário Mensal das Espécies */}
      <div className="bg-white dark:bg-card border border-[#E0E0E0] dark:border-border rounded-[12px] p-6 shadow-sm">
        <div className="mb-8">
          <h2 className="text-[#1A1A1A] dark:text-white mb-1">
            Calendário Mensal das Espécies - <span className="text-green-600">{currentMonth}</span>
          </h2>
          <p className="text-[#777777] dark:text-[#B0B0B0] text-sm">
            Espécies em diferentes estágios fenológicos neste mês
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Florescendo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0)">
                    <path d="M10 2.5C10 2.5 7.5 5 7.5 7.5C7.5 8.163 7.76339 8.79893 8.23223 9.26777C8.70107 9.73661 9.33696 10 10 10C10.663 10 11.2989 9.73661 11.7678 9.26777C12.2366 8.79893 12.5 8.163 12.5 7.5C12.5 5 10 2.5 10 2.5Z" stroke="#FCD34D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 10V18.3333" stroke="#FCD34D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 12.5C7.5 12.5 5 12.5 5 15C5 15.663 5.26339 16.2989 5.73223 16.7678C6.20107 17.2366 6.83696 17.5 7.5 17.5C8.163 17.5 8.79893 17.2366 9.26777 16.7678C9.73661 16.2989 10 15.663 10 15" stroke="#FCD34D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5 12.5C12.5 12.5 15 12.5 15 15C15 15.663 14.7366 16.2989 14.2678 16.7678C13.7989 17.2366 13.163 17.5 12.5 17.5C11.837 17.5 11.2011 17.2366 10.7322 16.7678C10.2634 16.2989 10 15.663 10 15" stroke="#FCD34D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-[#1A1A1A] dark:text-white">Florescendo</h3>
            </div>
            
            <div className="space-y-3">
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px] px-4 py-2 flex items-center justify-center gap-2 transition-colors" onClick={() => setIsAddSpeciesModalOpen(true)}>
                <Plus className="w-4 h-4" />
                <span className="text-sm">Adicionar Espécie</span>
              </button>
              
              {florescendoEspecies.map((especie, index) => (
                <div
                  key={index}
                  className="bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[12px] p-3"
                >
                  {especie.comum && (
                    <p className="text-[#1A1A1A] dark:text-white mb-1">{especie.comum}</p>
                  )}
                  <p className="text-[#777777] dark:text-[#B0B0B0] text-sm italic">
                    {especie.cientifico}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Frutificando */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <g>
                    <path d="M10 2.5C10 2.5 7.5 5 7.5 7.5C7.5 8.163 7.76339 8.79893 8.23223 9.26777C8.70107 9.73661 9.33696 10 10 10C10.663 10 11.2989 9.73661 11.7678 9.26777C12.2366 8.79893 12.5 8.163 12.5 7.5C12.5 5 10 2.5 10 2.5Z" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 10V18.3333" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.16667 17.5H15.8333" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </svg>
              </div>
              <h3 className="text-[#1A1A1A] dark:text-white">Frutificando</h3>
            </div>
            
            <div className="space-y-3">
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px] px-4 py-2 flex items-center justify-center gap-2 transition-colors" onClick={() => setIsAddSpeciesModalOpen(true)}>
                <Plus className="w-4 h-4" />
                <span className="text-sm">Adicionar Coleta</span>
              </button>
              
              {frutificandoEspecies.map((especie, index) => (
                <div
                  key={index}
                  className="bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[12px] p-3"
                >
                  {especie.comum && (
                    <p className="text-[#1A1A1A] dark:text-white mb-1">{especie.comum}</p>
                  )}
                  <p className="text-[#777777] dark:text-[#B0B0B0] text-sm italic">
                    {especie.cientifico}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Coletadas */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip1)">
                    <path d="M5.83333 7.5H14.1667C15.5474 7.5 16.6667 8.61929 16.6667 10V15C16.6667 16.3807 15.5474 17.5 14.1667 17.5H5.83333C4.45262 17.5 3.33333 16.3807 3.33333 15V10C3.33333 8.61929 4.45262 7.5 5.83333 7.5Z" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 13.75C10.6904 13.75 11.25 13.1904 11.25 12.5C11.25 11.8096 10.6904 11.25 10 11.25C9.30964 11.25 8.75 11.8096 8.75 12.5C8.75 13.1904 9.30964 13.75 10 13.75Z" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.66667 9.16667H18.3333" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.83333 7.5V5.83333C5.83333 5.17029 6.09672 4.53441 6.56556 4.06557C7.03441 3.59672 7.67029 3.33333 8.33333 3.33333H11.6667C12.3297 3.33333 12.9656 3.59672 13.4344 4.06557C13.9033 4.53441 14.1667 5.17029 14.1667 5.83333V7.5" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.75 12.9167H16.25" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.83333 15.8333H14.1667" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.91667 17.5V18.3333" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.0833 17.5V18.3333" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip1">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-[#1A1A1A] dark:text-white">Coletadas</h3>
            </div>
            
            <div className="space-y-3">
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px] px-4 py-2 flex items-center justify-center gap-2 transition-colors" onClick={() => handleOpenMatrixModal('coletadas')}>
                <Plus className="w-4 h-4" />
                <span className="text-sm">Adicionar Matriz</span>
              </button>
              
              {coletadasMatrizes.map((matriz, index) => (
                <div
                  key={index}
                  className="bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[12px] p-3 space-y-1"
                >
                  <p className="text-[#1A1A1A] dark:text-white text-sm">{matriz.especie} - ID: {matriz.id}</p>
                  <div className="flex items-start gap-1">
                    <MapPin className="w-3 h-3 text-[#777777] dark:text-[#B0B0B0] mt-0.5 shrink-0" />
                    <p className="text-[#777777] dark:text-[#B0B0B0] text-xs">{matriz.coordenadas}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Species Modal */}
      <AddSpeciesModal
        isOpen={isAddSpeciesModalOpen}
        onClose={() => setIsAddSpeciesModalOpen(false)}
        onSave={handleSaveSpecies}
      />

      {/* Add Matrix Modal */}
      <AddMatrixModal
        isOpen={isAddMatrixModalOpen}
        onClose={() => setIsAddMatrixModalOpen(false)}
        onSave={handleSaveMatrix}
        category={matrixCategory}
      />
    </div>
  );
}