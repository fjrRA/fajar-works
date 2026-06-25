// src/components/projects/project-index/project-index.tsx
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import type { Project } from "@/types/project";

import { ProjectIndexItem } from "./project-index-item";

type ProjectIndexProps = {
  projects: Project[];
};

export function ProjectIndex({
  projects,
}: ProjectIndexProps) {
  return (
    <section
      aria-labelledby="project-index-heading"
      className="border-b border-line"
    >
      <Container>
        <div
          className="
            grid
            border-x
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
            <SectionLabel index="01">
              Archive
            </SectionLabel>

            <SectionHeading
              id="project-index-heading"
              className="mt-3"
            >
              Project Index
            </SectionHeading>

            <p className="type-body mt-6 max-w-md text-muted">
              A chronological and curated index of
              web applications, ticketing systems,
              content tools, and technical projects.
            </p>

            <dl className="mt-10 border-t border-line font-mono text-xs uppercase">
              <div
                className="
                  flex
                  justify-between
                  gap-6
                  border-b
                  border-line
                  py-4
                "
              >
                <dt className="text-muted">
                  Published
                </dt>

                <dd>
                  {String(projects.length).padStart(
                    2,
                    "0",
                  )}
                </dd>
              </div>

              <div
                className="
                  flex
                  justify-between
                  gap-6
                  border-b
                  border-line
                  py-4
                "
              >
                <dt className="text-muted">
                  Order
                </dt>

                <dd>Curated</dd>
              </div>
            </dl>
          </header>

          {projects.length > 0 ? (
            <ol className="min-w-0">
              {projects.map((project, index) => (
                <li
                  key={project.slug}
                  className="
                    border-b
                    border-line
                    last:border-b-0
                  "
                >
                  <ProjectIndexItem
                    project={project}
                    displayIndex={String(
                      index + 1,
                    ).padStart(2, "0")}
                  />
                </li>
              ))}
            </ol>
          ) : (
            <div className="px-6 py-12 md:px-8 lg:px-10">
              <p className="type-label text-muted">
                No Published Projects
              </p>

              <p className="type-body mt-4 max-w-lg text-muted">
                Published projects will appear here
                after they are added to the content
                directory.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}