import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, Flame, Droplets, Wind } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Inicio = () => {
  const temperatureData = [
    { icon: Thermometer, label: "Aumento Global", value: "+1,2°C", description: "desde a era pré-industrial" },
    { icon: Flame, label: "Última Década", value: "+0,3°C", description: "2015-2024 período mais quente" },
  ];

  const causes = [
    { icon: Flame, title: "Combustíveis Fósseis", description: "Queima de carvão, petróleo e gás natural" },
    { icon: Wind, title: "Desmatamento", description: "Redução da absorção de CO₂ pelas florestas" },
    { icon: Droplets, title: "Gases de Efeito Estufa", description: "Aumento de CO₂ e metano na atmosfera" },
  ];

  const consequences = [
    "Ondas de calor e verões mais quentes",
    "Derretimento de geleiras e aumento do nível do mar",
    "Secas, enchentes e tempestades intensas",
    "Oceanos mais quentes prejudicando ecossistemas marinhos",
    "Impactos na agricultura e produção de energia",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
              Conscientização Climática
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Aquecimento Global
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A Terra está cerca de 1,2°C mais quente do que antes da era industrial.
              Os últimos 10 anos foram os mais quentes já registrados.
            </p>
          </div>
        </div>
      </section>

      {/* Temperature Data */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Temperatura do Planeta
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {temperatureData.map((item, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Motivos do Aumento
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {causes.map((cause, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-center mb-3">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full">
                      <cause.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{cause.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cause.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Consequências Principais
          </h2>
          <Card className="border-2 border-destructive/20">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {consequences.map((consequence, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-lg text-foreground">{consequence}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Em Resumo</h2>
          <p className="text-lg text-foreground/90 leading-relaxed">
            O aquecimento global está acelerando, e os últimos 10 anos foram os mais quentes da história. 
            A causa principal é a ação humana, e os efeitos já estão sendo sentidos no clima do mundo todo, 
            incluindo a América do Sul e o Brasil.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
