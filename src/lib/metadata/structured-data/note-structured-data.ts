// src/lib/metadata/structured-data/
// note-structured-data.ts

import type {
  Note,
} from "@/types/note";

import {
  createAbsoluteUrl,
} from "../site-url";

import {
  createPersonReference,
  resolveImageUrl,
  WEBSITE_ID,
} from "./structured-data.shared";

import type {
  StructuredData,
} from "./structured-data.types";

export function createNoteStructuredData(
  note: Note,
): StructuredData {
  const pageUrl =
    createAbsoluteUrl(
      `/notes/${note.slug}`,
    );

  const structuredData:
    StructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id":
      `${pageUrl}#article`,

    headline: note.title,
    description: note.excerpt,
    url: pageUrl,

    datePublished:
      note.publishedAt,

    dateModified:
      note.updatedAt ??
      note.publishedAt,

    inLanguage: note.language,

    articleSection:
      note.category,

    keywords: note.tags,

    author:
      createPersonReference(),

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },

    isPartOf: {
      "@id": WEBSITE_ID,
    },
  };

  const image =
    resolveImageUrl(
      note.coverImage,
    );

  if (image) {
    structuredData.image = image;
  }

  return structuredData;
}