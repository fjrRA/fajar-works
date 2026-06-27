// src/lib/metadata/
// create-page-metadata.ts

import type {
  Metadata,
} from "next";

import siteData from "../../../content/site.json";

type PageOpenGraphType =
  | "website"
  | "article";

type ArticleMetadataOptions = {
  publishedTime?: string;
  modifiedTime?: string;
  tags?: readonly string[];
};

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
  absoluteTitle?: boolean;
  openGraphType?: PageOpenGraphType;
  article?: ArticleMetadataOptions;
};

export function createPageMetadata({
  title,
  description,
  pathname,
  absoluteTitle = false,
  openGraphType = "website",
  article,
}: CreatePageMetadataOptions): Metadata {
  const sharedOpenGraph = {
    title,
    description,
    url: pathname,
    siteName: siteData.siteName,
    locale: "en_US",
  };

  const openGraph: Metadata["openGraph"] =
    openGraphType === "article"
      ? {
        ...sharedOpenGraph,
        type: "article",
        publishedTime:
          article?.publishedTime,
        modifiedTime:
          article?.modifiedTime,
        tags: article?.tags
          ? [...article.tags]
          : undefined,
      }
      : {
        ...sharedOpenGraph,
        type: "website",
      };

  return {
    title: absoluteTitle
      ? {
        absolute: title,
      }
      : title,

    description,

    alternates: {
      canonical: pathname,
    },

    openGraph,

    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}