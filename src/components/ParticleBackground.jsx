"use client";

import React from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Stable reference initialization function (defined outside to prevent rerender lifecycle issues in tsParticles v4)
const initFn = async (engine) => {
  await loadSlim(engine);
};

function ParticleBackground() {
  const options = {
    fpsLimit: 120, // Smooth execution on high-refresh-rate displays
    interactivity: {
      detectsOn: "window", // global window-level tracking so canvas is click-through
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 120, // 120px radius repulsion
          duration: 0.4,
          speed: 1.2,
        },
      },
    },
    particles: {
      color: {
        // Neon green, blue, and red color palette
        value: ["#39ff14", "#00f0ff", "#ff073a"],
        animation: {
          enable: true,
          speed: 15, // Smooth gradual color cycling
          sync: false, // Randomized color phases for variety
        },
      },
      links: {
        enable: false, // Dots only, no link lines
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 0.7, // Slow elegant drifting
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 220, // Increased count of floating dots
      },
      opacity: {
        value: { min: 0.35, max: 0.8 }, // Improved opacity for better presence
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1.5, max: 3.5 }, // Varying sizes for depth perception
      },
    },
    detectRetina: true,
  };

  return (
    <ParticlesProvider init={initFn}>
      <div className="fixed inset-0 w-screen h-screen -z-10 pointer-events-none select-none">
        <Particles
          id="tsparticles"
          options={options}
          className="w-full h-full"
        />
      </div>
    </ParticlesProvider>
  );
}

export default ParticleBackground;
