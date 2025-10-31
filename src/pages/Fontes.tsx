import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Fontes = () => {
  const sources = [
    {
      organization: "World Meteorological Organization (WMO)",
      title: "State of the Global Climate 2023",
      description: "2015-2023 foi o período mais quente já registrado, com média de ≈1,2°C acima da era pré-industrial",
      url: "https://public.wmo.int/news/media-centre/state-global-climate-2023",
      year: "2024",
    },
    {
      organization: "Copernicus Climate Change Service (C3S / União Europeia)",
      title: "Relatórios anuais de temperatura global",
      description: "Dados mostram aumento médio de ≈0,31°C entre as décadas 2005-2014 e 2015-2024",
      url: "https://climate.copernicus.eu",
      year: "2015-2025",
    },
    {
      organization: "NASA GISS (Goddard Institute for Space Studies)",
      title: "GISTEMP v4 - Temperatura Global",
      description: "Confirma que cada década desde 1980 foi mais quente que a anterior; 2015-2025 é a mais quente",
      url: "https://data.giss.nasa.gov/gistemp",
      year: "Contínuo",
    },
    {
      organization: "NOAA (National Oceanic and Atmospheric Administration)",
      title: "Global Climate Report",
      description: "2023 foi o ano mais quente desde 1850, média 2015-2025 ultrapassa 1,2°C acima da era pré-industrial",
      url: "https://ncei.noaa.gov/access/monitoring/global-temperature-anomalies",
      year: "Anual",
    },
    {
      organization: "IPCC (Painel Intergovernamental sobre Mudanças Climáticas - ONU)",
      title: "6º Relatório de Avaliação (AR6)",
      description: "Aquecimento está em torno de 0,2°C por década nas últimas 40 anos",
      url: "https://www.ipcc.ch/report/ar6/wg1",
      year: "2021-2023",
    },
    {
      organization: "INMET (Brasil)",
      title: "Resumo oficial dos dados da WMO",
      description: "Tradução e resumo com valor de ≈1,45°C acima da média pré-industrial em 2023",
      url: "https://portal.inmet.gov.br/uploads/notastecnicas/1347_Statement_2023_en.pdf",
      year: "2023",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20 py-12 px-4">
      <div className="container mx-auto space-y-12 max-w-5xl">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="mb-2 bg-primary/20 text-primary hover:bg-primary/30">
            Referências Científicas
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Fontes e Referências
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todas as informações apresentadas são baseadas em dados científicos de organizações 
            internacionais reconhecidas
          </p>
        </div>

        {/* Sources Cards */}
        <div className="space-y-6">
          {sources.map((source, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-xl transition-all duration-300 hover:border-primary/50 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {source.organization}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base font-medium text-foreground">
                      {source.title}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="flex-shrink-0">
                    {source.year}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {source.description}
                </p>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium group/link"
                >
                  <span className="group-hover/link:underline">Acessar fonte</span>
                  <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Credibility Note */}
        <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center space-x-2">
              <FileText className="h-6 w-6 text-primary" />
              <span>Sobre as Fontes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <p className="leading-relaxed">
              Todas as fontes citadas são organizações científicas e governamentais reconhecidas 
              internacionalmente por sua credibilidade e rigor metodológico.
            </p>
            <p className="leading-relaxed">
              Os dados apresentados passam por revisão por pares e são constantemente atualizados 
              com base em evidências científicas coletadas de todo o mundo.
            </p>
            <div className="pt-4 border-t border-border">
              <p className="font-medium text-primary">
                A ciência do clima é clara: o aquecimento global é real, está acelerando e é 
                causado principalmente pela ação humana.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Transparency */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-xl">Transparência de Dados</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground/90">
                  Todos os dados de temperatura são medidos por estações meteorológicas, satélites e boias oceânicas
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground/90">
                  As metodologias de coleta e análise são públicas e revisadas pela comunidade científica
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground/90">
                  Múltiplas organizações independentes chegam a conclusões similares
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Fontes;
