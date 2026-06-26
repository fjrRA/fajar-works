// src/components/projects/project-detail/
// project-case-study-navigation.tsx

import Link from "next/link";

import type {
  ProjectNavigation,
  ProjectNavigationItem,
} from "@/lib/content/project-navigation";

type ProjectCaseStudyNavigationProps = {
  navigation: ProjectNavigation;
};

type ProjectNavigationDirection =
  | "previous"
  | "next";

type ProjectNavigationLinkProps = {
  direction: ProjectNavigationDirection;
  project: ProjectNavigationItem;
};

function ProjectNavigationLink({
  direction,
  project,
}: ProjectNavigationLinkProps) {
  const isPrevious =
    direction === "previous";

  const directionLabel = isPrevious
    ? "Previous Project"
    : "Next Project";

  const directionSymbol = isPrevious
    ? "←"
    : "→";

  return (
    <Link
      className="project-case-navigation__link"
      data-direction={direction}
      href={`/projects/${project.slug}`}
      aria-label={`${directionLabel}: ${project.title}`}
    >
      <span className="project-case-navigation__direction">
        {isPrevious ? (
          <>
            <span aria-hidden="true">
              {directionSymbol}
            </span>

            <span>{directionLabel}</span>
          </>
        ) : (
          <>
            <span>{directionLabel}</span>

            <span aria-hidden="true">
              {directionSymbol}
            </span>
          </>
        )}
      </span>

      <span className="project-case-navigation__title">
        {project.title}
      </span>

      <span className="project-case-navigation__summary">
        {project.summary}
      </span>
    </Link>
  );
}

export function ProjectCaseStudyNavigation({
  navigation,
}: ProjectCaseStudyNavigationProps) {
  const {
    previous,
    next,
  } = navigation;

  if (!previous && !next) {
    return null;
  }

  return (
    <nav
      className="project-case-navigation"
      aria-label="Project case study navigation"
    >
      <div className="project-case-navigation__header">
        <p className="project-case-navigation__label">
          Project Navigation
        </p>

        <p className="project-case-navigation__meta">
          Continue the Archive
        </p>
      </div>

      <div className="project-case-navigation__grid">
        {previous ? (
          <ProjectNavigationLink
            direction="previous"
            project={previous}
          />
        ) : null}

        {next ? (
          <ProjectNavigationLink
            direction="next"
            project={next}
          />
        ) : null}
      </div>
    </nav>
  );
}