import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Users } from "lucide-react";
import { motion } from "framer-motion";
import GooeyNav from "./GooeyNav";

const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/introduction", label: "Introduction" },
    { path: "/definition", label: "Définition" },
    { path: "/techniques", label: "Techniques" },
    { path: "/processus", label: "Processus" },
    { path: "/benefices", label: "Bénéfices" },
    { path: "/obstacles", label: "Obstacles" },
    { path: "/pratique", label: "Pratique" },
    { path: "/conclusion", label: "Conclusion" },
];

export default function Navigation() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Get current page index for progress indicator and gooey nav
    const currentIndex = navItems.findIndex(item => item.path === location.pathname);
    const activeIndex = currentIndex >= 0 ? currentIndex : 0;

    // Convert navItems to GooeyNav format
    const gooeyNavItems = navItems.map(item => ({
        label: item.label,
        href: item.path
    }));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileOpen(false);
    }, [location.pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-violet-custom/10"
                : "bg-white/80 backdrop-blur-sm border-b border-violet-custom/5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-violet-custom hover:text-violet-600 transition-all duration-300 group"
                    >
                        <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-sm hidden sm:block group-hover:text-gradient transition-colors">L'Écoute Active</span>
                    </Link>

                    {/* Page Progress Indicator */}
                    {currentIndex > 0 && (
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-light/30 to-cyan-light/30 rounded-full border border-violet-custom/20 human-pulse">
                            <span className="text-xs font-semibold text-violet-custom">
                                Étape {currentIndex} / {navItems.length - 1}
                            </span>
                            <div className="flex gap-1 ml-2">
                                {navItems.slice(1).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i < currentIndex
                                            ? "bg-gradient-to-r from-violet-custom to-cyan-custom"
                                            : i === currentIndex - 1
                                                ? "bg-violet-custom scale-125"
                                                : "bg-violet-custom/20"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Desktop Navigation with GooeyNav */}
                    <div className="hidden lg:block">
                        <GooeyNav
                            items={gooeyNavItems}
                            particleCount={15}
                            particleDistances={[90, 10]}
                            particleR={100}
                            initialActiveIndex={activeIndex}
                            animationTime={600}
                            timeVariance={300}
                            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="lg:hidden p-2 text-gray-600 hover:text-violet-custom hover:bg-violet-light/30 rounded-xl transition-all duration-300 group"
                        aria-label="Toggle menu"
                    >
                        <div className="relative">
                            {isMobileOpen ? (
                                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                            ) : (
                                <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            )}
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileOpen && (
                <motion.nav
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/50 shadow-lg"
                >
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0 technical-grid-fine" />
                    </div>

                    <div className="section-container relative z-10">
                        <nav className="px-4 py-3 space-y-1">
                            {navItems.map((item, index) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${isActive
                                            ? "text-white bg-gradient-to-r from-violet-custom to-cyan-custom"
                                            : "text-gray-600 hover:text-violet-custom hover:bg-violet-light/30"
                                            }`}
                                        style={{
                                            animation: `slideInLeft 0.3s ease-out ${index * 0.05}s both`
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </motion.nav>
            )}
        </header>
    );
}
