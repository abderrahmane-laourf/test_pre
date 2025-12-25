import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Users, Globe, Send, MessageCircle, Radio, UserCheck, Reply, Ear, Brain, Smartphone } from "lucide-react";
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

        {/* Communication Schema */}
        <section className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">Le Processus de Communication</h2>
            <p className="text-lg text-muted-foreground">Comment un message voyage de l'émetteur au récepteur</p>
          </div>

          {/* Communication Flow Diagram */}
          <div className="relative bg-gradient-to-br from-violet-50 to-cyan-50 border-2 border-violet-200 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-300/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl" />

            <div className="relative space-y-8">
              {/* Step 1: Émetteur */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">1️⃣ Émetteur</h3>
                  <p className="text-muted-foreground mb-2">La personne qui envoie le message.</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-100 rounded-full text-sm text-violet-700 font-medium">
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" />
                    Exemple : Toi quand tu parles ou écris
                  </div>
                </div>
              </motion.div>

              {/* Arrow Down */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-violet-500"
                >
                  <ArrowRight className="w-8 h-8 rotate-90" />
                </motion.div>
              </motion.div>

              {/* Step 2: Message */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">2️⃣ Message</h3>
                  <p className="text-muted-foreground mb-2">L'information ou idée que l'émetteur veut transmettre.</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-full text-sm text-blue-700 font-medium">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                    Exemple : "Bonjour, comment ça va ?"
                  </div>
                </div>
              </motion.div>

              {/* Arrow Down */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  className="text-blue-500"
                >
                  <ArrowRight className="w-8 h-8 rotate-90" />
                </motion.div>
              </motion.div>

              {/* Step 3: Canal */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Radio className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">3️⃣ Canal</h3>
                  <p className="text-muted-foreground mb-2">Le moyen utilisé pour transmettre le message, verbal ou non-verbal.</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1.5 bg-cyan-100 rounded-full text-sm text-cyan-700 font-medium">Parole</span>
                    <span className="px-3 py-1.5 bg-cyan-100 rounded-full text-sm text-cyan-700 font-medium">Écriture</span>
                    <span className="px-3 py-1.5 bg-cyan-100 rounded-full text-sm text-cyan-700 font-medium">Gestes</span>
                    <span className="px-3 py-1.5 bg-cyan-100 rounded-full text-sm text-cyan-700 font-medium">Ton de voix</span>
                  </div>
                </div>
              </motion.div>

              {/* Arrow Down */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                  className="text-cyan-500"
                >
                  <ArrowRight className="w-8 h-8 rotate-90" />
                </motion.div>
              </motion.div>

              {/* Step 4: Récepteur */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">4️⃣ Récepteur</h3>
                  <p className="text-muted-foreground mb-2">La personne qui reçoit et interprète le message.</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 rounded-full text-sm text-emerald-700 font-medium">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Exemple : Ton ami qui écoute ce que tu dis
                  </div>
                </div>
              </motion.div>

              {/* Arrow Down */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
                  className="text-emerald-500"
                >
                  <ArrowRight className="w-8 h-8 rotate-90" />
                </motion.div>
              </motion.div>

              {/* Step 5: Feedback */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-orange-50 to-rose-50 border-2 border-orange-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Reply className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">5️⃣ Feedback (réponse)</h3>
                  <p className="text-muted-foreground mb-2">La réaction ou réponse du récepteur qui montre qu'il a compris ou non le message.</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1.5 bg-orange-100 rounded-full text-sm text-orange-700 font-medium">😊 Sourire</span>
                    <span className="px-3 py-1.5 bg-orange-100 rounded-full text-sm text-orange-700 font-medium">💬 Parole</span>
                    <span className="px-3 py-1.5 bg-orange-100 rounded-full text-sm text-orange-700 font-medium">❓ Question</span>
                    <span className="px-3 py-1.5 bg-orange-100 rounded-full text-sm text-orange-700 font-medium">👍 Hochement de tête</span>
                  </div>
                </div>
              </motion.div>

              {/* Feedback Arrow Loop */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="flex justify-center pt-4"
              >
                <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-100 to-orange-100 border-2 border-dashed border-violet-300 rounded-full">
                  <Reply className="w-5 h-5 text-violet-600" />
                  <p className="text-sm font-bold text-violet-700">Le cycle continue...</p>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <ArrowRight className="w-5 h-5 text-violet-600" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
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
