"use client";

import React, { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
const photoItems = [
  {
    id: "photo_1",
    title: "Neons of Colombo",
    category: "Street & Urban",
    src: "/img1.jpg",
    meta: "ISO 800 | 50mm | f/1.8 | 1/160s",
    desc: "A dramatic capture of night neons reflecting on rain-washed streets, exploring urban cyberpunk aesthetics.",
    scrollSpeed: "0.1"
  },
  {
    id: "photo_2",
    title: "Misty Range Sunset",
    category: "Landscape & Travel",
    src: "/img2.jpg",
    meta: "ISO 100 | 24mm | f/8.0 | 1/250s",
    desc: "Catching the warm amber layers of mist wrapping around highland ranges during golden hour.",
    scrollSpeed: "0.4"
  },
  {
    id: "photo_3",
    title: "Minimalist Concrete",
    category: "Architecture",
    src: "/img3.jpg",
    meta: "ISO 200 | 35mm | f/4.0 | 1/320s",
    desc: "A monochrome spatial perspective study focusing on harsh shadows and clean modern concrete geometries.",
    scrollSpeed: "-0.1"
  },
  {
    id: "photo_4",
    title: "Cyber Dew",
    category: "Abstract Macro",
    src: "/img4.jpg",
    meta: "ISO 400 | 90mm | f/2.8 | 1/125s",
    desc: "Water droplets caught in extreme focus, refracting ambient neon lights like electronic circuitry.",
    scrollSpeed: "0.2"
  }
];


function Photography() {
  const revealRef = useScrollReveal();
  const [activePhoto, setActivePhoto] = useState(null);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--card-mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--card-mouse-y", `${y}px`);
  };

  const handleImageLoad = () => {
    if (window.__locomotiveScroll) {
      window.__locomotiveScroll.resize();
    }
  };

  return (
    <section
      id="photography"
      ref={revealRef}
      className="relative overflow-x-clip px-4 py-12 text-white sm:px-6 sm:py-16"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40" />
        <div className="absolute right-12 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.18),transparent_75%)] blur-3xl opacity-60" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <div className="text-center space-y-3">
          <p className="reveal-on-scroll delay-100 text-xs uppercase tracking-[0.5em] text-[#ff8a3d]">Photography Portfolio</p>
          <h2 className="reveal-on-scroll delay-200 text-3xl font-bold sm:text-4xl">Through the Viewfinder</h2>
          <p className="reveal-on-scroll delay-300 mx-auto max-w-2xl text-sm text-white/65">
            Capturing the intersection of light, shadow, and geometry. Stills from my photography carrier that decorate my visual perspective.
          </p>
        </div>

        <div
          data-scroll
          data-scroll-speed="0.3"
          className="max-w-5xl mx-auto w-full group photo-card cursor-zoom-in mb-8"
          onClick={() => setActivePhoto({
            id: "photo_logo",
            title: "Ravija Hettiarachchi",
            category: "",
            src: "/mylogo.png",
            meta: "",
            desc: ""
          })}
        >
          {/* Card Scanlines & Hologram Sweep */}
          <div className="avatar-scanlines absolute inset-0 pointer-events-none z-10 opacity-30 group-hover:opacity-50" />
          <div className="avatar-grid absolute inset-0 pointer-events-none z-[9] opacity-0 group-hover:opacity-60" />
          <div className="photo-glow-overlay" />

          {/* Photo Box */}
          <div className="relative w-full overflow-hidden bg-black/10 py-12 px-6 flex items-center justify-center min-h-[320px]">
            <img
              src="/mylogo.png"
              alt="Ravija Hettiarachchi Logo"
              loading="lazy"
              onLoad={handleImageLoad}
              className="max-h-[220px] object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>



        </div>

        {/* 4-Card Photography Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto w-full">
          {photoItems.map((photo, index) => (
            <article
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              onMouseMove={handleCardMouseMove}
              data-scroll
              data-scroll-speed={photo.scrollSpeed}
              className="group photo-card cursor-zoom-in"
            >
              {/* Card Scanlines & Hologram Sweep */}
              <div className="avatar-scanlines absolute inset-0 pointer-events-none z-10 opacity-30 group-hover:opacity-50" />
              <div className="avatar-grid absolute inset-0 pointer-events-none z-[9] opacity-0 group-hover:opacity-60" />
              <div className="photo-glow-overlay" />

              {/* Photo Box */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  onLoad={handleImageLoad}
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Detail Info footer inside card */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="photo-tag">{photo.category}</span>
                  <span className="font-mono text-[9px] text-[#ffa149]/80 tracking-wider uppercase bg-[#140702]/85 px-2 py-0.5 rounded border border-[#ff8a3d]/20">
                    {photo.meta.split(" | ")[0]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#ffa149] transition duration-300">
                  {photo.title}
                </h3>
                <p className="text-xs text-white/70 line-clamp-2 transform translate-y-1.5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  {photo.desc}
                </p>
                <div className="mt-1 font-mono text-[9px] text-white/40 tracking-wider">
                  {photo.meta}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 lightbox-backdrop bg-black/90 cursor-zoom-out"
          onClick={() => setActivePhoto(null)}
        >
          <button
            className="absolute top-6 right-6 z-[120] rounded-full border border-white/20 bg-white/5 p-3 text-white transition hover:bg-white/10"
            onClick={() => setActivePhoto(null)}
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative flex max-h-[90vh] max-w-[90vw] flex-col gap-4 rounded-3xl border border-white/10 bg-[#120703] p-4 shadow-[0_30px_90px_rgba(255,122,50,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl bg-black/20 flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-h-[60vh] max-w-full object-contain block"
              />
            </div>

            <div className="space-y-1.5 px-2 py-1">
              {(activePhoto.category || activePhoto.meta) && (
                <div className="flex items-center justify-between gap-4">
                  {activePhoto.category && <span className="photo-tag">{activePhoto.category}</span>}
                  {activePhoto.meta && <span className="font-mono text-xs text-[#ff8a3d]">{activePhoto.meta}</span>}
                </div>
              )}
              <h3 className="text-xl font-bold text-white">{activePhoto.title}</h3>
              {activePhoto.desc && <p className="text-sm text-white/70">{activePhoto.desc}</p>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Photography;
