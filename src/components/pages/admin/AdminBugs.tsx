import { Eye, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/button';
import { toast } from 'sonner';

// Mock data
const mockBugs = [
  {
    id: 1,
    pagina: 'Dashboard',
    descricao: 'Gráfico de estatísticas não está carregando corretamente',
    usuario: 'João Paulo Silva',
    email: 'joao@rastaflor.com.br',
    status: 'Pendente',
    criadoEm: '23/11/2025',
  },
  {
    id: 2,
    pagina: 'Login',
    descricao: 'Mensagem de erro não aparece quando senha está incorreta',
    usuario: 'Maria Santos',
    email: 'maria@institutosuina.org.br',
    status: 'Solucionado',
    criadoEm: '22/11/2025',
  },
  {
    id: 3,
    pagina: 'Propriedades',
    descricao: 'Botão de adicionar matriz não responde ao clique',
    usuario: 'Carlos Oliveira',
    email: 'carlos@ecoverde.com.br',
    status: 'Pendente',
    criadoEm: '21/11/2025',
  },
  {
    id: 4,
    pagina: 'Coletas',
    descricao: 'Filtro por data não está funcionando corretamente',
    usuario: 'Ana Costa',
    email: 'ana@cooperativa.com.br',
    status: 'Pendente',
    criadoEm: '20/11/2025',
  },
  {
    id: 5,
    pagina: 'Relatórios',
    descricao: 'PDF gerado está com formatação quebrada',
    usuario: 'Pedro Mendes',
    email: 'pedro@bioflora.com.br',
    status: 'Solucionado',
    criadoEm: '19/11/2025',
  },
  {
    id: 6,
    pagina: 'Inicial',
    descricao: 'Logo não aparece no mobile',
    usuario: 'João Paulo Silva',
    email: 'joao@rastaflor.com.br',
    status: 'Pendente',
    criadoEm: '18/11/2025',
  },
];

export function AdminBugs() {
  const handleViewBug = (id: number) => {
    const bug = mockBugs.find(b => b.id === id);
    toast.info(`Visualizando bug: ${bug?.pagina}`, {
      description: bug?.descricao
    });
    console.log('Ver detalhes do bug ID:', id);
  };

  const handleMarkAsResolved = (id: number) => {
    const bug = mockBugs.find(b => b.id === id);
    toast.success(`Bug resolvido: ${bug?.pagina}`, {
      description: 'O status foi atualizado para "Solucionado"'
    });
    console.log('Marcar bug como resolvido ID:', id);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-[#1A1A1A]">Bugs Reportados</h2>
        <p className="text-[#777777] mt-1">Acompanhe e gerencie os tickets de erro da plataforma</p>
      </div>

      {/* Card with Table */}
      <div className="bg-white rounded-[12px] shadow-sm border border-[#E0E0E0]">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8F8F8] border-b border-[#E0E0E0]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  Página do Bug
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  Descrição do Bug
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  Nome do Usuário
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  E-mail do Usuário
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  Criado em
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[#777777] uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#E0E0E0]">
              {mockBugs.map((bug) => (
                <tr key={bug.id} className="hover:bg-[#F8F8F8] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-[#1A1A1A]">{bug.pagina}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-[#777777] max-w-md">{bug.descricao}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#1A1A1A]">{bug.usuario}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#777777]">{bug.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-medium rounded-full ${
                      bug.status === 'Solucionado' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {bug.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#777777]">{bug.criadoEm}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-[#777777] hover:text-[#1A1A1A]"
                        title="Ver Detalhes"
                        onClick={() => handleViewBug(bug.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      {bug.status === 'Pendente' && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-[#777777] hover:text-green-600"
                          title="Marcar como Resolvido"
                          onClick={() => handleMarkAsResolved(bug.id)}
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {mockBugs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#777777]">Nenhum bug reportado</p>
          </div>
        )}
      </div>
    </div>
  );
}