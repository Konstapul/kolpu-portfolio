import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { contactContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Viesti lähetetty",
      description: "Kiitos yhteydenotostasi. Palaan asiaan 24 tunnin sisällä.",
    });
    setFormData({ name: "", email: "", date: "", projectType: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="yhteystiedot" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
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
              <div className="flex items-center gap-4">
                <MapPin size={20} className="text-primary-foreground/50" />
                <span className="text-primary-foreground/70">{contactContent.location}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Nimesi" value={formData.name} onChange={handleChange} required className="form-input bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground" />
                <input type="email" name="email" placeholder="Sähköpostisi" value={formData.email} onChange={handleChange} required className="form-input bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-input bg-transparent border-primary-foreground/20 text-primary-foreground focus:border-primary-foreground [color-scheme:dark]" />
                <select name="projectType" value={formData.projectType} onChange={handleChange} required className="form-input bg-transparent border-primary-foreground/20 text-primary-foreground focus:border-primary-foreground appearance-none cursor-pointer">
                  <option value="" disabled className="bg-primary text-primary-foreground">Projektin tyyppi</option>
                  {contactContent.projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-primary text-primary-foreground">{type}</option>
                  ))}
                </select>
              </div>
              <textarea name="message" placeholder="Kerro projektistasi..." value={formData.message} onChange={handleChange} rows={4} className="form-input bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground resize-none" />
              <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none px-12 py-6 text-sm tracking-wide uppercase flex items-center gap-3">
                {isSubmitting ? "Lähetetään..." : (<>Lähetä viesti<Send size={16} /></>)}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
