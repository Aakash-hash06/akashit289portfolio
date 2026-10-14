import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-28">
    <div className="container grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display uppercase text-xs tracking-widest text-primary"
      >
        01 // About
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-text-dim text-lg leading-relaxed mb-8 max-w-xl">
          Enthusiastic Information Technology student with strong foundations in
          Python and web development. I bridge the gap between complex AI models
          and functional REST APIs, building scalable backend architectures.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { val: "OCI", label: "GenAI Certified" },
            { val: "Python", label: "Expertise" },
            { val: "FastAPI", label: "Framework" },
            { val: "AI/ML", label: "Integration" },
          ].map((s) => (
            <div
              key={s.val}
              className="bg-surface border border-border rounded-lg p-5 text-center"
            >
              <span className="font-display text-lg font-bold text-foreground block">
                {s.val}
              </span>
              <span className="text-xs text-text-dim">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
