const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-text-dim text-sm">© 2024 Aakash K. Built with Precision.</p>
      <div className="flex gap-6 text-sm">
        <a
          href="https://www.linkedin.com/in/aakash06112005"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-dim hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="text-text-dim hover:text-foreground transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
