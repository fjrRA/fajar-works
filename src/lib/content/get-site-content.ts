// src/lib/content/get-site-content.ts

import siteData from "../../../content/site.json";

import type {
  SiteContent,
} from "@/types/site";

export function getSiteContent():
  SiteContent {
  return siteData as SiteContent;
}