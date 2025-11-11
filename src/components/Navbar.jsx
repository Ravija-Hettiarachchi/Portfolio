import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-gradient-to-b from-[#0d0224]/90 via-[#0d0224]/70 to-transparent backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold gradient-title drop-shadow-[0_0_18px_rgba(96,165,250,0.25)]">
          Ravija
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <button
          className="md:hidden rounded-full border border-white/5 bg-white/5 p-2 text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-gradient-to-b from-[#13052f]/90 via-[#0f0424]/85 to-[#080016]/90 backdrop-blur-xl">
          <div className="px-6 py-5 space-y-4 text-base">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-white/80 transition duration-300 hover:border-white/15 hover:bg-white/10 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.label}</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Go</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
