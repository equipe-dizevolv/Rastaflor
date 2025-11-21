import { Plus, Search, Eye, Edit, Trash2, Calendar } from 'lucide-react';
import { useState } from 'react';
import { AddCollectionModal, CollectionFormData } from '../modals/AddCollectionModal';
import { EditCollectionModal } from '../modals/EditCollectionModal';
import { ViewCollectionModal } from '../modals/ViewCollectionModal';
import { ConfirmDeleteModal } from '../modals/ConfirmDeleteModal';

interface Collection {
  id: string;
  species: string;
  scientificName: string;
  collectionDate: string;
  weight: string;
  type: string;
  origin: string;
  collector: string;
  status: 'Concluída' | 'Pendente' | 'Em Análise';
}

export function ColetasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [collections, setCollections] = useState<Collection[]>([
    {
      id: '1',
      species: 'Ipê-amarelo',
      scientificName: 'Handroanthus chrysotrichus',
      collectionDate: '15/12/2024',
      weight: '2.5 kg',
      type: 'Coleta Manual',
      origin: 'Fazenda Santa Rita - Matriz 001',
      collector: 'João Silva',
      status: 'Concluída'
    },
    {
      id: '2',
      species: 'Pau-brasil',
      scientificName: 'Paubrasilia echinata',
      collectionDate: '10/12/2024',
      weight: '1.8 kg',
      type: 'Coleta com Rede',
      origin: 'Fazenda Boa Vista - Matriz 003',
      collector: 'Maria Santos',
      status: 'Concluída'
    },
    {
      id: '3',
      species: 'Jatobá',
      scientificName: 'Hymenaea courbaril',
      collectionDate: '08/12/2024',
      weight: '4.2 kg',
      type: 'Coleta Manual',
      origin: 'Sítio Verde - Matriz 005',
      collector: 'Pedro Costa',
      status: 'Em Análise'
    },
    {
      id: '4',
      species: 'Cedro',
      scientificName: 'Cedrela fissilis',
      collectionDate: '05/12/2024',
      weight: '3.1 kg',
      type: 'Coleta Manual',
      origin: 'Fazenda Santa Rita - Matriz 002',
      collector: 'Ana Paula',
      status: 'Concluída'
    },
    {
      id: '5',
      species: 'Araucária',
      scientificName: 'Araucaria angustifolia',
      collectionDate: '01/12/2024',
      weight: '5.6 kg',
      type: 'Coleta do Solo',
      origin: 'Reserva Alto da Serra - Matriz 008',
      collector: 'Carlos Lima',
      status: 'Concluída'
    }
  ]);

  const handleAddCollection = (data: CollectionFormData) => {
    const newCollection: Collection = {
      id: `col-${Date.now()}`,
      species: data.species,
      scientificName: data.scientificName || '',
      collectionDate: new Date(data.collectionDate).toLocaleDateString('pt-BR'),
      weight: `${data.weight} kg`,
      type: data.collectionType,
      origin: data.origin,
      collector: data.collector || 'Não informado',
      status: 'Pendente'
    };
    setCollections([newCollection, ...collections]);
    setIsAddModalOpen(false);
  };

  const handleEditCollection = (id: string, data: CollectionFormData) => {
    const updatedCollection: Collection = {
      id: id,
      species: data.species,
      scientificName: data.scientificName || '',
      collectionDate: new Date(data.collectionDate).toLocaleDateString('pt-BR'),
      weight: `${data.weight} kg`,
      type: data.collectionType,
      origin: data.origin,
      collector: 'Não informado',
      status: 'Pendente'
    };
    setCollections(collections.map(c => c.id === id ? updatedCollection : c));
    setIsEditModalOpen(false);
  };

  const handleDeleteCollection = () => {
    if (selectedCollection) {
      setCollections(collections.filter(c => c.id !== selectedCollection.id));
    }
  };

  const filteredCollections = collections.filter(c =>
    c.species.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.origin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: Collection['status']) => {
    switch (status) {
      case 'Concluída':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Pendente':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Em Análise':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="h-full flex flex-col bg-white dark:bg-[#1A1A1A]">
      {/* Page Header */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-[#E0E0E0] dark:border-border">
        <div>
          <h1 className="text-[#1A1A1A] dark:text-white mb-2">Gestão de Coletas</h1>
          <p className="text-[#777777] dark:text-[#B0B0B0]">
            Registro e acompanhamento de coletas de sementes
          </p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[8px] px-4 py-2 flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Registrar Nova Coleta
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
            placeholder="Buscar por espécie, origem ou coletor..."
            className="w-full h-9 pl-10 pr-4 bg-[#F8F8F8] dark:bg-[#1E2621] border border-[#E0E0E0] dark:border-border rounded-[8px] text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#777777] dark:placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
        </div>

        {/* Collections Card */}
        <div className="bg-white dark:bg-card rounded-[12px] border border-[#E0E0E0] dark:border-border overflow-hidden">
          {/* Card Header */}
          <div className="px-4 py-3 border-b border-[#E0E0E0] dark:border-border">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <h2 className="text-[#1A1A1A] dark:text-white">
                Coletas Registradas ({filteredCollections.length})
              </h2>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F8F8F8] dark:bg-[#1E2621]">
                  <th className="px-4 py-2.5 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Espécie
                  </th>
                  <th className="px-4 py-2.5 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Data da Coleta
                  </th>
                  <th className="px-4 py-2.5 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Peso
                  </th>
                  <th className="px-4 py-2.5 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Tipo
                  </th>
                  <th className="px-4 py-2.5 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Origem
                  </th>
                  <th className="px-4 py-2.5 text-left text-sm text-[#777777] dark:text-[#B0B0B0]">
                    Coletor
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
                {filteredCollections.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-12 text-center">
                      <p className="text-[#777777] dark:text-[#B0B0B0]">
                        Nenhuma coleta encontrada
                      </p>
                    </td>
                  </tr>
                ) : (
                  filteredCollections.map((collection) => (
                    <tr
                      key={collection.id}
                      className="border-t border-[#E0E0E0] dark:border-border hover:bg-[#F8F8F8] dark:hover:bg-[#1E2621] transition-colors"
                    >
                      <td className="px-4 py-3">
                        <div>
                          <p className="text-sm text-[#1A1A1A] dark:text-white">
                            {collection.species}
                          </p>
                          <p className="text-xs text-[#777777] dark:text-[#B0B0B0] italic">
                            {collection.scientificName}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#1A1A1A] dark:text-white">
                        {collection.collectionDate}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#1A1A1A] dark:text-white">
                        {collection.weight}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#1A1A1A] dark:text-white">
                        {collection.type}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#1A1A1A] dark:text-white">
                        {collection.origin}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#1A1A1A] dark:text-white">
                        {collection.collector}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs ${getStatusColor(
                            collection.status
                          )}`}
                        >
                          {collection.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            title="Visualizar"
                            className="p-1.5 hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] rounded-[8px] transition-colors"
                            onClick={() => {
                              setSelectedCollection(collection);
                              setIsViewModalOpen(true);
                            }}
                          >
                            <Eye className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                          </button>
                          <button
                            title="Editar"
                            className="p-1.5 hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] rounded-[8px] transition-colors"
                            onClick={() => {
                              setSelectedCollection(collection);
                              setIsEditModalOpen(true);
                            }}
                          >
                            <Edit className="w-4 h-4 text-[#777777] dark:text-[#B0B0B0]" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedCollection(collection);
                              setIsDeleteModalOpen(true);
                            }}
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

      {/* Add Collection Modal */}
      <AddCollectionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddCollection}
      />

      {/* Edit Collection Modal */}
      <EditCollectionModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleEditCollection}
        collection={selectedCollection}
      />

      {/* View Collection Modal */}
      <ViewCollectionModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        collection={selectedCollection}
      />

      {/* Confirm Delete Modal */}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteCollection}
        itemName={selectedCollection?.species}
        message="Tem certeza que deseja excluir a coleta de"
      />
    </div>
  );
}