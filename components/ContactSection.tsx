"use client";

import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  Calendar,
  Send,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Copy,
  Check,
  X,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Fullstack Web Applications",
    budget: "$2,000 – $5,000",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);

  const contactEmail = "kevin@codestudio.dev";
  const whatsappNumber = "62895395175200";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Try Web3Forms or standard form submit fallback
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "0990ad31-7e8c-4f7f-8d7b-9e4860bca7b1", // Public inbox key fallback
          name: formData.name,
          email: formData.email,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          from_name: "Kevin & Danendra Portfolio Inquiry",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback to direct client mailto
        const subject = encodeURIComponent(`Project Inquiry: ${formData.service} from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Brief:\n${formData.message}`
        );
        window.open(`mailto:${contactEmail}?subject=${subject}&body=${body}`, "_blank");
        setIsSubmitted(true);
      }
    } catch {
      // Client-side fallback
      const subject = encodeURIComponent(`Project Inquiry: ${formData.service} from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Brief:\n${formData.message}`
      );
      window.open(`mailto:${contactEmail}?subject=${subject}&body=${body}`, "_blank");
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi Kevin & Danendra, I saw your engineering studio portfolio and would like to discuss a project.\n\nName: ${formData.name || "Prospective Client"}\nRequirement: ${formData.service}\nEstimated Budget: ${formData.budget}`
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            Direct Engineer Inquiry
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let’s Build Something Resilient Together
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            Whether you need a fullstack SaaS from scratch, an API overhaul, or payment integrations, we
            respond within 12 hours with actionable technical architecture insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Fast Action Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-4">Direct Communication Channels</h3>

              <div className="space-y-4">
                {/* WhatsApp Action */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all duration-150 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold shadow-xs">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 flex items-center gap-1.5">
                        <span>Chat on WhatsApp</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <div className="text-xs text-slate-500">Fastest for quick technical scopes & estimates</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </a>

                {/* Direct Email */}
                <div className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/30 transition-all duration-150">
                  <div className="flex items-center justify-between">
                    <a
                      href={`mailto:${contactEmail}?subject=Project%20Inquiry%20from%20Portfolio`}
                      className="flex items-center gap-3.5 flex-1"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold shadow-xs">
                        <Mail className="w-5 h-5 text-cyan-300" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-cyan-800">
                          Email The Engineers
                        </div>
                        <div className="text-xs text-slate-500 font-mono">{contactEmail}</div>
                      </div>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-white transition-colors cursor-pointer"
                      title="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Calendar Booking Card */}
                <button
                  type="button"
                  onClick={() => setCalendarModalOpen(true)}
                  className="w-full text-left p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:bg-sky-50/30 transition-all duration-150 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-sky-800">
                          30-Min Architecture Discovery
                        </div>
                        <div className="text-xs text-slate-500">Free video consultation with both engineers</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-600 mt-2">
                    Discuss your timeline, tech stack recommendations, and milestone estimations with zero obligation.
                  </p>
                </button>
              </div>

              {/* Guarantees */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Sub-12 hour response time guaranteed (WIB / UTC+7)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Strict NDA & 100% full IP and code ownership handover</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                  <div className="w-14 h-14 mx-auto rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out. Kevin and Danendra will review your specifications and reply to{" "}
                    <span className="font-semibold text-slate-900">{formData.email || "your email"}</span> within 12 hours.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Follow up instantly on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          service: "Fullstack Web Applications",
                          budget: "$2,000 – $5,000",
                          message: "",
                        });
                      }}
                      className="px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Service Type */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Primary Requirement
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
                      >
                        <option>Fullstack Web Applications</option>
                        <option>Backend & API Architecture</option>
                        <option>Third-Party & Payment Integrations</option>
                        <option>Deployment, Cloud & Maintenance</option>
                        <option>MVP Launch Sprint</option>
                        <option>Dedicated Engineering Duo Retainer</option>
                        <option>Architecture & API Overhaul</option>
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Estimated Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
                      >
                        <option>&lt; $2,000 (Micro / Consultation)</option>
                        <option>$2,000 – $5,000 (Standard Web App / API)</option>
                        <option>$5,000 – $10,000 (Full Platform / SaaS)</option>
                        <option>$10,000+ (Enterprise Multi-Month)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Brief & Technical Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe what you're building, target timeline, and any existing tech stack or repositories..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-cyan-600 transition-all duration-200 shadow-md hover:shadow-cyan-500/20 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting specifications...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-cyan-300" />
                        <span>Submit Project Specifications</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Discovery Call Booking Modal */}
      {calendarModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setCalendarModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setCalendarModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-cyan-700 font-mono text-xs font-semibold mb-2">
              <Calendar className="w-4 h-4" />
              <span>30-Min Architecture Discovery</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">Schedule Video Consultation</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Book a direct 30-minute discovery call with Kevin (Frontend Lead) and Danendra (Backend Lead) to explore
              your technical architecture, estimations, and project roadmap.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/70 transition-colors text-emerald-900 text-xs sm:text-sm font-semibold cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                  <span>Pick a Time via WhatsApp</span>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-700" />
              </a>

              <a
                href={`mailto:${contactEmail}?subject=Discovery%20Call%20Request%20-%20Project%20Architecture`}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors text-slate-900 text-xs sm:text-sm font-semibold cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-600" />
                  <span>Schedule via Email Invitation</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" /> Zero Obligation & 100% Free
              </span>
              <span>UTC+7 / Jakarta</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
