// src/components/projects/project-detail/project-detail-header.tsx
import Link from "next/link";

import {
  getProjectStatusClassName,
} from "@/components/projects/project-status";
import { SectionLabel } from "@/components/ui/section-label";
import type { Project } from "@/types/project";

type ProjectDetailHeaderProps = {
  project: Project;
  headingId: string;
};

export function ProjectDetailHeader({
  project,
  headingId,
}: ProjectDetailHeaderProps) {
  const displayIndex = String(
    project.order,
  ).padStart(2, "0");

  return (
    <header
      className="
        grid
        border-b
        border-line
        lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]
      "
    >
      <div
        className="
          min-w-0
          border-b
          border-line
          px-6
          py-10
          md:px-8
          md:py-14
          lg:border-r
          lg:border-b-0
          lg:px-10
          lg:py-16
        "
      >
        <Link
          href="/projects"
          className="
            group
            inline-flex
            items-center
            gap-4
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
          <span
            aria-hidden="true"
            className="
              h-px
              w-8
              bg-current
              transition-transform
              duration-200
              ease-out
              group-hover:-translate-x-1
              motion-reduce:transition-none
            "
          />

          Back to Work / 01
        </Link>

        <div className="mt-14">
          <SectionLabel index={displayIndex}>
            Case Study
          </SectionLabel>

          <p className="type-meta mt-8 text-accent uppercase ">
            {project.category}
          </p>

          <h1
            id={headingId}
            className="
              mt-4
              max-w-full
              break-words
              text-balance
              text-[clamp(2.75rem,8vw,7rem)]
              leading-[0.88]
              font-bold
              tracking-[-0.055em]
              uppercase
              max-[359px]:text-[2.22rem]
              max-[359px]:tracking-[-0.04em]
            "
          >
            {project.title}
          </h1>

          <p className="type-body mt-8 max-w-3xl text-muted">
            {project.summary}
          </p>
        </div>
      </div>

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
    </header>
  );
}