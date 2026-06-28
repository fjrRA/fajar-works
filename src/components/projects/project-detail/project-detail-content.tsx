// src/components/projects/project-detail/project-detail-content.tsx
import {
  ProjectMarkdown,
} from "@/components/projects/project-markdown";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";

import {
  extractProjectHeadings,
} from "@/lib/content/project-headings";

import {
  ProjectTableOfContents,
} from "./project-table-of-contents";

type ProjectDetailContentProps = {
  content: string;
};

const PROJECT_CONTENT_HEADING_ID =
  "project-content-heading";

export function ProjectDetailContent({
  content,
}: ProjectDetailContentProps) {
  const headings =
    extractProjectHeadings(content);

  return (
    <section
      aria-labelledby={
        PROJECT_CONTENT_HEADING_ID
      }
      className="
        min-w-0
      "
    >
      <header
        className="
          section-block
          grid
          border-b
          border-line
          px-6
          md:px-8
          lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1fr)]
          lg:gap-16
          lg:px-10
        "
      >
        <div>
          <SectionLabel index="03">
            Case Study
          </SectionLabel>

          <SectionHeading
            id={PROJECT_CONTENT_HEADING_ID}
            className="mt-3"
          >
            Development Record
          </SectionHeading>
        </div>

        <p className="type-body mt-8 max-w-2xl text-muted lg:mt-0">
          The product story, implementation evidence, critical decisions,
          evaluation boundaries, and lessons carried into the next build.
        </p>
      </header>

      <div className="grid min-w-0 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <aside className="min-w-0 border-b border-line px-6 py-8 md:px-8 lg:border-r lg:border-b-0 lg:px-7 lg:py-12">
          <div className="lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
            <ProjectTableOfContents
              headings={headings}
            />
          </div>
        </aside>

        <div className="min-w-0 px-6 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16 xl:px-16">
          <ProjectMarkdown content={content} />
        </div>
      </div>
    </section>
  );
}
