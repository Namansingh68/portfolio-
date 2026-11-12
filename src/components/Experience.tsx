"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Experience & Internships
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Hands-on software development experience building responsive web solutions and integrating APIs.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#0b0f19]/80 border border-slate-800 hover:border-slate-700 transition-all shadow-xl group"
            >
              {/* Top Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-blue-600/10 border border-sky-500/30 text-sky-400 shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-sky-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500 pr-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="py-6 space-y-3">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Key Responsibilities & Contributions:
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Skills Applied:</span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

