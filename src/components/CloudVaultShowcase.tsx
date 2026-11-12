"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Shield,
  KeyRound,
  FolderTree,
  UploadCloud,
  FileCheck,
  Trash2,
  PieChart,
  Eye,
  Lock,
  Layers,
  Sparkles,
  Server,
  Database,
  Cpu,
  X,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { CLOUDVAULT_SCREENSHOTS, PROJECTS } from "@/data/portfolioData";

export default function CloudVaultShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeScreenshot = CLOUDVAULT_SCREENSHOTS[activeIndex];
  const cloudVault = PROJECTS.find((p) => p.id === "cloudvault")!;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CLOUDVAULT_SCREENSHOTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? CLOUDVAULT_SCREENSHOTS.length - 1 : prev - 1
    );
  };

  const featureBadges = [
    {
      icon: KeyRound,
      title: "JWT & BCrypt Authentication",
      desc: "Stateless security with salted hash verification and token validation.",
    },
    {
      icon: Lock,
      title: "Role-Based Access Control",
      desc: "Restricted REST endpoints based on user roles and folder authorization.",
    },
    {
      icon: FolderTree,
      title: "Hierarchical Folder Tree",
      desc: "Recursive directory creation, nested organization, and atomic renames.",
    },
    {
      icon: UploadCloud,
      title: "Multipart File Uploads",
      desc: "Validated payload uploads up to 50MB with instant MIME classification.",
    },
    {
      icon: PieChart,
      title: "Real-Time Quota Tracking",
      desc: "Dynamic meter visualizing 500MB allowance and instant space checks.",
    },
    {
      icon: Shield,
      title: "Expirable File Sharing",
      desc: "Time-bound, cryptographically signed URLs for external file retrieval.",
    },
    {
      icon: Eye,
      title: "In-Browser File Previews",
      desc: "Instant rendering for images, code files, and PDFs directly in the UI.",
    },
    {
      icon: Trash2,
      title: "Trash & Recovery System",
      desc: "Two-stage soft deletion with atomic restore and permanent purge.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Project Card Header */}
      <div className="bg-[#0b0f19]/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Flagship Project
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">
                Full Stack Architecture
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                BIT Mesra • Project-I
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {cloudVault.title}
            </h3>
            <p className="text-base sm:text-lg text-sky-300 font-medium mt-1">
              {cloudVault.tagline}
            </p>
            <p className="text-sm text-slate-400 mt-3 max-w-3xl leading-relaxed">
              {cloudVault.description}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            {cloudVault.liveUrl && (
              <a
                href={cloudVault.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <a
              href={cloudVault.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-all hover:scale-[1.02] active:scale-95"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>

        {/* Large Project Preview (Modern Window Frame) */}
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-sky-400 font-semibold">Screenshot Gallery</span>
              <span>•</span>
              <span>{activeIndex + 1} of {CLOUDVAULT_SCREENSHOTS.length}</span>
              <span>•</span>
              <span className="text-slate-300">{activeScreenshot.title}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Browser / Application Viewport Window */}
          <div className="relative rounded-2xl border border-slate-700/80 bg-[#0d1322] shadow-2xl overflow-hidden group">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#090d18] border-b border-slate-800/80 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline">
                  CloudVault SRS V1.0 — Secure Document Management
                </span>
              </div>

              {/* Mock Address Bar */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400 w-1/2 max-w-sm truncate">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">cloud-based-file-storage-system.vercel.app</span>
              </div>

              {/* Fullscreen / Zoom trigger */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white text-xs transition-colors"
                title="Expand to Fullscreen Preview"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Zoom Fullscreen</span>
              </button>
            </div>

            {/* Main Visual Display */}
            <div
              className="relative w-full aspect-[16/9] sm:aspect-[16/10] bg-[#070b14] flex items-center justify-center p-2 sm:p-4 overflow-hidden cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreenshot.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src={activeScreenshot.src}
                    alt={activeScreenshot.title}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-lg border border-slate-800/50"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Floating Tag overlay */}
              <div className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-lg bg-slate-950/90 border border-slate-700/80 backdrop-blur-md text-xs font-mono text-sky-400">
                {activeScreenshot.tag}
              </div>
            </div>

            {/* Caption Explanation */}
            <div className="px-6 py-4 bg-[#090e1b] border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <div className="font-semibold text-slate-200 text-sm">
                  {activeScreenshot.title}
                </div>
                <div className="text-slate-400 leading-relaxed">
                  {activeScreenshot.caption}
                </div>
              </div>
              <button
                onClick={() => setLightboxOpen(true)}
                className="shrink-0 text-sky-400 hover:text-sky-300 font-mono flex items-center gap-1"
              >
                Click image to inspect high-res ↗
              </button>
            </div>
          </div>

          {/* Screenshot Thumbnails Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {CLOUDVAULT_SCREENSHOTS.map((item, index) => {
              const isSelected = index === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative p-2 rounded-xl border text-left transition-all flex flex-col justify-between group ${
                    isSelected
                      ? "bg-slate-800/90 border-sky-400/80 shadow-md shadow-sky-500/10 scale-[1.02]"
                      : "bg-[#0c1220]/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/40"
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full rounded-md overflow-hidden bg-slate-950 mb-2 border border-slate-800/60">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-sky-500/10 border-2 border-sky-400 rounded-md" />
                    )}
                  </div>
                  <span
                    className={`text-[11px] font-medium leading-tight truncate w-full ${
                      isSelected ? "text-sky-300 font-semibold" : "text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    {item.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Architectural Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            {cloudVault.metrics?.map((metric) => (
              <div
                key={metric.label}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center"
              >
                <div className="text-lg font-bold text-white font-mono">
                  {metric.value}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Technologies Stack Tags */}
          <div className="pt-2">
            <span className="text-xs font-mono text-slate-400 block mb-2.5">
              Production Tech Stack & Frameworks:
            </span>
            <div className="flex flex-wrap gap-2">
              {cloudVault.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-sky-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="pt-6 border-t border-slate-800">
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>Engineered Core Capabilities & SRS Compliance</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {featureBadges.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-sky-400 mb-1.5">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-bold text-slate-200">
                        {f.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-6xl w-full max-h-[95vh] flex flex-col bg-[#0b0f19] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d1322]">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {activeScreenshot.title}
                  </h4>
                  <p className="text-xs text-slate-400">{activeScreenshot.caption}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setLightboxOpen(false)}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Full Image */}
              <div className="p-4 overflow-auto flex items-center justify-center bg-[#070b14]">
                <img
                  src={activeScreenshot.src}
                  alt={activeScreenshot.title}
                  className="max-w-full max-h-[78vh] object-contain rounded-lg border border-slate-800"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
