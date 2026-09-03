import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, Send, Menu, X, Download, MapPin, Briefcase, Github, Linkedin } from 'lucide-react';
import { ProfileData } from '../types';

interface NavbarProps {
  profile: ProfileData;
  onOpenResume: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenResume, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience & Edu', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          id="navbar-logo"
          href="#top"
          className="group flex items-center gap-2.5 text-slate-100 hover:text-white transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-bold text-sm bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
                AS
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-base sm:text-lg flex items-center gap-1.5">
              {profile.name}
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for roles" />
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
              BSCS ’29 • AI & Mobile Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-navigation" className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              href={link.href}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Social Quick Links */}
          <div className="flex items-center gap-1 mr-1 border-r border-slate-800 pr-2">
            <a
              id="navbar-github-link"
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
              title="GitHub Profile (shahid07afnan-githb)"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="navbar-linkedin-link"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-blue-400 hover:text-blue-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <button
            id="navbar-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700/70 hover:border-slate-600 rounded-lg transition-all active:scale-95 shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-indigo-400" />
            <span>Resume</span>
          </button>

          <button
            id="navbar-contact-cta"
            onClick={onContactClick}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg shadow-md shadow-indigo-600/30 transition-all hover:shadow-indigo-500/40 active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Let’s Connect</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center gap-2 px-3 py-2 text-xs text-slate-400 bg-slate-900/80 rounded-lg mb-3">
            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
            <span>Lahore, Pakistan • Open to Remote & Local</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Social Links */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 px-3 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-slate-300 hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 px-3 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-blue-400 hover:text-blue-300"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              id="mobile-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700 rounded-lg"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              View & Print Resume
            </button>
            <button
              id="mobile-contact-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg"
            >
              <Send className="w-4 h-4" />
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
