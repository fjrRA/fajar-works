// src/components/home/home-note-entry.tsx

import Link from "next/link";

import { cn } from "@/lib/utils/cn";
import { formatContentDate } from "@/lib/utils/format-content-date";
import type { Note } from "@/types/note";

type HomeNoteEntryProps = {
  displayIndex: string;
  isLead?: boolean;
  note: Note;
};

export function HomeNoteEntry({
  displayIndex,
  isLead = false,
  note,
}: HomeNoteEntryProps) {
  return (
    <article
      lang={note.language}
      data-note-slug={note.slug}
      className="h-full"
    >
      <Link
        href={`/notes/${note.slug}`}
        className={cn(
          "group flex h-full min-w-0 flex-col justify-between px-6 py-8 transition-colors duration-150 hover:bg-panel-strong focus-visible:-outline-offset-2 md:px-8 lg:px-10",
          isLead
            ? "min-h-[34rem] lg:py-12"
            : "min-h-[17rem] lg:py-9",
        )}
      >
        <div className="flex items-start justify-between gap-6 font-mono text-xs text-muted uppercase">
          <span>{displayIndex}</span>

          <span className="text-right">
            <time dateTime={note.publishedAt}>
              {formatContentDate(note.publishedAt)}
            </time>
            <span aria-hidden="true"> / </span>
            {note.language}
          </span>
        </div>

        <div className={isLead ? "mt-20" : "mt-12"}>
          <p className="type-meta text-accent uppercase">
            {note.category}
          </p>

          <h3
            className={cn(
              "mt-3 text-balance leading-[0.96] font-semibold tracking-[-0.045em] uppercase transition-colors duration-150 group-hover:text-accent-strong",
              isLead
                ? "max-w-4xl text-[clamp(2.75rem,5vw,5.25rem)]"
                : "max-w-2xl text-[clamp(1.75rem,3vw,2.75rem)]",
            )}
          >
            {note.title}
          </h3>

          <p
            className={cn(
              "type-body mt-6 text-muted",
              isLead ? "max-w-2xl" : "max-w-xl",
            )}
          >
            {note.excerpt}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-line pt-5 sm:flex-row sm:items-end sm:justify-between">
          <p
            className="font-mono text-xs leading-6 tracking-[0.06em] text-muted uppercase"
            aria-label={`Tags: ${note.tags.join(", ")}`}
          >
            {note.tags.join(" / ")}
          </p>

          <span className="shrink-0 font-mono text-xs font-semibold tracking-[0.1em] uppercase">
            Read
            <span
              aria-hidden="true"
              className="ml-3 inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              &rarr;
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
