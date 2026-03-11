import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Cpu, Users, ShieldCheck, ArrowRight, Sprout, BarChart3, GraduationCap, Globe } from "lucide-react";
import heroFarm from "@/assets/hero-farm.jpg";
import farmersImg from "@/assets/farmers-community.jpg";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const highlights = [
  { icon: Leaf, title: "Sustainable Farming", desc: "Eco-friendly practices for a greener tomorrow" },
  { icon: Cpu, title: "Smart Practices", desc: "Data-driven agriculture for better yields" },
  { icon: Users, title: "Farmer Empowerment", desc: "Building capacity in rural communities" },
  { icon: ShieldCheck, title: "Food Security", desc: "Ensuring sustainable food systems for all" },
];

const services = [
  { icon: Sprout, title: "Agricultural Consulting", desc: "Expert advice for modern farming operations" },
  { icon: BarChart3, title: "Farm Management", desc: "End-to-end farm management solutions" },
  { icon: Leaf, title: "Crop Production", desc: "Advanced crop production and support" },
  { icon: Cpu, title: "Agritech Integration", desc: "Smart technology solutions for farms" },
  { icon: GraduationCap, title: "Training Programs", desc: "Building farmer skills and knowledge" },
  { icon: Globe, title: "Market Access", desc: "Connecting farmers to wider markets" },
];

const stats = [
  { value: 12500, suffix: "+", label: "Farmers Supported" },
  { value: 85000, suffix: "+", label: "Acres Managed" },
  { value: 200000, suffix: "+", label: "Tons Harvested" },
  { value: 350, suffix: "+", label: "Communities Impacted" },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center hill-divider">
        <img src={heroFarm} alt="Lush farmland at sunrise" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 container-planted px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-semibold mb-6 backdrop-blur-sm">
              🌱 Sustainable Agriculture for Tomorrow
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight max-w-4xl mx-auto">
              Growing the Future of Sustainable Agriculture
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Empowering farmers with innovative solutions, smart technology, and sustainable practices to build resilient food systems worldwide.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity text-base"
              >
                Our Solutions <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors text-base"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding">
        <div className="container-planted">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-card border border-border hover-lift text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <h.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-card-foreground">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-planted">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={farmersImg} alt="Farmers working together" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">About plantED</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground">
                Transforming Agriculture for a Better World
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                At plantED, we believe in the power of sustainable agriculture to transform lives and communities. Through innovative farming practices, technology integration, and farmer empowerment programs, we're building resilient food systems that nourish both people and the planet.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Founded on the principles of sustainability, innovation, and community, we work alongside farmers to unlock the full potential of their land while preserving it for future generations.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-planted">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            description="Comprehensive agricultural solutions designed to drive sustainable growth and empower farming communities."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-card border border-border hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-leaf-light flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-card-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding gradient-cta hill-divider hill-divider-green">
        <div className="container-planted relative z-10">
          <SectionHeading label="Our Impact" title="Making a Difference" description="Real results that demonstrate our commitment to sustainable agriculture and farmer empowerment." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-primary-foreground/70 text-sm font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container-planted">
          <SectionHeading label="Testimonials" title="What Farmers Say" description="Hear from the communities we've worked with across the region." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "plantED transformed our farm's productivity by 200%. Their smart irrigation solutions saved us water and money.", name: "Mary Wanjiku", role: "Smallholder Farmer, Kenya" },
              { quote: "The training programs gave our cooperative the knowledge to compete in modern agricultural markets.", name: "Samuel Ochieng", role: "Cooperative Leader, Uganda" },
              { quote: "Working with plantED has been a game-changer for our community. We now have food security year-round.", name: "Fatima Ahmed", role: "Community Leader, Tanzania" },
            ].map((t, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <p className="text-muted-foreground italic leading-relaxed">"{t.quote}"</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding">
        <div className="container-planted">
          <SectionHeading label="Our Partners" title="Trusted Collaborators" description="Working alongside leading organizations to transform agriculture." />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {["AgriTech Corp", "FarmWise", "GreenGrow", "CropData", "SoilSense", "HarvestHub"].map((name) => (
              <div key={name} className="text-center p-4">
                <div className="h-12 flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-foreground">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-cta">
        <div className="container-planted text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              Partner With Us to Transform Agriculture
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              Join our mission to build sustainable food systems and empower farming communities worldwide.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
