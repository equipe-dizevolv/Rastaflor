import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button } from '../../ui/button';
import { UserPlus } from 'lucide-react';

interface AdminDashboardProps {
  onInviteUser: () => void;
}

// Mock data
const empresasPorModulo = [
  { name: 'Coleta', value: 28, color: '#0F3D26' },
  { name: 'Restauração', value: 45, color: '#16A34A' },
  { name: 'Ambos', value: 12, color: '#86EFAC' },
];

const empresasPorEstado = [
  { estado: 'SP', quantidade: 32 },
  { estado: 'MG', quantidade: 18 },
  { estado: 'RJ', quantidade: 12 },
  { estado: 'PR', quantidade: 10 },
  { estado: 'SC', quantidade: 8 },
  { estado: 'RS', quantidade: 5 },
];

const usuariosPorLogin = [
  { mes: 'Nov/24', usuarios: 45 },
  { mes: 'Dez/24', usuarios: 52 },
  { mes: 'Jan/25', usuarios: 48 },
  { mes: 'Fev/25', usuarios: 65 },
  { mes: 'Mar/25', usuarios: 72 },
  { mes: 'Abr/25', usuarios: 68 },
  { mes: 'Mai/25', usuarios: 75 },
  { mes: 'Jun/25', usuarios: 82 },
  { mes: 'Jul/25', usuarios: 78 },
  { mes: 'Ago/25', usuarios: 88 },
  { mes: 'Set/25', usuarios: 92 },
  { mes: 'Out/25', usuarios: 95 },
  { mes: 'Nov/25', usuarios: 102 },
];

const usuariosPorPerfil = [
  { name: 'Admin', value: 35, color: '#0F3D26' },
  { name: 'Técnico', value: 45, color: '#16A34A' },
  { name: 'User Master', value: 20, color: '#86EFAC' },
];

export function AdminDashboard({ onInviteUser }: AdminDashboardProps) {
  return (
    <div className="p-6 space-y-6">
      {/* Header with Action Button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#1A1A1A]">Visão Geral</h2>
          <p className="text-[#777777] mt-1">Acompanhe métricas gerais da plataforma</p>
        </div>
        <Button 
          onClick={onInviteUser}
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[12px] px-4 py-2 flex items-center gap-2"
        >
          <UserPlus className="w-4 h-4" />
          <span>Convidar usuário empresa</span>
        </Button>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Empresas por módulo */}
        <div className="bg-white rounded-[12px] p-6 shadow-sm border border-[#E0E0E0]">
          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Empresas por módulo associado</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={empresasPorModulo}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {empresasPorModulo.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-4">
            {empresasPorModulo.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-[#777777]">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Empresas por estado */}
        <div className="bg-white rounded-[12px] p-6 shadow-sm border border-[#E0E0E0]">
          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Empresas por estado</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={empresasPorEstado} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="estado" type="category" />
              <Tooltip />
              <Bar dataKey="quantidade" fill="#0F3D26" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Card 3: Usuários por último login */}
        <div className="bg-white rounded-[12px] p-6 shadow-sm border border-[#E0E0E0]">
          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Usuários por último login</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={usuariosPorLogin}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="usuarios" stroke="#0F3D26" strokeWidth={2} dot={{ fill: '#0F3D26' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Card 4: Usuários por tipo de perfil */}
        <div className="bg-white rounded-[12px] p-6 shadow-sm border border-[#E0E0E0]">
          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Usuários por tipo de perfil</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={usuariosPorPerfil}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {usuariosPorPerfil.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-4">
            {usuariosPorPerfil.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-[#777777]">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
