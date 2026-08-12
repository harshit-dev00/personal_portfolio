import React from "react";
import { ArrowUpRight } from "lucide-react";
import WorkCard from "./WorkCard.jsx";

const works = [
  {
    url: "ats-screener.vercel.app",
    title: "ATS Screener",
    subtitle: "Stop guessing. Start scoring.",
    accentFrom: "#dfe3e8",
    accentTo: "#aeb4bd",
  },
  {
    url: "sunnify.vercel.app",
    title: "Sunnify",
    subtitle: "Spotify downloader",
    accentFrom: "#7dd3fc",
    accentTo: "#a78bfa",
  },
  {
    url: "netdash-toolkit.vercel.app",
    title: "NetDash",
    subtitle: "Network & developer toolbox",
    accentFrom: "#1e293b",
    accentTo: "#334155",
  },
];

export default function SelectedWork() {
  return (
    <section className="px-8 md:px-12 py-24 relative z-10">
      <div className="flex items-center gap-3 text-sm text-white/50 mb-6">
        <span className="w-6 h-px bg-white/30" />
        SELECTED WORK
      </div>

      <div className="flex items-end justify-between mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-cream leading-tight max-w-2xl">
          Things people actually use.
        </h2>
        <a
          href="#"
          className="hidden md:flex items-center gap-1 text-sm text-white/60 hover:text-cream transition-colors whitespace-nowrap"
        >
          All projects
          <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {works.map((work) => (
          <WorkCard key={work.url} {...work} />
        ))}
      </div>
    </section>
  );
}
