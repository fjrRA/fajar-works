// src/lib/content/learning-logs/learning-log.repository.ts
import fs from "node:fs";

import type { LearningLog } from "@/types/learning-log";

import { LEARNING_LOGS_DIRECTORY } from "./learning-log.constants";
import { parseLearningLogFile } from "./parse-learning-log-file";

function validateLimit(limit: number) {
  if (
    !Number.isInteger(limit) ||
    limit < 1
  ) {
    throw new Error(
      "Latest learning logs limit must be a positive integer.",
    );
  }
}

function sortByNewest(
  firstLog: LearningLog,
  secondLog: LearningLog,
) {
  const dateComparison =
    secondLog.loggedAt.localeCompare(
      firstLog.loggedAt,
    );

  if (dateComparison !== 0) {
    return dateComparison;
  }

  return firstLog.slug.localeCompare(
    secondLog.slug,
  );
}

export function getAllLearningLogs():
  LearningLog[] {
  if (!fs.existsSync(LEARNING_LOGS_DIRECTORY)) {
    return [];
  }

  const learningLogFiles = fs
    .readdirSync(LEARNING_LOGS_DIRECTORY)
    .filter((fileName) =>
      fileName.endsWith(".md"),
    )
    .sort((firstFile, secondFile) =>
      firstFile.localeCompare(secondFile),
    );

  return learningLogFiles.map(
    parseLearningLogFile,
  );
}

export function getPublishedLearningLogs():
  LearningLog[] {
  return getAllLearningLogs()
    .filter((learningLog) => {
      return learningLog.published;
    })
    .sort(sortByNewest);
}

export function getLatestLearningLogs(
  limit: number,
): LearningLog[] {
  validateLimit(limit);

  return getPublishedLearningLogs().slice(
    0,
    limit,
  );
}