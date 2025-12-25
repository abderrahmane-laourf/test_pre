import { motion } from "framer-motion";
import { Users, Handshake, Search, MessageSquare, Lightbulb, ArrowRight, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const TechniquesSection = () => {
    const techniques = [
        {
            icon: Users,
            title: "La Reformulation",
            description: "Reformuler ce que l'autre dit pour montrer qu'on écoute vraiment, pas juste pour faire semblant",
            example: "Donc si je te comprends bien, ce qui t'ennuie c'est que...",
            color: "violet",
            benefit: "Crée une vraie connexion",
            steps: ["Écouter sans interrompre", "Dire avec ses mots", "Vérifier si c'est bien ça"]
        },
        {
            icon: MessageSquare,
            title: "Les Bonnes Questions",
            description: "Poser des questions qui ouvrent la discussion au lieu de la fermer",
            example: "Qu'est-ce que tu as ressenti à ce moment-là?",
            color: "cyan",
            benefit: "Fait parler vraiment",
            steps: ["Éviter les pourquoi accusateurs", "Utiliser comment/quoi", "Être curieux sincèrement"]
        },
        {
            icon: Handshake,
            title: "Reconnaître les Émotions",
            description: "Montrer qu'on comprend ce que l'autre ressent, même si on n'est pas d'accord",
            example: "Je vois que ça t'a touché profondément...",
            color: "violet",
            benefit: "Apaise les tensions",
            steps: ["Voir l'émotion", "La nommer simplement", "La valider sans juger"]
        },
        {
            icon: Search,
            title: "Clarifier Doucement",
            description: "Demander de préciser quand on ne comprend pas, sans mettre la pression",
            example: "Tu peux m'aider à mieux comprendre ce que tu veux dire?",
            color: "cyan",
            benefit: "Évite les malentendus",
            steps: ["Repérer l'embrouille", "Demander avec respect", "Remercier pour l'explication"]
        }
    ];

    return (
        <section id="techniques" className="section-padding bg-slate-50/80 relative overflow-hidden">
            {/* Technical grid background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 technical-grid-strong" />
                <div className="absolute inset-0 technical-grid-fine" />
            </div>
            
            {/* Subtle animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute -top-20 -right-20 w-60 h-60 bg-violet-custom/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1.1, 1, 1.1] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-custom/5 rounded-full blur-3xl"
                />
            </div>

            <div className="section-container relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section header */}
                    <AnimatedSection className="text-center mb-20">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="section-label inline-flex mb-6"
                        >
                            <Users className="w-5 h-5 text-violet-custom" />
                            <span>Parler Vrai</span>
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-elegant text-gradient mb-6">
                            L'Art de la Conversation Réelle
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-body">
                            Ces techniques simples changent tout : plus de malentendus, plus de vraies connexions avec les gens
                        </p>
                    </AnimatedSection>

                    {/* Techniques grid */}
                    <div className="grid lg:grid-cols-2 gap-10">
                        {techniques.map((technique, index) => (
                            <AnimatedSection key={technique.title} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -8 }}
                                    className="group bg-white/90 backdrop-blur-md border-2 border-white/40 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-default relative overflow-hidden"
                                >
                                    {/* Glow effect on hover */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: technique.color === "violet" 
                                                ? "radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 70%)"
                                                : "radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.1) 0%, transparent 70%)"
                                        }}
                                    />
                                    
                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon header */}
                                        <div className="flex items-start gap-6 mb-8">
                                            <motion.div
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                                className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${
                                                    technique.color === "violet" ? "from-violet-custom to-violet-600" : "from-cyan-custom to-cyan-600"
                                                } flex items-center justify-center text-white shadow-2xl flex-shrink-0`}
                                            >
                                                <technique.icon className="w-10 h-10" />
                                            </motion.div>
                                            <div className="flex-1">
                                                <h3 className="text-3xl font-elegant text-foreground mb-3">
                                                    {technique.title}
                                                </h3>
                                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                                                    technique.color === "violet" 
                                                        ? "bg-violet-light/50 text-violet-custom border border-violet-custom/20"
                                                        : "bg-cyan-light/50 text-cyan-custom border border-cyan-custom/20"
                                                }`}>
                                                    <Lightbulb className="w-3 h-3" />
                                                    {technique.benefit}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-body">
                                            {technique.description}
                                        </p>

                                        {/* Steps */}
                                        <div className="mb-8">
                                            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                                                <ArrowRight className="w-4 h-4 text-violet-custom" />
                                                Comment faire en pratique
                                            </h4>
                                            <div className="space-y-3">
                                                {technique.steps.map((step, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1 }}
                                                        className="flex items-center gap-3"
                                                    >
                                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                                                            technique.color === "violet" ? "bg-violet-custom" : "bg-cyan-custom"
                                                        }`}>
                                                            {i + 1}
                                                        </div>
                                                        <span className="text-foreground">{step}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Example */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            className="opacity-80"
                                        >
                                            <div className={`rounded-2xl p-6 border ${
                                                technique.color === "violet" 
                                                    ? "bg-gradient-to-r from-violet-light/30 to-violet-light/10 border-violet-custom/20"
                                                    : "bg-gradient-to-r from-cyan-light/30 to-cyan-light/10 border-cyan-custom/20"
                                            }`}>
                                                <div className="flex items-start gap-3 mb-3">
                                                    <Quote className={`w-5 h-5 ${
                                                        technique.color === "violet" ? "text-violet-custom" : "text-cyan-custom"
                                                    }`} />
                                                    <p className="text-sm font-semibold text-foreground">Un exemple concret</p>
                                                </div>
                                                <p className="text-foreground italic text-lg font-elegant">"{technique.example}"</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                </div>
            </div>
        </section>
    );
};

export default TechniquesSection;
