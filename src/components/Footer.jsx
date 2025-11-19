import React from 'react';

function Footer() {
  return (
    <footer className="relative px-4 pb-12 pt-16 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-8 text-center">
        <div className="soft-divider" />
        <p className="text-soft text-sm">
          <span className="group relative inline-flex flex-col items-center px-2 py-1">
            <span className="absolute inset-x-2 bottom-0 h-px bg-gradient-to-r from-transparent via-[#60a5fa]/60 to-transparent blur-sm opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="relative underline decoration-transparent group-hover:decoration-[#60a5fa]/60 underline-offset-4 transition">
              © 2025 Ravija Hettiarachchi
            </span>
          </span>
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-[0.6rem] uppercase tracking-[0.4em] text-white/40 sm:gap-6 sm:text-xs">
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
