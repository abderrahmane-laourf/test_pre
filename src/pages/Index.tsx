import HeroSection from "@/components/HeroSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
      <Helmet>
        <title>Active Listening Presentation</title>
        <meta name="description" content="An interactive presentation on Active Listening" />
      </Helmet>

      {/* Navigation is global in App.tsx */}

      <main>
        <HeroSection />
      </main>
    </div >
  );
};

export default Index;
