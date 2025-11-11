import React from 'react';

function Footer() {
  return (
    <footer className="relative px-6 pb-12 pt-16">
      <div className="max-w-6xl mx-auto space-y-8 text-center">
        <div className="soft-divider" />
        <p className="text-soft text-sm">
          © {new Date().getFullYear()} Ravija — Designed with patience, crafted with intent.
        </p>
        <div className="flex justify-center gap-6 text-xs uppercase tracking-[0.4em] text-white/40">
          <a href="#projects" className="transition-colors hover:text-white">
            Projects
          </a>
          <a href="#about" className="transition-colors hover:text-white">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
