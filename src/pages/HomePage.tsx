import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Ear, MessageCircle, Heart } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center section-container text-center space-y-8 animate-fade-in relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-soft" />

      <div className="space-y-4 max-w-4xl mx-auto">
        <div className="section-label animate-fade-up">Communication Efficace</div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-fade-up animation-delay-200">
          L'Écoute <span className="text-gradient">Active</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-400">
          L'art de non seulement entendre, mais de comprendre, ressentir et connecter véritablement avec votre interlocuteur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-12 animate-fade-up animation-delay-600">
        {[
          { icon: Ear, label: "Entendre", desc: "Perception physique" },
          { icon: Heart, label: "Ressentir", desc: "Connexion émotionnelle" },
          { icon: MessageCircle, label: "Comprendre", desc: "Traitement cognitif" }
        ].map((item, i) => (
          <div key={i} className="glass-card p-6 flex flex-col items-center gap-4 hover-lift">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg">{item.label}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="pt-8 animate-fade-up animation-delay-600">
        <Link to="/introduction">
          <Button size="lg" className="btn-primary group h-auto text-lg px-8 py-6">
            <span>Commencer la Présentation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
