import { motion } from "framer-motion";
import { footerContent, navigationLinks } from "@/data/content";
import { usePortfolio } from "@/contexts/PortfolioContext";

const Footer = () => {
  const { showPortfolio } = usePortfolio();

  const handlePortfolioClick = () => {
    showPortfolio();
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="section-padding-sm bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-start mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-2xl font-bold tracking-tight block mb-3">KP</a>
            <p className="text-muted-foreground text-sm">{footerContent.tagline}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-3">
            <span className="text-sm font-medium mb-2">Navigaatio</span>
            {navigationLinks.map((link) => (
              link.href === "/portfolio" ? (
                <button key={link.href} onClick={handlePortfolioClick} className="text-muted-foreground text-sm hover:text-foreground transition-colors text-left">{link.label}</button>
              ) : (
                <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-muted-foreground text-sm hover:text-foreground transition-colors text-left">{link.label}</button>
              )
            ))}
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">{footerContent.copyright}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
