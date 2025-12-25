import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Quiz } from "@/components/Quiz";

export default function QuizPartie1Page() {
    const questions = [
        // Page 1: Introduction (2 questions)
        {
            id: 1,
            question: "Quelle est la définition de la communication interpersonnelle ?",
            options: [
                "C'est simplement parler à quelqu'un.",
                "C'est échanger des informations entre deux personnes, avec les mots et les gestes.",
                "C'est l'art de convaincre les autres.",
                "C'est envoyer des emails."
            ],
            correctAnswer: 1
        },
        {
            id: 2,
            question: "Quels sont les trois éléments clés du schéma de communication classique ?",
            options: [
                "Le Parleur, l'Écouteur, le Silence.",
                "Le Code, le Bruit, le Décodeur.",
                "L'Émetteur, le Message, le Récepteur.",
                "L'Intention, l'Action, la Réaction."
            ],
            correctAnswer: 2
        },
        // Page 2: Definition (2 questions)
        {
            id: 3,
            question: "Quelle est la différence entre 'Écouter' et 'Entendre' ?",
            options: [
                "Entendre demande un effort, Écouter est passif.",
                "Entendre est automatique (avec les oreilles), Écouter est un choix (avec l'esprit).",
                "Il n'y a pas de différence.",
                "Écouter se fait avec les oreilles, Entendre avec le cœur."
            ],
            correctAnswer: 1
        },
        {
            id: 4,
            question: "Lequel de ces éléments n'est PAS un des 3 piliers de l'écoute active ?",
            options: [
                "La dimension Cognitive (comprendre).",
                "La dimension Émotionnelle (ressentir).",
                "La dimension Argumentative (convaincre).",
                "La dimension Comportementale (montrer)."
            ],
            correctAnswer: 2
        },
        // Page 3: Techniques (2 questions)
        {
            id: 5,
            question: "Quel est le but de la 'Reformulation' ?",
            options: [
                "Répéter mot pour mot ce que l'autre a dit.",
                "Transformer le message en quelque chose de plus intelligent.",
                "Vérifier qu'on a bien compris en redisant avec nos propres mots.",
                "Gagner du temps pour penser à sa réponse."
            ],
            correctAnswer: 2
        },
        {
            id: 6,
            question: "Quelle est la bonne question pour 'Clarifier' ?",
            options: [
                "Pourquoi tu as fait ça ?",
                "Tu penses pas que c'est une mauvaise idée ?",
                "Est-ce que tu peux m'expliquer plus en détail ce point ?",
                "C'est clair, non ?"
            ],
            correctAnswer: 2
        },
        // Page 4: Processus (2 questions)
        {
            id: 7,
            question: "Pourquoi est-ce qu'on doit 'Évaluer' seulement en 4ème position ?",
            options: [
                "Parce qu'il faut mémoriser le jugement.",
                "Parce qu'on ne peut pas juger quelque chose qu'on n'a pas encore totalement compris.",
                "Parce que c'est l'étape la moins importante.",
                "Parce que le client a toujours raison."
            ],
            correctAnswer: 1
        },
        {
            id: 8,
            question: "Quelle est la meilleure aide pour l'étape 'Compréhension' ?",
            options: [
                "Deviner ce que l'autre va dire.",
                "Regarder smartphone pour vérifier les faits.",
                "Reformuler et Clarifier.",
                "Prendre des notes sans regarder la personne."
            ],
            correctAnswer: 2
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">

            {/* Header */}
            <section className="pt-20 pb-8 px-6 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Quiz • Partie 1 (Étudiant A)
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                    Questions – Partie 1
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    8 questions sur l'Introduction, la Définition, les Techniques et le Processus de l'écoute active.
                </p>
            </section>

            <div className="max-w-4xl mx-auto px-6 pb-24">

                {/* Quiz Component */}
                <Quiz
                    questions={questions}
                    title="Quiz – Partie 1"
                    nextPagePath="/benefices"
                    nextPageTitle="Suite : Introduction Étudiant B"
                />

                {/* Navigation Footer */}
                <div className="flex justify-between items-center pt-8 border-t border-border">
                    <Link to="/processus">
                        <Button variant="ghost" size="lg" className="group text-muted-foreground hover:text-foreground">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Retour au contenu
                        </Button>
                    </Link>
                    <Link to="/benefices">
                        <Button size="lg" className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8">
                            Continuer : Partie 2 (Étudiant B)
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
