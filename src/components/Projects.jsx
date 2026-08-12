import React from "react";
import ProjectCard from "./ProjectCard.jsx";

const projects = [
  {
    number: "01",
    year: "2026",
    title: "Autonomous Support Agent",
    description:
      "A multi-step agentic system that resolves customer tickets end to end, with tool-calling, memory, and human handoff for edge cases.",
    tags: ["LangGraph", "RAG", "Tool Use"],
  },
  {
    number: "02",
    year: "2025",
    title: "LLM Observability Pipeline",
    description:
      "Production LLMOps stack for tracing, evals, and cost monitoring across multiple agent deployments in real time.",
    tags: ["Evals", "Tracing", "MLOps"],
  },
  {
    number: "03",
    year: "2025",
    title: "Multi-Agent Research Assistant",
    description:
      "Orchestrated agent swarm that plans, delegates, and synthesizes research tasks across specialized sub-agents.",
    tags: ["Orchestration", "Agents", "Vector DB"],
  },
];

export default function Projects() {
  return (
    <section className="px-8 md:px-12 py-24 relative z-10 border-t border-white/10">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-sm text-accent">01 / Projects</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-cream mt-2">
            Things I've built.
          </h2>
        </div>
        <p className="hidden md:block text-sm text-white/50 max-w-xs text-right">
          A few systems I designed, shipped, and kept running in production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>
    </section>
  );
}
