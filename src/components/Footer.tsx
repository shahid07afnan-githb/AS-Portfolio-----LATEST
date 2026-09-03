import React from 'react';
import { Sparkles, ArrowUp, Github, Linkedin, Mail, MapPin, Heart } from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-mono font-bold text-white text-xs">
              AS
            </div>
            <div>
              <div className="font-bold text-slate-200 text-sm">{profile.name}</div>
              <div className="text-slate-500">UMT BSCS ’29 • Python AI Engineer & Android Dev</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              id="footer-linkedin-link"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-900 hover:bg-slate-800 rounded-lg text-blue-400 hover:text-blue-300 transition-colors border border-slate-800"
              aria-label="LinkedIn Profile (Afnan Shahid)"
              title="Afnan Shahid on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="footer-github-link"
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-900 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors border border-slate-800"
              aria-label="GitHub Profile (shahid07afnan-githb)"
              title="shahid07afnan-githb on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${profile.email}`}
              className="p-2 bg-slate-900 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors border border-slate-800"
              aria-label="Email Afnan"
              title="Send an email to Afnan Shahid"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors flex items-center gap-1 font-mono text-[11px]"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Afnan Shahid. Built with React, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-indigo-500" />
            <span>Lahore, Punjab, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
