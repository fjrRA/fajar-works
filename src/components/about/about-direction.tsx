// src/components/about/about-direction.tsx

import { Container } from "@/components/layout/container";
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

type AboutDirectionListProps = {
  label: string;
  items: readonly string[];
};

function AboutDirectionList({
  label,
  items,
}: AboutDirectionListProps) {
  return (
    <section
      aria-label={label}
      className="
        min-w-0
        px-6
        py-10
        md:px-8
        lg:px-10
        lg:py-12
      "
    >
      <h3 className="type-label text-muted">
        {label}
      </h3>

      <ol className="mt-8 border-t border-line">
        {items.map((item, index) => (
          <li
            key={item}
            className="
              grid
              min-w-0
              grid-cols-[2.5rem_minmax(0,1fr)]
              gap-4
              border-b
              border-line
              py-5
            "
          >
            <span
              aria-hidden="true"
              className="type-meta text-accent-strong"
            >
              {String(index + 1).padStart(
                2,
                "0",
              )}
            </span>

            <p
              className="
                min-w-0
                wrap-break-word
                leading-7
              "
            >
              {item}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function AboutDirection({
  content,
}: AboutDirectionProps) {
  return (
    <section
      aria-labelledby={
        ABOUT_DIRECTION_HEADING_ID
      }
      className="border-b border-line"
    >
      <Container>
        <div
          className="
            min-w-0
            border-x
            border-line
          "
        >
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

            <p
              className="
                type-body
                max-w-lg
                text-muted
                lg:justify-self-end
              "
            >
              {content.description}
            </p>
          </header>

          <div
            className="
              grid
              min-w-0
              md:grid-cols-2
            "
          >
            <div
              className="
                min-w-0
                border-b
                border-line
                md:border-r
                md:border-b-0
              "
            >
              <AboutDirectionList
                label="Current Focus"
                items={content.focus}
              />
            </div>

            <AboutDirectionList
              label="Working Approach"
              items={content.approach}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}