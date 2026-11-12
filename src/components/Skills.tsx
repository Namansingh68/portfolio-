"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cloud,
  Bot,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface SkillItem {
  name: string;
  badge?: string;
  isCore?: boolean;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  glow: string;
  description: string;
  skills: SkillItem[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const skillCategories: SkillCategory[] = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: Code2,
      accent: "text-sky-400 bg-sky-500/10 border-sky-500/30",
      glow: "hover:border-sky-500/40",
      description: "Foundational & systems programming languages.",
      skills: [
        { name: "Java (Java 17)", badge: "Core", isCore: true },
        { name: "C", badge: "Systems", isCore: true },
        { name: "C++", badge: "OOP & DSA" },
        { name: "JavaScript (ES6+)", badge: "Web", isCore: true },
      ],
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: Layout,
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/30",
      glow: "hover:border-blue-500/40",
      description: "Interactive, responsive, and performant web interfaces.",
      skills: [
        { name: "React.js", badge: "Core UI", isCore: true },
        { name: "Tailwind CSS", badge: "Styling", isCore: true },
        { name: "HTML5 & CSS3", badge: "Standards" },
        { name: "Vite", badge: "Bundler" },
        { name: "Framer Motion", badge: "Animations" },
      ],
    },
    {
      id: "backend",
      title: "Backend & Architecture",
      icon: Server,
      accent: "text-violet-400 bg-violet-500/10 border-violet-500/30",
      glow: "hover:border-violet-500/40",
      description: "Enterprise-grade APIs and security frameworks.",
      skills: [
        { name: "Java 17", badge: "Runtime", isCore: true },
        { name: "Spring Boot", badge: "Framework", isCore: true },
        { name: "Spring Security", badge: "Auth/JWT", isCore: true },
        { name: "RESTful APIs", badge: "Web Services", isCore: true },
        { name: "JWT & BCrypt", badge: "Security" },
      ],
    },
    {
      id: "database",
      title: "Databases & ORM",
      icon: Database,
      accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
      glow: "hover:border-indigo-500/40",
      description: "Relational data modeling, query optimization, and ORM persistence.",
      skills: [
        { name: "PostgreSQL", badge: "Relational", isCore: true },
        { name: "Spring Data JPA", badge: "Persistence", isCore: true },
        { name: "Hibernate", badge: "ORM" },
        { name: "H2 Database", badge: "Testing & In-Memory" },
      ],
    },
    {
      id: "tools",
      title: "Developer Tools & DevOps",
      icon: Wrench,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      glow: "hover:border-emerald-500/40",
      description: "Version control, build automation, containers, and testing.",
      skills: [
        { name: "Git", badge: "VCS", isCore: true },
        { name: "GitHub", badge: "Collaboration", isCore: true },
        { name: "Docker", badge: "Containers" },
        { name: "Maven", badge: "Build Tool" },
        { name: "Swagger / OpenAPI", badge: "Docs" },
        { name: "Axios", badge: "HTTP Client" },
      ],
    },
    {
      id: "cloud",
      title: "Cloud & Deployment",
      icon: Cloud,
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      glow: "hover:border-cyan-500/40",
      description: "Hosting platforms, serverless databases, and CI/CD pipelines.",
      skills: [
        { name: "Vercel", badge: "Frontend Hosting", isCore: true },
        { name: "Render", badge: "Backend Services", isCore: true },
        { name: "Supabase", badge: "Cloud DB" },
        { name: "GitHub Pages", badge: "Static Hosting" },
      ],
    },
    {
      id: "ai-tools",
      title: "AI-Assisted Productivity",
      icon: Bot,
      accent: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      glow: "hover:border-purple-500/40",
      description: "Modern developer workflow accelerators for architecture and testing.",
      skills: [
        { name: "ChatGPT", badge: "SRS & System Design", isCore: true },
        { name: "Claude", badge: "Deep Code Review", isCore: true },
        { name: "GitHub Copilot", badge: "Pair Programming", isCore: true },
      ],
    },
  ];

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized Technical Skills
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Proficient across the full stack with an emphasis on Java enterprise backends, secure data persistence, and modern React interfaces.
          </p>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl max-w-2xl">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === cat.id
                    ? "bg-slate-800 text-sky-300 border border-slate-700 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={category.id}
                  className={`relative p-6 rounded-2xl bg-[#0b0f19]/70 border border-slate-800/80 ${category.glow} transition-all duration-300 flex flex-col justify-between group shadow-xl`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2.5 rounded-xl border ${category.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-[11px] text-slate-400 font-mono">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                            skill.isCore
                              ? "bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:border-sky-500/50 hover:bg-slate-800"
                              : "bg-slate-900/60 text-slate-300 border border-slate-800/80 hover:border-slate-700"
                          }`}
                        >
                          <CheckCircle2
                            className={`w-3 h-3 ${
                              skill.isCore ? "text-sky-400" : "text-slate-500"
                            }`}
                          />
                          <span>{skill.name}</span>
                          {skill.badge && (
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-950/80 text-slate-400 ml-1">
                              {skill.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>{category.skills.length} competencies</span>
                    <span className="text-sky-400/80 group-hover:text-sky-300">
                      Verified Projects →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

