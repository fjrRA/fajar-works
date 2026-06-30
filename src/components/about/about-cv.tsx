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
  AboutCvContent,
} from "@/types/about";

type AboutCvProps = {
  content: AboutCvContent;
};

const ABOUT_CV_HEADING_ID =
  "about-cv-heading";

export function AboutCv({
  content,
}: AboutCvProps) {
  return (
    <section
      aria-labelledby={ABOUT_CV_HEADING_ID}
      className="about-cv border-b"
    >
      <Container>
        <div className="about-cv__frame min-w-0 border-x">
          <header
            className="
              about-cv__header
              grid
              gap-8
              border-b
              px-6
              py-12
              md:px-8
              lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)]
              lg:px-10
              lg:py-16
            "
          >
            <div>
              <SectionLabel
                index="05"
                className="about-cv__label"
              >
                {content.label}
              </SectionLabel>

              <SectionHeading
                id={ABOUT_CV_HEADING_ID}
                className="mt-4 max-w-4xl"
              >
                {content.title}
              </SectionHeading>
            </div>

            <p className="about-cv__muted type-body max-w-lg lg:justify-self-end">
              {content.description}
            </p>
          </header>

          <div className="grid md:grid-cols-2">
            {content.files.map((file) => (
              <Link
                key={file.index}
                href={file.href}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  about-cv__document
                  flex
                  min-h-72
                  min-w-0
                  flex-col
                  border-b
                  px-6
                  py-8
                  transition-colors
                  focus-visible:outline-2
                  focus-visible:-outline-offset-3
                  focus-visible:outline-inverse
                  md:border-r
                  md:px-8
                  lg:px-10
                  lg:py-10
                "
              >
                <div
                  className="
                    flex
                    about-cv__document-rule
                    items-center
                    justify-between
                    gap-4
                    border-b
                    pb-4
                  "
                >
                  <span className="about-cv__label type-label">
                    Document / {file.index}
                  </span>

                  <span className="about-cv__muted type-meta uppercase">
                    PDF
                  </span>
                </div>

                <div className="mt-10">
                  <p className="about-cv__muted type-meta uppercase">
                    {file.language}
                  </p>

                  <h3
                    className="
                      mt-3
                      max-w-xl
                      text-3xl
                      leading-[1.02]
                      font-semibold
                      tracking-[-0.04em]
                    "
                  >
                    {file.label}
                  </h3>
                </div>

                <div
                  className="
                    mt-auto
                    flex
                    items-end
                    justify-between
                    gap-6
                    pt-10
                  "
                >
                  <p
                    className="
                      min-w-0
                      wrap-break-word
                      font-mono
                      text-[0.6875rem]
                      leading-5
                      about-cv__muted
                    "
                  >
                    {file.fileName}
                  </p>

                  <span
                    aria-hidden="true"
                    className="
                      flex
                      about-cv__document-action
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      border
                    "
                  >
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
