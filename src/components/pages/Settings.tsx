import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';

export function Settings() {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-foreground">Configurações</h1>
        <p className="text-secondary mt-1">Gerencie as configurações da plataforma</p>
      </div>

      <div className="grid gap-6">
        {/* Profile Settings */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Perfil do Usuário</CardTitle>
            <CardDescription>
              Atualize suas informações pessoais e de contato
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nome</Label>
                <Input
                  id="firstName"
                  defaultValue="João"
                  className="bg-input border-border focus:border-primary focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input
                  id="lastName"
                  defaultValue="Paulo"
                  className="bg-input border-border focus:border-primary focus:ring-primary"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="joao.paulo@ecorestore.com"
                className="bg-input border-border focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Função</Label>
              <Input
                id="role"
                defaultValue="Gestor Ambiental"
                className="bg-input border-border focus:border-primary focus:ring-primary"
              />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Notificações</CardTitle>
            <CardDescription>
              Configure como você deseja receber notificações
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Notificações por Email</Label>
                <p className="text-sm text-secondary">
                  Receba atualizações importantes por email
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Notificações de Tarefas</Label>
                <p className="text-sm text-secondary">
                  Seja notificado sobre prazos e atualizações de tarefas
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Relatórios Semanais</Label>
                <p className="text-sm text-secondary">
                  Receba resumos semanais do progresso dos projetos
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Sistema</CardTitle>
            <CardDescription>
              Configurações gerais da plataforma
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Modo Escuro</Label>
                <p className="text-sm text-secondary">
                  Interface otimizada para ambientes com pouca luz
                </p>
              </div>
              <Switch defaultChecked disabled />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Salvamento Automático</Label>
                <p className="text-sm text-secondary">
                  Salve automaticamente as alterações nos formulários
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="outline" className="border-border text-secondary hover:text-foreground hover:bg-muted">
            Cancelar
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Salvar Alterações
          </Button>
        </div>
      </div>
    </div>
  );
}