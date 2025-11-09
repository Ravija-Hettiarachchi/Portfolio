import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio showcasing my work and skills with a clean design aesthetic.',
    },
    {
      title: 'Dashboard UI',
      description: 'An intuitive dashboard interface designed for optimal user experience and data visualization.',
    },
    {
      title: 'Mobile App Concept',
      description: 'A mobile application concept focusing on user-centered design and seamless interactions.',
    },
  ];

  return (
    <section id="projects" className="bg-[#0D0D0D] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00F6FF] text-center mb-16">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border border-[#00F6FF]/20 bg-[#0D0D0D] hover:border-[#00F6FF]/50 hover:shadow-[0_0_20px_#00F6FF] hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#00F6FF] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">{project.description}</p>
              <button className="px-6 py-2 border border-[#00F6FF] text-[#00F6FF] rounded-lg hover:bg-[#00F6FF] hover:text-[#0D0D0D] hover:shadow-[0_0_15px_#00F6FF] transition-all duration-300">
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
