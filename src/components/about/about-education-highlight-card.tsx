// src/components/about/
// about-education-highlight-card.tsx

import Link from "next/link";

import type {
  AboutEducationHighlight,
} from "@/types/about";

type AboutEducationHighlightCardProps = {
  highlight: AboutEducationHighlight;
};

export function AboutEducationHighlightCard({
  highlight,
}: AboutEducationHighlightCardProps) {
  return (
    <article
      className="
        flex
        min-w-0
        flex-col
        border-b
        border-line
        px-6
        py-10
        md:border-r
        md:px-8
        lg:px-10
        lg:py-12
      "
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <span className="type-label text-accent-strong">
          {highlight.index}
        </span>

        <span className="type-meta text-muted uppercase">
          {highlight.period}
        </span>
      </div>

      <p className="type-meta mt-10 text-accent-strong uppercase">
        {highlight.type}
      </p>

      <h3
        className="
          mt-3
          wrap-break-word
          text-2xl
          leading-[1.02]
          font-semibold
          tracking-[-0.035em]
          uppercase
        "
      >
        {highlight.title}
      </h3>

      <p className="type-body mt-5 text-muted">
        {highlight.description}
      </p>

      <Link
        href={highlight.href}
        target="_blank"
        rel="noreferrer"
        className="
          group
          mt-8
          inline-flex
          items-center
          gap-3
          self-start
          font-mono
          text-xs
          font-semibold
          tracking-widest
          text-accent
          uppercase
        "
        aria-label={`${highlight.linkLabel}: ${highlight.title}`}
      >
        {highlight.linkLabel}

        <span
          aria-hidden="true"
          className="
            inline-block
            transition-transform
            duration-200
            group-hover:translate-x-1
            motion-reduce:transition-none
          "
        >
          ↗
        </span>
      </Link>
    </article>
  );
}