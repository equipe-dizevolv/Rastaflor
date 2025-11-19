import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';

interface RestorationModel {
  name: string;
  count: number;
  percentage: number;
}

interface RestorationModelsProps {
  models: RestorationModel[];
}

export function RestorationModels({ models }: RestorationModelsProps) {
  const maxCount = Math.max(...models.map(m => m.count));

  return (
    <Card className="bg-card border-border h-fit shadow-sm">
      <CardHeader>
        <CardTitle className="text-foreground">Modelos de Restauração</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {models.map((model, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium">{model.name}</span>
              <span className="text-primary font-bold">{model.count}</span>
            </div>
            
            <div className="space-y-1">
              <Progress 
                value={(model.count / maxCount) * 100} 
                className="h-2 bg-muted"
              />
              <div className="flex justify-between text-xs">
                <span className="text-secondary">{model.percentage}% do projeto</span>
                <span className="text-secondary">{model.count} áreas</span>
              </div>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="text-foreground font-medium">Total</span>
            <span className="text-primary font-bold">
              {models.reduce((sum, model) => sum + model.count, 0)} áreas
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}