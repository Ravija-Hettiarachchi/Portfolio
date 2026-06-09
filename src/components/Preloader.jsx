"use client";

import React, { useEffect, useState, useRef } from "react";

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
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  // Smooth progress increment logic
  useEffect(() => {
    let frameId;

    const animate = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          cancelAnimationFrame(frameId);
          return 100;
        }

        // Slow down progress step (~4.5s total) with micro-jitters
        const jitter = Math.random() * 0.16 + 0.28;
        const next = prev + jitter;
        return Math.min(next, 100);
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  // Fade out component when complete
  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setIsVisible(false), 950);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  // Interactive 3D tilt logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Calculate normalized position between -1 and 1
      const nx = (e.clientX / innerWidth - 0.5) * 2;
      const ny = (e.clientY / innerHeight - 0.5) * 2;
      // Set rotation degrees (max 15 deg)
      setTilt({ x: ny * -15, y: nx * 15 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Particle background logic
  useEffect(() => {
    if (!isVisible) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initial particles setup
    const particles = [];
    const particleCount = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 15000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.4 + 0.15
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Grid pattern lines
      ctx.strokeStyle = "rgba(255, 122, 50, 0.02)";
      ctx.lineWidth = 1;
      const step = 45;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // 2. Update & draw nodes
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce/Wrap boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 122, 50, ${p.alpha})`;
        ctx.fill();

        // 3. Draw connection lines
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 122, 50, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-[#060301] via-[#0d0502] to-[#010000] transition-opacity duration-700 select-none overflow-hidden ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* High-tech Canvas Node Background */}
      <canvas ref={canvasRef} className="particle-canvas" />

      {/* Cyber Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#ff7a32]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#ffa149]/5 blur-[140px] pointer-events-none" />

      <div className="reactor-container">
        {/* Tilting Interactive Reactor Card */}
        <div
          className="reactor-card"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)"
          }}
        >
          {/* Futuristic Concentric Reactor rings */}
          <div className="reactor-graphic">
            <svg className="reactor-svg" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <linearGradient id="amber-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff7a32" />
                  <stop offset="50%" stopColor="#ffa149" />
                  <stop offset="100%" stopColor="#ff7a32" />
                </linearGradient>
                <linearGradient id="amber-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffa149" />
                  <stop offset="100%" stopColor="#ff8a3d" stopOpacity="0.4" />
                </linearGradient>
                <radialGradient id="core-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff7a32" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#ff7a32" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* 1. Outer Ring (Slow Clockwise) */}
              <circle
                className="reactor-ring reactor-ring--outer"
                cx="100"
                cy="100"
                r="90"
                stroke="url(#amber-grad-1)"
                strokeWidth="1.5"
                strokeDasharray="40 15 100 20 20 10"
                fill="none"
              />

              {/* 2. Middle Ring (Counter-Clockwise) */}
              <circle
                className="reactor-ring reactor-ring--middle"
                cx="100"
                cy="100"
                r="72"
                stroke="url(#amber-grad-2)"
                strokeWidth="2"
                strokeDasharray="60 30 15 20"
                fill="none"
              />

              {/* 3. Inner Octagonal Scanner Core (Clockwise) */}
              <polygon
                className="reactor-ring reactor-ring--inner"
                points="100,42 141,59 158,100 141,141 100,158 59,141 42,100 59,59"
                stroke="#ff7a32"
                strokeWidth="1"
                strokeDasharray="12 8"
                fill="none"
                opacity="0.75"
              />

              {/* 4. Glowing Circuit Nodes */}
              <circle cx="100" cy="10" r="3" fill="#ff7a32" className="reactor-node" />
              <circle cx="190" cy="100" r="3" fill="#ffa149" className="reactor-node" />
              <circle cx="100" cy="190" r="3" fill="#ff7a32" className="reactor-node" />
              <circle cx="10" cy="100" r="3" fill="#ffa149" className="reactor-node" />

              {/* 5. Pulsing Inner Glowing Core */}
              <circle
                className="reactor-core-pulsar"
                cx="100"
                cy="100"
                r="38"
                fill="url(#core-grad)"
              />
              
              {/* 6. Rotating Dashed Core Border */}
              <circle
                className="reactor-core-border"
                cx="100"
                cy="100"
                r="34"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="0.75"
                strokeDasharray="4 6"
                fill="none"
              />
            </svg>

            {/* Central Progress Display */}
            <div className="reactor-center">
              <span className="reactor-percent-glow">{Math.round(progress)}%</span>
              <span className="reactor-label">SYS_LOAD</span>
            </div>
          </div>

          {/* Cybersecurity/Developer Diagnostics Terminal */}
          <div className="diagnostics-panel text-left space-y-1.5 select-none">
            <div className="diagnostics-header">
              <span className="text-[#ff7a32] font-semibold uppercase tracking-widest text-[8px] sm:text-[9px]">
                BOOT DIAGNOSTICS MODULE
              </span>
              <span className="text-white/20 text-[8px] sm:text-[9px]">REV_v2.0.4</span>
            </div>

            {statusMessages.map((msg, idx) => {
              const isDone = progress >= msg.limit;
              const isCurrent = progress < msg.limit && (idx === 0 || progress >= statusMessages[idx - 1].limit);

              return (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 transition-all duration-300 ${
                    isDone
                      ? "text-[#ff8a3d]"
                      : isCurrent
                      ? "text-white font-medium animate-pulse"
                      : "text-white/10"
                  }`}
                >
                  <span className="font-bold w-[45px] tracking-wide text-[8px] sm:text-[9.5px]">
                    {isDone ? "[ OK ]" : isCurrent ? "[RUN]" : "[WAIT]"}
                  </span>
                  <span className="tracking-widest uppercase text-[8px] sm:text-[9.5px]">
                    {msg.text}
                    {isCurrent && <span className="inline-block w-1.5 h-3 bg-white ml-1 animate-[shimmer_1s_infinite]" />}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
