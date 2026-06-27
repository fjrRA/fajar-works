// src/components/learning-log/
// learning-log-detail/
// learning-log-related-logs.tsx

import {
  SectionHeading,
} from "@/components/ui/section-heading";

import {
  SectionLabel,
} from "@/components/ui/section-label";

import type {
  RelatedLearningLogItem,
} from "@/lib/content/learning-log-related";

import {
  LearningLogRelatedCard,
} from "./learning-log-related-card";

type LearningLogRelatedLogsProps = {
  learningLogs:
  readonly RelatedLearningLogItem[];
};

const RELATED_LEARNING_LOGS_HEADING_ID =
  "related-learning-logs-heading";

function getRelatedLogsGridClassName(
  learningLogCount: number,
): string {
  if (learningLogCount === 1) {
    return "grid";
  }

  if (learningLogCount === 2) {
    return "grid md:grid-cols-2";
  }

  return `
    grid
    md:grid-cols-2
    xl:grid-cols-3
  `;
}

export function LearningLogRelatedLogs({
  learningLogs,
}: LearningLogRelatedLogsProps) {
  if (learningLogs.length === 0) {
    return null;
  }

  const gridClassName =
    getRelatedLogsGridClassName(
      learningLogs.length,
    );

  return (
    <section
      aria-labelledby={
        RELATED_LEARNING_LOGS_HEADING_ID
      }
      className="border-t border-line"
    >
      <header
        className="
          grid
          gap-6
          border-b
          border-line
          px-6
          py-10
          md:px-8
          lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.38fr)]
          lg:px-10
          lg:py-12
        "
      >
        <div>
          <SectionLabel index="03">
            Continue Learning
          </SectionLabel>

          <SectionHeading
            id={
              RELATED_LEARNING_LOGS_HEADING_ID
            }
            className="mt-3"
          >
            Related Learning Logs
          </SectionHeading>
        </div>

        <p className="type-body max-w-md text-muted lg:justify-self-end">
          More learning records connected
          through source, category, module,
          or shared technical topics.
        </p>
      </header>

      <div className={gridClassName}>
        {learningLogs.map(
          (learningLog, index) => (
            <LearningLogRelatedCard
              key={learningLog.slug}
              learningLog={
                learningLog
              }
              displayIndex={String(
                index + 1,
              ).padStart(2, "0")}
            />
          ),
        )}
      </div>
    </section>
  );
}