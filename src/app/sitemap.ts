// src/app/sitemap.ts

import type {
  MetadataRoute,
} from "next";

import {
  getPublishedNotes,
} from "@/lib/content/get-notes";
import {
  getPublishedProjects,
} from "@/lib/content/get-projects";
import {
  createAbsoluteUrl,
} from "@/lib/metadata/site-url";

export default function sitemap():
  MetadataRoute.Sitemap {
  const staticRoutes:
    MetadataRoute.Sitemap = [
      {
        url: createAbsoluteUrl("/"),
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: createAbsoluteUrl(
          "/projects",
        ),
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: createAbsoluteUrl(
          "/notes",
        ),
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: createAbsoluteUrl(
          "/learning-log",
        ),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: createAbsoluteUrl(
          "/about",
        ),
        changeFrequency: "yearly",
        priority: 0.7,
      },
      {
        url: createAbsoluteUrl(
          "/contact",
        ),
        changeFrequency: "yearly",
        priority: 0.7,
      },
    ];

  const projectRoutes:
    MetadataRoute.Sitemap =
    getPublishedProjects().map(
      (project) => ({
        url: createAbsoluteUrl(
          `/projects/${project.slug}`,
        ),
        changeFrequency:
          "monthly" as const,
        priority: 0.8,
      }),
    );

  const noteRoutes:
    MetadataRoute.Sitemap =
    getPublishedNotes().map(
      (note) => ({
        url: createAbsoluteUrl(
          `/notes/${note.slug}`,
        ),

        lastModified:
          note.updatedAt ??
          note.publishedAt,

        changeFrequency:
          "monthly" as const,

        priority: note.featured
          ? 0.8
          : 0.7,
      }),
    );

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...noteRoutes,
  ];
}