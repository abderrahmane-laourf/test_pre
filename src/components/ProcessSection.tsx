import { motion } from "framer-motion";
import { GitBranch, Ear, Brain, MessageCircle, CheckCircle, RefreshCw } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
    {
        icon: Ear,
        title: "Recevoir",
        description: "Entendre les mots et observer le non-verbal",
        detail: "Attention complète sans interruption",
    },
    {
        icon: Brain,
        title: "Comprendre",
        description: "Interpréter le sens et les émotions",
        detail: "Analyse cognitive et émotionnelle",
    },
    {
        icon: CheckCircle,
        title: "Retenir",
        description: "Mémoriser les points essentiels",
        detail: "Stockage des informations clés",
    },
    {
        icon: MessageCircle,
        title: "Répondre",
        description: "Reformuler et questionner",
        detail: "Feedback constructif et pertinent",
    },
    {
        icon: RefreshCw,
        title: "Valider",
        description: "Confirmer la compréhension mutuelle",
        detail: "Vérification avec l'interlocuteur",
    },
];

const ProcessSection = () => {
    const [stepsRef, stepsVisible] = useScrollAnimation<HTMLDivElement>();

    return (
        <section className="section-padding bg-gradient-to-b from-background via-cyan-light/30 to-background relative">
            <div className="section-container">
                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <AnimatedSection className="text-center mb-16">
                        <motion.div whileHover={{ scale: 1.05 }} className="section-label inline-flex">
                            <GitBranch className="w-4 h-4" />
                            <span>Processus</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground font-display mb-6">
                            Le cycle de l'écoute active
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            5 étapes pour une écoute efficace et engagée
                        </p>
                    </AnimatedSection>

                    {/* Process steps - Desktop */}
                    <div ref={stepsRef} className="hidden lg:block">
                        <div className="relative">
                            {/* Connection line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={stepsVisible ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="absolute top-28 left-[10%] right-[10%] h-1 rounded-full origin-left"
                                style={{ background: "var(--gradient-hero)" }}
                            />

                            <div className="flex justify-between relative">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={step.title}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={stepsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                        transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                                        className="flex flex-col items-center text-center max-w-[180px]"
                                    >
                                        {/* Step card */}
                                        <motion.div
                                            whileHover={{ y: -8, scale: 1.05 }}
                                            className="bg-white/90 backdrop-blur-md border-2 border-violet-custom/20 rounded-3xl p-8 mb-5 cursor-default group shadow-xl hover:shadow-2xl transition-all duration-300"
                                        >
                                            <motion.div
                                                whileHover={{ rotate: 10 }}
                                                className="w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-lg"
                                                style={{ background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)" }}
                                            >
                                                <step.icon className="w-10 h-10 text-white" />
                                            </motion.div>
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-custom to-cyan-custom text-white font-bold flex items-center justify-center mx-auto mb-3 shadow-md">
                                                {index + 1}
                                            </div>
                                        </motion.div>

                                        {/* Content */}
                                        <div className="text-center px-4">
                                            <h4 className="font-bold text-foreground mb-3 font-display text-xl">
                                                {step.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                                                {step.description}
                                            </p>
                                            <p className="text-xs text-muted-foreground/70 italic">
                                                {step.detail}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Process steps - Mobile */}
                    <div className="lg:hidden space-y-5">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: -30 }}
                                animate={stepsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white/90 backdrop-blur-md border-2 border-violet-custom/20 rounded-3xl p-6 flex items-start gap-5 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md" style={{ background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)" }}>
                                            <step.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-custom to-cyan-custom text-white font-bold flex items-center justify-center text-sm">
                                                {index + 1}
                                            </div>
                                            <h4 className="font-bold text-foreground font-display text-lg">{step.title}</h4>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                        <p className="text-xs text-muted-foreground/70 italic mt-2">{step.detail}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Cycle indicator */}
                    <AnimatedSection delay={0.5} className="flex justify-center mt-14">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-4 px-8 py-4 glass-card"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <RefreshCw className="w-6 h-6 text-violet-custom" />
                            </motion.div>
                            <span className="text-muted-foreground">
                                Ce processus est <span className="font-bold text-foreground">cyclique et continu</span>
                            </span>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
