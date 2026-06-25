// src/lib/content/notes/parse-note-file.ts
import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { Note } from "@/types/note";

import {
  NOTES_DIRECTORY,
  NOTE_LANGUAGES,
  NOTE_STATUSES,
} from "./note.constants";
import {
  optionalDateString,
  optionalString,
  requireAllowedValue,
  requireBoolean,
  requireDateString,
  requireString,
  requireStringArray,
} from "./note.validators";

export function parseNoteFile(
  fileName: string,
): Note {
  const filePath = path.join(
    NOTES_DIRECTORY,
    fileName,
  );

  const rawFileContent = fs.readFileSync(
    filePath,
    "utf8",
  );

  const fileContent = rawFileContent.replace(
    /^\uFEFF/,
    "",
  );

  const hasFrontmatterDelimiter =
    fileContent.startsWith("---\n") ||
    fileContent.startsWith("---\r\n");

  if (!hasFrontmatterDelimiter) {
    throw new Error(
      `Note "${fileName}" must start directly with a "---" frontmatter delimiter.`,
    );
  }

  let parsedFile: ReturnType<typeof matter>;

  try {
    parsedFile = matter(fileContent);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : String(error);

    throw new Error(
      `Note "${fileName}" has invalid YAML frontmatter: ${errorMessage}`,
    );
  }

  const { data, content } = parsedFile;

  if (Object.keys(data).length === 0) {
    throw new Error(
      `Note "${fileName}" has empty frontmatter.`,
    );
  }

  const fileSlug = path.basename(
    fileName,
    ".md",
  );

  // Kode validasi berikutnya tetap sama.

  const slug = requireString(
    data.slug,
    "slug",
    fileName,
  );

  if (slug !== fileSlug) {
    throw new Error(
      `Note slug "${slug}" does not match filename "${fileSlug}".`,
    );
  }

  const status = requireAllowedValue(
    data.status,
    NOTE_STATUSES,
    "status",
    fileName,
  );

  const language = requireAllowedValue(
    data.language,
    NOTE_LANGUAGES,
    "language",
    fileName,
  );

  return {
    slug,
    title: requireString(
      data.title,
      "title",
      fileName,
    ),
    excerpt: requireString(
      data.excerpt,
      "excerpt",
      fileName,
    ),
    publishedAt: requireDateString(
      data.publishedAt,
      "publishedAt",
      fileName,
    ),
    updatedAt: optionalDateString(
      data.updatedAt,
      "updatedAt",
      fileName,
    ),
    status,
    category: requireString(
      data.category,
      "category",
      fileName,
    ),
    language,
    featured: requireBoolean(
      data.featured,
      "featured",
      fileName,
    ),
    tags: requireStringArray(
      data.tags,
      "tags",
      fileName,
    ),
    coverImage: optionalString(
      data.coverImage,
      "coverImage",
      fileName,
    ),
    content: content.trim(),
  };
}