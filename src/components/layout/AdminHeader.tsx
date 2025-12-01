import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '../ui/button';

interface AdminHeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export function AdminHeader({ isDarkMode, onToggleTheme }: AdminHeaderProps) {
  return (
    <header className={`h-16 flex items-center justify-between px-6 shrink-0 shadow-sm border-b ${
      isDarkMode 
        ? 'bg-card border-border' 
        : 'bg-white border-[#E0E0E0]'
    }`}>
      {/* Empty space for balance */}
      <div></div>

      {/* Right side - Theme Toggle */}
      <div className="flex items-center gap-3">
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
      </div>
    </header>
  );
}
