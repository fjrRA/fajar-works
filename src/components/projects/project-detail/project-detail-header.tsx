// src/components/projects/project-detail/
// project-detail-header.tsx

import type { Project } from "@/types/project";

import {
  ProjectDetailFile,
} from "./project-detail-file";
import {
  ProjectDetailIntro,
} from "./project-detail-intro";

type ProjectDetailHeaderProps = {
  project: Project;
  headingId: string;
};

export function ProjectDetailHeader({
  project,
  headingId,
}: ProjectDetailHeaderProps) {
  return (
    <header
      className="
        grid
        border-b
        border-line
        lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]
      "
    >
      <ProjectDetailIntro
        project={project}
        headingId={headingId}
      />

      <ProjectDetailFile
        project={project}
      />
    </header>
  );
}