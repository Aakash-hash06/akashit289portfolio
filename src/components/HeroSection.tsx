import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center pt-[120px] pb-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block border border-primary text-primary rounded-full px-4 py-1.5 text-xs mb-8">
            Available for Internships 2024
          </span>
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-bold tracking-[-0.04em] leading-[0.9] mb-4">
            Aakash K
          </h1>
          <h2 className="text-[clamp(1.25rem,3vw,2rem)] text-text-dim font-light mb-8">
            B.Tech IT Student &{" "}
            <span className="text-primary">Junior Developer</span>
          </h2>
          <p className="max-w-[500px] text-text-dim text-lg mb-10">
            Specializing in Python, FastAPI, and AI-driven backend systems.
            Based in Cuddalore, TN.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-foreground text-background px-7 py-3.5 rounded-lg font-medium hover:-translate-y-0.5 hover:opacity-90 transition-all"
            >
              View Work
            </a>
            <a
              href="mailto:aakashit289@gmail.com"
              className="border border-border text-foreground px-7 py-3.5 rounded-lg hover:bg-surface transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
