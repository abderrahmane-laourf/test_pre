import { ReactNode } from "react";

const AnimatedCard = ({ children, className }: { children: ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
);

export default AnimatedCard;
