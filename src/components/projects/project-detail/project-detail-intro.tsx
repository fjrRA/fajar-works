// src/components/projects/project-detail/
// project-detail-intro.tsx

import Link from "next/link";

import { SectionLabel } from "@/components/ui/section-label";
import type { Project } from "@/types/project";

type ProjectDetailIntroProps = {
  project: Pick<
    Project,
    | "order"
    | "category"
    | "title"
    | "summary"
  >;
  headingId: string;
};

export function ProjectDetailIntro({
  project,
  headingId,
}: ProjectDetailIntroProps) {
  const displayIndex = String(
    project.order,
  ).padStart(2, "0");

  return (
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

        <p className="type-meta mt-8 text-accent uppercase">
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
  );
}