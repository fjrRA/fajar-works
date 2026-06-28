// src/components/home/selected-work-project.tsx

import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";

type SelectedWorkProjectProps = {
  displayIndex: string;
  project: Project;
};

export function SelectedWorkProject({
  displayIndex,
  project,
}: SelectedWorkProjectProps) {
  const projectHref = `/projects/${project.slug}`;
  const headingId = `selected-work-${project.slug}-heading`;

  return (
    <article
      aria-labelledby={headingId}
      className="grid min-w-0 lg:grid-cols-[minmax(0,1.65fr)_minmax(18rem,0.55fr)]"
    >
      <Link
        href={projectHref}
        aria-label={`View ${project.title} case study`}
        className="group block min-w-0 bg-panel-strong p-2 md:p-3"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-ink">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`${project.title} application interface`}
              fill
              sizes="(min-width: 1024px) 65vw, calc(100vw - 2rem)"
              className="object-cover object-top transition-opacity duration-200 group-hover:opacity-90 motion-reduce:transition-none"
            />
          ) : (
            <div className="flex h-full items-center justify-center p-8">
              <p className="type-label text-inverse">
                Project image unavailable
              </p>
            </div>
          )}
        </div>
      </Link>

      <div className="flex min-w-0 flex-col justify-between border-t border-line px-6 py-8 md:px-8 lg:border-t-0 lg:border-l lg:px-10 lg:py-10">
        <div>
          <p className="type-meta text-muted uppercase">
            {displayIndex} / {project.category}
          </p>

          <h3
            id={headingId}
            className="mt-4 text-3xl leading-[0.95] font-semibold tracking-[-0.045em] uppercase md:text-4xl"
          >
            <Link
              href={projectHref}
              className="transition-colors duration-150 hover:text-accent"
            >
              {project.title}
            </Link>
          </h3>

          <p className="type-body mt-6 text-muted">
            {project.summary}
          </p>
        </div>

        <div className="mt-10">
          <p
            className="font-mono text-xs leading-6 tracking-[0.06em] text-muted uppercase"
            aria-label={`Technology stack: ${project.stack.join(", ")}`}
          >
            {project.stack.join(" / ")}
          </p>

          <div className="mt-6 flex items-center justify-between gap-6 border-t border-line pt-5 font-mono text-xs uppercase">
            <span>
              {project.year} / {project.status}
            </span>

            <Link
              href={projectHref}
              className="group inline-flex items-center gap-3 font-semibold transition-colors duration-150 hover:text-accent"
            >
              Case Study
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
