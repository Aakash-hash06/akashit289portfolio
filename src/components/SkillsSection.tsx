import { motion } from "framer-motion";
import { Code, Database, Brain, Globe, Server, Cpu } from "lucide-react";

const skills = [
  { name: "Python", icon: Code },
  { name: "FastAPI", icon: Server },
  { name: "Java", icon: Cpu },
  { name: "SQL & MongoDB", icon: Database },
  { name: "JavaScript", icon: Globe },
  { name: "AI/ML Integration", icon: Brain },
];

const SkillsSection = () => (
  <section id="skills" className="py-28 bg-surface">
    <div className="container">
      <span className="font-display uppercase text-xs tracking-widest text-primary block mb-4">
        02 // Tech Stack
      </span>
      <h3 className="font-display text-3xl font-bold mb-12">Core Competencies</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-background border border-border rounded-lg p-6 text-center hover:border-primary hover:scale-[1.02] transition-all cursor-default"
          >
            <s.icon className="mx-auto mb-3 text-primary" size={28} />
            <span className="text-sm font-medium">{s.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
