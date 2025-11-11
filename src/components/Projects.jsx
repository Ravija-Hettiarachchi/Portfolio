import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio showcasing my work and skills with a calm, immersive design aesthetic.',
    },
    {
      title: 'Dashboard UI',
      description:
        'An intuitive dashboard interface designed for clarity, layered depth, and effortless data exploration.',
    },
    {
      title: 'Mobile App Concept',
      description:
        'A mobile concept focused on gentle motion, user comfort, and memorable micro-interactions.',
    },
  ];

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-14">
        <div className="text-center space-y-4">
          <span className="tag">Projects</span>
          <h2 className="gradient-title text-4xl md:text-5xl font-bold">
            Selected work with thoughtful detail
          </h2>
          <p className="text-soft max-w-2xl mx-auto text-lg">
            Each project pairs expressive visuals with intentional interactions to create calm, focused experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass-panel hover-lift group flex flex-col justify-between p-8 md:p-10 transition-colors"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#60a5fa] group-hover:to-[#c084fc] transition-colors">
                    {project.title}
                  </h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.32em] text-white/40">
                    {`0${index + 1}`}
                  </span>
                </div>
                <p className="text-soft leading-relaxed">{project.description}</p>
              </div>

              <div className="mt-10 flex items-center justify-between text-sm">
                <span className="text-white/50">Case Study</span>
                <button className="button-ghost">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
