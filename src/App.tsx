import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

import { profileData, projectsData, skillGroupsData, experienceData } from './data/portfolioData';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        profile={profileData}
        onOpenResume={() => setIsResumeOpen(true)}
        onContactClick={scrollToContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          profile={profileData}
          onOpenResume={() => setIsResumeOpen(true)}
          onContactClick={scrollToContact}
        />

        <ProjectsSection
          projects={projectsData}
          onContactClick={scrollToContact}
        />

        <SkillsSection
          skillGroups={skillGroupsData}
        />

        <ExperienceEducationSection
          items={experienceData}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <ContactSection
          profile={profileData}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profileData}
      />

      {/* Printable Digital Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profileData}
        projects={projectsData}
        skillGroups={skillGroupsData}
        experience={experienceData}
      />
    </div>
  );
}
