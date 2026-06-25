// src/lib/content/projects/parse-project-data.ts
import type { Project } from "@/types/project";

import {
  PROJECT_STATUSES,
} from "./project.constants";
import type {
  ProjectSource,
} from "./read-project-source";
import {
  optionalDateString,
  optionalString,
  requireAllowedValue,
  requireBoolean,
  requirePositiveInteger,
  requireString,
  requireStringArray,
} from "./project.validators";

function requireMatchingSlug(
  value: unknown,
  fileSlug: string,
  fileName: string,
): string {
  const slug = requireString(
    value,
    "slug",
    fileName,
  );

  if (slug !== fileSlug) {
    throw new Error(
      `Project slug "${slug}" does not match filename "${fileSlug}".`,
    );
  }

  return slug;
}

export function parseProjectData({
  fileName,
  fileSlug,
  data,
  content,
}: ProjectSource): Project {
  const slug = requireMatchingSlug(
    data.slug,
    fileSlug,
    fileName,
  );

  const status = requireAllowedValue(
    data.status,
    PROJECT_STATUSES,
    "status",
    fileName,
  );

  return {
    slug,

    title: requireString(
      data.title,
      "title",
      fileName,
    ),

    summary: requireString(
      data.summary,
      "summary",
      fileName,
    ),

    year: requirePositiveInteger(
      data.year,
      "year",
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

    role: requireString(
      data.role,
      "role",
      fileName,
    ),

    context: requireString(
      data.context,
      "context",
      fileName,
    ),

    published: requireBoolean(
      data.published,
      "published",
      fileName,
    ),

    featured: requireBoolean(
      data.featured,
      "featured",
      fileName,
    ),

    order: requirePositiveInteger(
      data.order,
      "order",
      fileName,
    ),

    stack: requireStringArray(
      data.stack,
      "stack",
      fileName,
    ),

    responsibilities: requireStringArray(
      data.responsibilities,
      "responsibilities",
      fileName,
    ),

    repositoryUrl: requireString(
      data.repositoryUrl,
      "repositoryUrl",
      fileName,
    ),

    liveUrl: optionalString(
      data.liveUrl,
      "liveUrl",
      fileName,
    ),

    coverImage: optionalString(
      data.coverImage,
      "coverImage",
      fileName,
    ),

    content,
  };
}