// src/components/projects/project-detail/project-detail-overview.tsx
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import type { Project } from "@/types/project";

import {
  ProjectDetailLinks,
} from "./project-detail-links";

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
        <section
          aria-labelledby="project-stack-heading"
          className="
            border-b
            border-line
            px-6
            py-10
            md:px-8
            lg:px-10
            lg:py-12
          "
        >
          <p className="type-label text-muted">
            Technology Stack
          </p>

          <h3
            id="project-stack-heading"
            className="
              mt-4
              text-3xl
              leading-none
              font-semibold
              tracking-[-0.04em]
              uppercase
            "
          >
            Tools & Technologies
          </h3>

          <ul
            aria-label="Project technology stack"
            className="
              mt-8
              flex
              flex-wrap
              border-t
              border-l
              border-line
            "
          >
            {project.stack.map((technology) => (
              <li
                key={technology}
                className="
                  border-r
                  border-b
                  border-line
                  px-4
                  py-3
                  font-mono
                  text-xs
                  tracking-[0.08em]
                  uppercase
                "
              >
                {technology}
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="project-responsibilities-heading"
          className="
            border-b
            border-line
            px-6
            py-10
            md:px-8
            lg:px-10
            lg:py-12
          "
        >
          <p className="type-label text-muted">
            Contribution
          </p>

          <h3
            id="project-responsibilities-heading"
            className="
              mt-4
              text-3xl
              leading-none
              font-semibold
              tracking-[-0.04em]
              uppercase
            "
          >
            Responsibilities
          </h3>

          <ol className="mt-8 border-t border-line">
            {project.responsibilities.map(
              (responsibility, index) => (
                <li
                  key={responsibility}
                  className="
                    grid
                    grid-cols-[2rem_minmax(0,1fr)]
                    gap-4
                    border-b
                    border-line
                    py-5
                  "
                >
                  <span className="type-meta text-muted">
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <p className="type-body">
                    {responsibility}
                  </p>
                </li>
              ),
            )}
          </ol>
        </section>

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
            repositoryUrl={project.repositoryUrl}
            liveUrl={project.liveUrl}
          />
        </div>
      </div>
    </section>
  );
}