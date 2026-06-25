// src/components/projects/project-preview/project-preview.tsx
import type { Project } from "@/types/project";

import {
  ProjectPreviewHeader,
} from "./project-preview-header";
import {
  ProjectPreviewLinks,
} from "./project-preview-links";

type ProjectPreviewProps = {
  project: Project;
  displayIndex: string;
};

export function ProjectPreview({
  project,
  displayIndex,
}: ProjectPreviewProps) {
  const headingId =
    `home-project-${project.slug}-heading`;

  return (
    <article
      aria-labelledby={headingId}
      className="
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
        <ProjectPreviewHeader
          headingId={headingId}
          title={project.title}
          category={project.category}
          year={project.year}
          status={project.status}
        />

        <p className="type-body mt-6 max-w-3xl text-muted">
          {project.summary}
        </p>

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

        <ProjectPreviewLinks
          projectTitle={project.title}
          repositoryUrl={project.repositoryUrl}
          liveUrl={project.liveUrl}
        />
      </div>
    </article>
  );
}