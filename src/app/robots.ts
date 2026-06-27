// src/app/robots.ts

import type {
  MetadataRoute,
} from "next";

import {
  createAbsoluteUrl,
  SITE_ORIGIN,
} from "@/lib/metadata/site-url";

export default function robots():
  MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap:
      createAbsoluteUrl(
        "/sitemap.xml",
      ),

    host: SITE_ORIGIN,
  };
}