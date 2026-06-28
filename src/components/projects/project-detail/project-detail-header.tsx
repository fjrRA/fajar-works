// src/components/projects/project-detail/
// project-detail-header.tsx

import type { Project } from "@/types/project";

import {
  ProjectDetailCover,
} from "./project-detail-cover";
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
    <header className="border-b border-line">
      <div className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.55fr)]">
        <ProjectDetailIntro
          project={project}
          headingId={headingId}
        />

        <ProjectDetailFile
          project={project}
        />
      </div>

      {project.coverImage ? (
        <ProjectDetailCover
          imageSource={project.coverImage}
          projectTitle={project.title}
        />
      ) : null}
    </header>
  );
}
