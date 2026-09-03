import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Users,
  Compass,
} from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceEducationSectionProps {
  items: ExperienceItem[];
  onOpenResume: () => void;
}

export const ExperienceEducationSection: React.FC<ExperienceEducationSectionProps> = ({ items, onOpenResume }) => {
  const [filterType, setFilterType] = useState<'all' | 'internship' | 'education' | 'certification' | 'workshop'>('all');

  const filteredItems = items.filter((item) => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  const getFilterIcon = (type: string) => {
    switch (type) {
      case 'internship':
        return Briefcase;
      case 'education':
        return GraduationCap;
      case 'certification':
        return Award;
      case 'workshop':
        return Sparkles;
      default:
        return Compass;
    }
  };

  const getLogoBadge = (item: ExperienceItem) => {
    switch (item.logoType) {
      case 'flyrank':
        return { initial: 'FR', label: 'FlyRank AI', color: 'from-blue-600 to-indigo-600' };
      case 'dafi':
        return { initial: 'DL', label: 'Dafi Labs', color: 'from-purple-600 to-pink-600' };
      case 'umt':
        return { initial: 'UMT', label: 'University of Management & Technology', color: 'from-amber-600 to-orange-600' };
      case 'meta':
        return { initial: 'META', label: 'Meta Authorized', color: 'from-blue-500 to-cyan-500' };
      case 'itu':
        return { initial: 'ITU', label: 'Info Tech University', color: 'from-emerald-600 to-teal-600' };
      case 'gdg':
        return { initial: 'GDG', label: 'Google Developer Groups', color: 'from-red-500 via-amber-500 to-green-500' };
      case 'kips':
        return { initial: 'KIPS', label: 'KIPS Education', color: 'from-slate-700 to-slate-900' };
      default:
        return { initial: 'AS', label: item.institutionOrOrg, color: 'from-indigo-600 to-purple-600' };
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
              <Briefcase className="w-4 h-4" />
              <span>Career Journey & Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experience, Education & Certifications
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Active engineering internships at FlyRank AI & Dafi Labs, university degree at UMT, and recognized credentials from Meta and Google Developer Groups.
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="self-start md:self-auto px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-all flex items-center gap-2 shadow-sm"
          >
            <span>View Full Resume</span>
            <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All Milestones' },
            { id: 'internship', label: 'Internships & Roles' },
            { id: 'education', label: 'University & Academic' },
            { id: 'certification', label: 'Verified Certifications' },
            { id: 'workshop', label: 'GDG & Technical Workshops' },
          ].map((tab) => {
            const isSelected = filterType === tab.id;
            return (
              <button
                key={tab.id}
                id={`timeline-filter-${tab.id}`}
                onClick={() => setFilterType(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 active:scale-95 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Timeline Items Grid / Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => {
            const badge = getLogoBadge(item);
            const Icon = getFilterIcon(item.type);

            return (
              <div
                key={item.id}
                id={`experience-item-${item.id}`}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4 flex flex-col justify-between shadow-lg hover:shadow-xl"
              >
                <div className="space-y-3">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center font-mono font-bold text-white text-xs shadow-md shrink-0`}
                      >
                        {badge.initial}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                          {item.roleOrDegree}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-indigo-400">
                          {item.institutionOrOrg}
                        </p>
                      </div>
                    </div>

                    {item.badgeText && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 shrink-0">
                        {item.badgeText}
                      </span>
                    )}
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Optional Action / Link */}
                {item.verifiedLink && (
                  <div className="pt-3 border-t border-slate-800/80">
                    <a
                      href={item.verifiedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 hover:text-white text-xs font-semibold transition-all"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>View Verified Credential</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Special Community & GDG Callout Section */}
        <div
          id="certifications"
          className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/30 to-purple-950/30 border border-indigo-500/30 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 inline-block">
                Community Passion & Events
              </span>
              <h3 className="text-xl font-bold text-white">
                Google Developer Groups on Campus (GDG) & UMT Motorsports
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
                Active participant in tech hackathons, AI Seekho Day 2026 at Beaconhouse National University, and active member of the UMT Motorsports Society to fuel teamwork and engineering vigor.
              </p>
            </div>

            <a
              href="https://lnkd.in/dYCJKYap"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold rounded-xl shadow-md transition-all"
            >
              <Award className="w-4 h-4" />
              <span>Explore Certifications</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
