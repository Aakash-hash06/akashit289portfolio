import { motion } from "framer-motion";

const certs = [
  { name: "Oracle OCI Generative AI Certified Professional", year: "2024" },
  { name: "NASSCOM Cybersecurity Analysis & Design", year: "2023" },
  { name: "HackerRank Python & MySQL", year: "2023" },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-28">
    <div className="container">
      <span className="font-display uppercase text-xs tracking-widest text-primary block mb-12">
        04 // Certifications
      </span>
      <div>
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex justify-between items-center py-5 border-b border-border"
          >
            <span className="text-foreground">{c.name}</span>
            <span className="text-text-dim text-sm">{c.year}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
