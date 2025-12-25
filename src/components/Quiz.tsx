import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // Index of the correct option (0-3)
}

interface QuizProps {
    questions: Question[];
    title?: string;
    nextPagePath?: string;
    nextPageTitle?: string;
}

export function Quiz({ questions, title = "Quiz de Validation", nextPagePath, nextPageTitle }: QuizProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [correctCount, setCorrectCount] = useState(0);

    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    if (!currentQuestion) return null; // Safety check

    const handleSelect = (optionIndex: number) => {
        if (isCorrect) return; // Prevent changing once correct
        setSelectedAnswer(optionIndex);
    };

    const handleSubmit = () => {
        if (selectedAnswer === null) return;

        const correct = selectedAnswer === currentQuestion.correctAnswer;
        setIsCorrect(correct);

        if (correct) {
            setCorrectCount(prev => prev + 1);
        }
    };

    const handleRetry = () => {
        setSelectedAnswer(null);
        setIsCorrect(null);
    };

    const handleNext = () => {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
    };

    return (
        <div className="space-y-12 max-w-3xl mx-auto py-12">
            <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm">
                    <HelpCircle className="w-4 h-4" />
                    <span>{title}</span>
                </div>
                <h3 className="text-3xl font-display font-bold">Question {currentQuestionIndex + 1} / {questions.length}</h3>
                <p className="text-muted-foreground">
                    Bonnes réponses : <span className="font-bold text-foreground">{correctCount}</span>
                </p>
            </div>

            <AnimatePresence mode="wait">
                {currentQuestion && (
                    <motion.div
                        key={currentQuestion.id}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg"
                    >
                        <h4 className="text-xl font-bold mb-6 flex gap-3">
                            <span className="text-muted-foreground opacity-50">0{currentQuestionIndex + 1}.</span>
                            {currentQuestion.question}
                        </h4>

                        <div className="space-y-4">
                            <RadioGroup
                                value={selectedAnswer?.toString()}
                                onValueChange={(val) => handleSelect(parseInt(val))}
                                className="space-y-3"
                            >
                                {currentQuestion.options.map((option, i) => {
                                    const isSelected = selectedAnswer === i;

                                    let borderColor = "border-border";
                                    let bgColor = "bg-background";

                                    if (isCorrect && isSelected) {
                                        borderColor = "border-emerald-500";
                                        bgColor = "bg-emerald-50 dark:bg-emerald-900/10";
                                    } else if (isCorrect === false && isSelected) {
                                        borderColor = "border-destructive";
                                        bgColor = "bg-destructive/5";
                                    } else if (isSelected) {
                                        borderColor = "border-primary";
                                        bgColor = "bg-primary/5";
                                    }

                                    return (
                                        <motion.div
                                            key={i}
                                            whileHover={!isCorrect ? { scale: 1.02 } : {}}
                                            whileTap={!isCorrect ? { scale: 0.98 } : {}}
                                            className={`relative flex items-center space-x-3 border-2 ${borderColor} ${bgColor} rounded-xl p-4 transition-all cursor-pointer ${!isCorrect && "hover:border-primary/50 hover:shadow-sm"}`}
                                        >
                                            <RadioGroupItem value={i.toString()} id={`q${currentQuestion.id}-opt${i}`} disabled={isCorrect === true} />
                                            <Label htmlFor={`q${currentQuestion.id}-opt${i}`} className="flex-1 cursor-pointer font-medium text-base leading-snug">
                                                {option}
                                            </Label>
                                        </motion.div>
                                    );
                                })}
                            </RadioGroup>

                            {isCorrect === null && (
                                <Button
                                    onClick={handleSubmit}
                                    disabled={selectedAnswer === null}
                                    className="w-full mt-6"
                                    size="lg"
                                    variant={selectedAnswer === null ? "secondary" : "default"}
                                >
                                    Vérifier la réponse
                                </Button>
                            )}

                            <AnimatePresence>
                                {isCorrect === true && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-4"
                                    >
                                        <motion.div
                                            initial={{ scale: 0.9 }}
                                            animate={{ scale: 1 }}
                                            className="mt-4 p-4 rounded-xl text-sm flex items-center gap-3 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200"
                                        >
                                            <CheckCircle2 className="w-5 h-5" />
                                            <span className="font-bold text-lg">✅ Bonne réponse !</span>
                                        </motion.div>

                                        {!isLastQuestion ? (
                                            <Button
                                                onClick={handleNext}
                                                className="w-full mt-4"
                                                size="lg"
                                            >
                                                Question suivante
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className="mt-6 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl text-center border-2 border-primary/20"
                                            >
                                                <h4 className="text-3xl font-bold mb-3">🎉 Quiz terminé !</h4>
                                                <p className="text-xl text-muted-foreground">
                                                    Score final : <span className="font-bold text-2xl text-primary">{correctCount} / {questions.length}</span>
                                                </p>

                                                <div className="flex flex-col gap-4 mt-8 w-full max-w-sm mx-auto">
                                                    {nextPagePath && (
                                                        <Link to={nextPagePath}>
                                                            <Button className="w-full gap-2 text-lg h-12 shadow-md hover:scale-105 transition-transform" size="lg">
                                                                {nextPageTitle || "Continuer"} <ArrowRight className="w-5 h-5" />
                                                            </Button>
                                                        </Link>
                                                    )}
                                                    <Button variant="ghost" onClick={() => window.location.reload()} className="gap-2 text-muted-foreground hover:text-foreground">
                                                        <RotateCcw className="w-4 h-4" /> Recommencer le Quiz
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                )}

                                {isCorrect === false && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-4"
                                    >
                                        <motion.div
                                            initial={{ scale: 0.9 }}
                                            animate={{ scale: 1 }}
                                            className="mt-4 p-4 rounded-xl text-sm flex items-center gap-3 bg-destructive/10 text-destructive"
                                        >
                                            <XCircle className="w-5 h-5" />
                                            <span className="font-bold text-lg">❌ Réponse incorrecte</span>
                                        </motion.div>

                                        <Button
                                            onClick={handleRetry}
                                            className="w-full mt-4"
                                            size="lg"
                                            variant="secondary"
                                        >
                                            <RotateCcw className="w-4 h-4 mr-2" />
                                            Réessayer
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
