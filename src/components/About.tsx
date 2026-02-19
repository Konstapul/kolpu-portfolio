import { motion } from "framer-motion";
import { aboutContent } from "@/data/content";
import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="osaamiseni" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={aboutContent.photographer.image}
                alt={aboutContent.photographer.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-8">{aboutContent.heading}</h2>

            <div className="space-y-6 mb-12">
              {aboutContent.photographer.bio.split("\n\n").map((paragraph, index) => {
                // Skip "Palveluni" if it appears
                if (paragraph.trim() === "Palveluni") {
                  return null;
                }
                // Render "Aitoja tilannekuvia" as a sub-heading
                if (paragraph.trim() === "Aitoja tilannekuvia") {
                  return (
                    <h3 key={index} className="text-xl md:text-2xl font-medium mt-8 mb-4">
                      {paragraph}
                    </h3>
                  );
                }
                // Render regular paragraphs
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12 flex justify-center"
            >
              <Button
                onClick={() => scrollToSection("#yhteystiedot")}
                className="btn-primary rounded-none"
              >
                Kerro minulle tapahtumastasi – Pyydä tarjous
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              <p className="text-lg font-light italic">
                — {aboutContent.photographer.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {aboutContent.photographer.role}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
