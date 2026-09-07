"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData, ProjectItem } from "@/data/projects";
import { ArrowUpRight, X } from "lucide-react";

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="works" className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered for Production Scale
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              High-impact SaaS platforms, real-time collaboration engines, and resilient payment gateways built
              collaboratively from ground up.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-white px-3 py-2 rounded-lg border border-slate-200 self-start md:self-auto">
            <span className="font-semibold text-slate-900">4 Featured Systems</span>
            <span>•</span>
            <span className="text-cyan-700 font-semibold">100% Client Retention</span>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              {/* Project Mockup Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-200 group-hover:border-cyan-500/30 transition-colors">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  priority={project.isFeatured}
                />

                {/* Top Floating Badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[11px] font-mono font-bold text-slate-800 border border-slate-200/80 shadow-2xs">
                    {project.categoryBadge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Tagline */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 font-normal leading-relaxed">
                    {project.headline}
                  </p>

                  {/* Problem & Solution Accordion-like Preview */}
                  <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                    <div>
                      <span className="font-mono font-bold text-slate-700">CHALLENGE: </span>
                      <span className="text-slate-600">{project.problem}</span>
                    </div>
                    <div>
                      <span className="font-mono font-bold text-cyan-700">SOLUTION: </span>
                      <span className="text-slate-600">{project.solution}</span>
                    </div>
                  </div>

                  {/* Impact Stats */}
                  <div className="mt-4 grid grid-cols-3 gap-2 pt-1 border-t border-slate-100">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-white border border-slate-200/70 text-center">
                        <div className="text-xs sm:text-sm font-bold font-mono text-slate-900">{stat.value}</div>
                        <div className="text-[10px] text-slate-500 truncate">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Engineer Responsibilities Breakdown */}
                  <div className="mt-4 space-y-1.5 text-xs">
                    <div className="flex items-start gap-1.5">
                      <span className="px-1.5 py-0.5 rounded-sm bg-sky-100 text-sky-800 font-mono font-bold text-[10px]">
                        Kevin
                      </span>
                      <span className="text-slate-600 text-[11px] leading-tight">
                        {project.kevinResponsibility}
                      </span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="px-1.5 py-0.5 rounded-sm bg-cyan-100 text-cyan-800 font-mono font-bold text-[10px]">
                        Danendra
                      </span>
                      <span className="text-slate-600 text-[11px] leading-tight">
                        {project.danendraResponsibility}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer: Tech Stack & Action Links */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[11px] font-mono">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      <span>Case Details</span>
                    </button>
                    {project.demoUrl && (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-600 transition-colors"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-cyan-300" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Dialog */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-cyan-100 text-cyan-800 font-mono text-xs font-semibold">
                {selectedProject.categoryBadge}
              </span>
              <span className="text-xs font-mono text-slate-500">Case Study Breakdown</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {selectedProject.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{selectedProject.headline}</p>

            {/* Preview Image */}
            <div className="mt-5 relative aspect-video w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 800px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            {/* Key Metrics */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {selectedProject.stats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-lg font-mono font-extrabold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Deep Problem & Solution */}
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Problem & Architectural Bottleneck
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyan-50/50 border border-cyan-200/60">
                <h4 className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wider mb-1">
                  Our Engineering Solution & Implementation
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Technical Responsibilities */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 font-mono font-bold text-xs">
                    Mohammad Kevin
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Frontend Lead</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedProject.kevinResponsibility}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-cyan-100 text-cyan-800 font-mono font-bold text-xs">
                    Danendra Athallah
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Backend Lead</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedProject.danendraResponsibility}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-6">
              <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                Tech Stack & Libraries
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-cyan-600 transition-colors"
              >
                <span>Inquire for Similar Project</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-300" />
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
