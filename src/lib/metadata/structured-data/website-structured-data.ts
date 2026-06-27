// src/lib/metadata/structured-data/
// website-structured-data.ts

import {
  createAbsoluteUrl,
} from "../site-url";

import {
  createPersonReference,
  siteData,
  WEBSITE_ID,
} from "./structured-data.shared";

import type {
  StructuredData,
} from "./structured-data.types";

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