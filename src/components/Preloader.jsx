"use client";

import React, { useEffect, useState } from "react";

const statusMessages = [
  { limit: 10, text: "SYS_BOOT: INITIATING CRYPTOGRAPHIC HANDSHAKE" },
  { limit: 22, text: "SECURE SHELL CONNECTION ESTABLISHED [PORT 22]" },
  { limit: 38, text: "DECRYPTING CORE DATA CONTEXTS & ASSETS" },
  { limit: 50, text: "INITIALIZING THREE.JS WEBGL RENDER ENGINE" },
  { limit: 65, text: "GENERATING HIGH-FIDELITY HONEYCOMB GRID SYSTEM" },
  { limit: 78, text: "ESTABLISHING INTERACTIVE MOUSE PARALLAX SENSORS" },
  { limit: 90, text: "SYNCHRONIZING PHOTOGRAPHY COLOR CORRECTION CORES" },
  { limit: 100, text: "ALL SYSTEMS OPERATIONAL. ROUTING SUCCESSFUL" }
];

function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let frameId;

    const animate = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          cancelAnimationFrame(frameId);
          return 100;
        }

        // Slow down progress step (~0.35 per frame = ~4.5 seconds at 60fps)
        // Add random jitter to make it feel like a real calculation
        const jitter = Math.random() * 0.16 + 0.28;
        const next = prev + jitter;
        return Math.min(next, 100);
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setIsVisible(false), 950);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-[#050201] via-[#0c0402] to-[#010000] transition-opacity duration-700 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6 px-4">
        {/* Animated Cyber Core Shield Loader */}
        <div className="hex-loader">
          <div className="hex-border hex-border--outer" />
          <div className="hex-border hex-border--inner" />
          <div className="hex-highlight" />
          <svg className="hex-scan" viewBox="0 0 200 220" aria-hidden="true">
            <polygon
              className="hex-scan__path"
              points="100,10 190,65 190,155 100,210 10,155 10,65"
              fill="none"
            />
          </svg>
          <div className="hex-core">
            <span className="hex-percent">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Cybersecurity Status Diagnostics Panel */}
        <div className="w-[310px] sm:w-[350px] font-mono text-[9px] sm:text-[10px] text-white/50 bg-[#120703]/80 border border-[#ff8a3d]/15 p-4 rounded-2xl text-left space-y-1.5 shadow-[inset_0_0_20px_rgba(255,122,50,0.06),0_15px_35px_rgba(0,0,0,0.7)] backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-[#ff8a3d]/15 pb-2 mb-2">
            <span className="text-[#ff7a32] font-semibold uppercase tracking-wider text-[8px] sm:text-[9px]">SYSTEM DIAGNOSTICS</span>
            <span className="text-white/30 text-[8px] sm:text-[9px]">REV_v1.0.8</span>
          </div>

          {statusMessages.map((msg, idx) => {
            const isDone = progress >= msg.limit;
            const isCurrent = progress < msg.limit && (idx === 0 || progress >= statusMessages[idx - 1].limit);
            
            return (
              <div
                key={idx}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  isDone 
                    ? "text-[#ff8a3d]" 
                    : isCurrent 
                      ? "text-white animate-pulse" 
                      : "text-white/15"
                }`}
              >
                <span className="font-bold w-[45px]">
                  {isDone ? "[ OK ]" : isCurrent ? "[RUN]" : "[WAIT]"}
                </span>
                <span className="tracking-wide uppercase">{msg.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Preloader;
