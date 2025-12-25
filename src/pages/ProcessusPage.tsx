import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Ear, Brain, Save, HelpCircle, CheckCircle, AlertOctagon, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function ProcessusPage() {
  const steps = [
    {
      icon: Ear,
      title: "1. Recevoir le Message",
      desc: "Écouter les mots et observer les gestes de la personne. C'est la première étape physique.",
      trap: "Attention : Ne pas se laisser distraire par son téléphone ou le bruit autour.",
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/30",
      border: "border-blue-200"
    },
    {
      icon: Brain,
      title: "2. Comprendre",
      desc: "Réfléchir et essayer de saisir ce que la personne veut vraiment dire. Comprendre le sens derrière les mots.",
      trap: "Attention : Ne pas interpréter avec nos propres préjugés.",
      color: "text-indigo-600",
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
      border: "border-indigo-200"
    },
    {
      icon: Save,
      title: "3. Retenir l'Important",
      desc: "Garder en mémoire les points clés pour pouvoir y revenir plus tard.",
      trap: "Attention : Se concentrer sur tout, pas juste sur la dernière phrase.",
      color: "text-purple-600",
      bg: "bg-purple-100 dark:bg-purple-900/30",
      border: "border-purple-200"
    },
    {
      icon: HelpCircle,
      title: "4. Juger (Après Avoir Compris)",
      desc: "Évaluer si ce qui est dit a du sens, mais seulement APRÈS avoir bien compris tout le message.",
      trap: "Attention : Ne pas juger AVANT d'avoir fini d'écouter (sinon on coupe la parole).",
      color: "text-rose-600",
      bg: "bg-rose-100 dark:bg-rose-900/30",
      border: "border-rose-200"
    },
    {
      icon: CheckCircle,
      title: "5. Répondre",
      desc: "Donner son avis ou sa réponse, par les mots et les gestes. C'est la fin de la boucle.",
      trap: "Attention : Ne pas donner une réponse automatique sans réfléchir.",
      color: "text-emerald-600",
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      border: "border-emerald-200"
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
          Les 5 Étapes de l'Écoute
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          L'écoute est un processus actif. Si une seule étape manque, la communication ne fonctionne pas bien.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-16">

        {/* The Cycle Steps */}
        <section className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className={`absolute top-0 left-0 w-1 h-full ${step.color.replace('text-', 'bg-')}`} />
                  <div className="flex items-center gap-4 mb-3">
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                    <h3 className="text-xl font-bold font-display">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{step.desc}</p>
                  <div className="bg-secondary/50 rounded-lg p-3 text-sm flex items-start gap-2">
                    <AlertOctagon className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground font-medium">{step.trap}</span>
                  </div>
                </div>

                {/* Number Circle (Center) */}
                <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 hidden md:flex w-12 h-12 rounded-full bg-background border-4 border-secondary items-center justify-center font-bold text-muted-foreground text-sm shadow-sm">
                  {i + 1}
                </div>

                {/* Spacer Side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quiz Access Button - End of Student A Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-10 md:p-16 text-center space-y-6 border border-primary/20">
          <ClipboardCheck className="w-16 h-16 mx-auto text-primary" />
          <h2 className="text-3xl font-display font-bold">Fin de la Partie A</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Vous avez terminé les 4 pages de l'Étudiant A. Testez vos connaissances avec 8 questions.
          </p>
          <Link to="/quiz-partie-1">
            <Button size="lg" className="px-10 py-6 text-lg mt-4">
              <ClipboardCheck className="w-5 h-5 mr-2" />
              Questions – Partie 1
            </Button>
          </Link>
        </section>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center pt-8 border-t border-border">
          <Link to="/techniques">
            <Button variant="ghost" size="lg" className="group text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour : Techniques
            </Button>
          </Link>
          <Link to="/benefices">
            <Button size="lg" className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8">
              Page 5 : Bénéfices (Étudiant B)
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
