import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const projects = [
  {
    title: "Lumos",
    description:
      "A dementia-care companion app that blends calm UI cues, medication reminders, and caregiver handoffs to extend independent living.",
    icon: "🌙",
    link: "https://github.com/ravija-hettiarachchi",
  },
  {
    title: "SGo Travel Support",
    description:
      "Travel assistance rebuilt with smart itineraries, emergency check-ins, and language-ready support for students abroad.",
    icon: "🧭",
    link: "https://github.com/ravija-hettiarachchi",
  },
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
      className="relative overflow-hidden bg-gradient-to-b from-[#0d0401] via-[#120601] to-[#080301] px-4 py-12 text-white sm:px-6 sm:py-16"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40" />
        <div className="absolute left-1/2 top-32 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.28),transparent_60%)] blur-3xl opacity-55" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <section className="grid grid-cols-1 gap-10">
          <div className="order-1 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center shadow-[0_24px_60px_rgba(18,7,3,0.45)] sm:p-8 lg:order-1">
            <div className="flex flex-col gap-2">
              <p className="reveal-on-scroll delay-100 text-xs uppercase tracking-[0.5em] text-[#ff8a3d]">Capabilities</p>
              <h3 className="reveal-on-scroll delay-200 text-2xl font-semibold text-white">Stacks I reach for daily</h3>
              <p className="reveal-on-scroll delay-300 text-sm text-white/65">
                Languages, frameworks, and platforms that let me move from detection ideas to production-grade interfaces.
              </p>
            </div>

            <div className="mt-8 hex-tech-grid">
              {toolkits.map(({ name, iconUrl, accent }, index) => (
                <div
                  key={name}
                  className={`hex-tech-card group reveal-on-scroll delay-${(index % 4 + 1) * 100}`}
                  style={{
                    "--brand-color-top": accent.top,
                    "--brand-color-bottom": accent.bottom,
                    "--brand-glow": accent.glow,
                  }}
                >
                  <div className="hex-tech-inner">
                    <img
                      src={iconUrl}
                      alt={`${name} icon`}
                      loading="lazy"
                      className="h-10 w-10 object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)] transition duration-500 group-hover:scale-110"
                    />
                    <p className="text-[11px] font-bold tracking-wider text-white/60 group-hover:text-white uppercase transition duration-300">
                      {name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-2 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_24px_60px_rgba(18,7,3,0.45)] sm:p-8 lg:order-2">
            <div className="text-center">
              <p className="reveal-on-scroll delay-100 text-xs uppercase tracking-[0.5em] text-[#ff8a3d]">Projects</p>
              <h3 className="reveal-on-scroll delay-200 text-2xl font-semibold text-white">Selected builds that secure and delight</h3>
              <p className="reveal-on-scroll delay-300 text-sm text-white/70">
                Highlighting security automation and experience layers I shepherd from concept to adoption.
              </p>
            </div>

            <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  onMouseMove={handleCardMouseMove}
                  className={`group flex h-full min-h-[220px] flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center shadow-[0_24px_60px_rgba(18,7,3,0.55)] interactive-card reveal-on-scroll delay-${(index + 1) * 150} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8a3d]/60`}
                >
                  <div className="flex items-center justify-center gap-3 text-white">
                    <span className="text-2xl">{project.icon}</span>
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                  </div>
                  <p className="text-sm text-white/70">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 self-center text-xs uppercase tracking-[0.35em] text-[#ffb07a] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8a3d]/60"
                  >
                    View
                    <span className="text-base leading-none">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Projects;
