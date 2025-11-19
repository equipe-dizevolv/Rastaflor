import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Calendar } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  createdDate: string;
  stage: string;
  onManage: () => void;
}

export function ProjectCard({ title, createdDate, stage, onManage }: ProjectCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-4 shadow-sm">
      <div className="space-y-2">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <div className="flex items-center gap-2 text-secondary text-sm">
          <Calendar className="w-4 h-4" />
          <span>Criado em {createdDate}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <Badge 
          variant="secondary" 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {stage}
        </Badge>
        
        <Button 
          variant="ghost" 
          size="sm"
          onClick={onManage}
          className="text-secondary hover:text-foreground hover:bg-muted"
        >
          Gerenciar Projeto
        </Button>
      </div>
    </div>
  );
}