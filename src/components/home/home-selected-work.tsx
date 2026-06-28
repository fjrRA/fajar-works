// src/components/home/home-selected-work.tsx
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SelectedWorkProject } from "@/components/home/selected-work-project";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import type { HomeSelectedWorkContent } from "@/types/home";
import type { Project } from "@/types/project";

type HomeSelectedWorkProps = {
  content: HomeSelectedWorkContent;
  projects: Project[];
};

export function HomeSelectedWork({
  content,
  projects,
}: HomeSelectedWorkProps) {
  return (
    <section
      id="selected-work"
      aria-labelledby="home-selected-work-heading"
      className="border-b border-line"
    >
      <Container>
        <div
          className="border-x border-line"
        >
          <header
            className="
              section-block
              border-b
              border-line
              px-6
              md:px-8
              grid
              lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1fr)]
              lg:gap-16
              lg:px-10
            "
          >
            <div>
              <SectionLabel index="01">
                Work / {String(projects.length).padStart(2, "0")}
              </SectionLabel>

              <SectionHeading
                id="home-selected-work-heading"
                className="mt-3"
              >
                {content.heading}
              </SectionHeading>
            </div>

            <div className="mt-8 flex max-w-2xl flex-col items-start lg:mt-0">
              <p className="type-body text-muted">
                {content.description}
              </p>

              <Link
                href={content.allWorkHref}
                className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 font-mono text-xs font-semibold tracking-[0.1em] uppercase transition-colors duration-150 hover:border-accent hover:text-accent"
              >
                {content.allWorkLabel}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </header>

          {projects.length > 0 ? (
            <ol className="min-w-0">
              {projects.map((project, index) => (
                <li
                  key={project.slug}
                  className="border-b border-line last:border-b-0"
                >
                  <SelectedWorkProject
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
                No Featured Projects
              </p>

              <p className="type-body mt-4 max-w-lg text-muted">
                Featured projects will appear here
                after they are configured in the
                homepage content.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
