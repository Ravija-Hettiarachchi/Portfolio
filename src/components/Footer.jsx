import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0D0D0D] py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Neon Divider Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#00F6FF] to-transparent mb-8 opacity-50"></div>
        
        <div className="text-center">
          <p className="text-white/60 text-sm">
            © 2025 Ravija — Crafted With Purpose
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
