"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import AIToolkit from "@/components/AIToolkit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 selection:bg-sky-500/20 selection:text-sky-300">
      {/* Floating Global Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <AIToolkit />
        <Contact />
      </main>

      {/* Global Minimal Footer */}
      <Footer />

      {/* Interactive In-Browser Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
