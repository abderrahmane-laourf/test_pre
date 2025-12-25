import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Brain, Heart, Activity, Ear, XCircle, CheckCircle, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function DefinitionPage() {
  const pillars = [
    {
      icon: Brain,
      title: "1. Comprendre avec sa Tête",
      subtitle: "Réfléchir",
      desc: "Ce n'est pas juste entendre des mots. C'est vraiment essayer de comprendre ce que l'autre dit et retenir les points importants.",
      points: ["Comprendre les mots", "Suivre la logique", "Se souvenir des idées clés"],
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      icon: Heart,
      title: "2. Ressentir avec son Cœur",
      subtitle: "Les Émotions",
      desc: "Comprendre ce que la personne ressent vraiment, même quand elle ne le dit pas directement. C'est écouter le ton de sa voix et ses hésitations.",
      points: ["Se mettre à sa place", "Capter les non-dits", "Ne pas juger trop vite"],
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      icon: Activity,
      title: "3. Montrer qu'on Écoute",
      subtitle: "Les Actions",
      desc: "L'écoute doit être visible. Si on reste immobile sans réagir, l'autre pense qu'on ne l'écoute pas. Il faut montrer qu'on suit.",
      points: ["Regarder la personne", "Hocher la tête", "Se pencher vers l'avant"],
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
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
          Comment Bien Écouter ?
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Écouter vraiment, c'est oublier un moment ses propres idées pour vraiment comprendre l'autre.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-24">

        {/* Pillars */}
        <section className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Les 3 Éléments Essentiels</h2>
          <div className="grid gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group bg-card border ${pillar.border} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}
              >
                <div className="md:flex gap-8 items-start">
                  <div className={`w-16 h-16 rounded-2xl ${pillar.bg} ${pillar.color} flex items-center justify-center shrink-0 mb-6 md:mb-0 group-hover:scale-110 transition-transform`}>
                    <pillar.icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{pillar.title}</h3>
                      <p className={`text-sm font-bold uppercase tracking-wider ${pillar.color} mt-1`}>{pillar.subtitle}</p>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                    <ul className="grid sm:grid-cols-3 gap-4 pt-2">
                      {pillar.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80 bg-secondary/50 px-3 py-2 rounded-lg">
                          <div className={`w-1.5 h-1.5 rounded-full ${pillar.color.replace('text-', 'bg-')}`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Entendre vs Écouter Section */}
        <section className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">🔹 Entendre vs Écouter</h2>
            <p className="text-lg text-muted-foreground">La différence entre perception passive et attention active</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Entendre (Passif) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-slate-100 border-2 border-gray-300 rounded-2xl p-8 space-y-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center shrink-0">
                  <Ear className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Entendre</h3>
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">(Passif)</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white rounded-xl p-4">
                  <span className="text-gray-500 text-lg shrink-0">❌</span>
                  <p className="text-gray-700">On perçoit juste le son.</p>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4">
                  <span className="text-gray-500 text-lg shrink-0">❌</span>
                  <p className="text-gray-700">On pense à ce qu'on va répondre.</p>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4">
                  <span className="text-gray-500 text-lg shrink-0">❌</span>
                  <p className="text-gray-700">On n'est pas vraiment concentré sur l'autre.</p>
                </div>
              </div>

              {/* Example */}
              <div className="bg-gradient-to-r from-gray-200/50 to-slate-200/50 border-l-4 border-gray-500 rounded-lg p-4 mt-6">
                <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  Exemple :
                </p>
                <p className="text-gray-600 italic">
                  Ton ami parle, mais tu penses déjà à ton téléphone.
                </p>
              </div>
            </motion.div>

            {/* Écouter (Actif) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-teal-100 border-2 border-emerald-400 rounded-2xl p-8 space-y-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl" />
              
              <div className="relative flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0 shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-emerald-800">Écouter</h3>
                  <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">(Actif)</span>
                </div>
              </div>

              <div className="relative space-y-4">
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <span className="text-emerald-500 text-lg shrink-0">✅</span>
                  <p className="text-gray-700 font-medium">On décide de prêter attention.</p>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <span className="text-emerald-500 text-lg shrink-0">✅</span>
                  <p className="text-gray-700 font-medium">On essaie de comprendre ce que l'autre dit.</p>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <span className="text-emerald-500 text-lg shrink-0">✅</span>
                  <p className="text-gray-700 font-medium">On suspend son jugement et on se concentre.</p>
                </div>
              </div>

              {/* Example */}
              <div className="relative bg-gradient-to-r from-emerald-100 to-teal-100 border-l-4 border-emerald-600 rounded-lg p-4 mt-6 shadow-sm">
                <p className="text-sm font-semibold text-emerald-800 mb-2">👀 Exemple :</p>
                <p className="text-emerald-700 font-medium italic">
                  Tu regardes ton ami, tu comprends ses mots et ses émotions.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Key Insight */}
         
        </section>

        {/* Types of Communication */}
        <section className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Les Types de Communication</h2>
          
          {/* Verbal Communication Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">1️⃣</div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Communication verbale (Parole / Écrit)</h3>
                <div className="inline-block px-3 py-1 bg-blue-500/10 rounded-full text-sm font-semibold text-blue-700 mb-4">
                  Définition
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  La communication verbale est celle qui utilise les mots, à l'oral ou à l'écrit, pour transmettre un message.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Exemples
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-blue-500 mt-0.5">•</span>
                    Conversations avec des amis ou collègues
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-blue-500 mt-0.5">•</span>
                    Emails, messages texte
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-blue-500 mt-0.5">•</span>
                    Présentations, réunions
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Caractéristiques
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    Facilite la compréhension claire du message
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    Permet d'exprimer des idées et des informations
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    Peut être formelle ou informelle
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Non-Verbal Communication Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">2️⃣</div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Communication non-verbale (Gestes / Langage corporel)</h3>
                <div className="inline-block px-3 py-1 bg-purple-500/10 rounded-full text-sm font-semibold text-purple-700 mb-4">
                  Définition
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  La communication non-verbale utilise le corps, le visage et la voix pour transmettre des émotions ou des intentions, sans utiliser de mots.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Exemples
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-purple-500 mt-0.5">😊</span>
                    Sourire
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-purple-500 mt-0.5">👀</span>
                    Contact visuel
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-purple-500 mt-0.5">•</span>
                    Posture (debout, assis, détendu ou rigide)
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-purple-500 mt-0.5">🙌</span>
                    Gestes des mains
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-purple-500 mt-0.5">•</span>
                    Ton de voix (intonation, volume, rythme)
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Caractéristiques
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    Permet de percevoir les émotions et l'état d'esprit
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    Complète ou renforce le message verbal
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    Parfois, elle communique plus que les mots
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>


        {/* Navigation Footer */}
        <div className="flex justify-between items-center pt-8 border-t border-border">
          <Link to="/introduction">
            <Button variant="ghost" size="lg" className="group text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour : Introduction
            </Button>
          </Link>
          <Link to="/techniques">
            <Button size="lg" className="group btn-primary px-8">
              Page 3 : Techniques
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
