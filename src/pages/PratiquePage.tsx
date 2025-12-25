import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Play, Star, Zap, Shield, Sparkles, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PratiquePage() {
  const scenarios = [
    {
      level: "Niveau 1 : Montrer qu'on Comprend",
      icon: Star,
      situation: "Un collègue content : 'J'ai enfin fini le design du site ! C'était difficile mais je suis vraiment content du résultat.'",
      challenge: "Montrer qu'on comprend son émotion sans parler de soi.",
      bad: "Ah super ! Moi aussi j'ai fini mon rapport.",
      good: "Je vois que tu es soulagé et fier d'avoir terminé ce gros travail ! Tu te sens bien ?",
      color: "text-emerald-600",
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      border: "border-emerald-200"
    },
    {
      level: "Niveau 2 : Demander des Précisions",
      icon: Zap,
      situation: "Un manager vague : 'Ce rapport n'est pas assez bien. Il manque quelque chose.'",
      challenge: "Demander des précisions sans être agressif.",
      bad: "Qu'est-ce que vous voulez dire par 'quelque chose' ?",
      good: "Quand vous dites 'ça manque', est-ce que vous parlez de la présentation visuelle ou des arguments avec des chiffres ?",
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/30",
      border: "border-blue-200"
    },
    {
      level: "Niveau 3 : Calmer une Situation",
      icon: Shield,
      situation: "Un client en colère : 'C'est inacceptable ! Personne ne répond à mes emails depuis mardi !'",
      challenge: "Reconnaître l'émotion AVANT de proposer une solution.",
      bad: "Désolé, mais on a eu un problème informatique.",
      good: "Je comprends votre frustration face à ce silence, c'est tout à fait normal. Je suis là maintenant pour régler ça avec vous.",
      color: "text-rose-600",
      bg: "bg-rose-100 dark:bg-rose-900/30",
      border: "border-rose-200"
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
          La Pratique
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Savoir ne suffit pas, il faut pratiquer. Voici des situations pour tester vos réflexes.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-16">

        {/* Challenge Cards */}
        <section className="space-y-8">
          {scenarios.map((scenario, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-card border ${scenario.border} rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${scenario.bg} ${scenario.color} flex items-center justify-center`}>
                    <scenario.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{scenario.level}</h3>
                    <p className="text-sm text-muted-foreground">{scenario.challenge}</p>
                  </div>
                </div>

                <div className="bg-secondary/30 p-6 rounded-xl mb-6 font-medium text-foreground relative italic">
                  "{scenario.situation}"
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border border-border rounded-lg px-4 bg-background">
                    <AccordionTrigger className="hover:no-underline py-4 text-primary font-bold">
                      <span className="flex items-center gap-2">
                        <Play className="w-4 h-4" /> Voir la Réponse Idéale
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-2 space-y-4">
                      <div className="space-y-2">
                        <div className="text-xs font-bold uppercase text-destructive tracking-wider">Réponse Réactive (Erreur)</div>
                        <p className="text-muted-foreground border-l-2 border-destructive pl-4 italic">"{scenario.bad}"</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs font-bold uppercase text-emerald-600 tracking-wider">Réponse Active (Succès)</div>
                        <p className="text-foreground font-medium border-l-2 border-emerald-500 pl-4">"{scenario.good}"</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Quiz Access Button - End of Student B Section */}
        <section className="bg-gradient-to-r from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-indigo-900/10 rounded-3xl p-10 md:p-16 text-center space-y-6 border border-indigo-200 dark:border-indigo-800">
          <ClipboardCheck className="w-16 h-16 mx-auto text-indigo-600" />
          <h2 className="text-3xl font-display font-bold">Fin de la Partie B</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Vous avez terminé les 3 pages de l'Étudiant B. Testez vos connaissances avec 8 questions.
          </p>
          <Link to="/quiz-partie-2">
            <Button size="lg" className="px-10 py-6 text-lg mt-4 bg-indigo-600 hover:bg-indigo-700">
              <ClipboardCheck className="w-5 h-5 mr-2" />
              Questions – Partie 2
            </Button>
          </Link>
        </section>

        {/* Conclusion / Manifesto */}
        <section className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-16 text-center space-y-8 relative overflow-hidden">
          <Sparkles className="absolute top-10 right-10 w-20 h-20 text-white opacity-10" />

          <h2 className="text-3xl md:text-5xl font-display font-bold">Le Voyage Commence</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Merci d'avoir suivi ce module. Rappelez-vous :
            <br className="my-4" />
            <span className="font-bold text-white text-2xl block mt-4">"Écouter, c'est vraiment se soucier de l'autre."</span>
          </p>

          <Link to="/">
            <Button size="lg" variant="secondary" className="mt-8 px-10 h-14 text-lg rounded-full">
              <Home className="w-5 h-5 mr-3" /> Retour à l'Accueil
            </Button>
          </Link>
        </section>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center pt-8 border-t border-border">
          <Link to="/obstacles">
            <Button variant="ghost" size="lg" className="group text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour : Obstacles
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
