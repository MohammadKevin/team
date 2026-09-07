export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  output: string;
  timeline: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Architecture & Specs",
    subtitle: "System Blueprints & Milestones",
    description:
      "We define the technical foundation before writing code. We map entity relationships, API contracts, third-party integrations, and create a transparent milestone roadmap.",
    activities: [
      "Requirements gathering & scope alignment",
      "Relational database schema & ERD design",
      "API contract specifications (REST / GraphQL)",
      "Technical milestone schedule & repository setup",
    ],
    output: "Architecture Blueprint, ERD Diagram, & Milestone Roadmap",
    timeline: "Week 1",
  },
  {
    step: "02",
    title: "Sprint Development",
    subtitle: "Continuous Demos & Direct Communication",
    description:
      "Agile bi-weekly sprints where Kevin builds the frontend interface and Danendra implements the backend APIs concurrently. You get live staging URLs to review progress anytime.",
    activities: [
      "Concurrent frontend & backend engineering",
      "Live staging deployment with every sprint",
      "Bi-weekly interactive demo walkthroughs",
      "Direct communication via Slack / WhatsApp / Discord",
    ],
    output: "Live Staging Environment & Weekly Changelog",
    timeline: "Weeks 2 – 5",
  },
  {
    step: "03",
    title: "Testing & Hardening",
    subtitle: "Security, Speed & Edge Cases",
    description:
      "Rigorous quality assurance phase. We load-test backend endpoints, verify payment webhooks under edge cases, and run Lighthouse audits to achieve optimal Core Web Vitals.",
    activities: [
      "End-to-end integration & payment webhook testing",
      "Core Web Vitals & Lighthouse 95+ optimization",
      "API load & concurrency stress testing",
      "Cross-browser and mobile responsive auditing",
    ],
    output: "Audit Report, Test Suite, & Performance Green Lights",
    timeline: "Week 6",
  },
  {
    step: "04",
    title: "Deployment & Handover",
    subtitle: "Zero-Downtime Launch & 30-Day Warranty",
    description:
      "We orchestrate production deployment, configure DNS/SSL, provide comprehensive documentation, and remain on standby with our 30-day bug warranty.",
    activities: [
      "Production cloud/VPS infrastructure setup",
      "Automated CI/CD deployment pipeline configuration",
      "Full source code handover & documentation",
      "30-day post-launch warranty with priority bug fixes",
    ],
    output: "Production Live URL, Handover Docs, & Full Source Code",
    timeline: "Launch & Beyond",
  },
];
