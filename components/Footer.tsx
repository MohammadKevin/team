"use client";

import React from "react";
import { Terminal, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono text-xs font-semibold shadow-2xs">
                <Terminal className="w-3.5 h-3.5 text-cyan-300" />
              </div>
              <span className="font-bold text-slate-900 tracking-tight text-base">
                Mohammad Kevin <span className="text-cyan-600">&</span> Danendra Athallah
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
              Senior fullstack and backend engineering duo building scalable web systems, clean interfaces, and
              high-throughput APIs for modern businesses and tech startups.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Accepting New Projects (Q3/Q4 2026)</span>
            </div>
          </div>

          {/* Navigation Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <a href="#services" className="hover:text-cyan-600 transition-colors">
                  Services & Capabilities
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-cyan-600 transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-cyan-600 transition-colors">
                  The Engineering Duo
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-cyan-600 transition-colors">
                  Milestone Workflow
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-600 transition-colors">
                  Contact & Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Back to top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-3">
                Engineering Profiles
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/mohammadkevin"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors"
                  aria-label="GitHub Profiles"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:bg-cyan-600 hover:text-white transition-colors"
                  aria-label="LinkedIn Profiles"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:kevin@codestudio.dev"
                  className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Disclosures & Copyright */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <div>
            © {new Date().getFullYear()} Mohammad Kevin & Danendra Athallah. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with Next.js 16, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
