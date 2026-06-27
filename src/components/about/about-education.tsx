// src/components/about/about-education.tsx

import {
  Container,
} from "@/components/layout/container";
import type {
  AboutEducationContent,
} from "@/types/about";

import {
  AboutEducationFile,
} from "./about-education-file";
import {
  AboutEducationHighlightCard,
} from "./about-education-highlight-card";
import {
  AboutEducationSummary,
} from "./about-education-summary";

type AboutEducationProps = {
  content: AboutEducationContent;
};

const ABOUT_EDUCATION_HEADING_ID =
  "about-education-heading";

export function AboutEducation({
  content,
}: AboutEducationProps) {
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
              lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)]
            "
          >
            <AboutEducationSummary
              content={content}
              headingId={
                ABOUT_EDUCATION_HEADING_ID
              }
            />

            <AboutEducationFile
              content={content}
            />
          </header>

          <div className="grid md:grid-cols-2">
            {content.highlights.map(
              (highlight) => (
                <AboutEducationHighlightCard
                  key={highlight.index}
                  highlight={highlight}
                />
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}