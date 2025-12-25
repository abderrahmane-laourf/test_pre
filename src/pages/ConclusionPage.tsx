import { Sparkles, Quote, Heart, Users, Target, Lightbulb, GraduationCap, UserCircle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FireworksBackground } from "@/components/ui/fireworks-background";
import { useState } from "react";

export default function ConclusionPage() {
  const [showFireworks, setShowFireworks] = useState(false);

  const handleTermineClick = () => {
    // Trigger fireworks
    setShowFireworks(true);
    
    // Smooth scroll to top with modern animation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 relative overflow-hidden">
      {/* Fireworks Animation Overlay */}
      <AnimatePresence>
        {showFireworks && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 pointer-events-none"
          >
            <FireworksBackground
              className="absolute inset-0"
              population={3}
              color={['#7C3AED', '#06B6D4', '#F97316', '#A855F7', '#EC4899']}
              fireworkSpeed={{ min: 8, max: 16 }}
              fireworkSize={{ min: 4, max: 10 }}
              particleSpeed={{ min: 4, max: 14 }}
              particleSize={{ min: 2, max: 10 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Technical grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 technical-grid-strong" />
        <div className="absolute inset-0 technical-grid-fine" />
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col justify-center section-container section-padding py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto w-full space-y-20 text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 text-primary font-bold">
              <Sparkles className="w-5 h-5 fill-primary" />
              <span>Félicitations</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground">
              Le Voyage Commence
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              L'écoute active n'est pas une compétence qu'on acquiert une fois pour toutes. 
              C'est un muscle qui se travaille à chaque conversation, une invitation à la présence 
              et à la connexion humaine.
            </p>
          </motion.div>

          {/* Key Takeaways */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card border border-border p-8 rounded-2xl shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              <Heart className="w-10 h-10 text-rose-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Écouter avec le Cœur</h3>
              <p className="text-muted-foreground">
                Au-delà des mots, captez les émotions, les besoins non exprimés. 
                Chaque conversation est une opportunité de créer un espace de sécurité et de confiance.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card border border-border p-8 rounded-2xl shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors" />
              <Users className="w-10 h-10 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">La Puissance du Silence</h3>
              <p className="text-muted-foreground">
                Les moments de pause sont souvent les plus révélateurs. 
                Ils permettent à l'autre de s'exprimer pleinement et à vous de vraiment comprendre.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card border border-border p-8 rounded-2xl shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
              <Target className="w-10 h-10 text-emerald-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Pratique Quotidienne</h3>
              <p className="text-muted-foreground">
                Commencez petit : une conversation à la fois. 
                Chaque effort conscient renforce votre capacité à être présent et à connecter profondément.
              </p>
            </motion.div>
          </motion.div>

          {/* Success Keys Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 p-12 rounded-3xl shadow-xl relative overflow-hidden"
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary opacity-30" />
            <Lightbulb className="absolute bottom-6 right-6 w-12 h-12 text-secondary opacity-30" />

            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold font-display text-gradient">Les Clés du Succès</h3>
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                L'écoute authentique transforme non seulement vos relations, 
                mais aussi votre perception du monde. En écoutant vraiment, 
                vous découvrez des perspectives que vous n'auriez jamais imaginées.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                Chaque personne que vous rencontrez détient une partie de la vérité. 
                En ouvrant votre cœur et votre esprit, vous ne devenez pas seulement un meilleur communicant - 
                vous devenez une meilleure version de vous-même.
              </p>
              <div className="pt-6">
                <p className="text-sm font-medium text-muted-foreground italic">
                  "Le plus grand don que vous puissiez faire à quelqu'un est votre attention." - Thich Nhat Hanh
                </p>
              </div>
            </div>
          </motion.div>

          {/* Academic Credits Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-32 pt-20 border-t border-border/20"
          >
            <div className="max-w-6xl mx-auto">
              {/* Students - Left and Right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                {/* Left Student */}
                <div className="flex flex-col items-center space-y-5">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-custom to-violet-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-violet-custom/20 to-violet-custom/10 flex items-center justify-center border-2 border-violet-custom/20 shadow-lg">
                      <UserCircle className="w-10 h-10 text-violet-custom" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="text-center space-y-3">
                    <p className="text-xs font-bold text-muted-foreground/50 uppercase tracking-[0.2em] letter-spacing-wide">
                      Préparé par
                    </p>
                    <p className="text-3xl font-bold text-foreground tracking-tight">
                      Anouar Ben Tahar
                    </p>
                  </div>
                </div>

                {/* Right Student */}
                <div className="flex flex-col items-center space-y-5">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-custom to-cyan-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-cyan-custom/20 to-cyan-custom/10 flex items-center justify-center border-2 border-cyan-custom/20 shadow-lg">
                      <UserCircle className="w-10 h-10 text-cyan-custom" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="text-center space-y-3">
                    <p className="text-xs font-bold text-muted-foreground/50 uppercase tracking-[0.2em]">
                      Préparé par
                    </p>
                    <p className="text-3xl font-bold text-foreground tracking-tight">
                      Abderahmam Loourf
                    </p>
                  </div>
                </div>
              </div>

              {/* Elegant Divider */}
              <div className="flex items-center justify-center mb-20">
                <div className="flex items-center gap-3">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent to-border/50" />
                  <div className="w-2 h-2 rounded-full bg-primary/30" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent to-border/50" />
                </div>
              </div>

              {/* Teacher - Centered Below */}
              <div className="flex flex-col items-center space-y-5">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center border-2 border-primary/20 shadow-xl">
                    <GraduationCap className="w-12 h-12 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="text-center space-y-3">
                  <p className="text-xs font-bold text-muted-foreground/50 uppercase tracking-[0.2em]">
                    Encadré par
                  </p>
                  <p className="text-3xl font-bold text-foreground tracking-tight">
                    Mme Bouradi
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Terminé Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center mt-20 pb-10"
          >
            <button
              onClick={handleTermineClick}
              className="jelly-btn relative w-40 h-14 rounded-full border-none cursor-pointer flex items-center justify-center text-white font-semibold text-base"
              style={{
                backgroundColor: 'rgb(151, 95, 255)',
                boxShadow: '0px 10px 10px rgb(210, 187, 253) inset, 0px 5px 10px rgba(5, 5, 5, 0.212), 0px -10px 10px rgb(124, 54, 255) inset'
              }}
            >
              {/* Top highlight */}
              <span 
                className="absolute top-2 left-1/2 -translate-x-1/2 w-[70%] h-[2px] rounded-full"
                style={{
                  backgroundColor: 'rgba(250, 250, 250, 0.678)',
                  filter: 'blur(1px)'
                }}
              />
              
              {/* Bottom shadow */}
              <span 
                className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-[2px] rounded-full"
                style={{
                  backgroundColor: 'rgba(250, 250, 250, 0.137)',
                  filter: 'blur(1px)'
                }}
              />
              
              <CheckCircle className="w-5 h-5 mr-2" />
              Terminé
            </button>
          </motion.div>

          {/* Jelly Animation Styles */}
          <style>{`
            @keyframes jello-horizontal {
              0% {
                transform: scale3d(1, 1, 1);
              }
              30% {
                transform: scale3d(1.25, 0.75, 1);
              }
              40% {
                transform: scale3d(0.75, 1.25, 1);
              }
              50% {
                transform: scale3d(1.15, 0.85, 1);
              }
              65% {
                transform: scale3d(0.95, 1.05, 1);
              }
              75% {
                transform: scale3d(1.05, 0.95, 1);
              }
              100% {
                transform: scale3d(1, 1, 1);
              }
            }
            
            .jelly-btn:hover {
              animation: jello-horizontal 0.9s both;
            }
          `}</style>

        </div>
      </div>
    </div>
  );
}
