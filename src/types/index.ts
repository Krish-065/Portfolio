export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Flagship Platform' | 'AI & GovTech' | 'Predictive Analytics' | 'Maritime Intelligence' | 'Environmental AI' | 'Research & Experiment' | 'Exploratory ML';
  role: string;
  date: string;
  summary: string;
  problem: string;
  solution: string;
  myContribution: string;
  verifiedTech: string[];
  features: string[];
  architecture?: {
    overview: string;
    steps: { title: string; desc: string }[];
  };
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
  isFlagship?: boolean;
  featuredOrder?: number;
}

export interface ResearchModel {
  id: string;
  title: string;
  badge: string;
  objective: string;
  methodology: string[];
  keyComponents: string[];
  limitationsAndLearnings: string[];
  repoUrl: string;
}

export interface SkillGroup {
  category: string;
  iconName: string;
  description: string;
  skills: { name: string; context?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Leadership & Sports' | 'Hackathon Team' | 'Academic' | 'Professional Role Placeholder';
  highlights: string[];
  badge?: string;
  isPlaceholder?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  date?: string;
  credentialId?: string;
  skillsLearned: string[];
  verified: boolean;
  isPlaceholder?: boolean;
}

export interface LeetCodeStats {
  username: string;
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  badge: string;
  badgeIcon: string;
  profileUrl: string;
}

export interface GitHubStats {
  username: string;
  publicRepos: number;
  profileUrl: string;
  topLanguages: string[];
}

