"use client";

export default function TechMatrix() {
  const matrix = [
    {
      category: "01. CLIENT & INTERFACE RUNTIME",
      lead: "MOHAMMAD KEVIN",
      color: "text-cyan-400",
      items: [
        { name: "Next.js 16 (App Router)", role: "Streaming SSR, Server Actions, Edge Middleware", readiness: "PRODUCTION" },
        { name: "React 19 & Concurrent Mode", role: "Optimistic updates, Transitions, Component Architecture", readiness: "PRODUCTION" },
        { name: "TypeScript 5.x", role: "End-to-end strict type-safety & schema sharing", readiness: "CORE" },
        { name: "Tailwind CSS v4", role: "Design tokens, fluid typography, zero runtime CSS overhead", readiness: "PRODUCTION" },
        { name: "TanStack Query / Zustand", role: "Client cache invalidation, state machines", readiness: "CORE" },
      ],
    },
    {
      category: "02. BACKEND & DISTRIBUTED CORE",
      lead: "DANENDRA",
      color: "text-emerald-400",
      items: [
        { name: "Node.js & Express / Fastify", role: "RESTful JSON APIs, Async I/O, Worker pipelines", readiness: "CORE" },
        { name: "Go (Golang)", role: "High-throughput microservices, WebSocket clusters", readiness: "HIGH_PERF" },
        { name: "WebSocket & Socket.io", role: "Bi-directional real-time communication & telemetry", readiness: "PRODUCTION" },
        { name: "Authentication / JWT / OAuth2", role: "Stateless verification, session revocation, RBAC", readiness: "SECURE" },
        { name: "RabbitMQ / Kafka", role: "Event broker, asynchronous job queuing", readiness: "DISTRIBUTED" },
      ],
    },
    {
      category: "03. STORAGE, CACHE & PERSISTENCE",
      lead: "DANENDRA & KEVIN",
      color: "text-purple-400",
      items: [
        { name: "PostgreSQL 16", role: "ACID transactions, Row-Level Security, Index optimization", readiness: "PRIMARY_DB" },
        { name: "Redis 7.x", role: "In-memory cache, Distributed locks (Redlock), Pub/Sub", readiness: "CACHE_LAYER" },
        { name: "Prisma & Drizzle ORM", role: "Type-safe database migrations & relational joins", readiness: "ORM_CORE" },
        { name: "MySQL / MariaDB", role: "Relational storage & high-volume transactional schemas", readiness: "COMPATIBLE" },
        { name: "MongoDB", role: "Document storage for polymorphic & unstructured payloads", readiness: "NOSQL" },
      ],
    },
    {
      category: "04. INFRASTRUCTURE & TOOLING",
      lead: "DUO_SHARED",
      color: "text-sky-400",
      items: [
        { name: "Docker & Docker Compose", role: "Containerized reproducible dev & production environments", readiness: "STANDARD" },
        { name: "GitHub Actions CI/CD", role: "Automated linting, typechecking, Vitest test suites", readiness: "AUTOMATED" },
        { name: "Linux / VPS & Vercel", role: "Edge deployment, environment secret management", readiness: "HOSTING" },
        { name: "Postman & OpenAPI Spec", role: "Contract documentation and automated regression testing", readiness: "DOCUMENTED" },
      ],
    },
  ];

  return (
    <section id="stack" className="py-20 border-b border-zinc-800/80 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs text-cyan-400 mb-1">// STACK_MATRIX &bull; VERIFIED_CAPABILITIES</div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Core Technologies &amp; Capabilities
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Every layer in our toolchain is selected for low latency, developer speed, and zero production regressions.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {matrix.map((section, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-zinc-900/60 border border-zinc-800 p-6 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 font-mono text-xs">
                <span className={`font-bold ${section.color}`}>{section.category}</span>
                <span className="text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                  LEAD: {section.lead}
                </span>
              </div>

              <div className="space-y-2.5">
                {section.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-3 rounded bg-zinc-950/80 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs"
                  >
                    <div className="space-y-0.5">
                      <div className="font-bold text-white">{item.name}</div>
                      <div className="text-[11px] text-zinc-400 font-sans">{item.role}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 font-mono self-start sm:self-center shrink-0">
                      {item.readiness}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
