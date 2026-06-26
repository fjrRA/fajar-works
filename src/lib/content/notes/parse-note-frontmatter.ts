// src/lib/content/notes/
// parse-note-frontmatter.ts

import type { Note } from "@/types/note";

import {
  NOTE_FRONTMATTER_FIELDS,
  NOTE_LANGUAGES,
  NOTE_STATUSES,
} from "./note.constants";
import type {
  NoteDocument,
} from "./read-note-document";
import {
  optionalDateString,
  optionalLocalImagePath,
  requireAllowedValue,
  requireBoolean,
  requireDateString,
  requireSlug,
  requireString,
  requireStringArray,
  validateDateOrder,
  validateKnownFields,
} from "./note.validators";

type ParseNoteFrontmatterOptions = {
  document: NoteDocument;
  fileName: string;
};

export function parseNoteFrontmatter({
  document,
  fileName,
}: ParseNoteFrontmatterOptions): Note {
  const {
    data,
    content,
    fileSlug,
  } = document;

  validateKnownFields(
    data,
    NOTE_FRONTMATTER_FIELDS,
    fileName,
  );

  const slug = requireSlug(
    data.slug,
    fileName,
  );

  if (slug !== fileSlug) {
    throw new Error(
      `Note slug "${slug}" does not match filename "${fileSlug}".`,
    );
  }

  const publishedAt =
    requireDateString(
      data.publishedAt,
      "publishedAt",
      fileName,
    );

  const updatedAt =
    optionalDateString(
      data.updatedAt,
      "updatedAt",
      fileName,
    );

  validateDateOrder(
    publishedAt,
    updatedAt,
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

    publishedAt,
    updatedAt,

    status: requireAllowedValue(
      data.status,
      NOTE_STATUSES,
      "status",
      fileName,
    ),

    category: requireString(
      data.category,
      "category",
      fileName,
    ),

    language: requireAllowedValue(
      data.language,
      NOTE_LANGUAGES,
      "language",
      fileName,
    ),

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

    coverImage: optionalLocalImagePath(
      data.coverImage,
      "coverImage",
      fileName,
    ),

    content,
  };
}