import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Lightbulb, Users, Award, ArrowRight } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import farmersImg from "@/assets/farmers-community.jpg";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Leaf, title: "Sustainability", desc: "Every decision we make prioritizes long-term environmental health and resource conservation." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace cutting-edge technology and creative solutions to solve agricultural challenges." },
  { icon: Users, title: "Community", desc: "Our work is rooted in partnership with the farming communities we serve." },
  { icon: Award, title: "Quality", desc: "We maintain the highest standards in everything from advisory services to crop output." },
];

const timeline = [
  { year: "2015", title: "Founded", desc: "plantED was established with a mission to modernize smallholder farming." },
  { year: "2017", title: "First 1,000 Farmers", desc: "Reached our first milestone of supporting 1,000 farmers across East Africa." },
  { year: "2019", title: "Agritech Launch", desc: "Introduced our smart farming technology platform for precision agriculture." },
  { year: "2021", title: "Regional Expansion", desc: "Expanded operations to five countries across Sub-Saharan Africa." },
  { year: "2023", title: "Impact Award", desc: "Recognized by the UN Food Programme for outstanding contribution to food security." },
  { year: "2025", title: "10K+ Farmers", desc: "Surpassed 12,500 farmers supported with sustainable practices." },
];

const team = [
  { name: "Dr. Amina Mwangi", role: "Founder & CEO", bio: "Agricultural scientist with 20 years of experience in sustainable farming." },
  { name: "James Kariuki", role: "CTO", bio: "Tech leader specializing in agricultural data systems and IoT solutions." },
  { name: "Sarah Okonkwo", role: "Head of Operations", bio: "Operations expert with deep roots in community development programs." },
  { name: "David Mutua", role: "Director of Research", bio: "Crop scientist leading research in climate-resilient agriculture." },
];

const About = () => (
  <div className="overflow-hidden">
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center hill-divider">
      <img src={aboutHero} alt="Rolling green hills" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative z-10 container-planted px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">About plantED</h1>
          <p className="mt-4 text-primary-foreground/80 max-w-xl text-lg">Our story, mission, and the people driving change in agriculture.</p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="container-planted grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Our Story</span>
          <h2 className="text-3xl font-display font-bold text-foreground">From a Seed of an Idea to a Growing Movement</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            plantED began in 2015 when a group of agricultural scientists and community advocates recognized the urgent need to bridge the gap between modern farming innovation and smallholder farmers. What started as a small consultancy has grown into a comprehensive agricultural solutions provider.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Today, we serve over 12,500 farmers across multiple countries, helping them adopt sustainable practices, integrate smart technology, and access broader markets for their produce.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={farmersImg} alt="Community farming" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-secondary">
      <div className="container-planted grid md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-card border border-border">
          <h3 className="text-2xl font-display font-bold text-card-foreground mb-4">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">To empower farming communities with sustainable agricultural solutions, innovative technology, and comprehensive training that ensures food security and economic prosperity for generations to come.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 rounded-2xl bg-card border border-border">
          <h3 className="text-2xl font-display font-bold text-card-foreground mb-4">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">A world where every farmer has access to the tools, knowledge, and markets needed to thrive—where agriculture is both a driver of economic growth and a guardian of our planet's resources.</p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="container-planted">
        <SectionHeading label="Core Values" title="What Drives Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-card border border-border text-center hover-lift">
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <v.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-card-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-secondary">
      <div className="container-planted">
        <SectionHeading label="Leadership" title="Meet Our Team" description="The passionate individuals leading plantED's mission." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-card border border-border text-center hover-lift">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-card-foreground">{t.name}</h3>
              <p className="text-sm text-primary font-medium">{t.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding">
      <div className="container-planted">
        <SectionHeading label="Our Journey" title="Key Milestones" />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-start gap-4 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:text-${i % 2 === 0 ? "right" : "left"}`}
            >
              <div className="hidden md:block flex-1" />
              <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-primary-foreground" />
              </div>
              <div className="flex-1 p-4 rounded-xl bg-card border border-border">
                <span className="text-sm font-semibold text-primary">{t.year}</span>
                <h4 className="font-display font-semibold text-card-foreground">{t.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding gradient-cta">
      <div className="container-planted text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">Join Our Mission</h2>
        <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Partner with us to transform agriculture and empower farming communities.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity">
          Contact Us <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default About;
