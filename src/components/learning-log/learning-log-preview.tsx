// src/components/learning-log/
// learning-log-preview.tsx

import Link from "next/link";

import type {
  LearningLog,
} from "@/types/learning-log";

import {
  LearningLogPreviewHeader,
} from "./learning-log-preview/learning-log-preview-header";

import {
  LearningLogPreviewProgress,
} from "./learning-log-preview/learning-log-preview-progress";

import {
  LearningLogPreviewTopics,
} from "./learning-log-preview/learning-log-preview-topics";

type LearningLogPreviewProps = {
  learningLog: LearningLog;
  displayIndex: string;
};

export function LearningLogPreview({
  learningLog,
  displayIndex,
}: LearningLogPreviewProps) {
  return (
    <article
      data-learning-log-slug={
        learningLog.slug
      }
      data-logged-at={
        learningLog.loggedAt
      }
    >
      <Link
        href={`/learning-log/${learningLog.slug}`}
        className="
          group
          grid
          min-w-0
          gap-6
          px-6
          py-8
          transition-colors
          duration-150
          hover:bg-panel
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:-outline-offset-2
          focus-visible:outline-accent
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
          <LearningLogPreviewHeader
            learningLog={learningLog}
          />

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

            <span
              aria-hidden="true"
              className="mx-2 text-line"
            >
              /
            </span>

            {learningLog.module}
          </p>

          <p className="type-body mt-6 max-w-2xl text-muted">
            {learningLog.excerpt}
          </p>

          <LearningLogPreviewProgress
            progress={learningLog.progress}
          />

          <LearningLogPreviewTopics
            topics={learningLog.topics}
          />

          <p
            className="
              mt-6
              font-mono
              text-xs
              font-semibold
              tracking-widest
              text-accent
              uppercase
            "
          >
            Read Learning Log

            <span
              aria-hidden="true"
              className="
                ml-3
                inline-block
                transition-transform
                duration-200
                group-hover:translate-x-1
                motion-reduce:transition-none
              "
            >
              →
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}