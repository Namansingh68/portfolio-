"use client";

import React from "react";
import { Sparkles, FolderGit2 } from "lucide-react";
import CloudVaultShowcase from "./CloudVaultShowcase";
import SecondaryProjects from "./SecondaryProjects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered Software & Production Systems
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Real implementations featuring secure multi-tier architectures, cryptographic access controls, and production-ready code.
          </p>
        </div>

        {/* Primary Flagship Showcase: CloudVault */}
        <CloudVaultShowcase />

        {/* Systems & Academic Projects: Online Voting System */}
        <SecondaryProjects />
      </div>
    </section>
  );
}

