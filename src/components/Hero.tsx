import React, { useState } from 'react';
import {
  MapPin,
  Sparkles,
  ArrowRight,
  Download,
  Copy,
  Check,
  Smartphone,
  Cpu,
  Award,
  Terminal,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Github,
  Linkedin,
} from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume, onContactClick }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'terminal' | 'stats'>('profile');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="about" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Location badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {profile.availability}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {profile.location}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                <Award className="w-3.5 h-3.5" />
                Meta Certified Android Dev
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I’m{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-200 flex items-center flex-wrap gap-2">
                <span className="text-indigo-400 font-semibold">{profile.roleTitle}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300">UMT BSCS ’29</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-medium">ML Intern @ FlyRank AI & Dafi Labs</span>
              </p>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{profile.bioParagraph1}</p>
              <p className="text-slate-400">{profile.bioParagraph2}</p>
            </div>

            {/* Interactive Experience Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="p-3 bg-slate-900/80 border border-slate-800/90 rounded-xl hover:border-indigo-500/40 transition-colors">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                  AI & ML
                </div>
                <div className="text-xs text-slate-300">Python, Pandas & Deployments</div>
              </div>

              <div className="p-3 bg-slate-900/80 border border-slate-800/90 rounded-xl hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-1">
                  <Smartphone className="w-3.5 h-3.5" />
                  Android Dev
                </div>
                <div className="text-xs text-slate-300">Kotlin & Jetpack Compose</div>
              </div>

              <div className="p-3 bg-slate-900/80 border border-slate-800/90 rounded-xl hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-1">
                  <Terminal className="w-3.5 h-3.5" />
                  C++ & Systems
                </div>
                <div className="text-xs text-slate-300">OOP & Core Algorithms</div>
              </div>

              <div className="p-3 bg-slate-900/80 border border-slate-800/90 rounded-xl hover:border-rose-500/40 transition-colors">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 mb-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Growth Consulting
                </div>
                <div className="text-xs text-slate-300">Digital Marketing & CRO</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                id="hero-explore-projects-cta"
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:shadow-indigo-500/40 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-resume-modal-btn"
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-sm border border-slate-700/80 hover:border-slate-600 transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume & Certifications</span>
              </button>

              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3.5 py-3 rounded-xl bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white font-mono text-xs border border-slate-800 transition-all"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{profile.email}</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2">
                <a
                  id="hero-github-link"
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl text-slate-300 hover:text-white transition-all shadow-sm"
                  title="GitHub Profile (shahid07afnan-githb)"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  id="hero-linkedin-link"
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl text-blue-400 hover:text-blue-300 transition-all shadow-sm"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal & Live Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/90 bg-slate-950/70">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">afnan@umt-workstation:~$</span>
                </div>

                {/* View switcher tabs */}
                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2 py-0.5 rounded ${
                      activeTab === 'profile' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    status
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2 py-0.5 rounded ${
                      activeTab === 'terminal' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    cli
                  </button>
                  <button
                    onClick={() => setActiveTab('stats')}
                    className={`px-2 py-0.5 rounded ${
                      activeTab === 'stats' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    verified
                  </button>
                </div>
              </div>

              {/* Window Content */}
              <div className="p-5 sm:p-6 space-y-4">
                {activeTab === 'profile' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-mono font-bold text-white text-lg shadow-inner">
                          AS
                        </div>
                        <div>
                          <h2 className="text-base font-bold text-white flex items-center gap-1.5">
                            Afnan Shahid
                            <span className="text-xs font-normal text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                              Active Intern
                            </span>
                          </h2>
                          <p className="text-xs text-slate-400">University of Management and Technology (UMT)</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Specs table */}
                    <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800/80 font-mono text-xs space-y-2">
                      <div className="flex justify-between text-slate-400 border-b border-slate-900 pb-1.5">
                        <span className="text-indigo-300">Degree:</span>
                        <span className="text-slate-200">BS Computer Science (’29)</span>
                      </div>
                      <div className="flex justify-between text-slate-400 border-b border-slate-900 pb-1.5">
                        <span className="text-indigo-300">Internship 1:</span>
                        <span className="text-emerald-300 font-semibold">FlyRank AI (ML Intern)</span>
                      </div>
                      <div className="flex justify-between text-slate-400 border-b border-slate-900 pb-1.5">
                        <span className="text-indigo-300">Internship 2:</span>
                        <span className="text-purple-300 font-semibold">Dafi Labs (AI/ML Engineer)</span>
                      </div>
                      <div className="flex justify-between text-slate-400 border-b border-slate-900 pb-1.5">
                        <span className="text-indigo-300">Mobile Focus:</span>
                        <span className="text-slate-200">Kotlin, Jetpack Compose, MVVM</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span className="text-indigo-300">Campus Activity:</span>
                        <span className="text-amber-300">UMT Motorsports & GDG Events</span>
                      </div>
                    </div>

                    {/* Meta Certification Callout */}
                    <a
                      href="https://lnkd.in/dYCJKYap"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-slate-900 border border-indigo-500/30 rounded-xl hover:border-indigo-400 transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                          M
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-1">
                            Meta Android Development
                            <ExternalLink className="w-3 h-3 text-indigo-400" />
                          </div>
                          <div className="text-[11px] text-slate-400">Coursera Authorized Verified Credential</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Verified
                      </span>
                    </a>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-3 font-mono text-xs text-slate-300 animate-in fade-in duration-200">
                    <div className="text-slate-500">// Simulating Python AI model inference & environment check</div>
                    <div className="space-y-1.5 bg-slate-950 p-3 rounded-lg border border-slate-900">
                      <p className="text-indigo-400">$ python -c "import pandas as pd; import torch; print('Ready')"</p>
                      <p className="text-emerald-400">&gt; Environment: Python 3.11 • Anaconda • PyTorch loaded</p>
                      <p className="text-indigo-400">$ ./gradlew :app:assembleRelease</p>
                      <p className="text-emerald-400">&gt; ExpenseTrackerPro.apk compiled [Jetpack Compose MVVM: SUCCESS]</p>
                      <p className="text-indigo-400">$ g++ -O3 main.cpp -o high_perf_runner</p>
                      <p className="text-emerald-400">&gt; C++17 binary optimized (0 alloc leaks verified with Valgrind)</p>
                    </div>
                    <div className="text-[11px] text-slate-400 italic">
                      "Theory and practice feeding into each other." — Afnan Shahid
                    </div>
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-900">
                        <div className="text-[11px] text-slate-400">Education</div>
                        <div className="text-sm font-bold text-white">UMT Lahore</div>
                        <div className="text-xs text-indigo-400 font-mono">BSCS (2025-2029)</div>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-900">
                        <div className="text-[11px] text-slate-400">Previous School</div>
                        <div className="text-sm font-bold text-white">KIPS Education</div>
                        <div className="text-xs text-indigo-400 font-mono">F.Sc CS (Grade B)</div>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 space-y-1.5 text-xs">
                      <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        Community & Technical Workshops
                      </div>
                      <ul className="space-y-1 text-slate-400 list-disc list-inside text-[11px]">
                        <li>AI Seekho Day 2026 participant @ GDGoC BNU</li>
                        <li>Prompt to Development & Vibe Coding @ GDG UMT</li>
                        <li>Python with AI/ML @ Information Technology University (ITU)</li>
                        <li>Basics of C++ Workshop @ UMT</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Bottom Quick Contact Bar */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Open for collaboration</span>
                  </div>
                  <button
                    onClick={onContactClick}
                    className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
                  >
                    Send message <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
