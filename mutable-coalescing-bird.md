# Análise Completa e Plano de Ação - Sistema RastaFlor

## 1. ANÁLISE TÉCNICA DO SISTEMA

### 1.1 Framework e Stack Tecnológico

**Framework Principal:** React 18.3.1 com Vite 6.3.5

**Stack Completo:**
- **Build Tool:** Vite com plugin React SWC (compilação rápida)
- **UI Framework:** React 18.3.1 com TypeScript
- **Component Library:** Radix UI (20+ componentes acessíveis)
- **Styling:** Tailwind CSS + class-variance-authority
- **Ícones:** Lucide React (0.487.0)
- **Forms:** React Hook Form (7.55.0)
- **Charts:** Recharts (2.15.2)
- **Dates:** date-fns + react-day-picker (8.10.1)
- **Notifications:** Sonner (2.0.3)
- **Theming:** next-themes (0.4.6) - Dark/Light mode
- **QR Codes:** qrcode.react
- **Carousels:** embla-carousel-react (8.6.0)
- **Development:** @vitejs/plugin-react-swc

**Arquitetura:**
- Aplicação SPA (Single Page Application)
- Roteamento customizado baseado em estado (sem React Router)
- Gerenciamento de estado local com React Hooks
- Componentes funcionais com TypeScript
- Pattern de composição de componentes

---

## 2. PRD (PRODUCT REQUIREMENTS DOCUMENT) COMPLETO

### 2.1 Visão Geral do Produto

**Nome:** RastaFlor - Sistema de Gestão Ambiental

**Descrição:** Plataforma integrada para gerenciamento de projetos de restauração florestal e coleta de sementes nativas, com foco em rastreabilidade, compliance regulatório e análise de impacto ambiental.

**Proposta de Valor:**
- Centralizar dados de projetos de restauração ambiental
- Rastrear coletas de sementes desde a árvore matriz até o plantio
- Gerar documentação regulatória (rótulos RENASEM, relatórios)
- Monitorar fenologia de espécies nativas
- Gerenciar contratos e aspectos financeiros
- Fornecer analytics para tomada de decisão

---

### 2.2 Módulos do Sistema

#### **MÓDULO 1: RESTAURAÇÃO (Restoration Module)**

**Objetivo:** Gerenciar projetos completos de restauração florestal desde o planejamento até a execução e monitoramento.

**Funcionalidades Principais:**

1. **Dashboard de Restauração**
   - KPIs: Hectares plantados, Mudas plantadas, Sementes plantadas
   - Lista de projetos ativos
   - Status das propriedades
   - Níveis de degradação

2. **Gestão de Projetos**
   - Wizard de criação de projetos (3 passos)
   - Registro de atividades de campo
   - Upload de fotos e documentação
   - Histórico de visitas
   - Gestão de tarefas (Kanban-style)
   - Cronograma de atividades

3. **Gestão de Propriedades**
   - Cadastro de propriedades rurais
   - Dados cadastrais (endereço, coordenadas GPS)
   - Divisão em áreas/talhões
   - Classificação (APP, Reserva Legal)
   - Informações de declividade e degradação

4. **Registro de Plantios**
   - Data e área plantada (hectares)
   - Modelo de restauração utilizado
   - Quantidade de mudas e sementes
   - Espécies plantadas
   - Espaçamento e arranjo

5. **Gestão de Contratos**
   - Upload de contratos com fornecedores
   - Informações do fornecedor
   - Controle de versões de documentos
   - Status e vigência

6. **Gestão de Notas Fiscais**
   - Registro de NFs de compra
   - Vinculação a projetos
   - Categorização de despesas
   - Controle orçamentário

7. **Relatórios Executivos**
   - Sumário executivo com métricas
   - Relatório por propriedade
   - Análise financeira
   - Tabelas de dados (espécies, fornecedores)
   - Exportação para PDF/impressão

---

#### **MÓDULO 2: COLETA (Collection Module)**

**Objetivo:** Gerenciar todo o ciclo de coleta de sementes nativas, desde a identificação de matrizes até a certificação e armazenamento.

**Funcionalidades Principais:**

1. **Dashboard de Coleta**
   - KPIs: Total de matrizes, Espécies cadastradas, Kg de sementes coletadas
   - Quantidade de coletas realizadas
   - Status fenológico das espécies (floração, frutificação)
   - Mapa de calor de atividades

2. **Gestão de Propriedades e Matrizes**
   - Cadastro de propriedades de coleta
   - Registro de árvores matrizes com:
     - Dados taxonômicos (Família, Gênero, Espécie)
     - Dados biométricos (Altura, CAP, DAP)
     - Localização GPS (Latitude, Longitude)
     - Posição da matriz (Isolada, Borda, Trilha, Interior)
     - Categoria de fonte de sementes (RENASEM)
     - Informações ecológicas (fitofisionomia, solo, densidade)
     - Galeria de fotos
     - Períodos de floração/frutificação

3. **Catálogo de Espécies**
   - Banco de dados de espécies nativas
   - Nome popular e científico
   - Família botânica
   - Bioma de ocorrência
   - Categoria sucessional
   - Status de conservação (IUCN)
   - Descrição e características

4. **Gestão de Coletas**
   - Wizard de registro de coleta (3 etapas):
     - **Etapa 1:** Dados da coleta (espécie, data, peso, tipo)
     - **Etapa 2:** Origem (matriz ou propriedade)
     - **Etapa 3:** Objetivo e observações
   - Tipos de coleta: Manual, Com Rede, Do Solo, Com Podão, Por Escalada
   - Status: Concluída, Pendente, Em Análise
   - Rastreabilidade completa

5. **Sistema de Monitoramento Fenológico**
   - Registro periódico de estágios fenológicos:
     - Vegetativo
     - Floração
     - Frutificação
     - Fruto Verde
     - Fruto Maduro
     - Dispersão de Sementes
   - Histórico por matriz
   - Calendário fenológico por espécie
   - Alertas de época de coleta
   - Filtros: Apenas isoladas, Apenas em sítios de coleta

6. **Geração de Rótulos (RENASEM Compliance)**
   - Formulário completo com:
     - Identificação da espécie
     - Número do lote (auto-gerado: LT-YYYY-###)
     - Peso do lote
     - RENASEM e CNPJ do produtor
     - Nome do comprador
     - Taxa de germinação (%)
     - Data de validade/teste
     - Município de coleta
     - Destino/finalidade
   - Impressão de múltiplos rótulos
   - QR Code para rastreabilidade
   - Visualização e edição

7. **Relatórios de Coleta**
   - Relatórios por período
   - Relatórios por espécie
   - Relatórios por matriz
   - Performance de coletores
   - Previsão de safras

8. **Gestão de Equipe**
   - Cadastro de coletores
   - Atribuição de responsabilidades
   - Histórico de atividades por pessoa

---

#### **MÓDULO 3: PAINEL ADMIN**

**Objetivo:** Administração do sistema, gestão de usuários e organizações.

**Funcionalidades Principais:**

1. **Dashboard Administrativo**
   - Métricas gerais do sistema
   - Uso por módulo
   - Atividade recente

2. **Gestão de Empresas/Organizações**
   - Multi-tenancy support
   - Cadastro de empresas
   - Configurações por empresa
   - Convites para novas empresas

3. **Gestão de Usuários**
   - Cadastro de usuários
   - Perfis e permissões
   - Atribuição a empresas
   - Controle de acesso

4. **Sistema de Bug Report**
   - Registro de issues
   - Categorização
   - Status de resolução
   - Priorização

---

### 2.3 Modelos de Dados (Entidades Principais)

#### **Property (Propriedade)**
```typescript
{
  id: string
  name: string
  cep: string
  street: string
  number: string
  neighborhood: string
  city: string
  state: string
  latitude: string
  longitude: string
  createdAt: timestamp
  updatedAt: timestamp
  companyId: string (FK)
}
```

#### **Matrix (Árvore Matriz)**
```typescript
{
  id: string
  propertyId: string (FK)

  // Taxonomia
  popularName: string
  family: string
  genus: string
  species: string
  speciesId: string (FK)

  // Biometria
  identificationNumber: string (único)
  height: decimal
  circumference: decimal (CAP)
  diameter: decimal (DAP)

  // Localização
  latitude: decimal
  longitude: decimal
  matrixPosition: enum ['isolated', 'border', 'trail', 'inside']
  inCollectionSite: boolean

  // Fonte de Sementes (RENASEM)
  origin: enum ['natural', 'planted']
  categoryIdentified: boolean
  categorySelected: boolean
  categoryQualified: boolean
  categoryTested: boolean

  // Informações Ecológicas
  exsicataCollection: enum ['yes', 'no']
  vegetativeStage: string
  speciesDensity: enum ['rare', 'medium', 'abundant']
  phytogeographicUnit: string
  landscape: string
  soilType: string

  // Períodos Fenológicos (JSON)
  floweringPeriod: { start: string, end: string }
  fruitingPeriod: { start: string, end: string }

  observations: text
  photos: jsonb (array de URLs)

  createdAt: timestamp
  updatedAt: timestamp
  createdBy: string (FK User)
}
```

#### **Species (Espécie)**
```typescript
{
  id: string
  popularName: string
  scientificName: string (único)
  family: string
  genus: string
  biome: string
  category: string (sucessional)
  conservationStatus: string (IUCN)
  description: text

  createdAt: timestamp
  updatedAt: timestamp
}
```

#### **Collection (Coleta)**
```typescript
{
  id: string
  speciesId: string (FK)
  collectionDate: date
  weight: decimal (kg)
  collectionType: enum ['manual', 'net', 'ground', 'pole', 'climbing']

  // Origem
  originType: enum ['property', 'matrix']
  propertyId: string (FK, nullable)
  matrixId: string (FK, nullable)

  collectionObjective: text
  observations: text

  collectorId: string (FK User)
  status: enum ['completed', 'pending', 'analyzing']

  createdAt: timestamp
  updatedAt: timestamp
  companyId: string (FK)
}
```

#### **Monitoring (Monitoramento)**
```typescript
{
  id: string
  matrixId: string (FK)
  monitoringDate: date
  responsibleId: string (FK User)

  // Estágios Fenológicos (array de enums)
  phenologicalStages: enum[] [
    'vegetative',
    'flowering',
    'fruiting',
    'green_fruit',
    'ripe_fruit',
    'dispersal'
  ]

  observations: text
  photos: jsonb (array de URLs)

  createdAt: timestamp
  updatedAt: timestamp
}
```

#### **Label (Rótulo)**
```typescript
{
  id: string

  // Identificação
  batchNumber: string (único, formato: LT-YYYY-###)
  popularName: string
  scientificName: string

  // Lote
  weight: decimal (kg)
  collectionId: string (FK, nullable)

  // Produtor
  renasem: string
  cnpj: string
  buyerName: string

  // Qualidade
  germinationRate: decimal (%)
  validityDate: date

  // Origem
  collectionMunicipality: string
  destination: string
  collectionDate: date

  createdAt: timestamp
  updatedAt: timestamp
  companyId: string (FK)
}
```

#### **Project (Projeto)**
```typescript
{
  id: string
  title: string
  description: text
  stage: string
  startDate: date
  endDate: date (nullable)

  companyId: string (FK)
  createdBy: string (FK User)

  createdAt: timestamp
  updatedAt: timestamp
}
```

#### **Planting (Plantio)**
```typescript
{
  id: string
  projectId: string (FK)
  propertyId: string (FK)
  areaId: string (FK)

  plantingDate: date
  hectares: decimal
  restorationModel: string
  seedlings: integer
  seeds: decimal (kg)
  spacing: string

  // Espécies plantadas (relacionamento many-to-many)

  createdAt: timestamp
  updatedAt: timestamp
}
```

#### **Activity (Atividade)**
```typescript
{
  id: string
  projectId: string (FK)
  propertyId: string (FK)

  activityType: string
  description: text
  observations: text
  activityDate: date

  responsibleId: string (FK User)
  photos: jsonb (array de URLs)

  createdAt: timestamp
  updatedAt: timestamp
}
```

#### **Contract (Contrato)**
```typescript
{
  id: string
  fileName: string
  supplier: string
  fileUrl: string
  fileSize: bigint
  fileType: string

  projectId: string (FK, nullable)
  companyId: string (FK)

  createdAt: timestamp
  updatedAt: timestamp
}
```

#### **Invoice (Nota Fiscal)**
```typescript
{
  id: string
  invoiceNumber: string
  issueDate: date
  amount: decimal
  supplier: string
  category: string

  projectId: string (FK)
  companyId: string (FK)

  fileUrl: string

  createdAt: timestamp
  updatedAt: timestamp
}
```

#### **Company (Empresa)**
```typescript
{
  id: string
  name: string
  cnpj: string (único)
  email: string
  phone: string

  // Endereço
  street: string
  number: string
  city: string
  state: string
  cep: string

  // Configurações
  activeModule: enum ['restauracao', 'coleta', 'both']

  createdAt: timestamp
  updatedAt: timestamp
}
```

#### **User (Usuário)**
```typescript
{
  id: string
  email: string (único)
  password: string (hashed)
  name: string

  companyId: string (FK)
  role: enum ['admin', 'manager', 'technician', 'viewer']

  lastLogin: timestamp
  isActive: boolean

  createdAt: timestamp
  updatedAt: timestamp
}
```

---

### 2.4 Relacionamentos Chave

```
Company (1) ----< (N) User
Company (1) ----< (N) Property
Company (1) ----< (N) Project
Company (1) ----< (N) Collection
Company (1) ----< (N) Label

Property (1) ----< (N) Matrix
Property (1) ----< (N) Area
Property (1) ----< (N) Activity
Property (1) ----< (N) Planting

Matrix (1) ----< (N) Collection
Matrix (1) ----< (N) Monitoring

Species (1) ----< (N) Matrix
Species (1) ----< (N) Collection

Collection (1) ----< (1) Label (opcional)

Project (1) ----< (N) Planting
Project (1) ----< (N) Activity
Project (1) ----< (N) Contract
Project (1) ----< (N) Invoice
```

---

### 2.5 User Stories e Requisitos Funcionais

#### **EPIC 1: Gestão de Coletas de Sementes**

**US1.1** - Como técnico de campo, quero registrar uma nova coleta de sementes para documentar a origem e quantidade coletada.
- Critérios de Aceite:
  - Wizard de 3 etapas funcional
  - Validação de campos obrigatórios
  - Auto-preenchimento de nome científico ao selecionar espécie
  - Seleção de origem (matriz ou propriedade)
  - Salvar coleta no banco de dados
  - Notificação de sucesso

**US1.2** - Como gestor de coletas, quero visualizar todas as coletas realizadas filtradas por período, espécie ou status.
- Critérios de Aceite:
  - Tabela com paginação
  - Filtros funcionais (data, espécie, status)
  - Busca por texto
  - Ações: Visualizar, Editar, Excluir

**US1.3** - Como técnico de campo, quero editar uma coleta para corrigir informações incorretas.
- Critérios de Aceite:
  - Modal pré-preenchido com dados existentes
  - Validação de campos
  - Atualização no banco
  - Log de auditoria

---

#### **EPIC 2: Monitoramento Fenológico**

**US2.1** - Como técnico de campo, quero registrar monitoramentos fenológicos de matrizes para rastrear períodos de floração e frutificação.
- Critérios de Aceite:
  - Seleção de matriz
  - Multi-seleção de estágios fenológicos
  - Validação de data
  - Upload de fotos (opcional)
  - Salvar no banco

**US2.2** - Como gestor de coletas, quero visualizar o histórico fenológico de uma espécie para planejar coletas futuras.
- Critérios de Aceite:
  - Timeline de monitoramentos
  - Filtro por espécie
  - Visualização de calendário fenológico
  - Exportação de dados

---

#### **EPIC 3: Geração de Rótulos (RENASEM)**

**US3.1** - Como técnico responsável, quero gerar um rótulo para um lote de sementes seguindo padrões RENASEM.
- Critérios de Aceite:
  - Formulário completo com todos os campos obrigatórios
  - Auto-geração de número de lote
  - Formatação automática de CNPJ
  - Previsualização do rótulo
  - Geração de QR Code com rastreabilidade
  - Salvar no banco

**US3.2** - Como técnico responsável, quero imprimir múltiplos rótulos simultaneamente.
- Critérios de Aceite:
  - Seleção múltipla de lotes
  - Botão "Imprimir Selecionados"
  - Layout de impressão otimizado
  - Opção de exportar para PDF

---

#### **EPIC 4: Gestão de Projetos de Restauração**

**US4.1** - Como gerente de projetos, quero criar um novo projeto de restauração com wizard guiado.
- Critérios de Aceite:
  - Wizard de 3 etapas
  - Seleção de propriedades
  - Definição de áreas
  - Escolha de modelo de restauração
  - Salvar projeto

**US4.2** - Como técnico de campo, quero registrar atividades realizadas em um projeto.
- Critérios de Aceite:
  - Formulário de atividade
  - Upload de fotos
  - Associação a projeto e propriedade
  - Salvar no banco

**US4.3** - Como gerente de projetos, quero visualizar relatórios executivos de um projeto.
- Critérios de Aceite:
  - Sumário executivo com KPIs
  - Detalhamento por propriedade
  - Análise financeira
  - Exportação para PDF

---

### 2.6 Requisitos Não-Funcionais

**Performance:**
- Tempo de carregamento de páginas < 2 segundos
- Suporte a 1000+ registros de coletas sem degradação
- Upload de imagens até 10MB com compressão automática
- Paginação server-side para listas > 50 itens

**Segurança:**
- Autenticação JWT com refresh tokens
- HTTPS obrigatório
- Row-Level Security (RLS) no Supabase
- Sanitização de inputs
- Rate limiting em APIs

**Usabilidade:**
- Interface responsiva (mobile-first)
- Dark mode funcional
- Acessibilidade WCAG 2.1 AA
- Feedback visual em todas as ações
- Mensagens de erro claras

**Confiabilidade:**
- Backup diário automático
- Logs de auditoria para operações críticas
- Validação de dados em frontend e backend
- Tratamento de erros gracioso

**Escalabilidade:**
- Suporte a multi-tenancy
- Arquitetura stateless
- Cache de queries frequentes
- CDN para assets estáticos

---

## 3. PLANO DE AÇÃO PARA BACKEND COM SUPABASE

### 3.1 Por que Supabase?

**Vantagens para RastaFlor:**
- PostgreSQL completo (JSONB, GIS, full-text search)
- Autenticação integrada (Auth)
- Storage para arquivos (fotos, contratos, PDFs)
- Real-time subscriptions (opcional)
- Row-Level Security (RLS) nativo
- APIs REST e GraphQL auto-geradas
- Edge Functions para lógica customizada
- SDK JavaScript/TypeScript oficial
- Generous free tier para MVP

---

### 3.2 Estrutura do Banco de Dados

#### **Schema SQL Completo**

```sql
-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis"; -- Para coordenadas geográficas

-- =======================
-- TABLES
-- =======================

-- Companies (Multi-tenancy)
CREATE TABLE companies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    cnpj VARCHAR(18) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),

    -- Address
    street VARCHAR(255),
    number VARCHAR(20),
    city VARCHAR(100),
    state VARCHAR(2),
    cep VARCHAR(9),

    -- Settings
    active_module VARCHAR(20) CHECK (active_module IN ('restauracao', 'coleta', 'both')) DEFAULT 'both',

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Users
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,

    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    role VARCHAR(20) CHECK (role IN ('admin', 'manager', 'technician', 'viewer')) DEFAULT 'viewer',

    last_login TIMESTAMPTZ,
    is_active BOOLEAN DEFAULT true,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Link Supabase Auth to Users table
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(user_id)
);

-- Properties
CREATE TABLE properties (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,

    name VARCHAR(255) NOT NULL,
    cep VARCHAR(9),
    street VARCHAR(255),
    number VARCHAR(20),
    neighborhood VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),

    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    location GEOGRAPHY(POINT, 4326), -- PostGIS geometry

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Species
CREATE TABLE species (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    popular_name VARCHAR(255) NOT NULL,
    scientific_name VARCHAR(255) UNIQUE NOT NULL,
    family VARCHAR(100),
    genus VARCHAR(100),
    biome VARCHAR(100),
    category VARCHAR(100), -- Sucessional category
    conservation_status VARCHAR(50), -- IUCN status
    description TEXT,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Matrices (Seed Source Trees)
CREATE TABLE matrices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
    species_id UUID REFERENCES species(id) ON DELETE RESTRICT,

    -- Taxonomy
    popular_name VARCHAR(255) NOT NULL,
    family VARCHAR(100),
    genus VARCHAR(100),
    species VARCHAR(100),

    -- Biometrics
    identification_number VARCHAR(50) UNIQUE NOT NULL,
    height DECIMAL(5, 2), -- meters
    circumference DECIMAL(6, 2), -- cm (CAP)
    diameter DECIMAL(6, 2), -- cm (DAP)

    -- Location
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    location GEOGRAPHY(POINT, 4326),
    matrix_position VARCHAR(20) CHECK (matrix_position IN ('isolated', 'border', 'trail', 'inside')),
    in_collection_site BOOLEAN DEFAULT false,

    -- Seed Source Category (RENASEM)
    origin VARCHAR(20) CHECK (origin IN ('natural', 'planted')),
    category_identified BOOLEAN DEFAULT false,
    category_selected BOOLEAN DEFAULT false,
    category_qualified BOOLEAN DEFAULT false,
    category_tested BOOLEAN DEFAULT false,

    -- Ecological Info
    exsicata_collection VARCHAR(10) CHECK (exsicata_collection IN ('yes', 'no')),
    vegetative_stage VARCHAR(100),
    species_density VARCHAR(20) CHECK (species_density IN ('rare', 'medium', 'abundant')),
    phytogeographic_unit VARCHAR(255),
    landscape VARCHAR(255),
    soil_type VARCHAR(255),

    -- Phenological Periods (JSON)
    flowering_period JSONB, -- { start: "MM/DD", end: "MM/DD" }
    fruiting_period JSONB,

    observations TEXT,
    photos JSONB, -- Array of URLs

    created_by UUID REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Collections
CREATE TABLE collections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    species_id UUID REFERENCES species(id) ON DELETE RESTRICT,

    collection_date DATE NOT NULL,
    weight DECIMAL(10, 2) NOT NULL, -- kg
    collection_type VARCHAR(20) CHECK (collection_type IN ('manual', 'net', 'ground', 'pole', 'climbing')) NOT NULL,

    -- Origin
    origin_type VARCHAR(20) CHECK (origin_type IN ('property', 'matrix')) NOT NULL,
    property_id UUID REFERENCES properties(id) ON DELETE SET NULL,
    matrix_id UUID REFERENCES matrices(id) ON DELETE SET NULL,

    collection_objective TEXT,
    observations TEXT,

    collector_id UUID REFERENCES users(id),
    status VARCHAR(20) CHECK (status IN ('completed', 'pending', 'analyzing')) DEFAULT 'pending',

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT check_origin CHECK (
        (origin_type = 'property' AND property_id IS NOT NULL AND matrix_id IS NULL) OR
        (origin_type = 'matrix' AND matrix_id IS NOT NULL AND property_id IS NULL)
    )
);

-- Monitoring (Phenological Monitoring)
CREATE TABLE monitoring (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    matrix_id UUID REFERENCES matrices(id) ON DELETE CASCADE,

    monitoring_date DATE NOT NULL,
    responsible_id UUID REFERENCES users(id),

    -- Phenological Stages (array of enums)
    phenological_stages TEXT[] CHECK (
        phenological_stages <@ ARRAY['vegetative', 'flowering', 'fruiting', 'green_fruit', 'ripe_fruit', 'dispersal']
    ),

    observations TEXT,
    photos JSONB, -- Array of URLs

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Labels
CREATE TABLE labels (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,

    -- Identification
    batch_number VARCHAR(50) UNIQUE NOT NULL, -- Format: LT-YYYY-###
    popular_name VARCHAR(255) NOT NULL,
    scientific_name VARCHAR(255) NOT NULL,

    -- Batch Info
    weight DECIMAL(10, 2) NOT NULL, -- kg
    collection_id UUID REFERENCES collections(id) ON DELETE SET NULL,

    -- Producer
    renasem VARCHAR(50),
    cnpj VARCHAR(18) NOT NULL,
    buyer_name VARCHAR(255),

    -- Quality
    germination_rate DECIMAL(5, 2), -- percentage
    validity_date DATE,

    -- Origin
    collection_municipality VARCHAR(255),
    destination VARCHAR(255),
    collection_date DATE,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,

    title VARCHAR(255) NOT NULL,
    description TEXT,
    stage VARCHAR(100),
    start_date DATE,
    end_date DATE,

    created_by UUID REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Areas (Subdivisions of Properties)
CREATE TABLE areas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID REFERENCES properties(id) ON DELETE CASCADE,

    name VARCHAR(255) NOT NULL,
    hectares DECIMAL(10, 2),
    area_type VARCHAR(50), -- APP, Reserva Legal, etc.
    slope VARCHAR(50),
    degradation_level VARCHAR(50),

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Plantings
CREATE TABLE plantings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
    area_id UUID REFERENCES areas(id) ON DELETE SET NULL,

    planting_date DATE NOT NULL,
    hectares DECIMAL(10, 2) NOT NULL,
    restoration_model VARCHAR(100),
    seedlings INTEGER DEFAULT 0,
    seeds DECIMAL(10, 2) DEFAULT 0, -- kg
    spacing VARCHAR(50),

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Planting Species (many-to-many)
CREATE TABLE planting_species (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    planting_id UUID REFERENCES plantings(id) ON DELETE CASCADE,
    species_id UUID REFERENCES species(id) ON DELETE RESTRICT,
    quantity INTEGER NOT NULL,

    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Activities
CREATE TABLE activities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    property_id UUID REFERENCES properties(id) ON DELETE CASCADE,

    activity_type VARCHAR(100) NOT NULL,
    description TEXT,
    observations TEXT,
    activity_date DATE NOT NULL,

    responsible_id UUID REFERENCES users(id),
    photos JSONB, -- Array of URLs

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contracts
CREATE TABLE contracts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    project_id UUID REFERENCES projects(id) ON DELETE SET NULL,

    file_name VARCHAR(255) NOT NULL,
    supplier VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL,
    file_size BIGINT,
    file_type VARCHAR(50),

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Invoices
CREATE TABLE invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,

    invoice_number VARCHAR(100) NOT NULL,
    issue_date DATE NOT NULL,
    amount DECIMAL(12, 2) NOT NULL,
    supplier VARCHAR(255) NOT NULL,
    category VARCHAR(100),

    file_url TEXT,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tasks
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,

    name VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) CHECK (status IN ('pending', 'in_progress', 'completed', 'cancelled')) DEFAULT 'pending',
    priority VARCHAR(20) CHECK (priority IN ('low', 'medium', 'high')) DEFAULT 'medium',

    responsible_id UUID REFERENCES users(id),
    due_date DATE,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Audit Log
CREATE TABLE audit_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    table_name VARCHAR(100) NOT NULL,
    record_id UUID NOT NULL,
    action VARCHAR(20) CHECK (action IN ('INSERT', 'UPDATE', 'DELETE')) NOT NULL,
    old_data JSONB,
    new_data JSONB,
    user_id UUID REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =======================
-- INDEXES
-- =======================

CREATE INDEX idx_properties_company ON properties(company_id);
CREATE INDEX idx_properties_location ON properties USING GIST(location);

CREATE INDEX idx_matrices_property ON matrices(property_id);
CREATE INDEX idx_matrices_species ON matrices(species_id);
CREATE INDEX idx_matrices_location ON matrices USING GIST(location);
CREATE INDEX idx_matrices_identification ON matrices(identification_number);

CREATE INDEX idx_collections_company ON collections(company_id);
CREATE INDEX idx_collections_species ON collections(species_id);
CREATE INDEX idx_collections_date ON collections(collection_date);
CREATE INDEX idx_collections_matrix ON collections(matrix_id);

CREATE INDEX idx_monitoring_matrix ON monitoring(matrix_id);
CREATE INDEX idx_monitoring_date ON monitoring(monitoring_date);

CREATE INDEX idx_labels_company ON labels(company_id);
CREATE INDEX idx_labels_batch ON labels(batch_number);

CREATE INDEX idx_projects_company ON projects(company_id);

CREATE INDEX idx_activities_project ON activities(project_id);
CREATE INDEX idx_activities_date ON activities(activity_date);

CREATE INDEX idx_plantings_project ON plantings(project_id);

CREATE INDEX idx_users_company ON users(company_id);
CREATE INDEX idx_users_email ON users(email);

-- =======================
-- TRIGGERS
-- =======================

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at trigger to all relevant tables
CREATE TRIGGER update_companies_updated_at BEFORE UPDATE ON companies
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_properties_updated_at BEFORE UPDATE ON properties
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_species_updated_at BEFORE UPDATE ON species
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_matrices_updated_at BEFORE UPDATE ON matrices
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_collections_updated_at BEFORE UPDATE ON collections
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_monitoring_updated_at BEFORE UPDATE ON monitoring
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_labels_updated_at BEFORE UPDATE ON labels
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_areas_updated_at BEFORE UPDATE ON areas
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_plantings_updated_at BEFORE UPDATE ON plantings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_activities_updated_at BEFORE UPDATE ON activities
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contracts_updated_at BEFORE UPDATE ON contracts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_invoices_updated_at BEFORE UPDATE ON invoices
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tasks_updated_at BEFORE UPDATE ON tasks
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Audit Log Trigger Function
CREATE OR REPLACE FUNCTION audit_trigger()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'DELETE') THEN
        INSERT INTO audit_log (table_name, record_id, action, old_data, user_id)
        VALUES (TG_TABLE_NAME, OLD.id, 'DELETE', row_to_json(OLD), auth.uid());
        RETURN OLD;
    ELSIF (TG_OP = 'UPDATE') THEN
        INSERT INTO audit_log (table_name, record_id, action, old_data, new_data, user_id)
        VALUES (TG_TABLE_NAME, NEW.id, 'UPDATE', row_to_json(OLD), row_to_json(NEW), auth.uid());
        RETURN NEW;
    ELSIF (TG_OP = 'INSERT') THEN
        INSERT INTO audit_log (table_name, record_id, action, new_data, user_id)
        VALUES (TG_TABLE_NAME, NEW.id, 'INSERT', row_to_json(NEW), auth.uid());
        RETURN NEW;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Apply audit triggers to critical tables
CREATE TRIGGER audit_collections AFTER INSERT OR UPDATE OR DELETE ON collections
    FOR EACH ROW EXECUTE FUNCTION audit_trigger();

CREATE TRIGGER audit_matrices AFTER INSERT OR UPDATE OR DELETE ON matrices
    FOR EACH ROW EXECUTE FUNCTION audit_trigger();

CREATE TRIGGER audit_labels AFTER INSERT OR UPDATE OR DELETE ON labels
    FOR EACH ROW EXECUTE FUNCTION audit_trigger();

-- =======================
-- ROW LEVEL SECURITY (RLS)
-- =======================

-- Enable RLS on all tables
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE species ENABLE ROW LEVEL SECURITY;
ALTER TABLE matrices ENABLE ROW LEVEL SECURITY;
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE monitoring ENABLE ROW LEVEL SECURITY;
ALTER TABLE labels ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE plantings ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE contracts ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Helper function to get user's company_id
CREATE OR REPLACE FUNCTION get_user_company_id()
RETURNS UUID AS $$
    SELECT company_id FROM users WHERE id = (
        SELECT user_id FROM user_profiles WHERE id = auth.uid()
    );
$$ LANGUAGE sql SECURITY DEFINER;

-- Companies: Users can only see their own company
CREATE POLICY "Users can view own company"
    ON companies FOR SELECT
    USING (id = get_user_company_id());

-- Properties: Users can only access their company's properties
CREATE POLICY "Users can view company properties"
    ON properties FOR SELECT
    USING (company_id = get_user_company_id());

CREATE POLICY "Users can insert company properties"
    ON properties FOR INSERT
    WITH CHECK (company_id = get_user_company_id());

CREATE POLICY "Users can update company properties"
    ON properties FOR UPDATE
    USING (company_id = get_user_company_id());

CREATE POLICY "Users can delete company properties"
    ON properties FOR DELETE
    USING (company_id = get_user_company_id());

-- Similar RLS policies for all other tables...
-- (Repeat pattern above for: collections, projects, matrices, monitoring, etc.)

-- Species: Read-only for all authenticated users
CREATE POLICY "Anyone can view species"
    ON species FOR SELECT
    TO authenticated
    USING (true);

-- =======================
-- FUNCTIONS
-- =======================

-- Generate batch number for labels
CREATE OR REPLACE FUNCTION generate_batch_number()
RETURNS TEXT AS $$
DECLARE
    year TEXT;
    sequence_num INTEGER;
    batch_num TEXT;
BEGIN
    year := EXTRACT(YEAR FROM CURRENT_DATE)::TEXT;

    -- Get next sequence number for the year
    SELECT COALESCE(MAX(
        SUBSTRING(batch_number FROM 'LT-[0-9]{4}-([0-9]+)')::INTEGER
    ), 0) + 1
    INTO sequence_num
    FROM labels
    WHERE batch_number LIKE 'LT-' || year || '-%';

    batch_num := 'LT-' || year || '-' || LPAD(sequence_num::TEXT, 3, '0');

    RETURN batch_num;
END;
$$ LANGUAGE plpgsql;

-- Get phenological calendar for a species
CREATE OR REPLACE FUNCTION get_phenological_calendar(p_species_id UUID)
RETURNS TABLE(
    month INTEGER,
    flowering_count INTEGER,
    fruiting_count INTEGER
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        EXTRACT(MONTH FROM m.monitoring_date)::INTEGER AS month,
        COUNT(CASE WHEN 'flowering' = ANY(m.phenological_stages) THEN 1 END)::INTEGER AS flowering_count,
        COUNT(CASE WHEN 'fruiting' = ANY(m.phenological_stages) THEN 1 END)::INTEGER AS fruiting_count
    FROM monitoring m
    JOIN matrices mat ON m.matrix_id = mat.id
    WHERE mat.species_id = p_species_id
    GROUP BY EXTRACT(MONTH FROM m.monitoring_date)
    ORDER BY month;
END;
$$ LANGUAGE plpgsql;

-- =======================
-- SEED DATA
-- =======================

-- Insert sample species
INSERT INTO species (popular_name, scientific_name, family, genus, biome, category, conservation_status, description) VALUES
('Ipê-amarelo', 'Handroanthus chrysotrichus', 'Bignoniaceae', 'Handroanthus', 'Mata Atlântica', 'Secundária Inicial', 'LC', 'Árvore de médio a grande porte, com floração exuberante amarela.'),
('Pau-brasil', 'Paubrasilia echinata', 'Fabaceae', 'Paubrasilia', 'Mata Atlântica', 'Secundária Tardia', 'EN', 'Árvore histórica, símbolo do Brasil, com madeira de alto valor.'),
('Jatobá', 'Hymenaea courbaril', 'Fabaceae', 'Hymenaea', 'Mata Atlântica', 'Clímax', 'LC', 'Árvore de grande porte, frutos comestíveis, madeira resistente.'),
('Cedro', 'Cedrela fissilis', 'Meliaceae', 'Cedrela', 'Mata Atlântica', 'Secundária Tardia', 'VU', 'Árvore de grande porte, madeira nobre para marcenaria.'),
('Araucária', 'Araucaria angustifolia', 'Araucariaceae', 'Araucaria', 'Mata Atlântica', 'Clímax', 'EN', 'Conífera nativa, produz pinhões comestíveis, madeira de qualidade.');
```

---

### 3.3 Configuração do Supabase

#### **Passo 1: Criar Projeto no Supabase**
1. Acessar https://supabase.com
2. Criar novo projeto
3. Anotar:
   - Project URL
   - Project API Key (anon/public)
   - Service Role Key (backend apenas)

#### **Passo 2: Executar Migrations**
1. Instalar Supabase CLI: `npm install -g supabase`
2. Fazer login: `supabase login`
3. Inicializar projeto: `supabase init`
4. Criar migration: `supabase migration new initial_schema`
5. Colar o SQL completo acima no arquivo de migration
6. Aplicar: `supabase db push`

#### **Passo 3: Configurar Storage Buckets**
No dashboard do Supabase, criar os seguintes buckets:

```javascript
// Buckets configuration
{
  "matrix-photos": {
    "public": false,
    "file_size_limit": 10485760, // 10MB
    "allowed_mime_types": ["image/jpeg", "image/png", "image/webp"]
  },
  "activity-photos": {
    "public": false,
    "file_size_limit": 10485760,
    "allowed_mime_types": ["image/jpeg", "image/png", "image/webp"]
  },
  "monitoring-photos": {
    "public": false,
    "file_size_limit": 10485760,
    "allowed_mime_types": ["image/jpeg", "image/png", "image/webp"]
  },
  "contracts": {
    "public": false,
    "file_size_limit": 52428800, // 50MB
    "allowed_mime_types": ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
  },
  "invoices": {
    "public": false,
    "file_size_limit": 10485760,
    "allowed_mime_types": ["application/pdf", "image/jpeg", "image/png"]
  }
}
```

**Storage Policies (RLS para buckets):**
```sql
-- matrix-photos policies
CREATE POLICY "Users can upload matrix photos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'matrix-photos' AND auth.uid() IS NOT NULL);

CREATE POLICY "Users can view company matrix photos"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'matrix-photos');

-- Repetir para outros buckets...
```

#### **Passo 4: Configurar Autenticação**
1. No dashboard > Authentication > Providers
2. Habilitar Email/Password
3. Configurar email templates (opcional)
4. Desabilitar "Confirm email" para MVP (habilitar em produção)

---

### 3.4 Integração Frontend com Supabase

#### **Instalação**
```bash
npm install @supabase/supabase-js
```

#### **Configuração do Cliente**
```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})

// Types (auto-generated com Supabase CLI)
export type Database = {
  public: {
    Tables: {
      companies: { /* ... */ },
      users: { /* ... */ },
      // ... etc
    }
  }
}
```

#### **Arquivo .env**
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

---

### 3.5 Camada de Serviços (API Layer)

#### **Auth Service**
```typescript
// src/services/auth.service.ts
import { supabase } from '../lib/supabase'

export const authService = {
  async signUp(email: string, password: string, userData: { name: string, companyId: string }) {
    // 1. Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (authError) throw authError

    // 2. Create user profile
    const { data: userData, error: userError } = await supabase
      .from('users')
      .insert({
        email,
        name: userData.name,
        company_id: userData.companyId,
      })
      .select()
      .single()

    if (userError) throw userError

    // 3. Link auth to profile
    await supabase
      .from('user_profiles')
      .insert({
        id: authData.user!.id,
        user_id: userData.id,
      })

    return userData
  },

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    // Fetch user profile
    const { data: profile } = await supabase
      .from('users')
      .select('*, companies(*)')
      .eq('id', data.user.id)
      .single()

    return { user: data.user, profile }
  },

  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return null

    const { data: profile } = await supabase
      .from('users')
      .select('*, companies(*)')
      .eq('id', user.id)
      .single()

    return { user, profile }
  },
}
```

#### **Collections Service**
```typescript
// src/services/collections.service.ts
import { supabase } from '../lib/supabase'
import { Collection, CollectionFormData } from '../types'

export const collectionsService = {
  async getAll(filters?: {
    dateFrom?: Date,
    dateTo?: Date,
    speciesId?: string,
    status?: string
  }) {
    let query = supabase
      .from('collections')
      .select(`
        *,
        species:species_id(*),
        property:property_id(*),
        matrix:matrix_id(*),
        collector:collector_id(name)
      `)
      .order('collection_date', { ascending: false })

    if (filters?.dateFrom) {
      query = query.gte('collection_date', filters.dateFrom.toISOString())
    }

    if (filters?.dateTo) {
      query = query.lte('collection_date', filters.dateTo.toISOString())
    }

    if (filters?.speciesId) {
      query = query.eq('species_id', filters.speciesId)
    }

    if (filters?.status) {
      query = query.eq('status', filters.status)
    }

    const { data, error } = await query

    if (error) throw error
    return data
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('collections')
      .select(`
        *,
        species:species_id(*),
        property:property_id(*),
        matrix:matrix_id(*),
        collector:collector_id(name)
      `)
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  },

  async create(formData: CollectionFormData) {
    // Get current user's company
    const { data: { user } } = await supabase.auth.getUser()
    const { data: profile } = await supabase
      .from('users')
      .select('company_id')
      .eq('id', user!.id)
      .single()

    const { data, error } = await supabase
      .from('collections')
      .insert({
        company_id: profile!.company_id,
        species_id: formData.speciesId,
        collection_date: formData.collectionDate,
        weight: formData.weight,
        collection_type: formData.collectionType,
        origin_type: formData.originType,
        property_id: formData.propertyId,
        matrix_id: formData.matrixId,
        collection_objective: formData.collectionObjective,
        observations: formData.observations,
        collector_id: user!.id,
        status: 'completed',
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  async update(id: string, formData: Partial<CollectionFormData>) {
    const { data, error } = await supabase
      .from('collections')
      .update(formData)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('collections')
      .delete()
      .eq('id', id)

    if (error) throw error
  },

  // Analytics
  async getStats() {
    const { data, error } = await supabase
      .rpc('get_collection_stats') // Custom SQL function

    if (error) throw error
    return data
  },
}
```

#### **Monitoring Service**
```typescript
// src/services/monitoring.service.ts
import { supabase } from '../lib/supabase'

export const monitoringService = {
  async create(formData: {
    matrixId: string
    monitoringDate: Date
    responsibleId: string
    phenologicalStages: string[]
    observations?: string
    photos?: string[]
  }) {
    const { data, error } = await supabase
      .from('monitoring')
      .insert({
        matrix_id: formData.matrixId,
        monitoring_date: formData.monitoringDate.toISOString().split('T')[0],
        responsible_id: formData.responsibleId,
        phenological_stages: formData.phenologicalStages,
        observations: formData.observations,
        photos: formData.photos ? JSON.stringify(formData.photos) : null,
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  async getByMatrix(matrixId: string) {
    const { data, error } = await supabase
      .from('monitoring')
      .select(`
        *,
        matrix:matrix_id(*),
        responsible:responsible_id(name)
      `)
      .eq('matrix_id', matrixId)
      .order('monitoring_date', { ascending: false })

    if (error) throw error
    return data
  },

  async getPhenologicalCalendar(speciesId: string) {
    const { data, error } = await supabase
      .rpc('get_phenological_calendar', { p_species_id: speciesId })

    if (error) throw error
    return data
  },
}
```

#### **Storage Service**
```typescript
// src/services/storage.service.ts
import { supabase } from '../lib/supabase'

export const storageService = {
  async uploadMatrixPhoto(file: File, matrixId: string) {
    const fileExt = file.name.split('.').pop()
    const fileName = `${matrixId}-${Date.now()}.${fileExt}`
    const filePath = `${fileName}`

    const { data, error } = await supabase.storage
      .from('matrix-photos')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      })

    if (error) throw error

    const { data: { publicUrl } } = supabase.storage
      .from('matrix-photos')
      .getPublicUrl(filePath)

    return publicUrl
  },

  async uploadContract(file: File) {
    const fileExt = file.name.split('.').pop()
    const fileName = `contract-${Date.now()}.${fileExt}`
    const filePath = `${fileName}`

    const { data, error } = await supabase.storage
      .from('contracts')
      .upload(filePath, file)

    if (error) throw error

    const { data: { publicUrl } } = supabase.storage
      .from('contracts')
      .getPublicUrl(filePath)

    return publicUrl
  },

  async deleteFile(bucket: string, filePath: string) {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([filePath])

    if (error) throw error
  },
}
```

---

### 3.6 Context Provider para Autenticação

```typescript
// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { authService } from '../services/auth.service'

interface AuthContextType {
  user: User | null
  profile: any | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, userData: any) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check active session
    authService.getCurrentUser().then((data) => {
      if (data) {
        setUser(data.user)
        setProfile(data.profile)
      }
      setLoading(false)
    })
  }, [])

  const signIn = async (email: string, password: string) => {
    const { user, profile } = await authService.signIn(email, password)
    setUser(user)
    setProfile(profile)
  }

  const signUp = async (email: string, password: string, userData: any) => {
    const profile = await authService.signUp(email, password, userData)
    setProfile(profile)
  }

  const signOut = async () => {
    await authService.signOut()
    setUser(null)
    setProfile(null)
  }

  return (
    <AuthContext.Provider value={{ user, profile, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
```

---

### 3.7 Exemplo de Uso em Componente

```typescript
// src/components/modals/AddCollectionModal.tsx (adaptado)
import { useState } from 'react'
import { collectionsService } from '../../services/collections.service'
import { toast } from 'sonner'

export const AddCollectionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<CollectionFormData>({...})
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      await collectionsService.create(formData)
      toast.success('Coleta registrada com sucesso!')
      onClose()
      // Refresh parent component data
    } catch (error) {
      console.error('Error creating collection:', error)
      toast.error('Erro ao registrar coleta')
    } finally {
      setLoading(false)
    }
  }

  // ... rest of component
}
```

---

### 3.8 Plano de Implementação por Etapas

**ESTRATÉGIA:** Implementação incremental começando pelo Módulo de Coleta (seed collection), que é o core business e tem fluxo mais direto. Dados começam do zero sem necessidade de migração inicial.

#### **FASE 1: Setup e Infraestrutura Base (Semana 1)**

**Supabase:**
- [ ] Criar projeto no Supabase
- [ ] Executar migrations (schema completo do plano)
- [ ] Configurar buckets de storage (matrix-photos, monitoring-photos, contracts, invoices)
- [ ] Configurar autenticação (Email/Password)
- [ ] Configurar RLS policies para todas as tabelas
- [ ] Seed data inicial (espécies nativas brasileiras)

**Frontend:**
- [ ] Instalar dependências: `@supabase/supabase-js`
- [ ] Criar `src/lib/supabase.ts` com configuração do cliente
- [ ] Criar arquivo `.env.local` com variáveis do Supabase
- [ ] Adicionar `.env.local` ao `.gitignore`
- [ ] Configurar types gerados do Supabase

**Vercel:**
- [ ] Conectar repositório GitHub ao Vercel
- [ ] Configurar environment variables no Vercel
- [ ] Setup de preview deployments

---

#### **FASE 2: Autenticação e Contexto Global (Semana 2)**

- [ ] Criar `src/contexts/AuthContext.tsx`
- [ ] Implementar `src/services/auth.service.ts`
- [ ] Atualizar `src/components/auth/Login.tsx` para usar Supabase Auth
- [ ] Implementar refresh de token automático
- [ ] Adicionar proteção de rotas (PrivateRoute component)
- [ ] Implementar logout funcional
- [ ] Atualizar `App.tsx` para usar AuthContext
- [ ] Testar fluxo completo de login/logout
- [ ] Implementar "Esqueci minha senha" funcional

**Entregável:** Sistema de autenticação funcional com persistência de sessão

---

#### **FASE 3: Propriedades e Espécies (Semana 3)**

**Espécies:**
- [ ] Criar `src/services/species.service.ts`
- [ ] Criar `src/types/species.types.ts`
- [ ] Migrar `AddSpeciesModal` para usar API real
- [ ] Migrar `EspeciesColeta.tsx` para buscar dados do Supabase
- [ ] Implementar busca e filtros
- [ ] Implementar edição de espécies
- [ ] Implementar exclusão (com validação de dependências)

**Propriedades:**
- [ ] Criar `src/services/properties.service.ts`
- [ ] Criar `src/types/properties.types.ts`
- [ ] Migrar `AddPropertyModal` para usar API
- [ ] Migrar `PropriedadesColeta.tsx` para buscar dados reais
- [ ] Integrar API ViaCEP para auto-completar endereço
- [ ] Validação de coordenadas GPS
- [ ] Implementar edição e exclusão

**Entregável:** CRUD completo de Espécies e Propriedades funcionando

---

#### **FASE 4: Árvores Matrizes (Semanas 4-5)**

- [ ] Criar `src/services/matrices.service.ts`
- [ ] Criar `src/types/matrices.types.ts`
- [ ] Migrar `AddMatrixModal` para usar API
- [ ] Implementar upload de fotos para Storage (bucket: matrix-photos)
- [ ] Implementar compressão de imagens no frontend (antes do upload)
- [ ] Listagem de matrizes por propriedade
- [ ] Visualização detalhada de matriz (modal ou página)
- [ ] Edição de matriz (incluindo galeria de fotos)
- [ ] Exclusão de matriz (com validação de coletas vinculadas)
- [ ] Filtros: por propriedade, espécie, posição, densidade
- [ ] Mapa de matrizes (opcional - usando Leaflet ou Mapbox)

**Entregável:** Sistema completo de gestão de árvores matrizes

---

#### **FASE 5: Coletas de Sementes (Semanas 6-7)**

**Core CRUD:**
- [ ] Criar `src/services/collections.service.ts`
- [ ] Criar `src/types/collections.types.ts`
- [ ] Migrar `AddCollectionModal` (wizard 3 etapas) para API
- [ ] Implementar auto-preenchimento de nome científico
- [ ] Validação de dados (peso, data, campos obrigatórios)
- [ ] Migrar `ColetasPage.tsx` para dados reais
- [ ] Implementar `EditCollectionModal` com API
- [ ] Implementar `ViewCollectionModal` com dados completos
- [ ] Exclusão de coletas

**Filtros e Busca:**
- [ ] Filtro por período (data inicial/final)
- [ ] Filtro por espécie
- [ ] Filtro por status (Concluída, Pendente, Em Análise)
- [ ] Filtro por coletor
- [ ] Busca por texto (espécie, observações)
- [ ] Ordenação (data, peso, espécie)

**Dashboard:**
- [ ] Atualizar `DashboardColeta.tsx` com métricas reais
- [ ] KPI: Total de matrizes (query ao banco)
- [ ] KPI: Espécies cadastradas
- [ ] KPI: Kg de sementes coletadas (SUM)
- [ ] KPI: Número de coletas
- [ ] Gráfico: Coletas por mês (Recharts)
- [ ] Gráfico: Top espécies coletadas

**Entregável:** Sistema completo de coletas funcionando com dashboard atualizado

---

#### **FASE 6: Monitoramento Fenológico (Semana 8)**

- [ ] Criar `src/services/monitoring.service.ts`
- [ ] Criar `src/types/monitoring.types.ts`
- [ ] Migrar `RegistrarMonitoramentoModal` para API
- [ ] Multi-seleção de estágios fenológicos funcional
- [ ] Upload de fotos de monitoramento (bucket: monitoring-photos)
- [ ] Migrar `MonitoramentosPage.tsx` para dados reais
- [ ] Implementar `EditMonitoramentoModal`
- [ ] Visualização de histórico por matriz

**Calendário Fenológico:**
- [ ] Implementar Edge Function: `get_phenological_calendar`
- [ ] Criar componente de calendário visual
- [ ] Mostrar períodos de floração/frutificação por espécie
- [ ] Alertas de época ideal para coleta

**Filtros:**
- [ ] Filtro por matriz
- [ ] Filtro por espécie
- [ ] Filtro por período
- [ ] Filtro por estágio fenológico
- [ ] Apenas matrizes isoladas
- [ ] Apenas em sítios de coleta

**Entregável:** Sistema completo de monitoramento fenológico com calendário

---

#### **FASE 7: Sistema de Rótulos RENASEM (Semana 9)**

- [ ] Criar `src/services/labels.service.ts`
- [ ] Criar `src/types/labels.types.ts`
- [ ] Migrar `GerarRotuloModal` para API
- [ ] Implementar geração automática de número de lote (LT-YYYY-###)
- [ ] Formatação automática de CNPJ
- [ ] Vincular rótulo a coleta (opcional)
- [ ] Migrar `RotulosPage.tsx` para dados reais
- [ ] Implementar `ViewRotuloModal` com dados completos
- [ ] Implementar `EditRotuloModal`

**QR Code e Rastreabilidade:**
- [ ] Gerar QR Code com link para consulta pública
- [ ] Criar página pública de consulta de lote (sem autenticação)
- [ ] Mostrar histórico de rastreabilidade (matriz → coleta → lote)

**Impressão:**
- [ ] Criar layout de impressão otimizado (CSS @media print)
- [ ] Seleção múltipla de rótulos
- [ ] Botão "Imprimir Selecionados"
- [ ] Exportar para PDF (usando jsPDF ou react-pdf)
- [ ] Preview antes de imprimir

**Entregável:** Sistema completo de rótulos RENASEM com impressão e rastreabilidade

---

#### **FASE 8: Relatórios do Módulo de Coleta (Semana 10)**

- [ ] Migrar `RelatoriosColeta.tsx` para usar dados reais
- [ ] Criar Edge Function: `generate_collection_report`
- [ ] Relatório por período (data inicial/final)
- [ ] Relatório por espécie
- [ ] Relatório por matriz
- [ ] Relatório por coletor (performance)
- [ ] Implementar `RelatorioPreview.tsx` com dados reais
- [ ] Exportação para PDF
- [ ] Exportação para Excel/CSV
- [ ] Gráficos dinâmicos (Recharts)

**Entregável:** Sistema completo de relatórios do módulo de coleta

---

#### **FASE 9: Gestão de Equipe (Semana 11)**

- [ ] Criar `src/services/users.service.ts`
- [ ] Migrar `Equipe.tsx` para dados reais
- [ ] Cadastro de novos usuários (somente admin/manager)
- [ ] Atribuição de roles (admin, manager, technician, viewer)
- [ ] Edição de perfil de usuário
- [ ] Desativação de usuário (soft delete)
- [ ] Listagem de equipe com filtros
- [ ] Histórico de coletas por coletor
- [ ] Estatísticas de performance individual

**Entregável:** Módulo de Coleta 100% funcional e integrado

---

#### **FASE 10: Integrações de APIs Externas (Semana 12)**

**ViaCEP (Já em Fase 3):**
- [ ] Integração para auto-completar endereços

**ReceitaWS (CNPJ):**
- [ ] Criar `src/services/external/cnpj.service.ts`
- [ ] Integração para validar e buscar dados de CNPJ
- [ ] Auto-completar informações de fornecedores/empresas

**IBGE (Localidades):**
- [ ] Criar `src/services/external/ibge.service.ts`
- [ ] Lista de municípios por estado
- [ ] Auto-complete de cidade/estado

**OpenWeather (Opcional):**
- [ ] Dados climáticos para planejamento de coletas
- [ ] Previsão de chuvas

**Geolocalização:**
- [ ] Integração com Leaflet ou Mapbox para mapas
- [ ] Visualização de matrizes no mapa
- [ ] Visualização de propriedades no mapa
- [ ] Cálculo de distâncias

**Entregável:** Integrações funcionais melhorando UX

---

#### **FASE 11: Módulo de Restauração - Core (Semanas 13-15)**

**Propriedades e Áreas:**
- [ ] Criar `src/services/areas.service.ts`
- [ ] Sistema de divisão de propriedades em áreas/talhões
- [ ] Classificação de áreas (APP, Reserva Legal)
- [ ] Dados de declividade e degradação

**Projetos:**
- [ ] Criar `src/services/projects.service.ts`
- [ ] Migrar `CreateProjectWizard` para API
- [ ] CRUD completo de projetos
- [ ] Migrar `Projects.tsx` e `ProjectDetails.tsx`

**Atividades:**
- [ ] Criar `src/services/activities.service.ts`
- [ ] Registro de atividades com upload de fotos
- [ ] Histórico de atividades por projeto
- [ ] Migrar componentes de atividades

**Plantios:**
- [ ] Criar `src/services/plantings.service.ts`
- [ ] Registro de plantios (mudas/sementes)
- [ ] Vinculação de espécies plantadas (many-to-many)
- [ ] Espaçamento e modelo de restauração

**Tasks:**
- [ ] Criar `src/services/tasks.service.ts`
- [ ] Gestão de tarefas por projeto
- [ ] Status e prioridades
- [ ] Atribuição de responsáveis

**Dashboard Restauração:**
- [ ] Atualizar `Dashboard.tsx` com métricas reais
- [ ] KPIs: Hectares plantados, mudas, sementes
- [ ] Gráficos de progresso

**Entregável:** Módulo de Restauração funcional

---

#### **FASE 12: Contratos e Notas Fiscais (Semana 16)**

- [ ] Criar `src/services/contracts.service.ts`
- [ ] Criar `src/services/invoices.service.ts`
- [ ] Migrar `CadastrarContratoModal` para API
- [ ] Upload de contratos (bucket: contracts)
- [ ] Migrar `ContratosPage.tsx`
- [ ] Migrar `CreateInvoiceModal` para API
- [ ] Upload de notas fiscais (bucket: invoices)
- [ ] Migrar `Invoices.tsx`
- [ ] Visualização de documentos
- [ ] Controle orçamentário por projeto

**Entregável:** Gestão financeira básica funcionando

---

#### **FASE 13: Relatórios de Restauração (Semana 17)**

- [ ] Migrar `Reports.tsx` para dados reais
- [ ] Criar Edge Function: `generate_restoration_report`
- [ ] Sumário executivo com métricas
- [ ] Relatório por propriedade
- [ ] Análise financeira (custos por hectare, por muda)
- [ ] Tabelas de dados (espécies, fornecedores)
- [ ] Exportação para PDF completo
- [ ] Gráficos avançados

**Entregável:** Sistema de relatórios executivos completo

---

#### **FASE 14: Módulo Admin e Multi-tenancy (Semana 18)**

- [ ] Criar `src/services/companies.service.ts`
- [ ] Implementar system admin vs company admin
- [ ] Painel de empresas (system admin only)
- [ ] Cadastro de novas empresas
- [ ] Sistema de convites por email
- [ ] Gestão de usuários por empresa
- [ ] Configurações por empresa (módulos ativos)
- [ ] Migrar `AdminDashboard.tsx`
- [ ] Migrar `AdminEmpresas.tsx`
- [ ] Migrar `AdminUsuarios.tsx`
- [ ] Sistema de bug reports (AdminBugs.tsx)

**Entregável:** Multi-tenancy completo e admin funcional

---

#### **FASE 15: Otimizações e Performance (Semana 19)**

**Cache e Performance:**
- [ ] Implementar React Query para cache de queries
- [ ] Infinite scroll em listagens longas
- [ ] Lazy loading de imagens
- [ ] Debounce em buscas
- [ ] Otimizar queries do Supabase (índices)
- [ ] Implementar paginação server-side

**UX/UI:**
- [ ] Loading states em todas as ações
- [ ] Skeleton loaders
- [ ] Error boundaries
- [ ] Toast notifications consistentes
- [ ] Validação de formulários melhorada
- [ ] Feedback visual em uploads
- [ ] Progress bars

**Code Quality:**
- [ ] Refatorar duplicações
- [ ] Extrair hooks customizados
- [ ] TypeScript strict mode
- [ ] ESLint + Prettier configurados
- [ ] Documentação inline (JSDoc)

**Entregável:** Aplicação otimizada e polida

---

#### **FASE 16: Testes e QA (Semana 20)**

- [ ] Setup de testes unitários (Vitest)
- [ ] Testes de serviços críticos
- [ ] Testes de componentes (React Testing Library)
- [ ] Testes E2E básicos (Playwright ou Cypress)
- [ ] Teste de fluxos críticos:
  - [ ] Login/Logout
  - [ ] Criar coleta completa
  - [ ] Criar monitoramento
  - [ ] Gerar rótulo
  - [ ] Criar projeto
  - [ ] Upload de arquivos
- [ ] Testes de responsividade (mobile, tablet, desktop)
- [ ] Testes de acessibilidade (WCAG)
- [ ] Teste de dark mode
- [ ] Bug fixing

**Entregável:** Aplicação testada e estável

---

#### **FASE 17: Deploy Final e Produção (Semana 21)**

**Supabase Production:**
- [ ] Upgrade para Supabase Pro (se necessário)
- [ ] Configurar backups automáticos
- [ ] Configurar alertas de monitoramento
- [ ] Revisar e otimizar RLS policies
- [ ] Configurar rate limiting
- [ ] Configurar CORS adequado

**Vercel Production:**
- [ ] Criar projeto production no Vercel
- [ ] Configurar domínio customizado
- [ ] Configurar SSL/HTTPS (automático no Vercel)
- [ ] Configurar redirects e rewrites
- [ ] Otimizar build settings
- [ ] Configurar Edge Functions (se necessário)
- [ ] Setup de CI/CD (GitHub Actions ou Vercel Git Integration)

**Monitoramento:**
- [ ] Integrar Sentry para error tracking
- [ ] Configurar Vercel Analytics
- [ ] Configurar logs estruturados
- [ ] Dashboard de métricas de uso

**Documentação:**
- [ ] README.md atualizado
- [ ] Guia de instalação para desenvolvedores
- [ ] Documentação de APIs
- [ ] Manual do usuário (opcional)
- [ ] Vídeos de treinamento (opcional)

**Segurança Final:**
- [ ] Audit de segurança (npm audit)
- [ ] Revisar environment variables
- [ ] HTTPS obrigatório
- [ ] Configurar Content Security Policy
- [ ] Rate limiting em endpoints críticos

**Entregável:** Aplicação em produção na Vercel, totalmente funcional

---

#### **FASE 18: Lançamento e Iteração (Ongoing)**

- [ ] Onboarding de primeiros usuários
- [ ] Coleta de feedback
- [ ] Priorização de melhorias
- [ ] Bug fixes emergenciais
- [ ] Iterações baseadas em uso real
- [ ] Planejamento de features futuras

---

### 3.9 Estimativas de Recursos

**Supabase Free Tier:**
- 500MB de storage
- 50,000 monthly active users
- 2GB de banda por mês
- Adequado para MVP e primeiros clientes

**Supabase Pro ($25/mês):**
- 8GB de storage
- 100,000 monthly active users
- 50GB de banda
- Backups diários
- Recomendado para produção

**Custos Adicionais:**
- Domínio: ~$10-15/ano
- Vercel/Netlify: Gratuito para hobby projects
- Monitoramento (Sentry): Gratuito até 5k events/mês

---

### 3.10 Considerações de Segurança

1. **Autenticação:**
   - JWT com refresh tokens
   - Hash de senhas (bcrypt via Supabase)
   - Rate limiting em login

2. **Autorização:**
   - Row-Level Security (RLS) em todas as tabelas
   - Policies baseadas em company_id
   - Roles e permissões

3. **Storage:**
   - Buckets privados
   - URLs assinadas para acesso temporário
   - Validação de tipos de arquivo
   - Limite de tamanho

4. **API:**
   - CORS configurado
   - API Keys protegidas (env variables)
   - Validação de dados no backend (Edge Functions)
   - Sanitização de inputs

5. **Compliance:**
   - LGPD: Consentimento, direito ao esquecimento
   - Logs de auditoria
   - Criptografia em trânsito (HTTPS) e em repouso

---

## 4. PRÓXIMOS PASSOS RECOMENDADOS

### 4.1 Decisões Técnicas Definidas

**✅ Decisões confirmadas pelo cliente:**

1. **Priorização de Módulos:**
   - ✅ **INICIAR PELO MÓDULO DE COLETA** (seed collection management)
   - Módulo de Restauração será implementado posteriormente (Fases 11-13)

2. **Migração de Dados:**
   - ✅ **Começar do zero** - sem migração de dados legados necessária
   - Existem dados legados, mas serão utilizados em fase futura
   - Foco inicial em estrutura e funcionalidade

3. **Customizações:**
   - ⚠️ **Customizações específicas serão identificadas durante uso**
   - Sistema preparado para adicionar campos customizados
   - Arquitetura flexível permite extensões futuras

4. **Compliance e Regulamentação:**
   - ✅ Sistema já contempla RENASEM (rótulos de sementes)
   - 📋 Preparado para certificações futuras (ISO, normas ambientais)
   - Logs de auditoria implementados para rastreabilidade

5. **Integrações:**
   - ✅ **Múltiplas APIs planejadas:**
     - ViaCEP (consulta de endereços)
     - ReceitaWS (consulta CNPJ)
     - IBGE (localidades)
     - Leaflet/Mapbox (mapas e geolocalização)
     - OpenWeather (clima - opcional)
   - Fase 10 dedicada exclusivamente a integrações

6. **Deployment:**
   - ✅ **Vercel exclusivamente** para hospedagem do frontend
   - Supabase para backend (PostgreSQL + Storage + Auth)
   - CI/CD via Vercel Git Integration
   - Preview deployments automáticos

---

## 5. RESUMO EXECUTIVO

### Sistema RastaFlor - Plataforma de Gestão Ambiental

**Tecnologia:** React 18 + Vite + TypeScript + Tailwind CSS + Radix UI + Supabase

**Estado Atual:** Protótipo funcional com UI completa, pronto para integração backend

**Estratégia de Implementação:**
- Início pelo Módulo de Coleta (core business)
- Dados começam do zero (sem migração inicial)
- Deploy exclusivo na Vercel
- Múltiplas integrações de APIs externas planejadas

**Principais Entidades:**
- **Módulo Coleta:** Properties, Species, Matrices, Collections, Monitoring, Labels
- **Módulo Restauração:** Projects, Plantings, Activities, Contracts, Invoices
- **Módulo Admin:** Companies, Users, Bug Reports

**Módulos do Sistema:**
1. **Coleta** (Seed Collection Management) - Prioridade 1
2. **Restauração** (Restoration Projects) - Prioridade 2
3. **Admin** (System Administration) - Prioridade 3

**Timeline de Implementação:**
- **Fases 1-9:** Módulo de Coleta completo (9 semanas)
- **Fase 10:** Integrações de APIs externas (1 semana)
- **Fases 11-13:** Módulo de Restauração (5 semanas)
- **Fases 14-17:** Admin, Otimizações e Deploy (4 semanas)
- **Fase 18:** Lançamento e iteração (ongoing)
- **Total:** 21 semanas (~5 meses)

**Investimento Mensal:**
- Supabase Free Tier: $0 (adequado para MVP)
- Supabase Pro: $25/mês (recomendado para produção)
- Vercel: Gratuito para hobby projects
- Domínio: ~$10-15/ano
- Sentry (error tracking): Gratuito até 5k events/mês
- **Total inicial:** $0-25/mês

**Escalabilidade:**
- Multi-tenancy nativo (múltiplas empresas)
- Row-Level Security (RLS) para isolamento de dados
- Arquitetura stateless preparada para crescimento
- CDN global via Vercel Edge Network

**Diferenciais:**
- Compliance RENASEM (rótulos de sementes)
- Rastreabilidade completa (matriz → coleta → lote)
- QR Code para consulta pública
- Sistema fenológico para planejamento de safras
- Dashboard com analytics em tempo real
- Mobile-first e totalmente responsivo

---

## 6. AÇÕES IMEDIATAS PARA COMEÇAR

### 6.1 Checklist Pré-Implementação

**Antes de escrever qualquer código:**

- [ ] **Criar conta no Supabase** (https://supabase.com)
- [ ] **Criar repositório no GitHub** (se ainda não existir)
- [ ] **Conectar repositório ao Vercel** (https://vercel.com)
- [ ] **Decidir nome de domínio** (para configurar depois)

---

### 6.2 Fase 1 - Setup Inicial (Semana 1)

**Dia 1-2: Supabase Setup**

```bash
# 1. Instalar Supabase CLI
npm install -g supabase

# 2. Fazer login no Supabase
supabase login

# 3. No dashboard do Supabase:
# - Criar novo projeto
# - Anotar: Project URL, anon key, service_role key
# - Aguardar provisionamento do banco (~2 minutos)

# 4. Inicializar projeto localmente
cd t:\DIZE\RastaFlor\Rastaflor
supabase init

# 5. Criar migration inicial
supabase migration new initial_schema

# 6. Copiar todo o SQL do plano (seção 3.2) para o arquivo de migration criado

# 7. Aplicar migration
supabase db push
```

**Dia 2-3: Frontend Setup**

```bash
# 1. Instalar dependências do Supabase
npm install @supabase/supabase-js

# 2. Criar estrutura de pastas
mkdir -p src/lib
mkdir -p src/services
mkdir -p src/contexts
mkdir -p src/types
mkdir -p src/services/external

# 3. Criar arquivo .env.local na raiz do projeto
# Adicionar:
# VITE_SUPABASE_URL=your-project-url
# VITE_SUPABASE_ANON_KEY=your-anon-key

# 4. Adicionar .env.local ao .gitignore
echo ".env.local" >> .gitignore

# 5. Criar arquivo src/lib/supabase.ts com configuração do cliente
```

**Dia 3-4: Vercel Setup**

```bash
# 1. Fazer push do código para GitHub
git add .
git commit -m "Initial Supabase integration setup"
git push origin main

# 2. No dashboard da Vercel:
# - Import repository
# - Adicionar environment variables:
#   - VITE_SUPABASE_URL
#   - VITE_SUPABASE_ANON_KEY
# - Deploy

# 3. Configurar preview deployments para branches
```

**Dia 4-5: Storage e Seeds**

```bash
# No dashboard do Supabase:
# 1. Criar buckets de storage (conforme seção 3.3)
# 2. Configurar RLS policies dos buckets
# 3. Inserir seed data de espécies brasileiras (já está no SQL)
# 4. Testar autenticação (criar um usuário teste)
```

---

### 6.3 Arquivos Fundamentais a Criar

#### 1. `src/lib/supabase.ts`
```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})

// Database types (will be auto-generated later)
export type Database = {
  // Types will be added via: npx supabase gen types typescript
}
```

#### 2. `src/types/index.ts`
```typescript
// Re-export all types
export * from './species.types'
export * from './properties.types'
export * from './matrices.types'
export * from './collections.types'
export * from './monitoring.types'
export * from './labels.types'
// ... etc
```

#### 3. `.env.local` (não commitar!)
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

---

### 6.4 Comandos Úteis

```bash
# Gerar tipos TypeScript do banco de dados
npx supabase gen types typescript --project-id your-project-id > src/types/database.types.ts

# Iniciar projeto local
npm run dev

# Build para produção
npm run build

# Deploy manual na Vercel (se necessário)
vercel --prod

# Ver logs do Supabase
supabase logs

# Resetar banco local (cuidado!)
supabase db reset

# Criar nova migration
supabase migration new migration_name
```

---

### 6.5 Ordem de Implementação Recomendada

**Semana 1:** Setup completo + Autenticação
**Semana 2-3:** Espécies + Propriedades (CRUD básico)
**Semana 4-5:** Matrizes (com upload de fotos)
**Semana 6-7:** Coletas (wizard completo)
**Semana 8:** Monitoramento fenológico
**Semana 9:** Sistema de rótulos
**Semana 10:** Relatórios + Dashboard

---

### 6.6 Métricas de Sucesso (MVP - Módulo Coleta)

Após 10 semanas, o sistema deve ser capaz de:

✅ **Autenticação:**
- Usuários conseguem fazer login/logout
- Sessões persistem entre refreshes
- Esqueci senha funcional

✅ **Gestão de Espécies:**
- Cadastrar novas espécies nativas
- Buscar e filtrar espécies
- Editar informações de espécies

✅ **Gestão de Propriedades:**
- Cadastrar propriedades com endereço e GPS
- Auto-completar endereço via CEP
- Listar e editar propriedades

✅ **Gestão de Matrizes:**
- Cadastrar árvores matrizes com dados completos
- Upload de fotos das matrizes
- Visualizar galeria de fotos
- Filtrar matrizes por propriedade/espécie

✅ **Gestão de Coletas:**
- Registrar coletas via wizard 3 etapas
- Vincular a matriz ou propriedade
- Visualizar histórico de coletas
- Editar e filtrar coletas

✅ **Monitoramento Fenológico:**
- Registrar estágios fenológicos
- Ver histórico por matriz
- Ver calendário fenológico por espécie
- Upload de fotos de monitoramento

✅ **Sistema de Rótulos:**
- Gerar rótulos RENASEM
- Número de lote auto-gerado
- QR Code funcional
- Imprimir/exportar para PDF

✅ **Dashboard:**
- KPIs em tempo real
- Gráficos de coletas por mês
- Top espécies coletadas
- Métricas de matrizes e monitoramentos

---

### 6.7 Recursos de Aprendizado

**Supabase:**
- Documentação oficial: https://supabase.com/docs
- Auth tutorial: https://supabase.com/docs/guides/auth
- Storage tutorial: https://supabase.com/docs/guides/storage
- Row Level Security: https://supabase.com/docs/guides/auth/row-level-security

**React + Supabase:**
- Tutorial oficial: https://supabase.com/docs/guides/getting-started/tutorials/with-react
- Exemplo de app: https://github.com/supabase/supabase/tree/master/examples/user-management/react-user-management

**Vercel:**
- Deploy docs: https://vercel.com/docs
- Environment variables: https://vercel.com/docs/concepts/projects/environment-variables

---

### 6.8 Suporte e Dúvidas

Durante a implementação:

1. **Documentação do Supabase** é excelente - sempre consultar primeiro
2. **Discord do Supabase** (https://discord.supabase.com) - comunidade ativa
3. **GitHub Issues** do projeto - para bugs específicos
4. **Stack Overflow** - tag [supabase]

---

## 7. CONCLUSÃO

O sistema RastaFlor está tecnicamente bem estruturado com UI completa e pronto para integração backend. O plano de implementação é incremental, começando pelo módulo de maior valor (Coleta), com entregas semanais funcionais.

A escolha de **Supabase + Vercel** é ideal para este projeto:
- **Desenvolvimento rápido** (menos código boilerplate)
- **Baixo custo inicial** (free tier generoso)
- **Escalabilidade nativa** (PostgreSQL + CDN global)
- **DX excelente** (developer experience)

Com disciplina na execução das fases e testes contínuos, o MVP do Módulo de Coleta estará pronto em **10 semanas**, seguido pelo Módulo de Restauração em mais **5 semanas**, totalizando um sistema completo e production-ready em **21 semanas (~5 meses)**.

**Próximo passo:** Começar pela Fase 1 (Setup e Infraestrutura) seguindo o checklist da seção 6.2.

Boa sorte com a implementação! 🚀🌱
