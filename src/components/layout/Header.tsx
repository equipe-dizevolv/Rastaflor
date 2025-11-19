import { Bell, Sun, Moon, User } from 'lucide-react';
import { Button } from '../ui/button';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export function Header({ isDarkMode, onToggleTheme }: HeaderProps) {
  return (
    <header className={`h-16 flex items-center justify-end px-6 gap-3 shrink-0 shadow-sm border-b ${
      isDarkMode 
        ? 'bg-card border-border' 
        : 'bg-white border-[#E0E0E0]'
    }`}>
      {/* Notification Icon */}
      <Button 
        variant="ghost" 
        size="icon"
        className={`rounded-lg ${
          isDarkMode 
            ? 'text-card-foreground hover:bg-muted' 
            : 'text-[#1A1A1A] hover:bg-[#F0F0F0]'
        }`}
      >
        <Bell className="w-5 h-5" />
      </Button>
      
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
    </header>
  );
}