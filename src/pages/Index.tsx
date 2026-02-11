import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { usePortfolio } from "@/contexts/PortfolioContext";

const Index = () => {
  const { isPortfolioVisible } = usePortfolio();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        {isPortfolioVisible && <Portfolio />}
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
