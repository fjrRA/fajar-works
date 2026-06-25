// src/components/home/home-selected-work.tsx
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ProjectPreview } from "@/components/projects/project-preview";
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
    <section className="border-b border-line">
      <Container>
        <div
          className="
            grid
            border-x
            border-line
            lg:grid-cols-[minmax(16rem,0.42fr)_minmax(0,1fr)]
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
              Work
            </SectionLabel>

            <SectionHeading className="mt-3">
              {content.heading}
            </SectionHeading>

            <p className="type-body mt-6 max-w-md text-muted">
              {content.description}
            </p>

            <Link
              href={content.allWorkHref}
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-4
                border-b
                border-ink
                pb-2
                font-mono
                text-xs
                font-semibold
                tracking-[0.1em]
                uppercase
                transition-colors
                duration-150
                hover:border-accent
                hover:text-accent
              "
            >
              {content.allWorkLabel} / 01

              <span
                aria-hidden="true"
                className="
                  h-px
                  w-8
                  bg-current
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                  motion-reduce:transition-none
                "
              />
            </Link>
          </header>

          <ol>
            {projects.map((project, index) => (
              <li
                key={project.slug}
                className="
                  border-b
                  border-line
                  last:border-b-0
                "
              >
                <ProjectPreview
                  project={project}
                  displayIndex={String(
                    index + 1,
                  ).padStart(2, "0")}
                />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}