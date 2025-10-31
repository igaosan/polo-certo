import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Car, TreePine, ShoppingBag, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Intervencoes = () => {
  const interventions = [
    {
      icon: Lightbulb,
      title: "Economizar Energia",
      color: "from-yellow-500/20 to-orange-500/20",
      actions: [
        "Apagar luzes e desligar aparelhos quando não estiverem em uso",
        "Trocar lâmpadas comuns por LEDs (gastam até 80% menos energia)",
        "Usar eletrodomésticos com selo A de eficiência energética",
        "Aproveitar mais luz natural e ventilação",
      ],
    },
    {
      icon: Car,
      title: "Reduzir Combustíveis Fósseis",
      color: "from-blue-500/20 to-cyan-500/20",
      actions: [
        "Andar a pé, de bicicleta ou usar transporte público",
        "Fazer caronas compartilhadas",
        "Escolher carros elétricos ou híbridos quando possível",
        "Evitar viagens aéreas desnecessárias",
      ],
    },
    {
      icon: TreePine,
      title: "Cuidar das Áreas Verdes",
      color: "from-green-500/20 to-emerald-500/20",
      actions: [
        "Plantar árvores - elas absorvem CO₂ e regulam o clima",
        "Cuidar de jardins, hortas e áreas verdes urbanas",
        "Evitar desmatamento e apoiar projetos de reflorestamento",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Mudar Hábitos de Consumo",
      color: "from-purple-500/20 to-pink-500/20",
      actions: [
        "Reduzir o desperdício de alimentos",
        "Comer menos carne vermelha (pecuária libera muito metano)",
        "Comprar produtos locais e sustentáveis",
        "Reciclar e reutilizar sempre que possível",
      ],
    },
    {
      icon: Users,
      title: "Participar e Influenciar",
      color: "from-primary/20 to-secondary/20",
      actions: [
        "Apoiar políticas ambientais e cobrar ações de governos",
        "Participar de campanhas de conscientização",
        "Ensinar outras pessoas sobre o impacto das escolhas no clima",
        "Apoiar projetos comunitários de sustentabilidade",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20 py-12 px-4">
      <div className="container mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="mb-2 bg-primary/20 text-primary hover:bg-primary/30">
            Ações Práticas
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            O Que Pode Ser Feito
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pequenas ações individuais podem fazer uma grande diferença quando realizadas por muitas pessoas
          </p>
        </div>

        {/* Interventions Cards */}
        <div className="space-y-8">
          {interventions.map((intervention, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden bg-gradient-to-br from-accent/30 to-secondary/20"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-background rounded-lg shadow-lg">
                    <intervention.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{intervention.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {intervention.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="flex items-start space-x-3 group">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                      <span className="text-foreground text-base leading-relaxed">
                        {action}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card className="border-2 border-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Comparação de Temperatura Global (2005-2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-border p-4 text-left font-semibold">Período</th>
                    <th className="border border-border p-4 text-left font-semibold">Aumento Médio</th>
                    <th className="border border-border p-4 text-left font-semibold">Diferença</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-accent/50 transition-colors">
                    <td className="border border-border p-4">2005-2015</td>
                    <td className="border border-border p-4">cerca de +0,9°C</td>
                    <td className="border border-border p-4">—</td>
                  </tr>
                  <tr className="hover:bg-accent/50 transition-colors">
                    <td className="border border-border p-4">2015-2025</td>
                    <td className="border border-border p-4">cerca de +1,2°C a +1,3°C</td>
                    <td className="border border-border p-4 font-semibold text-destructive">
                      +0,3°C mais quente
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-muted-foreground">
              O planeta esquentou cerca de 0,3°C em apenas 10 anos — um ritmo alarmante
            </p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="border-2 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
          <CardContent className="pt-8 pb-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Cada Ação Conta
              </h3>
              <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
                A década de 2015-2025 foi muito mais quente e instável que 2005-2015. 
                O aquecimento acelerou e seus efeitos são visíveis. A ação coletiva e individual 
                é essencial para reverter essa tendência.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Intervencoes;
