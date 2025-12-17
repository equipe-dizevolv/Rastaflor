import { Plus, Search, Eye, Edit, Trash2, Sprout } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AddSpeciesModal, SpeciesFormData } from '../modals/AddSpeciesModal';
import { ViewSpeciesModal } from '../modals/ViewSpeciesModal';
import { speciesService } from '../../services/species.service';
import { Species } from '../../types/species.types';
import { useAuth } from '../../contexts/AuthContext';

export function EspeciesColeta() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
  const [species, setSpecies] = useState<Species[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load species on component mount
  useEffect(() => {
    if (user) {
      loadSpecies();
    }
  }, [user]);

  const loadSpecies = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await speciesService.getAll({ is_active: true });
      setSpecies(data);
    } catch (err) {
      console.error('Error loading species:', err);
      setError('Erro ao carregar espécies. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddSpecies = async (data: SpeciesFormData) => {
    try {
      await speciesService.create({
        popular_name: data.popularName,
        scientific_name: data.scientificName,
        family: data.family,
        genus: data.genus,
        biome: data.biome,
        category: data.category,
        conservation_status: data.conservationStatus,
        description: data.description,
      });
      setIsAddModalOpen(false);
      await loadSpecies(); // Reload the list
    } catch (err) {
      console.error('Error creating species:', err);
      alert('Erro ao criar espécie. Tente novamente.');
    }
  };

  const handleUpdateSpecies = async (data: SpeciesFormData) => {
    if (!data.id) return;

    try {
      await speciesService.update(data.id, {
        popular_name: data.popularName,
        scientific_name: data.scientificName,
        family: data.family,
        genus: data.genus,
        biome: data.biome,
        category: data.category,
        conservation_status: data.conservationStatus,
        description: data.description,
      });
      setIsEditModalOpen(false);
      setSelectedSpecies(null);
      await loadSpecies(); // Reload the list
    } catch (err) {
      console.error('Error updating species:', err);
      alert('Erro ao atualizar espécie. Tente novamente.');
    }
  };

  const handleDeleteSpecies = async (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta espécie?')) {
      try {
        await speciesService.delete(id);
        await loadSpecies(); // Reload the list
      } catch (err) {
        console.error('Error deleting species:', err);
        alert('Erro ao excluir espécie. Tente novamente.');
      }
    }
  };

  const handleViewSpecies = (id: string) => {
    const specie = species.find(s => s.id === id);
    if (specie) {
      setSelectedSpecies(specie);
      setIsViewModalOpen(true);
    }
  };

  const handleEditSpecies = (id: string) => {
    const specie = species.find(s => s.id === id);
    if (specie) {
      setSelectedSpecies(specie);
      setIsEditModalOpen(true);
    }
  };

  const filteredSpecies = species.filter(s =>
    s.popular_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.scientific_name.toLowerCase().includes(searchQuery.toLowerCase())
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
        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-[8px]">
            <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
          </div>
        )}

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

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <p className="text-[#777777] dark:text-[#B0B0B0]">Carregando espécies...</p>
          </div>
        ) : (
          /* Species Card */
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
                        {specie.popular_name}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#1A1A1A] dark:text-white italic">
                        {specie.scientific_name}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#1A1A1A] dark:text-white">
                        {specie.family}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs ${
                            specie.is_active
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                          }`}
                        >
                          {specie.is_active ? 'Ativa' : 'Inativa'}
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
        )}
      </div>

      {/* Add Species Modal */}
      <AddSpeciesModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddSpecies}
      />

      {/* Edit Species Modal */}
      <AddSpeciesModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedSpecies(null);
        }}
        onSave={handleUpdateSpecies}
        editMode={true}
        initialData={selectedSpecies ? {
          id: selectedSpecies.id,
          popularName: selectedSpecies.popular_name,
          scientificName: selectedSpecies.scientific_name,
          family: selectedSpecies.family,
          genus: selectedSpecies.genus || '',
          biome: selectedSpecies.biome || '',
          category: selectedSpecies.category || '',
          conservationStatus: selectedSpecies.conservation_status || '',
          description: selectedSpecies.description || ''
        } : undefined}
      />

      {/* View Species Modal */}
      <ViewSpeciesModal
        isOpen={isViewModalOpen}
        onClose={() => {
          setIsViewModalOpen(false);
          setSelectedSpecies(null);
        }}
        species={selectedSpecies ? {
          id: selectedSpecies.id,
          popularName: selectedSpecies.popular_name,
          scientificName: selectedSpecies.scientific_name,
          family: selectedSpecies.family,
          genus: selectedSpecies.genus || '',
          biome: selectedSpecies.biome || '',
          category: selectedSpecies.category || '',
          conservationStatus: selectedSpecies.conservation_status || '',
          description: selectedSpecies.description || ''
        } : null}
      />
    </div>
  );
}