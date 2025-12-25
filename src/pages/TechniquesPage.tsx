import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, RefreshCw, ZoomIn, Heart, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TechniquesPage() {
  const techniques = [
    {
      icon: RefreshCw,
      id: "reformulation",
      title: "1. Répéter avec Ses Propres Mots",
      subtitle: "Reformuler",
      desc: "Redire ce que l'autre a dit, mais avec vos propres mots. Ça montre qu'on a bien écouté et ça permet à l'autre de corriger si on a mal compris.",
      bad: "T'es énervé parce que le projet est en retard.",
      good: "Si j'ai bien compris, tu es frustré parce qu'on n'aura pas le temps de bien faire le travail ?",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: ZoomIn,
      id: "clarification",
      title: "2. Poser des Questions Ouvertes",
      subtitle: "Clarifier",
      desc: "Demander plus de détails quand quelque chose n'est pas clair, sans accuser la personne. Poser des questions qui commencent par 'Comment', 'Qu'est-ce que', etc.",
      bad: "Pourquoi t'as pas fini ?",
      good: "Qu'est-ce qui t'empêche d'avancer sur cette partie du travail ?",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      icon: Heart,
      id: "reflet",
      title: "3. Reconnaître les Émotions",
      subtitle: "Montrer qu'on Comprend",
      desc: "Dire à la personne ce qu'on pense qu'elle ressent. C'est très efficace pour calmer une situation tendue.",
      bad: "Calme-toi, c'est pas grave.",
      good: "Je vois que cette situation te stresse beaucoup et que tu te sens peut-être ignoré.",
      color: "text-rose-500",
      bg: "bg-rose-500/10"
    },
    {
      icon: MessageSquare,
      id: "silence",
      title: "4. Savoir Se Taire",
      subtitle: "Le Silence",
      desc: "Attendre 3-4 secondes après que l'autre ait fini de parler. Souvent, les vraies pensées sortent pendant ces moments de silence.",
      bad: "Couper la parole dès qu'on peut.",
      good: "Continuer à regarder la personne et attendre en silence. Laisser l'autre continuer.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 relative overflow-hidden">
      {/* Technical grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 technical-grid-strong" />
        <div className="absolute inset-0 technical-grid-fine" />
      </div>

      {/* Header */}
      <section className="pt-20 pb-12 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
          4 Techniques Simples
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Des méthodes concrètes pour mieux écouter au quotidien.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-16">

        {/* Techniques Toolkit */}
        <section>
          <div className="grid gap-6">
            {techniques.map((tech, i) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 md:p-8 flex gap-6 items-start">
                  <div className={`w-12 h-12 rounded-xl ${tech.bg} ${tech.color} flex items-center justify-center shrink-0 mt-1`}>
                    <tech.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{tech.title}</h3>
                      <p className={`text-sm font-bold uppercase tracking-wider ${tech.color}`}>{tech.subtitle}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {tech.desc}
                    </p>

                    {/* Interactive Example */}
                    <Accordion type="single" collapsible className="w-full bg-secondary/30 rounded-lg px-4 border border-border/50">
                      <AccordionItem value="item-1" className="border-none">
                        <AccordionTrigger className="hover:no-underline py-3 text-sm font-medium text-foreground/80">
                          Voir un exemple concret
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 space-y-3">
                          <div className="flex gap-3 text-sm">
                            <span className="font-bold text-destructive min-w-[80px]">À éviter :</span>
                            <span className="text-muted-foreground italic">"{tech.bad}"</span>
                          </div>
                          <div className="flex gap-3 text-sm">
                            <span className="font-bold text-emerald-600 min-w-[80px]">À faire :</span>
                            <span className="text-foreground font-medium">"{tech.good}"</span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* Navigation Footer */}
        <div className="flex justify-between items-center pt-8 border-t border-border">
          <Link to="/definition">
            <Button variant="ghost" size="lg" className="group text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour : Définition
            </Button>
          </Link>
          <Link to="/processus">
            <Button size="lg" className="group text-white bg-indigo-600 hover:bg-indigo-700 px-8">
              Le Processus
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
