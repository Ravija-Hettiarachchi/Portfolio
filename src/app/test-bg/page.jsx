"use client";

import React from 'react';
import DottedGlowBackground from '../../components/DottedGlowBackground';
import dynamic from 'next/dynamic';

const Antigravity = dynamic(() => import('../../components/Antigravity'), {
  ssr: false,
});

export default function TestPage() {
  return (
    <DottedGlowBackground contentClassName="flex items-center justify-center p-6 relative">
      {/* Interactive Floating Particles (Cursor Attraction) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Antigravity
          count={250}
          magnetRadius={8}
          ringRadius={7}
          waveSpeed={3.5}
          waveAmplitude={1.2}
          particleSize={1.4}
          lerpSpeed={0.06}
          color="#ff7a32"
          autoAnimate={true}
          particleVariance={0.8}
          fieldStrength={11.0}
        />
      </div>

      <div className="max-w-md w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center space-y-6 shadow-2xl relative z-10 overflow-hidden">
        {/* Ambient glow decoration inside card */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-2">
          <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-400 uppercase font-bold">
            Anti-Gravity System
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Background Test
          </h1>
        </div>

        <p className="text-sm text-white/60 leading-relaxed">
          This is a test of the `DottedGlowBackground` component. It renders a clean CSS dot grid overlay and multiple slow-drifting, breathing glowing orbs underneath.
        </p>

        <div className="pt-4 flex flex-col gap-3">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition duration-300 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]">
            Accept Handshake
          </button>
          <a href="/" className="inline-block text-xs text-white/40 hover:text-white/60 transition underline underline-offset-4">
            Go back home
          </a>
        </div>
      </div>
    </DottedGlowBackground>
  );
}
