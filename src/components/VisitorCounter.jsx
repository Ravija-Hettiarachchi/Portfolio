import React, { useEffect, useState } from "react";

const COUNT_API_ENDPOINT = "https://api.countapi.xyz/hit/ravija-portfolio-2024/visitor-count";

function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;

    const updateCount = async () => {
      try {
        const response = await fetch(COUNT_API_ENDPOINT);
        if (!response.ok) {
          throw new Error("Failed to fetch visitor count");
        }
        const data = await response.json();
        if (!ignore && typeof data.value === "number") {
          setCount(data.value);
        }
      } catch (err) {
        if (!ignore) {
          setError(true);
        }
        console.error("Visitor counter error:", err);
      }
    };

    updateCount();

    return () => {
      ignore = true;
    };
  }, []);

  const displayValue = error ? "—" : count?.toLocaleString() ?? "...";
  const description = error ? "Counter temporarily unavailable" : "people have explored this portfolio";

  return (
    <div className="inline-flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-center shadow-[0_18px_40px_rgba(5,2,1,0.45)] backdrop-blur sm:flex-row sm:items-center sm:gap-4 sm:text-left">
      <span className="text-3xl font-semibold text-[#ff8a3d]">{displayValue}</span>
      <div className="flex flex-col leading-snug text-white/75">
        <span className="text-xs uppercase tracking-[0.45em] text-white/45">Visitors</span>
        <span className="text-sm">{description}</span>
      </div>
    </div>
  );
}

export default VisitorCounter;

