import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface Invoice {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
}

interface FinancialSectionProps {
  invoices: Invoice[];
}

const COLORS = ['#34D399', '#60A5FA', '#F472B6', '#FBBF24', '#A78BFA'];

export function FinancialSection({ invoices }: FinancialSectionProps) {
  // Calculate expenses by category
  const expensesByCategory = invoices.reduce((acc, invoice) => {
    const existing = acc.find(item => item.name === invoice.category);
    if (existing) {
      existing.value += invoice.amount;
    } else {
      acc.push({
        name: invoice.category,
        value: invoice.amount
      });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  const totalExpenses = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-foreground font-medium">{data.name}</p>
          <p className="text-primary">
            R$ {data.value.toLocaleString('pt-BR')}
          </p>
          <p className="text-secondary text-sm">
            {((data.value / totalExpenses) * 100).toFixed(1)}% do total
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="h-fit shadow-sm">
      <CardHeader>
        <CardTitle className="text-foreground">Visão Financeira</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Donut Chart */}
        <div className="print:hidden">
          <h4 className="font-medium text-foreground mb-4">Despesas por Categoria</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expensesByCategory}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {expensesByCategory.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  wrapperStyle={{ color: '#EAEAEA', fontSize: '14px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Print version of chart data */}
        <div className="hidden print:block">
          <h4 className="font-medium text-foreground mb-4">Despesas por Categoria</h4>
          <div className="space-y-2">
            {expensesByCategory.map((category, index) => (
              <div key={category.name} className="flex justify-between items-center">
                <span className="text-secondary">{category.name}</span>
                <span className="text-foreground font-medium">
                  R$ {category.value.toLocaleString('pt-BR')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Invoices Summary Table */}
        <div className="space-y-4">
          <h4 className="font-medium text-foreground">Resumo de Faturas</h4>
          <div className="space-y-2">
            {invoices.slice(0, 5).map((invoice) => (
              <div
                key={invoice.id}
                className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">
                    {invoice.description}
                  </p>
                  <p className="text-xs text-secondary">
                    {invoice.date} • {invoice.category}
                  </p>
                </div>
                <div className="text-sm font-medium text-foreground ml-4">
                  R$ {invoice.amount.toLocaleString('pt-BR')}
                </div>
              </div>
            ))}
            
            {invoices.length > 5 && (
              <div className="text-center pt-2">
                <span className="text-xs text-secondary">
                  +{invoices.length - 5} faturas adicionais
                </span>
              </div>
            )}
          </div>
          
          <div className="border-t border-border pt-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-foreground">Total</span>
              <span className="font-bold text-primary">
                R$ {totalExpenses.toLocaleString('pt-BR')}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}