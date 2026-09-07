"use client";

import React from "react";
import { Star, Quote, ShieldCheck, CheckCircle } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      quote:
        "Voltiq Labs delivered our fullstack SaaS MVP in less than 4 weeks. The Next.js frontend is blistering fast with perfect Core Web Vitals, and their Go backend handled our product launch spike without a single hiccup. Best engineering decision we made.",
      author: "Marcus Vance",
      role: "Founder & CEO",
      company: "ApexFlow Technologies",
      avatarBadge: "MV",
      projectScope: "Fullstack Next.js + Go Microservices",
      metric: "Launched in 24 Days",
    },
    {
      quote:
        "Working directly with the engineers at Voltiq Labs made communication effortless. Danendra architected a rock-solid PostgreSQL schema with Redis caching that cut our API response times by 70%. Zero agency fluff, pure technical excellence.",
      author: "Elena Rostova",
      role: "Head of Product",
      company: "Kroma Financial",
      avatarBadge: "ER",
      projectScope: "Payment Gateway Core & Idempotency",
      metric: "70% Latency Reduction",
    },
    {
      quote:
        "We needed a real-time collaborative canvas with CRDT synchronization. Kevin's frontend state machine and Danendra's WebSocket cluster exceeded our expectations. The code was exceptionally well-documented and tested.",
      author: "David Chen",
      role: "CTO & Co-Founder",
      company: "StreamSync Labs",
      avatarBadge: "DC",
      projectScope: "Real-Time Canvas & WebSockets",
      metric: "10,000+ Concurrent Users",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-3 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              Client Feedback & Social Proof
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Founders & Tech Leaders
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              See what product managers and technical founders say about partnering directly with our senior engineering duo.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200 self-start md:self-auto shadow-2xs">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-slate-800">5.0 Star Engineering Track Record</span>
          </div>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-slate-50/60 rounded-2xl border border-slate-200 p-6 sm:p-7 hover:border-cyan-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Quote Icon & Scope */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono font-semibold text-slate-700">
                    {rev.metric}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center">
                    {rev.avatarBadge}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{rev.author}</h4>
                    <p className="text-xs text-slate-500">
                      {rev.role}, <span className="font-semibold text-slate-700">{rev.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-slate-200/70 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80">
            <div className="text-xl sm:text-2xl font-mono font-extrabold text-slate-900">100%</div>
            <div className="text-[11px] text-slate-500 font-medium">On-Time Sprint Delivery</div>
          </div>
          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80">
            <div className="text-xl sm:text-2xl font-mono font-extrabold text-slate-900">&lt; 12h</div>
            <div className="text-[11px] text-slate-500 font-medium">Technical Inquiry Response</div>
          </div>
          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80">
            <div className="text-xl sm:text-2xl font-mono font-extrabold text-slate-900">30-Day</div>
            <div className="text-[11px] text-slate-500 font-medium">Post-Launch Bug Warranty</div>
          </div>
          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80">
            <div className="text-xl sm:text-2xl font-mono font-extrabold text-slate-900">100%</div>
            <div className="text-[11px] text-slate-500 font-medium">IP & Code Ownership Transfer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
