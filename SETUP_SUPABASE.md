# RastaFlor - Setup do Supabase

Este documento descreve como configurar o backend Supabase para o sistema RastaFlor.

## 📋 Pré-requisitos

- Conta no Supabase (https://supabase.com)
- Node.js instalado
- npm ou yarn

## 🚀 Passo 1: Criar Projeto no Supabase

1. Acesse https://supabase.com e faça login
2. Clique em "New Project"
3. Preencha os dados:
   - **Name**: RastaFlor
   - **Database Password**: Escolha uma senha forte
   - **Region**: Escolha a região mais próxima (South America - São Paulo recomendado)
4. Aguarde ~2 minutos enquanto o projeto é provisionado

## 🗄️ Passo 2: Configurar o Banco de Dados

### Criar as Tabelas

1. No dashboard do Supabase, vá para **SQL Editor**
2. Clique em "New query"
3. Cole o seguinte SQL:

```sql
-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Companies (Multi-tenancy)
CREATE TABLE companies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    cnpj VARCHAR(18) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    street VARCHAR(255),
    number VARCHAR(20),
    city VARCHAR(100),
    state VARCHAR(2),
    cep VARCHAR(9),
    active_module VARCHAR(20) CHECK (active_module IN ('restauracao', 'coleta', 'both')) DEFAULT 'both',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Users
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    role VARCHAR(20) CHECK (role IN ('admin', 'manager', 'technician', 'viewer')) DEFAULT 'viewer',
    last_login TIMESTAMPTZ,
    is_active BOOLEAN DEFAULT true,
    admission_date DATE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Link Supabase Auth to Users table
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(user_id)
);

-- Indexes
CREATE INDEX idx_users_company ON users(company_id);
CREATE INDEX idx_users_email ON users(email);

-- Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_companies_updated_at BEFORE UPDATE ON companies
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Helper function to get user's company_id
CREATE OR REPLACE FUNCTION get_user_company_id()
RETURNS UUID AS $$
    SELECT company_id FROM users WHERE id = (
        SELECT user_id FROM user_profiles WHERE id = auth.uid()
    );
$$ LANGUAGE sql SECURITY DEFINER;

-- RLS Policies for Companies
CREATE POLICY "Users can view own company"
    ON companies FOR SELECT
    USING (id = get_user_company_id());

-- RLS Policies for Users
CREATE POLICY "Users can view company users"
    ON users FOR SELECT
    USING (company_id = get_user_company_id());

CREATE POLICY "Users can insert company users"
    ON users FOR INSERT
    WITH CHECK (company_id = get_user_company_id());

CREATE POLICY "Users can update company users"
    ON users FOR UPDATE
    USING (company_id = get_user_company_id());

CREATE POLICY "Users can delete company users"
    ON users FOR DELETE
    USING (company_id = get_user_company_id());

-- RLS Policies for User Profiles
CREATE POLICY "Users can view their own profile"
    ON user_profiles FOR SELECT
    USING (id = auth.uid());

CREATE POLICY "Users can insert their own profile"
    ON user_profiles FOR INSERT
    WITH CHECK (id = auth.uid());

CREATE POLICY "Users can update their own profile"
    ON user_profiles FOR UPDATE
    USING (id = auth.uid());
```

4. Clique em "Run" para executar

### Inserir Dados Iniciais

1. Ainda no SQL Editor, crie uma nova query
2. Cole o seguinte SQL para criar uma empresa e usuário de teste:

```sql
-- Inserir empresa de teste
INSERT INTO companies (name, cnpj, email, phone, city, state)
VALUES ('RastaFlor Desenvolvimento', '12.345.678/0001-90', 'contato@rastaflor.com', '(11) 99999-9999', 'São Paulo', 'SP')
RETURNING id;

-- COPIE O ID RETORNADO ACIMA e substitua no comando abaixo
-- Inserir usuário de teste (substitua YOUR_COMPANY_ID_HERE pelo ID retornado acima)
INSERT INTO users (email, name, company_id, role, is_active)
VALUES ('admin@rastaflor.com', 'Administrador', 'YOUR_COMPANY_ID_HERE', 'admin', true);
```

## 🔐 Passo 3: Configurar Autenticação

1. No dashboard do Supabase, vá para **Authentication** > **Providers**
2. Em **Email**, certifique-se de que está habilitado
3. Em **Email** settings:
   - **Desabilite** "Confirm email" (apenas para desenvolvimento - habilite em produção)
   - **Enable** "Secure email change"

### Criar Usuário de Teste no Auth

1. Vá para **Authentication** > **Users**
2. Clique em "Add user" > "Create new user"
3. Preencha:
   - **Email**: admin@rastaflor.com
   - **Password**: Escolha uma senha forte
   - **Auto Confirm User**: Marque esta opção
4. Clique em "Create user"
5. **IMPORTANTE**: Copie o UUID do usuário criado

### Vincular Auth ao Profile

1. Volte ao SQL Editor
2. Execute (substitua os IDs):

```sql
-- SUBSTITUA os valores abaixo:
-- YOUR_AUTH_USER_ID: UUID do usuário criado no Auth
-- YOUR_USER_ID: ID do usuário na tabela 'users'

INSERT INTO user_profiles (id, user_id)
VALUES ('YOUR_AUTH_USER_ID', 'YOUR_USER_ID');
```

## 🔑 Passo 4: Obter Credenciais

1. No dashboard do Supabase, vá para **Settings** > **API**
2. Copie os seguintes valores:
   - **Project URL** (na seção "Config")
   - **anon public key** (na seção "Project API keys")

## ⚙️ Passo 5: Configurar Variáveis de Ambiente

1. Na raiz do projeto, copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

2. Edite `.env.local` e preencha com suas credenciais:

```env
VITE_SUPABASE_URL=https://yourproject.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## 🧪 Passo 6: Testar a Aplicação

1. Instale as dependências (se ainda não instalou):

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse http://localhost:3000
4. Faça login com:
   - **Email**: admin@rastaflor.com
   - **Senha**: A senha que você definiu

## ✅ Verificação

Se tudo estiver correto, você deve conseguir:

- ✅ Fazer login com o usuário criado
- ✅ Acessar a seleção de módulos
- ✅ Ver o menu "Equipe" no módulo de Coleta
- ✅ Adicionar novos membros da equipe
- ✅ Editar membros existentes
- ✅ Ativar/desativar membros
- ✅ Excluir membros

## 🔧 Troubleshooting

### Erro: "Missing Supabase environment variables"

- Certifique-se de que o arquivo `.env.local` existe
- Verifique se as variáveis começam com `VITE_`
- Reinicie o servidor de desenvolvimento

### Erro: "Perfil de usuário não encontrado"

- Verifique se o usuário foi criado na tabela `users`
- Verifique se o vínculo foi criado na tabela `user_profiles`
- Confirme que os UUIDs estão corretos

### Erro: "Usuário não autenticado" ao acessar Equipe

- Verifique se as RLS policies foram criadas corretamente
- Confirme que o usuário está vinculado a uma empresa
- Teste fazer logout e login novamente

## 📚 Próximos Passos

Após configurar Login e Equipe com sucesso, você pode prosseguir com:

1. **Módulo de Coleta completo**:
   - Propriedades
   - Espécies
   - Matrizes
   - Coletas
   - Monitoramentos
   - Rótulos

2. **Módulo de Restauração**
3. **Módulo Admin**

Consulte o plano completo em `C:\Users\davic\.claude\plans\mutable-coalescing-bird.md` para detalhes.

## 🆘 Suporte

- Documentação oficial do Supabase: https://supabase.com/docs
- Discord do Supabase: https://discord.supabase.com
- Issues do projeto: Crie uma issue no repositório

---

**Desenvolvido com ❤️ para preservação ambiental**
