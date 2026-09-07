export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  deliverables: string[];
  techStack: string[];
  iconName: "Layout" | "Server" | "CreditCard" | "Cloud";
}

export const servicesData: ServiceItem[] = [
  {
    id: "fullstack-web-apps",
    number: "01",
    title: "Fullstack Web Applications",
    shortDesc: "End-to-end custom portals, SaaS dashboards, and workflow management systems.",
    description:
      "We design and build production-grade web applications from initial database models to pixel-perfect, responsive interfaces. Designed for high performance, accessibility, and frictionless user flows.",
    features: [
      "Next.js App Router with SSR, SSG & Server Actions",
      "Interactive data tables, charts & complex dashboards",
      "Robust state management (Zustand / TanStack Query)",
      "Strict end-to-end TypeScript safety and linting",
    ],
    deliverables: [
      "Complete responsive web application",
      "Clean, modular component library",
      "Lighthouse 95+ performance optimization",
      "Source repository with full ownership",
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    iconName: "Layout",
  },
  {
    id: "backend-api-architecture",
    number: "02",
    title: "Backend & API Architecture",
    shortDesc: "High-throughput REST/GraphQL APIs, database schema design, and secure authentication.",
    description:
      "Engineered for sub-100ms response times and horizontal scalability. We build bulletproof relational schemas, rate limiters, caching layers, and role-based access control.",
    features: [
      "RESTful, GraphQL, or gRPC API gateways",
      "PostgreSQL schema modeling & migration pipelines",
      "Multi-tenant isolation & Row-Level Security (RLS)",
      "Secure Auth (JWT, OAuth 2.0, Session Cookies)",
    ],
    deliverables: [
      "Production-ready backend API service",
      "OpenAPI / Swagger / Postman documentation",
      "Database migration scripts & seeders",
      "Automated unit & integration test suite",
    ],
    techStack: ["Go", "Node.js", "PostgreSQL", "Redis", "Prisma", "Docker"],
    iconName: "Server",
  },
  {
    id: "third-party-payment-integrations",
    number: "03",
    title: "Third-Party & Payment Integrations",
    shortDesc: "Midtrans/Xendit gateways, WhatsApp bots, and shipping/courier logistics.",
    description:
      "Seamlessly connect your core product to local and global financial systems, messaging providers, and logistics platforms with zero-loss idempotency and webhook handlers.",
    features: [
      "Payment gateways: Midtrans, Xendit, Stripe, PayPal",
      "Automated webhook verification & transaction ledgers",
      "WhatsApp Business API & notification bots",
      "Shipping aggregators (Biteship, RajaOngkir, JNE/J&T)",
    ],
    deliverables: [
      "Idempotent payment & checkout flows",
      "Automated transaction reconciliation logs",
      "Direct webhook replay & dead-letter queue",
      "Real-time customer notification engine",
    ],
    techStack: ["Stripe", "Midtrans", "Xendit", "WhatsApp API", "Webhooks", "Redis Queue"],
    iconName: "CreditCard",
  },
  {
    id: "cloud-deployment-maintenance",
    number: "04",
    title: "Deployment, Cloud & Maintenance",
    shortDesc: "CI/CD pipelines, VPS/cloud configuration, and 30-day post-launch bug warranty.",
    description:
      "We get your applications securely into production with automated pipelines, SSL certificates, monitoring dashboards, and provide guaranteed post-launch stability support.",
    features: [
      "Automated GitHub Actions CI/CD pipelines",
      "VPS / Docker / Cloudflare / Vercel / AWS setups",
      "Nginx reverse proxy, SSL & security hardening",
      "30-day post-launch bug warranty & SLA support",
    ],
    deliverables: [
      "Fully configured production infrastructure",
      "Automated zero-downtime deployment script",
      "System health monitoring & error logging",
      "Handover guide & technical documentation",
    ],
    techStack: ["Docker", "GitHub Actions", "Cloudflare", "Vercel", "AWS / DigitalOcean", "Nginx"],
    iconName: "Cloud",
  },
];
