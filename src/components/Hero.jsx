import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Terminal } from "lucide-react";
import StatusBadge from "./StatusBadge.jsx";
import HeroImage from "./HeroImage.jsx";

export default function Hero() {
  return (
    <main className="px-8 md:px-12 pt-8 pb-24 relative z-10">
      <div className="max-w-3xl relative z-10">
        <StatusBadge />

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8 text-cream">
          I build the whole stack, from the screen to the{" "}
          <span className="text-accent">silicon.</span>
        </h1>

        <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
          I build AI systems that{" "}
          <span className="text-accent">actually ship</span>, and I own them{" "}
          <span className="text-accent">from prompt to production</span>. I
          design agentic workflows that reason, plan, and act, and the
          LLMOps pipelines that keep them{" "}
          <span className="text-accent">reliable at scale</span>. Give me the
          hardest problem in your AI stack, the one that has to hold under
          real traffic, and I'll{" "}
          <span className="text-accent">own it end to end.</span>
        </p>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 border border-accent/70 text-cream text-sm font-semibold px-5 py-3 rounded-md hover:bg-accent/10 transition-colors">
            See the work
            <ArrowRight size={16} />
          </button>
          <Link
            to="/resume"
            className="flex items-center gap-1 text-sm text-white/50 hover:text-cream transition-colors"
          >
            Résumé
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <HeroImage />

      <div className="absolute bottom-6 right-8 border border-white/15 rounded-md p-2 text-white/50">
        <Terminal size={16} />
      </div>
    </main>
  );
}
