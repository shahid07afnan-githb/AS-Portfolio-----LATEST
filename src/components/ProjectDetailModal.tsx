import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Smartphone, Layers, Terminal, Sparkles, Award } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, onContactClick }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-3xl my-8 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradientTheme} border-b border-slate-800 relative`}>
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-950/60 hover:bg-slate-950 border border-slate-700 rounded-full transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 max-w-xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  {project.badge}
                </span>
              )}
              <span className="text-xs text-slate-400 font-mono">{project.completionDate}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300">{project.subtitle}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{project.summary}</p>
          </div>

          {/* Problem Solved */}
          <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Problem Statement & Target Impact
            </h3>
            <p className="text-sm text-slate-300">{project.problemSolved}</p>
          </div>

          {/* Architectural Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              Technical & Architectural Overview
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/80 font-mono text-xs">
              {project.architecturalOverview}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Key Features Implemented
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Learnings */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              Engineering Takeaways & Learnings
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {project.keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-slate-950/40 p-3 rounded-lg border border-slate-800/60">
                  <span className="font-mono text-xs text-purple-400 font-bold shrink-0">0{idx + 1}.</span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-950 border border-slate-700/80 text-slate-200 text-xs font-mono font-medium rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Action Links */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.verifiedCertUrl && (
              <a
                href={project.verifiedCertUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-white border border-indigo-500/40 rounded-xl text-xs font-semibold transition-all"
              >
                <Award className="w-4 h-4" />
                <span>View Verified Certificate</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 rounded-xl text-xs font-medium transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl text-xs font-semibold shadow-md transition-all"
          >
            <span>Discuss this Project</span>
          </button>
        </div>
      </div>
    </div>
  );
};
