// src/components/learning-log/learning-log-index.tsx

import { Container } from "@/components/layout/container";

import type { LearningLog } from "@/types/learning-log";

import {
  LearningLogEmptyState,
} from "./learning-log-empty-state";

import {
  LearningLogIndexHeader,
} from "./learning-log-index-header";

import {
  LearningLogPreview,
} from "./learning-log-preview";

type LearningLogIndexProps = {
  learningLogs: readonly LearningLog[];
};

const LEARNING_LOG_INDEX_HEADING_ID =
  "learning-log-index-heading";

export function LearningLogIndex({
  learningLogs,
}: LearningLogIndexProps) {
  return (
    <section
      aria-labelledby={
        LEARNING_LOG_INDEX_HEADING_ID
      }
      className="border-b border-line"
    >
      <Container>
        <div
          className="
            min-w-0
            border-x
            border-line
          "
        >
          <LearningLogIndexHeader
            headingId={
              LEARNING_LOG_INDEX_HEADING_ID
            }
            learningLogCount={
              learningLogs.length
            }
          />

          {learningLogs.length > 0 ? (
            <div className="divide-y divide-line">
              {learningLogs.map(
                (learningLog, index) => (
                  <LearningLogPreview
                    key={learningLog.slug}
                    learningLog={learningLog}
                    displayIndex={String(
                      index + 1,
                    ).padStart(2, "0")}
                  />
                ),
              )}
            </div>
          ) : (
            <LearningLogEmptyState />
          )}
        </div>
      </Container>
    </section>
  );
}