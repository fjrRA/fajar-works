import Link from "next/link";

import type {
  RelatedLearningLogItem,
} from "@/lib/content/learning-log-related";
import {
  formatContentDate,
} from "@/lib/utils/format-content-date";

type LearningLogRelatedCardProps = {
  learningLog:
    RelatedLearningLogItem;
  displayIndex: string;
  relationshipLabel: string;
};

export function LearningLogRelatedCard({
  learningLog,
  displayIndex,
  relationshipLabel,
}: LearningLogRelatedCardProps) {
  return (
    <article
      className="
        flex
        min-w-0
        border-b
        border-line
        even:bg-panel
        md:border-r
        md:last:border-r-0
      "
    >
      <Link
        href={`/learning-log/${learningLog.slug}`}
        data-related-learning-log-slug={
          learningLog.slug
        }
        className="
          group
          flex
          flex-1
          min-h-[27rem]
          min-w-0
          flex-col
          px-6
          py-8
          transition-colors
          duration-150
          hover:bg-panel-strong
          focus-visible:outline-2
          focus-visible:-outline-offset-2
          focus-visible:outline-accent
          md:px-8
          lg:px-10
          lg:py-10
        "
      >
        <header
          className="
            flex
            items-start
            justify-between
            gap-5
          "
        >
          <span
            className="
              bg-ink
              px-3
              py-2
              font-mono
              text-[0.625rem]
              font-semibold
              tracking-[0.12em]
              text-inverse
              uppercase
            "
          >
            {relationshipLabel}
          </span>

          <div className="text-right">
            <p className="type-label text-muted">
              {displayIndex}
            </p>

            <time
              className="type-meta mt-2 block text-muted uppercase"
              dateTime={learningLog.loggedAt}
            >
              {formatContentDate(
                learningLog.loggedAt,
              )}
            </time>
          </div>
        </header>

        <div className="mt-12">
          <p
            className="
              flex
              items-center
              gap-3
              type-meta
              text-accent
              uppercase
            "
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 bg-accent"
            />

            {learningLog.status}
          </p>

          <h3
            className="
              mt-4
              max-w-xl
              wrap-break-word
              text-[clamp(1.75rem,3vw,2.75rem)]
              leading-[1.02]
              font-semibold
              tracking-[-0.045em]
              transition-colors
              duration-150
              group-hover:text-accent-strong
            "
          >
            {learningLog.title}
          </h3>

          <p className="type-body mt-5 max-w-xl text-muted">
            {learningLog.excerpt}
          </p>
        </div>

        <footer className="mt-auto pt-10">
          <div
            className="
              grid
              gap-3
              border-t
              border-line
              pt-5
              font-mono
              text-[0.6875rem]
              leading-5
              text-muted
              uppercase
              sm:grid-cols-[5rem_minmax(0,1fr)]
            "
          >
            <span>Source</span>
            <span>{learningLog.source}</span>

            <span>Module</span>
            <span>{learningLog.module}</span>
          </div>

          <p
            className="
              mt-7
              flex
              items-center
              justify-between
              gap-6
              font-mono
              text-xs
              font-semibold
              tracking-widest
              uppercase
            "
          >
            Open Record

            <span
              aria-hidden="true"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                border
                border-ink
                transition-colors
                group-hover:bg-ink
                group-hover:text-inverse
              "
            >
              →
            </span>
          </p>
        </footer>
      </Link>
    </article>
  );
}
