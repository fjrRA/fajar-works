// src/components/about/
// about-education-summary.tsx

import {
  SectionHeading,
} from "@/components/ui/section-heading";
import {
  SectionLabel,
} from "@/components/ui/section-label";
import type {
  AboutEducationContent,
} from "@/types/about";

type AboutEducationSummaryContent = Pick<
  AboutEducationContent,
  "label" | "title" | "description"
>;

type AboutEducationSummaryProps = {
  content: AboutEducationSummaryContent;
  headingId: string;
};

export function AboutEducationSummary({
  content,
  headingId,
}: AboutEducationSummaryProps) {
  return (
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
      <SectionLabel index="03">
        {content.label}
      </SectionLabel>

      <SectionHeading
        id={headingId}
        className="mt-4 max-w-4xl"
      >
        {content.title}
      </SectionHeading>

      <div className="mt-8 max-w-3xl space-y-5">
        {content.description.map(
          (paragraph) => (
            <p
              key={paragraph}
              className="type-body text-muted"
            >
              {paragraph}
            </p>
          ),
        )}
      </div>
    </div>
  );
}