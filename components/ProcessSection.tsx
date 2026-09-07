"use client";

import React from "react";
import { processSteps } from "@/data/process";
import { Clock, ArrowRight, ShieldCheck } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            Engineering Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Predictable, Milestone-Driven Delivery
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            A battle-tested 4-stage process designed to eliminate surprises, keep you in control with live sprint
            demos, and guarantee production-ready software.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between bg-slate-50/60 rounded-2xl border border-slate-200 p-6 hover:border-cyan-400 hover:bg-white hover:shadow-md transition-all duration-200 group"
            >
              <div>
                {/* Step Number & Timeline Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-mono text-sm font-bold text-slate-900 group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors shadow-2xs">
                    {step.step}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-600">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{step.timeline}</span>
                  </span>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-mono font-medium text-slate-600 mt-0.5">{step.subtitle}</p>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>

                {/* Activities Checklist */}
                <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-200/80">
                  {step.activities.map((act, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <span className="text-cyan-600 font-bold shrink-0">›</span>
                      <span className="leading-tight">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Output Pill */}
              <div className="mt-6 pt-3 border-t border-slate-200/80">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Deliverable:
                </span>
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800">
                  {step.output}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white tracking-tight">
                Our 30-Day Post-Launch Bug Warranty
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Every project includes 30 days of active monitoring and priority bug fixes at zero extra charge.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-cyan-400 transition-colors shrink-0 shadow-2xs"
          >
            <span>Start a Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
