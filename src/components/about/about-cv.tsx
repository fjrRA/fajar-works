// src/components/about/about-cv.tsx

import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
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
              <SectionLabel index="05">
                {content.label}
              </SectionLabel>

              <SectionHeading
                id={ABOUT_CV_HEADING_ID}
                className="mt-4 max-w-4xl"
              >
                {content.title}
              </SectionHeading>
            </div>

            <p className="type-body max-w-lg text-muted lg:justify-self-end">
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
                  min-w-0
                  border-b
                  border-line
                  px-6
                  py-10
                  transition-colors
                  hover:bg-panel
                  focus-visible:outline-2
                  focus-visible:-outline-offset-2
                  focus-visible:outline-accent
                  md:border-r
                  md:px-8
                  lg:px-10
                  lg:py-12
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >
                  <span className="type-label text-accent-strong">
                    {file.index}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      text-accent-strong
                      transition-transform
                      group-hover:translate-x-1
                    "
                  >
                    ↗
                  </span>
                </div>

                <p className="type-meta mt-12 text-muted uppercase">
                  {file.language}
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                    leading-none
                    font-semibold
                    tracking-[-0.035em]
                    uppercase
                  "
                >
                  {file.label}
                </h3>

                <p
                  className="
                    mt-5
                    wrap-break-word
                    font-mono
                    text-xs
                    leading-6
                    text-muted
                  "
                >
                  {file.fileName}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}