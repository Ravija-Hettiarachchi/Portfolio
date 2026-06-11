import React, { useState, useEffect, useRef, useCallback } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const pillars = [
  {
    title: "Human-first security",
    badge: "Human-first",
    detail:
      "Pair class projects with UX-style interviews so even beginner security tools feel friendly for classmates and mentors.",
    stat: "3 days",
    statLabel: "idea → prototype",
  },
  {
    title: "Automation mindset",
    badge: "Automation",
    detail:
      "Build small Python and JavaScript helpers to remove repetitive lab steps and keep focus on the learning goal.",
    stat: "10+",
    statLabel: "mini automations built",
  },
  {
    title: "Coaching & clarity",
    badge: "Coaching",
    detail:
      "Turn every lesson into blog recaps and peer study guides so friends can follow along with fewer blockers.",
    stat: "6",
    statLabel: "peer workshops led",
  },
];

const badges = [
  {
    name: "BICT (Hons) Undergraduate",
    issuer: "University Undergraduate",
    date: "2023 - Present",
    accent: "red",
    icon: (
      <svg className="h-11 w-11 text-[#ffa149] filter drop-shadow-[0_0_6px_rgba(255,161,73,0.45)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M12 21v-3.25" />
      </svg>
    ),
    description: "Studying core ICT modules, object-oriented systems, secure software development, and database schemas Building strong knowledge in cybersecurity and network architectures."
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2026",
    image: "/introduction-to-cybersecurity.png",
    accent: "green",
    description: "Foundational credential covering cyber threats, network vulnerabilities, and core security principles for safe digital practice."
  },
  {
    name: "Network Technician Career Path",
    issuer: "Cisco Networking Academy",
    date: "2026",
    image: "/network-technician-career-path.png",
    accent: "blue",
    description: "Career-path badge validating hands-on network installation, troubleshooting, and technician-level operational skills."
  },
  {
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "2026",
    image: "/networking-basics.png",
    accent: "blue",
    description: "Core networking concepts including IP addressing, protocols, switching, routing, and device configuration fundamentals."
  },
  {
    name: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    date: "2026",
    image: "/cyber-threat-management.png",
    accent: "blue",
    description: "Professional credential covering threat detection, network security, packet analysis, and Python scripting."
  },

];

const BADGE_SCROLL_HEIGHT = `${Math.max(220, badges.length * 52)}vh`;

function About() {
  const revealRef = useScrollReveal();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxTranslateY, setMaxTranslateY] = useState(0);
  const badgeScrollRef = useRef(null);
  const badgeTrackRef = useRef(null);
  const badgeViewportRef = useRef(null);

  const activeBadgeIdx = Math.max(
    0,
    Math.min(badges.length - 1, Math.round(scrollProgress * (badges.length - 1)))
  );

  const updateBadgeScroll = useCallback(() => {
    const container = badgeScrollRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const totalScrollable = rect.height - viewportHeight;
    const currentScroll = -rect.top;

    let progress = totalScrollable > 0 ? currentScroll / totalScrollable : 0;
    progress = Math.max(0, Math.min(1, progress));
    setScrollProgress(progress);
  }, []);

  const updateMaxTranslate = useCallback(() => {
    const track = badgeTrackRef.current;
    const viewport = badgeViewportRef.current;
    if (!track || !viewport) return;

    const max = track.scrollHeight - viewport.clientHeight;
    setMaxTranslateY(max > 0 ? max : 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      updateBadgeScroll();
      updateMaxTranslate();
    };

    let lenisCleanup = () => { };
    const attachLenis = () => {
      const locomotive = window.__locomotiveScroll;
      const lenis = locomotive?.lenisInstance;
      if (!lenis) return false;

      lenis.on("scroll", handleScroll);
      lenisCleanup = () => lenis.off("scroll", handleScroll);
      return true;
    };

    window.addEventListener("locomotive-scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    let attempts = 0;
    const lenisTimer = setInterval(() => {
      if (attachLenis() || attempts > 40) {
        clearInterval(lenisTimer);
      }
      attempts += 1;
    }, 100);

    const initTimer = setTimeout(handleScroll, 150);
    handleScroll();

    return () => {
      clearTimeout(initTimer);
      clearInterval(lenisTimer);
      lenisCleanup();
      window.removeEventListener("locomotive-scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [updateBadgeScroll, updateMaxTranslate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.__locomotiveScroll?.resize?.();
      updateMaxTranslate();
      updateBadgeScroll();
    }, 300);

    return () => clearTimeout(timer);
  }, [updateBadgeScroll, updateMaxTranslate]);

  return (
    <>
      <section
        id="about"
        ref={revealRef}
        className="relative overflow-x-clip bg-gradient-to-b from-[#080301] via-[#0d0401] to-[#120601] px-4 py-16 text-white sm:px-6 sm:py-20"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-60" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40" />
          <div className="absolute left-10 top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.22),transparent_70%)] blur-3xl opacity-60" />
          <div className="absolute right-4 bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,176,122,0.18),transparent_70%)] blur-3xl opacity-50" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 text-center">

          {/* About Main Intro Block */}
          <div className="space-y-4">
            <p className="reveal-on-scroll delay-100 text-xs uppercase tracking-[0.5em] text-[#ff8a3d]">About</p>
            <h2 className="reveal-on-scroll delay-200 text-3xl font-bold text-white sm:text-4xl">Secure journeys through curiosity and constant learning</h2>
            <p className="reveal-on-scroll delay-300 text-base text-white/70 sm:text-lg">
              I’m Ravija Hettiarachchi, an undergraduate ICT student and cybersecurity enthusiast.
              <br className="hidden sm:block" />
              I focus on learning new technologies every day and turning complex technical ideas into simple, practical solutions that people
              can actually use.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={`reveal-on-scroll delay-${(index + 1) * 100} group flex flex-col gap-5 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 text-center shadow-[0_30px_80px_rgba(8,3,1,0.5)] transition duration-300 hover:border-[#ff8a3d]/35 hover:shadow-[0_40px_90px_rgba(255,138,61,0.35)]`}
              >
                <span className="mx-auto inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#ff7a32] to-[#ffa149] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-black shadow-[0_20px_50px_rgba(255,122,50,0.35)]">
                  {pillar.badge}
                </span>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/50">{pillar.statLabel}</p>
                  <p className="text-4xl font-semibold text-white">{pillar.stat}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-white/80">{pillar.detail}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Digital Badges — full-width sticky scroll (must sit outside overflow-hidden parents) */}
      <section
        ref={badgeScrollRef}
        className="relative w-full bg-[#0d0401] border-t border-white/5"
        style={{ height: BADGE_SCROLL_HEIGHT }}
        aria-label="Digital Badges"
      >
        <div className="sticky top-16 flex h-[calc(100vh-4rem)] w-full items-start overflow-hidden py-6 sm:top-20 sm:h-[calc(100vh-5rem)] lg:items-center lg:py-0">
          <div className="mx-auto grid h-full w-full max-w-6xl grid-cols-1 gap-6 px-4 text-left sm:gap-8 sm:px-6 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center lg:col-span-5 lg:space-y-6 lg:text-left">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#ff8a3d]">Credentials & Verification</p>
                <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Academic & Professional Credentials</h3>
                <p className="mx-auto max-w-md text-sm leading-relaxed text-white/65 lg:mx-0">
                  Sectors and security frameworks I study to support cybersecurity operations, network integrity, and resilient digital architectures.
                </p>
                <p className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 lg:flex">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff7a32]" />
                  Scroll to navigate credentials
                </p>
              </div>

              <div className="mx-auto w-full max-w-sm space-y-3 rounded-2xl border border-white/5 bg-black/40 p-5 font-mono text-xs text-white/70 relative overflow-hidden select-none lg:mx-0">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,122,50,0.015)_1px,transparent_1px)] bg-[size:100%_4px]" />

                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[9px] font-bold tracking-widest text-[#ff7a32]">TIMELINE INDEXER</span>
                  <span className="text-[9px] text-white/30">VER_05.1</span>
                </div>

                <div className="flex justify-between">
                  <span>ACTIVE CREDENTIAL:</span>
                  <span className="font-bold text-[#ffa149]">
                    {activeBadgeIdx + 1} / {badges.length}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>DECRYPTION PROGRESS:</span>
                  <span className="font-bold text-[#ff7a32]">{Math.round(scrollProgress * 100)}%</span>
                </div>

                <div className="pt-2">
                  <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#ff7a32] to-[#ffa149] shadow-[0_0_8px_rgba(255,122,50,0.8)]"
                      style={{ width: `${scrollProgress * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={badgeViewportRef}
              className="relative h-[42vh] min-h-[280px] pl-8 sm:h-[46vh] sm:min-h-[320px] sm:pl-12 lg:col-span-7 lg:h-[58vh] lg:min-h-[400px]"
            >
              <div className="pointer-events-none absolute bottom-0 left-4 top-0 w-px bg-white/5 sm:left-6" />
              <div
                className="pointer-events-none absolute left-4 top-0 w-px origin-top bg-gradient-to-b from-[#ff7a32] via-[#ffa149] to-transparent sm:left-6"
                style={{
                  height: `${Math.max(8, Math.round(scrollProgress * 100))}%`,
                  boxShadow: "0 0 10px rgba(255,122,50,0.8)",
                }}
              />

              <div
                ref={badgeTrackRef}
                className="relative space-y-12 will-change-transform"
                style={{ transform: `translate3d(0, -${scrollProgress * maxTranslateY}px, 0)` }}
              >
                {badges.map((badge, idx) => {
                  const isActive = idx === activeBadgeIdx;
                  const isPassed = idx < activeBadgeIdx;

                  return (
                    <div
                      key={badge.name}
                      className="group relative min-h-[220px] pl-8 sm:pl-10"
                    >
                      <div className="pointer-events-none absolute right-0 top-0 z-0 select-none font-mono text-8xl font-extrabold text-[#ff7a32]/[0.03] sm:text-9xl">
                        0{idx + 1}
                      </div>

                      <div
                        className={`absolute left-[-21px] top-6 z-10 h-[11px] w-[11px] rounded-full border border-white/10 bg-[#070301] transition-all duration-300 sm:left-[-29px] ${isActive || isPassed
                          ? "scale-110 border-[#ff7a32] bg-[#ff7a32] shadow-[0_0_12px_rgba(255,122,50,0.8)]"
                          : ""
                          }`}
                      />

                      <div
                        className={`badge-card badge-scroll-item relative z-10 flex min-h-[200px] flex-col justify-between p-6 text-left ${badge.accent === "green" ? "badge-card--green" :
                          badge.accent === "orange" ? "badge-card--orange" :
                            badge.accent === "red" ? "badge-card--red" :
                              "badge-card--blue"
                          } ${isActive ? "badge-scroll-item--active" : isPassed ? "badge-scroll-item--passed" : "badge-scroll-item--upcoming"}`}
                      >
                        <div className="badge-shine" />
                        <div className="badge-glow-ring" />

                        <div className="space-y-4">
                          {badge.image ? (
                            <div className="flex items-start justify-between gap-4">
                              <div
                                className={`badge-image-frame shrink-0 ${badge.accent === "green" ? "badge-image-frame--green" :
                                  badge.accent === "orange" ? "badge-image-frame--orange" :
                                    badge.accent === "red" ? "badge-image-frame--red" :
                                      "badge-image-frame--blue"
                                  }`}
                              >
                                <img
                                  src={badge.image}
                                  alt={badge.name}
                                  className="h-28 w-28 object-contain sm:h-32 sm:w-32"
                                  loading="lazy"
                                />
                              </div>

                              <div className="flex items-center gap-2 pt-1">
                                <span className="hidden font-mono text-[8px] tracking-[0.25em] text-white/30 sm:inline-block">
                                  STAGE_{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                </span>
                                <span className="rounded-full border border-[#ff7a32]/25 bg-[#ff7a32]/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#ffa149]">
                                  {badge.date}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between">
                              <span
                                className={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-white shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-colors duration-300 ${badge.accent === "green" ? "group-hover:border-[#39ff14]/70" :
                                  badge.accent === "orange" ? "group-hover:border-[#ff8a3d]/70" :
                                    badge.accent === "red" ? "group-hover:border-[#ef4444]/70" :
                                      "group-hover:border-[#09f0ff]/70"
                                  }`}
                              >
                                {badge.icon}
                              </span>

                              <div className="flex items-center gap-2">
                                <span className="hidden font-mono text-[8px] tracking-[0.25em] text-white/30 sm:inline-block">
                                  STAGE_{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                </span>
                                <span className="rounded-full border border-[#ff7a32]/25 bg-[#ff7a32]/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#ffa149]">
                                  {badge.date}
                                </span>
                              </div>
                            </div>
                          )}

                          <div className="space-y-1">
                            <h4 className="text-base font-bold text-white">{badge.name}</h4>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                              {badge.issuer}
                            </p>
                          </div>

                          <p className="text-xs leading-relaxed text-white/70">{badge.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
