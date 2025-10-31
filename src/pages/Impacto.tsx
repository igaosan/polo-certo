import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Impacto: React.FC = () => {
  const [respostasTeste, setRespostasTeste] = useState<number[]>(Array(5).fill(-1));
  const [resultadoTeste, setResultadoTeste] = useState<string | null>(null);
  const [pontuacaoTeste, setPontuacaoTeste] = useState(0);

  const [respostasQuiz, setRespostasQuiz] = useState<number[]>(Array(5).fill(-1));
  const [resultadoQuiz, setResultadoQuiz] = useState<string | null>(null);
  const [pontuacaoQuiz, setPontuacaoQuiz] = useState(0);

  const [resultadoFinal, setResultadoFinal] = useState<string | null>(null);
  const [mediaFinal, setMediaFinal] = useState<number | null>(null);

  // Perguntas do teste
  const perguntasTeste = [
    "Você separa o lixo reciclável?",
    "Usa transporte público ou bicicleta?",
    "Evita desperdício de água e energia?",
    "Consome alimentos locais ou menos carne?",
    "Participa de ações ambientais?",
  ];

  // Perguntas do quiz
  const perguntasQuiz = [
    {
      pergunta: "1. Qual gás é o principal responsável pelo efeito estufa?",
      opcoes: ["Oxigênio", "Dióxido de carbono (CO₂)", "Hidrogênio", "Ozônio"],
      correta: 1,
    },
    {
      pergunta: "2. O desmatamento contribui para o aquecimento global porque:",
      opcoes: [
        "Aumenta a chuva",
        "Reduz a emissão de CO₂",
        "Diminui a absorção de CO₂",
        "Aumenta o oxigênio na atmosfera",
      ],
      correta: 2,
    },
    {
      pergunta: "3. Qual dessas ações ajuda a reduzir o aquecimento global?",
      opcoes: [
        "Usar mais carros particulares",
        "Economizar energia elétrica",
        "Queimar resíduos plásticos",
        "Desmatar áreas florestais",
      ],
      correta: 1,
    },
    {
      pergunta: "4. Qual é uma consequência direta do aquecimento global?",
      opcoes: [
        "Aumento das geleiras",
        "Queda do nível do mar",
        "Eventos climáticos extremos",
        "Diminuição das temperaturas médias",
      ],
      correta: 2,
    },
    {
      pergunta: "5. O que é uma fonte de energia limpa?",
      opcoes: ["Carvão mineral", "Petróleo", "Energia solar", "Gás natural"],
      correta: 2,
    },
  ];

  // Avaliar Teste
  const avaliarTeste = () => {
    if (respostasTeste.includes(-1)) {
      alert("Responda todas as perguntas do teste antes de continuar!");
      return;
    }
    const score = Math.round(
      (respostasTeste.filter((r) => r === 1).length / respostasTeste.length) * 100
    );
    setPontuacaoTeste(score);
    if (score >= 80)
      setResultadoTeste("Excelente! Você tem hábitos muito sustentáveis 🌱");
    else if (score >= 50)
      setResultadoTeste("Bom! Mas ainda há espaço para melhorar 🌍");
    else
      setResultadoTeste("Atenção! Revise seus hábitos para ajudar o planeta ♻️");
  };

  // Avaliar Quiz
  const avaliarQuiz = () => {
    if (respostasQuiz.includes(-1)) {
      alert("Responda todas as perguntas do quiz antes de continuar!");
      return;
    }
    let acertos = 0;
    respostasQuiz.forEach((r, i) => {
      if (r === perguntasQuiz[i].correta) acertos++;
    });
    const score = Math.round((acertos / perguntasQuiz.length) * 100);
    setPontuacaoQuiz(score);
    if (score >= 80)
      setResultadoQuiz("Excelente! Você domina o tema 🌍");
    else if (score >= 50)
      setResultadoQuiz("Bom! Mas ainda há o que aprender 🌿");
    else
      setResultadoQuiz("Atenção! Vale revisar conceitos sobre o aquecimento global 🔥");
  };

  // Cálculo do resultado final (média dos dois)
  useEffect(() => {
    if (pontuacaoTeste > 0 && pontuacaoQuiz > 0) {
      const media = Math.round((pontuacaoTeste + pontuacaoQuiz) / 2);
      setMediaFinal(media);

      if (media >= 80)
        setResultadoFinal("🌎 Você é um verdadeiro guardião do planeta! Continue assim!");
      else if (media >= 50)
        setResultadoFinal("🌿 Você está no caminho certo! Pequenas mudanças fazem diferença!");
      else
        setResultadoFinal("🔥 Ainda há muito a melhorar. Que tal começar com pequenas ações diárias?");
    }
  }, [pontuacaoTeste, pontuacaoQuiz]);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-10">
        
        {/* TESTE */}
        <Card className="w-full max-w-2xl shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">♻️ Teste Seu Impacto Pessoal</CardTitle>
            <CardDescription className="text-lg mt-2">
              Descubra o quanto seus hábitos ajudam o planeta!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {perguntasTeste.map((p, i) => (
              <div key={i} className="space-y-3">
                <p className="font-medium">{p}</p>
                <div className="flex gap-3 flex-wrap">
                  {["Sim", "Às vezes", "Não"].map((opcao, j) => (
                    <button
                      key={j}
                      onClick={() => {
                        const novo = [...respostasTeste];
                        novo[i] = j === 0 ? 1 : j === 1 ? 0.5 : 0;
                        setRespostasTeste(novo);
                      }}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        respostasTeste[i] === (j === 0 ? 1 : j === 1 ? 0.5 : 0)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-accent"
                      }`}
                    >
                      {opcao}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex justify-center pt-4">
              <Button size="lg" onClick={avaliarTeste}>Ver Resultado</Button>
            </div>

            {resultadoTeste && (
              <div className="text-center pt-6 border-t border-border">
                <p className="font-semibold">{resultadoTeste}</p>
                <div className="w-full bg-muted rounded-full h-3 mt-3 overflow-hidden">
                  <div
                    className="bg-green-500 h-3 transition-all"
                    style={{ width: `${pontuacaoTeste}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1 text-muted-foreground">
                  Pontuação: {pontuacaoTeste}%
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* QUIZ */}
        <Card className="w-full max-w-2xl shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">🧠 Quiz — Aquecimento Global</CardTitle>
            <CardDescription className="text-lg mt-2">
              Teste seus conhecimentos sobre o meio ambiente!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {perguntasQuiz.map((q, i) => (
              <div key={i} className="space-y-3">
                <p className="font-medium">{q.pergunta}</p>
                <div className="flex flex-col gap-2">
                  {q.opcoes.map((op, j) => (
                    <button
                      key={j}
                      onClick={() => {
                        const novo = [...respostasQuiz];
                        novo[i] = j;
                        setRespostasQuiz(novo);
                      }}
                      className={`text-left px-4 py-2 rounded-lg border transition-colors ${
                        respostasQuiz[i] === j
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-accent"
                      }`}
                    >
                      {op}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex justify-center pt-4">
              <Button size="lg" onClick={avaliarQuiz}>Ver Pontuação</Button>
            </div>

            {resultadoQuiz && (
              <div className="text-center pt-6 border-t border-border">
                <p className="font-semibold">{resultadoQuiz}</p>
                <div className="w-full bg-muted rounded-full h-3 mt-3 overflow-hidden">
                  <div
                    className="bg-blue-500 h-3 transition-all"
                    style={{ width: `${pontuacaoQuiz}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1 text-muted-foreground">
                  Pontuação: {pontuacaoQuiz}%
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* RESULTADO FINAL */}
        {resultadoFinal && (
          <Card className="w-full max-w-2xl shadow-xl border-primary/40">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-primary">🌍 Resultado Final</CardTitle>
              <CardDescription className="text-lg mt-2">
                Combinação do seu impacto pessoal e conhecimento ambiental
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="font-semibold">{resultadoFinal}</p>
              <div className="w-full bg-muted rounded-full h-4 mt-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-4 transition-all"
                  style={{ width: `${mediaFinal}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1 text-muted-foreground">Média geral: {mediaFinal}%</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Impacto;
