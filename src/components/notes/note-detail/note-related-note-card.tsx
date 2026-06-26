// src/components/notes/note-detail/
// note-related-note-card.tsx

import Link from "next/link";

import type {
  RelatedNoteItem,
} from "@/lib/content/note-related";
import {
  formatContentDate,
} from "@/lib/utils/format-content-date";

type NoteRelatedNoteCardProps = {
  note: RelatedNoteItem;
  displayIndex: string;
};

export function NoteRelatedNoteCard({
  note,
  displayIndex,
}: NoteRelatedNoteCardProps) {
  return (
    <article
      className="
        min-w-0
        border-b
        border-line
        md:border-r
      "
    >
      <Link
        href={`/notes/${note.slug}`}
        data-related-note-slug={note.slug}
        className="
          group
          flex
          min-h-72
          min-w-0
          flex-col
          px-6
          py-8
          transition-colors
          duration-150
          hover:bg-panel
          focus-visible:outline-2
          focus-visible:-outline-offset-2
          focus-visible:outline-accent
          md:px-8
          lg:px-10
          lg:py-10
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
          <span className="type-label text-muted">
            {displayIndex}
          </span>

          <time
            className="type-meta text-muted uppercase"
            dateTime={note.publishedAt}
          >
            {formatContentDate(
              note.publishedAt,
            )}
          </time>
        </div>

        <div className="mt-auto pt-12">
          <p className="type-meta text-accent uppercase">
            {note.category}
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
              transition-colors
              group-hover:text-accent-strong
            "
          >
            {note.title}
          </h3>

          <p className="type-body mt-5 text-muted">
            {note.excerpt}
          </p>

          <p
            className="
              mt-6
              font-mono
              text-xs
              font-semibold
              tracking-widest
              text-accent
              uppercase
            "
          >
            Read Note

            <span
              aria-hidden="true"
              className="
                ml-3
                inline-block
                transition-transform
                duration-200
                group-hover:translate-x-1
                motion-reduce:transition-none
              "
            >
              →
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}