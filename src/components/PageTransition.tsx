import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
}

const pageVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.98,
        y: 20,
    },
    in: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.3 },
            scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
        }
    },
    out: {
        opacity: 0,
        scale: 0.98,
        y: -20,
        transition: {
            duration: 0.3,
            ease: [0.76, 0, 0.24, 1],
            opacity: { duration: 0.2 },
            scale: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
            y: { duration: 0.3, ease: [0.76, 0, 0.24, 1] }
        }
    }
};

const curtainVariants: Variants = {
    initial: {
        scaleY: 1,
        transformOrigin: "top"
    },
    in: {
        scaleY: 0,
        transformOrigin: "top",
        transition: {
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.1
        }
    },
    out: {
        scaleY: 0,
        transformOrigin: "top"
    }
};

const PageTransition = ({ children }: PageTransitionProps) => {
    return (
        <>
            {/* Transition curtain */}
            <motion.div
                className="fixed inset-0 z-50 bg-gradient-to-br from-violet-600 to-cyan-500 pointer-events-none"
                variants={curtainVariants}
                initial="initial"
                animate="in"
                exit="out"
            />
            
            {/* Page content with smooth transition */}
            <motion.div
                className="relative min-h-full w-full"
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
            >
                {children}
            </motion.div>
        </>
    );
};

export default PageTransition;
