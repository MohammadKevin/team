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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            Direct Engineer Inquiry
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let’s Build Something Resilient Together
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            Whether you need a fullstack SaaS from scratch, an API overhaul, or a payment system integration, we
            respond within 12 hours with actionable technical insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Fast Action Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-4">Direct Channels</h3>

              <div className="space-y-4">
                {/* WhatsApp Action */}
                <a
                  href="https://wa.me/6281234567890?text=Hi%20Kevin%20%26%20Danendra,%20I'd%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all duration-150"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-800">
                        Chat on WhatsApp
                      </div>
                      <div className="text-xs text-slate-500">Fastest for quick technical scopes</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </a>

                {/* Direct Email */}
                <a
                  href="mailto:kevin@codestudio.dev?subject=Project%20Inquiry%20from%20Portfolio"
                  className="group flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/30 transition-all duration-150"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold">
                      <Mail className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-cyan-800">
                        Email The Engineers
                      </div>
                      <div className="text-xs text-slate-500">kevin@codestudio.dev</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                </a>

                {/* Calendar Booking */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3.5 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">30-Min Architecture Discovery</div>
                      <div className="text-xs text-slate-500">Free video consultation with both engineers</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 mt-2">
                    Discuss your timeline, tech stack recommendations, and milestone estimations with zero obligation.
                  </p>
                </div>
              </div>

              {/* Guarantees */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Sub-12 hour response time guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Strict NDA and full code ownership handover</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out. Kevin and Danendra will review your specifications and reply to{" "}
                    <span className="font-semibold text-slate-900">{formData.email}</span> within 12 hours.
                  </p>
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
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
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
                        placeholder="Sarah Jenkins"
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
                        placeholder="sarah@company.com"
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
                        <option>Complete Custom System</option>
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
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-cyan-600 transition-all duration-200 shadow-md hover:shadow-cyan-500/20 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
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
    </section>
  );
}
