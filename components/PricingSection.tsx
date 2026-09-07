"use client";

import { Check, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function PricingSection() {
  const { currency, setCurrency, setSelectedPackage } = usePortfolio();

  const packages = [
    {
      id: "mvp-launchpad",
      name: "MVP Launchpad",
      tagline: "Fast, production-ready MVP for startups and founders testing product-market fit.",
      priceUsd: "$2,400",
      priceIdr: "Rp 38.000.000",
      turnaround: "2 – 3 Weeks",
      badge: "FAST_LAUNCH",
      isPopular: false,
      kevinScope: "Responsive Next.js 16 frontend, Tailwind UI components, type-safe forms, SEO optimization.",
      danendraScope: "PostgreSQL schema, REST API endpoints, JWT / OAuth authentication, cloud deployment setup.",
      features: [
        "Production-grade Next.js 16 & React 19 codebase",
        "PostgreSQL database design & Prisma ORM migrations",
        "Secure Authentication (OAuth, Magic Link, JWT)",
        "Mobile-first responsive design with Tailwind CSS v4",
        "Automated deployment on Vercel / Cloud VPS",
        "30 Days Post-Launch Bugfix & Warranty Support",
      ],
    },
    {
      id: "custom-webapp",
      name: "Custom Web Application",
      tagline: "End-to-end full-cycle SaaS or digital product built for high user conversion and scale.",
      priceUsd: "$5,800",
      priceIdr: "Rp 92.000.000",
      turnaround: "4 – 6 Weeks",
      badge: "MOST_POPULAR",
      isPopular: true,
      kevinScope: "Complex client state machines, real-time dashboard analytics, optimistic mutations, keyboard shortcuts.",
      danendraScope: "Redis caching layer, Payment gateway (Stripe/Midtrans), WebSockets sync, background worker queues.",
      features: [
        "Everything included in the MVP Launchpad tier",
        "Payment gateway integration (Stripe, Midtrans, Lemonsqueezy)",
        "Real-time WebSocket event broadcasting & live presence",
        "Redis in-memory caching & rate-limiting protection",
        "Granular Role-Based Access Control (RBAC) & tenant mesh",
        "Automated CI/CD testing pipelines with GitHub Actions",
        "60 Days Dedicated Engineering Support",
      ],
    },
    {
      id: "enterprise-backend",
      name: "Enterprise Architecture & Mesh",
      tagline: "High-throughput backend systems, microservice decoupling, and distributed databases.",
      priceUsd: "$10,500+",
      priceIdr: "Rp 165.000.000+",
      turnaround: "6 – 10 Weeks",
      badge: "HIGH_CONCURRENCY",
      isPopular: false,
      kevinScope: "Enterprise design system, WebGL / Canvas visualizers, micro-frontend orchestration.",
      danendraScope: "Distributed Go / Node microservices, PostgreSQL sharding / replication, Kafka event brokers, security audits.",
      features: [
        "Custom distributed architecture & microservices decoupling",
        "High-throughput concurrency tuning (10,000+ RPS sustained)",
        "PostgreSQL read-replicas, PgBouncer pooling, & query audit",
        "Asynchronous message streaming with Kafka or RabbitMQ",
        "OWASP security audit, rate-limiting, and penetration hardening",
        "Detailed architecture documentation & system transfer",
        "90 Days Priority SLA & On-call Support",
      ],
    },
  ];

  const handleSelectPackage = (pkgName: string) => {
    setSelectedPackage(pkgName);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 border-b border-zinc-800/80 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Currency Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs text-cyan-400 mb-1">// 04. PAKET_HARGA &bull; TRANSPARENT_PRICING</div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Straightforward Engineering Packages
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-1">
              Clear deliverables, fixed pricing, and predictable timelines without hidden agency fees.
            </p>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 p-1 rounded-md font-mono text-xs">
            <span className="text-zinc-500 px-2">CURRENCY:</span>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-3 py-1 rounded transition-colors ${
                currency === "USD" ? "bg-zinc-800 text-white font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency("IDR")}
              className={`px-3 py-1 rounded transition-colors ${
                currency === "IDR" ? "bg-zinc-800 text-white font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              IDR (Rp)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-lg bg-zinc-900/60 border p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                pkg.isPopular
                  ? "border-cyan-500/60 shadow-xl shadow-cyan-950/20 bg-zinc-900/90"
                  : "border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {/* Top popular indicator */}
              {pkg.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-400 text-zinc-950 font-mono text-[10px] font-bold tracking-wider">
                  RECOMMENDED FOR STARTUPS
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                    <span>{pkg.badge}</span>
                    <span className="text-zinc-400">EST: {pkg.turnaround}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-sans">{pkg.name}</h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-sans">{pkg.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded bg-zinc-950 border border-zinc-800 font-mono">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {currency === "USD" ? pkg.priceUsd : pkg.priceIdr}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">Fixed scope &bull; No surprise overage</div>
                </div>

                {/* Division of work preview */}
                <div className="space-y-2 text-xs font-mono">
                  <div className="text-zinc-500 uppercase">// TEAM_RESPONSIBILITY</div>
                  <div className="p-2.5 rounded bg-zinc-950/60 border border-zinc-800/80 space-y-1 text-zinc-300">
                    <div>
                      <span className="text-cyan-400 font-semibold">Kevin:</span>{" "}
                      <span className="text-zinc-400">{pkg.kevinScope}</span>
                    </div>
                    <div>
                      <span className="text-emerald-400 font-semibold">Danendra:</span>{" "}
                      <span className="text-zinc-400">{pkg.danendraScope}</span>
                    </div>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5">
                  <div className="text-xs font-mono text-zinc-500 uppercase">// INCLUDED_DELIVERABLES</div>
                  <ul className="space-y-2 text-xs font-mono text-zinc-300">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTA */}
              <div className="pt-6 mt-6 border-t border-zinc-800">
                <button
                  onClick={() => handleSelectPackage(pkg.name)}
                  className={`w-full py-2.5 rounded font-mono text-xs font-bold inline-flex items-center justify-center gap-2 transition-all ${
                    pkg.isPopular
                      ? "bg-white text-zinc-950 hover:bg-zinc-200 shadow-md"
                      : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white"
                  }`}
                >
                  <span>SELECT_{pkg.badge}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Scope Card */}
        <div className="mt-8 p-6 rounded-lg bg-zinc-900/40 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <div className="font-bold text-white font-sans text-sm">Need a custom scope or ongoing retainer?</div>
              <div className="text-zinc-400">
                We also offer system audits, performance refactoring sprints, and dedicated monthly fractional engineering.
              </div>
            </div>
          </div>
          <button
            onClick={() => handleSelectPackage("Custom Scope / Fractional")}
            className="px-4 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white shrink-0 font-semibold"
          >
            DISCUSS_CUSTOM_SCOPE &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
