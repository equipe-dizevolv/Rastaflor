import { Card, CardContent } from '../ui/card';
import { Progress } from '../ui/progress';
import { LucideIcon } from 'lucide-react';

interface EnhancedKPICardProps {
  title: string;
  value: string;
  progress: number; // Percentage (0-100)
  goal: string;
  icon: LucideIcon;
}

export function EnhancedKPICard({ title, value, progress, goal, icon: Icon }: EnhancedKPICardProps) {
  return (
    <Card className="bg-card border-border shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-secondary text-sm mb-1">{title}</p>
            <p className="text-foreground text-2xl font-bold">{value}</p>
          </div>
          <div className="bg-primary/10 p-3 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-secondary">Meta: {goal}</span>
            <span className="text-primary font-medium">{progress}%</span>
          </div>
          <Progress 
            value={progress} 
            className="h-2 bg-muted"
          />
        </div>
      </CardContent>
    </Card>
  );
}