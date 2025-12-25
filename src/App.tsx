import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index";
import HomePage from "./pages/HomePage";
import IntroductionPage from "./pages/IntroductionPage";
import DefinitionPage from "./pages/DefinitionPage";
import TechniquesPage from "./pages/TechniquesPage";
import ProcessusPage from "./pages/ProcessusPage";
import BeneficesPage from "./pages/BeneficesPage";
import ObstaclesPage from "./pages/ObstaclesPage";
import PratiquePage from "./pages/PratiquePage";
import ConclusionPage from "./pages/ConclusionPage";
import QuizPartie1Page from "./pages/QuizPartie1Page";
import QuizPartie2Page from "./pages/QuizPartie2Page";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/intro" element={<HomePage />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path="/definition" element={<DefinitionPage />} />
          <Route path="/techniques" element={<TechniquesPage />} />
          <Route path="/processus" element={<ProcessusPage />} />
          <Route path="/benefices" element={<BeneficesPage />} />
          <Route path="/obstacles" element={<ObstaclesPage />} />
          <Route path="/pratique" element={<PratiquePage />} />
          <Route path="/conclusion" element={<ConclusionPage />} />
          <Route path="/quiz-partie-1" element={<QuizPartie1Page />} />
          <Route path="/quiz-partie-2" element={<QuizPartie2Page />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Navigation */}
            <Navigation />
            
            {/* Main content */}
            <main className="relative z-10">
              <AnimatedRoutes />
            </main>
            
            {/* Toast notifications */}
            <Toaster />
            <Sonner />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
