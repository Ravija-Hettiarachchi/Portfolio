"use client";

import React, { useEffect, useState, useRef } from "react";

const neonColors = [
  "rgba(0, 240, 255, ",  // Neon Blue
  "rgba(255, 0, 85, ",   // Neon Red
  "rgba(57, 255, 20, ",  // Neon Green
  "rgba(255, 226, 17, ", // Neon Yellow
  "rgba(255, 103, 0, "   // Neon Orange
];

function Preloader() {
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  // 1. Manage Lifecycle & Scroll Locking
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
    }, 2300);

    const destroyTimeout = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, 3000);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(destroyTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  // 2. Track Cursor Position
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // 3. Render Loop for 3D Swirling Neon Capsules (Dashes)
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

    const particleCount = 280;
    const particles = [];
    const focalLength = 360;

    // Viewport camera position (for 3D parallax sway)
    let camX = 0;
    let camY = 0;

    const createParticle = (zDepth = null) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      // Spawn scattered randomly in 3D coordinate space relative to center
      const angle = Math.random() * Math.PI * 2;
      const radius = (Math.random() * 0.95 + 0.05) * Math.min(w, h) * 1.1;

      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: zDepth !== null ? zDepth : Math.random() * 950 + 50,
        vx: 0,
        vy: 0,
        vz: -(Math.random() * 1.5 + 1.2), // Slow forward speed (moves towards viewer)
        colorPrefix: neonColors[Math.floor(Math.random() * neonColors.length)],
        baseSize: Math.random() * 1.5 + 2.8, // Thicker base capsule thickness (similar to image)
        angleOffset: Math.random() * Math.PI * 2
      };
    };

    // Populate particles list
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const render = () => {
      // Clear with solid color to keep particles crisp and distinct (no motion trails)
      ctx.fillStyle = "#040206";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "screen";

      const time = Date.now() * 0.0018;
      const w = canvas.width;
      const h = canvas.height;
      const cX = w / 2;
      const cY = h / 2;

      const mouseActive = mouseRef.current.active;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      // Smooth camera sway (3D parallax) driven by cursor position
      const targetCamX = mouseActive ? (mouseX - cX) * 0.38 : 0;
      const targetCamY = mouseActive ? (mouseY - cY) * 0.38 : 0;
      camX += (targetCamX - camX) * 0.08;
      camY += (targetCamY - camY) * 0.08;

      // Sort particles by depth Z (back-to-front rendering for proper 3D layering)
      particles.sort((a, b) => b.z - a.z);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Perspective projection math (Camera offset by Z depth)
        const rx = p.x - camX * (1 - p.z / 1000);
        const ry = p.y - camY * (1 - p.z / 1000);

        const scale = focalLength / (focalLength + p.z);
        const projX = cX + rx * scale;
        const projY = cY + ry * scale;

        // 2. Mouse Pull & Swirling Trail Force (responsive to cursor)
        if (mouseActive) {
          const dx = mouseX - projX;
          const dy = mouseY - projY;
          const dist = Math.hypot(dx, dy) || 1;

          if (dist < 420) {
            const pullFactor = 1 - dist / 420;
            const force = pullFactor * 0.58 * (1 - p.z / 1500);

            // Gravitational pull directly towards cursor
            p.vx += (dx / dist) * force * 1.5;
            p.vy += (dy / dist) * force * 1.5;

            // Spiral/orbital swirl around cursor to form a particle cloud trail
            p.vx += (-dy / dist) * force * 1.1;
            p.vy += (dx / dist) * force * 1.1;
          }
        }

        // Apply friction to dampen speed dynamically
        p.vx *= 0.92;
        p.vy *= 0.92;

        // Update 3D space positions
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz; // Move closer to camera

        // Reset particle when it flies past the camera (Z <= 10)
        if (p.z <= 10) {
          Object.assign(p, createParticle(1000));
          continue;
        }

        // 3. Compute Capsule Style (distinct thicker dashes matching reference image)
        const speed = Math.hypot(p.vx, p.vy);
        
        // Capsule length and thickness scales with depth (focal scale) and speed (stretching)
        const length = (10 + speed * 1.6) * scale * 2.2;
        const thickness = Math.max(1.5, Math.min(6.5, (p.baseSize + speed * 0.05) * scale * 2.2));

        // Dash orientation: points along movement vector.
        // If stationary (idle), align along a swirling vortex spiral that curves around center (matching reference image)
        let angle;
        if (speed > 0.28) {
          angle = Math.atan2(p.vy, p.vx);
        } else {
          // Curving radial/spiral alignment: atan2(ry, rx) points outward. Adding 0.35 creates a swirling spiral vortex curve.
          const defaultAngle = Math.atan2(ry, rx) + 0.35;
          const wave = Math.sin(time + p.angleOffset) * 0.15;
          angle = defaultAngle + wave;
        }

        // Fade based on Z depth (farther particles are faint, closer are bright)
        const zOpacity = 1 - p.z / 1000;
        const alpha = Math.max(0.12, Math.min(0.95, zOpacity * 0.85 + 0.1));

        const coreColor = `${p.colorPrefix}${alpha})`;

        // 4. Draw Thick Capsule Dash on Canvas
        ctx.save();
        ctx.translate(projX, projY);
        ctx.rotate(angle);

        // Crisp Core Layer (Thicker capsule, no outer glow shading to keep them distinct)
        ctx.beginPath();
        ctx.moveTo(-length / 2, 0);
        ctx.lineTo(length / 2, 0);
        ctx.lineWidth = thickness;
        ctx.lineCap = "round";
        ctx.strokeStyle = coreColor;
        ctx.stroke();

        ctx.restore();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible, isFading]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#040206] transition-opacity duration-700 select-none overflow-hidden ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

export default Preloader;
