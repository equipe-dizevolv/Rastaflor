import React from 'react';
import { LayoutDashboard, Building2, Users, Bug, ArrowLeft, LogOut } from 'lucide-react';

interface AdminSidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  onBackToModules: () => void;
  onLogout: () => void;
}

export function AdminSidebar({ 
  currentPage, 
  onPageChange, 
  isDarkMode,
  onBackToModules,
  onLogout
}: AdminSidebarProps) {
  const menuItems = [
    { id: 'admin-dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'admin-empresas', label: 'Empresas', icon: Building2 },
    { id: 'admin-usuarios', label: 'Usuários', icon: Users },
    { id: 'admin-bugs', label: 'Bugs Reportados', icon: Bug },
  ];

  return (
    <aside className={`w-64 flex flex-col shrink-0 border-r ${
      isDarkMode 
        ? 'bg-card border-border' 
        : 'bg-white border-[#E0E0E0]'
    }`}>
      {/* Logo Section */}
      <div className={`h-16 flex items-center px-6 border-b ${
        isDarkMode ? 'border-border' : 'border-[#E0E0E0]'
      }`}>
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            isDarkMode ? 'bg-muted' : 'bg-[#F0F0F0]'
          }`}>
            <span className="text-lg">🌿</span>
          </div>
          <div>
            <h1 className={`font-semibold ${isDarkMode ? 'text-card-foreground' : 'text-[#1A1A1A]'}`}>
              RastaFlor
            </h1>
            <p className={`text-xs ${isDarkMode ? 'text-muted-foreground' : 'text-[#777777]'}`}>
              Painel Admin
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-[12px] transition-all ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : isDarkMode
                  ? 'text-muted-foreground hover:bg-muted hover:text-card-foreground'
                  : 'text-[#777777] hover:bg-[#F0F0F0] hover:text-[#1A1A1A]'
              }`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className={`p-4 border-t space-y-2 ${
        isDarkMode ? 'border-border' : 'border-[#E0E0E0]'
      }`}>
        {/* Back to Modules */}
        <button
          onClick={onBackToModules}
          className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-[12px] transition-all ${
            isDarkMode
              ? 'text-muted-foreground hover:bg-muted hover:text-card-foreground'
              : 'text-[#777777] hover:bg-[#F0F0F0] hover:text-[#1A1A1A]'
          }`}
        >
          <ArrowLeft className="w-5 h-5 shrink-0" />
          <span className="text-sm font-medium">Voltar aos Módulos</span>
        </button>

        {/* Logout */}
        <button
          onClick={onLogout}
          className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-[12px] transition-all ${
            isDarkMode
              ? 'text-red-400 hover:bg-red-500/10'
              : 'text-red-600 hover:bg-red-50'
          }`}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          <span className="text-sm font-medium">Sair</span>
        </button>
      </div>
    </aside>
  );
}
