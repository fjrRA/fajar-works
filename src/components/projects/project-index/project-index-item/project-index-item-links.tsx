// src/components/projects/project-index/project-index-item/project-index-item-links.tsx

import Link from "next/link";

type ProjectIndexItemLinksProps = {
  projectSlug: string;
  projectTitle: string;
  repositoryUrl: string;
  liveUrl?: string;
};

export function ProjectIndexItemLinks({
  projectSlug,
  projectTitle,
  repositoryUrl,
  liveUrl,
}: ProjectIndexItemLinksProps) {
  return (
    <nav
      aria-label={`${projectTitle} project links`}
      className="
        mt-8
        flex
        flex-col
        items-start
        gap-4
        sm:flex-row
        sm:flex-wrap
        sm:items-center
        sm:gap-x-8
      "
    >
      <Link
        href={`/projects/${projectSlug}`}
        className="
          group
          inline-flex
          items-center
          gap-4
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
        <span>
          View Case Study

          <span className="sr-only">
            {`: ${projectTitle}`}
          </span>
        </span>

        <span
          aria-hidden="true"
          className="
            h-px
            w-8
            bg-current
            transition-transform
            duration-200
            ease-out
            group-hover:translate-x-1
            motion-reduce:transition-none
          "
        />
      </Link>

      <a
        href={repositoryUrl}
        target="_blank"
        rel="noreferrer"
        className="
          inline-flex
          items-center
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
        Repository

        <span className="sr-only">
          {` for ${projectTitle}, opens in a new tab`}
        </span>
      </a>

      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex
            items-center
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

          <span className="sr-only">
            {` for ${projectTitle}, opens in a new tab`}
          </span>
        </a>
      ) : null}
    </nav>
  );
}