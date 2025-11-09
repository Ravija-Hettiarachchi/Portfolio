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
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="bg-[#0D0D0D] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00F6FF] text-center mb-4">Contact Me</h2>
        <p className="text-white/60 text-center mb-12">Let's build something meaningful.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-[#00F6FF]/50 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00F6FF] focus:shadow-[0_0_15px_#00F6FF] transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-[#00F6FF]/50 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00F6FF] focus:shadow-[0_0_15px_#00F6FF] transition-all duration-300"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-[#00F6FF]/50 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00F6FF] focus:shadow-[0_0_15px_#00F6FF] transition-all duration-300 resize-none"
          />
          <button
            type="submit"
            className="w-full px-8 py-4 border-2 border-[#00F6FF] text-[#00F6FF] font-semibold rounded-lg hover:bg-[#00F6FF] hover:text-[#0D0D0D] hover:shadow-[0_0_25px_#00F6FF] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
