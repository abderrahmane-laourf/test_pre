import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Briefcase, Heart, Trophy, TrendingUp, Users, Zap, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function BeneficesPage() {
  const professionalBenefits = [
    {
      icon: TrendingUp,
      title: "Être Plus Efficace",
      desc: "Moins d'erreurs et de malentendus = moins de temps perdu à tout refaire.",
      stat: "+25%",
      label: "d'efficacité"
    },
    {
      icon: Trophy,
      title: "Devenir un Bon Leader",
      desc: "Les gens suivent ceux qui les écoutent vraiment. On fait confiance à quelqu'un qui nous comprend.",
      stat: "#1",
      label: "qualité recherchée"
    },
    {
      icon: Zap,
      title: "Éviter les Conflits",
      desc: "Régler les problèmes rapidement avant qu'ils ne deviennent gros.",
      stat: "-40%",
      label: "de tensions"
    }
  ];

  const personalBenefits = [
    {
      icon: Heart,
      title: "Relations Profondes",
      desc: "Passer de contacts superficiels à des connexions authentiques et durables.",
    },
    {
      icon: Users,
      title: "Confiance Mutuelle",
      desc: "Créer un espace de sécurité psychologique où l'autre peut être vulnérable.",
    },
    {
      icon: Brain,
      title: "Intelligence Émotionnelle",
      desc: "Mieux comprendre ses propres réactions en comprenant celles des autres.",
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
          Pourquoi C'est Important ?
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          L'écoute active n'est pas juste de la gentillesse. C'est un vrai avantage dans la vie professionnelle et personnelle.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-24 space-y-24">

        {/* Professional ROI */}
        <section className="space-y-12">
          <div className="flex items-center gap-4 border-b border-border pb-4">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-display font-bold">Au Travail</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {professionalBenefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-8 rounded-2xl hover:shadow-lg transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                    <b.icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-foreground">{b.stat}</div>
                    <div className="text-xs font-bold uppercase text-muted-foreground">{b.label}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Personal ROI */}
        <section className="space-y-12">
          <div className="flex items-center gap-4 border-b border-border pb-4">
            <Heart className="w-8 h-8 text-rose-500" />
            <h2 className="text-3xl font-display font-bold">Dans la Vie Personnelle</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {personalBenefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="bg-gradient-to-br from-rose-50 to-white dark:from-rose-950/20 dark:to-background border border-rose-100 dark:border-rose-900/50 p-8 rounded-2xl hover:shadow-lg transition-all"
              >
                <div className="mb-6">
                  <b.icon className="w-8 h-8 text-rose-500 mb-4" />
                  <h3 className="text-xl font-bold text-foreground">{b.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>


        {/* Navigation Footer */}
        <div className="flex justify-between items-center pt-8 border-t border-border">
          <Link to="/processus">
            <Button variant="ghost" size="lg" className="group text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour : Le Cycle
            </Button>
          </Link>
          <Link to="/obstacles">
            <Button size="lg" className="group btn-primary px-8">
              Page 6 : Les Obstacles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
