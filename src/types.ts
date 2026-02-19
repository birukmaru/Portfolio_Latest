import type { LucideIcon } from 'lucide-react';


export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  link?: string;
  siteUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  isFeatured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  location?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: LucideIcon;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}