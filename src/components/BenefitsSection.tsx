import { motion } from "framer-motion";
import { TrendingUp, Users, Shield, Lightbulb, Heart, Handshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
    {
        icon: Shield,
        title: "Réduction des conflits",
        description: "Évitez les malentendus en comprenant vraiment ce que l'autre veut dire",
        stat: "-60%",
        statLabel: "de conflits",
        color: "violet-custom",
    },
    {
        icon: Users,
        title: "Relations renforcées",
        description: "Créez des liens plus profonds et authentiques avec votre entourage",
        stat: "+75%",
        statLabel: "de confiance",
        color: "cyan-custom",
    },
    {
        icon: Lightbulb,
        title: "Meilleure prise de décision",
        description: "Accédez à plus d'informations pour des choix éclairés",
        stat: "2x",
        statLabel: "plus d'insights",
        color: "violet-custom",
    },
    {
        icon: Heart,
        title: "Bien-être émotionnel",
        description: "Faites sentir aux autres qu'ils sont valorisés et entendus",
        stat: "+80%",
        statLabel: "satisfaction",
        color: "violet-custom",
    },
    {
        icon: TrendingUp,
        title: "Performance professionnelle",
        description: "Améliorez votre leadership et votre influence au travail",
        stat: "+45%",
        statLabel: "efficacité",
        color: "cyan-custom",
    },
    {
        icon: Handshake,
        title: "Résolution créative",
        description: "Trouvez des solutions innovantes grâce à une compréhension approfondie",
        stat: "3x",
        statLabel: "plus de solutions",
        color: "violet-custom",
    },
];

const BenefitsSection = () => {
    const [gridRef, gridVisible] = useScrollAnimation<HTMLDivElement>();

    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background */}
            <motion.div
                animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-mint/5 blur-[130px]"
            />

            <div className="section-container relative">
                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <AnimatedSection className="text-center mb-16">
                        <motion.div whileHover={{ scale: 1.05 }} className="section-label inline-flex">
                            <TrendingUp className="w-4 h-4" />
                            <span>Bénéfices</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground font-display mb-6">
                            Pourquoi pratiquer l'écoute active ?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Des avantages mesurables pour votre vie personnelle et professionnelle
                        </p>
                    </AnimatedSection>

                    {/* Benefits grid */}
                    <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                animate={gridVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group glass-card p-7 cursor-default h-full"
                                >
                                    <div className="flex items-start justify-between mb-5">
                                        <motion.div
                                            whileHover={{ rotate: 10 }}
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center"
                                            style={{ background: `hsl(var(--${benefit.color}) / 0.1)` }}
                                        >
                                            <benefit.icon className="w-8 h-8" style={{ color: `hsl(var(--${benefit.color}))` }} />
                                        </motion.div>

                                        {/* Stat badge */}
                                        <div className="text-right">
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className="text-3xl font-bold text-gradient font-display"
                                            >
                                                {benefit.stat}
                                            </motion.div>
                                            <div className="text-xs text-muted-foreground">{benefit.statLabel}</div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-3 font-display">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
