// src/types/learning-log.ts
export type LearningLogStatus =
  | "Completed"
  | "In Progress"
  | "Paused";

export type LearningLog = {
  slug: string;
  title: string;
  excerpt: string;
  loggedAt: string;
  updatedAt?: string;
  published: boolean;
  status: LearningLogStatus;
  category: string;
  source: string;
  module: string;
  progress: string;
  topics: string[];
  repositoryUrl?: string;
  content: string;
};
