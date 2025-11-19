import React from "react";
import VisitorCounter from "./VisitorCounter";

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

  const mainPalette = [
    { id: "m1", x: -320, y: -20, size: 150 },
    { id: "m2", x: -200, y: -60, size: 170 },
    { id: "m3", x: -80, y: 40, size: 150 },
    { id: "m4", x: 120, y: -60, size: 190 },
    { id: "m5", x: 260, y: -10, size: 160 },
    { id: "m6", x: 360, y: 30, size: 140 },
    { id: "m7", x: -260, y: 170, size: 150 },
    { id: "m8", x: -120, y: 210, size: 140 },
    { id: "m9", x: 60, y: 210, size: 150 },
    { id: "m10", x: 220, y: 170, size: 140 },
  ];

  const miniPalette = [
    { id: "s1", x: -420, y: -10, size: 100 },
    { id: "s2", x: -340, y: 110, size: 95 },
    { id: "s3", x: -240, y: -150, size: 90 },
    { id: "s4", x: -40, y: -160, size: 90 },
    { id: "s5", x: 160, y: -150, size: 95 },
    { id: "s6", x: 330, y: -40, size: 100 },
    { id: "s7", x: 420, y: 120, size: 95 },
    { id: "s8", x: 300, y: 280, size: 90 },
    { id: "s9", x: 100, y: 320, size: 90 },
    { id: "s10", x: -120, y: 320, size: 100 },
    { id: "s11", x: -300, y: 260, size: 95 },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#120601] via-[#190b04] to-[#0a0401] px-6 pb-20 pt-12 text-white sm:pt-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.28),transparent_65%)] blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.18),transparent_70%)] blur-3xl opacity-70" />
        <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,213,168,0.15),transparent_70%)] blur-2xl opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#120601] via-transparent to-transparent" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex w-full flex-1 flex-col gap-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 self-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.55em] text-white/70 lg:self-start">
            Hey, I am <span className="font-semibold text-[#ff7a32]">Ravija</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Cybersecurity Enthusiest &<span className="block text-[#ff8a3d]">Designer</span>
          </h1>
          <p className="max-w-xl text-base text-white/70 sm:text-lg">
            I craft resilient digital experiences where automation, security, and design meet. Let’s build interfaces that feel lightning fast while keeping every interaction protected.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
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

          <div className="mt-4 flex w-full justify-center lg:justify-start">
            <VisitorCounter />
          </div>
        </div>

        <div className="relative flex w-full flex-1 justify-center overflow-hidden sm:overflow-visible lg:items-start lg:justify-end">
          <div className="relative flex h-[320px] w-[320px] max-w-full items-center justify-center -translate-y-4 sm:h-[400px] sm:w-[400px] sm:-translate-y-12 lg:h-[440px] lg:w-[440px] lg:translate-x-16">
            <div className="profile-frame">
              <div className="hex-palette hidden sm:block">
                {mainPalette.map((hex) => (
                  <span
                    key={hex.id}
                    className="hex-palette__hex hex-palette__hex--bold"
                    style={{
                      left: `calc(50% + ${hex.x}px)`,
                      top: `calc(50% + ${hex.y}px)`,
                      width: `${hex.size}px`,
                    }}
                  />
                ))}
                {miniPalette.map((hex) => (
                  <span
                    key={hex.id}
                    className="hex-palette__hex hex-palette__hex--mini"
                    style={{
                      left: `calc(50% + ${hex.x}px)`,
                      top: `calc(50% + ${hex.y}px)`,
                      width: `${hex.size}px`,
                    }}
                  />
                ))}
              </div>

              <div className="profile-frame__core">
                <span className="hex-ring hex-ring--outer" />
                <span className="hex-ring hex-ring--inner" />
                <div className="hex-avatar">
                  <img src="/profil-pic.jpg" alt="Ravija hero avatar" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
