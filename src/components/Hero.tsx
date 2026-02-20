import { motion } from "framer-motion";
import { heroContent, miniPortfolioItems } from "@/data/content";
import { usePortfolio } from "@/contexts/PortfolioContext";

const Hero = () => {
  const { showPortfolio } = usePortfolio();
  const row1 = miniPortfolioItems.slice(0, 3);
  const row2 = miniPortfolioItems.slice(3, 6);
  const row3 = miniPortfolioItems.slice(6, 9);

  return (
    <section className="pt-28 pb-16 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Name & Niche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight">
            {heroContent.mainHeading}
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight mt-4 text-muted-foreground">
            {heroContent.name}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base tracking-[0.2em] uppercase mt-3">
            {heroContent.location}
          </p>
        </motion.div>

        {/* Row 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-3 md:gap-4"
        >
          {row1.map((item) => (
            <div key={item.id} className="image-hover aspect-[2/3] overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        {/* Tagline Row 1 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-xl md:text-3xl lg:text-4xl font-light italic my-6 md:my-10 tracking-wide"
        >
          {heroContent.taglineRow1}
        </motion.p>

        {/* Row 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-3 gap-3 md:gap-4"
        >
          {row2.map((item) => (
            <div key={item.id} className="image-hover aspect-[2/3] overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        {/* Tagline Row 2 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center text-xl md:text-3xl lg:text-4xl font-light italic my-6 md:my-10 tracking-wide"
        >
          {heroContent.taglineRow2}
        </motion.p>

        {/* Row 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-3 md:gap-4"
        >
          {row3.map((item) => (
            <div key={item.id} className="image-hover aspect-[2/3] overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        {/* Portfolio Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-10 md:mt-14"
        >
          <button
            onClick={showPortfolio}
            className="text-sm md:text-base tracking-[0.3em] uppercase font-medium border-b-2 border-foreground pb-2 hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-300"
          >
            {heroContent.portfolioLinkText}
          </button>
          <p className="text-muted-foreground text-xs tracking-[0.15em] mt-3">
            lisää kuvia
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
