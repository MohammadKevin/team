"use client";

import { useState } from "react";
import { X, Plus, Trash2, Sliders, FolderPlus, MessageSquarePlus, Check, Sparkles } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function CmsDrawer() {
  const {
    isCmsOpen,
    setIsCmsOpen,
    projects,
    addProject,
    deleteProject,
    testimonials,
    addTestimonial,
    deleteTestimonial,
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<"projects" | "testimonials">("projects");

  // Project form state
  const [newProject, setNewProject] = useState({
    title: "",
    category: "Fullstack SaaS" as const,
    headline: "",
    problem: "",
    outcome: "",
    kevinResponsibility: "",
    danendraResponsibility: "",
    tech: "Next.js 16, TypeScript, PostgreSQL, Redis",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  });

  // Testimonial form state
  const [newTestimonial, setNewTestimonial] = useState({
    clientName: "",
    clientRole: "",
    company: "",
    projectDelivered: "",
    impactMetric: "",
    content: "",
    avatarInitials: "CL",
    rating: 5,
  });

  const [projectSuccess, setProjectSuccess] = useState(false);
  const [testimonialSuccess, setTestimonialSuccess] = useState(false);

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.headline) return;

    addProject({
      title: newProject.title,
      category: newProject.category,
      headline: newProject.headline,
      problem: newProject.problem || "High latency and unoptimized database operations.",
      outcome: newProject.outcome || "Sub-50ms API responses and 99.9% uptime.",
      kevinResponsibility:
        newProject.kevinResponsibility || "Frontend UI architecture, state synchronization, and accessible components.",
      danendraResponsibility:
        newProject.danendraResponsibility || "Backend REST/WebSocket APIs, PostgreSQL schema design, and Redis caching.",
      tech: newProject.tech.split(",").map((s) => s.trim()),
      liveUrl: newProject.liveUrl,
      githubUrl: newProject.githubUrl,
      isFeatured: true,
    });

    setProjectSuccess(true);
    setTimeout(() => setProjectSuccess(false), 2500);
    setNewProject({
      title: "",
      category: "Fullstack SaaS",
      headline: "",
      problem: "",
      outcome: "",
      kevinResponsibility: "",
      danendraResponsibility: "",
      tech: "Next.js 16, TypeScript, PostgreSQL, Redis",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    });
  };

  const handleCreateTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.clientName || !newTestimonial.content) return;

    const initials = newTestimonial.clientName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    addTestimonial({
      clientName: newTestimonial.clientName,
      clientRole: newTestimonial.clientRole || "Product Lead",
      company: newTestimonial.company || "Tech Startup",
      projectDelivered: newTestimonial.projectDelivered || "Fullstack Web App",
      impactMetric: newTestimonial.impactMetric || "100% On-time Delivery",
      content: newTestimonial.content,
      avatarInitials: initials || "CL",
      rating: newTestimonial.rating,
    });

    setTestimonialSuccess(true);
    setTimeout(() => setTestimonialSuccess(false), 2500);
    setNewTestimonial({
      clientName: "",
      clientRole: "",
      company: "",
      projectDelivered: "",
      impactMetric: "",
      content: "",
      avatarInitials: "CL",
      rating: 5,
    });
  };

  if (!isCmsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-2xl h-full bg-zinc-950 border-l border-zinc-800 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto font-mono text-xs shadow-2xl">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span className="font-bold text-white text-sm font-sans">
                Duo Studio Content Manager
              </span>
              <span className="text-[10px] bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800">
                LIVE_STATE
              </span>
            </div>
            <button
              onClick={() => setIsCmsOpen(false)}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-2 my-6 bg-zinc-900 border border-zinc-800 p-1 rounded-md">
            <button
              onClick={() => setActiveTab("projects")}
              className={`flex-1 py-1.5 rounded transition-all text-center ${
                activeTab === "projects" ? "bg-zinc-800 text-white font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              // 01. PROJECTS ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`flex-1 py-1.5 rounded transition-all text-center ${
                activeTab === "testimonials" ? "bg-zinc-800 text-white font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              // 02. TESTIMONIALS ({testimonials.length})
            </button>
          </div>

          {/* Tab Content: Projects */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              {/* Add form */}
              <form onSubmit={handleCreateProject} className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between text-zinc-300 font-bold">
                  <span className="flex items-center gap-1.5">
                    <FolderPlus className="w-3.5 h-3.5 text-cyan-400" /> Add New Project
                  </span>
                  {projectSuccess && (
                    <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                      <Check className="w-3 h-3" /> ADDED_TO_PORTFOLIO
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-zinc-500">Project Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. ApexCloud Storage"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded bg-zinc-950 border border-zinc-800 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-zinc-500">Category</label>
                    <select
                      value={newProject.category}
                      onChange={(e) => setNewProject({ ...newProject, category: e.target.value as any })}
                      className="w-full px-2.5 py-1.5 rounded bg-zinc-950 border border-zinc-800 text-white"
                    >
                      <option value="Fullstack SaaS">Fullstack SaaS</option>
                      <option value="High-Throughput API">High-Throughput API</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Enterprise Portal">Enterprise Portal</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-zinc-500">Headline</label>
                  <input
                    type="text"
                    required
                    placeholder="Short summary of the system"
                    value={newProject.headline}
                    onChange={(e) => setNewProject({ ...newProject, headline: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded bg-zinc-950 border border-zinc-800 text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-zinc-500">Problem Solved</label>
                    <input
                      type="text"
                      placeholder="Bottleneck or issue"
                      value={newProject.problem}
                      onChange={(e) => setNewProject({ ...newProject, problem: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded bg-zinc-950 border border-zinc-800 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-zinc-500">Metric / Outcome</label>
                    <input
                      type="text"
                      placeholder="e.g. P99 < 40ms | 10k RPS"
                      value={newProject.outcome}
                      onChange={(e) => setNewProject({ ...newProject, outcome: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded bg-zinc-950 border border-zinc-800 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-cyan-400">Mohammad Kevin&apos;s Role</label>
                    <input
                      type="text"
                      placeholder="Frontend & State role"
                      value={newProject.kevinResponsibility}
                      onChange={(e) => setNewProject({ ...newProject, kevinResponsibility: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded bg-zinc-950 border border-zinc-800 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-emerald-400">Danendra&apos;s Role</label>
                    <input
                      type="text"
                      placeholder="Backend & DB role"
                      value={newProject.danendraResponsibility}
                      onChange={(e) => setNewProject({ ...newProject, danendraResponsibility: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded bg-zinc-950 border border-zinc-800 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-zinc-500">Tech Stack (comma separated)</label>
                  <input
                    type="text"
                    placeholder="Next.js 16, Go, PostgreSQL, Redis"
                    value={newProject.tech}
                    onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded bg-zinc-950 border border-zinc-800 text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold transition-colors"
                >
                  PUSH_PROJECT_TO_SHOWCASE
                </button>
              </form>

              {/* Existing items list */}
              <div className="space-y-2">
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider">// ACTIVE_PROJECTS_LIST</div>
                {projects.map((p) => (
                  <div
                    key={p.id}
                    className="p-3 rounded bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="font-bold text-white font-sans text-xs">{p.title}</div>
                      <div className="text-[10px] text-zinc-400">{p.category} &bull; {p.outcome}</div>
                    </div>
                    <button
                      onClick={() => deleteProject(p.id)}
                      className="p-1.5 rounded text-zinc-500 hover:text-red-400 hover:bg-zinc-800 transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: Testimonials */}
          {activeTab === "testimonials" && (
            <div className="space-y-6">
              {/* Add form */}
              <form onSubmit={handleCreateTestimonial} className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between text-zinc-300 font-bold">
                  <span className="flex items-center gap-1.5">
                    <MessageSquarePlus className="w-3.5 h-3.5 text-emerald-400" /> Add Client Testimonial
                  </span>
                  {testimonialSuccess && (
                    <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                      <Check className="w-3 h-3" /> ADDED_REVIEW
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-zinc-500">Client Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Lin"
                      value={newTestimonial.clientName}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, clientName: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded bg-zinc-950 border border-zinc-800 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-zinc-500">Role &amp; Company</label>
                    <input
                      type="text"
                      placeholder="CTO at TechCorp"
                      value={newTestimonial.clientRole}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, clientRole: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded bg-zinc-950 border border-zinc-800 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-zinc-500">Project Delivered</label>
                    <input
                      type="text"
                      placeholder="e.g. Enterprise SaaS Platform"
                      value={newTestimonial.projectDelivered}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, projectDelivered: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded bg-zinc-950 border border-zinc-800 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-zinc-500">Impact Metric</label>
                    <input
                      type="text"
                      placeholder="e.g. +40% Speed Boost"
                      value={newTestimonial.impactMetric}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, impactMetric: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded bg-zinc-950 border border-zinc-800 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-zinc-500">Review Content</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Enter realistic client feedback regarding speed, architecture, and communication..."
                    value={newTestimonial.content}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, content: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded bg-zinc-950 border border-zinc-800 text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold transition-colors"
                >
                  PUSH_TESTIMONIAL_TO_PAGE
                </button>
              </form>

              {/* Existing Testimonials */}
              <div className="space-y-2">
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider">// ACTIVE_TESTIMONIALS_LIST</div>
                {testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="p-3 rounded bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="font-bold text-white font-sans text-xs">{t.clientName} ({t.company})</div>
                      <div className="text-[10px] text-zinc-400">{t.projectDelivered} &bull; {t.impactMetric}</div>
                    </div>
                    <button
                      onClick={() => deleteTestimonial(t.id)}
                      className="p-1.5 rounded text-zinc-500 hover:text-red-400 hover:bg-zinc-800 transition-colors"
                      title="Delete Review"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-zinc-800 text-[11px] text-zinc-500 flex items-center justify-between">
          <span>CHANGES_SYNC_IMMEDIATELY_TO_DOM</span>
          <button
            onClick={() => setIsCmsOpen(false)}
            className="text-zinc-300 hover:text-white"
          >
            CLOSE_DRAWER &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
