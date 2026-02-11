import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "@/data/content";
import { usePortfolio } from "@/contexts/PortfolioContext";

const Navbar = () => {
  const { showPortfolio } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePortfolioClick = () => {
    setIsMobileMenuOpen(false);
    showPortfolio();
  };

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-lg md:text-xl font-bold tracking-tight"
            >
              KP
            </a>

            <div className="hidden md:flex items-center justify-center gap-8 flex-1">
              {navigationLinks.map((link) => (
                link.href === "/portfolio" ? (
                  <button
                    key={link.href}
                    onClick={handlePortfolioClick}
                    className="btn-ghost text-xs tracking-[0.15em] uppercase"
                  >
                    {link.label}
                  </button>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="btn-ghost text-xs tracking-[0.15em] uppercase"
                  >
                    {link.label}
                  </button>
                )
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Valikko"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navigationLinks.map((link, index) => (
                link.href === "/portfolio" ? (
                  <motion.button
                    key={link.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={handlePortfolioClick}
                    className="text-2xl font-light tracking-wide"
                  >
                    {link.label}
                  </motion.button>
                ) : (
                  <motion.button
                    key={link.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-2xl font-light tracking-wide"
                  >
                    {link.label}
                  </motion.button>
                )
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
