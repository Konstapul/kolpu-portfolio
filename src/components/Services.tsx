import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Kuvaus tapahtumapaikalla",
  "Kuvien valinta ja huolellinen editointi",
  "Valmiit kuvat (n. 30–50 kpl / tunti)",
  "Toimitus digitaalisena 2 viikon sisällä",
  "Kuvien vapaa käyttöoikeus (ei jälleenmyyntiin)",
];

const Services = () => {
  return (
    <section id="hinnasto" className="section-padding bg-secondary">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2>Hinnasto</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-card border border-border p-10 md:p-16"
        >
          {/* Pricing */}
          <div className="text-center mb-12">
            <div className="mb-2">
              <span className="text-5xl md:text-6xl font-light">250 €</span>
            </div>
            <p className="text-muted-foreground text-sm tracking-wide">
              ensimmäinen tunti
            </p>
            <div className="mt-6 mb-2">
              <span className="text-3xl md:text-4xl font-light">50 € </span>
              <span className="text-muted-foreground text-base">/ lisätunti</span>
            </div>
            <p className="text-muted-foreground text-xs tracking-wide mt-4">
              (Hinnat sis. alv)
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-border mx-auto mb-12" />

          {/* Features */}
          <div className="mb-10">
            <p className="text-sm font-medium tracking-wide uppercase text-center mb-8">
              Hintaan sisältyy
            </p>
            <ul className="space-y-5 max-w-md mx-auto">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 flex-shrink-0 text-muted-foreground" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Note */}
          <p className="text-center text-muted-foreground text-xs leading-relaxed max-w-md mx-auto">
            Mahdolliset pysäköintikulut sekä matkakulut pääkaupunkiseudun ulkopuolella sovitaan erikseen.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
