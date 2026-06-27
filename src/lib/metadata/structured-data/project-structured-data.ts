// src/lib/metadata/structured-data/
// project-structured-data.ts

import type {
  Project,
} from "@/types/project";

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

export function createProjectStructuredData(
  project: Project,
): StructuredData {
  const pageUrl =
    createAbsoluteUrl(
      `/projects/${project.slug}`,
    );

  const structuredData:
    StructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id":
      `${pageUrl}#creative-work`,

    name: project.title,
    description: project.summary,
    url: pageUrl,

    identifier: project.slug,

    genre: project.category,

    keywords: project.stack,

    creativeWorkStatus:
      project.status,

    creator:
      createPersonReference(),

    isPartOf: {
      "@id": WEBSITE_ID,
    },
  };

  if (project.updatedAt) {
    structuredData.dateModified =
      project.updatedAt;
  }

  const image =
    resolveImageUrl(
      project.coverImage,
    );

  if (image) {
    structuredData.image = image;
  }

  return structuredData;
}