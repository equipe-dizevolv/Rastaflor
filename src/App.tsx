import React, { useState, useEffect } from 'react';
import { Login } from './components/auth/Login';
import { ModuleSelection } from './components/auth/ModuleSelection';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { AdminSidebar } from './components/layout/AdminSidebar';
import { AdminHeader } from './components/layout/AdminHeader';
import { Dashboard } from './components/pages/Dashboard';
import { Projects } from './components/pages/Projects';
import { ProjectDetails } from './components/pages/ProjectDetails';
import { Tasks } from './components/pages/Tasks';
import { Contracts } from './components/pages/Contracts';
import { Invoices } from './components/pages/Invoices';
import { Reports } from './components/pages/Reports';
import { Settings } from './components/pages/Settings';
import { Properties } from './components/pages/Properties';
import { PropertyDetail } from './components/pages/PropertyDetail';
import { AddProperty } from './components/pages/AddProperty';
import { Especies } from './components/pages/Especies';
import { Coletas } from './components/pages/Coletas';
import { Monitoramentos } from './components/pages/Monitoramentos';
import { Rotulos } from './components/pages/Rotulos';
import { Equipe } from './components/pages/Equipe';
import { EquipeRestauracao } from './components/pages/EquipeRestauracao';
import { ArvoresMatrizes } from './components/pages/ArvoresMatrizes';
import { DashboardColeta } from './components/pages/DashboardColeta';
import { PropriedadesColeta } from './components/pages/PropriedadesColeta';
import { EspeciesColeta } from './components/pages/EspeciesColeta';
import { AdminDashboard } from './components/pages/admin/AdminDashboard';
import { AdminEmpresas } from './components/pages/admin/AdminEmpresas';
import { AdminUsuarios } from './components/pages/admin/AdminUsuarios';
import { AdminBugs } from './components/pages/admin/AdminBugs';
import { AddPropertyModal } from './components/modals/AddPropertyModal';
import { InviteCompanyModal } from './components/modals/InviteCompanyModal';
import { UsageTipsModal } from './components/modals/UsageTipsModal';
import { ReportBugModal } from './components/modals/ReportBugModal';
import { Toaster } from 'sonner@2.0.3';
import { RelatoriosColeta } from './components/pages/RelatoriosColeta';
import { GestaoFinanciamento } from './components/pages/GestaoFinanciamento';
import { GestaoFornecedores } from './components/pages/GestaoFornecedores';
import { RelatorioPreview } from './components/pages/RelatorioPreview';
import { Notifications } from './components/pages/Notifications';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb";

interface PropertyFormData {
  name: string;
  location: string;
  area: string;
  owner: string;
  coordinates: string;
}

interface CompanyFormData {
  name: string;
  email: string;
  cnpj: string;
  phone: string;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [moduleSelected, setModuleSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentModule, setCurrentModule] = useState<'restauracao' | 'coleta' | 'admin'>('restauracao');
  const [isAddPropertyModalOpen, setIsAddPropertyModalOpen] = useState(false);
  const [isInviteCompanyModalOpen, setIsInviteCompanyModalOpen] = useState(false);
  const [isUsageTipsModalOpen, setIsUsageTipsModalOpen] = useState(false);
  const [isReportBugModalOpen, setIsReportBugModalOpen] = useState(false);

  // Define o favicon e título da página
  useEffect(() => {
    // Atualiza o título da página
    document.title = 'RastaFlor - Gestão de Restauração Ambiental';
    
    // Atualiza o favicon
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = '/rastaflor-logo.png';
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleModuleSelection = (module: 'restauracao' | 'coleta' | 'admin') => {
    setCurrentModule(module);
    setModuleSelected(true);
    if (module === 'admin') {
      setCurrentPage('admin-dashboard');
    } else {
      setCurrentPage('dashboard');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setModuleSelected(false);
    setCurrentPage('dashboard');
    setCurrentModule('restauracao');
    setIsAddPropertyModalOpen(false);
    setIsInviteCompanyModalOpen(false);
  };

  const handleBackToModules = () => {
    setModuleSelected(false);
    setCurrentPage('dashboard');
  };

  const handleModuleChange = (module: 'restauracao' | 'coleta' | 'admin') => {
    setCurrentModule(module);
    // Reset to dashboard when switching modules
    if (module === 'admin') {
      setCurrentPage('admin-dashboard');
    } else {
      setCurrentPage('dashboard');
    }
  };

  const handleAddPropertyClick = () => {
    setIsAddPropertyModalOpen(true);
  };

  const handleSaveProperty = (formData: PropertyFormData) => {
    // This would normally save to a database
    console.log('New property:', formData);
    setIsAddPropertyModalOpen(false);
    // Optional: Show success toast/notification
  };

  const handleInviteCompanyClick = () => {
    setIsInviteCompanyModalOpen(true);
  };

  const handleSaveCompany = (formData: CompanyFormData) => {
    // This would normally save to a database
    console.log('New company:', formData);
    setIsInviteCompanyModalOpen(false);
    // Optional: Show success toast/notification
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'dashboard':
        return 'Dashboard';
      case 'projects':
        return 'Projetos';
      case 'project-details':
        return 'Detalhes do Projeto';
      case 'tasks':
        return 'Gerenciamento de Tarefas';
      case 'contracts':
        return 'Contratos';
      case 'invoices':
        return 'Gestão de Notas Fiscais';
      case 'reports':
        return 'Relatórios';
      case 'settings':
        return 'Configurações';
      case 'properties':
        return currentModule === 'coleta' ? 'Propriedades & Matrizes' : 'Propriedades';
      case 'property-details':
        return 'Detalhes da Propriedade';
      case 'add-property':
        return 'Adicionar Propriedade';
      case 'especies':
        return 'Espécies';
      case 'coletas':
        return 'Coletas';
      case 'monitoramentos':
        return 'Monitoramentos';
      case 'rotulos':
        return 'Rótulos';
      case 'equipe':
        return 'Equipe';
      case 'equipe-restauracao':
        return 'Equipe';
      case 'arvores-matrizes':
        return 'Árvores Matrizes';
      case 'financiamento':
        return 'Financiadores';
      case 'fornecedores':
        return 'Fornecedores';
      case 'relatorios-coleta':
        return 'Relatórios de Coleta';
      case 'relatorio-preview':
        return 'Visualização de Relatório';
      case 'notifications':
        return 'Notificações';
      default:
        return 'Dashboard';
    }
  };

  const getPageSubtitle = () => {
    switch (currentPage) {
      case 'dashboard':
        return currentModule === 'restauracao' 
          ? 'Visão geral dos seus projetos de restauração ambiental'
          : 'Visão geral do Módulo de Coleta';
      case 'projects':
        return 'Gerencie seus projetos de restauração';
      case 'project-details':
        return 'Acompanhe o progresso e gerencie as atividades do projeto';
      case 'tasks':
        return 'Organize e acompanhe todas as tarefas';
      case 'contracts':
        return 'Gerencie contratos e acordos';
      case 'invoices':
        return 'Controle financeiro e documentação fiscal';
      case 'reports':
        return 'Análises e relatórios detalhados';
      case 'settings':
        return 'Configurações da plataforma';
      case 'properties':
        return currentModule === 'coleta' 
          ? 'Gestão unificada de propriedades e árvores matrizes'
          : 'Gerencie suas propriedades';
      case 'property-details':
        return 'Informações completas e atividades da propriedade';
      case 'add-property':
        return 'Adicione uma nova propriedade';
      case 'especies':
        return 'Gerencie as espécies';
      case 'coletas':
        return 'Gerencie as coletas';
      case 'monitoramentos':
        return 'Gerencie os monitoramentos';
      case 'rotulos':
        return 'Gerencie os rótulos';
      case 'equipe':
        return 'Gerencie a equipe';
      case 'equipe-restauracao':
        return 'Gerencie a equipe de restauração';
      case 'arvores-matrizes':
        return 'Gerencie as árvores matrizes';
      case 'financiamento':
        return 'Gerencie o financiamento';
      case 'fornecedores':
        return 'Gerencie os fornecedores';
      case 'relatorios-coleta':
        return 'Visualize e gere relatórios de coleta';
      case 'relatorio-preview':
        return 'Visualize o relatório de coleta';
      case 'notifications':
        return 'Gerencie suas notificações';
      default:
        return '';
    }
  };

  const getBreadcrumbs = () => {
    switch (currentPage) {
      case 'dashboard':
        return [{ label: 'Início', page: 'dashboard' }];
      case 'projects':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Projetos', page: 'projects' }
        ];
      case 'project-details':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Projetos', page: 'projects' },
          { label: 'Detalhes do Projeto', page: 'project-details' }
        ];
      case 'tasks':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Tarefas', page: 'tasks' }
        ];
      case 'contracts':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Financeiro', page: 'contracts' },
          { label: 'Contratos', page: 'contracts' }
        ];
      case 'invoices':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Financeiro', page: 'contracts' },
          { label: 'Notas Fiscais', page: 'invoices' }
        ];
      case 'reports':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Relatórios', page: 'reports' }
        ];
      case 'settings':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Configurações', page: 'settings' }
        ];
      case 'properties':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Propriedades', page: 'properties' }
        ];
      case 'property-details':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Propriedades', page: 'properties' },
          { label: 'Detalhes da Propriedade', page: 'property-details' }
        ];
      case 'add-property':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Propriedades', page: 'properties' },
          { label: 'Adicionar Propriedade', page: 'add-property' }
        ];
      case 'especies':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Especies', page: 'especies' }
        ];
      case 'coletas':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Coletas', page: 'coletas' }
        ];
      case 'monitoramentos':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Monitoramentos', page: 'monitoramentos' }
        ];
      case 'rotulos':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Rótulos', page: 'rotulos' }
        ];
      case 'equipe':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Equipe', page: 'equipe' }
        ];
      case 'equipe-restauracao':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Equipe', page: 'equipe-restauracao' }
        ];
      case 'arvores-matrizes':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Árvores Matrizes', page: 'arvores-matrizes' }
        ];
      case 'financiamento':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Financiamento', page: 'financiamento' }
        ];
      case 'fornecedores':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Fornecedores', page: 'fornecedores' }
        ];
      case 'relatorios-coleta':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Relatórios de Coleta', page: 'relatorios-coleta' }
        ];
      case 'relatorio-preview':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Relatórios de Coleta', page: 'relatorios-coleta' },
          { label: 'Visualização de Relatório', page: 'relatorio-preview' }
        ];
      case 'notifications':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Notificações', page: 'notifications' }
        ];
      default:
        return [{ label: 'Início', page: 'dashboard' }];
    }
  };

  const renderPage = () => {
    // Admin pages
    if (currentModule === 'admin') {
      switch (currentPage) {
        case 'admin-dashboard':
          return <AdminDashboard onInviteUser={handleInviteCompanyClick} />;
        case 'admin-empresas':
          return <AdminEmpresas onAddCompanyClick={handleInviteCompanyClick} />;
        case 'admin-usuarios':
          return <AdminUsuarios />;
        case 'admin-bugs':
          return <AdminBugs />;
        default:
          return <AdminDashboard onInviteUser={handleInviteCompanyClick} />;
      }
    }

    // Regular module pages
    switch (currentPage) {
      case 'dashboard':
        return currentModule === 'restauracao' 
          ? <Dashboard onPageChange={setCurrentPage} />
          : <DashboardColeta />;
      case 'projects':
        return <Projects onPageChange={setCurrentPage} />;
      case 'project-details':
        return <ProjectDetails onPageChange={setCurrentPage} />;
      case 'tasks':
        return <Tasks />;
      case 'contracts':
        return <Contracts />;
      case 'invoices':
        return <Invoices />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      case 'properties':
        return currentModule === 'coleta'
          ? <PropriedadesColeta />
          : <Properties onPageChange={(page: string, propertyId?: string) => {
              setCurrentPage(page);
              if (propertyId) setSelectedPropertyId(propertyId);
            }} />;
      case 'property-details':
        return <PropertyDetail 
          propertyId={selectedPropertyId || '1'} 
          onBack={() => setCurrentPage('properties')} 
        />;
      case 'add-property':
        return <AddProperty onPageChange={setCurrentPage} />;
      case 'especies':
        return currentModule === 'coleta'
          ? <EspeciesColeta />
          : <Especies />;
      case 'coletas':
        return <Coletas />;
      case 'monitoramentos':
        return <Monitoramentos />;
      case 'rotulos':
        return <Rotulos />;
      case 'equipe':
        return <Equipe />;
      case 'equipe-restauracao':
        return <EquipeRestauracao />;
      case 'arvores-matrizes':
        return <ArvoresMatrizes />;
      case 'financiamento':
        return <GestaoFinanciamento />;
      case 'fornecedores':
        return <GestaoFornecedores />;
      case 'relatorios-coleta':
        return <RelatoriosColeta onGenerateReport={() => setCurrentPage('relatorio-preview')} />;
      case 'relatorio-preview':
        return <RelatorioPreview onBack={() => setCurrentPage('relatorios-coleta')} />;
      case 'notifications':
        return <Notifications />;
      default:
        return <Dashboard onPageChange={setCurrentPage} />;
    }
  };

  // Login screen
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Module selection screen
  if (!moduleSelected) {
    return <ModuleSelection onSelectModule={handleModuleSelection} />;
  }

  return (
    <div className={`h-screen flex ${isDarkMode ? 'dark bg-[#1A1A1A] text-white' : 'bg-[#F8F8F8] text-[#1A1A1A]'}`}>
      {/* Sidebar - Full Height */}
      {currentModule === 'admin' ? (
        <AdminSidebar 
          currentPage={currentPage} 
          onPageChange={setCurrentPage} 
          isDarkMode={isDarkMode}
          onBackToModules={handleBackToModules}
          onLogout={handleLogout}
        />
      ) : (
        <Sidebar 
          currentPage={currentPage} 
          onPageChange={setCurrentPage} 
          isDarkMode={isDarkMode}
          currentModule={currentModule === 'admin' ? 'restauracao' : currentModule}
          onModuleChange={handleModuleChange}
        />
      )}
      
      {/* Main Content Area: Header + Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        {currentModule === 'admin' ? (
          <AdminHeader 
            isDarkMode={isDarkMode} 
            onToggleTheme={() => setIsDarkMode(!isDarkMode)}
          />
        ) : (
          <Header 
            isDarkMode={isDarkMode} 
            onToggleTheme={() => setIsDarkMode(!isDarkMode)}
            onLogout={handleLogout}
            onPageChange={setCurrentPage}
          />
        )}
        
        {/* Content Area */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Page Header */}
          <div className="px-6 py-5">
            <div className="flex items-center justify-between pt-[0px] pr-[24px] pb-[0px] pl-[0px]">
              <div className="space-y-1">
                {currentPage !== 'property-details' && (
                  <>
                    <h1 className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>{getPageTitle()}</h1>
                    <p className={isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}>{getPageSubtitle()}</p>
                  </>
                )}
                
                {/* Breadcrumb */}
                <div className={currentPage !== 'property-details' ? 'pt-2' : ''}>
                  <Breadcrumb>
                    <BreadcrumbList>
                      {getBreadcrumbs().map((crumb, index) => (
                        <span key={index} className="flex items-center">
                          {index > 0 && <BreadcrumbSeparator />}
                          <BreadcrumbItem>
                            {index === getBreadcrumbs().length - 1 ? (
                              <BreadcrumbPage className={isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}>
                                {crumb.label}
                              </BreadcrumbPage>
                            ) : (
                              <BreadcrumbLink
                                onClick={() => setCurrentPage(crumb.page)}
                                className={`cursor-pointer ${isDarkMode ? 'text-[#B0B0B0] hover:text-white' : 'text-[#777777] hover:text-[#1A1A1A]'}`}
                              >
                                {crumb.label}
                              </BreadcrumbLink>
                            )}
                          </BreadcrumbItem>
                        </span>
                      ))}
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </div>
              
              {/* Dicas de uso button - only show on Coleta dashboard */}
              {currentPage === 'dashboard' && currentModule === 'coleta' && (
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px] px-4 py-2 flex items-center gap-2 transition-colors" onClick={() => setIsUsageTipsModalOpen(true)}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33333} d="M8 1.33334V3.33334M8 12.6667V14.6667M3.28595 3.28596L4.69995 4.69996M11.3 11.3L12.714 12.714M1.33334 8H3.33334M12.6667 8H14.6667M3.28595 12.714L4.69995 11.3M11.3 4.69996L12.714 3.28596" />
                  </svg>
                  <span className="text-sm">Dicas de uso</span>
                </button>
              )}
              
              {/* Dicas de uso button - only show on Restauração dashboard */}
              {currentPage === 'dashboard' && currentModule === 'restauracao' && (
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px] px-4 py-2 flex items-center gap-2 transition-colors" onClick={() => setIsUsageTipsModalOpen(true)}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33333} d="M8 1.33334V3.33334M8 12.6667V14.6667M3.28595 3.28596L4.69995 4.69996M11.3 11.3L12.714 12.714M1.33334 8H3.33334M12.6667 8H14.6667M3.28595 12.714L4.69995 11.3M11.3 4.69996L12.714 3.28596" />
                  </svg>
                  <span className="text-sm">Dicas de uso</span>
                </button>
              )}
              
              {/* Adicionar Propriedade button - only show on Coleta properties page */}
              {currentPage === 'properties' && currentModule === 'coleta' && (
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px] px-4 py-2 flex items-center gap-2 transition-colors" onClick={handleAddPropertyClick}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33333} d="M3.33333 8H12.6667M8 3.33333V12.6667" />
                  </svg>
                  <span className="text-sm">Adicionar Propriedade</span>
                </button>
              )}
              
              {/* Convidar Empresa button - only show on Admin Dashboard */}
              {currentPage === 'admin-dashboard' && currentModule === 'admin' && (
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px] px-4 py-2 flex items-center gap-2 transition-colors" onClick={handleInviteCompanyClick}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33333} d="M3.33333 8H12.6667M8 3.33333V12.6667" />
                  </svg>
                  <span className="text-sm">Convidar Empresa</span>
                </button>
              )}
            </div>
          </div>
          
          <main className={`flex-1 overflow-auto ${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-[#F8F8F8]'}`}>
            {renderPage()}
          </main>
        </div>
      </div>

      {/* Add Property Modal */}
      <AddPropertyModal
        isOpen={isAddPropertyModalOpen}
        onClose={() => setIsAddPropertyModalOpen(false)}
        onSave={handleSaveProperty}
      />

      {/* Invite Company Modal */}
      <InviteCompanyModal
        isOpen={isInviteCompanyModalOpen}
        onClose={() => setIsInviteCompanyModalOpen(false)}
        onSubmit={handleSaveCompany}
      />

      {/* Usage Tips Modal */}
      <UsageTipsModal
        isOpen={isUsageTipsModalOpen}
        onClose={() => setIsUsageTipsModalOpen(false)}
        module={currentModule}
      />

      {/* Report Bug Modal */}
      <ReportBugModal
        isOpen={isReportBugModalOpen}
        onClose={() => setIsReportBugModalOpen(false)}
      />

      {/* Floating Bug Report Button - Available on all pages except admin pages */}
      {currentModule !== 'admin' && (
        <button
          onClick={() => setIsReportBugModalOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-40"
          title="Reportar Bug"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </button>
      )}

      {/* Toast Notifications */}
      <Toaster position="top-right" richColors closeButton />
    </div>
  );
}