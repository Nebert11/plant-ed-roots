import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ label, title, description, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    {label && (
      <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
        {label}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{title}</h2>
    {description && (
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
