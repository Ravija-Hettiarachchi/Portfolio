import React, { useState, useEffect, useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const projects = [
  {
    title: "Lumos",
    tagline: "HEALTHCARE COMPANION APP",
    description: "A dementia-care companion app that blends calm UI cues, medication reminders, and caregiver handoffs to extend independent living. Built with secure local-first states.",
    icon: "🌙",
    link: "https://github.com/ravija-hettiarachchi",
    tags: ["React Native", "Tailwind CSS", "Firebase", "Figma"],
    accentGlow: "group-hover:border-[#ff7a32]/25",
    iconBg: "bg-[#ff7a32]/10 text-[#ff7a32] border-[#ff7a32]/25 shadow-[0_0_15px_rgba(255,122,50,0.15)]",
    cardGlow: "rgba(255, 122, 50, 0.15)"
  },
  {
    title: "SGo Travel Support",
    tagline: "STUDENT SAFETY & LOGISTICS",
    description: "Travel assistance rebuilt with smart itineraries, emergency check-ins, and language-ready support for students abroad. Employs automated alerts to protect communications.",
    icon: "🧭",
    link: "https://github.com/ravija-hettiarachchi",
    tags: ["Node.js", "MySQL", "JavaScript", "Linux", "Java"],
    accentGlow: "group-hover:border-[#ffa149]/25",
    iconBg: "bg-[#ffa149]/10 text-[#ffa149] border-[#ffa149]/25 shadow-[0_0_15px_rgba(255,161,73,0.15)]",
    cardGlow: "rgba(255, 161, 73, 0.15)"
  }
];

const toolkits = [
  {
    name: "Python",
    iconUrl: "https://skillicons.dev/icons?i=py",
    accent: {
      top: "#fef08a",
      bottom: "#f97316",
      shadow: "rgba(249,115,22,0.45)",
      glow: "rgba(249,115,22,0.35)",
    },
  },
  {
    name: "JavaScript",
    iconUrl: "https://skillicons.dev/icons?i=js",
    accent: {
      top: "#fef3c7",
      bottom: "#facc15",
      shadow: "rgba(250,204,21,0.45)",
      glow: "rgba(250,204,21,0.35)",
    },
  },
  {
    name: "React",
    iconUrl: "https://skillicons.dev/icons?i=react",
    accent: {
      top: "#bae6fd",
      bottom: "#0ea5e9",
      shadow: "rgba(14,165,233,0.45)",
      glow: "rgba(125,211,252,0.35)",
    },
  },
  {
    name: "Next.js",
    iconUrl: "https://skillicons.dev/icons?i=nextjs",
    accent: {
      top: "#e2e8f0",
      bottom: "#0f172a",
      shadow: "rgba(15,23,42,0.45)",
      glow: "rgba(100,116,139,0.35)",
    },
  },
  {
    name: "TypeScript",
    iconUrl: "https://skillicons.dev/icons?i=ts",
    accent: {
      top: "#bfdbfe",
      bottom: "#2563eb",
      shadow: "rgba(37,99,235,0.45)",
      glow: "rgba(96,165,250,0.35)",
    },
  },
  {
    name: "Tailwind CSS",
    iconUrl: "https://skillicons.dev/icons?i=tailwind",
    accent: {
      top: "#c7d2fe",
      bottom: "#0ea5e9",
      shadow: "rgba(14,165,233,0.45)",
      glow: "rgba(125,211,252,0.35)",
    },
  },
  {
    name: "Firebase",
    iconUrl: "https://skillicons.dev/icons?i=firebase",
    accent: {
      top: "#fde68a",
      bottom: "#f59e0b",
      shadow: "rgba(245,158,11,0.45)",
      glow: "rgba(253,224,71,0.35)",
    },
  },
  {
    name: "Node.js",
    iconUrl: "https://skillicons.dev/icons?i=nodejs",
    accent: {
      top: "#bbf7d0",
      bottom: "#15803d",
      shadow: "rgba(21,128,61,0.45)",
      glow: "rgba(74,222,128,0.35)",
    },
  },
  {
    name: "Figma",
    iconUrl: "https://skillicons.dev/icons?i=figma",
    accent: {
      top: "#fecdd3",
      bottom: "#db2777",
      shadow: "rgba(219,39,119,0.45)",
      glow: "rgba(248,113,113,0.35)",
    },
  },
  {
    name: "MySQL",
    iconUrl: "https://skillicons.dev/icons?i=mysql",
    accent: {
      top: "#bae6fd",
      bottom: "#0284c7",
      shadow: "rgba(2,132,199,0.45)",
      glow: "rgba(56,189,248,0.35)",
    },
  },
  {
    name: "Java",
    iconUrl: "https://skillicons.dev/icons?i=java",
    accent: {
      top: "#fed7aa",
      bottom: "#ea580c",
      shadow: "rgba(234,88,12,0.45)",
      glow: "rgba(251,146,60,0.35)",
    },
  },
  {
    name: "Linux",
    iconUrl: "https://skillicons.dev/icons?i=linux",
    accent: {
      top: "#fef3c7",
      bottom: "#a16207",
      shadow: "rgba(161,98,7,0.45)",
      glow: "rgba(253,224,71,0.35)",
    },
  },
  {
    name: "Git",
    iconUrl: "https://skillicons.dev/icons?i=git",
    accent: {
      top: "#fee2e2",
      bottom: "#f05032",
      shadow: "rgba(240,80,50,0.45)",
      glow: "rgba(240,80,50,0.35)",
    },
  },
  {
    name: "Cisco",
    iconUrl: "/cisco.png",
    accent: {
      top: "#bae6fd",
      bottom: "#0284c7",
      shadow: "rgba(2,132,199,0.45)",
      glow: "rgba(56,189,248,0.35)",
    },
  },
  {
    name: "Docker",
    iconUrl: "https://skillicons.dev/icons?i=docker",
    accent: {
      top: "#bae6fd",
      bottom: "#2496ed",
      shadow: "rgba(36,150,237,0.45)",
      glow: "rgba(56,189,248,0.35)",
    },
  },
  {
    name: "HTML5",
    iconUrl: "https://skillicons.dev/icons?i=html",
    accent: {
      top: "#ffedd5",
      bottom: "#e34f26",
      shadow: "rgba(227,79,38,0.45)",
      glow: "rgba(251,146,60,0.35)",
    },
  },
  {
    name: "CSS3",
    iconUrl: "https://skillicons.dev/icons?i=css",
    accent: {
      top: "#dbeafe",
      bottom: "#1572b6",
      shadow: "rgba(21,114,182,0.45)",
      glow: "rgba(96,165,250,0.35)",
    },
  },
];

function Projects() {
  const revealRef = useScrollReveal();
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  // Scroll handler for capabilities horizontal parallax scroll
  const capabilitiesSectionRef = useRef(null);
  const [capabilitiesScroll, setCapabilitiesScroll] = useState(0);

  // Split toolkits into two rows for the horizontal marquee
  const row1 = toolkits.slice(0, 9);
  const row2 = toolkits.slice(9);

  // Repeat items to ensure smooth infinite loop coverage
  const row1Items = [...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2];

  useEffect(() => {
    const handleScroll = () => {
      const el = capabilitiesSectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = Math.max(1, rect.height - viewportHeight);
      
      let progress = -rect.top / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));
      setCapabilitiesScroll(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("locomotive-scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("locomotive-scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const totalScrollable = rect.height - viewportHeight;
      const currentScroll = -rect.top;
      
      let progress = currentScroll / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateTranslate = () => {
      const track = trackRef.current;
      if (!track) return;
      const max = track.scrollWidth - window.innerWidth;
      setMaxTranslate(max > 0 ? max : 0);
    };

    const timer = setTimeout(updateTranslate, 100);
    window.addEventListener("resize", updateTranslate);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateTranslate);
    };
  }, [projects]);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--card-mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--card-mouse-y", `${y}px`);
  };

  return (
    <div ref={revealRef} className="bg-gradient-to-b from-[#0d0401] via-[#120601] to-[#080301] text-white">
      
      {/* 1. Capabilities Stacks Area (Sticky Scroll Section) */}
      <section 
        ref={capabilitiesSectionRef} 
        className="relative w-full h-[180vh]"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background overlay and glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-70" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,50,0.12),transparent_65%)] blur-3xl opacity-60" />
          </div>

          <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 relative z-10">
            <div className="rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-16 text-center shadow-[0_30px_80px_rgba(18,7,3,0.55)] backdrop-blur-md">
              <div className="flex flex-col gap-4">
                <p className="reveal-on-scroll delay-100 text-sm uppercase tracking-[0.7em] text-[#ff8a3d] font-bold">Capabilities</p>
                <h3 className="reveal-on-scroll delay-200 text-4xl font-extrabold text-white sm:text-5xl tracking-tight">Stacks I reach for daily</h3>
                <p className="reveal-on-scroll delay-300 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                  Languages, frameworks, and platforms that let me move from detection ideas to production-grade interfaces.
                </p>
              </div>

              <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-8 overflow-hidden py-4">
                {/* Row 1: Horizontal scrolling left, driven by scroll progress */}
                <div className="marquee-container">
                  <div 
                    className="marquee-track"
                    style={{ transform: `translate3d(${(capabilitiesScroll - 0.5) * -720}px, 0, 0)` }}
                  >
                    {row1Items.map(({ name, iconUrl, accent }, index) => {
                      const waveOffset = (Math.sin(index * 0.75) * 24).toFixed(2);
                      return (
                        <div
                          key={`row1-${name}-${index}`}
                          className="wavy-tech-tile flex-col"
                          style={{
                            "--brand-glow": accent.glow,
                            "--wave-offset": `${waveOffset}px`
                          }}
                        >
                          <div className="wavy-tech-glass flex items-center justify-center">
                            <img
                              src={iconUrl}
                              alt={`${name} icon`}
                              loading="lazy"
                            />
                          </div>
                          <span className="wavy-tech-name mt-3 block font-mono text-xs font-semibold tracking-wider text-white/60 transition-colors duration-300">
                            {name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Row 2: Horizontal scrolling right, driven by scroll progress */}
                <div className="marquee-container">
                  <div 
                    className="marquee-track"
                    style={{ transform: `translate3d(${(capabilitiesScroll - 0.5) * 720}px, 0, 0)` }}
                  >
                    {row2Items.map(({ name, iconUrl, accent }, index) => {
                      // Out-of-phase by adding 4.2 to index, so it arches in the opposite direction
                      const waveOffset = (Math.sin((index + 4.2) * 0.75) * 24).toFixed(2);
                      return (
                        <div
                          key={`row2-${name}-${index}`}
                          className="wavy-tech-tile flex-col"
                          style={{
                            "--brand-glow": accent.glow,
                            "--wave-offset": `${waveOffset}px`
                          }}
                        >
                          <div className="wavy-tech-glass flex items-center justify-center">
                            <img
                              src={iconUrl}
                              alt={`${name} icon`}
                              loading="lazy"
                            />
                          </div>
                          <span className="wavy-tech-name mt-3 block font-mono text-xs font-semibold tracking-wider text-white/60 transition-colors duration-300">
                            {name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Showcase Horizontal Scroll Area (Sticky h-[250vh]) */}
      <section 
        id="projects"
        ref={containerRef}
        className="relative h-[250vh] w-full"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center border-t border-white/5">
          {/* Background grid/glow effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/3 h-96 w-96 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,50,0.08),transparent_70%)] blur-3xl opacity-50" />
            <div className="absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,161,73,0.05),transparent_70%)] blur-3xl opacity-40" />
          </div>

          {/* Horizontal Scroll Track */}
          <div 
            ref={trackRef}
            className="flex items-center gap-12 px-[10vw] w-max transition-transform duration-75 ease-out relative z-10"
            style={{
              transform: `translateX(-${scrollProgress * maxTranslate}px)`,
            }}
          >
            {/* Slide 1: Title Card */}
            <div className="w-[300px] sm:w-[420px] flex flex-col gap-6 text-left shrink-0 select-none">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.5em] text-[#ff8a3d] font-bold">Showcase</p>
                <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
                  Selected Builds
                </h3>
                <p className="text-sm text-white/60 leading-relaxed max-w-sm">
                  Highlighting security automation and interface layers I develop from concept to implementation. Scroll down to explore the gallery.
                </p>
              </div>
              
              <div className="flex items-center gap-3 font-mono text-xs text-white/45">
                <span className="animate-pulse h-2 w-2 rounded-full bg-[#ff7a32]" />
                <span>SCROLL DOWN TO NAVIGATE SIDEWAYS</span>
                <span className="text-sm">→</span>
              </div>
            </div>

            {/* Slide 2 & 3: Project Cards */}
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="w-[340px] sm:w-[480px] shrink-0"
              >
                <article
                  onMouseMove={handleCardMouseMove}
                  className={`group relative flex h-[360px] flex-col justify-between rounded-[32px] border border-white/5 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 text-left shadow-[0_30px_70px_rgba(0,0,0,0.6)] interactive-card transition-all duration-300 hover:shadow-[0_45px_85px_rgba(0,0,0,0.85)] hover:border-[#ff8a3d]/25`}
                >
                  {/* Hover glow */}
                  <div 
                    className="absolute bottom-[-30px] right-[-30px] w-36 h-36 rounded-full opacity-0 blur-[40px] group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${project.cardGlow} 0%, transparent 70%)` }}
                  />

                  {/* Top content */}
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-xl transition-all duration-500 group-hover:scale-105 group-hover:-rotate-[6deg] group-hover:translate-y-[-2px] ${project.iconBg}`}>
                        {project.icon}
                      </span>
                      <div className="space-y-0.5">
                        <span className="block font-mono text-[8.5px] tracking-widest text-[#ff8a3d] uppercase font-bold">
                          {project.tagline}
                        </span>
                        <h4 className="text-xl font-extrabold text-white tracking-tight">
                          {project.title}
                        </h4>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom contents */}
                  <div className="space-y-5">
                    {/* Tech Stacks Tag Grid */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="font-mono text-[9px] text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md transition duration-300 group-hover:text-white/75 group-hover:border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Explore button */}
                    <div className="flex items-center justify-start border-t border-white/5 pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#ffb07a] transition-all duration-300 hover:border-[#ff8a3d]/45 hover:bg-[#ff7a32]/10 hover:text-white hover:shadow-[0_0_15px_rgba(255,122,50,0.2)]"
                      >
                        Explore Code
                        <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}

            {/* Slide 4: GitHub Link CTA Card */}
            <div className="w-[300px] sm:w-[400px] shrink-0">
              <article className="group h-[360px] rounded-[32px] border border-dashed border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-8 flex flex-col justify-between text-left hover:border-[#ff8a3d]/30 transition-colors duration-300">
                <div className="space-y-4">
                  <div className="text-2xl text-[#ffa149]">🐙</div>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#ffa149] transition-colors duration-300">
                    Curious for more?
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Check out my other open-source projects, class labs, and mini cybersecurity automation scripts hosted on GitHub.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <a
                    href="https://github.com/ravija-hettiarachchi"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#ffb07a] transition-all duration-300 hover:border-[#ff8a3d]/45 hover:bg-[#ff7a32]/10 hover:text-white"
                  >
                    View GitHub
                    <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                  </a>
                </div>
              </article>
            </div>

          </div>

          {/* Progress Indicator Line */}
          <div className="absolute bottom-6 left-[10vw] right-[10vw] h-0.5 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#ff7a32] to-[#ffa149] shadow-[0_0_8px_rgba(255,122,50,0.6)] transition-all duration-75"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </section>

    </div>
  );
}

export default Projects;
