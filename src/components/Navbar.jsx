import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { 
      href: "#home", 
      label: "Home",
      activeColorClass: "border-[#ff7a32]/40 bg-gradient-to-r from-[#ff7a32]/20 to-[#ff934a]/20 text-[#ff7a32] shadow-[0_0_15px_rgba(255,122,50,0.25),inset_0_1px_1px_rgba(255,255,255,0.05)]",
      mobileActiveColorClass: "border-[#ff7a32]/35 bg-[#ff7a32]/10 text-[#ff7a32]",
      mobileBadgeColorClass: "bg-[#ff7a32] text-black"
    },
    { 
      href: "#about", 
      label: "About",
      activeColorClass: "border-[#ffa149]/40 bg-gradient-to-r from-[#ffa149]/20 to-[#ffd7ae]/20 text-[#ffa149] shadow-[0_0_15px_rgba(255,161,73,0.25),inset_0_1px_1px_rgba(255,255,255,0.05)]",
      mobileActiveColorClass: "border-[#ffa149]/35 bg-[#ffa149]/10 text-[#ffa149]",
      mobileBadgeColorClass: "bg-[#ffa149] text-black"
    },
    { 
      href: "#projects", 
      label: "Projects",
      activeColorClass: "border-[#00f0ff]/40 bg-gradient-to-r from-[#00f0ff]/20 to-[#00a2ff]/20 text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.25),inset_0_1px_1px_rgba(255,255,255,0.05)]",
      mobileActiveColorClass: "border-[#00f0ff]/35 bg-[#00f0ff]/10 text-[#00f0ff]",
      mobileBadgeColorClass: "bg-[#00f0ff] text-black"
    },
    { 
      href: "#photography", 
      label: "Photography",
      activeColorClass: "border-[#39ff14]/40 bg-gradient-to-r from-[#39ff14]/20 to-[#00ff87]/20 text-[#39ff14] shadow-[0_0_15px_rgba(57,255,20,0.25),inset_0_1px_1px_rgba(255,255,255,0.05)]",
      mobileActiveColorClass: "border-[#39ff14]/35 bg-[#39ff14]/10 text-[#39ff14]",
      mobileBadgeColorClass: "bg-[#39ff14] text-black"
    },
    { 
      href: "#contact", 
      label: "Contact",
      activeColorClass: "border-[#ef4444]/40 bg-gradient-to-r from-[#ef4444]/20 to-[#ff4b4b]/20 text-[#ef4444] shadow-[0_0_15px_rgba(239,68,68,0.25),inset_0_1px_1px_rgba(255,255,255,0.05)]",
      mobileActiveColorClass: "border-[#ef4444]/35 bg-[#ef4444]/10 text-[#ef4444]",
      mobileBadgeColorClass: "bg-[#ef4444] text-black"
    },
  ];

  // Handle scroll events to morph the navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active section on scroll using Intersection Observer
  useEffect(() => {
    const sections = ["home", "about", "projects", "photography", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when the section occupies the center of the viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (event, target) => {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      // If locomotive scroll is initialized globally, use it
      if (window.__locomotiveScroll) {
        window.__locomotiveScroll.scrollTo(element, {
          duration: 1.2,
          easing: [0.25, 1, 0.5, 1], // modern cubic bezier
        });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "top-4 w-[92%] max-w-[75rem] rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] py-2.5 px-6 sm:px-8 md:px-10"
          : "top-0 w-full border-b border-white/5 bg-[rgba(15,6,2,0.45)] backdrop-blur-lg py-5 px-6 sm:px-8 md:px-12 md:py-6"
      }`}
    >
      <div className="mx-auto flex w-full items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center justify-start transition-all duration-500 ${
              isScrolled ? "h-10 md:h-11" : "h-14 md:h-16"
            }`}
          >
            {!logoFailed ? (
              <img
                src="/mylogo.png"
                onError={() => setLogoFailed(true)}
                alt="Ravija personal logo"
                className="h-full w-auto max-w-full object-contain drop-shadow-[0_4px_12px_rgba(255,122,50,0.25)]"
              />
            ) : (
              <div className="flex items-center gap-2.5 select-none">
                <svg
                  className="h-8 w-8 text-[#ff7a32] filter drop-shadow-[0_0_8px_rgba(255,122,50,0.45)] transition-all duration-500"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="50,5 90,28 90,72 50,95 10,72 10,28"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="rgba(255,122,50,0.12)"
                  />
                  <path
                    d="M38,30 H55 C63,30 63,42 55,42 H38 V65 M38,42 H49 L62,65"
                    stroke="currentColor"
                    strokeWidth="6.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-lg font-bold tracking-wider text-white">
                  RAVIJA
                  <span className="text-[#ff7a32] animate-pulse">.</span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Items (Desktop) */}
        <div
          className={`hidden items-center gap-2.5 rounded-full border border-white/5 bg-white/5 px-2.5 py-1.5 text-xs text-white/70 lg:text-sm md:flex transition-all duration-500 ${
            isScrolled ? "scale-95" : ""
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-5 py-2.5 text-xs lg:text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? `${item.activeColorClass} scale-110`
                    : "border-transparent text-white/70 hover:text-white hover:bg-white/5 hover:scale-105"
                }`}
                onClick={(event) => handleNavClick(event, item.href)}
              >
                {item.label}
              </a>
            );
          })}
        </div>



        {/* Hamburger Menu Trigger (Mobile) */}
        <button
          className="md:hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-5.5 w-5.5"
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

      {/* Mobile Menu Dropdown (Floating Card styling) */}
      {isMenuOpen && (
        <div className="absolute top-[calc(100%+0.75rem)] left-0 right-0 rounded-[2rem] border border-white/10 bg-black/95 backdrop-blur-xl p-5 shadow-[0_25px_50px_rgba(0,0,0,0.9)] md:hidden animate-fade-in">
          <div className="space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-2xl border px-5 py-3.5 transition-all duration-300 ${
                    isActive
                      ? `${item.mobileActiveColorClass} font-bold scale-[1.02]`
                      : "border-white/5 bg-white/5 text-white/70 hover:border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={(event) => handleNavClick(event, item.href)}
                >
                  <span className="font-semibold text-sm">{item.label}</span>
                  <span
                    className={`text-[0.65rem] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold transition-all duration-300 ${
                      isActive
                        ? item.mobileBadgeColorClass
                        : "bg-white/10 text-white/50"
                    }`}
                  >
                    {isActive ? "Active" : "Go"}
                  </span>
                </a>
              );
            })}

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
