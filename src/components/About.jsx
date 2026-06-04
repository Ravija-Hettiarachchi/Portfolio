import React, { useState, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const pillars = [
  {
    title: "Human-first security",
    badge: "Human-first",
    detail:
      "Pair class projects with UX-style interviews so even beginner security tools feel friendly for classmates and mentors.",
    stat: "3 days",
    statLabel: "idea → prototype",
  },
  {
    title: "Automation mindset",
    badge: "Automation",
    detail:
      "Build small Python and JavaScript helpers to remove repetitive lab steps and keep focus on the learning goal.",
    stat: "10+",
    statLabel: "mini automations built",
  },
  {
    title: "Coaching & clarity",
    badge: "Coaching",
    detail:
      "Turn every lesson into blog recaps and peer study guides so friends can follow along with fewer blockers.",
    stat: "6",
    statLabel: "peer workshops led",
  },
];

const badges = [
  {
    name: "Cyber Threat Management",
    issuer: "Network Acedemy / CISCO",
    date: "2026",
    image: "/cyber-threat-management.png",
    icon: (
      <svg className="h-11 w-11 text-[#ffa149] filter drop-shadow-[0_0_6px_rgba(255,161,73,0.45)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    description: "Professional credential covering threat detection, network security, packet analysis, and Python scripting."
  },
  {
    name: "TryHackMe Elite 1%",
    issuer: "TryHackMe Platform",
    date: "Active",
    image: "/tryhackme_badge.png",
    icon: (
      <svg className="h-11 w-11 text-[#ff7a32] filter drop-shadow-[0_0_6px_rgba(255,122,50,0.45)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    description: "Hands-on CTF labs covering penetration testing, web app vulnerability analysis, and privilege escalation."
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA Pathway",
    date: "In Progress",
    image: "/securityplus_badge.png",
    icon: (
      <svg className="h-11 w-11 text-[#ffd7ae] filter drop-shadow-[0_0_6px_rgba(255,215,174,0.45)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    description: "Focusing on risk assessment, threat intelligence, security architecture, and incident response operations."
  }
];

function About() {
  const revealRef = useScrollReveal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerSlide = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(badges.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (totalSlides <= 1) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [totalSlides, isMobile]);

  return (
    <section
      id="about"
      ref={revealRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#080301] via-[#0d0401] to-[#120601] px-4 py-12 text-white sm:px-6 sm:py-16"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40" />
        <div className="absolute left-10 top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.22),transparent_70%)] blur-3xl opacity-60" />
        <div className="absolute right-4 bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,176,122,0.18),transparent_70%)] blur-3xl opacity-50" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <div className="space-y-4">
          <p className="reveal-on-scroll delay-100 text-xs uppercase tracking-[0.5em] text-[#ff8a3d]">About</p>
          <h2 className="reveal-on-scroll delay-200 text-3xl font-bold text-white sm:text-4xl">Secure journeys through curiosity and constant learning</h2>
          <p className="reveal-on-scroll delay-300 text-base text-white/70 sm:text-lg">
            I’m Ravija Hettiarachchi, an undergraduate ICT student and cybersecurity enthusiast.
            <br className="hidden sm:block" />
            I focus on learning new technologies every day and turning complex technical ideas into simple, practical solutions that people
            can actually use.
          </p>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`reveal-on-scroll delay-${(index + 1) * 100} group flex flex-col gap-5 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 text-center shadow-[0_30px_80px_rgba(8,3,1,0.5)] transition duration-300 hover:border-[#ff8a3d]/35 hover:shadow-[0_40px_90px_rgba(255,138,61,0.35)]`}
            >
              <span className="mx-auto inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#ff7a32] to-[#ffa149] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-black shadow-[0_20px_50px_rgba(255,122,50,0.35)]">
                {pillar.badge}
              </span>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/50">{pillar.statLabel}</p>
                <p className="text-4xl font-semibold text-white">{pillar.stat}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm text-white/80">{pillar.detail}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Digital Credentials Subsection with Moving Slider */}
        <div className="w-full space-y-8 mt-6 pt-4 border-t border-white/5 relative">
          <div className="space-y-3">
            <p className="reveal-on-scroll delay-100 text-xs uppercase tracking-[0.5em] text-[#ff8a3d]">Credentials & Verification</p>
            <h3 className="reveal-on-scroll delay-200 text-2xl font-bold text-white">Digital Badges</h3>
            <p className="reveal-on-scroll delay-300 text-sm text-white/65 max-w-xl mx-auto">
              Sectors and security frameworks I study to support cybersecurity and operational systems.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-12">

            {/* Sliding viewport */}
            <div className="overflow-hidden w-full rounded-[28px]">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIdx) => (
                  <div key={slideIdx} className="grid grid-cols-1 md:grid-cols-2 gap-5 min-w-full px-1">
                    {badges.slice(slideIdx * itemsPerSlide, slideIdx * itemsPerSlide + itemsPerSlide).map((badge) => (
                      <div
                        key={badge.name}
                        className="badge-card group p-6 text-left flex flex-col justify-between h-full min-h-[220px]"
                      >
                        <div className="badge-shine" />
                        <div className="badge-glow-ring" />

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/10 bg-white/5 text-white transition duration-500 group-hover:scale-110 shadow-[0_8px_20px_rgba(0,0,0,0.4)] group-hover:border-[#09f0ff]/70 overflow-hidden">
                              {badge.image ? (
                                <>
                                  <img
                                    src={badge.image}
                                    alt={badge.name}
                                    className="h-full w-full object-contain p-2"
                                    onError={(e) => {
                                      e.target.style.display = 'none';
                                      e.target.nextSibling.style.display = 'block';
                                    }}
                                  />
                                  <span style={{ display: 'none' }}>
                                    {badge.icon}
                                  </span>
                                </>
                              ) : (
                                badge.icon
                              )}
                            </span>
                            <span className="font-mono text-[9px] uppercase tracking-wider text-[#ffa149] bg-[#ff7a32]/10 border border-[#ff7a32]/25 px-2.5 py-0.5 rounded-full">
                              {badge.date}
                            </span>
                          </div>

                          <div className="space-y-1">
                            <h4 className="text-base font-bold text-white group-hover:text-[#ffa149] transition duration-300">
                              {badge.name}
                            </h4>
                            <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest">
                              {badge.issuer}
                            </p>
                          </div>

                          <p className="text-xs text-white/70 leading-relaxed">
                            {badge.description}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* Desktop placeholder card to balance odd count */}
                    {!isMobile && badges.slice(slideIdx * itemsPerSlide, slideIdx * itemsPerSlide + itemsPerSlide).length < 2 && (
                      <div className="border border-white/5 bg-white/[0.01] rounded-3xl opacity-20 h-full min-h-[220px] flex items-center justify-center border-dashed">
                        <span className="text-white/30 text-xs font-mono">More coming soon</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Slider arrows */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-[-15px] sm:left-[-25px] top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[rgba(15,6,2,0.9)] text-[#09f0ff] transition hover:border-[#09f0ff]/50 hover:bg-[#09f0ff]/10 hover:shadow-[0_0_15px_rgba(9,240,255,0.45)] cursor-pointer"
                  aria-label="Previous slide"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-[-15px] sm:right-[-25px] top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[rgba(15,6,2,0.9)] text-[#09f0ff] transition hover:border-[#09f0ff]/50 hover:bg-[#09f0ff]/10 hover:shadow-[0_0_15px_rgba(9,240,255,0.45)] cursor-pointer"
                  aria-label="Next slide"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Navigation Dots */}
            {totalSlides > 1 && (
              <div className="mt-6 flex justify-center gap-2">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-6 bg-[#09f0ff] shadow-[0_0_8px_rgba(9,240,255,0.6)]" : "w-2.5 bg-white/20 hover:bg-white/40"
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
