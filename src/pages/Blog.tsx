import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import freshProduce from "@/assets/fresh-produce.jpg";
import agritech from "@/assets/agritech.jpg";
import consulting from "@/assets/consulting.jpg";
import training from "@/assets/training.jpg";
import SectionHeading from "@/components/SectionHeading";

const posts = [
  { title: "5 Climate-Smart Agriculture Techniques Every Farmer Should Know", excerpt: "Discover proven techniques that help farmers adapt to changing climate conditions while maintaining productivity.", image: agritech, date: "Mar 5, 2026", readTime: "6 min", category: "Climate-Smart" },
  { title: "The Future of Precision Agriculture in Africa", excerpt: "How IoT sensors, drones, and AI are revolutionizing farming practices across the continent.", image: consulting, date: "Feb 20, 2026", readTime: "8 min", category: "Agritech" },
  { title: "From Farm to Fork: Building Sustainable Food Supply Chains", excerpt: "A comprehensive look at how modern supply chains can reduce waste and improve farmer incomes.", image: freshProduce, date: "Feb 10, 2026", readTime: "5 min", category: "Sustainability" },
  { title: "Empowering Women in Agriculture: Stories of Change", excerpt: "How targeted training programs are helping women farmers become leaders in their communities.", image: training, date: "Jan 28, 2026", readTime: "7 min", category: "Community" },
  { title: "Soil Health: The Foundation of Productive Farming", excerpt: "Understanding soil biology and practical steps to restore and maintain healthy soils.", image: agritech, date: "Jan 15, 2026", readTime: "6 min", category: "Farming" },
  { title: "Agribusiness Trends to Watch in 2026", excerpt: "Key trends shaping the agricultural industry this year and beyond.", image: consulting, date: "Jan 5, 2026", readTime: "5 min", category: "Business" },
];

const Blog = () => (
  <div className="overflow-hidden">
    <section className="relative h-[40vh] min-h-[350px] flex items-center hill-divider">
      <img src={freshProduce} alt="Fresh produce" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative z-10 container-planted px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Blog & Insights</h1>
          <p className="mt-4 text-primary-foreground/80 max-w-xl text-lg">Expert perspectives on modern agriculture and sustainability.</p>
        </motion.div>
      </div>
    </section>

    {/* Featured */}
    <section className="section-padding">
      <div className="container-planted">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 mb-16 p-6 rounded-2xl bg-card border border-border hover-lift">
          <img src={posts[0].image} alt={posts[0].title} className="rounded-xl w-full object-cover aspect-video" />
          <div className="flex flex-col justify-center">
            <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">{posts[0].category}</span>
            <h2 className="text-2xl font-display font-bold text-card-foreground">{posts[0].title}</h2>
            <p className="mt-3 text-muted-foreground">{posts[0].excerpt}</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar size={14} /> {posts[0].date}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {posts[0].readTime}</span>
            </div>
            <button className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:gap-3 transition-all">
              Read More <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        <SectionHeading label="Latest Articles" title="Stay Informed" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-card border border-border overflow-hidden hover-lift group"
            >
              <div className="overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">{p.category}</span>
                <h3 className="font-display font-semibold text-card-foreground line-clamp-2">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {p.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {p.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
