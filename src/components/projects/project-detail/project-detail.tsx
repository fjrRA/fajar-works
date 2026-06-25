// src/components/projects/project-detail/project-detail.tsx
import { Container } from "@/components/layout/container";
import type { Project } from "@/types/project";

import {
  ProjectDetailContent,
} from "./project-detail-content";
import {
  ProjectDetailHeader,
} from "./project-detail-header";
import {
  ProjectDetailOverview,
} from "./project-detail-overview";

type ProjectDetailProps = {
  project: Project;
};

const PROJECT_DETAIL_HEADING_ID =
  "project-detail-heading";

export function ProjectDetail({
  project,
}: ProjectDetailProps) {
  return (
    <section className="border-b border-line">
      <Container>
        <article
          aria-labelledby={
            PROJECT_DETAIL_HEADING_ID
          }
          className="
            min-w-0
            border-x
            border-line
          "
        >
          <ProjectDetailHeader
            project={project}
            headingId={
              PROJECT_DETAIL_HEADING_ID
            }
          />

          <ProjectDetailOverview
            project={project}
          />

          <ProjectDetailContent
            content={project.content}
          />
        </article>
      </Container>
    </section>
  );
}