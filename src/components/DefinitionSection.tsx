import { motion } from "framer-motion";
import { BookOpen, Ear, Eye, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const DefinitionSection = () => {
    const dimensions = [
        {
            icon: Ear,
            title: "Écouter",
            description: "Porter attention aux mots, au ton et au non-verbal",
            color: "violet"
        },
        {
            icon: BookOpen,
            title: "Comprendre",
            description: "Saisir le sens profond derrière le message",
            color: "cyan"
        },
        {
            icon: Eye,
            title: "Interpréter",
            description: "Décoder les émotions et intentions cachées",
            color: "violet"
        },
        {
            icon: Heart,
            title: "Valider",
            description: "Montrer que l'autre a été entendu et compris",
            color: "cyan"
        }
    ];

    return (
        <section id="definition" className="section-padding bg-gradient-to-b from-background to-cyan-light/20 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--violet-custom)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--cyan-custom)) 0%, transparent 50%)`,
                }} />
            </div>

            <div className="section-container relative">
                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <AnimatedSection className="text-center mb-20">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="section-label inline-flex"
                        >
                            <BookOpen className="w-4 h-4" />
                            <span>Définition</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground font-display mb-6">
                            Qu'est-ce que l'Écoute Active?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Bien plus qu'entendre des mots, c'est un processus complet de compréhension profonde
                        </p>
                    </AnimatedSection>

                    {/* Main definition card */}
                    <AnimatedSection className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-gradient-to-br from-violet-light/50 to-cyan-light/50 rounded-3xl p-10 md:p-14 border border-violet-custom/10 shadow-2xl"
                        >
                            <div className="text-center max-w-4xl mx-auto">
                                <p className="text-2xl md:text-3xl font-display text-foreground leading-relaxed mb-8">
                                    L'écoute active est une <span className="text-gradient font-semibold">méthode de communication</span> qui implique
                                    d'entendre complètement ce que l'autre personne dit,
                                    de <span className="text-gradient font-semibold">comprendre</span> le message,
                                    d'<span className="text-gradient font-semibold">évaluer</span> le contenu
                                    et de <span className="text-gradient font-semibold">répondre</span> de manière réfléchie.
                                </p>
                                <p className="text-lg text-muted-foreground italic">
                                    "Ce n'est pas seulement entendre avec les oreilles, mais comprendre avec le cœur"
                                </p>
                            </div>
                        </motion.div>
                    </AnimatedSection>

                    {/* Dimensions grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {dimensions.map((dimension, index) => (
                            <AnimatedSection key={dimension.title} direction="up" delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -8 }}
                                    className="group bg-white/80 backdrop-blur-sm border border-white/40 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
                                >
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className={`w-16 h-16 rounded-2xl mx-auto mb-6 bg-gradient-to-br ${
                                            dimension.color === "violet" 
                                                ? "from-violet-custom to-violet-600" 
                                                : "from-cyan-custom to-cyan-600"
                                        } flex items-center justify-center text-white shadow-lg`}
                                    >
                                        <dimension.icon className="w-8 h-8" />
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-foreground font-display mb-4">
                                        {dimension.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground">
                                        {dimension.description}
                                    </p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Bottom note */}
                    <AnimatedSection className="text-center mt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-block"
                        >
                            <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-violet-custom/20">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <p className="text-sm text-foreground">
                                    L'écoute active engage 100% de votre attention
                                </p>
                            </div>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default DefinitionSection;
