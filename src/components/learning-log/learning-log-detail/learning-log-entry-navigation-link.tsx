// src/components/learning-log/
// learning-log-detail/
// learning-log-entry-navigation-link.tsx

import Link from "next/link";

import type {
  LearningLogNavigationItem,
} from "@/lib/content/learning-log-navigation";

import {
  formatContentDate,
} from "@/lib/utils/format-content-date";

type LearningLogEntryNavigationLinkProps = {
  learningLog:
  LearningLogNavigationItem;
  direction: "newer" | "older";
};

export function LearningLogEntryNavigationLink({
  learningLog,
  direction,
}: LearningLogEntryNavigationLinkProps) {
  const isNewer =
    direction === "newer";

  return (
    <Link
      href={`/learning-log/${learningLog.slug}`}
      className={`
        group
        flex
        min-h-56
        min-w-0
        flex-col
        justify-between
        gap-10
        px-6
        py-8
        transition-colors
        duration-150
        hover:bg-panel
        focus-visible:outline-2
        focus-visible:-outline-offset-2
        focus-visible:outline-accent
        md:px-8
        lg:px-10
        lg:py-10
        ${isNewer
          ? `
              border-b
              border-line
              md:border-r
              md:border-b-0
            `
          : ""
        }
      `}
    >
      <div
        className={`
          flex
          items-center
          gap-3
          font-mono
          text-xs
          font-semibold
          tracking-widest
          text-accent
          uppercase
          ${isNewer
            ? ""
            : "justify-end"
          }
        `}
      >
        {isNewer ? (
          <>
            <span
              aria-hidden="true"
              className="
                inline-block
                transition-transform
                duration-200
                group-hover:-translate-x-1
                motion-reduce:transition-none
              "
            >
              ←
            </span>

            Newer Log
          </>
        ) : (
          <>
            Older Log

            <span
              aria-hidden="true"
              className="
                inline-block
                transition-transform
                duration-200
                group-hover:translate-x-1
                motion-reduce:transition-none
              "
            >
              →
            </span>
          </>
        )}
      </div>

      <div
        className={
          isNewer
            ? ""
            : "text-right"
        }
      >
        <p className="type-meta text-muted uppercase">
          {learningLog.category}

          <span
            aria-hidden="true"
            className="mx-2 text-line"
          >
            /
          </span>

          <time
            dateTime={
              learningLog.loggedAt
            }
          >
            {formatContentDate(
              learningLog.loggedAt,
            )}
          </time>
        </p>

        <h2
          className="
            mt-4
            wrap-break-word
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
        </h2>
      </div>
    </Link>
  );
}