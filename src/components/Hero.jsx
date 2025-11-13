import React from "react";

function Hero() {
  const techLogos = [
    {
      id: "html",
      className: "skill-html",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
          <path fill="#E44D26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" />
          <path fill="#F16529" d="M12 21.56l6.91-1.967L19.589 2.4H12V21.56z" />
          <path
            fill="#EBEBEB"
            d="M12 9.36H7.197l.18 2.08H12v2.08H9.6l.16 1.79L12 16.07v2.22l-3.725-1.04-.26-2.887H6.02l-.53-6.006H12V9.36z"
          />
          <path
            fill="#fff"
            d="M17.83 9.36l-.54 6.006L12 18.29v-2.22l2.24-.62.21-2.428H12V9.36h5.83z"
          />
        </svg>
      ),
    },
    {
      id: "css",
      className: "skill-css",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
          <path fill="#264DE4" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" />
          <path fill="#2965F1" d="M12 21.56l6.91-1.967L19.589 2.4H12V21.56z" />
          <path
            fill="#fff"
            d="M12 13.52h2.4l-.16 1.793L12 16.07v2.22l3.725-1.04.52-5.85H12v2.12z"
          />
          <path
            fill="#EBEBEB"
            d="M12 9.36H7.197l.18 2.08H12V9.36zm0 6.71l-2.4-.66-.16-1.79H7.227l.26 2.888L12 18.29v-2.22zm0-4.63h-4.8l-.18-2.08H12V6.26H6.02l.53 6.006H12v-2.1z"
          />
        </svg>
      ),
    },
    {
      id: "react",
      className: "skill-js",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2.1" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1.4" fill="none">
            <ellipse cx="12" cy="12" rx="9.5" ry="3.5" />
            <ellipse cx="12" cy="12" rx="9.5" ry="3.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9.5" ry="3.5" transform="rotate(-60 12 12)" />
          </g>
        </svg>
      ),
    },
    {
      id: "figma",
      className: "skill-figma",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83" />
          <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF" />
          <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E" />
          <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262" />
          <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#120601] via-[#190b04] to-[#0a0401] px-6 pb-24 pt-32 text-white sm:pt-40"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.28),transparent_65%)] blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.18),transparent_70%)] blur-3xl opacity-70" />
        <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,213,168,0.15),transparent_70%)] blur-2xl opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#120601] via-transparent to-transparent" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex w-full flex-1 flex-col gap-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 self-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.55em] text-white/70 lg:self-start">
            Hey, I am <span className="font-semibold text-[#ff7a32]">Ravija</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Cybersecurity Enthusiest &<span className="block text-[#ff8a3d]">Designer</span>
          </h1>
          <p className="max-w-xl text-base text-white/70 sm:text-lg">
            I craft resilient digital experiences where automation, security, and design meet. Let’s build interfaces that feel lightning fast while keeping every interaction protected.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff7a32] to-[#ffa149] px-8 py-3 text-sm font-semibold text-[#1c0902] shadow-[0_18px_40px_rgba(255,122,50,0.45)] transition hover:scale-[1.02]"
            >
              Hire me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-white/80 transition hover:border-white/35 hover:text-white"
            >
              View projects
            </a>
          </div>

          <div className="relative mt-4 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-left shadow-[0_18px_48px_rgba(12,6,2,0.45)] sm:max-w-lg">
            <span className="text-4xl text-[#ff8a3d]">“</span>
            <p className="text-sm text-white/70">
              Ravija translated our threat detection requirements into a beautiful dashboard with near-zero latency. The workflows just make sense.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#ff7a32] to-[#ffa149]" />
              <div className="text-xs">
                <p className="font-semibold text-white">Carolina Abott</p>
                <p className="uppercase tracking-[0.35em] text-white/40">Business Owner</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-1 justify-center">
          <div className="relative flex h-[420px] w-[420px] max-w-full items-center justify-center">
            <div className="absolute inset-0 rounded-[44px] bg-gradient-to-br from-[#1c0902] via-[#110602] to-[#080301] shadow-[0_45px_120px_rgba(14,6,2,0.75)]" />
            <div className="absolute inset-[6%] rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-3xl" />
            <img
              src="/hero-avatar.png"
              alt="Ravija hero avatar"
              className="relative h-[90%] w-[90%] object-contain"
            />
            <div className="absolute -right-6 top-10 flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70 backdrop-blur-xl">
              Available for work
            </div>
            <div className="absolute -left-10 bottom-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.35em] text-white/70 backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff8a3d]" />
              5+ years secured builds
            </div>
            <div className="pointer-events-none absolute inset-0">
              {techLogos.map((logo) => (
                <span key={logo.id} className={`floating-skill ${logo.className}`}>
                  {logo.icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
