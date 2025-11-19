import { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './components/pages/Dashboard';
import { Projects } from './components/pages/Projects';
import { ProjectDetails } from './components/pages/ProjectDetails';
import { Tasks } from './components/pages/Tasks';
import { Contracts } from './components/pages/Contracts';
import { Invoices } from './components/pages/Invoices';
import { Reports } from './components/pages/Reports';
import { Settings } from './components/pages/Settings';
import { Properties } from './components/pages/Properties';
import { AddProperty } from './components/pages/AddProperty';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb";

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentModule, setCurrentModule] = useState<'restauracao' | 'coleta'>('restauracao');

  const handleModuleChange = (module: 'restauracao' | 'coleta') => {
    setCurrentModule(module);
    // Reset to dashboard when switching modules
    setCurrentPage('dashboard');
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
        return 'Propriedades';
      case 'add-property':
        return 'Adicionar Propriedade';
      default:
        return 'Dashboard';
    }
  };

  const getPageSubtitle = () => {
    switch (currentPage) {
      case 'dashboard':
        return 'Visão geral dos seus projetos de restauração ambiental';
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
        return 'Gerencie suas propriedades';
      case 'add-property':
        return 'Adicione uma nova propriedade';
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
      case 'add-property':
        return [
          { label: 'Início', page: 'dashboard' },
          { label: 'Propriedades', page: 'properties' },
          { label: 'Adicionar Propriedade', page: 'add-property' }
        ];
      default:
        return [{ label: 'Início', page: 'dashboard' }];
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onPageChange={setCurrentPage} />;
      case 'projects':
        return <Projects onPageChange={setCurrentPage} />;
      case 'project-details':
        return <ProjectDetails />;
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
        return <Properties onPageChange={setCurrentPage} />;
      case 'add-property':
        return <AddProperty onPageChange={setCurrentPage} />;
      default:
        return <Dashboard onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className={`h-screen flex ${isDarkMode ? 'dark bg-[#1A1A1A] text-white' : 'bg-[#F8F8F8] text-[#1A1A1A]'}`}>
      {/* Sidebar - Full Height */}
      <Sidebar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
        isDarkMode={isDarkMode}
        currentModule={currentModule}
        onModuleChange={handleModuleChange}
      />
      
      {/* Main Content Area: Header + Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <Header isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode(!isDarkMode)} />
        
        {/* Content Area */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Page Header */}
          <div className="px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h1 className={isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}>{getPageTitle()}</h1>
                <p className={isDarkMode ? 'text-[#B0B0B0]' : 'text-[#777777]'}>{getPageSubtitle()}</p>
                
                {/* Breadcrumb */}
                <div className="pt-2">
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
            </div>
          </div>
          
          <main className={`flex-1 overflow-auto ${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-[#F8F8F8]'}`}>
            {renderPage()}
          </main>
        </div>
      </div>
    </div>
  );
}