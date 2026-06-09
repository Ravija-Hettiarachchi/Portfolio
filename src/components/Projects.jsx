import React from "react";
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
];

function Projects() {
  const revealRef = useScrollReveal();

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--card-mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--card-mouse-y", `${y}px`);
  };

  return (
    <section
      id="projects"
      ref={revealRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#0d0401] via-[#120601] to-[#080301] px-4 py-16 text-white sm:px-6 sm:py-20"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40" />
        <div className="absolute left-1/2 top-48 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,50,0.15),transparent_65%)] blur-3xl opacity-60" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 relative z-10">
        
        {/* Capabilities Stacks Area */}
        <section className="rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-12 sm:p-20 text-center shadow-[0_30px_80px_rgba(18,7,3,0.55)] backdrop-blur-md">
          <div className="flex flex-col gap-4">
            <p className="reveal-on-scroll delay-100 text-sm uppercase tracking-[0.7em] text-[#ff8a3d] font-bold">Capabilities</p>
            <h3 className="reveal-on-scroll delay-200 text-4xl font-extrabold text-white sm:text-5xl tracking-tight">Stacks I reach for daily</h3>
            <p className="reveal-on-scroll delay-300 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Languages, frameworks, and platforms that let me move from detection ideas to production-grade interfaces.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-7 sm:gap-9 max-w-6xl mx-auto py-6">
            {toolkits.map(({ name, iconUrl, accent }, index) => (
              <div
                key={name}
                className={`tech-tile group reveal-on-scroll delay-${(index % 4 + 1) * 100}`}
                style={{
                  "--brand-glow": accent.glow,
                }}
              >
                <img
                  src={iconUrl}
                  alt={`${name} icon`}
                  loading="lazy"
                />
                <p>
                  {name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Builds Charming Card Area */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <p className="reveal-on-scroll delay-100 text-xs uppercase tracking-[0.5em] text-[#ff8a3d]">Showcase</p>
            <h3 className="reveal-on-scroll delay-200 text-3xl font-bold text-white sm:text-4xl">Selected builds that secure & delight</h3>
            <div className="reveal-on-scroll delay-300 w-16 h-0.5 bg-gradient-to-r from-[#ff7a32] to-[#ffa149] mx-auto mt-3 rounded-full" />
            <p className="reveal-on-scroll delay-300 text-xs sm:text-sm text-white/65 max-w-md mx-auto">
              Highlighting security automation and experience layers I shepherd from concept to adoption.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                onMouseMove={handleCardMouseMove}
                className={`group flex h-full min-h-[260px] flex-col gap-5 rounded-[28px] border border-white/5 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 text-left shadow-[0_25px_60px_rgba(0,0,0,0.5)] interactive-card reveal-on-scroll delay-${(index + 1) * 150} transition-all duration-300 hover:shadow-[0_35px_70px_rgba(0,0,0,0.7)] ${project.accentGlow}`}
              >
                
                {/* Radial Glow Underlay on Hover */}
                <div 
                  className="absolute bottom-[-40px] right-[-40px] w-40 h-40 rounded-full opacity-0 blur-[45px] group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${project.cardGlow} 0%, transparent 70%)` }}
                />

                {/* Header: Icon Circle + Title */}
                <div className="flex items-center gap-4">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-xl transition-all duration-500 group-hover:scale-105 group-hover:-rotate-[6deg] group-hover:translate-y-[-2px] ${project.iconBg}`}>
                    {project.icon}
                  </span>
                  <div className="space-y-0.5">
                    <span className="block font-mono text-[8.5px] tracking-widest text-[#ff8a3d] uppercase font-bold">
                      {project.tagline}
                    </span>
                    <h4 className="text-xl font-extrabold text-white group-hover:text-white transition duration-300 tracking-tight">
                      {project.title}
                    </h4>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stacks Tag Badge Grid */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="font-mono text-[9px] text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md transition duration-300 group-hover:text-white/75 group-hover:border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom link: View CTA button */}
                <div className="mt-auto pt-4 flex items-center justify-start">
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

              </article>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
}

export default Projects;
