"use client";

import React from "react";
import { Bot, Sparkles, Terminal, ShieldCheck, Zap, Code, CheckCircle2 } from "lucide-react";
import { AI_TOOLKIT } from "@/data/portfolioData";

export default function AIToolkit() {
  const getToolIcon = (name: string) => {
    switch (name) {
      case "ChatGPT":
        return Zap;
      case "Claude":
        return ShieldCheck;
      case "GitHub Copilot":
        return Code;
      default:
        return Bot;
    }
  };

  const getAccentColor = (name: string) => {
    switch (name) {
      case "ChatGPT":
        return "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30";
      case "Claude":
        return "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30";
      case "GitHub Copilot":
        return "from-sky-500/20 to-blue-500/10 text-sky-400 border-sky-500/30";
      default:
        return "from-violet-500/20 to-purple-500/10 text-violet-400 border-violet-500/30";
    }
  };

  return (
    <section id="toolkit" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 // MODERN WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI-Assisted Productivity Toolkit
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Leveraging frontier AI systems to accelerate code velocity, validate edge-case constraints, and conduct rigorous architecture reviews.
          </p>
        </div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AI_TOOLKIT.map((tool) => {
            const Icon = getToolIcon(tool.name);
            const accent = getAccentColor(tool.name);

            return (
              <div
                key={tool.name}
                className="relative p-6 sm:p-8 rounded-3xl bg-[#0b0f19]/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl border bg-gradient-to-br ${accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                      Productivity Tool
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                    {tool.name}
                  </h3>
                  <div className="text-xs font-semibold text-sky-400 mb-3">
                    {tool.role}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {tool.useCase}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-850"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Callout Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0e1424] to-slate-900/90 border border-slate-800 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <span className="text-sky-400 font-semibold">Engineering Philosophy:</span> AI is an intellectual amplifier for prototyping and thorough testing, while foundational data structures, clean software patterns, and security constraints remain firmly architected by the engineer.
          </p>
        </div>
      </div>
    </section>
  );
}

