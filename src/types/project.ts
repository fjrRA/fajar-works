// src/types/project.ts
export type ProjectStatus =
  | "Completed"
  | "In Development"
  | "Archived";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: number;
  status: ProjectStatus;
  category: string;
  role: string;
  featured: boolean;
  order: number;
  stack: string[];
  repositoryUrl: string;
  liveUrl?: string;
  coverImage?: string;
  content: string;
};