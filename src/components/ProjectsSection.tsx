import { motion } from "framer-motion";
import { ScanFace } from "lucide-react";

const ProjectsSection = () => (
  <section id="projects" className="py-28">
    <div className="container">
      <span className="font-display uppercase text-xs tracking-widest text-primary block mb-12">
        03 // Featured Work
      </span>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-surface border border-border rounded-3xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      >
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <span className="text-primary text-sm mb-3">
            Python • FastAPI • SQL • AI
          </span>
          <h4 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Face Recognition System
          </h4>
          <p className="text-text-dim leading-relaxed mb-6">
            A high-performance recognition engine using AI/ML models for
            real-time face detection, served via a robust FastAPI backend
            connected to a SQL database.
          </p>
          <ul className="text-text-dim text-sm space-y-2 mb-6">
            <li>→ Integrated AI/ML model for face detection</li>
            <li>→ Built REST APIs using FastAPI</li>
            <li>→ Connected application with SQL database</li>
          </ul>
          <a href="#" className="text-foreground font-medium hover:text-primary transition-colors">
            View Documentation →
          </a>
        </div>
        <div className="bg-surface-bright flex items-center justify-center min-h-[250px]">
          <ScanFace className="text-border" size={96} strokeWidth={1} />
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
