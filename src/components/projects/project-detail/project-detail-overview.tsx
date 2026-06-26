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
        grid
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
        <SectionLabel index="02">
          Technical Scope
        </SectionLabel>

        <SectionHeading
          id={PROJECT_OVERVIEW_HEADING_ID}
          className="mt-3"
        >
          Project Overview
        </SectionHeading>

        <p className="type-body mt-6 max-w-md text-muted">
          Technologies, responsibilities, and
          development scope recorded for this
          project.
        </p>
      </header>

      <div className="min-w-0">
        <ProjectDetailStack
          stack={project.stack}
        />

        <ProjectDetailResponsibilities
          responsibilities={
            project.responsibilities
          }
        />

        <div
          className="
            px-6
            py-10
            md:px-8
            lg:px-10
            lg:py-12
          "
        >
          <ProjectDetailLinks
            projectTitle={project.title}
            repositoryUrl={
              project.repositoryUrl
            }
            liveUrl={project.liveUrl}
          />
        </div>
      </div>
    </section>
  );
}