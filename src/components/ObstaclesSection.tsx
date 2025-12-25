import { motion } from "framer-motion";
import { AlertTriangle, Brain, Eye, MessageSquare } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ObstaclesSection = () => {
    const obstacles = [
        {
            icon: AlertTriangle,
            title: "Juger",
            description: "Évaluer ce que dit l'autre au lieu de l'écouter",
            impact: "Crée un climat de défense et bloque la communication",
            solution: "Suspendez tout jugement et concentrez-vous sur la compréhension",
            color: "violet"
        },
        {
            icon: Brain,
            title: "Répéter mentalement",
            description: "Préparer sa réponse pendant que l'autre parle",
            impact: "Manque 50% du message verbal et non-verbal",
            solution: "Restez présent dans l'instant, la réponse viendra après",
            color: "cyan"
        },
        {
            icon: Eye,
            title: "Rêvasser",
            description: "Laisser son esprit divaguer pendant la conversation",
            impact: "Perte de crédibilité et de connexion avec l'interlocuteur",
            solution: "Ancrez-vous dans le moment présent par un contact visuel attentif",
            color: "violet"
        },
        {
            icon: MessageSquare,
            title: "Conseiller prématurément",
            description: "Donner des solutions sans avoir tout compris",
            impact: "Fait sentir à l'autre qu'il est incapable de résoudre seul",
            solution: "Écoutez d'abord, comprenez ensuite, conseillez seulement si demandé",
            color: "cyan"
        }
    ];

    return (
        <section id="obstacles" className="section-padding bg-gradient-to-b from-cyan-light/20 to-background relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--foreground)) 35px, hsl(var(--foreground)) 70px)`,
                }} />
            </div>

            <div className="section-container relative">
                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <AnimatedSection className="text-center mb-20">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="section-label inline-flex bg-red-50 border-red-200 text-red-700"
                        >
                            <AlertTriangle className="w-4 h-4" />
                            <span>Obstacles</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground font-display mb-6">
                            Les Obstacles à Surmonter
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Reconnaître ces pièges est la première étape pour devenir un meilleur auditeur
                        </p>
                    </AnimatedSection>

                    {/* Obstacles timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-custom via-cyan-custom to-violet-custom opacity-20" />

                        <div className="space-y-12">
                            {obstacles.map((obstacle, index) => (
                                <AnimatedSection key={obstacle.title} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                                    <div className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                                        {/* Content card */}
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="flex-1 bg-white/80 backdrop-blur-sm border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                                        >
                                            {/* Header */}
                                            <div className="flex items-center gap-4 mb-6">
                                                <motion.div
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.5 }}
                                                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                                                        obstacle.color === "violet" ? "from-violet-custom to-violet-600" : "from-cyan-custom to-cyan-600"
                                                    } flex items-center justify-center text-white shadow-lg`}
                                                >
                                                    <obstacle.icon className="w-7 h-7" />
                                                </motion.div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-foreground font-display">
                                                        {obstacle.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-lg text-muted-foreground mb-4">
                                                {obstacle.description}
                                            </p>

                                            {/* Impact */}
                                            <div className="bg-red-50 border border-red-100 rounded-2xl p-4 mb-4">
                                                <p className="text-sm font-semibold text-red-700 mb-1">Impact négatif :</p>
                                                <p className="text-red-600">{obstacle.impact}</p>
                                            </div>

                                            {/* Solution */}
                                            <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
                                                <p className="text-sm font-semibold text-green-700 mb-1">Solution :</p>
                                                <p className="text-green-600">{obstacle.solution}</p>
                                            </div>
                                        </motion.div>

                                        {/* Timeline dot */}
                                        <motion.div
                                            whileHover={{ scale: 1.5 }}
                                            className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-custom to-cyan-custom shadow-lg z-10"
                                        />
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>

                    {/* Bottom quote */}
                    <AnimatedSection className="text-center mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-block"
                        >
                            <div className="bg-gradient-to-r from-violet-light/50 to-cyan-light/50 rounded-3xl p-8 border border-violet-custom/10">
                                <p className="text-2xl font-display font-semibold text-foreground mb-4">
                                    "La conscience est le premier pas vers le changement"
                                </p>
                                <p className="text-muted-foreground">
                                    En reconnaissant ces obstacles, vous êtes déjà sur la voie de la maîtrise
                                </p>
                            </div>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default ObstaclesSection;
