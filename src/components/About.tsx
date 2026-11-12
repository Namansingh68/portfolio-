"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Cpu,
  ShieldCheck,
  Sparkles,
  CheckCircle,
  MapPin,
  Calendar,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Foundation",
      description:
        "Pursuing B.Tech in CSE at Birla Institute of Technology, Mesra (Jaipur Campus). Deeply grounded in Data Structures, Algorithms, Operating Systems, and DBMS.",
      tag: "BIT Mesra '28",
      accent: "from-sky-500/20 to-blue-500/10 text-sky-400 border-sky-500/30",
    },
    {
      icon: ShieldCheck,
      title: "Backend & Security",
      description:
        "Passionate about robust backend engineering using Java 17, Spring Boot, Spring Security, JWT, and relational databases like PostgreSQL. Committed to clean architecture and defensive coding.",
      tag: "Enterprise Standards",
      accent: "from-violet-500/20 to-purple-500/10 text-violet-400 border-violet-500/30",
    },
    {
      icon: Code2,
      title: "Modern UI Engineering",
      description:
        "Building responsive, high-performance web applications using React, Tailwind CSS, and TypeScript. Dedicated to thoughtful UX and accessible interface paradigms.",
      tag: "React & Tailwind",
      accent: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      icon: Cpu,
      title: "Systems & Low-Level Logic",
      description:
        "Strong foundation in C and C++ for understanding memory management, low-level system design, and file system input/output mechanics.",
      tag: "C & Algorithms",
      accent: "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Resilient Systems & Modern Web Applications
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Balancing academic rigor with practical production-grade software development.
          </p>
        </div>

        {/* Narrative & Profile Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Story */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed bg-[#0b0f19]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-xl">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>Hello, I am Naman.</span>
            </h3>

            {PERSONAL_INFO.bio.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Class of 2028 (Undergraduate)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                <span>BIT Mesra (Jaipur Campus)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open for SDE Roles & Internships</span>
              </div>
            </div>
          </div>

          {/* Quick Academic Snapshot Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-gradient-to-br from-slate-900 via-[#0c1220] to-[#0d162a] border border-slate-700/60 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Birla Institute of Technology</h4>
                    <p className="text-xs text-slate-400">Mesra – Jaipur Campus</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  2024 – 2028
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Program</span>
                  <span className="font-semibold text-slate-200">
                    B.Tech in Computer Science & Engineering
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Core Technical Concentrations</span>
                  <p className="text-slate-300 leading-relaxed">
                    Object-Oriented Programming, Data Structures & Algorithms, Database Systems, Computer Networks, Operating Systems, Software Engineering Methodologies.
                  </p>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Problem-Solving Philosophy</span>
                  <p className="text-slate-300 italic">
                    &ldquo;Deconstruct complex system requirements into modular, testable components with predictable state transitions.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Quick stats banner */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <div className="text-2xl font-extrabold text-white">4th / 35</div>
                <div className="text-xs text-slate-400 mt-1">Hackathon 2024 Finalist</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <div className="text-2xl font-extrabold text-sky-400">100%</div>
                <div className="text-xs text-slate-400 mt-1">Authentic Project Portfolio</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative p-5 rounded-2xl bg-[#0b0f19]/60 border border-slate-800/80 hover:border-slate-700 hover:bg-[#0e1424] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl border bg-gradient-to-br ${item.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

