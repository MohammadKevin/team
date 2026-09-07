export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  image: string;
  focusAreas: string[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  socials: {
    github?: string;
    linkedin?: string;
    email?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "kevin",
    name: "Mohammad Kevin",
    role: "Fullstack & Systems Architect",
    badge: "Frontend & Architecture Lead",
    bio: "Specializes in building lightning-fast web applications with Next.js and TypeScript. Obsessed with high Core Web Vitals, fluid state machines, and resilient client-server data synchronization.",
    image: "/team/kevin.jpeg",
    focusAreas: [
      "Next.js App Router & SSR/ISR Architecture",
      "Core Web Vitals & Sub-Second Page Loads",
      "Interactive Dashboards & State Management",
      "Type-Safe Client-Server Contracts (tRPC/REST)",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
      "TanStack Query",
      "GraphQL / REST",
    ],
    metrics: [
      { label: "Core Web Vitals", value: "100/100" },
      { label: "Frontend Speedup", value: "3.2x" },
    ],
    socials: {
      github: "https://github.com/mohammadkevin",
      linkedin: "https://linkedin.com/in/mohammadkevin",
      email: "mailto:kevin@codestudio.dev",
    },
  },
  {
    id: "danendra",
    name: "Danendra Athallah",
    role: "Backend & Cloud Architect",
    badge: "Backend & Systems Lead",
    bio: "Specializes in architecting high-throughput microservices, robust PostgreSQL schemas, low-latency caching layers, and zero-downtime cloud deployments.",
    image: "/team/danendra.jpeg",
    focusAreas: [
      "High-Throughput API Gateways (REST & gRPC)",
      "Database Schema Design & Row-Level Security",
      "Event-Driven Architecture (Kafka / Redis)",
      "Docker, CI/CD, & Cloud Infrastructure",
    ],
    techStack: [
      "Go (Golang)",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Docker",
      "Kafka",
      "Cloudflare / VPS",
    ],
    metrics: [
      { label: "Sustained Throughput", value: "12k+ RPS" },
      { label: "P99 API Latency", value: "< 45ms" },
    ],
    socials: {
      github: "https://github.com/danendraathallah",
      linkedin: "https://linkedin.com/in/danendraathallah",
      email: "mailto:danendra@codestudio.dev",
    },
  },
];
