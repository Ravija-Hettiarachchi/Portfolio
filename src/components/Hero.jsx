import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-6 h-64 w-64 rounded-full bg-gradient-to-br from-[#38bdf8]/10 via-[#c084fc]/25 to-transparent blur-3xl opacity-80 animate-[float_18s_ease-in-out_infinite]" />
        <div className="absolute bottom-14 left-6 h-72 w-72 rounded-full bg-gradient-to-tr from-[#c084fc]/22 via-[#38bdf8]/18 to-transparent blur-[110px] opacity-70 animate-[float_16s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="relative max-w-4xl w-full glass-panel px-8 py-16 md:px-16 md:py-20 text-center space-y-12">
        <div className="flex justify-center">
          <span className="tag">Front-End Developer</span>
        </div>

        <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#60a5fa]/40 via-[#c084fc]/30 to-[#7dd3fc]/40 blur-xl opacity-70 animate-[glowPulse_6s_ease-in-out_infinite]" />
          <div className="relative w-full h-full rounded-full border border-white/10 bg-gradient-to-br from-white/8 to-white/0 backdrop-blur-xl flex items-center justify-center">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#090017] border border-white/10" />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
            Crafting calming, modern interfaces that feel as good as they look.
          </h1>
          <p className="text-soft text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in-delay">
            I translate thoughtful ideas into immersive digital experiences with subtle motion and a focus on clarity, accessibility, and delight.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
          <a href="#projects" className="button-primary">
            View My Work
          </a>
          <a href="#contact" className="button-ghost">
            Let's Collaborate
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
