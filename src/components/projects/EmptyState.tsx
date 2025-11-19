import { Button } from '../ui/button';
import { Leaf } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description?: string;
  actionLabel: string;
  onAction: () => void;
}

export function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="relative mb-8">
        {/* Glowing effect */}
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
        <div className="relative w-24 h-24 bg-card border-2 border-primary/30 rounded-full flex items-center justify-center">
          <Leaf className="w-12 h-12 text-primary" strokeWidth={1.5} />
        </div>
      </div>
      
      <div className="space-y-4 max-w-md">
        <h3 className="text-foreground">{title}</h3>
        {description && (
          <p className="text-secondary">{description}</p>
        )}
      </div>
      
      <Button 
        onClick={onAction}
        className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {actionLabel}
      </Button>
    </div>
  );
}