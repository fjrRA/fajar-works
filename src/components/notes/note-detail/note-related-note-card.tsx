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
        even:bg-panel
        md:border-r
        md:last:border-r-0
      "
    >
      <Link
        href={`/notes/${note.slug}`}
        data-related-note-slug={note.slug}
        className="
          group
          flex
          min-h-[24rem]
          min-w-0
          flex-col
          px-6
          py-7
          transition-colors
          duration-150
          hover:bg-panel-strong
          focus-visible:outline-2
          focus-visible:-outline-offset-2
          focus-visible:outline-accent
          md:px-8
          lg:px-10
          lg:py-9
        "
      >
        <header
          className="
            flex
            items-start
            justify-between
            gap-6
            border-b
            border-line
            pb-4
          "
        >
          <p className="type-label text-muted">
            Note / {displayIndex}
          </p>

          <time
            className="type-meta text-right text-muted uppercase"
            dateTime={note.publishedAt}
          >
            {formatContentDate(
              note.publishedAt,
            )}
          </time>
        </header>

        <div className="mt-12">
          <p className="type-meta text-accent uppercase">
            {note.category}
          </p>

          <h3
            className="
              mt-3
              max-w-xl
              wrap-break-word
              text-[clamp(1.75rem,3vw,2.75rem)]
              leading-[1.02]
              font-semibold
              tracking-[-0.045em]
              transition-colors
              group-hover:text-accent-strong
            "
          >
            {note.title}
          </h3>

          <p className="type-body mt-5 max-w-xl text-muted">
            {note.excerpt}
          </p>
        </div>

        <footer
          className="
            mt-auto
            flex
            items-end
            justify-between
            gap-6
            pt-10
          "
        >
          <span
            className="
              border-b
              border-ink
              pb-1
              font-mono
              text-xs
              font-semibold
              tracking-widest
              uppercase
            "
          >
            Open Note
          </span>

          <span
            aria-hidden="true"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              border
              border-ink
              transition-colors
              group-hover:bg-ink
              group-hover:text-inverse
            "
          >
            →
          </span>
        </footer>
      </Link>
    </article>
  );
}
