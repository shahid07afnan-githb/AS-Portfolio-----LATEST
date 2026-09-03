import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, MapPin, Award, CheckCircle2, Github, Linkedin } from 'lucide-react';
import { ProfileData, Project, SkillGroup, ExperienceItem } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  projects: Project[];
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  projects,
  skillGroups,
  experience,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl my-6 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Bar */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <h3 className="text-sm sm:text-base font-bold text-white">
              Resume Preview • {profile.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="print-resume-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-slate-200 print:bg-white print:text-black print:p-0">
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {profile.name}
                </h1>
                <p className="text-sm font-semibold text-indigo-400">
                  {profile.roleTitle} • UMT BSCS ’29
                </p>
              </div>

              <div className="text-xs text-slate-400 sm:text-right space-y-1 font-mono">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-3 pt-0.5">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-300 hover:text-white underline underline-offset-2"
                  >
                    <Github className="w-3 h-3" />
                    <span>github/shahid07afnan-githb</span>
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 underline underline-offset-2"
                  >
                    <Linkedin className="w-3 h-3" />
                    <span>linkedin/afnan-shahid</span>
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
              {profile.bioParagraph1} {profile.bioParagraph2}
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1">
              Work Experience & Internships
            </h2>
            <div className="space-y-4">
              {experience
                .filter((item) => item.type === 'internship')
                .map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                      <div className="font-bold text-white">
                        {exp.roleOrDegree} <span className="text-indigo-400 font-normal">@ {exp.institutionOrOrg}</span>
                      </div>
                      <div className="text-slate-400 font-mono text-xs">{exp.period} • {exp.location}</div>
                    </div>
                    <p className="text-xs text-slate-300">{exp.description}</p>
                    <ul className="list-disc list-inside text-xs text-slate-400 space-y-0.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1">
              Education
            </h2>
            <div className="space-y-4">
              {experience
                .filter((item) => item.type === 'education')
                .map((edu) => (
                  <div key={edu.id} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                      <div className="font-bold text-white">
                        {edu.roleOrDegree} <span className="text-slate-400 font-normal">| {edu.institutionOrOrg}</span>
                      </div>
                      <div className="text-slate-400 font-mono text-xs">{edu.period}</div>
                    </div>
                    <p className="text-xs text-slate-300">{edu.description}</p>
                    <ul className="list-disc list-inside text-xs text-slate-400 space-y-0.5">
                      {edu.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1">
              Featured Projects & Scaffolds
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.slice(0, 4).map((proj) => (
                <div key={proj.id} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-bold text-white">{proj.title}</h3>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-2">{proj.summary}</p>
                  <div className="text-[11px] font-mono text-slate-400">
                    <span className="text-slate-500">Tech: </span>
                    {proj.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Workshops */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1">
              Certifications & Technical Workshops
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                <div className="font-bold text-white">Meta Android Mobile Application Development</div>
                <div className="text-indigo-400">Coursera / Meta Verified Credential</div>
                <div className="text-slate-400 text-[11px] mt-1">Kotlin, Jetpack Compose, MVVM Architecture</div>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                <div className="font-bold text-white">Python with AI/ML & Pandas</div>
                <div className="text-indigo-400">Information Technology University (ITU)</div>
                <div className="text-slate-400 text-[11px] mt-1">Pandas, Anaconda, Data preprocessing</div>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                <div className="font-bold text-white">AI Seekho Day 2026 Participant</div>
                <div className="text-indigo-400">Google Developer Groups (GDGoC BNU)</div>
                <div className="text-slate-400 text-[11px] mt-1">Hands-on AI, technical workshops, LLMs</div>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                <div className="font-bold text-white">Prompt to Development & Vibe Coding</div>
                <div className="text-indigo-400">GDG UMT & UMT Workshops</div>
                <div className="text-slate-400 text-[11px] mt-1">Prompt engineering, C++ basics, MLOps</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
