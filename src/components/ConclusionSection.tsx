import { motion } from "framer-motion";
import { ArrowUp, Quote, Award, Star, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const keyTakeaways = [
    "L'écoute active est une compétence qui se développe avec la pratique",
    "Elle combine attention cognitive, empathie et signaux comportementaux",
    "Les bénéfices touchent tous les aspects de la vie",
    "Commencez petit : un exercice par jour suffit pour progresser",
];

const ConclusionSection = () => {
    const [takeawaysRef, takeawaysVisible] = useScrollAnimation<HTMLDivElement>();

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-light/30 to-background" />
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-custom/10 blur-[150px]"
            />
            <motion.div
                animate={{ scale: [1.2, 1, 1.2], rotate: [0, -10, 0] }}
                transition={{ duration: 25, repeat: Infinity }}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-custom/10 blur-[130px]"
            />

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <AnimatedSection className="text-center mb-14">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] mb-10 shadow-2xl shadow-primary/30"
                            style={{ background: "var(--gradient-hero)" }}
                        >
                            <Award className="w-12 h-12 text-primary-foreground" />
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground font-display mb-6">
                            Conclusion
                        </h2>
                    </AnimatedSection>

                    {/* Main message */}
                    <AnimatedSection delay={0.2}>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="glass-card p-10 md:p-14 text-center mb-14"
                        >
                            <MessageCircle className="w-10 h-10 text-violet-custom/30 mx-auto mb-8" />
                            <p className="text-2xl md:text-3xl font-display font-semibold text-foreground leading-relaxed mb-10">
                                L'écoute active n'est pas un talent inné,
                                <span className="text-gradient"> c'est un choix conscient </span>
                                que vous pouvez faire à chaque conversation.
                            </p>

                            {/* Key takeaways */}
                            <div ref={takeawaysRef} className="grid sm:grid-cols-2 gap-5 text-left max-w-2xl mx-auto">
                                {keyTakeaways.map((takeaway, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={takeawaysVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        whileHover={{ scale: 1.03 }}
                                        className="flex items-start gap-4 p-5 rounded-2xl cursor-default"
                                        style={{ background: "hsl(var(--violet-custom) / 0.05)" }}
                                    >
                                        <div className="number-badge w-8 h-8 text-xs flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <span className="text-sm text-muted-foreground">{takeaway}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatedSection>

                    {/* Quote */}
                    <AnimatedSection delay={0.3} className="text-center mb-14">
                        <Quote className="w-14 h-14 text-violet-custom/20 mx-auto mb-6" />
                        <blockquote className="text-xl md:text-2xl italic text-foreground/80 max-w-2xl mx-auto mb-6 font-display">
                            "Écouter, c'est offrir à l'autre le plus beau des cadeaux : son attention pleine et entière."
                        </blockquote>
                        <div className="flex items-center justify-center gap-2">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ delay: i * 0.1, duration: 1.5, repeat: Infinity }}
                                >
                                    <Star className="w-5 h-5 text-gold fill-gold" />
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* CTA */}
                    <AnimatedSection delay={0.4} className="text-center">
                        <p className="text-xl text-muted-foreground mb-10">
                            Maintenant, à vous de jouer !
                        </p>
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-4 px-8 py-4 glass-card hover:border-violet-custom/30 transition-all duration-300 group"
                            >
                                <motion.div
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowUp className="w-6 h-6 text-muted-foreground group-hover:text-violet-custom transition-colors" />
                                </motion.div>
                                <span className="font-semibold text-muted-foreground group-hover:text-violet-custom transition-colors">
                                    Retour à l'accueil
                                </span>
                            </motion.button>
                        </Link>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default ConclusionSection;
