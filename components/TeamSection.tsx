"use client";

import React from "react";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import { Mail, CheckCircle, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            Engineering Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet The Duo Behind Your Architecture
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            No middle managers, no junior handoffs. You work directly with senior engineers dedicated to writing clean,
            scalable, and maintainable software.
          </p>
        </div>

        {/* 2-Column Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col bg-slate-50/50 rounded-2xl border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-200 overflow-hidden"
            >
              {/* Card Header with Photo & Quick Info */}
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start border-b border-slate-200/80 bg-white">
                {/* Photo Frame */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden border-2 border-slate-200 group-hover:border-cyan-500 transition-colors shadow-2xs">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" title="Active & Available" />
                </div>

                {/* Name, Role & Socials */}
                <div className="text-center sm:text-left flex-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-[11px] font-semibold mb-1.5">
                    {member.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 mt-0.5">{member.role}</p>

                  {/* Social Links */}
                  <div className="mt-3.5 flex items-center justify-center sm:justify-start gap-2">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-600 transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-100 hover:bg-cyan-600 hover:text-white text-slate-600 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a
                        href={member.socials.email}
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-600 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  {/* Bio */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {member.bio}
                  </p>

                  {/* Core Focus Areas */}
                  <div className="mt-5">
                    <h4 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-600" />
                      <span>Specialized Architecture Focus</span>
                    </h4>
                    <ul className="space-y-2">
                      {member.focusAreas.map((focus, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight Metrics */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {member.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200">
                        <div className="text-base sm:text-lg font-mono font-extrabold text-slate-900">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-slate-200/80">
                  <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Primary Tools & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-mono font-medium hover:border-cyan-300 hover:text-cyan-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
