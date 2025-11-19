import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface DataTableProps {
  title: string;
  headers: string[];
  data: (string | number)[][];
  className?: string;
}

export function DataTable({ title, headers, data, className }: DataTableProps) {
  return (
    <Card className={`shadow-sm ${className || ''}`}>
      <CardHeader>
        <CardTitle className="text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="text-left py-3 px-4 font-medium text-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-border last:border-b-0 hover:bg-muted/20 transition-colors print:hover:bg-transparent"
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`py-3 px-4 ${
                        cellIndex === 0 
                          ? 'text-foreground font-medium' 
                          : 'text-secondary'
                      }`}
                    >
                      {typeof cell === 'number' && cellIndex > 0 
                        ? cell.toLocaleString('pt-BR') 
                        : cell
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}