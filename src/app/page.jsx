"use client";

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Journey from "../components/Journey";
import Photography from "../components/Photography";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

export default function Home() {
  useEffect(() => {
    const updateMousePos = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePos);
    return () => {
      window.removeEventListener("mousemove", updateMousePos);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Preloader />
      <div className="cursor-aura" />
      <div className="theme-overlay" />

      <div className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-[#ff7a32]/30 via-[#ffa149]/22 to-transparent blur-3xl opacity-70 animate-[float_12s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute top-1/2 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-bl from-[#ffb07a]/35 via-[#ff8a3d]/22 to-transparent blur-[130px] opacity-70 animate-[float_18s_ease-in-out_infinite_reverse]" />
      <div className="pointer-events-none absolute bottom-[-8rem] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-gradient-to-tl from-[#ffcf9d]/18 via-[#ff8a3d]/20 to-transparent blur-[120px] opacity-60 animate-[float_20s_ease-in-out_infinite]" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Photography />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
