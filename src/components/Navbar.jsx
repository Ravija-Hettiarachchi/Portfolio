import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0D0D0D] backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#00F6FF] shadow-[0_0_15px_#00F6FF]">Ravija</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white/90 hover:text-[#00F6FF] transition-all duration-300">Home</a>
          <a href="#about" className="text-white/90 hover:text-[#00F6FF] transition-all duration-300">About</a>
          <a href="#projects" className="text-white/90 hover:text-[#00F6FF] transition-all duration-300">Projects</a>
          <a href="#contact" className="text-white/90 hover:text-[#00F6FF] transition-all duration-300">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#home"
              className="block text-white/90 hover:text-[#00F6FF] transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-white/90 hover:text-[#00F6FF] transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block text-white/90 hover:text-[#00F6FF] transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block text-white/90 hover:text-[#00F6FF] transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
