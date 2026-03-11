import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Globe2, Landmark, FlaskConical } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import aboutHero from "@/assets/about-hero.jpg";

const categories = [
  { icon: Building2, title: "Strategic Partners", partners: ["AgriTech Corp", "FarmWise Solutions", "GreenGrow International", "CropData Systems"] },
  { icon: Globe2, title: "NGOs & Development", partners: ["World Food Programme", "AGRA", "Farm Africa", "CARE International"] },
  { icon: Landmark, title: "Government Bodies", partners: ["Ministry of Agriculture Kenya", "Uganda NAADS", "Tanzania ASDP", "Rwanda Agriculture Board"] },
  { icon: FlaskConical, title: "Research Institutions", partners: ["CGIAR", "ICRISAT", "University of Nairobi", "Makerere University"] },
];

const Partners = () => (
  <div className="overflow-hidden">
    <section className="relative h-[40vh] min-h-[350px] flex items-center hill-divider">
      <img src={aboutHero} alt="Partnership landscape" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative z-10 container-planted px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Our Partners</h1>
          <p className="mt-4 text-primary-foreground/80 max-w-xl text-lg">Collaborating with leading organizations to drive agricultural transformation.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-planted">
        <SectionHeading label="Collaborations" title="Working Together for Impact" description="We partner with organizations across sectors to deliver comprehensive agricultural solutions." />
        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover-lift"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <cat.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-card-foreground mb-4">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.partners.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding gradient-cta">
      <div className="container-planted text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">Become a Partner</h2>
        <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Join our network of organizations committed to sustainable agriculture.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity">
          Get in Touch <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default Partners;
