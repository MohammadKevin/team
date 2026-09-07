"use client";

import React from "react";
import { Check, ArrowRight, ShieldCheck, Zap, Layers, RefreshCw } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "MVP Launch Sprint",
      badge: "Most Popular for Startups",
      timeline: "2 – 4 Weeks Delivery",
      description:
        "End-to-end fullstack product development designed to get your idea into production with zero tech debt.",
      idealFor: "Founders launching a new SaaS, web platform, or core MVP.",
      features: [
        "Complete Next.js 16 + TypeScript frontend interface",
        "Resilient Go or Node.js backend with PostgreSQL & Prisma",
        "Payment integration (Stripe / Midtrans / Xendit)",
        "Authentication & Role-Based Access Control (RBAC)",
        "Automated CI/CD pipeline & Docker containerization",
        "Direct daily communication via Slack or WhatsApp",
        "30-Day post-launch warranty with priority fixes",
      ],
      paymentSchedule: "50% Project Kickoff • 50% Production Handover",
      cta: "Schedule MVP Consultation",
      popular: true,
      icon: Zap,
    },
    {
      name: "Dedicated Duo Retainer",
      badge: "Continuous Engineering",
      timeline: "Monthly Dedicated Sprints",
      description:
        "Hire Kevin & Danendra as your dedicated fullstack and backend engineering unit on a flexible monthly basis.",
      idealFor: "Growing businesses needing fast, continuous feature iterations.",
      features: [
        "Full-time technical bandwidth (Frontend & Backend)",
        "Bi-weekly sprint planning & live staging demo reviews",
        "System scaling, caching layers & database indexing",
        "Third-party API integrations & webhook processors",
        "Unlimited code reviews, refactoring & security hardening",
        "Shared private Slack / Discord channel & async standups",
        "Pause or cancel anytime with 14-day notice",
      ],
      paymentSchedule: "Billed monthly upfront • Zero lock-in contracts",
      cta: "Inquire for Duo Retainer",
      popular: false,
      icon: RefreshCw,
    },
    {
      name: "Architecture & API Overhaul",
      badge: "Performance & Security",
      timeline: "1 – 2 Weeks Deep Dive",
      description:
        "Targeted performance tuning, database optimization, and latency reduction for existing applications.",
      idealFor: "Teams facing slow database queries, memory leaks, or scaling bottlenecks.",
      features: [
        "Comprehensive database schema & SQL query profiling",
        "Redis caching & queue architecture implementation",
        "Core Web Vitals & Lighthouse 95+ frontend speedup",
        "Security audit, rate limiting & Row-Level Security",
        "Complete architecture blueprint & handover documentation",
        "14-Day post-optimization monitoring & SLA guarantee",
      ],
      paymentSchedule: "100% Milestone-based on verified benchmark results",
      cta: "Request System Audit",
      popular: false,
      icon: Layers,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white border-b border-slate-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            Transparent Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Predictable Engagement Models
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Straightforward pricing structures with zero hidden overheads. You pay strictly for high-caliber engineering
            output and working software.
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-6 sm:p-8 transition-all duration-200 ${
                  plan.popular
                    ? "bg-slate-900 text-white border-2 border-cyan-500 shadow-xl"
                    : "bg-slate-50/70 text-slate-900 border border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 font-mono text-[11px] font-bold tracking-wide uppercase shadow-sm">
                    {plan.badge}
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        plan.popular ? "bg-slate-800 text-cyan-400" : "bg-white text-slate-700 border border-slate-200"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md ${
                        plan.popular ? "bg-slate-800 text-slate-300" : "bg-white text-slate-600 border border-slate-200"
                      }`}
                    >
                      {plan.timeline}
                    </span>
                  </div>

                  <h3 className={`text-2xl font-bold tracking-tight ${plan.popular ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${plan.popular ? "text-slate-300" : "text-slate-600"}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Ideal For */}
                <div
                  className={`p-3 rounded-xl mb-6 text-xs font-medium ${
                    plan.popular ? "bg-slate-800/80 text-cyan-200" : "bg-white text-slate-700 border border-slate-200/80"
                  }`}
                >
                  <span className="font-bold">Best for: </span>
                  {plan.idealFor}
                </div>

                {/* Features List */}
                <div className="flex-1 space-y-3 mb-8">
                  <p
                    className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                      plan.popular ? "text-cyan-400" : "text-slate-800"
                    }`}
                  >
                    Included Deliverables:
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.popular ? "text-cyan-400" : "text-cyan-600"
                          }`}
                        />
                        <span className={plan.popular ? "text-slate-200" : "text-slate-600"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Payment terms */}
                <div
                  className={`pt-4 border-t mb-6 text-[11px] font-mono ${
                    plan.popular ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-500"
                  }`}
                >
                  {plan.paymentSchedule}
                </div>

                {/* Action CTA */}
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-150 cursor-pointer ${
                    plan.popular
                      ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md hover:shadow-cyan-500/25"
                      : "bg-slate-900 hover:bg-cyan-600 text-white shadow-xs"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-slate-800">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">100% Intellectual Property & Code Handover</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Full private GitHub repository ownership transferred on final milestone acceptance with strict non-disclosure.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 text-xs font-mono font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1"
          >
            <span>Have custom requirements? Talk to us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
