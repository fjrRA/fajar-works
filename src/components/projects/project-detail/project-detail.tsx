// src/components/projects/project-detail/
// project-detail.tsx

import { Container } from "@/components/layout/container";
import type {
  ProjectNavigation,
} from "@/lib/content/project-navigation";
import type { Project } from "@/types/project";

import {
  ProjectBackToTop,
} from "./project-back-to-top";
import {
  ProjectCaseStudyNavigation,
} from "./project-case-study-navigation";
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
  navigation: ProjectNavigation;
};

const PROJECT_DETAIL_HEADING_ID =
  "project-detail-heading";

export function ProjectDetail({
  project,
  navigation,
}: ProjectDetailProps) {
  return (
    <section className="border-b border-line">
      <Container>
        <article
          id="project-top"
          aria-labelledby={
            PROJECT_DETAIL_HEADING_ID
          }
          className="
            min-w-0
            border-x
            border-line
            scroll-mt-[calc(var(--header-height)+1rem)]
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

          <ProjectCaseStudyNavigation
            navigation={navigation}
          />
        </article>
      </Container>

      <ProjectBackToTop />
    </section>
  );
}
