// src/lib/metadata/structured-data/
// learning-log-structured-data.ts

import type {
  LearningLog,
} from "@/types/learning-log";

import {
  createAbsoluteUrl,
} from "../site-url";

import {
  createPersonReference,
  WEBSITE_ID,
} from "./structured-data.shared";

import type {
  StructuredData,
} from "./structured-data.types";

export function createLearningLogStructuredData(
  learningLog: LearningLog,
): StructuredData {
  const pageUrl =
    createAbsoluteUrl(
      `/learning-log/${learningLog.slug}`,
    );

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id":
      `${pageUrl}#tech-article`,

    headline: learningLog.title,
    description: learningLog.excerpt,
    url: pageUrl,

    datePublished:
      learningLog.loggedAt,

    dateModified:
      learningLog.updatedAt ??
      learningLog.loggedAt,

    articleSection:
      learningLog.category,

    keywords:
      learningLog.topics,

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
}