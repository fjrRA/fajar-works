import {
  Container,
} from "@/components/layout/container";
import type {
  AboutEducationContent,
} from "@/types/about";

import {
  AboutEducationIntro,
} from "./about-education/about-education-intro";
import {
  AboutEducationMilestones,
} from "./about-education/about-education-milestones";
import {
  AboutEducationRecord,
} from "./about-education/about-education-record";

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
              lg:grid-cols-[minmax(0,1fr)_24rem]
            "
          >
            <AboutEducationIntro
              content={content}
              headingId={
                ABOUT_EDUCATION_HEADING_ID
              }
            />

            <AboutEducationRecord
              content={content}
            />
          </header>

          <AboutEducationMilestones
            highlights={content.highlights}
          />
        </div>
      </Container>
    </section>
  );
}
