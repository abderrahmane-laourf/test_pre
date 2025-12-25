import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    direction?: "left" | "right" | "up" | "down";
    delay?: number;
}

const AnimatedSection = ({ children, className, id, direction = "up", delay = 0 }: AnimatedSectionProps) => {
    const getInitialPosition = () => {
        switch (direction) {
            case "left":
                return { opacity: 0, x: -50 };
            case "right":
                return { opacity: 0, x: 50 };
            case "down":
                return { opacity: 0, y: 50 };
            case "up":
            default:
                return { opacity: 0, y: 30 };
        }
    };

    const getFinalPosition = () => {
        switch (direction) {
            case "left":
            case "right":
                return { opacity: 1, x: 0 };
            case "down":
            case "up":
            default:
                return { opacity: 1, y: 0 };
        }
    };

    return (
        <motion.div
            id={id}
            className={className}
            initial={getInitialPosition()}
            whileInView={getFinalPosition()}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true, margin: "-100px" }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
