// src/components/learning-log/
// learning-log-preview/
// learning-log-preview-progress.tsx

import type {
  LearningLog,
} from "@/types/learning-log";

type LearningLogPreviewProgressProps = {
  progress: LearningLog["progress"];
};

export function LearningLogPreviewProgress({
  progress,
}: LearningLogPreviewProgressProps) {
  return (
    <dl
      className="
        mt-6
        grid
        border-y
        border-line
        sm:grid-cols-[8rem_minmax(0,1fr)]
      "
    >
      <dt
        className="
          type-label
          border-b
          border-line
          py-4
          text-muted
          sm:border-r
          sm:border-b-0
          sm:pr-4
        "
      >
        Progress
      </dt>

      <dd
        className="
          py-4
          font-mono
          text-xs
          font-medium
          tracking-[0.06em]
          uppercase
          sm:pl-4
        "
      >
        {progress}
      </dd>
    </dl>
  );
}