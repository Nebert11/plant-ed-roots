import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, TrendingUp } from "lucide-react";
import farmersImg from "@/assets/farmers-community.jpg";
import freshProduce from "@/assets/fresh-produce.jpg";
import training from "@/assets/training.jpg";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    title: "Kilifi County Smart Irrigation",
    location: "Kilifi, Kenya",
    image: farmersImg,
    impact: "300% increase in water efficiency",
    desc: "Implemented IoT-based drip irrigation across 2,000 acres, serving 450 farmers in semi-arid conditions. The project reduced water usage by 70% while tripling crop yields.",
    results: ["450 farmers reached", "2,000 acres irrigated", "70% water savings", "3x yield increase"],
  },
  {
    title: "Urban Farming Initiative",
    location: "Nairobi, Kenya",
    image: freshProduce,
    impact: "5,000 households fed with fresh produce",
    desc: "Established vertical farming and hydroponics systems in urban areas, creating local food production capacity and 200+ jobs in peri-urban communities.",
    results: ["200+ jobs created", "50 urban farms", "5,000 households served", "Year-round production"],
  },
  {
    title: "Farmer Training Academy",
    location: "Kampala, Uganda",
    image: training,
    impact: "3,000 farmers graduated",
    desc: "A comprehensive training program covering modern farming techniques, business management, and climate-smart agriculture for smallholder farmers.",
    results: ["3,000 graduates", "85% adoption rate", "40% income increase", "12 training centers"],
  },
];

const Projects = () => (
  <div className="overflow-hidden">
    <section className="relative h-[50vh] min-h-[400px] flex items-center hill-divider">
      <img src={farmersImg} alt="Community farming project" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative z-10 container-planted px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Our Projects</h1>
          <p className="mt-4 text-primary-foreground/80 max-w-xl text-lg">Real impact in real communities across the region.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-planted">
        <SectionHeading label="Impact Stories" title="Transforming Communities" description="Explore how our projects are making measurable differences in farming communities." />
        <div className="space-y-16">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? "md:direction-rtl" : ""}`}
            >
              <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                <img src={p.image} alt={p.title} className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
              </div>
              <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin size={14} /> {p.location}
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">{p.title}</h3>
                <div className="flex items-center gap-2 mt-2 text-primary font-semibold text-sm">
                  <TrendingUp size={16} /> {p.impact}
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {p.results.map((r) => (
                    <div key={r} className="px-3 py-2 rounded-lg bg-secondary text-sm text-secondary-foreground font-medium">{r}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding gradient-cta">
      <div className="container-planted text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">Want to Create Impact Together?</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity">
          Partner With Us <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default Projects;
