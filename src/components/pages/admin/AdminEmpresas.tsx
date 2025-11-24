import { useState } from 'react';
import { Search, Edit, Ban, Trash2, Plus } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

// Mock data
const mockEmpresas = [
  {
    id: 1,
    razaoSocial: 'Rasta Flor Ambiental LTDA',
    cnpj: '30.544.241/0001-88',
    tipo: 'Privada',
    projetos: 12,
    status: 'Ativo',
    criadoEm: '15/03/2024',
  },
  {
    id: 2,
    razaoSocial: 'Instituto Suinã',
    cnpj: '18.234.567/0001-45',
    tipo: 'ONG',
    projetos: 8,
    status: 'Ativo',
    criadoEm: '22/04/2024',
  },
  {
    id: 3,
    razaoSocial: 'EcoVerde Restauração',
    cnpj: '25.678.901/0001-23',
    tipo: 'Privada',
    projetos: 5,
    status: 'Inativo',
    criadoEm: '10/01/2024',
  },
  {
    id: 4,
    razaoSocial: 'Cooperativa Ambiental do Sul',
    cnpj: '32.456.789/0001-67',
    tipo: 'Cooperativa',
    projetos: 15,
    status: 'Ativo',
    criadoEm: '05/06/2024',
  },
  {
    id: 5,
    razaoSocial: 'BioFlora Consultoria',
    cnpj: '41.234.890/0001-34',
    tipo: 'Privada',
    projetos: 20,
    status: 'Ativo',
    criadoEm: '18/02/2024',
  },
];

export function AdminEmpresas({ onAddCompanyClick }: { onAddCompanyClick?: () => void }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmpresas = mockEmpresas.filter(empresa => 
    empresa.razaoSocial.toLowerCase().includes(searchTerm.toLowerCase()) ||
    empresa.cnpj.includes(searchTerm)
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#1A1A1A]">Empresas</h2>
          <p className="text-[#777777] mt-1">Gerencie os clientes da plataforma</p>
        </div>
        {onAddCompanyClick && (
          <Button
            onClick={onAddCompanyClick}
            className="rounded-[12px] px-4 py-2 flex items-center gap-2"
            style={{ backgroundColor: '#0F3D26', color: 'white' }}
          >
            <Plus className="w-4 h-4" />
            Adicionar Empresa
          </Button>
        )}
      </div>

      {/* Card with Table */}
      <div className="bg-white rounded-[12px] shadow-sm border border-[#E0E0E0]">
        {/* Filters */}
        <div className="p-4 border-b border-[#E0E0E0]">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777777] w-4 h-4" />
            <Input
              type="text"
              placeholder="Buscar por nome ou CNPJ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-lg border-[#E0E0E0]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8F8F8] border-b border-[#E0E0E0]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  Razão Social
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  CNPJ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  Projetos
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
              {filteredEmpresas.map((empresa) => (
                <tr key={empresa.id} className="hover:bg-[#F8F8F8] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-[#1A1A1A]">{empresa.razaoSocial}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#777777]">{empresa.cnpj}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-medium rounded-full bg-blue-100 text-blue-800">
                      {empresa.tipo}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#1A1A1A]">{empresa.projetos}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-medium rounded-full ${
                      empresa.status === 'Ativo' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {empresa.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#777777]">{empresa.criadoEm}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-[#777777] hover:text-[#1A1A1A]"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-[#777777] hover:text-orange-600"
                      >
                        <Ban className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-[#777777] hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredEmpresas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#777777]">Nenhuma empresa encontrada</p>
          </div>
        )}
      </div>
    </div>
  );
}