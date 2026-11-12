"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Printer,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Trophy,
  Code2,
  CheckCircle2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, ACHIEVEMENTS, SKILL_CATEGORIES } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#38bdf8", "#818cf8", "#c084fc"],
      });
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
      window.print();
    } catch {
      window.print();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0b0f19] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d1322]">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 pl-2">
                Naman_Kumar_Resume.pdf (Verified Preview)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                title="Print Resume"
              >
                <Printer className="w-3.5 h-3.5" />
                Print
              </button>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 rounded-lg shadow-sm transition-all"
                title="Save / Download PDF"
              >
                <Download className="w-3.5 h-3.5" />
                {downloadSuccess ? "Generating PDF..." : "Download / Save PDF"}
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close Resume Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-slate-300 print:text-black print:bg-white print:p-0">
            {/* Top Identity Header */}
            <div className="border-b border-slate-800 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white print:text-black">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-sm sm:text-base font-medium text-sky-400 mt-1 print:text-slate-800">
                    Full Stack Developer • Computer Science Undergraduate
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-4 text-xs font-mono">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:underline flex items-center gap-1"
                >
                  GitHub: {PERSONAL_INFO.github.replace("https://", "")}
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-600">•</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:underline flex items-center gap-1"
                >
                  LinkedIn: Naman Kumar
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Education */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-sky-400">
                <GraduationCap className="w-4 h-4" />
                Education
              </div>
              <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-base font-semibold text-white">
                    {PERSONAL_INFO.university}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    Expected Graduation: {PERSONAL_INFO.graduationYear}
                  </span>
                </div>
                <p className="text-sm text-slate-300 mt-1">{PERSONAL_INFO.degree}</p>
                <p className="text-xs text-slate-400 mt-2">
                  Key Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Operating Systems, Database Management Systems, System Architecture.
                </p>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-sky-400">
                <Code2 className="w-4 h-4" />
                Technical Skills
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {SKILL_CATEGORIES.map((category) => (
                  <div
                    key={category.title}
                    className="bg-slate-900/40 border border-slate-800/80 rounded-lg p-3"
                  >
                    <span className="font-semibold text-slate-200 block mb-1.5">
                      {category.title}:
                    </span>
                    <p className="text-slate-400">
                      {category.skills.map((s) => s.name).join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Projects */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-sky-400">
                <Briefcase className="w-4 h-4" />
                Featured Projects
              </div>

              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-semibold text-white flex items-center gap-2">
                      {project.title}
                      <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 font-normal">
                        {project.category}
                      </span>
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sky-400 hover:underline"
                        >
                          Live Demo ↗
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white hover:underline"
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300">{project.description}</p>

                  <div className="text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">Key Features: </span>
                    {project.features.slice(0, 5).join(" • ")}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Experience */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-sky-400">
                <Briefcase className="w-4 h-4" />
                Work Experience
              </div>
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.company}
                  className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                      <p className="text-xs text-sky-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs text-slate-400 font-mono mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Achievements */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-sky-400">
                <Trophy className="w-4 h-4" />
                Achievements
              </div>
              {ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.event}
                  className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-sm font-semibold text-white">{ach.title}</h3>
                    <span className="text-xs text-slate-400 font-mono">{ach.period}</span>
                  </div>
                  <p className="text-xs text-slate-300">{ach.description}</p>
                  <div className="text-xs text-sky-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{ach.result}</span>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

