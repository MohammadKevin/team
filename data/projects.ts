export interface ProjectItem {
  id: string;
  title: string;
  category: "Fullstack SaaS" | "High-Throughput API" | "E-Commerce" | "Real-Time Systems";
  categoryBadge: string;
  headline: string;
  problem: string;
  solution: string;
  outcome: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  architecturePoints: string[];
  kevinResponsibility: string;
  danendraResponsibility: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "flowdesk",
    title: "FlowDesk — Multi-Tenant Workspace",
    category: "Fullstack SaaS",
    categoryBadge: "Enterprise SaaS",
    headline: "Real-time task synchronization & permission mesh for distributed engineering teams",
    problem:
      "Legacy tooling suffered 3-5s update latency and frequent database locks during concurrent multi-team sprint reviews across 500+ daily concurrent tasks.",
    solution:
      "Built an optimistic UI state machine powered by Next.js App Router and a dedicated Go WebSocket sync cluster with PostgreSQL Row-Level Security isolation and Redis pub/sub broadcasting.",
    outcome: "< 40ms real-time event latency • Zero database deadlocks across 10,000+ DAU",
    image: "/projects/flowdesk.svg",
    stats: [
      { label: "Sync Latency", value: "< 40ms" },
      { label: "Daily Active Users", value: "10k+" },
      { label: "Data Integrity", value: "100%" },
    ],
    architecturePoints: [
      "Optimistic mutation queue with local state rollback on server rejection",
      "PostgreSQL Multi-Tenant partitioning with native Row-Level Security (RLS)",
      "Horizontally scalable WebSocket connection mesh running in Go (Goroutines)",
      "Distributed Redis pub/sub broker ensuring sub-50ms cross-pod message delivery",
    ],
    kevinResponsibility:
      "Frontend & State Machine: Fluid drag-and-drop Kanban, optimistic UI mutations, TanStack Query cache invalidation, and keyboard-first command palette.",
    danendraResponsibility:
      "Backend & Cluster: Multi-tenant PostgreSQL Row-Level Security, WebSocket cluster in Go, JWT session rotation, and distributed Redis session locks.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Redis Pub/Sub", "Tailwind CSS"],
    demoUrl: "https://github.com/MohammadKevin/team",
    githubUrl: "https://github.com/MohammadKevin/team",
    isFeatured: true,
  },
  {
    id: "kromapay",
    title: "KromaPay — High-Throughput Payment Core",
    category: "High-Throughput API",
    categoryBadge: "FinTech Engine",
    headline: "Zero-loss transaction processor with automated webhook replay and instant reconciliation",
    problem:
      "Client faced payment timeout spikes, race condition vulnerabilities, and inconsistent ledger balances during high-traffic flash campaign drops.",
    solution:
      "Engineered an idempotency-first transaction pipeline with token bucket rate limiters, Kafka event streaming, and double-entry ACID ledger backed by PostgreSQL and Redis caching.",
    outcome: "12,000+ RPS sustained • 99.999% ACID transaction accuracy • P99 latency < 55ms",
    image: "/projects/kromapay.svg",
    stats: [
      { label: "Throughput", value: "12,000+ RPS" },
      { label: "ACID Accuracy", value: "99.999%" },
      { label: "P99 Latency", value: "< 55ms" },
    ],
    architecturePoints: [
      "Strict double-entry bookkeeping ledger guaranteeing immutable financial audits",
      "Distributed idempotency keys evaluated in Redis in under 2ms before DB write",
      "Dead-letter queues (DLQ) with automated exponential backoff webhook dispatcher",
      "AES-256 field-level encryption for sensitive cardholder & merchant payload storage",
    ],
    kevinResponsibility:
      "Merchant analytics console, real-time transaction ledger visualizer, and developer API key management portal with granular webhook testing tools.",
    danendraResponsibility:
      "Core transaction engine in Go, token bucket rate limiter, Kafka event broker, database transaction boundaries, and AES-256 encrypted ledger storage.",
    techStack: ["Go (Golang)", "Node.js", "PostgreSQL", "Redis", "Kafka", "Docker", "Next.js"],
    demoUrl: "https://github.com/MohammadKevin/team",
    githubUrl: "https://github.com/MohammadKevin/team",
    isFeatured: true,
  },
  {
    id: "auracommerce",
    title: "AuraCommerce — Headless E-Commerce System",
    category: "E-Commerce",
    categoryBadge: "High-Scale Commerce",
    headline: "Sub-second storefront with dynamic inventory lock and automated checkout orchestration",
    problem:
      "High bounce rates on mobile due to heavy client payloads (4.2s LCP) and overselling items during flash sales due to database concurrency collisions.",
    solution:
      "Implemented edge-rendered Next.js catalog with sub-second LCP, paired with atomic row-level inventory hold queues and payment gateway hooks (Stripe / Midtrans / Xendit).",
    outcome: "+310% mobile checkout conversion • 0.7s Largest Contentful Paint • 0 oversold items",
    image: "/projects/auracommerce.svg",
    stats: [
      { label: "Conversion Lift", value: "+310%" },
      { label: "LCP Page Speed", value: "0.7s" },
      { label: "Oversold Items", value: "0" },
    ],
    architecturePoints: [
      "Next.js Incremental Static Regeneration (ISR) with edge caching for product pages",
      "Atomic inventory reserve mechanism with 10-minute automated TTL lock",
      "Zero Cumulative Layout Shift (CLS) checkout funnel with server action validation",
      "Multi-provider payment webhook adapter with automated signature verification",
    ],
    kevinResponsibility:
      "Edge-rendered product catalog, snappy client-side cart machine with Zustand, zero-CLS checkout flow, and Lighthouse 100 performance tuning.",
    danendraResponsibility:
      "Inventory concurrency handling with row-level locks, order queue processing, Midtrans & Stripe payment webhook signing, and shipping API aggregator.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Tailwind CSS"],
    demoUrl: "https://github.com/MohammadKevin/team",
    githubUrl: "https://github.com/MohammadKevin/team",
    isFeatured: true,
  },
  {
    id: "streamsync",
    title: "StreamSync — Real-Time Multiplayer Canvas",
    category: "Real-Time Systems",
    categoryBadge: "Collaborative Tool",
    headline: "Low-latency multiplayer diagramming workspace with CRDT-based state synchronization",
    problem:
      "High cursor synchronization lag (250ms+) and frequent state collision bugs when 20+ teammates collaborated simultaneously on complex SVG boards.",
    solution:
      "Crafted an optimized HTML5 Canvas engine with CRDT state resolution over binary WebSockets with delta compression and Redis-backed room clustering.",
    outcome: "60 FPS canvas rendering • < 15ms cursor sync across global nodes • Zero edit conflicts",
    image: "/projects/streamsync.svg",
    stats: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Cursor Sync", value: "< 15ms" },
      { label: "Conflict Rate", value: "0%" },
    ],
    architecturePoints: [
      "Conflict-free Replicated Data Types (CRDT) engine for zero-conflict concurrent edits",
      "Binary Protobuf payload encoding over WebSockets reducing bandwidth by 82%",
      "Client-side requestAnimationFrame loop maintaining steady 60 FPS under heavy node count",
      "Automated workspace snapshotting to S3-compatible storage every 60 seconds",
    ],
    kevinResponsibility:
      "Custom HTML5 Canvas rendering engine, multi-cursor presence interpolation, floating toolbar state machine, and pan/zoom viewport manager.",
    danendraResponsibility:
      "Distributed WebSocket broadcasting cluster in Go, snapshot persistence layer, delta compression pipeline, and Redis room memory eviction.",
    techStack: ["Next.js", "TypeScript", "WebSockets", "Redis Pub/Sub", "Docker", "Tailwind CSS"],
    demoUrl: "https://github.com/MohammadKevin/team",
    githubUrl: "https://github.com/MohammadKevin/team",
    isFeatured: false,
  },
];
