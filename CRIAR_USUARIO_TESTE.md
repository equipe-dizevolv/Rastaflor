# Criar Usuário de Teste

Email: **teste@teste.com**
Senha: **asd123**

## 🚀 Método Rápido (Recomendado)

### Passo 1: Executar SQL no Supabase

1. Acesse o dashboard do Supabase: https://supabase.com/dashboard
2. Selecione seu projeto RastaFlor
3. Vá em **SQL Editor**
4. Cole e execute este SQL:

```sql
-- Criar empresa de teste
INSERT INTO companies (id, name, cnpj, email, phone, city, state)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'Empresa Teste',
  '00.000.000/0001-00',
  'empresa@teste.com',
  '(11) 99999-9999',
  'São Paulo',
  'SP'
)
ON CONFLICT (cnpj) DO NOTHING;

-- Criar usuário no banco
INSERT INTO users (id, email, name, phone, company_id, role, is_active, admission_date)
VALUES (
  '00000000-0000-0000-0000-000000000002',
  'teste@teste.com',
  'Usuário Teste',
  '(11) 98888-8888',
  '00000000-0000-0000-0000-000000000001',
  'admin',
  true,
  CURRENT_DATE
)
ON CONFLICT (email) DO NOTHING;
```

### Passo 2: Criar usuário no Auth

1. No dashboard do Supabase, vá em **Authentication** > **Users**
2. Clique em **"Add user"** > **"Create new user"**
3. Preencha:
   - **Email**: `teste@teste.com`
   - **Password**: `asd123`
   - **Auto Confirm User**: ✅ (marcar esta opção)
4. Clique em **"Create user"**
5. **COPIE O UUID** do usuário criado (aparece na lista, algo como `a1b2c3d4-...`)

### Passo 3: Vincular Auth ao Perfil

1. Volte ao **SQL Editor**
2. Execute este SQL (substituindo o UUID):

```sql
-- SUBSTITUA 'UUID_DO_AUTH_USER_AQUI' pelo UUID que você copiou no passo 2.4
INSERT INTO user_profiles (id, user_id)
VALUES (
  'UUID_DO_AUTH_USER_AQUI',  -- UUID do Auth (passo anterior)
  '00000000-0000-0000-0000-000000000002'  -- UUID fixo do user
)
ON CONFLICT (id) DO NOTHING;
```

### Passo 4: Testar

1. Execute `npm run dev` no terminal
2. Acesse http://localhost:3000
3. Faça login com:
   - **Email**: teste@teste.com
   - **Senha**: asd123

✅ Pronto! Você deve conseguir entrar no sistema!

---

## 🔧 Método Alternativo (Se o acima não funcionar)

Se você tiver problemas com os UUIDs fixos, use este método:

### SQL Completo (executar tudo de uma vez)

```sql
-- 1. Criar empresa
DO $$
DECLARE
  v_company_id UUID;
BEGIN
  -- Insere ou pega empresa existente
  INSERT INTO companies (name, cnpj, email, phone, city, state)
  VALUES (
    'Empresa Teste',
    '00.000.000/0001-00',
    'empresa@teste.com',
    '(11) 99999-9999',
    'São Paulo',
    'SP'
  )
  ON CONFLICT (cnpj) DO UPDATE SET name = EXCLUDED.name
  RETURNING id INTO v_company_id;

  -- Se não retornou (já existia), busca
  IF v_company_id IS NULL THEN
    SELECT id INTO v_company_id FROM companies WHERE cnpj = '00.000.000/0001-00';
  END IF;

  -- Insere usuário
  INSERT INTO users (email, name, phone, company_id, role, is_active, admission_date)
  VALUES (
    'teste@teste.com',
    'Usuário Teste',
    '(11) 98888-8888',
    v_company_id,
    'admin',
    true,
    CURRENT_DATE
  )
  ON CONFLICT (email) DO NOTHING;

  RAISE NOTICE 'Empresa ID: %', v_company_id;
END $$;

-- Verificar se foi criado
SELECT 'Empresa criada:' as status, id, name FROM companies WHERE cnpj = '00.000.000/0001-00';
SELECT 'Usuário criado:' as status, id, email, name FROM users WHERE email = 'teste@teste.com';
```

Depois siga os passos 2 e 3 do método rápido.

---

## ❓ Troubleshooting

### Erro: "duplicate key value violates unique constraint"
**Solução**: O usuário já existe. Pode ignorar e seguir para o próximo passo.

### Erro: "User already registered"
**Solução**: Vá em Authentication > Users e procure por teste@teste.com, copie o UUID e use no passo 3.

### Login não funciona
**Solução**: Verifique se executou o passo 3 (vincular auth ao perfil). Este é o passo mais importante!

### Não vejo opção "Add user"
**Solução**: Você pode estar sem permissões. Use o SQL alternativo ou entre em contato com o admin do projeto.

---

## 🎯 Resumo Rápido

```bash
# 1. SQL no Supabase (SQL Editor):
# Copie e cole os SQLs do Passo 1 acima

# 2. Criar Auth User (Dashboard):
# Authentication > Users > Add user
# Email: teste@teste.com, Senha: asd123, Auto-confirm: SIM

# 3. Vincular (SQL Editor):
# Copie UUID do auth user e execute o SQL do Passo 3

# 4. Testar:
npm run dev
# Login: teste@teste.com / asd123
```

Qualquer dúvida, me avise! 🚀
