// src/components/about/
// about-profile-statement.tsx

import {
  SectionLabel,
} from "@/components/ui/section-label";
import type {
  AboutProfileContent,
} from "@/types/about";

type AboutProfileStatementProps = {
  content: AboutProfileContent;
  headingId: string;
};

export function AboutProfileStatement({
  content,
  headingId,
}: AboutProfileStatementProps) {
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
      <SectionLabel index="01">
        {content.label}
      </SectionLabel>

      <h2
        id={headingId}
        className="
          mt-6
          max-w-5xl
          wrap-break-word
          text-balance
          text-[clamp(2.25rem,6vw,5.5rem)]
          leading-[0.92]
          font-bold
          tracking-[-0.05em]
          uppercase
        "
      >
        {content.title}
      </h2>

      <div
        className="
          mt-10
          max-w-3xl
          space-y-6
        "
      >
        {content.paragraphs.map(
          (paragraph) => (
            <p
              key={paragraph}
              className="
                type-body
                text-muted
              "
            >
              {paragraph}
            </p>
          ),
        )}
      </div>
    </div>
  );
}