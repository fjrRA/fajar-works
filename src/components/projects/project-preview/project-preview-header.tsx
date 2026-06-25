// src/components/projects/project-preview/project-preview-header.tsx
import {
  getProjectStatusClassName,
} from "@/components/projects/project-status";
import type {
  ProjectStatus,
} from "@/types/project";

type ProjectPreviewHeaderProps = {
  headingId: string;
  title: string;
  category: string;
  year: number;
  status: ProjectStatus;
};

export function ProjectPreviewHeader({
  headingId,
  title,
  category,
  year,
  status,
}: ProjectPreviewHeaderProps) {
  return (
    <header
      className="
        flex
        flex-col
        gap-5
        sm:flex-row
        sm:items-start
        sm:justify-between
      "
    >
      <div className="min-w-0">
        <p className="type-meta text-accent uppercase">
          {category}
        </p>

        <h3
          id={headingId}
          className="
            mt-3
            max-w-4xl
            text-balance
            text-3xl
            leading-[0.95]
            font-semibold
            tracking-[-0.04em]
            uppercase
            md:text-4xl
          "
        >
          {title}
        </h3>
      </div>

      <div
        className="
          flex
          shrink-0
          items-center
          gap-3
          font-mono
          text-xs
          uppercase
        "
      >
        <span className="text-muted">
          {year}
        </span>

        <span
          aria-hidden="true"
          className="text-line"
        >
          /
        </span>

        <span
          className={getProjectStatusClassName(
            status,
          )}
        >
          {status}
        </span>
      </div>
    </header>
  );
}