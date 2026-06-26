// src/lib/content/notes/note.constants.ts

import path from "node:path";

import type {
  NoteLanguage,
  NoteStatus,
} from "@/types/note";

export const NOTES_DIRECTORY = path.join(
  process.cwd(),
  "content",
  "notes",
);

export const NOTE_FILE_EXTENSION = ".md";

export const NOTE_STATUSES = [
  "Published",
  "Draft",
] as const satisfies readonly NoteStatus[];

export const NOTE_LANGUAGES = [
  "id",
  "en",
] as const satisfies readonly NoteLanguage[];

export const NOTE_FRONTMATTER_FIELDS = [
  "title",
  "slug",
  "excerpt",
  "publishedAt",
  "updatedAt",
  "status",
  "category",
  "language",
  "featured",
  "tags",
  "coverImage",
] as const;