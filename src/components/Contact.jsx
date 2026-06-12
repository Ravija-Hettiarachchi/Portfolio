import React, { useState } from 'react';
import useScrollReveal from "../hooks/useScrollReveal";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

function Contact() {
  const revealRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/ravija-hettiarachchi',
      icon: FaGithub,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ravija-hettiarachchi',
      icon: FaLinkedinIn,
    },
    {
      label: 'Email',
      href: 'mailto:hettiarachchi.ravija@gmail.com',
      icon: FiMail,
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulated transmission progress sequence (3.2 seconds)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Encrypted form transmission successfully routed:', formData);
    }, 3200);
  };

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--card-mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--card-mouse-y", `${y}px`);

    // Calculate normalized position relative to center of the card
    const nx = (x / rect.width - 0.5) * 2; // -1 to 1
    const ny = (y / rect.height - 0.5) * 2; // -1 to 1
    setTilt({ x: ny * -6, y: nx * 6 }); // Subtle premium 6-degree rotation
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="contact" ref={revealRef} className="relative px-4 py-16 sm:px-6 sm:py-24 overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-8 top-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-[#ff8a3d]/15 via-transparent to-transparent blur-3xl opacity-70" />
        <div className="absolute right-5 bottom-8 h-80 w-80 rounded-full bg-gradient-to-t from-[#ffb07a]/15 via-transparent to-transparent blur-[120px] opacity-80" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Cyber HUD Status & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 rounded-[32px] border border-white/5 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,122,50,0.01)_1px,transparent_1px)] bg-[size:100%_8px] pointer-events-none" />
            
            <div className="space-y-6">
              <span className="tag inline-flex">Contact Channel</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">
                Let's secure & build
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Have a project or security operations tool in mind? Drop a message through the encrypted gateway, or link up directly on social lines.
              </p>

              {/* Secure Channel HUD Panel */}
              <div className="p-5 bg-black/40 border border-white/5 rounded-2xl space-y-3 font-mono text-[11px] text-white/65 relative overflow-hidden select-none">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-[#ff7a32] font-bold tracking-widest text-[9px]">SECURITY GATEWAY STATUS</span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold text-[9px] uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping-glow" />
                    Secure Link Active
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>CHANNEL TYPE:</span>
                  <span className="text-white font-semibold">AES-256-GCM / TLS 1.3</span>
                </div>

                <div className="flex justify-between">
                  <span>TRANS-CORE:</span>
                  <span className="text-[#ffa149] font-semibold">GATEWAY_ROUTER_NODE</span>
                </div>

                <div className="flex justify-between">
                  <span>LOCATION:</span>
                  <span className="text-white/45">SECURE_COMM_ENVELOPE</span>
                </div>
              </div>
            </div>

            {/* Direct Social Channels */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">DIRECT CONNECTIONS</p>
              <div className="flex flex-col gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-sm text-[#ffb07a] transition-all duration-300 hover:border-[#ff8a3d]/25 hover:bg-[#ff7a32]/5 hover:text-white"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white transition duration-300 group-hover:scale-105 group-hover:bg-[#ff7a32]/10 group-hover:text-[#ffa149]">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <div className="text-left">
                        <span className="block font-mono text-[9px] uppercase tracking-widest text-white/30">{item.label}</span>
                        <span className="text-[11px] font-bold text-white/70 group-hover:text-white transition duration-300">
                          {item.label === 'Email' ? 'hettiarachchi.ravija@gmail.com' : `@ravija-hettiarachchi`}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Encrypted Form Panel */}
          <div className="lg:col-span-7 relative">
            <div
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
              className="h-full relative glass-panel interactive-card px-8 py-10 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.5)] rounded-[32px]"
            >
              {isSubmitting || isSubmitted ? (
                /* High-Tech message transmission console */
                <div className="text-center py-8 space-y-8 h-full flex flex-col justify-center items-center fade-in-slide-up">
                  {/* Concentric pulsing indicator */}
                  <div className="success-pulse-ring">
                    <div className="success-pulse-circle" />
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff7a32]/10 border border-[#ff7a32]/30 shadow-[0_0_20px_rgba(255,122,50,0.2)]">
                      {isSubmitting ? (
                        <svg className="h-6 w-6 text-[#ff7a32] animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6 text-[#ff7a32] animate-[bounce_1.5s_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Diagnostic Terminal */}
                  <div className="w-full max-w-md p-6 bg-black/40 border border-white/5 rounded-2xl text-left space-y-3 font-mono text-xs text-white/75 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,122,50,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
                    
                    <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-3">
                      <span className="text-[#ff7a32] font-bold tracking-widest text-[9px]">
                        {isSubmitting ? "TRANSMITTING ENCRYPTED PACKET" : "TRANSMISSION SUCCESSFUL"}
                      </span>
                      <span className="text-white/30 text-[9px]">SECURE_MSG_v1.0.4</span>
                    </div>

                    <div className="flex items-center gap-3 text-white/60 text-[10.5px] fade-in-slide-up">
                      <span className="text-[#ff7a32] font-bold">[ OK ]</span>
                      <span>SYS_INIT: HANDSHAKE COMPLETED</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60 text-[10.5px] fade-in-slide-up transmission-delay-1">
                      <span className="text-[#ff7a32] font-bold">[ OK ]</span>
                      <span>CRYPTO_CORE: ENCRYPTING META (AES-256)</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60 text-[10.5px] fade-in-slide-up transmission-delay-2">
                      <span className="text-[#ff7a32] font-bold">[ OK ]</span>
                      <span>NET_ROUTING: ROUTING VIA CLOUD GATEWAY</span>
                    </div>
                    <div className={`flex items-center gap-3 text-[10.5px] font-semibold fade-in-slide-up transmission-delay-3 ${isSubmitting ? "text-white/20" : "text-white/90"}`}>
                      <span className="text-[#ff7a32] font-bold">{isSubmitting ? "[WAIT]" : "[DONE]"}</span>
                      <span>PACKET DELIVERED & DISPATCHED SUCCESSFULLY</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="pt-2">
                      <div className="transmission-bar-bg">
                        <div className={`transmission-bar-fill ${isSubmitted ? "w-full" : "w-[65%]"}`} />
                      </div>
                    </div>
                  </div>

                  {/* Sub-text content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {isSubmitting ? "Transmitting data..." : `Message sent, ${formData.name}!`}
                    </h3>
                    <p className="text-white/65 text-sm max-w-sm mx-auto leading-relaxed">
                      {isSubmitting 
                        ? "Establishing cryptographic handshake and packaging your inputs into a secure transmission packet."
                        : "Your message has successfully traversed the stack. I will review it and reply within 24 hours."
                      }
                    </p>
                  </div>

                  {/* Reset Button (Only shows after submit completes) */}
                  {isSubmitted && (
                    <div className="pt-4 fade-in-slide-up">
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', message: '' });
                        }}
                        className="button-ghost text-xs tracking-wider"
                      >
                        Send Another Message
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* Normal Form Layout */
                <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col justify-between">
                  <div className="space-y-2 text-left">
                    <h4 className="text-2xl font-bold text-white tracking-tight">Send a secure message</h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Fill out the form below. Each field is validated locally before dispatching.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: 'name', type: 'text', placeholder: 'Name' },
                      { name: 'email', type: 'email', placeholder: 'Email' },
                    ].map((field, index) => (
                      <div key={field.name} className={`contact-input-wrapper group reveal-on-scroll delay-${(index + 1) * 100}`}>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          required
                          value={formData[field.name]}
                          onChange={handleChange}
                          className="w-full relative z-10 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/40 transition duration-300 focus:border-[#ff8a3d]/45 focus:bg-white/10 focus:outline-none"
                        />
                        <div className="contact-input-glow" />
                      </div>
                    ))}

                    <div className="contact-input-wrapper group reveal-on-scroll delay-300">
                      <textarea
                        name="message"
                        placeholder="Tell me about your project..."
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full relative z-10 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/40 transition duration-300 focus:border-[#ff8a3d]/45 focus:bg-white/10 focus:outline-none resize-none"
                      />
                      <div className="contact-input-glow" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center reveal-on-scroll delay-400">
                    <button type="submit" className="button-primary w-full sm:w-auto group/btn flex items-center justify-center gap-2">
                      <span>Send Message</span>
                      <svg className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </button>
                    <span className="text-soft text-[11px] leading-snug sm:text-xs text-left">
                      Or email directly:{' '}
                      <a href="mailto:hettiarachchi.ravija@gmail.com" className="text-white hover:text-[#ffb07a] transition duration-300 underline underline-offset-4 decoration-white/20">
                        hettiarachchi.ravija@gmail.com
                      </a>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}

export default Contact;
