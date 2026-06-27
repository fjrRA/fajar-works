// src/lib/content/learning-log-related/
// learning-log-related.types.ts

import type {
  LearningLog,
} from "@/types/learning-log";

export type RelatedLearningLogItem =
  Readonly<
    Pick<
      LearningLog,
      | "slug"
      | "title"
      | "excerpt"
      | "loggedAt"
      | "status"
      | "category"
      | "source"
      | "module"
    >
  >;

export type ScoredLearningLog =
  Readonly<{
    learningLog: LearningLog;
    score: number;
  }>;