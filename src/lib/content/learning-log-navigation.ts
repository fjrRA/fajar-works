// src/lib/content/learning-log-navigation.ts

import type {
  LearningLog,
} from "@/types/learning-log";

export type LearningLogNavigationItem =
  Readonly<
    Pick<
      LearningLog,
      | "slug"
      | "title"
      | "loggedAt"
      | "category"
    >
  >;

export type LearningLogNavigation =
  Readonly<{
    newer:
    | LearningLogNavigationItem
    | null;
    older:
    | LearningLogNavigationItem
    | null;
  }>;

function toNavigationItem(
  learningLog: LearningLog,
): LearningLogNavigationItem {
  return {
    slug: learningLog.slug,
    title: learningLog.title,
    loggedAt: learningLog.loggedAt,
    category: learningLog.category,
  };
}

export function getLearningLogNavigation(
  publishedLearningLogs:
    readonly LearningLog[],
  currentLearningLogSlug: string,
): LearningLogNavigation {
  const currentIndex =
    publishedLearningLogs.findIndex(
      (learningLog) => {
        return (
          learningLog.slug ===
          currentLearningLogSlug
        );
      },
    );

  if (currentIndex === -1) {
    throw new Error(
      `Cannot find current Learning Log "${currentLearningLogSlug}" when creating chronological navigation.`,
    );
  }

  /*
   * Repository mengurutkan Learning Log
   * dari yang terbaru menuju yang lama.
   *
   * Index lebih kecil = lebih baru.
   * Index lebih besar = lebih lama.
   */
  const newerLearningLog =
    currentIndex > 0
      ? publishedLearningLogs[
      currentIndex - 1
      ]
      : undefined;

  const olderLearningLog =
    currentIndex <
      publishedLearningLogs.length - 1
      ? publishedLearningLogs[
      currentIndex + 1
      ]
      : undefined;

  return {
    newer: newerLearningLog
      ? toNavigationItem(
        newerLearningLog,
      )
      : null,

    older: olderLearningLog
      ? toNavigationItem(
        olderLearningLog,
      )
      : null,
  };
}