import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import GridScan from "./GridScan";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* GridScan Background Animation */}
            <div className="absolute inset-0 z-0">
                <GridScan
                    sensitivity={0.6}
                    lineThickness={1.2}
                    linesColor="#9B8FC7"
                    gridScale={0.08}
                    scanColor="#001BB7"
                    scanOpacity={0.7}
                    enablePost
                    bloomIntensity={0.8}
                    chromaticAberration={0.001}
                    noiseIntensity={0.005}
                    scanDirection="pingpong"
                    scanDuration={3.0}
                    scanDelay={1.0}
                    lineJitter={0}
                    scanGlow={1.5}
                />
            </div>

            {/* Subtle gradient blobs for depth */}
            <div className="absolute inset-0 z-[1]">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full bg-violet-custom/10 blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 right-10 w-[600px] h-[600px] rounded-full bg-cyan-custom/10 blur-[100px]"
                />
            </div>

            {/* Clean white overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-white/50 z-[2]" />

            <div className="section-container relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Topic badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-6 py-3 glass-card mb-12"
                    >
                        <MessageSquare className="w-5 h-5 text-slate-700" />
                        <span className="text-sm font-semibold text-slate-700">Parler entre humains</span>
                        <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-mint"
                        />
                    </motion.div>

                    {/* Main title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-10 font-display text-reveal"
                    >
                        <span className="text-slate-900">L'Écoute Active</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-14 leading-relaxed"
                    >
                        L'art de comprendre au-delà des mots. Maîtrisez la compétence
                        fondamentale qui transforme chaque conversation en connexion authentique.
                    </motion.p>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-10 mb-16"
                    >
                        {[
                            { value: "85%", label: "des conflits évités" },
                            { value: "3x", label: "meilleure compréhension" },
                            { value: "100%", label: "applicable partout" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                className="text-center group cursor-default smooth-scale"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-slate-900 font-display human-pulse group-hover:scale-110 transition-transform">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-slate-600 mt-2">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <Link to="/introduction">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="btn-primary group fade-in-up"
                            >
                                <span className="flex items-center gap-3">
                                    Commencer la présentation
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="human-blink"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.span>
                                </span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </section>
    );
};

export default HeroSection;
