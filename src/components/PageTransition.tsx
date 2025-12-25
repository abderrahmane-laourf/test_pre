import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
}

const pageVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.95,
        y: 100,
        rotateX: -8,
        filter: "blur(8px) brightness(0.9)",
    },
    in: {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px) brightness(1)",
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
            y: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
            scale: { duration: 0.5 },
            filter: { duration: 0.4 },
            rotateX: { duration: 0.5 }
        }
    },
    out: {
        opacity: 0,
        scale: 1.05,
        y: -100,
        rotateX: 8,
        filter: "blur(8px) brightness(0.9)",
        transition: {
            duration: 0.5,
            ease: [0.55, 0.055, 0.675, 0.19],
            y: { duration: 0.5, ease: [0.55, 0.055, 0.675, 0.19] },
            scale: { duration: 0.3 },
            filter: { duration: 0.3 },
            rotateX: { duration: 0.3 }
        }
    }
};

const backgroundVariants: Variants = {
    initial: {
        opacity: 0,
        background: "linear-gradient(180deg, rgba(124, 58, 237, 0) 0%, rgba(6, 182, 212, 0) 100%)"
    },
    in: {
        opacity: 1,
        background: [
            "linear-gradient(180deg, rgba(124, 58, 237, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)",
            "linear-gradient(180deg, rgba(124, 58, 237, 0.05) 0%, rgba(6, 182, 212, 0.1) 100%)",
            "linear-gradient(180deg, rgba(124, 58, 237, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)"
        ],
        transition: {
            duration: 3,
            ease: "easeInOut",
            background: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    },
    out: {
        opacity: 0,
        background: "linear-gradient(180deg, rgba(124, 58, 237, 0) 0%, rgba(6, 182, 212, 0) 100%)"
    }
};

const overlayVariants: Variants = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1,
        transition: {
            duration: 0.2,
            delay: 0.1
        }
    },
    out: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
};

const PageTransition = ({ children }: PageTransitionProps) => {
    return (
        <motion.div
            className="relative min-h-full w-full"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
        >
            {/* Content overlay */}
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at center, transparent 0%, rgba(255, 255, 255, 0.03) 100%)"
                }}
                variants={overlayVariants}
                initial="initial"
                animate="in"
                exit="out"
            />
            
            {/* Page content */}
            <div className="relative z-20">
                {children}
            </div>
        </motion.div>
    );
};

export default PageTransition;
