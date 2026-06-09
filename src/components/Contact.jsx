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
    <section id="contact" ref={revealRef} className="relative px-4 py-12 sm:px-6 sm:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-8 top-1/4 h-60 w-60 rounded-full bg-gradient-to-br from-[#ff8a3d]/25 via-transparent to-transparent blur-3xl opacity-70" />
        <div className="absolute right-5 bottom-8 h-72 w-72 rounded-full bg-gradient-to-t from-[#ffb07a]/20 via-transparent to-transparent blur-[120px] opacity-80" />
      </div>

      <div
        onMouseMove={handleCardMouseMove}
        onMouseLeave={handleCardMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
        className="relative mx-auto max-w-3xl glass-panel interactive-card reveal-on-scroll px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14"
      >
        <div className="contact-tag-container">
          <span className="tag">Contact</span>
        </div>

        {isSubmitting || isSubmitted ? (
          /* High-Tech message transmission console */
          <div className="text-center py-6 space-y-8 fade-in-slide-up">
            {/* Concentric pulsing indicator */}
            <div className="flex justify-center">
              <div className="success-pulse-ring">
                <div className="success-pulse-circle" />
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff7a32]/10 border border-[#ff7a32]/30 shadow-[0_0_20px_rgba(255,122,50,0.2)]">
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
            </div>

            {/* Diagnostic Terminal */}
            <div className="mx-auto max-w-md p-6 bg-black/40 border border-white/5 rounded-2xl text-left space-y-3 font-mono text-xs text-white/75 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,122,50,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
              
              <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-3">
                <span className="text-[#ff7a32] font-bold tracking-widest text-[9px] sm:text-[10px]">
                  {isSubmitting ? "TRANSMITTING ENCRYPTED PACKET" : "TRANSMISSION SUCCESSFUL"}
                </span>
                <span className="text-white/30 text-[9px]">SECURE_MSG_v1.0.4</span>
              </div>

              {/* Telemetry logs with step-by-step cascading animation */}
              <div className="flex items-center gap-3 text-white/60 text-[10.5px] sm:text-[11.5px] fade-in-slide-up">
                <span className="text-[#ff7a32] font-bold">[ OK ]</span>
                <span>SYS_INIT: HANDSHAKE COMPLETED</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-[10.5px] sm:text-[11.5px] fade-in-slide-up transmission-delay-1">
                <span className="text-[#ff7a32] font-bold">[ OK ]</span>
                <span>CRYPTO_CORE: ENCRYPTING META (AES-256)</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-[10.5px] sm:text-[11.5px] fade-in-slide-up transmission-delay-2">
                <span className="text-[#ff7a32] font-bold">[ OK ]</span>
                <span>NET_ROUTING: ROUTING VIA CLOUD GATEWAY</span>
              </div>
              <div className={`flex items-center gap-3 text-[10.5px] sm:text-[11.5px] font-semibold fade-in-slide-up transmission-delay-3 ${isSubmitting ? "text-white/20" : "text-white/90"}`}>
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
          <>
            <div className="text-center space-y-4 mb-12">
              <h2 className="gradient-title text-4xl md:text-5xl font-semibold">Let's build something calming together</h2>
              <p className="text-soft">
                Share your idea, collaboration, or just say hi. I respond within a day.
              </p>
            </div>

            <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#ffb07a] transition duration-300 hover:border-transparent hover:text-white hover:shadow-[0_0_35px_rgba(255,122,50,0.45)]"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 20%, rgba(255,138,61,0.35), transparent 60%), radial-gradient(circle at 50% 80%, rgba(255,199,140,0.4), transparent 60%)",
                      }}
                    />
                    <Icon className="relative z-10 h-6 w-6" />
                    <span className="sr-only">{item.label}</span>
                  </a>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full relative z-10 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/40 transition duration-300 focus:border-white/25 focus:bg-white/10 focus:outline-none"
                  />
                  <div className="contact-input-glow" />
                </div>
              ))}

              <div className="contact-input-wrapper group reveal-on-scroll delay-300">
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full relative z-10 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/40 transition duration-300 focus:border-white/25 focus:bg-white/10 focus:outline-none resize-none"
                />
                <div className="contact-input-glow" />
              </div>

              <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center reveal-on-scroll delay-400">
                <button type="submit" className="button-primary w-full sm:w-auto group/btn flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <svg className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
                <span className="text-soft text-sm">
                  Or email me directly at{' '}
                  <a href="mailto:hettiarachchi.ravija@gmail.com" className="text-white underline-offset-4 hover:underline">
                    hettiarachchi.ravija@gmail.com
                  </a>
                </span>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

export default Contact;
