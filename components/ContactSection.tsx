"use client";

import { useState, useEffect } from "react";
import {
  Terminal,
  Send,
  Check,
  Mail,
  Clock,
  MessageCircle,
  Copy,
  Calendar,
  X,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { usePortfolio } from "@/context/PortfolioContext";

export default function ContactSection() {
  const { selectedPackage } = usePortfolio();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scope: "Custom Web Application (Full-Cycle)",
    budget: "$5,000 - $10,000",
    timeline: "1 - 2 Months",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [submissionId, setSubmissionId] = useState("");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  // Update scope when package is selected from pricing
  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({
        ...prev,
        scope: selectedPackage,
      }));
    }
  }, [selectedPackage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionId(`INQ-${Math.floor(100000 + Math.random() * 900000)}`);
      setSuccessModalOpen(true);
    }, 600);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(label);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-zinc-950 text-zinc-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs text-cyan-400 mb-1">// 05. HUBUNGI_TIM &bull; INITIATE_PROJECT</div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Start Your Project With Our Duo
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-1">
            Direct communication with Mohammad Kevin &amp; Danendra. Fast turnaround, transparent scoping, and zero middlemen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Communication Hub */}
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            {/* Quick WhatsApp Action Box */}
            <div className="p-5 rounded-lg bg-emerald-950/30 border border-emerald-800/60 space-y-3">
              <div className="flex items-center justify-between text-emerald-300">
                <span className="font-bold font-sans text-sm flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  Instant WhatsApp Chat
                </span>
                <span className="text-[10px] bg-emerald-900/60 px-2 py-0.5 rounded border border-emerald-700/60">
                  FASTEST_RESPONSE
                </span>
              </div>
              <p className="text-zinc-300 text-xs font-sans leading-relaxed">
                Prefer immediate messaging? Chat with us directly on WhatsApp to get a rapid project feasibility assessment.
              </p>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Kevin%20%26%20Danendra%2C%20saya%20ingin%20konsultasi%20mengenai%20project%20web."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold transition-all"
              >
                <span>OPEN_WHATSAPP_CHAT</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mohammad Kevin Contact Card */}
            <div className="p-5 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-sm font-sans">Mohammad Kevin</span>
                <span className="text-cyan-400 text-[10px] bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800/70">
                  FULLSTACK_LEAD
                </span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>kevin@example.com</span>
                <button
                  onClick={() => copyToClipboard("kevin@example.com", "kevin")}
                  className="p-1 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedEmail === "kevin" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <div className="flex items-center gap-3 pt-1 text-zinc-400">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <GithubIcon className="w-3.5 h-3.5" /> GITHUB
                </a>
                <span>&bull;</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <LinkedinIcon className="w-3.5 h-3.5" /> LINKEDIN
                </a>
              </div>
            </div>

            {/* Danendra Contact Card */}
            <div className="p-5 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-sm font-sans">Danendra</span>
                <span className="text-emerald-400 text-[10px] bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800/70">
                  BACKEND_LEAD
                </span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>danendra@example.com</span>
                <button
                  onClick={() => copyToClipboard("danendra@example.com", "danendra")}
                  className="p-1 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedEmail === "danendra" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <div className="flex items-center gap-3 pt-1 text-zinc-400">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <GithubIcon className="w-3.5 h-3.5" /> GITHUB
                </a>
                <span>&bull;</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <LinkedinIcon className="w-3.5 h-3.5" /> LINKEDIN
                </a>
              </div>
            </div>

            {/* Response Timeline guarantee */}
            <div className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800 flex items-center gap-3 text-zinc-400">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>GUARANTEED_RESPONSE: &lt; 24 HOURS</span>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden font-mono text-xs">
              {/* Header */}
              <div className="px-5 py-3 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between text-zinc-500">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                  <span>project_inquiry_form.ts</span>
                </div>
                <span className="text-cyan-400 text-[11px]">STATUS: READY</span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4 font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-zinc-400">// YOUR_NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Pratama"
                      className="w-full px-3 py-2.5 rounded bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-zinc-400">// EMAIL_ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3 py-2.5 rounded bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-zinc-400">// PROJECT_PACKAGE</label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full px-3 py-2.5 rounded bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                    >
                      <option value="MVP Launchpad">MVP Launchpad (2-3 Weeks)</option>
                      <option value="Custom Web Application (Full-Cycle)">
                        Custom Web Application (Full-Cycle)
                      </option>
                      <option value="Enterprise Architecture & Mesh">
                        Enterprise Architecture &amp; Mesh
                      </option>
                      <option value="Custom Scope / Fractional">Custom Scope / Retainer</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-zinc-400">// BUDGET_ESTIMATE</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2.5 rounded bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                    >
                      <option value="$2,000 - $4,000">&lt; $4,000 (&lt; Rp 60M)</option>
                      <option value="$4,000 - $8,000">$4,000 - $8,000 (Rp 60M - 125M)</option>
                      <option value="$8,000 - $15,000">$8,000 - $15,000 (Rp 125M - 235M)</option>
                      <option value="$15,000+">$15,000+ (&gt; Rp 235M)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-400">// TIMELINE_TARGET</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                  >
                    <option value="Immediate (< 2 Weeks)">Immediate (&lt; 2 Weeks)</option>
                    <option value="1 - 2 Months">Standard Sprint (1 - 2 Months)</option>
                    <option value="2 - 3 Months">Comprehensive Build (2 - 3 Months)</option>
                    <option value="Flexible">Flexible / Ongoing</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-400">// PROJECT_DETAILS_AND_REQUIREMENTS</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the problem you are solving, existing stack, target audience, and key features..."
                    className="w-full px-3 py-2.5 rounded bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors resize-none font-sans text-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded bg-white hover:bg-zinc-200 text-zinc-950 font-bold transition-all text-xs font-mono disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING_DATA...</span>
                  ) : (
                    <>
                      <span>SUBMIT_PROJECT_INQUIRY</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {successModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-lg bg-zinc-900 border border-zinc-800 p-6 sm:p-8 space-y-6 shadow-2xl font-mono text-xs">
            {/* Close */}
            <button
              onClick={() => setSuccessModalOpen(false)}
              className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-bold text-white font-sans">Inquiry Received Successfully</div>
                <div className="text-zinc-400 text-[11px]">REF_ID: {submissionId}</div>
              </div>
            </div>

            <div className="p-4 rounded bg-zinc-950 border border-zinc-800 space-y-2 text-zinc-300 font-sans text-xs leading-relaxed">
              <p>
                Thank you for reaching out, <strong className="text-white">{formData.name}</strong>! Your inquiry for{" "}
                <span className="text-cyan-400 font-mono">{formData.scope}</span> has been routed directly to{" "}
                <strong>Mohammad Kevin</strong> and <strong>Danendra</strong>.
              </p>
              <p className="text-zinc-400 text-[11px] font-mono">
                &bull; Estimated Response: Within 24 hours via {formData.email}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 font-mono">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Kevin%20%26%20Danendra%2C%20saya%20sudah%20mengirim%20inquiry%20web%20dengan%20ref%20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>FOLLOW_UP_ON_WHATSAPP</span>
              </a>
              <button
                onClick={() => setSuccessModalOpen(false)}
                className="w-full py-2.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold transition-colors"
              >
                CLOSE_WINDOW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
