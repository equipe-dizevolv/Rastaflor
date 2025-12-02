import { useState } from 'react';
import { Bell, Check, Trash2, CheckCheck } from 'lucide-react';
import { Button } from '../ui/button';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  unread: boolean;
  type: 'info' | 'success' | 'warning';
}

export function Notifications() {
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  const [notifications, setNotifications] = useState<Notification[]>([
    { 
      id: 1, 
      title: 'Nova coleta registrada', 
      message: 'Coleta #127 foi registrada com sucesso na Fazenda Santa Rita', 
      time: 'Há 2 horas', 
      unread: true,
      type: 'success'
    },
    { 
      id: 2, 
      title: 'Relatório gerado', 
      message: 'Relatório mensal de outubro está disponível para download', 
      time: 'Há 5 horas', 
      unread: true,
      type: 'info'
    },
    { 
      id: 3, 
      title: 'Matriz cadastrada', 
      message: 'Nova árvore matriz de Jatobá foi adicionada à propriedade', 
      time: 'Ontem', 
      unread: false,
      type: 'success'
    },
    { 
      id: 4, 
      title: 'Atenção: Monitoramento pendente', 
      message: 'Existem 3 monitoramentos agendados para esta semana', 
      time: 'Há 2 dias', 
      unread: false,
      type: 'warning'
    },
    { 
      id: 5, 
      title: 'Plantio concluído', 
      message: 'Plantio de 500 mudas na Área de Encosta foi finalizado', 
      time: 'Há 3 dias', 
      unread: false,
      type: 'success'
    },
    { 
      id: 6, 
      title: 'Novo contrato adicionado', 
      message: 'Contrato de fornecimento de mudas foi cadastrado no sistema', 
      time: 'Há 4 dias', 
      unread: false,
      type: 'info'
    },
    { 
      id: 7, 
      title: 'Espécie atualizada', 
      message: 'Informações da espécie Ipê Amarelo foram atualizadas', 
      time: 'Há 5 dias', 
      unread: false,
      type: 'info'
    },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleMarkAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, unread: false } : n
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const handleDelete = (id: number) => {
    if (confirm('Tem certeza que deseja excluir esta notificação?')) {
      setNotifications(notifications.filter(n => n.id !== id));
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success':
        return isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-50 text-green-600';
      case 'warning':
        return isDarkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-50 text-yellow-600';
      case 'info':
      default:
        return isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600';
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-[12px] flex items-center justify-center ${
            isDarkMode ? 'bg-muted' : 'bg-[#F0F0F0]'
          }`}>
            <Bell className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
              Todas as Notificações
            </h2>
            {unreadCount > 0 && (
              <p className={`text-sm ${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
                {unreadCount} {unreadCount === 1 ? 'notificação não lida' : 'notificações não lidas'}
              </p>
            )}
          </div>
        </div>
        
        {unreadCount > 0 && (
          <Button
            onClick={handleMarkAllAsRead}
            variant="outline"
            className="gap-2"
          >
            <CheckCheck className="w-4 h-4" />
            Marcar todas como lidas
          </Button>
        )}
      </div>

      {/* Notifications List */}
      <div className={`rounded-[12px] border overflow-hidden ${
        isDarkMode ? 'bg-[#2A2A2A] border-[#3A3A3A]' : 'bg-white border-[#E0E0E0]'
      }`}>
        {notifications.length === 0 ? (
          <div className="p-12 text-center">
            <Bell className={`w-16 h-16 mx-auto mb-4 ${
              isDarkMode ? 'text-[#3A3A3A]' : 'text-[#E0E0E0]'
            }`} />
            <h3 className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>
              Nenhuma notificação
            </h3>
            <p className={`text-sm mt-2 ${isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}`}>
              Você está em dia com todas as suas notificações
            </p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 transition-colors ${
                  notification.unread 
                    ? isDarkMode 
                      ? 'bg-primary/5 hover:bg-primary/10' 
                      : 'bg-blue-50/50 hover:bg-blue-50'
                    : isDarkMode
                      ? 'hover:bg-[#1F1F1F]'
                      : 'hover:bg-[#F8F8F8]'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Type Badge */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    getTypeColor(notification.type)
                  }`}>
                    <Bell className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3 className={`font-medium ${
                        isDarkMode ? 'text-white' : 'text-[#1A1A1A]'
                      }`}>
                        {notification.title}
                      </h3>
                      <span className={`text-xs shrink-0 ${
                        isDarkMode ? 'text-[#777777]' : 'text-[#999999]'
                      }`}>
                        {notification.time}
                      </span>
                    </div>
                    <p className={`text-sm mb-3 ${
                      isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'
                    }`}>
                      {notification.message}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {notification.unread && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleMarkAsRead(notification.id)}
                          className="h-8 gap-2"
                        >
                          <Check className="w-3 h-3" />
                          Marcar como lida
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(notification.id)}
                        className="h-8 gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
                      >
                        <Trash2 className="w-3 h-3" />
                        Excluir
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
