# Instruções para Criar a Tabela de Espécies no Supabase

## Opção 1: Usando o Supabase Dashboard (Recomendado)

1. Acesse o [Supabase Dashboard](https://app.supabase.com/)
2. Selecione seu projeto
3. Vá para **SQL Editor** no menu lateral
4. Clique em **New Query**
5. Copie todo o conteúdo do arquivo `create_species_table.sql`
6. Cole no editor SQL
7. Clique em **Run** para executar a migration

## Opção 2: Usando Supabase CLI

```bash
# Se você tem o Supabase CLI instalado
supabase db push

# Ou execute diretamente
supabase db execute --file supabase/migrations/create_species_table.sql
```

## O Que Esta Migration Cria

### Tabela: `species`

A tabela de espécies com os seguintes campos:

- **id**: UUID (Primary Key)
- **company_id**: UUID (Foreign Key para companies) - Relaciona a espécie com a empresa
- **popular_name**: Nome popular da espécie (obrigatório)
- **scientific_name**: Nome científico (obrigatório)
- **family**: Família botânica (obrigatório)
- **genus**: Gênero (opcional)
- **biome**: Bioma de origem (opcional)
- **category**: Categoria sucessional (opcional)
- **conservation_status**: Status de conservação (opcional)
- **description**: Descrição/observações (opcional)
- **is_active**: Status ativo/inativo (default: true)
- **created_at, updated_at**: Timestamps automáticos
- **created_by, updated_by**: Referência ao usuário que criou/atualizou

### Row Level Security (RLS)

As políticas de segurança garantem que:
- Usuários só podem ver espécies da sua própria empresa
- Usuários só podem criar espécies para sua própria empresa
- Usuários só podem editar/deletar espécies da sua própria empresa

### Índices

Índices criados para melhor performance:
- `idx_species_company_id` - Busca por empresa
- `idx_species_popular_name` - Busca por nome popular
- `idx_species_scientific_name` - Busca por nome científico
- `idx_species_is_active` - Filtro por status

### Triggers

- `trigger_update_species_updated_at` - Atualiza automaticamente o campo `updated_at` quando um registro é modificado

## Verificação

Após executar a migration, você pode verificar se tudo foi criado corretamente:

```sql
-- Verificar se a tabela foi criada
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public' AND table_name = 'species';

-- Verificar as políticas RLS
SELECT * FROM pg_policies WHERE tablename = 'species';

-- Verificar os índices
SELECT indexname FROM pg_indexes
WHERE tablename = 'species';
```

## Estrutura de Dados

A hierarquia de dados é:

```
User (auth.users)
  └─> has company_id
      └─> Company (companies)
          └─> Species (species)
              - Cada empresa tem suas próprias espécies
              - Usuários só acessam espécies da sua empresa
```

## Próximos Passos

Após criar a tabela, o sistema está pronto para:
1. Criar novas espécies via interface
2. Editar espécies existentes
3. Visualizar detalhes das espécies
4. Deletar espécies (hard delete)
5. Buscar espécies por nome popular ou científico

Todos os dados são automaticamente filtrados por empresa, garantindo o isolamento dos dados.
