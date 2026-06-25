// src/lib/content/learning-logs/learning-log.constants.ts
import path from "node:path";

import type { LearningLogStatus } from "@/types/learning-log";

export const LEARNING_LOGS_DIRECTORY =
  path.join(
    process.cwd(),
    "content",
    "learning-logs",
  );

export const LEARNING_LOG_STATUSES = [
  "Completed",
  "In Progress",
  "Paused",
] as const satisfies readonly LearningLogStatus[];