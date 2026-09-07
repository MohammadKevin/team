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
      "Legacy tooling suffered 3-5s update latency and frequent database locks during concurrent multi-team sprint reviews.",
    solution:
      "Built an optimistic UI state machine powered by Next.js and a dedicated Go WebSocket sync cluster with PostgreSQL Row-Level Security isolation.",
    outcome: "< 40ms real-time event latency • Zero database deadlocks across 10,000+ DAU",
    image: "/projects/flowdesk.svg",
    stats: [
      { label: "Sync Latency", value: "< 40ms" },
      { label: "Daily Active Users", value: "10k+" },
      { label: "Data Integrity", value: "100%" },
    ],
    kevinResponsibility:
      "Frontend & State Machine: Fluid drag-and-drop Kanban, optimistic UI mutations, and keyboard-first command palette.",
    danendraResponsibility:
      "Backend & Cluster: Multi-tenant PostgreSQL Row-Level Security, WebSocket cluster in Go, and distributed Redis session lock.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Redis Pub/Sub", "Tailwind CSS"],
    demoUrl: "https://flowdesk.example.com",
    githubUrl: "https://github.com",
    isFeatured: true,
  },
  {
    id: "kromapay",
    title: "KromaPay — High-Throughput Payment Core",
    category: "High-Throughput API",
    categoryBadge: "FinTech Engine",
    headline: "Zero-loss transaction processor with automated webhook replay and instant reconciliation",
    problem:
      "Client faced payment timeout spikes, race condition vulnerabilities, and inconsistent ledger balances during high-traffic campaign drops.",
    solution:
      "Engineered an idempotency-first transaction pipeline with token bucket rate limiters, Kafka event streaming, and double-entry ACID ledger.",
    outcome: "12,000+ RPS sustained • 99.999% ACID transaction accuracy • P99 latency < 55ms",
    image: "/projects/kromapay.svg",
    stats: [
      { label: "Throughput", value: "12,000+ RPS" },
      { label: "ACID Accuracy", value: "99.999%" },
      { label: "P99 Latency", value: "< 55ms" },
    ],
    kevinResponsibility:
      "Merchant analytics console, real-time transaction ledger visualizer, and developer API key management portal.",
    danendraResponsibility:
      "Core transaction engine, token bucket rate limiter, Kafka event broker, and AES-256 encrypted ledger storage.",
    techStack: ["Go (Golang)", "Node.js", "PostgreSQL", "Redis", "Kafka", "Docker", "Next.js"],
    demoUrl: "https://kromapay.example.com",
    githubUrl: "https://github.com",
    isFeatured: true,
  },
  {
    id: "auracommerce",
    title: "AuraCommerce — Headless E-Commerce System",
    category: "E-Commerce",
    categoryBadge: "High-Scale Commerce",
    headline: "Sub-second storefront with dynamic inventory lock and automated checkout orchestration",
    problem:
      "High bounce rates on mobile due to heavy client payloads and overselling items during flash sales.",
    solution:
      "Implemented edge-rendered Next.js catalog with sub-second LCP, paired with atomic row-level inventory hold queues and payment gateway hooks.",
    outcome: "+310% mobile checkout conversion • 0.7s Largest Contentful Paint • 0 oversold items",
    image: "/projects/auracommerce.svg",
    stats: [
      { label: "Conversion Lift", value: "+310%" },
      { label: "LCP Page Speed", value: "0.7s" },
      { label: "Oversold Items", value: "0" },
    ],
    kevinResponsibility:
      "Edge-rendered product catalog, snappy client-side cart machine with Zustand, and zero-CLS checkout flow.",
    danendraResponsibility:
      "Inventory concurrency handling with row-level locks, order queue processing, and payment webhook signing.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Tailwind CSS"],
    demoUrl: "https://auracommerce.example.com",
    githubUrl: "https://github.com",
    isFeatured: true,
  },
  {
    id: "streamsync",
    title: "StreamSync — Real-Time Multiplayer Canvas",
    category: "Real-Time Systems",
    categoryBadge: "Collaborative Tool",
    headline: "Low-latency multiplayer diagramming workspace with CRDT-based state synchronization",
    problem:
      "High cursor synchronization lag and frequent state collision bugs when 20+ teammates collaborated simultaneously.",
    solution:
      "Crafted an optimized HTML5 Canvas engine with CRDT state resolution over binary WebSockets with delta compression.",
    outcome: "60 FPS canvas rendering • < 15ms cursor sync across global nodes • Zero edit conflicts",
    image: "/projects/streamsync.svg",
    stats: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Cursor Sync", value: "< 15ms" },
      { label: "Conflict Rate", value: "0%" },
    ],
    kevinResponsibility:
      "Custom HTML5 Canvas rendering engine, multi-cursor presence interpolation, and responsive toolbars.",
    danendraResponsibility:
      "Distributed WebSocket broadcasting cluster, snapshot persistence layer, and delta compression pipeline.",
    techStack: ["Next.js", "TypeScript", "WebSockets", "Redis Pub/Sub", "Docker", "Tailwind CSS"],
    demoUrl: "https://streamsync.example.com",
    githubUrl: "https://github.com",
    isFeatured: false,
  },
];
