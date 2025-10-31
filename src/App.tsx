import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Graficos from "./pages/Graficos";
import Intervencoes from "./pages/Intervencoes";
import Questionario from "./pages/Questionario";
import Fontes from "./pages/Fontes";
import NotFound from "./pages/NotFound";
import Impacto from "./pages/Impacto";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Header />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/graficos" element={<Graficos />} />
            <Route path="/intervencoes" element={<Intervencoes />} />
            <Route path="/fontes" element={<Fontes />} />
            <Route path="/questionario" element={<Questionario />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/impacto" element={<Impacto />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
