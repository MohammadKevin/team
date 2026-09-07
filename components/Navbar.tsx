"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Menu, X, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Selected Works", href: "#works" },
    { name: "The Duo", href: "#team" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Inquiry", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
          : "bg-white/95 backdrop-blur-xs border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Studio Brand */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex items-center gap-2.5 text-slate-900 font-bold text-lg tracking-tight hover:text-cyan-600 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono text-sm font-semibold group-hover:bg-cyan-600 transition-colors shadow-xs">
                <Terminal className="w-4 h-4 text-cyan-300" />
              </div>
              <div className="flex flex-col">
                <span className="leading-none text-slate-900 font-semibold tracking-tight">
                  Kevin <span className="text-cyan-600">&</span> Danendra
                </span>
                <span className="text-[10px] font-mono font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                  Engineering Studio
                </span>
              </div>
            </Link>

            {/* Live Availability Badge */}
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for New Projects (UTC+7)</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-xs lg:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-cyan-600 transition-all duration-200 shadow-xs hover:shadow-cyan-500/20 active:scale-[0.98]"
            >
              <span>Talk to Engineers</span>
              <ArrowRight className="w-4 h-4 text-cyan-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-600 transition-colors"
            >
              Consult
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for New Projects (UTC+7 / Jakarta)</span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-cyan-600 transition-colors shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Start a Project</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
