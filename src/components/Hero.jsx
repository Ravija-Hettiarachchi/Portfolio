import React, { useRef, useEffect } from "react";
import VisitorCounter from "./VisitorCounter";
import useScrollReveal from "../hooks/useScrollReveal";
import useTextScramble from "../hooks/useTextScramble";

function Hero() {
  const revealRef = useScrollReveal();
  const honeycombCanvasRef = useRef(null);
  const heroMouseRef = useRef({ x: -1000, y: -1000 });

  const handleHeroMouseMove = (e) => {
    const canvas = honeycombCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    heroMouseRef.current.x = e.clientX - rect.left;
    heroMouseRef.current.y = e.clientY - rect.top;
  };

  const handleHeroMouseLeave = () => {
    heroMouseRef.current.x = -1000;
    heroMouseRef.current.y = -1000;
  };

  const handleNavClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Honeycomb canvas rendering loop
  useEffect(() => {
    const canvas = honeycombCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const hexRadius = 40;
    const hexHeight = hexRadius * Math.sqrt(3);
    const horizDist = hexRadius * 1.5;
    const vertDist = hexHeight;

    let cols = Math.ceil(width / horizDist) + 1;
    let rows = Math.ceil(height / vertDist) + 1;

    let cells = [];
    const initGrid = () => {
      cells = [];
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const cx = c * horizDist;
          const cy = r * vertDist + (c % 2 ? vertDist / 2 : 0);
          cells.push({
            cx,
            cy,
            pulseSpeed: 0.015 + Math.random() * 0.02,
            pulseOffset: Math.random() * Math.PI * 2,
            flashIntensity: 0,
            flashDecay: 0.015 + Math.random() * 0.015,
          });
        }
      }
    };
    initGrid();

    let ripples = [];
    let rippleTimer = 0;

    const drawHexagon = (context, x, y, size) => {
      context.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        context.lineTo(x + size * Math.cos(angle), y + size * Math.sin(angle));
      }
      context.closePath();
    };

    const renderGrid = () => {
      ctx.clearRect(0, 0, width, height);

      // Process ripples
      ripples.forEach((ripple, idx) => {
        ripple.radius += ripple.speed;
        ripple.intensity *= 0.982;
        if (ripple.intensity < 0.01 || ripple.radius > ripple.maxRadius) {
          ripples.splice(idx, 1);
        }
      });

      // Ambient ripple triggers
      rippleTimer++;
      if (rippleTimer > 240) {
        rippleTimer = 0;
        ripples.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 0,
          speed: 3 + Math.random() * 2,
          maxRadius: Math.max(width, height) * 0.8,
          intensity: 0.35 + Math.random() * 0.35,
        });
      }

      // Random cell flashing (data packets)
      if (Math.random() < 0.06) {
        const randomCell = cells[Math.floor(Math.random() * cells.length)];
        if (randomCell) {
          randomCell.flashIntensity = 0.75;
        }
      }

      cells.forEach((cell) => {
        cell.pulseOffset += cell.pulseSpeed;
        const breathing = Math.sin(cell.pulseOffset) * 0.02 + 0.05;

        const dx = cell.cx - heroMouseRef.current.x;
        const dy = cell.cy - heroMouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let hoverGlow = 0;
        if (dist < 200) {
          hoverGlow = (1 - dist / 200) * 0.35;
        }

        let rippleGlow = 0;
        ripples.forEach((ripple) => {
          const rdx = cell.cx - ripple.x;
          const rdy = cell.cy - ripple.y;
          const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
          const diff = Math.abs(rdist - ripple.radius);
          if (diff < 70) {
            rippleGlow += (1 - diff / 70) * ripple.intensity * 0.22;
          }
        });

        if (cell.flashIntensity > 0) {
          cell.flashIntensity -= cell.flashDecay;
        }

        const opacity = Math.min(breathing + hoverGlow + rippleGlow + cell.flashIntensity, 0.75);

        if (opacity > 0.02) {
          drawHexagon(ctx, cell.cx, cell.cy, hexRadius - 1.5);
          
          if (hoverGlow > 0.05 || cell.flashIntensity > 0.1 || rippleGlow > 0.05) {
            ctx.fillStyle = `rgba(255, 122, 50, ${opacity * 0.16})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(255, 138, 61, ${opacity})`;
          } else {
            ctx.strokeStyle = `rgba(255, 138, 61, ${opacity})`;
          }
          
          ctx.lineWidth = hoverGlow > 0.1 ? 1.4 : 0.8;
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(renderGrid);
    };

    renderGrid();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      cols = Math.ceil(width / horizDist) + 1;
      rows = Math.ceil(height / vertDist) + 1;
      initGrid();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  // Scramble animations for eye-catching cyberpunk/security style entry
  const scrambledName = useTextScramble("Ravija", { delay: 500, speed: 45, resolveSpeed: 0.8 });
  const scrambledTitleWord1 = useTextScramble("Cybersecurity Enthusiast", { delay: 900, speed: 30, resolveSpeed: 1.2 });
  const scrambledTitleWord2 = useTextScramble("Designer", { delay: 1400, speed: 40, resolveSpeed: 0.9 });

  return (
    <section
      id="home"
      ref={revealRef}
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative min-h-[98vh] lg:min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-[#120601] via-[#190b04] to-[#0a0401] px-4 py-16 text-white sm:px-6 sm:py-24"
    >
      {/* Interactive Honeycomb Grid Background Canvas */}
      <canvas
        ref={honeycombCanvasRef}
        className="honeycomb-canvas"
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.28),transparent_65%)] blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.18),transparent_70%)] blur-3xl opacity-70" />
        <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,213,168,0.15),transparent_70%)] blur-2xl opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#120601] via-transparent to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:gap-16 relative z-10">
        <div className="flex w-full flex-1 flex-col gap-6 text-center lg:gap-8 lg:text-left">
          <div className="reveal-on-scroll delay-100 inline-flex items-center gap-2.5 self-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-[0.7rem] uppercase tracking-[0.45em] text-white/70 sm:px-7 sm:text-xs lg:self-start">
            Hey, I am <span className="font-semibold text-[#ff7a32] min-w-[70px] inline-block">{scrambledName}</span>
          </div>
          <h1 className="reveal-on-scroll delay-200 text-4xl font-extrabold leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
            <span className="inline-block min-w-[280px]">{scrambledTitleWord1}</span> &{" "}
            <span className="block text-[#ff8a3d] min-w-[120px]">{scrambledTitleWord2}</span>
          </h1>
          <p className="reveal-on-scroll delay-300 mx-auto max-w-2xl text-lg text-white/80 sm:text-xl lg:mx-0">
            I craft resilient digital experiences where automation, security, and design meet. Let’s build interfaces that feel lightning fast while keeping every interaction protected.
          </p>

          <div className="reveal-on-scroll delay-400 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff7a32] to-[#ffa149] px-10 py-4 text-base font-semibold text-[#1c0902] shadow-[0_18px_40px_rgba(255,122,50,0.45)] transition duration-300 hover:scale-[1.04] hover:shadow-[0_22px_45px_rgba(255,122,50,0.55)]"
            >
              Hire me
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "#projects")}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-10 py-4 text-base font-semibold text-white/80 transition duration-300 hover:border-white/35 hover:bg-white/5 hover:text-white"
            >
              View projects
            </a>
          </div>

          <div className="reveal-on-scroll delay-500 mt-2 flex w-full justify-center lg:justify-start">
            <VisitorCounter />
          </div>
        </div>

        <div className="reveal-on-scroll delay-300 relative flex w-full flex-1 justify-center overflow-hidden px-2 sm:px-0 sm:overflow-visible lg:items-start lg:justify-end">
          <div className="relative flex h-[300px] w-[300px] max-w-full items-center justify-center -translate-y-10 sm:h-[380px] sm:w-[380px] sm:-translate-y-20 lg:h-[440px] lg:w-[440px] lg:-translate-y-28 lg:translate-x-16">
            <div className="profile-frame group/avatar">
              <div className="profile-frame__core relative z-1">
                <div className="hex-avatar">
                  <img src="/profil-pic.jpg" alt="Ravija hero avatar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
