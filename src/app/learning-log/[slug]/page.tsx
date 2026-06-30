// src/app/learning-log/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  MainContent,
} from "@/components/layout/main-content";

import {
  getLearningLogBySlug,
  getPublishedLearningLogs,
  getPublishedLearningLogSlugs,
} from "@/lib/content/get-learning-logs";

import {
  LearningLogDetail,
} from "@/components/learning-log/learning-log-detail";

import {
  createPageMetadata,
} from "@/lib/metadata/create-page-metadata";

import {
  getLearningLogNavigation,
} from "@/lib/content/learning-log-navigation";

import {
  getRelatedLearningLogs,
} from "@/lib/content/learning-log-related";

import {
  JsonLd,
} from "@/components/seo/json-ld";

import {
  createLearningLogStructuredData,
} from "@/lib/metadata/structured-data";

import type {
  LearningLog,
} from "@/types/learning-log";

type LearningLogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedLearningLogSlugs().map(
    (slug) => ({
      slug,
    }),
  );
}

async function getLearningLogFromParams(
  params:
    LearningLogDetailPageProps["params"],
): Promise<LearningLog> {
  const { slug } = await params;

  const learningLog =
    getLearningLogBySlug(slug);

  if (!learningLog) {
    notFound();
  }

  return learningLog;
}

export async function generateMetadata({
  params,
}: LearningLogDetailPageProps): Promise<Metadata> {
  const learningLog =
    await getLearningLogFromParams(params);

  const title =
    `${learningLog.title} — Learning Log | Fajar Works`;

  const loggedTime =
    `${learningLog.loggedAt}T00:00:00.000Z`;

  const modifiedTime =
    learningLog.updatedAt
      ? `${learningLog.updatedAt}T00:00:00.000Z`
      : loggedTime;

  return createPageMetadata({
    title,
    description: learningLog.excerpt,
    pathname:
      `/learning-log/${learningLog.slug}`,
    absoluteTitle: true,
    openGraphType: "article",
    article: {
      publishedTime: loggedTime,
      modifiedTime,
      tags: learningLog.topics,
    },
  });
}

export default async function LearningLogDetailPage({
  params,
}: LearningLogDetailPageProps) {
  const learningLog =
    await getLearningLogFromParams(
      params,
    );

  const learningLogStructuredData =
    createLearningLogStructuredData(
      learningLog,
    );

  const publishedLearningLogs =
    getPublishedLearningLogs();

  const relatedLearningLogs =
    getRelatedLearningLogs(
      publishedLearningLogs,
      learningLog.slug,
      2,
    );

  const navigation =
    getLearningLogNavigation(
      publishedLearningLogs,
      learningLog.slug,
    );

  return (
    <>
      <JsonLd
        data={
          learningLogStructuredData
        }
      />

      <MainContent>
        <LearningLogDetail
          learningLog={learningLog}
          relatedLearningLogs={
            relatedLearningLogs
          }
          navigation={navigation}
        />
      </MainContent>
    </>
  );
}
