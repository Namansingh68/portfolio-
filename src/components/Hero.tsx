"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  ShieldCheck,
  Code2,
  Database,
  Layers,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-center items-center overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-sky-500/15 via-blue-600/10 to-violet-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-20 w-[300px] h-[300px] bg-sky-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -right-20 w-[350px] h-[350px] bg-violet-600/10 blur-[110px] pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300 shadow-lg shadow-black/20 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-medium text-emerald-400">Available for Opportunities</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 hidden sm:inline flex items-center gap-1">
            <MapPin className="w-3 h-3 text-sky-400" />
            {PERSONAL_INFO.location}
          </span>
        </motion.div>

        {/* Impressive Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl"
        >
          Building Digital Experiences <br />
          <span className="gradient-text-electric">Through Code.</span>
        </motion.h1>

        {/* Identity & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 space-y-2 max-w-2xl"
        >
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 flex items-center justify-center gap-2">
            <span>{PERSONAL_INFO.name}</span>
          </h2>
          <p className="text-sm sm:text-base font-medium text-sky-400">
            Full Stack Developer | Computer Science Undergraduate
          </p>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            {PERSONAL_INFO.university} (Class of {PERSONAL_INFO.graduationYear})
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
            Specializing in resilient backend architectures with Java & Spring Boot, modern frontend experiences with React & Tailwind CSS, and secure database design with PostgreSQL.
          </p>
        </motion.div>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-xl shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-95 group"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-lg shadow-black/30 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-95 group"
          >
            <Download className="w-4 h-4 text-sky-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </button>
        </motion.div>

        {/* Social Links Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center gap-4 text-slate-400"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-600 hover:text-white hover:bg-slate-800 transition-all hover:scale-105"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-600 hover:text-sky-400 hover:bg-slate-800 transition-all hover:scale-105"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Send Email"
            className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-600 hover:text-emerald-400 hover:bg-slate-800 transition-all hover:scale-105"
          >
            <Mail className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Architecture Highlights Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <Layers className="w-4 h-4 text-sky-400" />
            <div className="text-left">
              <div className="text-xs font-semibold text-slate-200">Full Stack</div>
              <div className="text-[10px] text-slate-400">Spring Boot + React</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <div className="text-left">
              <div className="text-xs font-semibold text-slate-200">Enterprise Security</div>
              <div className="text-[10px] text-slate-400">JWT & BCrypt Hashing</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <Database className="w-4 h-4 text-violet-400" />
            <div className="text-left">
              <div className="text-xs font-semibold text-slate-200">Persistence</div>
              <div className="text-[10px] text-slate-400">PostgreSQL & JPA</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <Terminal className="w-4 h-4 text-amber-400" />
            <div className="text-left">
              <div className="text-xs font-semibold text-slate-200">Core Systems</div>
              <div className="text-[10px] text-slate-400">Java 17 & C</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
