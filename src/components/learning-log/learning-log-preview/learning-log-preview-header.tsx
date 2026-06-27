// src/components/learning-log/
// learning-log-preview/
// learning-log-preview-header.tsx

import { cn } from "@/lib/utils/cn";
import {
  formatContentDate,
} from "@/lib/utils/format-content-date";

import type {
  LearningLog,
} from "@/types/learning-log";

type LearningLogPreviewHeaderProps = {
  learningLog: Pick<
    LearningLog,
    | "category"
    | "title"
    | "loggedAt"
    | "status"
  >;
};

function getStatusClassName(
  status: LearningLog["status"],
): string {
  switch (status) {
    case "In Progress":
      return "text-accent";

    case "Paused":
      return "text-muted";

    default:
      return "text-ink";
  }
}

export function LearningLogPreviewHeader({
  learningLog,
}: LearningLogPreviewHeaderProps) {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        sm:flex-row
        sm:items-start
        sm:justify-between
      "
    >
      <div className="min-w-0">
        <p className="type-meta text-accent uppercase">
          {learningLog.category}
        </p>

        <h3
          className="
            mt-3
            max-w-3xl
            text-balance
            text-2xl
            leading-[1.02]
            font-semibold
            tracking-[-0.035em]
            uppercase
            transition-colors
            duration-150
            group-hover:text-accent-strong
            md:text-3xl
          "
        >
          {learningLog.title}
        </h3>
      </div>

      <div
        className="
          flex
          shrink-0
          items-center
          gap-3
          font-mono
          text-xs
          uppercase
        "
      >
        <time
          dateTime={learningLog.loggedAt}
          className="text-muted"
        >
          {formatContentDate(
            learningLog.loggedAt,
          )}
        </time>

        <span
          aria-hidden="true"
          className="text-line"
        >
          /
        </span>

        <span
          className={cn(
            getStatusClassName(
              learningLog.status,
            ),
          )}
        >
          {learningLog.status}
        </span>
      </div>
    </div>
  );
}