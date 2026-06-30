import {
  Container,
} from "@/components/layout/container";
import {
  extractLearningLogHeadings,
} from "@/lib/content/learning-log-headings";
import type {
  LearningLogNavigation,
} from "@/lib/content/learning-log-navigation";
import type {
  RelatedLearningLogItem,
} from "@/lib/content/learning-log-related";
import type {
  LearningLog,
} from "@/types/learning-log";

import {
  LearningLogBackToTop,
} from "./learning-log-back-to-top";
import {
  LearningLogDetailHeader,
} from "./learning-log-detail-header";
import {
  LearningLogMarkdown,
} from "./learning-log-markdown";
import {
  LearningLogRelatedLogs,
} from "./learning-log-related-logs";
import {
  LearningLogTableOfContents,
} from "./learning-log-table-of-contents";

type LearningLogDetailProps = {
  learningLog: LearningLog;
  relatedLearningLogs:
    readonly RelatedLearningLogItem[];
  navigation: LearningLogNavigation;
};

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
    ).filter(
      (heading) =>
        heading.depth === 2,
    );

  return (
    <section className="border-b border-line">
      <Container>
        <article
          id="learning-log-top"
          aria-labelledby={
            LEARNING_LOG_DETAIL_HEADING_ID
          }
          className="
            min-w-0
            border-x
            border-line
            scroll-mt-[calc(var(--header-height)+1rem)]
          "
        >
          <LearningLogDetailHeader
            learningLog={learningLog}
            headingId={
              LEARNING_LOG_DETAIL_HEADING_ID
            }
          />

          {headings.length > 0 ? (
            <div
              className="
                sticky
                top-[var(--header-height)]
                z-30
                min-w-0
                border-b
                border-line
                bg-paper
              "
            >
              <LearningLogTableOfContents
                headings={headings}
              />
            </div>
          ) : null}

          <section
            aria-label="Learning Log article content"
            className="
              min-w-0
              px-6
              py-12
              md:px-8
              md:py-16
              lg:px-12
              lg:py-20
            "
          >
            <div className="mx-auto max-w-5xl">
              <LearningLogMarkdown
                content={learningLog.content}
              />

              <div
                className="
                  mt-16
                  flex
                  flex-wrap
                  items-center
                  justify-between
                  gap-5
                  border-t
                  border-line
                  pt-6
                "
              >
                <p className="type-label text-muted">
                  End of record
                </p>

                <p className="type-meta text-muted uppercase">
                  {learningLog.status} / {learningLog.progress}
                </p>
              </div>
            </div>
          </section>

          <LearningLogRelatedLogs
            learningLogs={
              relatedLearningLogs
            }
            navigation={navigation}
          />
        </article>
      </Container>

      <LearningLogBackToTop />
    </section>
  );
}
