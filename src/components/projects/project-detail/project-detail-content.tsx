// src/components/projects/project-detail/project-detail-content.tsx
import {
  ProjectMarkdown,
} from "@/components/projects/project-markdown";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";

type ProjectDetailContentProps = {
  content: string;
};

const PROJECT_CONTENT_HEADING_ID =
  "project-content-heading";

export function ProjectDetailContent({
  content,
}: ProjectDetailContentProps) {
  return (
    <section
      aria-labelledby={
        PROJECT_CONTENT_HEADING_ID
      }
      className="
        grid
        border-t
        border-line
        lg:grid-cols-[minmax(15rem,0.38fr)_minmax(0,1fr)]
      "
    >
      <header
        className="
          section-block
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
          Case Study
        </SectionLabel>

        <SectionHeading
          id={PROJECT_CONTENT_HEADING_ID}
          className="mt-3"
        >
          Development Record
        </SectionHeading>

        <p className="type-body mt-6 max-w-md text-muted">
          A structured record of the project
          background, development decisions,
          implementation process, challenges,
          and results.
        </p>
      </header>

      <div
        className="
          min-w-0
          px-6
          py-10
          md:px-8
          md:py-14
          lg:px-10
          lg:py-16
        "
      >
        <ProjectMarkdown content={content} />
      </div>
    </section>
  );
}