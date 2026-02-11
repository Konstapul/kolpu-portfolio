import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPackages } from "@/data/content";
import { Button } from "@/components/ui/button";

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#yhteystiedot");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hinnasto" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2>Hinnasto</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pricingPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`pricing-card ${pkg.featured ? "pricing-card-featured" : ""}`}
            >
              {pkg.featured && (
                <span className="text-xs tracking-[0.2em] uppercase opacity-70 mb-4 block">
                  Suosituin
                </span>
              )}
              <h3 className="mb-2">{pkg.title}</h3>
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-light">{pkg.price}</span>
              </div>
              <p className={`text-sm mb-8 ${pkg.featured ? "opacity-80" : "text-muted-foreground"}`}>
                {pkg.description}
              </p>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check size={18} className={`mt-0.5 flex-shrink-0 ${pkg.featured ? "opacity-80" : "text-muted-foreground"}`} />
                    <span className={`text-sm ${pkg.featured ? "opacity-90" : "text-foreground"}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={scrollToContact}
                className={`w-full rounded-none ${
                  pkg.featured
                    ? "bg-overlay-light text-overlay-dark hover:bg-overlay-light/90"
                    : "btn-primary"
                }`}
              >
                Ota yhteyttä
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          Räätälöidyt paketit saatavilla. Keskustellaan visiostasi.
        </motion.p>
      </div>
    </section>
  );
};

export default Services;
