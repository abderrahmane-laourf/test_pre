import { Ear, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: "var(--gradient-hero)" }} />
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-hero)" }}>
              <Ear className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-bold text-background font-display">L'Écoute Active</h4>
              <p className="text-sm text-background/50">Présentation • Communication Interpersonnelle</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#introduction" className="text-sm text-background/60 hover:text-background transition-colors">
              Introduction
            </a>
            <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
              Techniques
            </a>
            <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
              Ressources
            </a>
          </nav>

          {/* Credits */}
          <div className="flex items-center gap-2 text-sm text-background/50">
            <span>Créé avec</span>
            <Heart className="w-4 h-4 text-coral fill-current" />
            <span>pour le savoir</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} — Présentation éducative sur la communication
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
