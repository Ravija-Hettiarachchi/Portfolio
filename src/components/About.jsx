import React from 'react';

// Icon Components
const HTMLIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.955-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#E34F26"/>
  </svg>
);

const CSSIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.955-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572B6"/>
    <path d="M12 4.5v15.75l5.373-1.53L18.59 4.414H12V4.5z" fill="#33A9DC" opacity="0.4"/>
  </svg>
);

const JSIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="2" fill="#F7DF1E"/>
    <path d="M8.5 18.5c-.83 0-1.5-.67-1.5-1.5v-1.5h1.5v1.5h3v-4.5H7c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-3zm8-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3zm1.5-4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-6z" fill="#323330"/>
  </svg>
);

const ReactIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" fill="none" opacity="0.8"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" fill="none" opacity="0.8" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" fill="none" opacity="0.8" transform="rotate(-60 12 12)"/>
  </svg>
);

const GitIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#F05032"/>
  </svg>
);

const FigmaIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
    <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
    <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
    <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
    <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
  </svg>
);

function About() {
  const techStack = [
    { name: 'HTML', Icon: HTMLIcon, color: '#E34F26' },
    { name: 'CSS', Icon: CSSIcon, color: '#1572B6' },
    { name: 'JavaScript', Icon: JSIcon, color: '#F7DF1E' },
    { name: 'React', Icon: ReactIcon, color: '#61DAFB' },
    { name: 'Git', Icon: GitIcon, color: '#F05032' },
    { name: 'Figma', Icon: FigmaIcon, color: '#0ACF83' },
  ];

  return (
    <section id="about" className="bg-[#0D0D0D] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00F6FF] mb-8">About Me</h2>
        
        <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          I'm an undergraduate ICT student passionate about creating simple, clean and user-centered digital experiences. I enjoy front-end development, UI/UX design, and exploring how creativity meets technology.
        </p>

        {/* Tech Stack Icons */}
        <div className="pt-8">
          <h3 className="text-xl text-white/60 mb-6">Tech Stack</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {techStack.map((tech, index) => {
              const IconComponent = tech.Icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center space-y-2 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-gradient-to-br from-[#00F6FF]/10 to-[#BC00FF]/10 border border-[#00F6FF]/30 flex items-center justify-center backdrop-blur-sm group-hover:border-[#00F6FF] group-hover:shadow-[0_0_15px_#00F6FF] transition-all duration-300 p-3">
                    <IconComponent className="w-full h-full group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-white/60 text-sm group-hover:text-[#00F6FF] transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
