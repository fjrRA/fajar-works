// src/components/learning-log/learning-log-preview.tsx
import { cn } from "@/lib/utils/cn";
import { formatContentDate } from "@/lib/utils/format-content-date";
import type { LearningLog } from "@/types/learning-log";

type LearningLogPreviewProps = {
  learningLog: LearningLog;
  displayIndex: string;
};

export function LearningLogPreview({
  learningLog,
  displayIndex,
}: LearningLogPreviewProps) {
  const isInProgress =
    learningLog.status === "In Progress";

  const isPaused =
    learningLog.status === "Paused";

  return (
    <article
      className="
        grid
        gap-6
        px-6
        py-8
        md:grid-cols-[3rem_minmax(0,1fr)]
        md:px-8
        lg:px-10
        lg:py-10
      "
    >
      <p className="type-label text-muted">
        {displayIndex}
      </p>

      <div className="min-w-0">
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

            <span className="text-line">/</span>

            <span
              className={cn(
                isInProgress && "text-accent",
                isPaused && "text-muted",
                !isInProgress &&
                !isPaused &&
                "text-ink",
              )}
            >
              {learningLog.status}
            </span>
          </div>
        </div>

        <p
          className="
            mt-5
            font-mono
            text-xs
            leading-6
            tracking-[0.06em]
            text-muted
            uppercase
          "
        >
          {learningLog.source}
          <span className="mx-2 text-line">
            /
          </span>
          {learningLog.module}
        </p>

        <p className="type-body mt-6 max-w-2xl text-muted">
          {learningLog.excerpt}
        </p>

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
            {learningLog.progress}
          </dd>
        </dl>

        <p
          className="
            mt-6
            font-mono
            text-xs
            leading-6
            tracking-[0.06em]
            text-muted
            uppercase
          "
          aria-label={`Topics: ${learningLog.topics.join(
            ", ",
          )}`}
        >
          {learningLog.topics.join(" / ")}
        </p>
      </div>
    </article>
  );
}