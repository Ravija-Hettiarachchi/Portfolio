import React from "react";
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
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-[#0d0401] via-[#120601] to-[#080301] px-6 py-28 text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40" />
        <div className="absolute left-1/2 top-32 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.28),transparent_60%)] blur-3xl opacity-55" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <section className="grid grid-cols-1 gap-12">
          <div className="order-1 rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_60px_rgba(18,7,3,0.45)] lg:order-1">
            <div className="flex flex-col gap-2 text-center">
              <p className="text-xs uppercase tracking-[0.5em] text-[#ff8a3d]">Capabilities</p>
              <h3 className="text-2xl font-semibold text-white">Stacks I reach for daily</h3>
              <p className="text-sm text-white/65">
                Languages, frameworks, and platforms that let me move from detection ideas to production-grade interfaces.
              </p>
            </div>

            <div className="mt-8 flex w-full flex-wrap justify-center gap-4">
              {toolkits.map(({ name, iconUrl, accent }) => (
                <div
                  key={name}
                  className="group relative w-36 md:w-40 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center text-xs text-white/70 shadow-[0_16px_38px_rgba(5,2,1,0.45)] transition duration-300 hover:border-white/25 hover:text-white"
                >
                  <span
                    className="relative flex h-18 w-18 items-center justify-center rounded-[20px] border border-white/10 text-white transition duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                    style={{
                      boxShadow: `0 12px 30px ${accent.shadow}, 0 0 12px ${accent.glow}`,
                    }}
                  >
                    <img
                      src={iconUrl}
                      alt={`${name} official 3D icon`}
                      loading="lazy"
                      className="h-10 w-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition duration-500 group-hover:scale-110"
                    />
                  </span>
                  <p className="text-sm font-semibold text-white">{name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-2 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-[0_24px_60px_rgba(18,7,3,0.45)] lg:order-2">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.5em] text-[#ff8a3d]">Projects</p>
              <h3 className="text-2xl font-semibold text-white">Selected builds that secure and delight</h3>
              <p className="text-sm text-white/70">
                Highlighting security automation and experience layers I shepherd from concept to adoption.
              </p>
            </div>

            <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group flex h-full min-h-[220px] flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center shadow-[0_24px_60px_rgba(18,7,3,0.55)] transition duration-300 hover:border-transparent hover:bg-gradient-to-br hover:from-[#ff7a32]/20 hover:to-[#ffa149]/15 hover:shadow-[0_30px_80px_rgba(255,122,50,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8a3d]/60"
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

