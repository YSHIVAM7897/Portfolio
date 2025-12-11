export interface Project {
  title: string;
  period: string;
  role: string;
  description: string;
  details: string[];
  techStack: string[];
  challenges?: string[];
  solutions?: string[];
  learnings?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreValue: number; // For charting
  details?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  level: number; // 0-100 for visualization
}