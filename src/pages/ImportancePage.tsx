import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Ear, AlertTriangle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Quiz } from "@/components/Quiz";

export default function ImportancePage() {
    const quizQuestions = [
        {
            id: 1,
            question: "Que stipule la règle du 60/25 en communication ?",
            options: [
                "On parle 60% du temps et on écoute 25%.",
                "On passe 60% de notre temps pro à écouter, mais on ne retient que 25% de ce qu'on entend.",
                "60% des gens écoutent bien, 25% écoutent mal.",
                "Il faut 60 secondes pour comprendre, et 25 pour répondre."
            ],
            correctAnswer: 1,
            explanation: "Ce ratio montre l'énorme perte d'efficacité : nous passons notre vie à écouter, mais notre cerveau filtre ou oublie la grande majorité !"
        },
        {
            id: 2,
            question: "Pourquoi l'écoute active est-elle essentielle en gestion de conflit ?",
            options: [
                "Pour collecter des preuves contre l'autre.",
                "Pour préparer sa contre-attaque pendant que l'autre parle.",
                "Pour désamorcer la tension en validant l'émotion de l'autre.",
                "Pour gagner du temps."
            ],
            correctAnswer: 2,
            explanation: "Se sentir écouté fait baisser la pression artérielle et l'amygdale (centre de la peur/colère). C'est le premier pas vers la résolution."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">

            {/* Header */}
            <section className="pt-20 pb-12 px-6 max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                    Pourquoi est-ce <span className="text-primary">Essentiel</span> ?
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Nous vivons dans une "économie de l'attention". Savoir écouter est devenu la compétence la plus rare et la plus valorisée.
                </p>
            </section>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 pb-24 space-y-20">

                {/* The 60/25 Reality Check */}
                <section className="bg-secondary/30 rounded-3xl p-8 md:p-12 border border-secondary">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                                <AlertTriangle className="w-6 h-6 text-destructive" /> Le Constat
                            </h3>
                            <p className="text-lg text-muted-foreground mb-6">
                                Des études en psychologie organisationnelle révèlent une dissonance majeure :
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-xl font-bold text-primary shadow-sm shrink-0">60%</div>
                                    <span className="text-foreground font-medium">du temps professionnel d'un manager est passé à écouter (réunions, 1:1, appels).</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-xl font-bold text-destructive shadow-sm shrink-0">25%</div>
                                    <span className="text-foreground font-medium">seulement de ce qui est entendu est réellement retenu après 24 heures.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-64 bg-white rounded-2xl shadow-sm border border-border p-6 flex flex-col items-center justify-center text-center">
                            <Ear className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
                            <p className="font-display font-bold text-xl text-primary">Le Coût de l'Ignorance</p>
                            <p className="text-sm text-muted-foreground mt-2">Erreurs, conflits, retards, démotivation.</p>
                        </div>
                    </div>
                </section>

                {/* Real life example */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg text-emerald-600">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-display font-bold">L'Avantage Concurrentiel</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-card border border-border p-6 rounded-xl hover:shadow-md transition-shadow">
                            <h4 className="font-bold mb-2 text-foreground">Au Travail</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Les vendeurs qui pratiquent l'écoute active vendent <strong>40% de plus</strong>. Ils ne vendent pas un produit, ils vendent une solution à un problème qu'ils ont pris le soin de comprendre.
                            </p>
                        </div>
                        <div className="bg-card border border-border p-6 rounded-xl hover:shadow-md transition-shadow">
                            <h4 className="font-bold mb-2 text-foreground">En Leadership</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Google a découvert (Projet Oxygen) que la qualité n°1 de ses meilleurs managers n'était pas l'expertise technique, mais la capacité à <strong>écouter et coacher</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Takeaways */}
                <section className="bg-primary text-primary-foreground p-8 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4">À Retenir</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                            <span className="text-primary-foreground/90">L'écoute est l'activité la plus fréquente mais la moins maîtrisée.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                            <span className="text-primary-foreground/90">C'est la compétence socle de l'intelligence émotionnelle.</span>
                        </li>
                    </ul>
                </section>

                {/* Quiz Section */}
                <section className="border-t border-border pt-12">
                    <Quiz questions={quizQuestions} />
                </section>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8">
                    <Link to="/introduction">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="w-4 h-4" /> Intro
                        </Button>
                    </Link>
                    <Link to="/definition">
                        <Button className="btn-primary gap-2 px-8">
                            Page 3 : Définition <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
