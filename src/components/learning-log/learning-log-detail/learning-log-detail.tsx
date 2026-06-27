// src/components/learning-log/
// learning-log-detail/
// learning-log-detail.tsx

import {
  Container,
} from "@/components/layout/container";

import {
  extractLearningLogHeadings,
} from "@/lib/content/learning-log-headings";

import type {
  LearningLog,
} from "@/types/learning-log";

import {
  LearningLogDetailHeader,
} from "./learning-log-detail-header";

import {
  LearningLogMarkdown,
} from "./learning-log-markdown";

import {
  LearningLogTableOfContents,
} from "./learning-log-table-of-contents";

type LearningLogDetailProps = {
  learningLog: LearningLog;

  relatedLearningLogs:
  readonly RelatedLearningLogItem[];

  navigation:
  LearningLogNavigation;
};

import type {
  LearningLogNavigation,
} from "@/lib/content/learning-log-navigation";

import type {
  RelatedLearningLogItem,
} from "@/lib/content/learning-log-related";

import {
  LearningLogEntryNavigation,
} from "./learning-log-entry-navigation";

import {
  LearningLogRelatedLogs,
} from "./learning-log-related-logs";

const LEARNING_LOG_DETAIL_HEADING_ID =
  "learning-log-detail-heading";

export function LearningLogDetail({
  learningLog,
  relatedLearningLogs,
  navigation,
}: LearningLogDetailProps) {
  const headings =
    extractLearningLogHeadings(
      learningLog.content,
    );

  const hasHeadings =
    headings.length > 0;

  return (
    <section className="border-b border-line">
      <Container>
        <div
          className="
            min-w-0
            border-x
            border-line
          "
        >
          <article
            aria-labelledby={
              LEARNING_LOG_DETAIL_HEADING_ID
            }
          >
            <LearningLogDetailHeader
              learningLog={learningLog}
              headingId={
                LEARNING_LOG_DETAIL_HEADING_ID
              }
            />

            <div
              className={
                hasHeadings
                  ? `
                    grid
                    min-w-0
                    lg:grid-cols-[minmax(0,1fr)_20rem]
                  `
                  : "min-w-0"
              }
            >
              {hasHeadings ? (
                <aside
                  aria-label="Learning Log contents"
                  className="
                    min-w-0
                    border-b
                    border-line
                    px-6
                    py-10
                    md:px-8
                    lg:col-start-2
                    lg:row-start-1
                    lg:border-b-0
                    lg:px-8
                    lg:py-16
                  "
                >
                  <LearningLogTableOfContents
                    headings={headings}
                  />
                </aside>
              ) : null}

              <section
                aria-label="Learning Log article content"
                className={`
                  min-w-0
                  px-6
                  py-12
                  md:px-8
                  md:py-16
                  lg:col-start-1
                  lg:row-start-1
                  lg:px-10
                  lg:py-20
                  ${hasHeadings
                    ? "lg:border-r lg:border-line"
                    : ""
                  }
                `}
              >
                <LearningLogMarkdown
                  content={
                    learningLog.content
                  }
                />
              </section>
            </div>

            <LearningLogEntryNavigation
              navigation={navigation}
            />

            <LearningLogRelatedLogs
              learningLogs={
                relatedLearningLogs
              }
            />
          </article>
        </div>
      </Container>
    </section>
  );
}