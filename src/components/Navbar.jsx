import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (event, target) => {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(15,6,2,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[95rem] items-center justify-between px-10 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-28 items-center justify-start md:h-16 md:w-32">
            <img
              src="/mylogo.png"
              alt="Ravija personal logo"
              className="h-full w-auto max-w-full object-contain drop-shadow-[0_6px_18px_rgba(255,122,50,0.35)]"
            />
          </div>
        </div>

        <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 transition duration-300 hover:text-white hover:bg-white/10"
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            onClick={(event) => handleNavClick(event, "#contact")}
            className="rounded-full border border-[#ff8a3d]/40 bg-gradient-to-r from-[#ff7a32] to-[#ff934a] px-6 py-2 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(255,138,61,0.35)] transition hover:shadow-[0_16px_40px_rgba(255,138,61,0.45)]"
          >
            Hire me
          </a>
          <a
            href="/resume.pdf"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
          >
            Download CV
          </a>
        </div>

        <button
          className="md:hidden rounded-full border border-white/10 bg-white/5 p-2 text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[rgba(10,4,1,0.92)] backdrop-blur-lg md:hidden">
          <div className="space-y-4 px-6 py-6 text-base">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition duration-300 hover:border-[#ff8a3d]/50 hover:bg-[#ff8a3d]/10 hover:text-white"
                onClick={(event) => handleNavClick(event, item.href)}
              >
                <span>{item.label}</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Go</span>
              </a>
            ))}
            <div className="flex items-center justify-center gap-3">
              <a
                href="#contact"
                onClick={(event) => handleNavClick(event, "#contact")}
                className="flex-1 rounded-full border border-[#ff8a3d]/40 bg-gradient-to-r from-[#ff7a32] to-[#ff934a] px-4 py-2 text-sm font-semibold text-black"
              >
                Hire me
              </a>
              <a
                href="/resume.pdf"
                className="flex-1 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
