"use client";

import { useState } from "react";
import { ExternalLink, Layers, Laptop, Database, ArrowUpRight, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { usePortfolio, Project } from "@/context/PortfolioContext";

export default function ProjectShowcase() {
  const { projects } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const categories = ["All", "Fullstack SaaS", "High-Throughput API", "E-Commerce", "Enterprise Portal"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="showcase" className="py-20 border-b border-zinc-800/80 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="font-mono text-xs text-cyan-400 mb-1">// 02. PAMERAN_PROYEK &bull; CASE_STUDIES</div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Featured Engineering Projects
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-1">
              Real-world systems delivered with quantifiable business metrics, clean architecture, and strict division of responsibility.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-900 border border-zinc-800 p-1.5 rounded-lg font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded transition-all truncate ${
                  selectedCategory === cat
                    ? "bg-zinc-800 text-white font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                className="rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all overflow-hidden"
              >
                {/* Main Card Summary Header */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Top Bar: Category, Outcome Metric, External Links */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                      <span className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-300 font-semibold">
                        {project.category}
                      </span>
                      <span className="text-zinc-700 hidden sm:inline">|</span>
                      <span className="px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 font-mono">
                        {project.outcome}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors border border-zinc-700"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>CODE</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors"
                        >
                          <span>LIVE_DEMO</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Headline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 mt-1 font-normal leading-relaxed">
                      {project.headline}
                    </p>
                  </div>

                  {/* Problem & Solution Card */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-mono">
                    <div className="md:col-span-6 p-4 rounded bg-zinc-950 border border-zinc-800/80 space-y-1.5">
                      <div className="text-red-400 font-semibold">// PROBLEM_SOLVED</div>
                      <p className="text-zinc-300 font-sans leading-relaxed text-xs">
                        {project.problem}
                      </p>
                    </div>
                    <div className="md:col-span-6 p-4 rounded bg-zinc-950 border border-zinc-800/80 space-y-1.5">
                      <div className="text-emerald-400 font-semibold">// BUSINESS_OUTCOME</div>
                      <p className="text-zinc-300 font-sans leading-relaxed text-xs">
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Split Team Responsibility (Mohammad Kevin vs Danendra) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {/* Kevin */}
                    <div className="p-4 rounded bg-zinc-950/80 border border-cyan-950 space-y-2">
                      <div className="flex items-center gap-2 font-mono text-xs text-cyan-300 font-bold border-b border-zinc-800/60 pb-2">
                        <Laptop className="w-3.5 h-3.5 text-cyan-400" />
                        <span>MOHAMMAD KEVIN &bull; FULLSTACK &amp; CLIENT</span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                        {project.kevinResponsibility}
                      </p>
                    </div>

                    {/* Danendra */}
                    <div className="p-4 rounded bg-zinc-950/80 border border-emerald-950 space-y-2">
                      <div className="flex items-center gap-2 font-mono text-xs text-emerald-300 font-bold border-b border-zinc-800/60 pb-2">
                        <Database className="w-3.5 h-3.5 text-emerald-400" />
                        <span>DANENDRA &bull; BACKEND API &amp; DB ARCHITECTURE</span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                        {project.danendraResponsibility}
                      </p>
                    </div>
                  </div>

                  {/* Stack & Expand Trigger */}
                  <div className="pt-2 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400 text-[11px]"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                    >
                      <span>{isExpanded ? "HIDE_DETAILS" : "INSPECT_ARCHITECTURE"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Expandable Architecture Drawer */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 bg-zinc-950 border-t border-zinc-800 font-mono text-xs space-y-4">
                    <div className="text-zinc-500 uppercase tracking-wider">// ARCHITECTURAL_BLUEPRINT_AND_INTEGRATION</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-3.5 rounded bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-cyan-400 font-bold">Client Sync</div>
                        <p className="text-zinc-400 text-[11px] font-sans">
                          Type-safe RPC contracts and React 19 Server Actions ensure zero runtime interface mismatches.
                        </p>
                      </div>
                      <div className="p-3.5 rounded bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-emerald-400 font-bold">Concurrency &amp; Caching</div>
                        <p className="text-zinc-400 text-[11px] font-sans">
                          Redis distributed locks and PgBouncer connection pooling guarantee seamless peak traffic endurance.
                        </p>
                      </div>
                      <div className="p-3.5 rounded bg-zinc-900 border border-zinc-800 space-y-1">
                        <div className="text-purple-400 font-bold">Security Posture</div>
                        <p className="text-zinc-400 text-[11px] font-sans">
                          Row-Level Security (RLS) policies, rate limiting, and encrypted payload verification at gateway level.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
