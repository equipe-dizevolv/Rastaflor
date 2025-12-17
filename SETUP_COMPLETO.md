# 🚀 Setup Completo - Passo a Passo

## ✅ CHECKLIST DE VERIFICAÇÃO

Marque conforme for completando:

- [ ] **1. Configurar variáveis de ambiente (.env.local)**
- [ ] **2. Executar migration SQL no Supabase**
- [ ] **3. Criar empresa no banco**
- [ ] **4. Criar usuário no Supabase Auth**
- [ ] **5. Vincular usuário à empresa**
- [ ] **6. Testar login**

---

## 📝 PASSO 1: Configurar Variáveis de Ambiente

### 1.1. Obter credenciais do Supabase

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto RastaFlor (ou crie um novo)
3. Vá em **Settings** (⚙️) → **API**
4. Copie:
   - **Project URL** (algo como: `https://abc123.supabase.co`)
   - **anon/public key** (uma string longa começando com `eyJ...`)

### 1.2. Editar arquivo .env.local

Abra o arquivo `.env.local` na raiz do projeto e substitua:

```env
# Supabase Project URL
VITE_SUPABASE_URL=https://abc123.supabase.co

# Supabase Anon Key (Public Key)
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ **IMPORTANTE**: Após editar, **REINICIE o servidor** (`Ctrl+C` e depois `npm run dev`)

---

## 📝 PASSO 2: Executar Migration SQL

### 2.1. Acessar SQL Editor do Supabase

1. No Dashboard do Supabase, clique em **SQL Editor** (ícone `</>` no menu lateral)
2. Clique em **New Query**

### 2.2. Copiar e executar o SQL

1. Abra o arquivo: `supabase/migrations/001_create_base_tables.sql`
2. Copie **TODO** o conteúdo
3. Cole no SQL Editor do Supabase
4. Clique em **Run** (ou `Ctrl+Enter`)

✅ Deve aparecer: **"Success. No rows returned"**

---

## 📝 PASSO 3: Criar Empresa

No SQL Editor, execute:

```sql
INSERT INTO companies (id, name, cnpj, email, phone, active_module)
VALUES (
  '00000000-0000-0000-0000-000000000001'::UUID,
  'Empresa Master Teste',
  '00.000.000/0001-00',
  'davicampos.dizevolv@gmail.com',
  '(00) 00000-0000',
  'coleta'
) RETURNING *;
```

✅ Deve retornar **1 linha** com os dados da empresa criada

---

## 📝 PASSO 4: Criar Usuário no Supabase Auth

### 4.1. Ir para Auth Users

1. No Dashboard, clique em **Authentication** (🔐) → **Users**
2. Clique em **Add User** → **Create new user**

### 4.2. Preencher dados

- **Email**: `davicampos.dizevolv@gmail.com`
- **Password**: `asd123`
- ✅ **MARQUE**: "Auto Confirm User" (MUITO IMPORTANTE!)
- Clique em **Create User**

### 4.3. Copiar o ID do usuário

⚠️ **COPIE O ID** que aparece na coluna "ID" (é um UUID como `a1b2c3d4-e5f6-...`)

Você vai precisar desse ID no próximo passo!

---

## 📝 PASSO 5: Vincular Usuário à Empresa

No SQL Editor, execute (⚠️ **SUBSTITUA `<ID_DO_USUARIO>`** pelo ID que você copiou):

```sql
INSERT INTO users (
  id,
  email,
  name,
  company_id,
  role,
  is_active
)
VALUES (
  '<ID_DO_USUARIO>'::UUID,  -- ⚠️ COLE O ID DO PASSO 4 AQUI!
  'davicampos.dizevolv@gmail.com',
  'Davi Campos',
  '00000000-0000-0000-0000-000000000001'::UUID,
  'admin',
  true
) RETURNING *;
```

✅ Deve retornar **1 linha** com os dados do usuário vinculado

---

## 📝 PASSO 6: Testar Login

### 6.1. Verificar servidor rodando

Se o servidor não estiver rodando, execute:

```bash
npm run dev
```

### 6.2. Acessar aplicação

Abra: http://localhost:3001

### 6.3. Fazer login

- **Email**: `davicampos.dizevolv@gmail.com`
- **Senha**: `asd123`
- Clique em **Entrar**

✅ **Deve fazer login com sucesso!**

---

## 🔍 VERIFICAÇÕES (Se algo der errado)

### Verificar variáveis de ambiente

Execute no terminal:

```bash
cat .env.local
```

Deve mostrar URLs válidas (não pode ter `your_supabase_...` nem `sua-anon-key...`)

### Verificar tabelas criadas

No SQL Editor do Supabase:

```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_name IN ('companies', 'users');
```

Deve retornar **2 linhas**: `companies` e `users`

### Verificar empresa criada

```sql
SELECT * FROM companies WHERE name = 'Empresa Master Teste';
```

Deve retornar **1 linha**

### Verificar usuário vinculado

```sql
SELECT u.id, u.name, u.email, u.role, c.name as company_name
FROM users u
JOIN companies c ON u.company_id = c.id
WHERE u.email = 'davicampos.dizevolv@gmail.com';
```

Deve retornar **1 linha**: Davi Campos | admin | Empresa Master Teste

### Verificar IDs sincronizados

```sql
SELECT
  au.id as auth_id,
  u.id as users_id,
  au.email,
  CASE WHEN au.id = u.id THEN '✅ OK' ELSE '❌ Erro!' END as status
FROM auth.users au
LEFT JOIN users u ON au.id = u.id
WHERE au.email = 'davicampos.dizevolv@gmail.com';
```

Status deve ser: **✅ OK**

---

## 🐛 PROBLEMAS COMUNS

### "Missing Supabase environment variables"

❌ **Problema**: Arquivo `.env.local` não configurado

✅ **Solução**: Volte ao Passo 1 e configure corretamente

### "Perfil de usuário não encontrado"

❌ **Problema**: Usuário existe no Auth mas não na tabela `users`

✅ **Solução**: Execute novamente o Passo 5 (INSERT INTO users)

### "Invalid login credentials"

❌ **Problema**: Senha incorreta ou usuário não existe no Auth

✅ **Solução**:
1. Vá em Dashboard > Authentication > Users
2. Verifique se `davicampos.dizevolv@gmail.com` existe
3. Se não existir, execute o Passo 4 novamente
4. Se senha estiver incorreta, clique nos 3 pontinhos → Reset Password

### Página em branco após login

❌ **Problema**: Possível erro no código

✅ **Solução**: Abra o Console do navegador (F12) e veja os erros

---

## 📊 RESUMO - O QUE VOCÊ TEM AGORA

Após completar todos os passos:

✅ Variáveis de ambiente configuradas
✅ Tabelas `companies` e `users` criadas no Supabase
✅ Empresa "Empresa Master Teste" cadastrada
✅ Usuário `davicampos.dizevolv@gmail.com` criado no Auth
✅ Usuário vinculado à empresa com role `admin`
✅ Login funcionando

---

## 🎯 PRÓXIMOS PASSOS

Agora você pode:

1. ✅ **Fazer login** com davicampos.dizevolv@gmail.com
2. ✅ **Navegar** até Coleta → Equipe
3. ✅ **Adicionar novos membros** à equipe
4. ⚠️ Novos membros são criados **apenas na tabela users** (modo local)
5. 💡 Para permitir login dos novos membros, crie-os também no Auth Dashboard

---

**Tempo estimado**: 10-15 minutos
**Última atualização**: 2025-11-28
