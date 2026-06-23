import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

function Footer() {
  const socialLinks = [
    {
      href: 'https://github.com/ravija-hettiarachchi',
      icon: FaGithub,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/ravija-hettiarachchi',
      icon: FaLinkedinIn,
      label: 'LinkedIn',
    },
    {
      href: '#', // Facebook link or placeholder
      icon: FaFacebookF,
      label: 'Facebook',
    },
    {
      href: 'mailto:hettiarachchi.ravija@gmail.com',
      icon: FiMail,
      label: 'Email',
    },
  ];

  return (
    <footer className="relative px-4 pb-16 pt-20 sm:px-6 bg-gradient-to-b from-transparent to-black/30">
      {/* Premium glowing top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff7a32]/25 to-transparent" />
      
      <div className="mx-auto max-w-6xl flex flex-col items-center text-center space-y-6">

        {/* Name */}
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a32] to-[#ffa149] tracking-tight">
          Ravija Hettiarachchi
        </h2>

        {/* Description / Subtitle */}
        <p className="text-sm text-white/50 max-w-md font-normal leading-relaxed">
          Cybersecurity enthusiast. Designing interfaces with precision.
        </p>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-8 pt-2">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-white/40 hover:text-[#ff7a32] transition duration-300 transform hover:scale-110 filter hover:drop-shadow-[0_0_6px_rgba(255,122,50,0.55)]"
              >
                <Icon className="h-5.5 w-5.5" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-[11px] font-mono tracking-wider text-white/30 pt-4">
          © 2026 Ravija Hettiarachchi. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
