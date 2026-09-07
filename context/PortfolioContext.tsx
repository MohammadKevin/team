"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Project {
  id: string;
  title: string;
  category: "Fullstack SaaS" | "High-Throughput API" | "E-Commerce" | "Enterprise Portal";
  headline: string;
  problem: string;
  outcome: string;
  kevinResponsibility: string;
  danendraResponsibility: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  projectDelivered: string;
  impactMetric: string;
  content: string;
  avatarInitials: string;
  rating: number;
}

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  priceUsd: string;
  priceIdr: string;
  turnaround: string;
  badge?: string;
  isPopular?: boolean;
  scope: string[];
  deliverables: string[];
  idealFor: string;
}

interface PortfolioContextType {
  projects: Project[];
  testimonials: Testimonial[];
  selectedPackage: string | null;
  setSelectedPackage: (pkgId: string | null) => void;
  currency: "USD" | "IDR";
  setCurrency: (c: "USD" | "IDR") => void;
  isCmsOpen: boolean;
  setIsCmsOpen: (open: boolean) => void;
  addProject: (p: Omit<Project, "id">) => void;
  deleteProject: (id: string) => void;
  addTestimonial: (t: Omit<Testimonial, "id">) => void;
  deleteTestimonial: (id: string) => void;
}

const initialProjects: Project[] = [
  {
    id: "proj-1",
    title: "FlowDesk — Multi-Tenant Workspace",
    category: "Fullstack SaaS",
    headline: "Real-time task synchronization & permission mesh for distributed teams",
    problem:
      "Legacy tooling suffered 3-5s update latency and frequent database locks during concurrent multi-team sprint reviews.",
    outcome: "< 40ms real-time event latency • Zero database deadlocks across 10,000+ DAU",
    kevinResponsibility:
      "Frontend & State Architecture: Fluid drag-and-drop Kanban, optimistic UI mutations, and keyboard-first command palette.",
    danendraResponsibility:
      "Backend & Cloud Database: Multi-tenant PostgreSQL Row-Level Security, WebSocket cluster in Go, and distributed Redis session lock.",
    tech: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Redis Pub/Sub", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    isFeatured: true,
  },
  {
    id: "proj-2",
    title: "KromaPay — High-Throughput Payment Core",
    category: "High-Throughput API",
    headline: "Zero-loss transaction processor with automated webhook replay and reconciliation",
    problem:
      "Client faced payment timeout spikes, race condition vulnerabilities, and inconsistent ledger balances during peak campaign drops.",
    outcome: "12,000+ RPS sustained • 99.999% ACID transaction accuracy • P99 latency < 55ms",
    kevinResponsibility:
      "Merchant analytics console, real-time transaction ledger visualizer, and developer API key management portal.",
    danendraResponsibility:
      "Core transaction engine, token bucket rate limiter, Kafka event broker, and AES-256 encrypted ledger storage.",
    tech: ["Go (Golang)", "Node.js", "PostgreSQL", "Redis", "Kafka", "Docker", "Next.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    isFeatured: true,
  },
  {
    id: "proj-3",
    title: "AuraCommerce — Headless E-Commerce System",
    category: "E-Commerce",
    headline: "Sub-second storefront with dynamic inventory lock and Stripe checkout orchestration",
    problem:
      "High bounce rates on mobile due to heavy client payloads and overselling items during flash sales.",
    outcome: "+310% mobile checkout conversion • 0.7s Largest Contentful Paint • 0 oversold items",
    kevinResponsibility:
      "Edge-rendered product catalog, snappy client-side cart machine with Zustand, and zero-CLS checkout flow.",
    danendraResponsibility:
      "Inventory concurrency handling with row-level locks, order queue processing, and Stripe webhook signing.",
    tech: ["React 19", "Next.js 16", "PostgreSQL", "Redis", "Stripe API", "Tailwind CSS v4"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    isFeatured: true,
  },
  {
    id: "proj-4",
    title: "StreamSync — Real-Time Multiplayer Canvas",
    category: "Fullstack SaaS",
    headline: "Low-latency multiplayer diagramming workspace with CRDT-based state synchronization",
    problem:
      "High cursor synchronization lag and frequent state collision bugs when 20+ teammates collaborated simultaneously.",
    outcome: "60 FPS canvas rendering • < 15ms cursor sync across global nodes • Zero edit conflicts",
    kevinResponsibility:
      "Custom HTML5 Canvas rendering engine, multi-cursor presence interpolation, and responsive toolbars.",
    danendraResponsibility:
      "Distributed WebSocket broadcasting cluster, snapshot persistence layer, and delta compression pipeline.",
    tech: ["Next.js", "TypeScript", "WebSockets", "Redis Pub/Sub", "Docker", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "proj-5",
    title: "DataPulse — IoT Sensor Telemetry & Ops Engine",
    category: "Enterprise Portal",
    headline: "High-density time-series telemetry ingestion for smart factory hardware networks",
    problem:
      "Factory hardware streams generated 20,000 data points per second, overwhelming traditional SQL schemas.",
    outcome: "25M+ data points/day processed • Sub-100ms analytical queries • Instant anomaly alerting",
    kevinResponsibility:
      "Interactive time-series charts, alert threshold configuration UI, and live status heatmaps.",
    danendraResponsibility:
      "TimescaleDB hypertable optimization, ingestion rate limiter, and automated alert trigger workers.",
    tech: ["Node.js", "TimescaleDB", "PostgreSQL", "Redis", "React 19", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

const initialTestimonials: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Sarah Jenkins",
    clientRole: "VP of Engineering",
    company: "LoomiTech US",
    projectDelivered: "FlowDesk Enterprise SaaS",
    impactMetric: "+45% Daily Active User Retention",
    content:
      "Kevin and Danendra are a lethal combination. Kevin built our front-end with an obsession for speed and polish, while Danendra's backend handled our 10k active user load without breaking a sweat. Delivered 1 week ahead of schedule.",
    avatarInitials: "SJ",
    rating: 5,
  },
  {
    id: "test-2",
    clientName: "Budi Santoso",
    clientRole: "Founder & CEO",
    company: "Nusantara Fintech",
    projectDelivered: "KromaPay Payment Core",
    impactMetric: "Zero Transaction Drops on Flash Sales",
    content:
      "Finding a team that understands both pixel-perfect UX and strict ACID financial transactions is extremely rare. They audited our previous bottlenecks, rewrote the core pipeline, and we had zero errors during our biggest launch.",
    avatarInitials: "BS",
    rating: 5,
  },
  {
    id: "test-3",
    clientName: "Marcus Vance",
    clientRole: "Product Director",
    company: "Vance Commerce Group",
    projectDelivered: "AuraCommerce Headless Platform",
    impactMetric: "3.1x Mobile Conversion Surge",
    content:
      "Our mobile conversion rate surged by 310% within 3 weeks of deploying their Next.js storefront and optimized checkout. Communication was direct, daily, and completely transparent without any agency red tape.",
    avatarInitials: "MV",
    rating: 5,
  },
  {
    id: "test-4",
    clientName: "Elena Rostova",
    clientRole: "Co-founder & CTO",
    company: "SyncPulse Berlin",
    projectDelivered: "StreamSync Multiplayer Workspace",
    impactMetric: "< 15ms Global Multiplayer Latency",
    content:
      "Their division of labor is flawless. Kevin crafted an interface that our users love spending hours in, and Danendra built a WebSocket backend that stays rock solid even under peak concurrency.",
    avatarInitials: "ER",
    rating: 5,
  },
];

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [currency, setCurrency] = useState<"USD" | "IDR">("USD");
  const [isCmsOpen, setIsCmsOpen] = useState(false);

  const addProject = (newP: Omit<Project, "id">) => {
    const project: Project = {
      ...newP,
      id: `proj-${Date.now()}`,
    };
    setProjects((prev) => [project, ...prev]);
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const addTestimonial = (newT: Omit<Testimonial, "id">) => {
    const testimonial: Testimonial = {
      ...newT,
      id: `test-${Date.now()}`,
    };
    setTestimonials((prev) => [testimonial, ...prev]);
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        testimonials,
        selectedPackage,
        setSelectedPackage,
        currency,
        setCurrency,
        isCmsOpen,
        setIsCmsOpen,
        addProject,
        deleteProject,
        addTestimonial,
        deleteTestimonial,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
