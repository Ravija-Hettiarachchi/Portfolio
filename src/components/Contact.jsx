import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/ravija-hettiarachchi',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.5 7.9 11 .6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6.9.1-.8.4-1.3.7-1.6-2.7-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.6-2.8 5.6-5.5 5.9.4.3.8 1 0 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.9 7.9-11C23.5 5.6 18.4.5 12 .5z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ravija-hettiarachchi',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.85-3.037-1.85 0-2.132 1.445-2.132 2.94v5.666H9.357V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.371-1.85 3.604 0 4.27 2.372 4.27 5.458v6.283z"
            fill="currentColor"
          />
          <rect x="4.553" y="9" width="3.553" height="11.452" fill="currentColor" />
          <circle cx="6.33" cy="5.5" r="2.03" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:hettiarachchi.ravija@gmail.com',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.2 5.5h17.6c.74 0 1.2.6 1.2 1.3v10.4c0 .8-.6 1.3-1.2 1.3H3.2c-.8 0-1.2-.7-1.2-1.3V6.8c0-.7.5-1.3 1.2-1.3z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
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
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-8 top-1/4 h-60 w-60 rounded-full bg-gradient-to-br from-[#ff8a3d]/25 via-transparent to-transparent blur-3xl opacity-70" />
        <div className="absolute right-5 bottom-8 h-72 w-72 rounded-full bg-gradient-to-t from-[#ffb07a]/20 via-transparent to-transparent blur-[120px] opacity-80" />
      </div>

      <div className="max-w-3xl mx-auto glass-panel px-8 py-16 md:px-16 md:py-20 relative">
        <div className="absolute inset-x-12 -top-7 flex justify-center">
          <span className="tag">Contact</span>
        </div>

        <div className="text-center space-y-4 mb-12">
          <h2 className="gradient-title text-4xl md:text-5xl font-semibold">Let's build something calming together</h2>
          <p className="text-soft">
            Share your idea, collaboration, or just say hi. I respond within a day.
          </p>
        </div>

        <div className="mb-10 flex items-center justify-center gap-4 md:gap-6">
          {socialLinks.map((item) => (
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
              <span className="relative flex items-center justify-center">
                {item.icon}
              </span>
              <span className="sr-only">{item.label}</span>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { name: 'name', type: 'text', placeholder: 'Name' },
            { name: 'email', type: 'email', placeholder: 'Email' },
          ].map((field) => (
            <div key={field.name} className="group relative">
              <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/40 transition duration-300 focus:border-white/25 focus:bg-white/10 focus:outline-none"
              />
            </div>
          ))}

          <div className="group relative">
            <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/40 transition duration-300 focus:border-white/25 focus:bg-white/10 focus:outline-none resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
            <button type="submit" className="button-primary w-full sm:w-auto">
              Send Message
            </button>
            <span className="text-soft text-sm">
              Or email me directly at{' '}
              <a href="mailto:hettiarachchi.ravija@gmail.com" className="text-white underline-offset-4 hover:underline">
                hettiarachchi.ravija@gmail.com
              </a>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
