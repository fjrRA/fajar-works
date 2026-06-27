// src/lib/content/learning-log-related/
// learning-log-related-item.ts

import type {
  LearningLog,
} from "@/types/learning-log";

import type {
  RelatedLearningLogItem,
} from "./learning-log-related.types";

export function toRelatedLearningLogItem(
  learningLog: LearningLog,
): RelatedLearningLogItem {
  return {
    slug: learningLog.slug,
    title: learningLog.title,
    excerpt: learningLog.excerpt,
    loggedAt: learningLog.loggedAt,
    status: learningLog.status,
    category: learningLog.category,
    source: learningLog.source,
    module: learningLog.module,
  };
}