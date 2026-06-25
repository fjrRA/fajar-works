// src/components/projects/project-index/project-index-item/project-index-item.tsx
import type { Project } from "@/types/project";

import { ProjectIndexItemDetails } from "./project-index-item-details";
import { ProjectIndexItemHeader } from "./project-index-item-header";
import { ProjectIndexItemLinks } from "./project-index-item-links";

type ProjectIndexItemProps = {
  project: Project;
  displayIndex: string;
};

export function ProjectIndexItem({
  project,
  displayIndex,
}: ProjectIndexItemProps) {
  const projectId = `project-${project.slug}`;

  const projectHeadingId =
    `${projectId}-heading`;

  return (
    <article
      id={projectId}
      aria-labelledby={projectHeadingId}
      className="
        scroll-mt-[calc(var(--header-height)+1rem)]
        grid
        gap-6
        px-6
        py-10
        md:grid-cols-[3rem_minmax(0,1fr)]
        md:px-8
        lg:px-10
        lg:py-12
      "
    >
      <p className="type-label text-muted">
        {displayIndex}
      </p>

      <div className="min-w-0">
        <ProjectIndexItemHeader
          headingId={projectHeadingId}
          title={project.title}
          category={project.category}
          year={project.year}
          status={project.status}
        />

        <p className="type-body mt-6 max-w-3xl text-muted">
          {project.summary}
        </p>

        <ProjectIndexItemDetails
          context={project.context}
          role={project.role}
        />

        <p
          className="
            mt-6
            font-mono
            text-xs
            leading-6
            tracking-[0.06em]
            text-muted
            uppercase
          "
          aria-label={`Technology stack: ${project.stack.join(
            ", ",
          )}`}
        >
          {project.stack.join(" / ")}
        </p>

        <ProjectIndexItemLinks
          projectTitle={project.title}
          repositoryUrl={project.repositoryUrl}
          liveUrl={project.liveUrl}
        />
      </div>
    </article>
  );
}