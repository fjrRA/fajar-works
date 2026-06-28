// src/components/projects/project-detail/
// project-detail-overview.tsx

import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import type { Project } from "@/types/project";

import {
  ProjectDetailLinks,
} from "./project-detail-links";
import {
  ProjectDetailResponsibilities,
} from "./project-detail-responsibilities";
import {
  ProjectDetailStack,
} from "./project-detail-stack";

type ProjectDetailOverviewProps = {
  project: Project;
};

const PROJECT_OVERVIEW_HEADING_ID =
  "project-overview-heading";

export function ProjectDetailOverview({
  project,
}: ProjectDetailOverviewProps) {
  return (
    <section
      aria-labelledby={
        PROJECT_OVERVIEW_HEADING_ID
      }
      className="
        border-b
        border-line
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
          <SectionLabel index="02">
            Build Scope
          </SectionLabel>

          <SectionHeading
            id={PROJECT_OVERVIEW_HEADING_ID}
            className="mt-3"
          >
            System & Contribution
          </SectionHeading>
        </div>

        <p className="type-body mt-8 max-w-2xl text-muted lg:mt-0">
          The working surface behind the case study: technologies, ownership,
          and the parts of the product delivered through the project.
        </p>
      </header>

      <div className="grid min-w-0 lg:grid-cols-[minmax(17rem,0.72fr)_minmax(0,1.28fr)]">
        <ProjectDetailStack
          stack={project.stack}
        />

        <div className="min-w-0 border-t border-line lg:border-t-0 lg:border-l">
          <ProjectDetailResponsibilities
            responsibilities={
              project.responsibilities
            }
          />

          <div className="px-6 py-10 md:px-8 lg:px-10 lg:py-12">
            <ProjectDetailLinks
              projectTitle={project.title}
              repositoryUrl={
                project.repositoryUrl
              }
              liveUrl={project.liveUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
