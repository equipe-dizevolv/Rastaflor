import { useState } from 'react';
import { Search, Edit, KeyRound, Trash2, X } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';

// Mock data
const mockUsuarios = [
  {
    id: 1,
    nome: 'João Paulo Silva',
    email: 'joao@rastaflor.com.br',
    empresa: 'Rasta Flor Ambiental LTDA',
    aprovacao: 'Aprovado',
    ultimoLogin: '23/11/2025',
    perfil: 'User Master',
    status: 'Ativo',
    criadoEm: '15/03/2024',
  },
  {
    id: 2,
    nome: 'Maria Santos',
    email: 'maria@institutosuina.org.br',
    empresa: 'Instituto Suinã',
    aprovacao: 'Aprovado',
    ultimoLogin: '22/11/2025',
    perfil: 'Administrador',
    status: 'Ativo',
    criadoEm: '22/04/2024',
  },
  {
    id: 3,
    nome: 'Carlos Oliveira',
    email: 'carlos@ecoverde.com.br',
    empresa: 'EcoVerde Restauração',
    aprovacao: 'Convite Adm',
    ultimoLogin: '20/11/2025',
    perfil: 'Técnico',
    status: 'Ativo',
    criadoEm: '10/01/2024',
  },
  {
    id: 4,
    nome: 'Ana Costa',
    email: 'ana@cooperativa.com.br',
    empresa: 'Cooperativa Ambiental do Sul',
    aprovacao: 'Aprovado',
    ultimoLogin: '21/11/2025',
    perfil: 'Administrador',
    status: 'Inativo',
    criadoEm: '05/06/2024',
  },
  {
    id: 5,
    nome: 'Pedro Mendes',
    email: 'pedro@bioflora.com.br',
    empresa: 'BioFlora Consultoria',
    aprovacao: 'Aprovado',
    ultimoLogin: '24/11/2025',
    perfil: 'Técnico',
    status: 'Ativo',
    criadoEm: '18/02/2024',
  },
];

export function AdminUsuarios() {
  const [searchTerm, setSearchTerm] = useState('');
  const [empresaFilter, setEmpresaFilter] = useState('all');
  const [sortBy, setSortBy] = useState('nome');

  const empresas = ['all', ...Array.from(new Set(mockUsuarios.map(u => u.empresa)))];

  const filteredUsuarios = mockUsuarios
    .filter(usuario => {
      const matchesSearch = 
        usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        usuario.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesEmpresa = empresaFilter === 'all' || usuario.empresa === empresaFilter;
      return matchesSearch && matchesEmpresa;
    })
    .sort((a, b) => {
      if (sortBy === 'ultimoLogin') {
        return new Date(b.ultimoLogin.split('/').reverse().join('-')).getTime() - 
               new Date(a.ultimoLogin.split('/').reverse().join('-')).getTime();
      }
      return a.nome.localeCompare(b.nome);
    });

  const clearFilters = () => {
    setSearchTerm('');
    setEmpresaFilter('all');
    setSortBy('nome');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#1A1A1A]">Usuários</h2>
          <p className="text-[#777777] mt-1">Gerencie todos os usuários da plataforma</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px]">
          Criar usuário
        </Button>
      </div>

      {/* Card with Table */}
      <div className="bg-white rounded-[12px] shadow-sm border border-[#E0E0E0]">
        {/* Filters */}
        <div className="p-4 border-b border-[#E0E0E0] space-y-4">
          <div className="flex flex-wrap gap-4">
            {/* Search */}
            <div className="relative flex-1 min-w-[250px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777777] w-4 h-4" />
              <Input
                type="text"
                placeholder="Buscar por nome ou e-mail..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-lg border-[#E0E0E0]"
              />
            </div>

            {/* Empresa Filter */}
            <Select value={empresaFilter} onValueChange={setEmpresaFilter}>
              <SelectTrigger className="w-[200px] rounded-lg">
                <SelectValue placeholder="Filtrar por empresa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as empresas</SelectItem>
                {empresas.slice(1).map((empresa) => (
                  <SelectItem key={empresa} value={empresa}>
                    {empresa}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort By */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] rounded-lg">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nome">Nome</SelectItem>
                <SelectItem value="ultimoLogin">Último login</SelectItem>
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            <Button
              variant="outline"
              onClick={clearFilters}
              className="rounded-lg"
            >
              <X className="w-4 h-4 mr-2" />
              Limpar filtros
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8F8F8] border-b border-[#E0E0E0]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  E-mail
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  Aprovação
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  Último Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#777777] uppercase tracking-wider">
                  Perfil
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
              {filteredUsuarios.map((usuario) => (
                <tr key={usuario.id} className="hover:bg-[#F8F8F8] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-[#1A1A1A]">{usuario.nome}</div>
                    <div className="text-xs text-[#999999]">{usuario.empresa}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#777777]">{usuario.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-medium rounded-full ${
                      usuario.aprovacao === 'Aprovado' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {usuario.aprovacao}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#777777]">{usuario.ultimoLogin}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-medium rounded-full ${
                      usuario.perfil === 'User Master' 
                        ? 'bg-purple-100 text-purple-800' 
                        : usuario.perfil === 'Administrador'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {usuario.perfil}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-medium rounded-full ${
                      usuario.status === 'Ativo' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {usuario.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#777777]">{usuario.criadoEm}</div>
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
                        className="h-8 w-8 text-[#777777] hover:text-blue-600"
                      >
                        <KeyRound className="h-4 w-4" />
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
        {filteredUsuarios.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#777777]">Nenhum usuário encontrado</p>
          </div>
        )}
      </div>
    </div>
  );
}
