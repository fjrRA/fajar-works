import Link from "next/link";

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
  AboutEducationContent,
} from "@/types/about";

type AboutEducationProps = {
  content: AboutEducationContent;
};

const ABOUT_EDUCATION_HEADING_ID =
  "about-education-heading";

export function AboutEducation({
  content,
}: AboutEducationProps) {
  const educationItems = [
    {
      label: "Institution",
      value: content.institution,
    },
    {
      label: "Field",
      value: content.field,
    },
    {
      label: "Level",
      value: content.level,
    },
    {
      label: "Duration",
      value: content.duration,
    },
  ];

  return (
    <section
      aria-labelledby={
        ABOUT_EDUCATION_HEADING_ID
      }
      className="border-b border-line"
    >
      <Container>
        <div className="min-w-0 border-x border-line">
          <header
            className="
              grid
              border-b
              border-line
              lg:grid-cols-[minmax(0,1fr)_24rem]
            "
          >
            <div
              className="
                min-w-0
                px-6
                py-12
                md:px-8
                md:py-16
                lg:px-10
                lg:py-20
              "
            >
              <SectionLabel index="03">
                {content.label}
              </SectionLabel>

              <SectionHeading
                id={
                  ABOUT_EDUCATION_HEADING_ID
                }
                className="mt-4 max-w-5xl"
              >
                {content.title}
              </SectionHeading>

              <div
                className="
                  mt-10
                  grid
                  max-w-5xl
                  gap-6
                  text-muted
                  md:grid-cols-2
                "
              >
                {content.description.map(
                  (paragraph) => (
                    <p
                      key={paragraph}
                      className="type-body"
                    >
                      {paragraph}
                    </p>
                  ),
                )}
              </div>
            </div>

            <aside
              aria-label="Education record"
              className="
                min-w-0
                border-t
                border-line
                bg-panel
                px-6
                py-10
                md:px-8
                lg:border-t-0
                lg:border-l
                lg:px-10
                lg:py-14
              "
            >
              <p className="type-label text-muted">
                Education Record
              </p>

              <p
                className="
                  mt-8
                  text-[clamp(4rem,8vw,7rem)]
                  leading-none
                  font-semibold
                  tracking-[-0.06em]
                "
              >
                {content.graduationYear}
              </p>

              <p className="type-meta mt-2 text-accent uppercase">
                Graduation
              </p>

              <dl className="mt-10 border-t border-line">
                {educationItems.map(
                  ({ label, value }) => (
                    <div
                      key={label}
                      className="border-b border-line py-4"
                    >
                      <dt className="type-meta text-muted uppercase">
                        {label}
                      </dt>

                      <dd className="mt-2 wrap-break-word font-medium">
                        {value}
                      </dd>
                    </div>
                  ),
                )}
              </dl>
            </aside>
          </header>

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-between
              gap-4
              border-b
              border-line
              px-6
              py-5
              md:px-8
              lg:px-10
            "
          >
            <p className="type-label text-muted">
              Selected Milestones
            </p>

            <p className="type-meta text-muted uppercase">
              Study / Research / Applied Work
            </p>
          </div>

          <div>
            {content.highlights.map(
              (highlight) => (
                <article
                  key={highlight.index}
                  className="border-b border-line"
                >
                  <Link
                    href={highlight.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${highlight.linkLabel}: ${highlight.title}`}
                    className="
                      group
                      grid
                      min-w-0
                      gap-6
                      px-6
                      py-8
                      transition-colors
                      hover:bg-panel
                      focus-visible:outline-2
                      focus-visible:-outline-offset-2
                      focus-visible:outline-accent
                      md:px-8
                      lg:grid-cols-[4rem_8rem_minmax(0,1fr)_3rem]
                      lg:items-start
                      lg:px-10
                      lg:py-10
                    "
                  >
                    <p className="type-label text-accent">
                      {highlight.index}
                    </p>

                    <div>
                      <p
                        className="
                          text-3xl
                          leading-none
                          font-semibold
                          tracking-[-0.04em]
                        "
                      >
                        {highlight.period}
                      </p>

                      <p className="type-meta mt-2 text-muted uppercase">
                        {highlight.type}
                      </p>
                    </div>

                    <div className="min-w-0">
                      <h3
                        className="
                          wrap-break-word
                          text-2xl
                          leading-[1.05]
                          font-semibold
                          tracking-[-0.035em]
                          transition-colors
                          group-hover:text-accent-strong
                        "
                      >
                        {highlight.title}
                      </h3>

                      <p className="type-body mt-4 max-w-3xl text-muted">
                        {highlight.description}
                      </p>

                      <p className="type-meta mt-5 text-accent uppercase lg:hidden">
                        {highlight.linkLabel} ↗
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="
                        hidden
                        h-10
                        w-10
                        items-center
                        justify-center
                        border
                        border-ink
                        transition-colors
                        group-hover:bg-ink
                        group-hover:text-inverse
                        lg:flex
                      "
                    >
                      ↗
                    </span>
                  </Link>
                </article>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
