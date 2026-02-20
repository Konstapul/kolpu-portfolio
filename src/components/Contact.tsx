import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone } from "lucide-react";
import { contactContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formPayload = {
        access_key: "13124e58-8c6d-44c7-96e5-33ab5211b5dc",
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "",
        date: formData.date || "",
        message: formData.message,
        botcheck: false,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", date: "", message: "" });
      } else {
        setSubmitStatus("error");
        toast({
          title: "Virhe",
          description: "Viestin lähetys epäonnistui. Yritä uudelleen.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setSubmitStatus("error");
      toast({
        title: "Virhe",
        description: "Viestin lähetys epäonnistui. Yritä uudelleen.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="yhteystiedot" className="pt-12 md:pt-16 lg:pt-20 pb-24 md:pb-32 lg:pb-40 px-6 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-[2.25rem] md:text-[2.7rem] lg:text-[3.6rem] font-light mb-12 md:mb-16"
        >
          Ota yhteyttä
        </motion.h1>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6">{contactContent.heading}</h2>
            <p className="text-primary-foreground/70 mb-12 max-w-md">
              {contactContent.subheading}
            </p>
            <div className="space-y-6">
              <a href={`mailto:${contactContent.email}`} className="flex items-center gap-4 group">
                <Mail size={20} className="text-primary-foreground/50 group-hover:text-primary-foreground transition-colors" />
                <span className="text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">{contactContent.email}</span>
              </a>
              <a href={`tel:${contactContent.phone}`} className="flex items-center gap-4 group">
                <Phone size={20} className="text-primary-foreground/50 group-hover:text-primary-foreground transition-colors" />
                <span className="text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">{contactContent.phone}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <p className="text-primary-foreground text-lg md:text-xl">
                  Kiitos viestistäsi! Palaan asiaan mahdollisimman pian.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="13124e58-8c6d-44c7-96e5-33ab5211b5dc" />
                <input type="checkbox" name="botcheck" className="hidden" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nimi"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Sähköposti"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Puhelinnumero"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground"
                  />
                  <input
                    type="date"
                    name="date"
                    placeholder="Tapahtuman päivämäärä"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input bg-transparent border-primary-foreground/20 text-primary-foreground focus:border-primary-foreground [color-scheme:dark]"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Kerro lyhyesti tapahtumasta"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="form-input bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground resize-none"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none px-12 py-6 text-sm tracking-wide uppercase flex items-center gap-3"
                >
                  {isSubmitting ? "Lähetetään..." : (
                    <>
                      Lähetä viesti
                      <Send size={16} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
