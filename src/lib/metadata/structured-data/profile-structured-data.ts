// src/lib/metadata/structured-data/
// profile-structured-data.ts

import {
  createPersonReference,
  PROFILE_PAGE_URL,
  siteData,
  WEBSITE_ID,
} from "./structured-data.shared";

import type {
  StructuredData,
  StructuredDataSocial,
} from "./structured-data.types";

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
    .map((social) => {
      return social.href;
    });

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