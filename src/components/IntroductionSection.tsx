import { motion } from "framer-motion";
import { Quote, Target, Rocket, BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const IntroductionSection = () => {
    const [cardsRef, cardsVisible] = useScrollAnimation<HTMLDivElement>();

    return (
        <section id="introduction" className="section-padding bg-background relative overflow-hidden">
            {/* Background accent */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-violet-custom/5 blur-[150px]"
            />

            <div className="section-container relative">
                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <AnimatedSection className="text-center mb-16">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="section-label inline-flex"
                        >
                            <BookOpen className="w-4 h-4" />
                            <span>Introduction</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground font-display">
                            Pourquoi l'écoute active ?
                        </h2>
                    </AnimatedSection>

                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                        {/* Quote card */}
                        <AnimatedSection direction="left" delay={0.2}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="glass-card p-10 md:p-12"
                            >
                                <Quote className="w-14 h-14 text-violet-custom/30 mb-8" />
                                <blockquote className="text-2xl md:text-3xl font-display font-semibold text-foreground leading-snug mb-8">
                                    "La plupart des gens n'écoutent pas pour comprendre, ils écoutent pour répondre."
                                </blockquote>
                                <footer className="flex items-center gap-5">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-custom to-cyan-custom flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg"
                                    >
                                        SC
                                    </motion.div>
                                    <div>
                                        <div className="font-semibold text-foreground text-lg">Stephen Covey</div>
                                        <div className="text-sm text-muted-foreground">Auteur de "Les 7 habitudes"</div>
                                    </div>
                                </footer>
                            </motion.div>
                        </AnimatedSection>

                        {/* Content */}
                        <AnimatedSection direction="right" delay={0.3}>
                            <div className="space-y-8">
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    L'écoute active est bien plus qu'entendre des mots. C'est une
                                    <span className="text-foreground font-semibold"> compétence stratégique </span>
                                    qui place votre interlocuteur au centre de l'échange.
                                </p>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Dans un monde saturé de distractions, savoir écouter devient un
                                    <span className="text-foreground font-semibold"> avantage compétitif rare</span>.
                                    Cette présentation vous donnera les clés pour maîtriser cet art.
                                </p>

                                {/* Key points */}
                                <div ref={cardsRef} className="grid sm:grid-cols-2 gap-5 pt-4">
                                    {[
                                        { icon: Target, title: "Objectif clair", desc: "Comprendre avant d'être compris", color: "violet" },
                                        { icon: Rocket, title: "Résultat tangible", desc: "Relations plus profondes", color: "cyan" },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            whileHover={{ scale: 1.03, y: -4 }}
                                            className={`flex items-start gap-4 p-5 rounded-2xl bg-${item.color}-light/50 border border-${item.color}-custom/10 cursor-default`}
                                        >
                                            <item.icon className={`w-6 h-6 text-${item.color}-custom mt-0.5`} />
                                            <div>
                                                <div className="font-semibold text-foreground">{item.title}</div>
                                                <div className="text-sm text-muted-foreground">{item.desc}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
