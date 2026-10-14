import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Let's build <br />
              <span className="text-primary">something together.</span>
            </h3>
            <p className="text-text-dim mb-2">aakashit289@gmail.com</p>
            <p className="text-text-dim">+91 7010961039</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              className="bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-text-dim focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-text-dim focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-text-dim focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className={`py-3.5 rounded-lg font-medium transition-all ${
                submitted
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground text-background hover:-translate-y-0.5 hover:opacity-90"
              }`}
            >
              {submitted ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
