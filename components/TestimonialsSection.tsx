"use client";

import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function TestimonialsSection() {
  const { testimonials } = usePortfolio();

  return (
    <section id="testimonials" className="py-20 border-b border-zinc-800/80 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs text-cyan-400 mb-1">// 03. TESTIMONI_KLIEN &bull; VERIFIED_REVIEWS</div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Trusted by Founders &amp; Engineering Leaders
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-1">
            Direct feedback from product directors, CTOs, and startup founders who scaled their software with our duo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="p-6 sm:p-8 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header: Project Badge & Metric */}
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <span className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">
                    DELIVERED: {test.projectDelivered}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 font-semibold">
                    {test.impactMetric}
                  </span>
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans">
                  &ldquo;{test.content}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-white">
                    {test.avatarInitials}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm font-sans">{test.clientName}</div>
                    <div className="text-[11px] text-zinc-400">
                      {test.clientRole} &bull; <span className="text-zinc-300">{test.company}</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[10px] text-zinc-500 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>VERIFIED_CLIENT</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
