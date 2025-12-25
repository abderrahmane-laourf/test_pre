import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";
import { Quiz } from "@/components/Quiz";

export default function QuizPartie2Page() {
    const questions = [
        // Page 5: Bénéfices (3 questions)
        {
            id: 1,
            question: "Quel est le principal effet de l'écoute active sur le leadership ?",
            options: [
                "Elle montre qui est le chef en coupant la parole.",
                "Elle crée de la confiance et les gens s'engagent plus.",
                "Elle permet de manipuler les employés.",
                "Elle ralentit les décisions."
            ],
            correctAnswer: 1
        },
        {
            id: 2,
            question: "Comment l'écoute active influence-t-elle la productivité ?",
            options: [
                "Elle la réduit car on passe trop de temps à discuter.",
                "Elle l'augmente en réduisant les erreurs dues aux malentendus.",
                "Elle n'a aucun impact concret.",
                "Elle remplace les réunions."
            ],
            correctAnswer: 1
        },
        {
            id: 3,
            question: "Quel bénéfice personnel apporte l'écoute active ?",
            options: [
                "Un sentiment de supériorité.",
                "Des relations superficielles mais nombreuses.",
                "Des relations authentiques et durables.",
                "Gagner tous les arguments."
            ],
            correctAnswer: 2
        },
        // Page 6: Obstacles (3 questions)
        {
            id: 4,
            question: "Qu'est-ce que 'l'écoute autobiographique' ?",
            options: [
                "Écouter pour écrire un livre.",
                "Détourner la conversation vers sa propre expérience au lieu de se concentrer sur l'autre.",
                "Se souvenir parfaitement de tout ce que l'autre a dit.",
                "Écouter de la musique calme."
            ],
            correctAnswer: 1
        },
        {
            id: 5,
            question: "Quel est le meilleur moyen de combattre le 'Biais de Confirmation' ?",
            options: [
                "Parler qu'avec des gens qui sont d'accord avec nous.",
                "Chercher des preuves qui contredisent notre opinion.",
                "Ignorer les faits désagréables.",
                "Parler plus fort."
            ],
            correctAnswer: 1
        },
        {
            id: 6,
            question: "Quelle est la 'Réponse Défensive' ?",
            options: [
                "Écouter attentivement avant de répondre.",
                "Se sentir attaqué et se justifier au lieu de comprendre.",
                "Une technique de communication avancée.",
                "Poser des questions ouvertes."
            ],
            correctAnswer: 1
        },
        // Page 7: Pratique (2 questions)
        {
            id: 7,
            question: "Dans le scénario 'Montrer qu'on Comprend', pourquoi 'Moi aussi j'ai fini' est mauvais ?",
            options: [
                "Parce que c'est un mensonge.",
                "Parce qu'on ramène la conversation vers soi au lieu de s'intéresser à l'autre.",
                "Parce qu'il ne faut jamais parler de soi.",
                "Parce que le design n'est pas important."
            ],
            correctAnswer: 1
        },
        {
            id: 8,
            question: "Quel est le vrai but de l'écoute active ?",
            options: [
                "Gagner tous les débats.",
                "Comprendre l'autre comme il se comprend lui-même.",
                "Manipuler l'autre pour avoir ce qu'on veut.",
                "Avoir l'air intelligent."
            ],
            correctAnswer: 1
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">

            {/* Header */}
            <section className="pt-20 pb-8 px-6 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                    Quiz • Partie 2 (Étudiant B)
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                    Questions – Partie 2
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    8 questions sur les Bénéfices, les Obstacles et la Pratique de l'écoute active.
                </p>
            </section>

            <div className="max-w-4xl mx-auto px-6 pb-24">

                {/* Quiz Component */}
                <Quiz
                    questions={questions}
                    title="Quiz – Partie 2"
                    nextPagePath="/conclusion"
                    nextPageTitle="Voir la Conclusion"
                />

                {/* Navigation Footer */}
                <div className="flex justify-between items-center pt-8 border-t border-border">
                    <Link to="/pratique">
                        <Button variant="ghost" size="lg" className="group text-muted-foreground hover:text-foreground">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Retour au contenu
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button size="lg" className="group btn-primary px-8">
                            <Home className="w-4 h-4 mr-2" />
                            Retour à l'Accueil
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
