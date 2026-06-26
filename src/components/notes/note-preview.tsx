// src/components/notes/note-preview.tsx

import Link from "next/link";

import {
  formatContentDate,
} from "@/lib/utils/format-content-date";
import type { Note } from "@/types/note";

type NotePreviewProps = {
  note: Note;
  displayIndex: string;
};

export function NotePreview({
  note,
  displayIndex,
}: NotePreviewProps) {
  return (
    <article
      lang={note.language}
      data-note-slug={note.slug}
      data-published-at={note.publishedAt}
    >
      <Link
        href={`/notes/${note.slug}`}
        className="
          group
          grid
          min-w-0
          gap-6
          px-6
          py-8
          transition-colors
          duration-150
          hover:bg-panel
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:-outline-offset-2
          focus-visible:outline-accent
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
              gap-4
              sm:flex-row
              sm:items-start
              sm:justify-between
            "
          >
            <div className="min-w-0">
              <p className="type-meta text-accent uppercase">
                {note.category}
              </p>

              <h3
                className="
                  mt-3
                  max-w-3xl
                  text-balance
                  text-2xl
                  leading-[1.02]
                  font-semibold
                  tracking-[-0.035em]
                  uppercase
                  transition-colors
                  duration-150
                  group-hover:text-accent-strong
                  md:text-3xl
                "
              >
                {note.title}
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
                text-muted
                uppercase
              "
            >
              <time dateTime={note.publishedAt}>
                {formatContentDate(
                  note.publishedAt,
                )}
              </time>

              <span
                aria-hidden="true"
                className="text-line"
              >
                /
              </span>

              <span>{note.language}</span>
            </div>
          </div>

          <p className="type-body mt-6 max-w-2xl text-muted">
            {note.excerpt}
          </p>

          <div
            className="
              mt-6
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <p
              className="
                min-w-0
                font-mono
                text-xs
                leading-6
                tracking-[0.06em]
                text-muted
                uppercase
              "
              aria-label={`Tags: ${note.tags.join(
                ", ",
              )}`}
            >
              {note.tags.join(" / ")}
            </p>

            <span
              className="
                shrink-0
                font-mono
                text-xs
                font-semibold
                tracking-[0.1em]
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
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}