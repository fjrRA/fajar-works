import type { ReactNode } from "react";
import Link from "next/link";

import type {
  NoteReadingStats,
} from "@/lib/content/note-reading-stats";
import {
  formatContentDate,
} from "@/lib/utils/format-content-date";
import type { Note } from "@/types/note";

type NoteDetailHeaderProps = {
  note: Note;
  headingId: string;
  readingStats: NoteReadingStats;
};

type MetadataItemProps = {
  label: string;
  children: ReactNode;
};

function MetadataItem({
  label,
  children,
}: MetadataItemProps) {
  return (
    <div
      className="
        min-w-0
        border-b
        border-line
        px-6
        py-5
        sm:border-r
        md:px-8
        lg:border-b-0
      "
    >
      <dt className="type-meta text-muted uppercase">
        {label}
      </dt>

      <dd className="mt-2 min-w-0 font-mono text-sm leading-6">
        {children}
      </dd>
    </div>
  );
}

export function NoteDetailHeader({
  note,
  headingId,
  readingStats,
}: NoteDetailHeaderProps) {
  const updatedAt =
    note.updatedAt ?? note.publishedAt;

  return (
    <header className="border-b border-line">
      <div
        className="
          px-6
          py-10
          md:px-8
          md:py-14
          lg:px-12
          lg:py-16
        "
      >
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between
            gap-5
          "
        >
          <Link
            href="/notes"
            className="
              group
              inline-flex
              items-center
              gap-3
              font-mono
              text-xs
              font-semibold
              tracking-widest
              uppercase
              transition-colors
              hover:text-accent
            "
          >
            <span
              aria-hidden="true"
              className="
                inline-block
                transition-transform
                group-hover:-translate-x-1
                motion-reduce:transition-none
              "
            >
              ←
            </span>

            Notes / 02
          </Link>

          <p className="type-label text-muted">
            Published {formatContentDate(note.publishedAt)}
          </p>
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="type-meta text-accent uppercase">
            {note.category}
          </p>

          <h1
            id={headingId}
            className="
              mt-5
              max-w-6xl
              wrap-break-word
              text-balance
              text-[clamp(3rem,8vw,7.75rem)]
              leading-[0.91]
              font-semibold
              tracking-[-0.06em]
              max-[359px]:text-[2.55rem]
            "
          >
            {note.title}
          </h1>

          <div
            className="
              mt-10
              grid
              gap-8
              border-t
              border-line
              pt-8
              lg:grid-cols-[minmax(0,1fr)_18rem]
              lg:items-start
            "
          >
            <p
              className="
                max-w-3xl
                text-lg
                leading-8
                text-muted
                md:text-xl
              "
            >
              {note.excerpt}
            </p>

            <p
              className="
                border-l-2
                border-accent
                pl-4
                font-mono
                text-xs
                leading-6
                tracking-[0.08em]
                text-muted
                uppercase
              "
            >
              Reading note<br />
              {readingStats.readingMinutes} min / {readingStats.wordCount} words
            </p>
          </div>
        </div>
      </div>

      <dl
        aria-label="Note information"
        className="
          grid
          border-t
          border-line
          sm:grid-cols-2
          lg:grid-cols-[0.8fr_0.8fr_0.55fr_1.85fr]
        "
      >
        <MetadataItem label="Published">
          <time dateTime={note.publishedAt}>
            {formatContentDate(
              note.publishedAt,
            )}
          </time>
        </MetadataItem>

        <MetadataItem label="Last revised">
          <time dateTime={updatedAt}>
            {formatContentDate(updatedAt)}
          </time>
        </MetadataItem>

        <MetadataItem label="Language">
          <span className="uppercase">
            {note.language}
          </span>
        </MetadataItem>

        <MetadataItem label="Filed under">
          <span className="wrap-break-word text-muted">
            {note.tags.join(" / ")}
          </span>
        </MetadataItem>
      </dl>
    </header>
  );
}
