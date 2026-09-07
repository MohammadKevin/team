"use client";

import { useState } from "react";
import { Laptop, Shield, Cpu, Database, Layers } from "lucide-react";

export default function ArchitectureFlow() {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      id: 0,
      badge: "STEP 01",
      title: "Client Action & Optimistic Mutation",
      engineer: "Mohammad Kevin (Fullstack)",
      engineerTag: "bg-cyan-950/60 border-cyan-800 text-cyan-300",
      icon: Laptop,
      summary: "User triggers a state modification on the UI with instant optimistic update.",
      tech: ["Next.js 16", "React 19", "Zod", "TanStack Query"],
      specCode: `// Client-side execution (Mohammad Kevin)
const mutation = useMutation({
  mutationFn: async (payload: OrderSchema) => {
    // Validate schema before network dispatch
    const valid = OrderSchema.parse(payload);
    return apiClient.post('/api/v1/orders', valid);
  },
  onMutate: async (newOrder) => {
    // Optimistically update client state cache
    await queryClient.cancelQueries({ queryKey: ['orders'] });
    updateLocalCache(newOrder);
  }
});`,
      latency: "< 16ms (Instant UI response)",
    },
    {
      id: 1,
      badge: "STEP 02",
      title: "Edge Gateway & Auth Verification",
      engineer: "Team Shared Contract",
      engineerTag: "bg-sky-950/60 border-sky-800 text-sky-300",
      icon: Shield,
      summary: "Request arrives at the reverse proxy. Rate limiting & JWT validation execute.",
      tech: ["Redis Token Bucket", "JWT RSA-256", "CORS", "Cloudflare"],
      specCode: `// Gateway Middleware (Shared Contract)
async function authenticateGateway(req: Request) {
  const token = req.headers.get("Authorization");
  const claims = verifyJwt(token);
  
  // Danendra's Redis Token Bucket Rate Limiter
  const allowed = await redis.rateLimit(claims.userId, { rpm: 120 });
  if (!allowed) throw new HttpError(429, "RATE_LIMIT_EXCEEDED");
  
  return claims;
}`,
      latency: "12ms (Edge Auth Check)",
    },
    {
      id: 2,
      badge: "STEP 03",
      title: "Business Logic & Distributed Locking",
      engineer: "Danendra (Backend)",
      engineerTag: "bg-emerald-950/60 border-emerald-800 text-emerald-300",
      icon: Cpu,
      summary: "Service worker processes business logic and acquires Redis distributed lock.",
      tech: ["Go / Node.js", "Redis Redlock", "Worker Pools"],
      specCode: `// Core Service Execution (Danendra)
func (s *OrderService) ProcessOrder(ctx context.Context, req *OrderRequest) error {
    // Acquire distributed lock to prevent double-spending
    lock, err := s.redis.AcquireLock(ctx, req.IdempotencyKey, 5*time.Second)
    if err != nil {
        return ErrConcurrentModification
    }
    defer lock.Release(ctx)

    return s.repo.ExecuteTransaction(ctx, req)
}`,
      latency: "18ms (Concurrency Lock)",
    },
    {
      id: 3,
      badge: "STEP 04",
      title: "Postgres ACID Commit & Cache Sync",
      engineer: "Danendra (Backend)",
      engineerTag: "bg-emerald-950/60 border-emerald-800 text-emerald-300",
      icon: Database,
      summary: "Relational database transaction committed; cache invalidated; event dispatched.",
      tech: ["PostgreSQL 16", "Redis Pub/Sub", "Kafka / SQS"],
      specCode: `// Database & Caching Layer (Danendra)
BEGIN TRANSACTION;
  -- Lock row with FOR UPDATE on stock ledger
  SELECT stock FROM inventory WHERE item_id = $1 FOR UPDATE;
  UPDATE inventory SET stock = stock - $2 WHERE item_id = $1;
  INSERT INTO orders (id, user_id, amount) VALUES ($3, $4, $5);
COMMIT;

-- Invalidate cached inventory for instant sync
REDIS.DEL("cache:inventory:" + item_id);`,
      latency: "24ms (Database ACID Commit)",
    },
  ];

  return (
    <section id="pipeline" className="py-20 border-b border-zinc-800/80 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs text-cyan-400 mb-1">// ARCHITECTURE &bull; REQUEST_LIFECYCLE</div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            How Our Systems Run in Production
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Inspect the end-to-end data lifecycle connecting Mohammad Kevin&apos;s frontend client to Danendra&apos;s server core.
          </p>
        </div>

        {/* Interactive Steps Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {steps.map((step) => {
            const Icon = step.icon;
            const isSelected = selectedStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setSelectedStep(step.id)}
                className={`p-4 rounded-lg border text-left transition-all font-mono ${
                  isSelected
                    ? "bg-zinc-900 border-zinc-500 shadow-md"
                    : "bg-zinc-950/80 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40"
                }`}
              >
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                  <span>{step.badge}</span>
                  <Icon className={`w-4 h-4 ${isSelected ? "text-cyan-400" : "text-zinc-500"}`} />
                </div>
                <div className="text-sm font-semibold text-white truncate font-sans">{step.title}</div>
                <div className="text-[11px] text-zinc-400 mt-1 truncate">{step.engineer}</div>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspector Panel */}
        <div className="rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden">
          {/* Header bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 bg-zinc-950 border-b border-zinc-800 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">// INSPECTOR:</span>
              <span className="text-white font-semibold">{steps[selectedStep].title}</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`px-2.5 py-0.5 rounded border text-[11px] font-mono ${steps[selectedStep].engineerTag}`}
              >
                {steps[selectedStep].engineer}
              </span>
              <span className="text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                {steps[selectedStep].latency}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
            {/* Left: Summary and Tech */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                  Step Description
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  {steps[selectedStep].summary}
                </p>
              </div>

              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                  Stack &amp; Protocols
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {steps[selectedStep].tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded bg-zinc-950 border border-zinc-800 font-mono text-xs space-y-1.5 text-zinc-400">
                <div className="text-zinc-300 font-medium">Why This Matters:</div>
                <p className="text-[11px] leading-relaxed">
                  Both engineers synchronize interfaces early so frontend components never experience API type mismatches or unhandled database state errors.
                </p>
              </div>
            </div>

            {/* Right: Code Blueprint */}
            <div className="lg:col-span-7">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                Implementation Blueprint
              </div>
              <pre className="p-4 rounded bg-zinc-950 border border-zinc-800 font-mono text-[11px] leading-relaxed text-zinc-300 overflow-x-auto">
                <code>{steps[selectedStep].specCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
