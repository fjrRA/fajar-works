// src/types/project.ts
export type ProjectStatus =
  | "Completed"
  | "In Development"
  | "Paused"
  | "Archived";

export type Project = {
  slug: string;
  title: string;
  summary: string;

  year: number;
  updatedAt?: string;

  status: ProjectStatus;
  category: string;
  role: string;
  context: string;

  published: boolean;
  featured: boolean;
  order: number;

  stack: string[];
  responsibilities: string[];

  repositoryUrl: string;
  liveUrl?: string;
  coverImage?: string;

  content: string;
};