export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Android / Mobile' | 'AI & Machine Learning' | 'Python & C++' | 'Digital Marketing';
  summary: string;
  problemSolved: string;
  architecturalOverview: string;
  keyLearnings: string[];
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  verifiedCertUrl?: string;
  gradientTheme: string;
  previewType: 'android-phone' | 'ml-pipeline' | 'prompt-terminal' | 'cpp-terminal' | 'marketing-dashboard';
  starsCount?: number;
  featured: boolean;
  completionDate: string;
  badge?: string;
}

export interface Skill {
  name: string;
  level: 'Proficient' | 'Advanced' | 'Familiar' | 'Exploring';
  category: 'aiml' | 'android' | 'languages' | 'marketing' | 'tools';
  institution?: string;
  experienceDescription: string;
  popularProjects: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  type: 'internship' | 'education' | 'certification' | 'workshop';
  roleOrDegree: string;
  institutionOrOrg: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  badgeText?: string;
  verifiedLink?: string;
  logoType?: 'flyrank' | 'dafi' | 'umt' | 'kips' | 'meta' | 'itu' | 'gdg';
}

export interface ProfileData {
  name: string;
  roleTitle: string;
  tagline: string;
  availability: string;
  location: string;
  bioParagraph1: string;
  bioParagraph2: string;
  email: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUsername: string;
  linkedinUrl: string;
  whatsappNumber?: string;
  resumeFileName: string;
  highlights: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  inquiryType: 'Internship / Full-Time' | 'AI/ML Project' | 'Android App' | 'Digital Marketing' | 'Mentorship / Collaboration';
  message: string;
}
