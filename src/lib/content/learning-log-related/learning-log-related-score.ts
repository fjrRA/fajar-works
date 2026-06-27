// src/lib/content/learning-log-related/
// learning-log-related-score.ts

import type {
  LearningLog,
} from "@/types/learning-log";

import {
  LEARNING_LOG_RELATED_WEIGHTS,
} from "./learning-log-related.constants";

function normalizeValue(
  value: string,
): string {
  return value.trim().toLowerCase();
}

function countSharedTopics(
  currentLearningLog: LearningLog,
  candidateLearningLog: LearningLog,
): number {
  const currentTopics = new Set(
    currentLearningLog.topics.map(
      normalizeValue,
    ),
  );

  return candidateLearningLog.topics.filter(
    (topic) => {
      return currentTopics.has(
        normalizeValue(topic),
      );
    },
  ).length;
}

export function calculateLearningLogRelatedScore(
  currentLearningLog: LearningLog,
  candidateLearningLog: LearningLog,
): number {
  let score = 0;

  const hasSameSource =
    normalizeValue(
      currentLearningLog.source,
    ) ===
    normalizeValue(
      candidateLearningLog.source,
    );

  if (hasSameSource) {
    score +=
      LEARNING_LOG_RELATED_WEIGHTS.source;
  }

  const hasSameCategory =
    normalizeValue(
      currentLearningLog.category,
    ) ===
    normalizeValue(
      candidateLearningLog.category,
    );

  if (hasSameCategory) {
    score +=
      LEARNING_LOG_RELATED_WEIGHTS.category;
  }

  const hasSameModule =
    normalizeValue(
      currentLearningLog.module,
    ) ===
    normalizeValue(
      candidateLearningLog.module,
    );

  if (hasSameModule) {
    score +=
      LEARNING_LOG_RELATED_WEIGHTS.module;
  }

  const sharedTopicCount =
    countSharedTopics(
      currentLearningLog,
      candidateLearningLog,
    );

  score +=
    sharedTopicCount *
    LEARNING_LOG_RELATED_WEIGHTS.sharedTopic;

  return score;
}