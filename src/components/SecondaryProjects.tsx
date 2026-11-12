"use client";

import React, { useState } from "react";
import {
  Terminal,
  ShieldCheck,
  Cpu,
  KeyRound,
  FileCode2,
  CheckCircle2,
  Play,
  RotateCcw,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { PROJECTS } from "@/data/portfolioData";

export default function SecondaryProjects() {
  const votingProject = PROJECTS.find((p) => p.id === "online-voting-system")!;
  const [terminalState, setTerminalState] = useState<number>(3); // 0 to 3 lines demonstrated

  const terminalLogs = [
    { text: "$ gcc -Wall -Wextra -O2 main.c voter.c admin.c -o vote_engine", color: "text-slate-400" },
    { text: "$ ./vote_engine --init --constituency \"BIT-JAIPUR-01\"", color: "text-sky-400" },
    { text: "[INIT] Cryptographic ledger initialized at /var/data/ballot.dat", color: "text-emerald-400" },
    { text: "[AUTH] Authenticating Voter Token: BIT24-88252... [OK: ELIGIBLE]", color: "text-emerald-300" },
    { text: "[BALLOT] Candidate selected: #02 (Secure Token Recorded)", color: "text-blue-300" },
    { text: "[AUDIT] Hash 0x9f8c... appended to tamper-evident audit log.", color: "text-amber-300" },
    { text: "[RESULT] Anti-duplicate flag locked. Voter status updated.", color: "text-emerald-400" },
  ];

  return (
    <div className="mt-14 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
          <Terminal className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-white tracking-tight">
            Systems & Low-Level Academic Projects
          </h4>
          <p className="text-xs text-slate-400">
            Rigorous systems programming exploring memory safety, cryptographic integrity, and data structures.
          </p>
        </div>
      </div>

      <div className="bg-[#0b0f19]/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Details */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Academic Programming in C
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700/60">
                CLI System
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">
              {votingProject.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {votingProject.description}
            </p>

            {/* Features list */}
            <div className="space-y-2 pt-2 text-xs text-slate-300">
              {votingProject.features.slice(0, 4).map((f, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="pt-2 flex flex-wrap gap-2">
              {votingProject.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* GitHub Action Link */}
            <div className="pt-2">
              <a
                href={votingProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-all hover:scale-[1.02]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-[#080c14] shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1424] border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-slate-400 ml-1">
                    naman@bitmesra: ~/projects/online-voting-system (C)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                  <Cpu className="w-3 h-3 text-amber-400" />
                  <span>x86_64</span>
                </div>
              </div>

              {/* Terminal Output Body */}
              <div className="p-4 sm:p-5 space-y-2.5 min-h-[220px] max-h-[300px] overflow-y-auto">
                {terminalLogs.slice(0, terminalState + 4).map((log, index) => (
                  <div key={index} className={`leading-relaxed ${log.color}`}>
                    {log.text}
                  </div>
                ))}
                <div className="flex items-center gap-1.5 text-slate-400 pt-1">
                  <span className="text-emerald-400">naman@bitmesra:~$</span>
                  <span className="w-2 h-4 bg-sky-400 animate-pulse" />
                </div>
              </div>

              {/* Terminal Control Footer */}
              <div className="px-4 py-2.5 bg-[#0a0f1d] border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Safe file I/O & integrity verification demo</span>
                <button
                  onClick={() =>
                    setTerminalState((prev) =>
                      prev >= 3 ? 0 : prev + 1
                    )
                  }
                  className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Rerun CLI Simulation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
