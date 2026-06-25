// src/components/projects/project-preview.tsx
import { cn } from "@/lib/utils/cn";
import type { Project } from "@/types/project";

type ProjectPreviewProps = {
  project: Project;
  displayIndex: string;
};

export function ProjectPreview({
  project,
  displayIndex,
}: ProjectPreviewProps) {
  const isInDevelopment =
    project.status === "In Development";

  return (
    <article
      className="
        grid
        gap-6
        px-6
        py-8
        md:grid-cols-[3rem_minmax(0,1fr)]
        md:px-8
        lg:px-10
        lg:py-10
      "
    >
      <p className="type-label text-muted">
        {displayIndex}
      </p>

      <div className="min-w-0">
        <div
          className="
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-start
            sm:justify-between
          "
        >
          <div>
            <p className="type-meta text-muted uppercase">
              {project.category}
            </p>

            <h3
              className="
                mt-3
                text-2xl
                leading-none
                font-semibold
                tracking-[-0.035em]
                uppercase
                md:text-3xl
              "
            >
              {project.title}
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
            <span>{project.year}</span>

            <span className="text-line">/</span>

            <span
              className={cn(
                isInDevelopment
                  ? "text-accent"
                  : "text-muted",
              )}
            >
              {project.status}
            </span>
          </div>
        </div>

        <p className="type-body mt-6 max-w-2xl text-muted">
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
        >
          {project.stack.join(" / ")}
        </p>

        <div className="mt-8 flex flex-wrap gap-6">
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-3
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
            Repository

            <span
              aria-hidden="true"
              className="
                h-px
                w-6
                bg-current
                transition-transform
                duration-200
                group-hover:translate-x-1
                motion-reduce:transition-none
              "
            />
          </a>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="
                border-b
                border-line
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
              Live Website
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}