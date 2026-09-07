"use client";

import { useState, useEffect } from "react";
import { Terminal, ArrowUpRight, Sliders, MessageCircle } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Navbar() {
  const { isCmsOpen, setIsCmsOpen } = usePortfolio();
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
      {/* Top telemetry bar */}
      <div className="hidden sm:flex items-center justify-between px-6 py-1 text-[11px] font-mono border-b border-zinc-900 text-zinc-500 bg-zinc-950">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-zinc-400">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            ENGINEERING_STATUS: AVAILABLE_FOR_PROJECTS
          </span>
          <span className="text-zinc-700">|</span>
          <span>LOCATION: ID / REMOTE (GLOBAL)</span>
        </div>
        <div className="flex items-center gap-3">
          <span>LOCAL TIME: {time || "--:--:--"} UTC+7</span>
          <span className="text-zinc-700">|</span>
          <span className="text-zinc-400">DUO: MOHAMMAD KEVIN &bull; DANENDRA</span>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center font-mono text-xs font-bold text-zinc-200 group-hover:border-zinc-500 group-hover:bg-zinc-800 transition-all">
            K/D
          </div>
          <div className="flex items-baseline gap-1.5 font-mono text-sm tracking-tight text-zinc-200">
            <span className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
              kevin
            </span>
            <span className="text-zinc-500">&times;</span>
            <span className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
              danendra
            </span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest hidden md:inline ml-1 font-mono">
              [web_studio]
            </span>
          </div>
        </a>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-400">
          <a href="#team" className="hover:text-white transition-colors">
            // 01. TEAM_DUO
          </a>
          <a href="#showcase" className="hover:text-white transition-colors">
            // 02. SHOWCASE
          </a>
          <a href="#testimonials" className="hover:text-white transition-colors">
            // 03. REVIEWS
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            // 04. PRICING
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            // 05. CONTACT
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* CMS Studio Trigger */}
          <button
            onClick={() => setIsCmsOpen(!isCmsOpen)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-mono transition-all"
            title="Open Studio Content Manager"
          >
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>CMS_STUDIO</span>
          </button>

          {/* Quick WhatsApp Chat */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20Kevin%20%26%20Danendra%2C%20saya%20tertarik%20untuk%20konsultasi%20project%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-950/60 border border-emerald-800/60 hover:bg-emerald-900/60 text-emerald-300 text-xs font-mono transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WHATSAPP</span>
          </a>

          {/* Start Project CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-white hover:bg-zinc-200 text-zinc-950 font-mono text-xs font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>START_PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
