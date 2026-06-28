import Link from "next/link";

import { HomeLearningEntry } from "@/components/home/home-learning-entry";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { HomeLearningProgressContent } from "@/types/home";
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
    <section
      aria-labelledby="home-learning-progress-heading"
      className="border-b border-line bg-accent-strong text-inverse"
    >
      <Container>
        <div className="border-x border-inverse/20">
          <header className="section-block grid px-6 md:px-8 lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1fr)] lg:gap-16 lg:px-10">
            <div>
              <p className="type-label text-inverse/70">
                04 / Learning Log / {String(learningLogs.length).padStart(2, "0")}
              </p>

              <SectionHeading
                id="home-learning-progress-heading"
                className="mt-3"
              >
                {content.heading}
              </SectionHeading>
            </div>

            <div className="mt-8 flex max-w-2xl flex-col items-start lg:mt-0">
              <p className="type-body text-inverse/70">
                {content.description}
              </p>

              <Link
                href={content.allLogsHref}
                className="mt-8 inline-flex items-center gap-3 border-b border-inverse pb-2 font-mono text-xs font-semibold tracking-[0.1em] uppercase transition-colors duration-150 hover:border-inverse/70 hover:text-inverse/75"
              >
                {content.allLogsLabel}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </header>

          {learningLogs.length > 0 ? (
            <ol className="grid border-t border-inverse/20 md:grid-cols-2 lg:grid-cols-3">
              {learningLogs.map((learningLog, index) => (
                <li
                  key={learningLog.slug}
                  className="min-w-0 border-b border-inverse/20 last:border-b-0 md:border-r md:odd:border-r md:even:border-r-0 lg:border-b-0 lg:border-r lg:even:border-r lg:last:border-r-0"
                >
                  <HomeLearningEntry
                    learningLog={learningLog}
                    displayIndex={String(index + 1).padStart(2, "0")}
                  />
                </li>
              ))}
            </ol>
          ) : (
            <div className="border-t border-inverse/20 px-6 py-12 md:px-8 lg:px-10">
              <p className="type-label text-inverse/60">
                No Published Learning Logs
              </p>

              <p className="type-body mt-4 max-w-lg text-inverse/70">
                Published learning records will appear here after they are
                added to the content directory.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
