import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>L'Écoute Active - Présentation Complète</title>
        <meta
          name="description"
          content="Découvrez l'art de l'écoute active : techniques, processus et bénéfices pour une communication interpersonnelle efficace."
        />
      </Helmet>
      <main className="min-h-screen bg-background">
        <HeroSection />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
