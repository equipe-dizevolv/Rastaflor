import { Plus, Search, Eye, Edit, Trash2, Sprout } from 'lucide-react';
import { useState } from 'react';
import { AddSpeciesModal, SpeciesFormData } from '../modals/AddSpeciesModal';

interface Species {
  id: string;
  popularName: string;
  scientificName: string;
  family: string;
  status: 'Ativa' | 'Inativa';
}

export function EspeciesColeta() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [species, setSpecies] = useState<Species[]>([
    {
      id: '1',
      popularName: 'Ipê-amarelo',
      scientificName: 'Handroanthus chrysotrichus',
      family: 'Bignoniaceae',
      status: 'Ativa'
    },
    {
      id: '2',
      popularName: 'Pau-brasil',
      scientificName: 'Paubrasilia echinata',
      family: 'Fabaceae',
      status: 'Ativa'
    },
    {
      id: '3',
      popularName: 'Jatobá',
      scientificName: 'Hymenaea courbaril',
      family: 'Fabaceae',
      status: 'Ativa'
    },
    {
      id: '4',
      popularName: 'Cedro',
      scientificName: 'Cedrela fissilis',
      family: 'Meliaceae',
      status: 'Ativa'
    },
    {
      id: '5',
      popularName: 'Araucária',
      scientificName: 'Araucaria angustifolia',
      family: 'Araucariaceae',
      status: 'Ativa'
    },
    {
      id: '6',
      popularName: 'Jacarandá-da-bahia',
      scientificName: 'Dalbergia nigra',
      family: 'Fabaceae',
      status: 'Ativa'
    },
    {
      id: '7',
      popularName: 'Peroba-rosa',
      scientificName: 'Aspidosperma polyneuron',
      family: 'Apocynaceae',
      status: 'Ativa'
    },
    {
      id: '8',
      popularName: 'Mogno',
      scientificName: 'Swietenia macrophylla',
      family: 'Meliaceae',
      status: 'Ativa'
    }
  ]);

  const handleAddSpecies = (data: SpeciesFormData) => {
    const newSpecies: Species = {
      id: `species-${Date.now()}`,
      popularName: data.popularName,
      scientificName: data.scientificName,
      family: data.family,
      status: 'Ativa'
    };
    setSpecies([...species, newSpecies]);
    setIsAddModalOpen(false);
  };

  const handleDeleteSpecies = (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta espécie?')) {
      setSpecies(species.filter(s => s.id !== id));
    }
  };

  const handleViewSpecies = (id: string) => {
    console.log('Visualizar espécie ID:', id);
    // TODO: Abrir modal de visualização
  };

  const handleEditSpecies = (id: string) => {
    console.log('Editar espécie ID:', id);
    // TODO: Abrir modal de edição
  };

  const filteredSpecies = species.filter(s =>
    s.popularName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col bg-white dark:bg-[#1A1A1A]">
      {/* Page Header */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-[#E0E0E0] dark:border-border">
        <div>
          <h1 className="text-[#1A1A1A] dark:text-white mb-2">Gestão de Espécies</h1>
          <p className="text-[#777777] dark:text-[#B0B0B0]">
            Cadastro e gerenciamento de espécies nativas
          </p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[8px] px-4 py-2 flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Adicionar Nova Espécie
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto p-6">
        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#777777] dark:text-[#B0B0B0]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por nome popular ou científico..."
            className="w-full h-9 pl-10 pr-4 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
        </div>

        {/* Species Card */}
        <div className="bg-white dark:bg-card rounded-[12px] border border-[#E0E0E0] dark:border-border overflow-hidden">
          {/* Card Header */}
          <div className="px-4 py-3 border-b border-[#E0E0E0] dark:border-border">
            <div className="flex items-center gap-2">
              <Sprout className="w-5 h-5 text-green-600" />
              <h2 className="text-[#1A1A1A] dark:text-white">
                Espécies Cadastradas ({filteredSpecies.length})
              </h2>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F8F8F8] dark:bg-[#1E2621]">
                  <th className="px-4 py-2.5 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Nome Popular
                  </th>
                  <th className="px-4 py-2.5 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Espécie (Nome Científico)
                  </th>
                  <th className="px-4 py-2.5 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Família
                  </th>
                  <th className="px-4 py-2.5 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Status
                  </th>
                  <th className="px-4 py-2.5 text-center text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredSpecies.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-12 text-center">
                      <p className="text-[#777777] dark:text-[#B0B0B0]">
                        Nenhuma espécie encontrada
                      </p>
                    </td>
                  </tr>
                ) : (
                  filteredSpecies.map((specie) => (
                    <tr
                      key={specie.id}
                      className="border-t border-[#E0E0E0] dark:border-border hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors"
                    >
                      <td className="px-4 py-3 text-sm text-[#1A1A1A] dark:text-white">
                        {specie.popularName}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#1A1A1A] dark:text-white italic">
                        {specie.scientificName}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#1A1A1A] dark:text-white">
                        {specie.family}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs ${
                            specie.status === 'Ativa'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                          }`}
                        >
                          {specie.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleViewSpecies(specie.id)}
                            title="Visualizar"
                            className="p-1.5 hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] rounded-[8px] transition-colors"
                          >
                            <Eye className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                          </button>
                          <button
                            onClick={() => handleEditSpecies(specie.id)}
                            title="Editar"
                            className="p-1.5 hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] rounded-[8px] transition-colors"
                          >
                            <Edit className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                          </button>
                          <button
                            onClick={() => handleDeleteSpecies(specie.id)}
                            title="Excluir"
                            className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-[8px] transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Species Modal */}
      <AddSpeciesModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddSpecies}
      />
    </div>
  );
}