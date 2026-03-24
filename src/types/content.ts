export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl: string;
  monogram: string;
  bio: {
    recruiter: string;
    explorer: string;
  };
  highlights: Metric[];
}

export interface Metric {
  label: string;
  value: string;
  unit: string;
  context?: string;
}

export interface Milestone {
  id: string;
  date: string;
  year: number;
  title: string;
  subtitle: string;
  description: {
    recruiter: string;
    explorer: string;
  };
  type: 'education' | 'work' | 'achievement' | 'leadership' | 'transition';
  icon: string;
  tags: string[];
  linkedProject?: string;
}

export interface ProjectMeta {
  slug: string;
  title: string;
  subtitle: string;
  description: {
    recruiter: string;
    explorer: string;
  };
  date: string;
  tags: string[];
  techStack: string[];
  metrics: Metric[];
  role: string;
  duration: string;
  status: 'completed' | 'ongoing' | 'research';
  featured: boolean;
  category: 'enterprise' | 'research' | 'ai' | 'systems';
  links?: { label: string; url: string }[];
}

export interface LeadershipItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  impact: string;
  metaphor: {
    icon: string;
    label: string;
  };
}

export interface ResearchItem {
  id: string;
  title: string;
  abstract: string;
  status: 'published' | 'in-progress' | 'completed';
  venue?: string;
  date: string;
  tags: string[];
  links?: { label: string; url: string }[];
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  date: string;
  authors: string[];
  abstract: string;
  url?: string;
  certificateImage?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverColor: string;
  spineColor: string;
  category: 'ai-ml' | 'engineering' | 'philosophy' | 'fiction' | 'leadership' | 'history' | 'mystery';
  takeaway: string;
  currentlyReading?: boolean;
}

export interface TravelStamp {
  id: string;
  city: string;
  country: string;
  date: string;
  memory: string;
  stampColor: string;
  connection?: string;
  photos?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Certification {
  id: string;
  title: string;
  description: string;
  credentialId?: string;
  verifyUrl?: string;
  date: string;
}

export interface Hackathon {
  id: string;
  title: string;
  location: string;
  result: string;
  resultType: 'winner' | 'finalist';
  tags: string[];
  year: number;
}

export interface PromptChip {
  label: string;
  query: string;
}

export interface CuratedResponse {
  triggers: string[];
  response: string;
  section?: string;
}
