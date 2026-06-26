// src/components/projects/project-detail/
// project-detail-file.tsx

import {
  getProjectStatusClassName,
} from "@/components/projects/project-status";
import type { Project } from "@/types/project";

type ProjectDetailFileProps = {
  project: Pick<
    Project,
    | "year"
    | "status"
    | "context"
    | "role"
    | "updatedAt"
  >;
};

export function ProjectDetailFile({
  project,
}: ProjectDetailFileProps) {
  return (
    <aside
      aria-label="Project information"
      className="
        flex
        min-w-0
        flex-col
        justify-between
        gap-12
        px-6
        py-10
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
      "
    >
      <div>
        <p className="type-label text-muted">
          Project File
        </p>

        <dl className="mt-8 border-t border-line">
          <div
            className="
              flex
              items-start
              justify-between
              gap-6
              border-b
              border-line
              py-4
            "
          >
            <dt className="type-meta text-muted uppercase">
              Year
            </dt>

            <dd className="font-mono text-sm uppercase">
              {project.year}
            </dd>
          </div>

          <div
            className="
              flex
              items-start
              justify-between
              gap-6
              border-b
              border-line
              py-4
            "
          >
            <dt className="type-meta text-muted uppercase">
              Status
            </dt>

            <dd
              className={`
                font-mono
                text-right
                text-sm
                uppercase
                ${getProjectStatusClassName(
                project.status,
              )}
              `}
            >
              <span
                aria-hidden="true"
                className="
                  mr-2
                  inline-block
                  h-1.5
                  w-1.5
                  bg-current
                "
              />

              {project.status}
            </dd>
          </div>

          <div
            className="
              border-b
              border-line
              py-4
            "
          >
            <dt className="type-meta text-muted uppercase">
              Context
            </dt>

            <dd className="mt-3 text-base font-medium">
              {project.context}
            </dd>
          </div>

          <div
            className="
              border-b
              border-line
              py-4
            "
          >
            <dt className="type-meta text-muted uppercase">
              Role
            </dt>

            <dd className="mt-3 text-base font-medium">
              {project.role}
            </dd>
          </div>
        </dl>
      </div>

      {project.updatedAt ? (
        <div>
          <p className="type-label text-muted">
            Last Updated
          </p>

          <p className="mt-3 font-mono text-sm uppercase">
            {project.updatedAt}
          </p>
        </div>
      ) : null}
    </aside>
  );
}