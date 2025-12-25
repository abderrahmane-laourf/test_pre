import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function IntroductionPage() {

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 relative overflow-hidden">
      {/* Technical grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 technical-grid-strong" />
        <div className="absolute inset-0 technical-grid-fine" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div className="section-container relative z-10 px-6 max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Page 1 / 8 • Étudiant A
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-foreground mb-8 tracking-tight"
          >
            La Communication <br /><span className="text-primary italic">Interpersonnelle</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            Comment bien communiquer avec les autres au quotidien.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-20">

        {/* Concept 1: What is it? */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Users className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground">C'est Quoi Exactement ?</h2>
          </div>
          <div className="prose prose-lg text-muted-foreground leading-relaxed">
            <p>
              La communication interpersonnelle, c'est quand deux personnes échangent des informations, des idées ou des émotions.
              Cela se passe par les mots qu'on dit, mais aussi par nos gestes et notre ton de voix.
            </p>
            <p className="border-l-4 border-primary pl-6 italic text-foreground my-6">
              « On ne peut pas ne pas communiquer. » — Paul Watzlawick
            </p>
            <p>
              Même quand on ne dit rien, on communique quelque chose. Le silence peut vouloir dire beaucoup de choses :
              accord, désaccord, réflexion... Dans le monde professionnel, comprendre cela est essentiel.
            </p>
          </div>
        </section>

        {/* Concept 2: The Loop */}
        <section className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-2xl font-bold mb-6 relative z-10">Le Problème Principal</h3>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-background p-6 rounded-xl shadow-sm text-center">
              <div className="font-bold text-primary mb-2">Ce Que Je Veux Dire</div>
              <p className="text-sm text-muted-foreground">Mon intention</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm text-center">
              <div className="font-bold text-primary mb-2">Ce Que Je Dis</div>
              <p className="text-sm text-muted-foreground">Mes mots réels</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm text-center">
              <div className="font-bold text-primary mb-2">Ce Qu'il Comprend</div>
              <p className="text-sm text-muted-foreground">Son interprétation</p>
            </div>
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Entre ce qu'on veut dire et ce que l'autre comprend, il y a souvent une grande différence.
            Nos préjugés, notre vocabulaire et notre ton créent ce fossé.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="bg-secondary/30 p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5" /> Points Clés à Retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-foreground">La communication est <strong>continue</strong> et <strong>inévitable</strong> - on communique toujours, même sans parler.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-foreground">Ce n'est pas que les mots : le langage corporel, le ton et le contexte représentent 93% du message.</span>
            </li>
          </ul>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Accueil
            </Button>
          </Link>
          <Link to="/definition">
            <Button className="btn-primary gap-2 px-8">
              Page 2 : Définition <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
