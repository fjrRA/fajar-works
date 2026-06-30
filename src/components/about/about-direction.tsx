import {
  Container,
} from "@/components/layout/container";
import {
  SectionHeading,
} from "@/components/ui/section-heading";
import {
  SectionLabel,
} from "@/components/ui/section-label";
import type {
  AboutDirectionContent,
} from "@/types/about";

type AboutDirectionProps = {
  content: AboutDirectionContent;
};

const ABOUT_DIRECTION_HEADING_ID =
  "about-direction-heading";

export function AboutDirection({
  content,
}: AboutDirectionProps) {
  const rowCount = Math.max(
    content.focus.length,
    content.approach.length,
  );

  const rows = Array.from(
    { length: rowCount },
    (_, index) => ({
      focus: content.focus[index],
      approach: content.approach[index],
    }),
  );

  return (
    <section
      aria-labelledby={
        ABOUT_DIRECTION_HEADING_ID
      }
      className="border-b border-line"
    >
      <Container>
        <div className="min-w-0 border-x border-line">
          <header
            className="
              grid
              gap-8
              border-b
              border-line
              px-6
              py-10
              md:px-8
              lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)]
              lg:px-10
              lg:py-14
            "
          >
            <div>
              <SectionLabel index="02">
                {content.label}
              </SectionLabel>

              <SectionHeading
                id={
                  ABOUT_DIRECTION_HEADING_ID
                }
                className="mt-4 max-w-4xl"
              >
                {content.title}
              </SectionHeading>
            </div>

            <p className="type-body max-w-lg text-muted lg:justify-self-end">
              {content.description}
            </p>
          </header>

          <div
            className="
              hidden
              border-b
              border-line
              bg-panel
              font-mono
              text-[0.6875rem]
              tracking-[0.12em]
              text-muted
              uppercase
              md:grid
              md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1fr)]
            "
          >
            <p className="px-6 py-4">
              No.
            </p>

            <p className="border-l border-line px-8 py-4">
              Current Focus
            </p>

            <p className="border-l border-line px-8 py-4">
              Working Approach
            </p>
          </div>

          <ol>
            {rows.map(
              ({ focus, approach }, index) => (
                <li
                  key={`${focus ?? "focus"}-${approach ?? "approach"}`}
                  className="
                    grid
                    min-w-0
                    border-b
                    border-line
                    md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1fr)]
                  "
                >
                  <p
                    className="
                      bg-panel
                      px-6
                      py-6
                      type-meta
                      text-accent
                      md:bg-transparent
                    "
                  >
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </p>

                  <div
                    className="
                      min-w-0
                      px-6
                      py-6
                      md:border-l
                      md:border-line
                      md:px-8
                    "
                  >
                    <p className="type-label mb-3 text-muted md:hidden">
                      Current Focus
                    </p>

                    <p className="leading-7">
                      {focus}
                    </p>
                  </div>

                  <div
                    className="
                      min-w-0
                      border-t
                      border-line
                      px-6
                      py-6
                      md:border-t-0
                      md:border-l
                      md:px-8
                    "
                  >
                    <p className="type-label mb-3 text-muted md:hidden">
                      Working Approach
                    </p>

                    <p className="leading-7 text-muted">
                      {approach}
                    </p>
                  </div>
                </li>
              ),
            )}
          </ol>
        </div>
      </Container>
    </section>
  );
}
