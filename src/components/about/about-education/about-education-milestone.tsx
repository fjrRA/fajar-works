import Link from "next/link";

import type {
  AboutEducationHighlight,
} from "@/types/about";

type AboutEducationMilestoneProps = {
  highlight: AboutEducationHighlight;
};

export function AboutEducationMilestone({
  highlight,
}: AboutEducationMilestoneProps) {
  return (
    <article className="border-b border-line">
      <Link
        href={highlight.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${highlight.linkLabel}: ${highlight.title}`}
        className="
          group
          grid
          min-w-0
          gap-6
          px-6
          py-8
          transition-colors
          hover:bg-panel
          focus-visible:outline-2
          focus-visible:-outline-offset-2
          focus-visible:outline-accent
          md:px-8
          lg:grid-cols-[4rem_8rem_minmax(0,1fr)_3rem]
          lg:items-start
          lg:px-10
          lg:py-10
        "
      >
        <p className="type-label text-accent">
          {highlight.index}
        </p>

        <div>
          <p
            className="
              text-3xl
              leading-none
              font-semibold
              tracking-[-0.04em]
            "
          >
            {highlight.period}
          </p>

          <p className="type-meta mt-2 text-muted uppercase">
            {highlight.type}
          </p>
        </div>

        <div className="min-w-0">
          <h3
            className="
              wrap-break-word
              text-2xl
              leading-[1.05]
              font-semibold
              tracking-[-0.035em]
              transition-colors
              group-hover:text-accent-strong
            "
          >
            {highlight.title}
          </h3>

          <p className="type-body mt-4 max-w-3xl text-muted">
            {highlight.description}
          </p>

          <p className="type-meta mt-5 text-accent uppercase lg:hidden">
            {highlight.linkLabel} ↗
          </p>
        </div>

        <span
          aria-hidden="true"
          className="
            hidden
            h-10
            w-10
            items-center
            justify-center
            border
            border-ink
            transition-colors
            group-hover:bg-ink
            group-hover:text-inverse
            lg:flex
          "
        >
          ↗
        </span>
      </Link>
    </article>
  );
}
