-- Script para criar usuário de teste
-- Email: teste@teste.com
-- Senha: asd123

-- 1. Criar empresa de teste
INSERT INTO companies (name, cnpj, email, phone, city, state)
VALUES (
  'Empresa Teste',
  '00.000.000/0001-00',
  'empresa@teste.com',
  '(11) 99999-9999',
  'São Paulo',
  'SP'
)
RETURNING id;

-- ⚠️ IMPORTANTE: Copie o UUID retornado acima e cole no próximo comando substituindo 'COMPANY_ID_AQUI'

-- 2. Criar usuário no banco de dados
INSERT INTO users (email, name, phone, company_id, role, is_active, admission_date)
VALUES (
  'teste@teste.com',
  'Usuário Teste',
  '(11) 98888-8888',
  'COMPANY_ID_AQUI', -- ⚠️ SUBSTITUIR pelo ID da empresa retornado acima
  'admin',
  true,
  CURRENT_DATE
)
RETURNING id;

-- ⚠️ IMPORTANTE: Copie o UUID retornado acima também

-- 3. Agora você precisa:
-- 3.1. No dashboard do Supabase, ir em Authentication > Users
-- 3.2. Clicar em "Add user" > "Create new user"
-- 3.3. Preencher:
--      Email: teste@teste.com
--      Password: asd123
--      Auto Confirm User: ✓ (marcar)
-- 3.4. Copiar o UUID do usuário criado

-- 4. Por fim, vincular o auth user ao user do banco:
INSERT INTO user_profiles (id, user_id)
VALUES (
  'AUTH_USER_ID_AQUI',  -- ⚠️ UUID do Auth (passo 3.4)
  'USER_ID_AQUI'        -- ⚠️ UUID do users (passo 2)
);
