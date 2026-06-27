// src/lib/content/learning-log-related/
// learning-log-related-sort.ts

import type {
  ScoredLearningLog,
} from "./learning-log-related.types";

export function compareScoredLearningLogs(
  firstItem: ScoredLearningLog,
  secondItem: ScoredLearningLog,
): number {
  const scoreComparison =
    secondItem.score -
    firstItem.score;

  if (scoreComparison !== 0) {
    return scoreComparison;
  }

  const dateComparison =
    secondItem.learningLog.loggedAt
      .localeCompare(
        firstItem.learningLog.loggedAt,
      );

  if (dateComparison !== 0) {
    return dateComparison;
  }

  return firstItem.learningLog.slug
    .localeCompare(
      secondItem.learningLog.slug,
    );
}