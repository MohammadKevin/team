"use client";

import { useState } from "react";
import {
  Laptop,
  Database,
  ArrowRight,
  Terminal,
  Copy,
  Check,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeInspector, setActiveInspector] = useState<"both" | "kevin" | "danendra">("both");

  const copyCommand = () => {
    navigator.clipboard.writeText("npx duo init --team=mohammad-kevin,danendra");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="team" className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-zinc-800/80 bg-zinc-950 text-zinc-100 overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b40_1px,transparent_1px),linear-gradient(to_bottom,#18181b40_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill */}
        <div className="flex flex-wrap items-center gap-2 mb-6 font-mono text-xs text-zinc-400">
          <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
            WEB_DEVELOPMENT_STUDIO
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-cyan-400 font-semibold">MOHAMMAD KEVIN (FULLSTACK)</span>
          <span className="text-zinc-600">&amp;</span>
          <span className="text-emerald-400 font-semibold">DANENDRA (BACKEND)</span>
        </div>

        {/* Hero Main Header */}
        <div className="max-w-4xl space-y-6 mb-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] font-sans">
            Full-Cycle Web Engineering.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">
              Frontend Precision &amp; Resilient Architecture.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl">
            We are <strong className="text-zinc-200 font-semibold">Mohammad Kevin</strong> and{" "}
            <strong className="text-zinc-200 font-semibold">Danendra</strong>. We architect and build production-ready, high-converting web systems from reactive user interfaces to scalable databases and cloud APIs.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-all shadow-sm"
            >
              <span>EXPLORE_CASE_STUDIES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold hover:border-zinc-500 hover:text-white transition-all"
            >
              <span>VIEW_PRICING_TIERS</span>
            </a>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Kevin%20%26%20Danendra%2C%20saya%20tertarik%20untuk%20diskusi%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-emerald-950/70 border border-emerald-800 text-emerald-300 font-semibold hover:bg-emerald-900/80 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WHATSAPP_CHAT</span>
            </a>
          </div>

          {/* Terminal snippet */}
          <div className="pt-2 max-w-xl">
            <div className="flex items-center justify-between px-3.5 py-2 rounded bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2 truncate">
                <Terminal className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span className="text-zinc-500">$</span>
                <span className="text-zinc-200 truncate">
                  npx duo init --team=mohammad-kevin,danendra
                </span>
              </div>
              <button
                onClick={copyCommand}
                className="ml-2 p-1 text-zinc-400 hover:text-white transition-colors shrink-0"
                title="Copy Command"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Team Duo Profile Cards (Side-by-Side Deep Spec) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Mohammad Kevin */}
          <div className="rounded-lg bg-zinc-900/70 border border-zinc-800 p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-white">Mohammad Kevin</h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950/70 border border-cyan-800/70 text-cyan-300">
                      FULLSTACK_LEAD
                    </span>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mt-1">
                    UI/UX Architecture &bull; Client State &bull; Next.js 16 Runtime
                  </div>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                    title="Kevin's GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                    title="Kevin's LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:kevin@example.com"
                    className="p-1.5 rounded bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                    title="Email Kevin"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Focus & Responsibilities */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  // PRIMARY_DOMAIN
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  Specializes in high-converting user interfaces, responsive design systems, complex client-side state synchronization, and type-safe server actions with React 19 and Next.js.
                </p>
              </div>

              {/* Engineering Standards */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  // CORE_STANDARDS
                </div>
                <ul className="space-y-2 text-xs font-mono text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Zero Cumulative Layout Shift &bull; Sub-second LCP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Optimistic UI mutations with TanStack Query &amp; Zustand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Strict schema validation at runtime with Zod</span>
                  </li>
                </ul>
              </div>

              {/* Stack */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  // TECH_ARSENAL
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "TanStack Query", "Zustand", "Zod", "Framer Motion"].map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Laptop className="w-3.5 h-3.5 text-cyan-400" />
                <span>CLIENT_AND_FULLSTACK</span>
              </span>
              <span className="text-cyan-400">READY_FOR_DEPLOYMENT</span>
            </div>
          </div>

          {/* Card 2: Danendra */}
          <div className="rounded-lg bg-zinc-900/70 border border-zinc-800 p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-white">Danendra</h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950/70 border border-emerald-800/70 text-emerald-300">
                      BACKEND_LEAD
                    </span>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mt-1">
                    Distributed Systems &bull; Database Architecture &bull; Microservices
                  </div>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                    title="Danendra's GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                    title="Danendra's LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:danendra@example.com"
                    className="p-1.5 rounded bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                    title="Email Danendra"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Focus & Responsibilities */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  // PRIMARY_DOMAIN
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  Engineers high-throughput backend APIs, relational &amp; NoSQL database schemas, in-memory caching layers, queue workers, and ironclad server security.
                </p>
              </div>

              {/* Engineering Standards */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  // CORE_STANDARDS
                </div>
                <ul className="space-y-2 text-xs font-mono text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>ACID compliance &bull; Row-level locking to prevent race conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Distributed Redis lock keys &bull; Sub-50ms query latency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>PgBouncer connection pooling &bull; Zero connection leaks</span>
                  </li>
                </ul>
              </div>

              {/* Stack */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  // TECH_ARSENAL
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Node.js / Express", "Go (Golang)", "PostgreSQL", "Redis", "Docker", "Prisma / Drizzle", "Kafka", "WebSockets"].map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span>SERVER_AND_DATABASE</span>
              </span>
              <span className="text-emerald-400">READY_FOR_DEPLOYMENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
