import image_67aa7b1ef27bf90ec544aed2b26b2cf8bfa7631c from 'figma:asset/67aa7b1ef27bf90ec544aed2b26b2cf8bfa7631c.png';
import { 
  LayoutDashboard, 
  Building2,
  Users,
  Bug,
  ExternalLink,
  LogOut
} from 'lucide-react';

interface AdminSidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  onBackToModules: () => void;
  onLogout: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: 'admin-dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'admin-empresas', label: 'Empresas', icon: Building2 },
  { id: 'admin-usuarios', label: 'Usuários', icon: Users },
  { id: 'admin-bugs', label: 'Bugs Reportados', icon: Bug },
];

export function AdminSidebar({ currentPage, onPageChange, isDarkMode, onBackToModules, onLogout }: AdminSidebarProps) {
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
            src={image_67aa7b1ef27bf90ec544aed2b26b2cf8bfa7631c}
            alt="RastaFlor Logo"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Badge Admin */}
      <div className={`px-4 py-3 border-b ${isDarkMode ? 'border-sidebar-border' : 'border-[#E0E0E0]'}`}>
        <div className={`px-3 py-2 rounded-lg text-center ${
          isDarkMode ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'
        }`}>
          <span className="text-sm font-medium">🔐 Painel Administrativo</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
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

      {/* Footer Actions */}
      <div className={`p-4 border-t space-y-2 ${isDarkMode ? 'border-sidebar-border' : 'border-[#E0E0E0]'}`}>
        {/* Ir para o aplicativo */}
        <button
          onClick={onBackToModules}
          className={`
            w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left
            transition-all duration-200
            ${isDarkMode
              ? 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/30'
              : 'text-[#777777] hover:text-[#1A1A1A] hover:bg-[#F5F5F5]'
            }
          `}
        >
          <ExternalLink className="w-5 h-5" />
          <span className="text-sm">Ir para o aplicativo</span>
        </button>

        {/* Logout */}
        <button
          onClick={onLogout}
          className={`
            w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left
            transition-all duration-200
            ${isDarkMode
              ? 'text-red-400 hover:text-red-300 hover:bg-red-500/10'
              : 'text-red-600 hover:text-red-700 hover:bg-red-50'
            }
          `}
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Sair</span>
        </button>
      </div>
    </div>
  );
}
