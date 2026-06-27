// src/lib/metadata/structured-data/
// structured-data.shared.ts

import siteData from "../../../../content/site.json";

import {
  createAbsoluteUrl,
} from "../site-url";

import type {
  StructuredData,
} from "./structured-data.types";

export { siteData };

export const WEBSITE_ID =
  createAbsoluteUrl("/#website");

export const PROFILE_PAGE_URL =
  createAbsoluteUrl("/about");

const PERSON_ID =
  `${PROFILE_PAGE_URL}#person`;

export function createPersonReference():
  StructuredData {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteData.name,
    url: PROFILE_PAGE_URL,
  };
}

export function resolveImageUrl(
  image: string | undefined,
): string | undefined {
  if (!image) {
    return undefined;
  }

  return createAbsoluteUrl(image);
}