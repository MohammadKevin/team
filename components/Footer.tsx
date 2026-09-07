"use client";

import { ArrowUp, Terminal, MessageCircle } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Footer() {
  const { setIsCmsOpen } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 text-zinc-500 font-mono text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 text-zinc-200">
              <span className="font-bold text-white text-sm">MOHAMMAD KEVIN &times; DANENDRA</span>
              <span className="text-zinc-700">|</span>
              <span className="text-zinc-400 text-[11px]">WEB_ENGINEERING_DUO</span>
            </div>
            <p className="text-[11px] text-zinc-500 max-w-sm text-center md:text-left font-sans">
              High-performance, scalable web systems, clean architecture, and reliable end-to-end web solutions for startups &amp; enterprises.
            </p>
          </div>

          {/* Quick jump */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-zinc-400">
            <a href="#team" className="hover:text-white transition-colors">01.TEAM</a>
            <a href="#showcase" className="hover:text-white transition-colors">02.SHOWCASE</a>
            <a href="#testimonials" className="hover:text-white transition-colors">03.REVIEWS</a>
            <a href="#pricing" className="hover:text-white transition-colors">04.PRICING</a>
            <a href="#contact" className="hover:text-white transition-colors">05.CONTACT</a>
            <button
              onClick={() => setIsCmsOpen(true)}
              className="text-cyan-400 hover:text-cyan-300 font-bold"
            >
              CMS_STUDIO
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
          >
            <span>BACK_TO_TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-600">
          <div>
            &copy; {new Date().getFullYear()} Mohammad Kevin &amp; Danendra &bull; All Rights Reserved.
          </div>
          <div>
            REACT 19 &bull; NEXT.JS 16 &bull; TAILWIND CSS v4 &bull; PRODUCTION_DEPLOYED
          </div>
        </div>
      </div>
    </footer>
  );
}
