import React from "react";

const projects = [
  {
    title: "BlueShield Portal",
    description:
      "React + Firebase platform for real-time incident tracking with automated playbooks.",
    icon: "🛡️",
    link: "https://github.com/ravija-hettiarachchi",
  },
  {
    title: "PulseOps Dashboard",
    description:
      "Ops dashboard layering threat feeds, uptime metrics, and compliance snapshots in one view.",
    icon: "📊",
    link: "https://github.com/ravija-hettiarachchi",
  },
  {
    title: "Signal Mesh CLI",
    description:
      "Python toolkit that automates breach triage and hardens VPN access in hybrid teams.",
    icon: "💻",
    link: "https://github.com/ravija-hettiarachchi",
  },
  {
    title: "Beacon Auth Flow",
    description:
      "Adaptive authentication journey powered by Next.js and serverless edge guards.",
    icon: "🔐",
    link: "https://github.com/ravija-hettiarachchi",
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

      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[#ff8a3d]">Projects</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Selected builds that secure and delight
          </h2>
          <p className="max-w-2xl text-base text-white/70 sm:text-lg">
            From incident response to interface design, each project fuses resilient engineering with product empathy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-[0_24px_60px_rgba(18,7,3,0.55)] transition duration-300 hover:border-transparent hover:bg-gradient-to-br hover:from-[#ff7a32]/20 hover:to-[#ffa149]/15 hover:shadow-[0_30px_80px_rgba(255,122,50,0.45)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff8a3d]/15 text-xl text-[#ffb07a]">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-white/70">{project.description}</p>
              <div className="mt-auto flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/50">
                <span>Case study</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#ffb07a] transition hover:text-white"
                >
                  View
                  <span className="text-base leading-none">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

