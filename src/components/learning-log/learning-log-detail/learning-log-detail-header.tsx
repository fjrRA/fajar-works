// src/components/learning-log/
// learning-log-detail/
// learning-log-detail-header.tsx

import type {
  LearningLog,
} from "@/types/learning-log";

import {
  LearningLogDetailFile,
} from "./learning-log-detail-file";

import {
  LearningLogDetailIntro,
} from "./learning-log-detail-intro";

type LearningLogDetailHeaderProps = {
  learningLog: LearningLog;
  headingId: string;
};

export function LearningLogDetailHeader({
  learningLog,
  headingId,
}: LearningLogDetailHeaderProps) {
  return (
    <header
      className="
        grid
        border-b
        border-line
        lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]
      "
    >
      <LearningLogDetailIntro
        learningLog={learningLog}
        headingId={headingId}
      />

      <LearningLogDetailFile
        learningLog={learningLog}
      />
    </header>
  );
}