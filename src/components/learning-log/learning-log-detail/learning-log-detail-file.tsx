// src/components/learning-log/
// learning-log-detail/
// learning-log-detail-file.tsx

import type {
  LearningLog,
} from "@/types/learning-log";

import {
  LearningLogDetailMetadata,
} from "./learning-log-detail-metadata";

import {
  LearningLogDetailTopics,
} from "./learning-log-detail-topics";

type LearningLogDetailFileProps = {
  learningLog: Pick<
    LearningLog,
    | "loggedAt"
    | "updatedAt"
    | "status"
    | "source"
    | "module"
    | "progress"
    | "topics"
  >;
};

export function LearningLogDetailFile({
  learningLog,
}: LearningLogDetailFileProps) {
  return (
    <aside
      aria-label="Learning Log information"
      className="
        flex
        min-w-0
        flex-col
        justify-between
        gap-12
        px-6
        py-10
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
      "
    >
      <LearningLogDetailMetadata
        learningLog={learningLog}
      />

      <LearningLogDetailTopics
        topics={learningLog.topics}
      />
    </aside>
  );
}