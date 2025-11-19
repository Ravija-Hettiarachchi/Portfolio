import React from "react";

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

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-[#080301] via-[#0d0401] to-[#120601] px-4 py-20 text-white sm:px-6 sm:py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40" />
        <div className="absolute left-10 top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.22),transparent_70%)] blur-3xl opacity-60" />
        <div className="absolute right-4 bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,176,122,0.18),transparent_70%)] blur-3xl opacity-50" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#ff8a3d]">About</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Secure journeys through curiosity and constant learning</h2>
          <p className="text-base text-white/70 sm:text-lg">
            I’m Ravija Hettiarachchi, an undergraduate ICT student and cybersecurity enthusiast.
            <br className="hidden sm:block" />
            I focus on learning new technologies every day and turning complex technical ideas into simple, practical solutions that people
            can actually use.
          </p>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group flex flex-col gap-5 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 text-center shadow-[0_30px_80px_rgba(8,3,1,0.5)] transition duration-300 hover:border-[#ff8a3d]/35 hover:shadow-[0_40px_90px_rgba(255,138,61,0.35)]"
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
      </div>
    </section>
  );
}

export default About;

