// src/lib/metadata/structured-data.ts

import siteData from "../../../content/site.json";

import type {
  Note,
} from "@/types/note";
import type {
  Project,
} from "@/types/project";

import {
  createAbsoluteUrl,
} from "./site-url";

type StructuredData =
  Record<string, unknown>;

type StructuredDataSocial = {
  id: string;
  href: string;
  external: boolean;
};

const WEBSITE_ID =
  createAbsoluteUrl("/#website");

const PROFILE_PAGE_URL =
  createAbsoluteUrl("/about");

const PERSON_ID =
  `${PROFILE_PAGE_URL}#person`;

function createPersonReference():
  StructuredData {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteData.name,
    url: PROFILE_PAGE_URL,
  };
}

function resolveImageUrl(
  image: string | undefined,
): string | undefined {
  if (!image) {
    return undefined;
  }

  return createAbsoluteUrl(image);
}

export function createWebsiteStructuredData():
  StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,

    name: siteData.siteName,
    url: createAbsoluteUrl("/"),
    description: siteData.description,
    inLanguage: "en",

    creator:
      createPersonReference(),

    publisher:
      createPersonReference(),
  };
}

export function createProfilePageStructuredData(
  socials:
    readonly StructuredDataSocial[],
): StructuredData {
  const sameAs = socials
    .filter(
      (social) =>
        social.external &&
        (
          social.id === "linkedin" ||
          social.id === "github"
        ),
    )
    .map((social) => social.href);

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id":
      `${PROFILE_PAGE_URL}#profile-page`,

    url: PROFILE_PAGE_URL,

    name:
      `${siteData.name} — Profile`,

    description:
      `Professional profile, background, capabilities, and current direction of ${siteData.name}.`,

    inLanguage: "en",

    isPartOf: {
      "@id": WEBSITE_ID,
    },

    mainEntity: {
      ...createPersonReference(),

      jobTitle: siteData.role,

      homeLocation: {
        "@type": "Place",
        name: siteData.location,
      },

      sameAs,
    },
  };
}

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