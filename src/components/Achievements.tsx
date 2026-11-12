"use client";

import React from "react";
import { Trophy, Award, Sparkles, CheckCircle2, Waves, AlertTriangle } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/portfolioData";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 // HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Competitive Hackathon Achievements
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Demonstrating problem-solving under pressure, civic-tech innovation, and teamwork.
          </p>
        </div>

        {/* Achievement Showcase Card */}
        <div className="max-w-4xl mx-auto">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c1222] via-[#0b0f19] to-[#121626] border border-slate-700/80 shadow-2xl overflow-hidden group"
            >
              {/* Subtle ambient amber/sky glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0 shadow-lg shadow-amber-500/10">
                    <Trophy className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        {ach.result}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {ach.event}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {ach.title}
                    </h3>
                  </div>
                </div>

                <div className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-300 shrink-0">
                  {ach.period}
                </div>
              </div>

              {/* Project Focus & Impact */}
              <div className="py-6 space-y-4">
                <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-3">
                  <Waves className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                      Hackathon Project:
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {ach.project}
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Key Highlights & Engineering Takeaways:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ach.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/30 border border-slate-800/60 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
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

