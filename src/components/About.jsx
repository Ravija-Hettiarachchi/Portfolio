import React from "react";

const highlights = [
  "B.ICT (Hons) undergraduate specializing in network & cybersecurity",
  "Operationalizes zero-trust principles across cloud and on-prem estates",
  "Delivers accessible dashboards for analysts, leadership, and clients",
];

const credentials = [
  { label: "Incidents Resolved", value: "245+" },
  { label: "Automation Routines", value: "68" },
  { label: "Security Audits", value: "38" },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-[#0d0401] via-[#120601] to-[#080301] px-6 py-28 text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40" />
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.28),transparent_60%)] blur-3xl opacity-65" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
        <div className="relative flex w-full max-w-md flex-none justify-center">
          <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle,rgba(255,138,61,0.28),transparent_65%)] blur-3xl opacity-80" />
          <div className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1a0902] via-[#130601] to-[#090301] shadow-[0_35px_120px_rgba(18,7,3,0.65)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,138,61,0.25),transparent_65%)] opacity-70" />
            <img
              src="/profile-photo.jpg"
              alt="Ravija Hettiarachchi"
              className="relative h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 rounded-full border border-white/15 bg-white/10 px-6 py-3 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.45em] text-white/60">Cyber Operations Lead</p>
              <p className="text-sm font-semibold text-white">Ravija Hettiarachchi</p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-10">
          <div className="space-y-4 text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.5em] text-[#ff8a3d]">Who We Are</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Reduce the risk of your workflow. Stay productive, stay protected.
            </h2>
            <p className="max-w-2xl text-base text-white/70 sm:text-lg">
              I blend secure infrastructure thinking with immersive interfaces—helping teams collaborate confidently,
              automate repetitive response, and keep leadership informed without the noise.
            </p>
          </div>

          <ul className="space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                <span className="mt-1 inline-flex h-3 w-3 flex-none items-center justify-center rounded-full bg-gradient-to-r from-[#ff7a32] to-[#ffa149]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {credentials.map((cred) => (
              <div
                key={cred.label}
                className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-center shadow-[0_12px_35px_rgba(20,8,3,0.45)]"
              >
                <span className="text-2xl font-semibold text-white">{cred.value}</span>
                <span className="text-xs uppercase tracking-[0.35em] text-white/50">{cred.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

