import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const educationData = [
  {
    title: "Bachelor of Information & Communication Technology",
    institution: "University Undergraduate",
    period: "2023 - Present (Expected 2027)",
    description: "Specializing in Cybersecurity and Network Architectures. Studying core ICT modules, object-oriented systems, secure software development, and database schemas.",
    highlights: ["Focusing on Network Security and Cryptography", "Active member of academic tech clubs", "Coursework: Linux, Database Administration, Java"]
  },
  {
    title: "Cyber Threat Management Credentials",
    institution: "Cisco Networking Academy",
    period: "2025 - 2026",
    description: "Completed comprehensive training in cybersecurity threat detection, operational safety, vulnerability scanning, and secure routing.",
    highlights: ["Packet Tracer simulated environments", "Threat hunting and analysis basics", "Incident response fundamentals"]
  },
  {
    title: "Advanced Level Physical Sciences",
    institution: "High School Fundamentals",
    period: "2020 - 2022",
    description: "Studied Advanced Level Physics, Chemistry, and Combined Mathematics, establishing strong quantitative reasoning and problem-solving foundations.",
    highlights: ["Strong mathematical foundation", "Analytical reasoning", "Introductory coding concepts"]
  }
];
function Journey() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="journey"
      ref={revealRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#120601] via-[#080301] to-[#0a0401] px-4 py-16 text-white sm:px-6 sm:py-20"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,122,50,0.15),transparent_65%)] blur-3xl opacity-60 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="reveal-on-scroll delay-100 text-xs uppercase tracking-[0.5em] text-[#ff8a3d]">Journey</p>
          <h2 className="reveal-on-scroll delay-200 text-3xl font-bold text-white sm:text-4xl">Education & Experience</h2>
          <div className="reveal-on-scroll delay-300 w-24 h-0.5 bg-gradient-to-r from-[#ff7a32] to-[#ffa149] mx-auto mt-4 rounded-full" />
          <p className="reveal-on-scroll delay-300 text-sm sm:text-base text-white/65 max-w-xl mx-auto mt-2">
            A chronological timeline of my academic foundations and practical application of cybersecurity and development skills.
          </p>
        </div>

        {/* Timeline Content */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Column 1: Education */}
          <div className="space-y-10 relative">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#ffa149]/10 text-[#ffa149] border border-[#ffa149]/20 shadow-[0_0_15px_rgba(255,161,73,0.1)]">
                🎓
              </span>
              <h3 className="text-xl font-bold tracking-wider text-white">Academic & Professional Credentials</h3>
            </div>
            
            {/* Timeline Track (Line) */}
            <div className="absolute left-[20px] top-[70px] bottom-[20px] w-px bg-gradient-to-b from-[#ffa149]/40 via-white/10 to-transparent pointer-events-none" />

            {educationData.map((item, idx) => (
              <div
                key={item.title}
                className={`reveal-on-scroll delay-${(idx + 1) * 150} pl-10 relative group`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[13px] top-1.5 w-[15px] h-[15px] rounded-full bg-[#120601] border-2 border-[#ffa149] shadow-[0_0_10px_rgba(255,161,73,0.6)] group-hover:bg-[#ffa149] transition-all duration-300 z-10" />
                
                {/* Glassmorphic Item Card */}
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] shadow-[0_15px_35px_rgba(0,0,0,0.4)] backdrop-blur-md group-hover:border-[#ffa149]/35 group-hover:bg-white/[0.04] group-hover:shadow-[0_20px_45px_rgba(255,161,73,0.08)] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h4 className="text-base font-bold text-white group-hover:text-[#ffa149] transition duration-300">
                      {item.title}
                    </h4>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#ffa149] bg-[#ffa149]/10 border border-[#ffa149]/25 px-2.5 py-0.5 rounded-full self-start">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-3">
                    {item.institution}
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5">
                    {item.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-[11px] text-white/60">
                        <span className="text-[#ffa149] text-[9px] mt-0.5">▪</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Journey;
