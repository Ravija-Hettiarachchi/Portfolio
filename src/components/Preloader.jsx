import React, { useEffect, useState } from "react";

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

        const next = prev + 0.6;
        return Math.min(next, 100);
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setIsVisible(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-[#050201] via-[#0c0402] to-[#010000] transition-opacity duration-700 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
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
        <p className="text-xs uppercase tracking-[0.5em] text-white/60" aria-live="polite">
          Initializing
        </p>
      </div>
    </div>
  );
}

export default Preloader;

