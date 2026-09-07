"use client";

import React from "react";
import { ArrowRight, Code2, Cpu, CheckCircle2, ShieldCheck, Zap, Globe2 } from "lucide-react";

export default function Hero() {
  const techChips = [
    { label: "Next.js 16 (App Router)", category: "Frontend Core" },
    { label: "TypeScript (Strict)", category: "Type-Safe" },
    { label: "Go (Golang) & Node.js", category: "High Concurrency" },
    { label: "PostgreSQL & Prisma", category: "Database Layer" },
    { label: "Redis & WebSockets", category: "Real-Time" },
    { label: "REST & GraphQL", category: "API Contracts" },
    { label: "Docker & CI/CD", category: "DevOps" },
  ];

  const highlights = [
    {
      icon: Zap,
      label: "Sub-Second Performance",
      desc: "Lighthouse 95+ Core Web Vitals & edge SSR rendering",
    },
    {
      icon: Cpu,
      label: "12k+ RPS Backend Scalability",
      desc: "Optimized relational schemas, query indices & Redis caching",
    },
    {
      icon: ShieldCheck,
      label: "Zero Agency Bloat",
      desc: "Direct daily communication with the engineers writing your code",
    },
    {
      icon: CheckCircle2,
      label: "30-Day Launch Warranty",
      desc: "Post-deployment monitoring and priority bug fixes included",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200/80 bg-linear-to-b from-white via-slate-50/40 to-slate-100/50">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Engineering Badge & Live Timezone */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-slate-100 text-xs font-mono font-medium tracking-wide mb-6 shadow-xs border border-slate-800">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-cyan-300 font-bold">Voltiq Labs</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Senior Fullstack & Backend Studio</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <Globe2 className="w-3 h-3 text-cyan-400" />
              <span>UTC+7 / Jakarta</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Fullstack Engineering Duo for{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-sky-600 to-teal-600">
              Fast, Production-Ready
            </span>{" "}
            Web Apps.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            We engineer resilient backends, clean high-performance interfaces, and seamless payment/API integrations —
            delivered end-to-end with zero agency bloat.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-slate-900 hover:bg-cyan-600 transition-all duration-200 shadow-md hover:shadow-cyan-500/20 active:scale-[0.98] cursor-pointer"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4 text-cyan-300" />
            </a>

            <a
              href="#works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all duration-200 shadow-2xs cursor-pointer"
            >
              <Code2 className="w-4 h-4 text-slate-500" />
              <span>Explore Selected Works</span>
            </a>
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-12 pt-8 border-t border-slate-200/80">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-600 font-semibold mb-4">
              Core Engineering Stack & Production Infrastructure
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {techChips.map((chip) => (
                <div
                  key={chip.label}
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-mono font-medium hover:border-cyan-400 hover:text-cyan-700 hover:bg-cyan-50/30 transition-all duration-150 shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:scale-125 transition-transform" />
                  <span>{chip.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Grid / Engineering Highlights */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-cyan-50 group-hover:text-cyan-600 group-hover:border-cyan-200 transition-colors mb-3.5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 tracking-tight">{item.label}</h3>
                <p className="mt-1 text-xs text-slate-500 leading-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
