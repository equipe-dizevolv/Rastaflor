import image_98f13613464bb8a33ef6040f23a332d0526a80ef from 'figma:asset/98f13613464bb8a33ef6040f23a332d0526a80ef.png';
import rastaFlorLogo from 'figma:asset/9c14cc3ff4bd6d87486f75d6184b5bc3e4d36350.png';
import { 
  LayoutDashboard, 
  FolderKanban, 
  CheckSquare, 
  FileText, 
  Settings,
  BarChart3,
  Receipt,
  MapPin,
  TreePine,
  Sprout,
  ClipboardCheck,
  Tag,
  Users,
  RefreshCw,
  Shield,
  ChevronDown
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  currentModule?: 'restauracao' | 'coleta';
  onModuleChange?: (module: 'restauracao' | 'coleta' | 'admin') => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const restauracaoNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'properties', label: 'Propriedades', icon: MapPin },
  { id: 'projects', label: 'Projetos', icon: FolderKanban },
  { id: 'tasks', label: 'Tarefas', icon: CheckSquare },
  { id: 'contracts', label: 'Contratos', icon: FileText },
  { id: 'invoices', label: 'Notas Fiscais', icon: Receipt },
  { id: 'reports', label: 'Relatórios', icon: BarChart3 },
  { id: 'settings', label: 'Configurações', icon: Settings },
];

const coletaNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'properties', label: 'Propriedades', icon: MapPin },
  { id: 'especies', label: 'Espécies', icon: Sprout },
  { id: 'coletas', label: 'Coletas', icon: ClipboardCheck },
  { id: 'monitoramentos', label: 'Monitoramentos', icon: TreePine },
  { id: 'rotulos', label: 'Rótulos', icon: Tag },
  { id: 'relatorios-coleta', label: 'Relatórios', icon: BarChart3 },
  { id: 'equipe', label: 'Equipe', icon: Users },
];

export function Sidebar({ currentPage, onPageChange, isDarkMode, currentModule, onModuleChange }: SidebarProps) {
  const navItems = currentModule === 'coleta' ? coletaNavItems : restauracaoNavItems;
  
  return (
    <div className={`w-64 h-full flex flex-col shadow-sm border-r ${
      isDarkMode 
        ? 'bg-sidebar border-sidebar-border' 
        : 'bg-white border-[#E0E0E0]'
    }`}>
      {/* Logo/Brand */}
      <div className={`h-16 px-6 flex items-center shrink-0 border-b ${isDarkMode ? 'border-sidebar-border' : 'border-[#E0E0E0]'}`} style={{ backgroundColor: '#0F3D26' }}>
        <div className="flex items-center gap-3">
          <img
            src={image_98f13613464bb8a33ef6040f23a332d0526a80ef}
            alt="RastaFlor Logo"
            className="w-full h-auto object-contain"
          />
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
          <div className="mt-4 space-y-2">
            <p className={`text-xs font-medium uppercase tracking-wider px-3 mb-2 ${
              isDarkMode ? 'text-sidebar-foreground/50' : 'text-[#999999]'
            }`}>
              Alternar Módulo
            </p>
            
            {/* Botão Restauração */}
            <button
              onClick={() => onModuleChange('restauracao')}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left
                transition-all duration-200
                ${currentModule === 'restauracao'
                  ? isDarkMode
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-primary/10 text-primary border border-primary/20'
                  : isDarkMode
                    ? 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/30'
                    : 'text-[#777777] hover:text-[#1A1A1A] hover:bg-[#F5F5F5]'
                }
              `}
            >
              <TreePine className="w-5 h-5" />
              <span className="text-sm">Módulo de Restauração</span>
            </button>

            {/* Botão Coleta */}
            <button
              onClick={() => onModuleChange('coleta')}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left
                transition-all duration-200
                ${currentModule === 'coleta'
                  ? isDarkMode
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-primary/10 text-primary border border-primary/20'
                  : isDarkMode
                    ? 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/30'
                    : 'text-[#777777] hover:text-[#1A1A1A] hover:bg-[#F5F5F5]'
                }
              `}
            >
              <Sprout className="w-5 h-5" />
              <span className="text-sm">Módulo de Coleta</span>
            </button>

            {/* Botão Admin */}
            <button
              onClick={() => onModuleChange('admin')}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left
                transition-all duration-200
                ${isDarkMode
                  ? 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/30'
                  : 'text-[#777777] hover:text-[#1A1A1A] hover:bg-[#F5F5F5]'
                }
              `}
            >
              <Shield className="w-5 h-5" />
              <span className="text-sm">Painel Admin</span>
            </button>
          </div>
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