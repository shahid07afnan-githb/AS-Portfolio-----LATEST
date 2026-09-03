import React, { useState } from 'react';
import {
  Sparkles,
  Smartphone,
  Code2,
  TrendingUp,
  Wrench,
  Award,
  CheckCircle,
  Cpu,
  Terminal,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { SkillGroup, Skill } from '../types';

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillGroups }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(skillGroups[0].skills[0]);
  const [activeGroupId, setActiveGroupId] = useState<string>('ai-ml');

  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return Sparkles;
      case 'Smartphone':
        return Smartphone;
      case 'Code2':
        return Code2;
      case 'TrendingUp':
        return TrendingUp;
      case 'Wrench':
        return Wrench;
      default:
        return Cpu;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'Proficient':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30';
      default:
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Core Tooling
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Grounded through university CS coursework at UMT, specialized training at ITU, Meta Android certification, and active industry internships at FlyRank AI & Dafi Labs.
          </p>
        </div>

        {/* Category switcher tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {skillGroups.map((group) => {
            const Icon = getGroupIcon(group.iconName);
            const isActive = activeGroupId === group.id;
            return (
              <button
                key={group.id}
                id={`skill-tab-${group.id}`}
                onClick={() => {
                  setActiveGroupId(group.id);
                  if (group.skills.length > 0) {
                    setSelectedSkill(group.skills[0]);
                  }
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{group.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Group Content & Skill Inspector */}
        {skillGroups
          .filter((g) => g.id === activeGroupId)
          .map((group) => (
            <div key={group.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Skills Grid */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <h3 className="text-base font-bold text-white mb-1">{group.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400">{group.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.skills.map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    return (
                      <div
                        key={skill.name}
                        id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        onClick={() => setSelectedSkill(skill)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                          isSelected
                            ? 'bg-slate-900 border-indigo-500 ring-1 ring-indigo-500/40 shadow-lg shadow-indigo-500/10'
                            : 'bg-slate-900/70 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-sm font-bold text-white">{skill.name}</h4>
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-semibold border font-mono ${getLevelBadgeClass(
                                skill.level
                              )}`}
                            >
                              {skill.level}
                            </span>
                          </div>
                          {skill.institution && (
                            <div className="text-[11px] text-indigo-300/90 font-medium flex items-center gap-1">
                              <Award className="w-3 h-3 text-indigo-400" />
                              <span>{skill.institution}</span>
                            </div>
                          )}
                        </div>

                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {skill.experienceDescription}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Interactive Skill Inspector & Linked Project Callout */}
              <div className="lg:col-span-5">
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 sticky top-24 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-mono">Skill Inspector</div>
                        <div className="text-sm font-bold text-white">{selectedSkill?.name}</div>
                      </div>
                    </div>
                    {selectedSkill && (
                      <span
                        className={`px-2.5 py-1 rounded text-xs font-semibold border font-mono ${getLevelBadgeClass(
                          selectedSkill.level
                        )}`}
                      >
                        {selectedSkill.level}
                      </span>
                    )}
                  </div>

                  {selectedSkill && (
                    <div className="space-y-4">
                      {selectedSkill.institution && (
                        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 text-xs">
                          <span className="text-slate-400 block text-[11px] uppercase tracking-wider font-semibold">
                            Accredited / Associated Program
                          </span>
                          <span className="text-indigo-300 font-medium mt-0.5 block">
                            {selectedSkill.institution}
                          </span>
                        </div>
                      )}

                      <div className="space-y-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                          Application & Experience
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                          {selectedSkill.experienceDescription}
                        </p>
                      </div>

                      {selectedSkill.popularProjects.length > 0 && (
                        <div className="space-y-2 pt-2 border-t border-slate-800">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5" />
                            Applied in Projects:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedSkill.popularProjects.map((projId) => (
                              <a
                                key={projId}
                                href="#projects"
                                className="px-2.5 py-1 text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 rounded-lg flex items-center gap-1 transition-colors"
                              >
                                <span>{projId}</span>
                                <ArrowUpRight className="w-3 h-3" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Vibe Coding callout */}
                  <div className="p-3.5 bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-slate-950 border border-purple-500/30 rounded-xl text-xs space-y-1.5">
                    <div className="font-semibold text-purple-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Vibe Coding & Prompt Mastery
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Equipped with hands-on Prompt to Development training from GDG UMT & ITU, blending high-level model steering with low-level C++/Kotlin architectural discipline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
