import { motion } from "framer-motion";
import { Play, Users, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const PracticeSection = () => {
    const scenarios = [
        {
            title: "Le collègue frustré",
            situation: "Votre collègue exprime sa frustration face à un projet difficile",
            objectif: "Valider ses émotions sans proposer de solutions immédiates",
            phrases: [
                "Je comprends que cette situation soit frustrante pour toi",
                "Qu'est-ce qui te semble le plus difficile dans ce projet?",
                "Tu as l'impression que tes efforts ne sont pas reconnus"
            ],
            difficulty: "Débutant",
            color: "violet"
        },
        {
            title: "L'ami en crise",
            situation: "Un ami proche vous confie ses angoisses personnelles",
            objectif: "Écouter avec empathie sans juger ni minimiser",
            phrases: [
                "Je suis là pour toi, prends le temps qu'il te faut",
                "Comment te sens-tu vraiment en parlant de ça?",
                "Ce que tu vis doit être vraiment difficile"
            ],
            difficulty: "Intermédiaire",
            color: "cyan"
        },
        {
            title: "Le client mécontent",
            situation: "Un client exprime son mécontentement concernant un service",
            objectif: "Comprendre le problème avant de proposer des solutions",
            phrases: [
                "Je veux m'assurer de bien comprendre votre préoccupation",
                "Pouvez-vous me décrire ce qui s'est passé exactement?",
                "Qu'est-ce qui vous a le plus déçu dans cette expérience?"
            ],
            difficulty: "Avancé",
            color: "violet"
        }
    ];

    return (
        <section id="practice" className="section-padding bg-gradient-to-b from-background to-violet-light/30 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-custom/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-violet-custom/10 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative">
                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <AnimatedSection className="text-center mb-20">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="section-label inline-flex"
                        >
                            <Play className="w-4 h-4" />
                            <span>Pratique</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground font-display mb-6">
                            Mettons en Pratique
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Scénarios réels pour développer votre maîtrise de l'écoute active
                        </p>
                    </AnimatedSection>

                    {/* Scenarios grid */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {scenarios.map((scenario, index) => (
                            <AnimatedSection key={scenario.title} direction="up" delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -8 }}
                                    className="group bg-white/80 backdrop-blur-sm border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
                                >
                                    {/* Difficulty badge */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 ${
                                            scenario.difficulty === "Débutant" ? "bg-green-100 text-green-700" :
                                            scenario.difficulty === "Intermédiaire" ? "bg-yellow-100 text-yellow-700" :
                                            "bg-red-100 text-red-700"
                                        }`}
                                    >
                                        <Users className="w-3 h-3" />
                                        {scenario.difficulty}
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-foreground font-display mb-4">
                                        {scenario.title}
                                    </h3>

                                    {/* Situation */}
                                    <div className="mb-6">
                                        <p className="text-sm font-semibold text-muted-foreground mb-2">Situation :</p>
                                        <p className="text-foreground">{scenario.situation}</p>
                                    </div>

                                    {/* Objectif */}
                                    <div className="mb-6">
                                        <p className="text-sm font-semibold text-muted-foreground mb-2">Objectif :</p>
                                        <p className="text-foreground">{scenario.objectif}</p>
                                    </div>

                                    {/* Phrases examples */}
                                    <div className="mb-6">
                                        <p className="text-sm font-semibold text-muted-foreground mb-3">Phrases clés :</p>
                                        <div className="space-y-2">
                                            {scenario.phrases.map((phrase, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileHover={{ x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-start gap-2"
                                                >
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <p className="text-sm text-foreground italic">"{phrase}"</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Practice button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                                            scenario.color === "violet" 
                                                ? "bg-gradient-to-r from-violet-custom to-violet-600 hover:from-violet-500 hover:to-violet-500 text-white" 
                                                : "bg-gradient-to-r from-cyan-custom to-cyan-600 hover:from-cyan-500 hover:to-cyan-500 text-white"
                                        }`}
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Pratiquer ce scénario</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Tips section */}
                    <AnimatedSection className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-gradient-to-r from-violet-light/50 to-cyan-light/50 rounded-3xl p-10 border border-violet-custom/10"
                        >
                            <h3 className="text-2xl font-bold text-foreground font-display mb-6 text-center">
                                Conseils pour une pratique efficace
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    "Enregistrez-vous pour analyser votre écoute",
                                    "Pratiquez avec un partenaire de confiance",
                                    "Commencez par des situations simples",
                                    "Soyez patient avec vous-même",
                                    "Demandez des feedbacks constructifs",
                                    "Appliquez au quotidien, pas seulement en exercice"
                                ].map((tip, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-custom to-cyan-custom flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <p className="text-foreground">{tip}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatedSection>

                    {/* CTA */}
                    <AnimatedSection className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex flex-col items-center gap-4"
                        >
                            <p className="text-lg text-muted-foreground">
                                Prêt à transformer votre façon de communiquer?
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-4 bg-gradient-to-r from-violet-custom to-cyan-custom text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                Commencer la pratique guidée
                            </motion.button>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default PracticeSection;
