import React from "react";
import { Search } from "lucide-react";

const navLinks = [
  { label: "Projects", number: "01", active: true },
  { label: "Work", number: "02", active: false },
  { label: "About", number: "03", active: false },
];

export default function Navbar() {
  return (
    <>
      {/* top hairline */}
      <div className="h-px w-full bg-white/10 relative z-10" />

      <header className="flex items-center justify-between px-8 md:px-12 py-6 relative z-10">
        <div className="text-lg font-bold tracking-tight text-cream">
          sunny<span className="text-white/40">.</span>patel Upadhyay
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm text-white/70">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`relative pb-1 transition-colors ${
                link.active ? "text-cream" : "hover:text-cream"
              }`}
            >
              <span className="text-white/40 mr-1">{link.number}</span>
              {link.label}
              <span
                className={`absolute left-0 -bottom-[1px] h-[2px] w-full bg-accent ${
                  link.active ? "opacity-100" : "opacity-60"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 border border-white/15 rounded-md px-3 py-2 text-sm text-white/50">
            <Search size={14} />
            <span>Search</span>
            <span className="ml-4 text-xs border border-white/15 rounded px-1.5 py-0.5 text-white/40">
              Ctrl K
            </span>
          </div>
          <a
            href="#"
            className="hidden sm:block text-sm text-white/60 hover:text-cream transition-colors"
          >
            Résumé
          </a>
          <button className="bg-cream text-black text-sm font-semibold px-4 py-2 rounded-md hover:bg-white transition-colors">
            Get in touch
          </button>
        </div>
      </header>
    </>
  );
}
