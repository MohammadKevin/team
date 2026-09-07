"use client";

import React from "react";
import { servicesData } from "@/data/services";
import { Layout, Server, CreditCard, Cloud, ArrowRight, Layers } from "lucide-react";

export default function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5" />;
      case "Server":
        return <Server className="w-5 h-5" />;
      case "CreditCard":
        return <CreditCard className="w-5 h-5" />;
      case "Cloud":
        return <Cloud className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50/40 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            Capabilities & Deliverables
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            End-to-End Technical Services
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            We deliver robust engineering solutions built specifically for your product requirements, with zero
            shortcuts on code cleanliness or database resilience.
          </p>
        </div>

        {/* 4 Modular Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-cyan-400 hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Top Bar: Icon & Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-cyan-50 group-hover:text-cyan-700 group-hover:border-cyan-200 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-cyan-600 transition-colors">
                      SERVICE {service.number}
                    </span>
                  </div>

                  {/* Title & Short Summary */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Scope & Capabilities List */}
                  <div className="mt-6 space-y-2.5">
                    <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                      Core Engineering Scope:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="w-4 h-4 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <h4 className="text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Standard Deliverables:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                      {service.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                          <span className="truncate">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer: Tech Stack & CTA */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-800 transition-colors"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
