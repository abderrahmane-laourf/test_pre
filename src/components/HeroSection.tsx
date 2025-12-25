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
                  

                    {/* Main title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 font-display text-reveal"
                    >
                        <span className="text-slate-900">L'Écoute Active</span>
                    </motion.h1>

                    {/* Engaging Question */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mb-12"
                    >
                        <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-700 mb-4">
                          <span className="text-violet-custom font-bold">80 % </span>des erreurs en milieu professionnel sont liées à une mauvaise communication, souvent par manque d’écoute. ?
                        </p>
                    </motion.div>

                  
                    {/* Enhanced CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Link to="/introduction">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="relative px-10 py-5 bg-gradient-to-r from-violet-custom to-cyan-custom text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                            >
                                {/* Button glow effect */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 0.8, 0.5],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-gradient-to-r from-violet-400/30 to-cyan-400/30 blur-xl"
                                />
                                
                                <span className="relative flex items-center gap-3">
                                    <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                                    Commencer la présentation
                                    <motion.span
                                        animate={{ x: [0, 6, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="group-hover:translate-x-2 transition-transform"
                                    >
                                        <ArrowRight className="w-6 h-6" />
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
