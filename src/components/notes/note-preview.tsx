// src/components/notes/note-preview.tsx
import { formatContentDate } from "@/lib/utils/format-content-date";
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
      className="
        grid
        gap-6
        px-6
        py-8
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

            <span className="text-line">/</span>

            <span>{note.language}</span>
          </div>
        </div>

        <p className="type-body mt-6 max-w-2xl text-muted">
          {note.excerpt}
        </p>

        <p
          className="
            mt-6
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
      </div>
    </article>
  );
}