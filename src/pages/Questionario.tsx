import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Questionario = () => {
  // IMPORTANTE: Substitua pela URL do seu Google Forms
  const googleFormsUrl = "https://forms.gle/XKvguBN9kdyMZ98i9";

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Participe da Nossa Pesquisa</CardTitle>
              <CardDescription className="text-lg mt-2">
                Sua visão sobre o aquecimento global é importante para nós.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  As respostas coletadas nos ajudarão a analisar como as pessoas
                </p>
                <p className="text-muted-foreground">
                   compreendem e se relacionam com esse tema.
                </p>
              </div>
              
              <div className="flex justify-center pt-4">
                <Button 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.open(googleFormsUrl, '_blank')}
                >
                  Responder Questionário
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
                <p>
                  Clique no botão acima para abrir o questionário em uma nova aba.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Questionario;
