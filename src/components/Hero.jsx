import React from 'react';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-[#0D0D0D] px-6 relative overflow-hidden">
      <div className="text-center space-y-8 z-10">
        {/* Avatar with animated gradient glow */}
        <div className="relative mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00F6FF] via-[#BC00FF] to-[#00F6FF] opacity-30 blur-2xl animate-pulse"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#00F6FF]/20 to-[#BC00FF]/20 border-2 border-[#00F6FF]/50 flex items-center justify-center backdrop-blur-sm">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#0D0D0D] border border-[#00F6FF]/30"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white opacity-0 animate-fade-in">
          Hi, I'm <span className="text-[#00F6FF]">Ravija</span>, a Creative Front-End Developer
        </h1>
        
        <div className="space-y-2 text-lg md:text-xl text-white/70 opacity-0 animate-fade-in-delay">
          <p>Building modern, thoughtful digital experiences</p>
          <p>that blend creativity with clean, functional design.</p>
        </div>

        <a
          href="#projects"
          className="inline-block mt-12 px-8 py-4 border-2 border-[#00F6FF] text-[#00F6FF] font-semibold rounded-lg hover:bg-[#00F6FF] hover:text-[#0D0D0D] hover:shadow-[0_0_25px_#00F6FF] transition-all duration-300 opacity-0 animate-fade-in-delay-2"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
