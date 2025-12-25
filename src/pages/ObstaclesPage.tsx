import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, EyeOff, MicOff, Smartphone, ShieldAlert, X } from "lucide-react";
import { motion } from "framer-motion";

export default function ObstaclesPage() {
  const obstacles = [
    {
      icon: EyeOff,
      title: "Nos Idées Préconçues",
      desc: "Nos préjugés et nos expériences passées qui nous font mal comprendre le message avant même de bien écouter.",
      example: "Exemple : 'Il est jeune, donc il ne sait pas de quoi il parle.'",
      color: "text-purple-600",
      bg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      icon: MicOff,
      title: "Ramener Tout à Soi",
      desc: "Quand l'autre parle de son problème et qu'on répond par notre propre histoire. On détourne l'attention vers nous.",
      example: "Exemple : 'Moi aussi, ça m'est arrivé et c'était pire...'",
      color: "text-rose-600",
      bg: "bg-rose-100 dark:bg-rose-900/30",
    },
    {
      icon: ShieldAlert,
      title: "Se Mettre sur la Défensive",
      desc: "Se sentir attaqué et chercher à se justifier au lieu d'essayer de comprendre le point de vue de l'autre.",
      example: "Exemple : 'C'est pas ma faute, c'est l'ordinateur qui a buggé...'",
      color: "text-orange-600",
      bg: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
      icon: Smartphone,
      title: "Les Distractions",
      desc: "Le bruit ambiant, les notifications du téléphone, ou l'inconfort physique qui cassent notre concentration.",
      example: "Exemple : Regarder son téléphone pendant que l'autre parle.",
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/30",
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
          Les Obstacles à Éviter
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Même avec de bonnes intentions, certains pièges nous empêchent d'écouter. Les connaître nous aide à les éviter.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-16">

        {/* Obstacles Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          {obstacles.map((obs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden group hover:shadow-lg transition-all"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${obs.bg} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${obs.bg} ${obs.color} flex items-center justify-center mb-6`}>
                  <obs.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{obs.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{obs.desc}</p>

                <div className="bg-secondary/50 rounded-lg p-4 text-sm flex gap-3 items-start border-l-4 border-destructive/30">
                  <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  <span className="italic text-foreground/80">{obs.example}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </section>


        {/* Navigation Footer */}
        <div className="flex justify-between items-center pt-8 border-t border-border">
          <Link to="/benefices">
            <Button variant="ghost" size="lg" className="group text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour : Bénéfices
            </Button>
          </Link>
          <Link to="/pratique">
            <Button size="lg" className="group btn-primary px-8">
              Page 7 : Pratique & Conclusion
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
