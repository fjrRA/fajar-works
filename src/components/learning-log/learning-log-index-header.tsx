// src/components/learning-log/learning-log-index-header.tsx

import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";

type LearningLogIndexHeaderProps = {
  headingId: string;
  learningLogCount: number;
};

function formatLearningLogCount(count: number): string {
  return String(count).padStart(2, "0");
}

export function LearningLogIndexHeader({
  headingId,
  learningLogCount,
}: LearningLogIndexHeaderProps) {
  return (
    <header
      className="
        grid
        border-b
        border-line
        lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.38fr)]
      "
    >
      <div
        className="
          section-block
          min-w-0
          border-b
          border-line
          px-6
          md:px-8
          lg:border-r
          lg:border-b-0
          lg:px-10
        "
      >
        <SectionLabel index="01">
          Published Archive
        </SectionLabel>

        <SectionHeading
          id={headingId}
          className="mt-3"
        >
          Learning Log Index
        </SectionHeading>

        <p className="type-body mt-6 max-w-xl text-muted">
          Structured records of courses, programming
          exercises, experiments, mistakes, discoveries,
          and ongoing technical progress.
        </p>
      </div>

      <aside
        aria-label="Learning Log index information"
        className="
          flex
          flex-col
          justify-between
          gap-10
          px-6
          py-10
          md:px-8
          lg:px-10
          lg:py-12
        "
      >
        <div>
          <p className="type-label text-muted">
            Archive File
          </p>

          <dl className="mt-8 border-t border-line">
            <div
              className="
                flex
                items-start
                justify-between
                gap-6
                border-b
                border-line
                py-4
              "
            >
              <dt className="type-meta text-muted uppercase">
                Published
              </dt>

              <dd className="font-mono text-sm uppercase">
                {formatLearningLogCount(
                  learningLogCount,
                )}
              </dd>
            </div>

            <div
              className="
                flex
                items-start
                justify-between
                gap-6
                border-b
                border-line
                py-4
              "
            >
              <dt className="type-meta text-muted uppercase">
                Order
              </dt>

              <dd className="font-mono text-right text-sm uppercase">
                Newest First
              </dd>
            </div>
          </dl>
        </div>
      </aside>
    </header>
  );
}