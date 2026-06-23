import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * DottedGlowBackground - A high-performance React background component featuring
 * an elegant, dark-themed "anti-gravity" aesthetic with floating glowing orbs
 * underneath a subtle grid of dots.
 */
function DottedGlowBackground({ 
  children, 
  className = "", 
  contentClassName = "",
  dotColor = "rgba(255, 255, 255, 0.08)", 
  dotSize = "24px" 
}) {
  // Configured glowing orbs with individual paths, scale shifts, and breathing pulses.
  const orbs = [
    {
      id: "orb-cyan",
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      size: "w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px]",
      blur: "blur-[90px] sm:blur-[130px]",
      x: ["-10%", "15%", "-5%", "-10%"],
      y: ["10%", "-15%", "25%", "10%"],
      scale: [1, 1.12, 0.92, 1],
      opacity: [0.4, 0.6, 0.3, 0.4],
      duration: 22,
    },
    {
      id: "orb-purple",
      gradient: "from-purple-600/20 via-fuchsia-500/10 to-transparent",
      size: "w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]",
      blur: "blur-[80px] sm:blur-[120px]",
      x: ["110%", "85%", "100%", "110%"],
      y: ["20%", "45%", "10%", "20%"],
      scale: [1, 0.9, 1.1, 1],
      opacity: [0.35, 0.5, 0.25, 0.35],
      duration: 25,
    },
    {
      id: "orb-indigo",
      gradient: "from-indigo-600/25 via-blue-600/8 to-transparent",
      size: "w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px]",
      blur: "blur-[100px] sm:blur-[140px]",
      x: ["50%", "35%", "65%", "50%"],
      y: ["80%", "60%", "95%", "80%"],
      scale: [0.95, 1.05, 0.9, 0.95],
      opacity: [0.3, 0.45, 0.2, 0.3],
      duration: 28,
    },
    {
      id: "orb-orange",
      gradient: "from-[#ff7a32]/15 via-[#ffa149]/5 to-transparent",
      size: "w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px]",
      blur: "blur-[70px] sm:blur-[110px]",
      x: ["-5%", "20%", "10%", "-5%"],
      y: ["75%", "90%", "60%", "75%"],
      scale: [1, 1.15, 0.95, 1],
      opacity: [0.25, 0.4, 0.2, 0.25],
      duration: 20,
    }
  ];

  return (
    <div className={`relative w-full min-h-screen overflow-hidden bg-slate-950 text-white ${className}`}>
      
      {/* Background Orbs Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className={`absolute rounded-full bg-gradient-to-r ${orb.gradient} ${orb.size} ${orb.blur}`}
            style={{
              left: 0,
              top: 0,
            }}
            animate={{
              x: orb.x,
              y: orb.y,
              scale: orb.scale,
              opacity: orb.opacity,
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Dotted Grid Overlay Layer */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
          backgroundSize: `${dotSize} ${dotSize}`,
        }}
      />

      {/* Ambient Vignette Overlay for smooth edges and maximum text contrast */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,6,23,0.75)_95%)]" />

      {/* Content slot */}
      <div className={`relative z-10 w-full min-h-screen ${contentClassName}`}>
        {children}
      </div>

    </div>
  );
}

DottedGlowBackground.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  dotColor: PropTypes.string,
  dotSize: PropTypes.string,
};

export default DottedGlowBackground;
