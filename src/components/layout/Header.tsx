import { Bell, Sun, Moon, User, LogOut, Settings, UserCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../ui/popover';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onLogout?: () => void;
  onPageChange?: (page: string) => void;
}

export function Header({ isDarkMode, onToggleTheme, onLogout, onPageChange }: HeaderProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Mock notifications data
  const notifications = [
    { id: 1, title: 'Nova coleta registrada', message: 'Coleta #127 foi registrada com sucesso', time: 'Há 2 horas', unread: true },
    { id: 2, title: 'Relatório gerado', message: 'Relatório mensal está disponível', time: 'Há 5 horas', unread: true },
    { id: 3, title: 'Matriz cadastrada', message: 'Nova árvore matriz adicionada', time: 'Ontem', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className={`h-16 flex items-center justify-end px-6 gap-3 shrink-0 shadow-sm border-b ${
      isDarkMode 
        ? 'bg-card border-border' 
        : 'bg-white border-[#E0E0E0]'
    }`}>
      {/* Notification Icon */}
      <Popover open={notificationsOpen} onOpenChange={setNotificationsOpen}>
        <PopoverTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon"
            className={`rounded-lg relative ${
              isDarkMode 
                ? 'text-card-foreground hover:bg-muted' 
                : 'text-[#1A1A1A] hover:bg-[#F0F0F0]'
            }`}
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className={`w-80 p-0 ${isDarkMode ? 'bg-card border-border' : 'bg-white'}`} 
          align="end"
          sideOffset={8}
        >
          <div className={`p-4 border-b ${isDarkMode ? 'border-border' : 'border-[#E0E0E0]'}`}>
            <div className="flex items-center justify-between">
              <h3 className={`font-semibold ${isDarkMode ? 'text-card-foreground' : 'text-[#1A1A1A]'}`}>
                Notificações
              </h3>
              {unreadCount > 0 && (
                <span className={`text-xs px-2 py-1 rounded-full ${
                  isDarkMode ? 'bg-muted text-muted-foreground' : 'bg-[#F0F0F0] text-[#777777]'
                }`}>
                  {unreadCount} novas
                </span>
              )}
            </div>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className={`p-8 text-center ${isDarkMode ? 'text-muted-foreground' : 'text-[#777777]'}`}>
                <Bell className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Nenhuma notificação</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <button
                  key={notification.id}
                  className={`w-full p-4 text-left transition-colors border-b last:border-b-0 ${
                    isDarkMode 
                      ? 'border-border hover:bg-muted/50' 
                      : 'border-[#E0E0E0] hover:bg-[#F8F8F8]'
                  } ${notification.unread ? (isDarkMode ? 'bg-muted/30' : 'bg-blue-50/50') : ''}`}
                  onClick={() => {
                    // Handle notification click
                    console.log('Notification clicked:', notification.id);
                  }}
                >
                  <div className="flex items-start gap-3">
                    {notification.unread && (
                      <span className="w-2 h-2 bg-primary rounded-full mt-1.5 shrink-0"></span>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium mb-1 ${
                        isDarkMode ? 'text-card-foreground' : 'text-[#1A1A1A]'
                      }`}>
                        {notification.title}
                      </p>
                      <p className={`text-xs mb-1 ${
                        isDarkMode ? 'text-muted-foreground' : 'text-[#777777]'
                      }`}>
                        {notification.message}
                      </p>
                      <p className={`text-xs ${
                        isDarkMode ? 'text-muted-foreground' : 'text-[#999999]'
                      }`}>
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
          <div className={`p-3 border-t ${isDarkMode ? 'border-border' : 'border-[#E0E0E0]'}`}>
            <button 
              className={`w-full text-sm text-center py-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'text-primary hover:bg-muted' 
                  : 'text-primary hover:bg-[#F0F0F0]'
              }`}
              onClick={() => {
                setNotificationsOpen(false);
                if (onPageChange) {
                  onPageChange('notifications');
                }
              }}
            >
              Ver todas as notificações
            </button>
          </div>
        </PopoverContent>
      </Popover>
      
      {/* Theme Toggle Icon */}
      <Button 
        variant="ghost" 
        size="icon"
        onClick={onToggleTheme}
        className={`rounded-lg ${
          isDarkMode 
            ? 'text-card-foreground hover:bg-muted' 
            : 'text-[#1A1A1A] hover:bg-[#F0F0F0]'
        }`}
      >
        {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </Button>
      
      {/* User Profile Icon */}
      <Popover open={profileOpen} onOpenChange={setProfileOpen}>
        <PopoverTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon"
            className={`rounded-lg ${
              isDarkMode 
                ? 'text-card-foreground hover:bg-muted' 
                : 'text-[#1A1A1A] hover:bg-[#F0F0F0]'
            }`}
          >
            <User className="w-5 h-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className={`w-64 p-0 ${isDarkMode ? 'bg-card border-border' : 'bg-white'}`} 
          align="end"
          sideOffset={8}
        >
          {/* User Info Header */}
          <div className={`p-4 border-b ${isDarkMode ? 'border-border' : 'border-[#E0E0E0]'}`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-muted' : 'bg-[#F0F0F0]'
              }`}>
                <User className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-medium text-sm truncate ${
                  isDarkMode ? 'text-card-foreground' : 'text-[#1A1A1A]'
                }`}>
                  Administrador
                </p>
                <p className={`text-xs truncate ${
                  isDarkMode ? 'text-muted-foreground' : 'text-[#777777]'
                }`}>
                  admin@rastaflor.com
                </p>
              </div>
            </div>
          </div>

          {/* Menu Options */}
          <div className="py-2">
            <button
              className={`w-full px-4 py-2.5 text-left transition-colors flex items-center gap-3 ${
                isDarkMode 
                  ? 'hover:bg-muted/50 text-card-foreground' 
                  : 'hover:bg-[#F8F8F8] text-[#1A1A1A]'
              }`}
              onClick={() => {
                setProfileOpen(false);
                if (onPageChange) {
                  onPageChange('settings');
                }
              }}
            >
              <UserCircle className="w-4 h-4" />
              <span className="text-sm">Meu Perfil</span>
            </button>

            <button
              className={`w-full px-4 py-2.5 text-left transition-colors flex items-center gap-3 ${
                isDarkMode 
                  ? 'hover:bg-muted/50 text-card-foreground' 
                  : 'hover:bg-[#F8F8F8] text-[#1A1A1A]'
              }`}
              onClick={() => {
                setProfileOpen(false);
                if (onPageChange) {
                  onPageChange('settings');
                }
              }}
            >
              <Settings className="w-4 h-4" />
              <span className="text-sm">Configurações</span>
            </button>
          </div>

          {/* Logout Button */}
          {onLogout && (
            <div className={`p-3 border-t ${isDarkMode ? 'border-border' : 'border-[#E0E0E0]'}`}>
              <button 
                className={`w-full text-sm text-center py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  isDarkMode 
                    ? 'text-red-400 hover:bg-red-500/10' 
                    : 'text-red-600 hover:bg-red-50'
                }`}
                onClick={() => {
                  setProfileOpen(false);
                  onLogout();
                }}
              >
                <LogOut className="w-4 h-4" />
                Sair da Conta
              </button>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </header>
  );
}