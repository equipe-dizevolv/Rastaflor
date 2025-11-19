import { useState } from 'react';
import { 
  Home, 
  FolderTree, 
  CheckSquare, 
  FileText, 
  Settings,
  Leaf,
  BarChart3,
  Receipt,
  MapPin,
  RefreshCw
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  currentModule?: 'restauracao' | 'coleta';
  onModuleChange?: (module: 'restauracao' | 'coleta') => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'properties', label: 'Propriedades', icon: MapPin },
  { id: 'projects', label: 'Projetos', icon: FolderTree },
  { id: 'tasks', label: 'Tarefas', icon: CheckSquare },
  { id: 'contracts', label: 'Contratos', icon: FileText },
  { id: 'invoices', label: 'Notas Fiscais', icon: Receipt },
  { id: 'reports', label: 'Relatórios', icon: BarChart3 },
  { id: 'settings', label: 'Configurações', icon: Settings },
];

export function Sidebar({ currentPage, onPageChange, isDarkMode, currentModule, onModuleChange }: SidebarProps) {
  return (
    <div className={`w-64 h-full flex flex-col shadow-sm border-r ${
      isDarkMode 
        ? 'bg-sidebar border-sidebar-border' 
        : 'bg-white border-[#E0E0E0]'
    }`}>
      {/* Logo/Brand */}
      <div className={`p-6 border-b ${
        isDarkMode ? 'border-sidebar-border' : 'border-[#E0E0E0]'
      }`}>
        <div className="flex items-center gap-3">
          <div>
            <h2 className={`font-semibold ${isDarkMode ? 'text-sidebar-foreground' : 'text-[#1A1A1A]'}`}>RastaFlor</h2>
            <p className={`text-xs ${isDarkMode ? 'text-sidebar-foreground/70' : 'text-[#777777]'}`}>
              {currentModule === 'restauracao' ? 'Módulo de Restauração' : 'Módulo de Coleta'}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id || 
              (item.id === 'properties' && currentPage === 'add-property');
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left
                    transition-all duration-200
                    ${isActive 
                      ? isDarkMode
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                        : 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                      : isDarkMode
                        ? 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                        : 'text-[#1A1A1A] hover:bg-[#F0F0F0]'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Module Switch */}
      {onModuleChange && (
        <div className={`px-4 pb-4 border-t ${isDarkMode ? 'border-sidebar-border' : 'border-[#E0E0E0]'}`}>
          <button
            onClick={() => onModuleChange(currentModule === 'restauracao' ? 'coleta' : 'restauracao')}
            className={`
              w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left mt-4
              transition-all duration-200
              ${isDarkMode
                ? 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/30'
                : 'text-[#777777] hover:text-[#1A1A1A] hover:bg-[#F5F5F5]'
              }
            `}
          >
            <RefreshCw className="w-5 h-5" />
            <span className="text-sm">
              {currentModule === 'restauracao' 
                ? 'Alternar para Módulo de Coleta'
                : 'Alternar para Módulo de Restauração'
              }
            </span>
          </button>
        </div>
      )}

      {/* Footer */}
      <div className={`p-4 border-t ${isDarkMode ? 'border-sidebar-border' : 'border-[#E0E0E0]'}`}>
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isDarkMode ? 'bg-sidebar-accent' : 'bg-[#F0F0F0]'
          }`}>
            <span className={`text-sm font-medium ${isDarkMode ? 'text-sidebar-foreground' : 'text-[#1A1A1A]'}`}>JP</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-medium truncate ${isDarkMode ? 'text-sidebar-foreground' : 'text-[#1A1A1A]'}`}>João Paulo</p>
            <p className={`text-xs truncate ${isDarkMode ? 'text-sidebar-foreground/70' : 'text-[#777777]'}`}>Gestor Ambiental</p>
          </div>
        </div>
      </div>
    </div>
  );
}