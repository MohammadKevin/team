"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who owns the code and intellectual property?",
      answer:
        "You own 100% of the intellectual property, source code, database schemas, and architectural assets from day one. Upon project completion and milestone acceptance, we hand over full administrative ownership of your private GitHub repositories and cloud infrastructure.",
    },
    {
      question: "How do you handle communication and timezone differences?",
      answer:
        "We are based in Jakarta (UTC+7 / WIB) and maintain scheduled daily overlap with clients across APAC, Europe, and North America. We provide daily async video/text standups, live sprint staging URLs, and instant technical support via private Slack, WhatsApp, or Discord channels.",
    },
    {
      question: "Can you plug into an existing team or legacy codebase?",
      answer:
        "Yes. While we build many MVPs from scratch, we frequently integrate into existing engineering squads. We follow strict Git branch workflows, open clean pull requests with comprehensive descriptions, and write automated tests to ensure zero regressions.",
    },
    {
      question: "What happens if a bug or issue occurs after deployment?",
      answer:
        "Every project includes our 30-Day Launch Warranty at zero additional cost. If any bugs, edge-case regressions, or unexpected performance drops occur within 30 days of production launch, we triage and resolve them with top priority.",
    },
    {
      question: "How do milestone payments and billing work?",
      answer:
        "We prioritize transparency and low client risk. Fixed-scope projects operate on milestone schedules (e.g., 50% upon kickoff and 50% upon verified staging acceptance). Retainer engagements are billed on a flexible monthly or bi-weekly cycle with zero long-term lock-in.",
    },
    {
      question: "Why hire an Engineering Duo instead of a traditional agency?",
      answer:
        "Traditional agencies charge 3–5x markup to pay for project managers, account executives, and sales staff, often delegating the actual coding to junior developers. With us, you work directly with senior architects who write every line of code, resulting in 2x faster delivery and superior code quality.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clear Answers to Technical Questions
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our engineering standards, delivery workflow, warranties, and communication.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-cyan-400 shadow-xs"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-hidden"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-cyan-100 text-cyan-800 rotate-180" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 p-5 rounded-xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
            <HelpCircle className="w-4 h-4 text-cyan-600" />
            <span>Have a specific question not covered here?</span>
          </div>
          <a
            href="#contact"
            className="text-xs font-bold text-slate-900 hover:text-cyan-600 underline underline-offset-4"
          >
            Directly ask Kevin & Danendra →
          </a>
        </div>
      </div>
    </section>
  );
}
