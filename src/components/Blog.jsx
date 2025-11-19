import React from "react";

const blogs = [
  {
    title: "Introduction to Cybersecurity",
    excerpt:
      "A beginner-friendly guide to core security concepts, common threats, and how to build a strong security mindset.",
    date: "Nov 2025",
    link: "#",
  },
  {
    title: "Zero Trust in Plain English",
    excerpt:
      "Understand identities, least privilege, and continuous verification without the buzzword soup.",
    date: "Oct 2025",
    link: "#",
  },
  {
    title: "Automating Incident Response",
    excerpt:
      "Runbooks, alerts, and scripts that speed up investigation while preserving human judgment.",
    date: "Sep 2025",
    link: "#",
  },
];

function Blog() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-gradient-to-b from-[#120601] via-[#0d0401] to-[#080301] px-4 py-20 text-white sm:px-6 sm:py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40" />
        <div className="absolute left-12 top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(255,176,122,0.24),transparent_70%)] blur-3xl opacity-60" />
        <div className="absolute right-10 bottom-12 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,122,50,0.18),transparent_70%)] blur-3xl opacity-55" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-[#ffb07a]/80">Blog</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Notes from the lab and the SOC floor</h2>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            Practical, no-fluff posts on cybersecurity, cloud identity, and automation—sharing walkthroughs, lessons learned, and
            experiments from real projects.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-[0_18px_40px_rgba(5,2,1,0.5)]"
            >
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/50">{post.date}</p>
              <h3 className="mt-2 text-base font-semibold text-white">{post.title}</h3>
              <p className="mt-2 text-sm text-white/70">{post.excerpt}</p>
              <a
                href={post.link}
                className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#ffb07a] transition hover:text-white"
              >
                Read
                <span className="text-base leading-none">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;


