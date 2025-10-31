import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Graficos = () => {
  const temperatureData = [
    { year: "1900", temp: 0 },
    { year: "1950", temp: 0.1 },
    { year: "1980", temp: 0.3 },
    { year: "1990", temp: 0.5 },
    { year: "2000", temp: 0.7 },
    { year: "2005", temp: 0.9 },
    { year: "2010", temp: 1.0 },
    { year: "2015", temp: 1.15 },
    { year: "2020", temp: 1.25 },
    { year: "2024", temp: 1.3 },
  ];

  const decadeComparison = [
    { period: "2005-2015", increase: 0.9, co2: 390 },
    { period: "2015-2025", increase: 1.25, co2: 420 },
  ];

  const impactsData = [
    { category: "Ondas de Calor", increase: 85 },
    { category: "Enchentes", increase: 70 },
    { category: "Secas", increase: 65 },
    { category: "Tempestades", increase: 60 },
    { category: "Incêndios", increase: 75 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20 py-12 px-4">
      <div className="container mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Gráficos e Dados
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visualização da evolução do aquecimento global e seus impactos ao longo do tempo
          </p>
        </div>

        {/* Temperature Evolution Chart */}
        <Card className="border-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl">Evolução da Temperatura Global (1900-2024)</CardTitle>
            <CardDescription>Aumento em relação à era pré-industrial (°C)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={temperatureData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="year" 
                  className="text-xs"
                  stroke="hsl(var(--foreground))"
                />
                <YAxis 
                  className="text-xs"
                  stroke="hsl(var(--foreground))"
                  label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  name="Aumento de Temperatura"
                  dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Decade Comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Comparação de Décadas</CardTitle>
              <CardDescription>Aumento médio de temperatura (°C)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={decadeComparison}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="period" 
                    className="text-xs"
                    stroke="hsl(var(--foreground))"
                  />
                  <YAxis 
                    className="text-xs"
                    stroke="hsl(var(--foreground))"
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar 
                    dataKey="increase" 
                    fill="hsl(var(--primary))" 
                    name="Aumento (°C)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Níveis de CO₂</CardTitle>
              <CardDescription>Concentração atmosférica (ppm)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={decadeComparison}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="period" 
                    className="text-xs"
                    stroke="hsl(var(--foreground))"
                  />
                  <YAxis 
                    className="text-xs"
                    stroke="hsl(var(--foreground))"
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar 
                    dataKey="co2" 
                    fill="hsl(var(--secondary))" 
                    name="CO₂ (ppm)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Impacts Chart */}
        <Card className="border-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl">Aumento de Eventos Extremos (2015-2025)</CardTitle>
            <CardDescription>Porcentagem de aumento em relação à década anterior</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={impactsData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  type="number" 
                  className="text-xs"
                  stroke="hsl(var(--foreground))"
                />
                <YAxis 
                  type="category" 
                  dataKey="category" 
                  className="text-xs"
                  stroke="hsl(var(--foreground))"
                  width={120}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar 
                  dataKey="increase" 
                  fill="hsl(var(--destructive))" 
                  name="Aumento (%)"
                  radius={[0, 8, 8, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Principais Descobertas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>2015-2025 foi 0,3°C mais quente que a década anterior</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>CO₂ aumentou de 380 ppm (2005) para 420 ppm (2025)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>Eventos climáticos extremos aumentaram significativamente</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>O nível do mar subiu aproximadamente 3 mm por ano</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Graficos;
