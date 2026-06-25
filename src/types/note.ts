// src/types/note.ts
export type NoteStatus =
  | "Published"
  | "Draft";

export type NoteLanguage =
  | "id"
  | "en";

export type Note = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  status: NoteStatus;
  category: string;
  language: NoteLanguage;
  featured: boolean;
  tags: string[];
  coverImage?: string;
  content: string;
};