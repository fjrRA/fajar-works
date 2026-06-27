// src/lib/content/learning-log-related.ts

import type {
  LearningLog,
} from "@/types/learning-log";

import {
  toRelatedLearningLogItem,
} from "./learning-log-related/learning-log-related-item";

import {
  calculateLearningLogRelatedScore,
} from "./learning-log-related/learning-log-related-score";

import {
  compareScoredLearningLogs,
} from "./learning-log-related/learning-log-related-sort";

import type {
  RelatedLearningLogItem,
  ScoredLearningLog,
} from "./learning-log-related/learning-log-related.types";

export type {
  RelatedLearningLogItem,
} from "./learning-log-related/learning-log-related.types";

function validateRelatedLearningLogLimit(
  limit: number,
): void {
  if (
    !Number.isInteger(limit) ||
    limit < 0
  ) {
    throw new Error(
      "Related learning logs limit must be a non-negative integer.",
    );
  }
}

function findCurrentLearningLog(
  publishedLearningLogs:
    readonly LearningLog[],
  currentLearningLogSlug: string,
): LearningLog {
  const currentLearningLog =
    publishedLearningLogs.find(
      (learningLog) => {
        return (
          learningLog.slug ===
          currentLearningLogSlug
        );
      },
    );

  if (!currentLearningLog) {
    throw new Error(
      `Cannot find current Learning Log "${currentLearningLogSlug}" when creating related content.`,
    );
  }

  return currentLearningLog;
}

function createScoredLearningLogs(
  publishedLearningLogs:
    readonly LearningLog[],
  currentLearningLog: LearningLog,
): ScoredLearningLog[] {
  return publishedLearningLogs
    .filter((learningLog) => {
      return (
        learningLog.slug !==
        currentLearningLog.slug
      );
    })
    .map((learningLog) => {
      return {
        learningLog,
        score:
          calculateLearningLogRelatedScore(
            currentLearningLog,
            learningLog,
          ),
      };
    })
    .sort(compareScoredLearningLogs);
}

function prioritizeDirectlyRelatedLogs(
  scoredLearningLogs:
    readonly ScoredLearningLog[],
): ScoredLearningLog[] {
  const directlyRelated =
    scoredLearningLogs.filter(
      (item) => {
        return item.score > 0;
      },
    );

  const fallbackLearningLogs =
    scoredLearningLogs.filter(
      (item) => {
        return item.score === 0;
      },
    );

  return [
    ...directlyRelated,
    ...fallbackLearningLogs,
  ];
}

export function getRelatedLearningLogs(
  publishedLearningLogs:
    readonly LearningLog[],
  currentLearningLogSlug: string,
  limit = 3,
): RelatedLearningLogItem[] {
  validateRelatedLearningLogLimit(
    limit,
  );

  const currentLearningLog =
    findCurrentLearningLog(
      publishedLearningLogs,
      currentLearningLogSlug,
    );

  const scoredLearningLogs =
    createScoredLearningLogs(
      publishedLearningLogs,
      currentLearningLog,
    );

  const prioritizedLearningLogs =
    prioritizeDirectlyRelatedLogs(
      scoredLearningLogs,
    );

  return prioritizedLearningLogs
    .slice(0, limit)
    .map(({ learningLog }) => {
      return toRelatedLearningLogItem(
        learningLog,
      );
    });
}