#!/usr/bin/env node

/**
 * Script para criar usuário de teste no Supabase
 * Email: teste@teste.com
 * Senha: asd123
 *
 * Uso: node scripts/create-test-user.js
 */

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Carrega variáveis de ambiente
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY // Você precisa adicionar isso no .env.local

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Erro: Variáveis de ambiente não configuradas')
  console.error('Certifique-se de ter VITE_SUPABASE_URL e SUPABASE_SERVICE_KEY no .env.local')
  process.exit(1)
}

// Cliente com service key (permissões admin)
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function createTestUser() {
  console.log('🚀 Criando usuário de teste...\n')

  try {
    // 1. Criar empresa
    console.log('📦 Passo 1: Criando empresa de teste...')
    const { data: company, error: companyError } = await supabase
      .from('companies')
      .insert({
        name: 'Empresa Teste',
        cnpj: '00.000.000/0001-00',
        email: 'empresa@teste.com',
        phone: '(11) 99999-9999',
        city: 'São Paulo',
        state: 'SP'
      })
      .select()
      .single()

    if (companyError) {
      // Verifica se a empresa já existe
      if (companyError.code === '23505') {
        console.log('ℹ️  Empresa já existe, buscando...')
        const { data: existingCompany } = await supabase
          .from('companies')
          .select()
          .eq('cnpj', '00.000.000/0001-00')
          .single()

        if (existingCompany) {
          company = existingCompany
          console.log(`✅ Empresa encontrada: ${company.id}`)
        }
      } else {
        throw companyError
      }
    } else {
      console.log(`✅ Empresa criada: ${company.id}`)
    }

    // 2. Criar usuário no auth
    console.log('\n🔐 Passo 2: Criando usuário no Auth...')
    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
      email: 'teste@teste.com',
      password: 'asd123',
      email_confirm: true,
      user_metadata: {
        name: 'Usuário Teste'
      }
    })

    if (authError) {
      if (authError.message.includes('already registered')) {
        console.log('ℹ️  Usuário já existe no Auth')
        // Busca o usuário existente
        const { data: { users } } = await supabase.auth.admin.listUsers()
        const existingAuthUser = users.find(u => u.email === 'teste@teste.com')

        if (existingAuthUser) {
          authUser = { user: existingAuthUser }
          console.log(`✅ Usuário Auth encontrado: ${existingAuthUser.id}`)
        }
      } else {
        throw authError
      }
    } else {
      console.log(`✅ Usuário Auth criado: ${authUser.user.id}`)
    }

    // 3. Criar usuário no banco
    console.log('\n👤 Passo 3: Criando perfil do usuário...')
    const { data: user, error: userError } = await supabase
      .from('users')
      .insert({
        email: 'teste@teste.com',
        name: 'Usuário Teste',
        phone: '(11) 98888-8888',
        company_id: company.id,
        role: 'admin',
        is_active: true,
        admission_date: new Date().toISOString().split('T')[0]
      })
      .select()
      .single()

    if (userError) {
      if (userError.code === '23505') {
        console.log('ℹ️  Perfil de usuário já existe, buscando...')
        const { data: existingUser } = await supabase
          .from('users')
          .select()
          .eq('email', 'teste@teste.com')
          .single()

        if (existingUser) {
          user = existingUser
          console.log(`✅ Perfil encontrado: ${user.id}`)
        }
      } else {
        throw userError
      }
    } else {
      console.log(`✅ Perfil criado: ${user.id}`)
    }

    // 4. Vincular auth ao perfil
    console.log('\n🔗 Passo 4: Vinculando Auth ao perfil...')
    const { error: profileError } = await supabase
      .from('user_profiles')
      .insert({
        id: authUser.user.id,
        user_id: user.id
      })

    if (profileError) {
      if (profileError.code === '23505') {
        console.log('ℹ️  Vínculo já existe')
      } else {
        throw profileError
      }
    } else {
      console.log('✅ Vínculo criado')
    }

    console.log('\n✅ SUCESSO! Usuário de teste criado com sucesso!')
    console.log('\n📋 Credenciais:')
    console.log('   Email: teste@teste.com')
    console.log('   Senha: asd123')
    console.log('   Role: admin')
    console.log('\n🚀 Você já pode fazer login no sistema!')

  } catch (error) {
    console.error('\n❌ Erro ao criar usuário:', error.message)
    console.error(error)
    process.exit(1)
  }
}

// Executa
createTestUser()
