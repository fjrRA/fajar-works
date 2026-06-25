// src/components/home/home-learning-progress.tsx
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { LearningLogPreview } from "@/components/learning-log/learning-log-preview";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import type {
  HomeLearningProgressContent,
} from "@/types/home";
import type { LearningLog } from "@/types/learning-log";

type HomeLearningProgressProps = {
  content: HomeLearningProgressContent;
  learningLogs: LearningLog[];
};

export function HomeLearningProgress({
  content,
  learningLogs,
}: HomeLearningProgressProps) {
  return (
    <section className="border-b border-line">
      <Container>
        <div
          className="
            grid
            border-x
            border-line
            lg:grid-cols-[minmax(16rem,0.42fr)_minmax(0,1fr)]
          "
        >
          <header
            className="
              section-block
              border-b
              border-line
              px-6
              md:px-8
              lg:border-r
              lg:border-b-0
              lg:px-10
            "
          >
            <SectionLabel index="04">
              Learning Log
            </SectionLabel>

            <SectionHeading className="mt-3">
              {content.heading}
            </SectionHeading>

            <p className="type-body mt-6 max-w-md text-muted">
              {content.description}
            </p>

            <Link
              href={content.allLogsHref}
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-4
                border-b
                border-ink
                pb-2
                font-mono
                text-xs
                font-semibold
                tracking-[0.1em]
                uppercase
                transition-colors
                duration-150
                hover:border-accent
                hover:text-accent
              "
            >
              {content.allLogsLabel} / 03

              <span
                aria-hidden="true"
                className="
                  h-px
                  w-8
                  bg-current
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                  motion-reduce:transition-none
                "
              />
            </Link>
          </header>

          {learningLogs.length > 0 ? (
            <ol>
              {learningLogs.map(
                (learningLog, index) => (
                  <li
                    key={learningLog.slug}
                    className="
                      border-b
                      border-line
                      last:border-b-0
                    "
                  >
                    <LearningLogPreview
                      learningLog={learningLog}
                      displayIndex={String(
                        index + 1,
                      ).padStart(2, "0")}
                    />
                  </li>
                ),
              )}
            </ol>
          ) : (
            <div className="px-6 py-12 md:px-8 lg:px-10">
              <p className="type-label text-muted">
                No Published Learning Logs
              </p>

              <p className="type-body mt-4 max-w-lg text-muted">
                Published learning records will
                appear here after they are added
                to the content directory.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}