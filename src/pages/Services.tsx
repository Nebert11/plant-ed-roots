import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sprout, Cpu, BarChart3, Leaf, GraduationCap, Globe, ArrowRight } from "lucide-react";
import agritech from "@/assets/agritech.jpg";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: Sprout, title: "Sustainable Farming Solutions", desc: "We implement regenerative agriculture practices that restore soil health, conserve water, and increase biodiversity while maintaining profitable yields.", features: ["Soil health restoration", "Water conservation systems", "Organic farming transition", "Biodiversity management"] },
  { icon: Cpu, title: "Agricultural Technology Integration", desc: "Leverage IoT sensors, drones, and data analytics to make informed decisions about crop management, irrigation, and pest control.", features: ["IoT sensor networks", "Drone crop monitoring", "Predictive analytics", "Automated irrigation"] },
  { icon: BarChart3, title: "Farm Operations Management", desc: "End-to-end management solutions covering planning, execution, monitoring, and optimization of all farm activities.", features: ["Production planning", "Resource management", "Supply chain optimization", "Financial tracking"] },
  { icon: Leaf, title: "Crop Advisory & Consultancy", desc: "Expert agronomists provide personalized guidance on crop selection, nutrient management, disease prevention, and harvest optimization.", features: ["Crop selection guidance", "Nutrient management", "Disease prevention", "Harvest optimization"] },
  { icon: GraduationCap, title: "Agricultural Training Programs", desc: "Comprehensive capacity-building programs designed to equip farmers with modern skills and best practices.", features: ["Hands-on workshops", "Digital literacy", "Business skills", "Climate-smart techniques"] },
  { icon: Globe, title: "Market Access & Value Chain Support", desc: "Connecting farmers to local and international markets while building efficient value chains from farm to fork.", features: ["Market linkages", "Quality standards", "Post-harvest handling", "Export facilitation"] },
];

const Services = () => (
  <div className="overflow-hidden">
    <section className="relative h-[50vh] min-h-[400px] flex items-center hill-divider">
      <img src={agritech} alt="Agricultural technology" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative z-10 container-planted px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Our Services</h1>
          <p className="mt-4 text-primary-foreground/80 max-w-xl text-lg">Comprehensive agricultural solutions tailored to your needs.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-planted">
        <SectionHeading label="What We Offer" title="End-to-End Agricultural Solutions" description="From consulting and technology to training and market access, we cover every aspect of modern farming." />
        <div className="space-y-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid md:grid-cols-[auto_1fr] gap-6 p-6 md:p-8 rounded-2xl bg-card border border-border hover-lift"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <s.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-card-foreground">{s.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Leaf className="h-3 w-3 text-primary flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding gradient-cta">
      <div className="container-planted text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">Ready to Get Started?</h2>
        <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Let's discuss how our solutions can transform your agricultural operations.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity">
          Contact Us <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default Services;
