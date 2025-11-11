import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
        <div className="absolute left-8 top-1/4 h-60 w-60 rounded-full bg-gradient-to-br from-[#60a5fa]/25 via-transparent to-transparent blur-3xl opacity-70" />
        <div className="absolute right-5 bottom-8 h-72 w-72 rounded-full bg-gradient-to-t from-[#c084fc]/20 via-transparent to-transparent blur-[120px] opacity-80" />
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
              <a href="mailto:ravija@example.com" className="text-white underline-offset-4 hover:underline">
                ravija@example.com
              </a>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
