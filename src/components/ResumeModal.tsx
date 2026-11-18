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
  HelpCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, ACHIEVEMENTS, SKILL_CATEGORIES } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handlePrintOrDownload = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 50,
        origin: { y: 0.6 },
        colors: ["#38bdf8", "#818cf8", "#34d399"],
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md resume-modal-overlay">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0b0f19] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden resume-modal-window"
        >
          {/* Header Action Bar (Hidden in Print) */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-slate-800 bg-[#0d1322] no-print">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-300 font-medium">
                Naman_Kumar_Resume.pdf
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-slate-400 font-mono pr-2">
                <HelpCircle className="w-3 h-3 text-sky-400" />
                Destination: Choose &quot;Save as PDF&quot;
              </span>

              <button
                onClick={handlePrintOrDownload}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                title="Print Resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              <button
                onClick={handlePrintOrDownload}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 rounded-lg shadow-sm transition-all active:scale-95"
                title="Save / Download as PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadSuccess ? "Opening Dialog..." : "Save as PDF"}</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
                aria-label="Close Resume Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div
            id="printable-resume-container"
            className="overflow-y-auto p-6 sm:p-10 space-y-6 text-slate-300 print:text-slate-900 print:bg-white print:p-0 print:space-y-4"
          >
            {/* Top Identity Header */}
            <div className="border-b border-slate-800 pb-5 print:pb-3 print:border-b-2 print:border-sky-600">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white print:text-sky-700 print:text-2xl">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-sm font-medium text-sky-400 mt-0.5 print:text-slate-800 print:font-semibold">
                    Full Stack Developer • Computer Science Undergraduate
                  </p>
                </div>
                <div className="text-xs text-slate-400 print:text-slate-700 space-y-0.5 sm:text-right font-mono">
                  <div>Jaipur, Rajasthan, India</div>
                  <div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sky-400 print:text-sky-700 hover:underline">
                      {PERSONAL_INFO.email}
                    </a>{" "}
                    • {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-3 text-xs font-mono print:text-xs">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 print:text-sky-700 hover:underline flex items-center gap-1"
                >
                  GitHub: {PERSONAL_INFO.github.replace("https://", "")}
                  <ExternalLink className="w-3 h-3 no-print" />
                </a>
                <span className="text-slate-600 print:text-slate-400">•</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 print:text-sky-700 hover:underline flex items-center gap-1"
                >
                  LinkedIn: linkedin.com/in/naman-singh-bab34b319
                  <ExternalLink className="w-3 h-3 no-print" />
                </a>
              </div>
            </div>

            {/* Education */}
            <section className="resume-section-block space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-sky-400 print:text-sky-800 print-section-heading">
                <GraduationCap className="w-3.5 h-3.5 no-print" />
                <span>Education</span>
              </div>
              <div className="resume-card-item bg-slate-900/40 border border-slate-800/80 rounded-xl p-3.5 print:border-none print:p-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-sm font-bold text-white print:text-slate-900">
                    {PERSONAL_INFO.university}
                  </h3>
                  <span className="text-xs text-slate-400 print:text-slate-600 font-mono">
                    Expected Graduation: {PERSONAL_INFO.graduationYear}
                  </span>
                </div>
                <p className="text-xs text-slate-300 print:text-slate-700 font-medium mt-0.5">
                  {PERSONAL_INFO.degree}
                </p>
                <p className="text-[11px] text-slate-400 print:text-slate-600 mt-1">
                  Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Operating Systems, Database Management Systems, System Architecture.
                </p>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="resume-section-block space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-sky-400 print:text-sky-800 print-section-heading">
                <Code2 className="w-3.5 h-3.5 no-print" />
                <span>Technical Skills</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs print:grid-cols-2 print:gap-1.5">
                {SKILL_CATEGORIES.map((category) => (
                  <div
                    key={category.title}
                    className="resume-card-item bg-slate-900/30 border border-slate-800/80 rounded-lg p-2.5 print:border-none print:p-0"
                  >
                    <span className="font-semibold text-slate-200 print:text-slate-900 block mb-0.5 text-[11px]">
                      {category.title}:
                    </span>
                    <p className="text-slate-400 print:text-slate-700 text-[11px]">
                      {category.skills.map((s) => s.name).join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Projects */}
            <section className="resume-section-block space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-sky-400 print:text-sky-800 print-section-heading">
                <Briefcase className="w-3.5 h-3.5 no-print" />
                <span>Projects</span>
              </div>

              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="resume-card-item bg-slate-900/40 border border-slate-800/80 rounded-xl p-3.5 print:border-none print:p-0 space-y-1.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white print:text-slate-900 flex items-center gap-2">
                      {project.title}
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-normal print:hidden">
                        {project.category}
                      </span>
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sky-400 print:text-sky-700 hover:underline"
                        >
                          Live Demo ↗
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 print:text-slate-600 hover:underline"
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="text-[11px] text-slate-400 print:text-slate-600">
                    <span className="font-semibold text-slate-300 print:text-slate-800">Key Features: </span>
                    {project.features.slice(0, 5).join(" • ")}
                  </div>

                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60 print:bg-slate-100 print:text-slate-800 print:border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Experience */}
            <section className="resume-section-block space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-sky-400 print:text-sky-800 print-section-heading">
                <Briefcase className="w-3.5 h-3.5 no-print" />
                <span>Work Experience</span>
              </div>
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.company}
                  className="resume-card-item bg-slate-900/40 border border-slate-800/80 rounded-xl p-3.5 print:border-none print:p-0 space-y-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white print:text-slate-900">{exp.role}</h3>
                      <p className="text-xs text-sky-400 print:text-slate-700 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs text-slate-400 print:text-slate-600 font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-700 space-y-0.5">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Achievements */}
            <section className="resume-section-block space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-sky-400 print:text-sky-800 print-section-heading">
                <Trophy className="w-3.5 h-3.5 no-print" />
                <span>Achievements & Honors</span>
              </div>
              {ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.event}
                  className="resume-card-item bg-slate-900/40 border border-slate-800/80 rounded-xl p-3.5 print:border-none print:p-0 space-y-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-xs font-bold text-white print:text-slate-900">{ach.title}</h3>
                    <span className="text-xs text-slate-400 print:text-slate-600 font-mono">{ach.period}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700">{ach.description}</p>
                  <div className="text-xs text-sky-300 print:text-sky-700 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 no-print" />
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
