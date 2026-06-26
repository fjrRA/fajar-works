// src/components/notes/note-detail/
// note-detail-file.tsx

import {
  formatContentDate,
} from "@/lib/utils/format-content-date";
import type { Note } from "@/types/note";

type NoteDetailFileProps = {
  note: Pick<
    Note,
    | "publishedAt"
    | "updatedAt"
    | "language"
    | "tags"
  >;
};

export function NoteDetailFile({
  note,
}: NoteDetailFileProps) {
  return (
    <aside
      aria-label="Note information"
      className="
        flex
        min-w-0
        flex-col
        justify-between
        gap-12
        px-6
        py-10
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
      "
    >
      <div>
        <p className="type-label text-muted">
          Note File
        </p>

        <dl className="mt-8 border-t border-line">
          <div
            className="
              flex
              items-start
              justify-between
              gap-6
              border-b
              border-line
              py-4
            "
          >
            <dt className="type-meta text-muted uppercase">
              Published
            </dt>

            <dd className="font-mono text-right text-sm uppercase">
              <time dateTime={note.publishedAt}>
                {formatContentDate(
                  note.publishedAt,
                )}
              </time>
            </dd>
          </div>

          {note.updatedAt ? (
            <div
              className="
                flex
                items-start
                justify-between
                gap-6
                border-b
                border-line
                py-4
              "
            >
              <dt className="type-meta text-muted uppercase">
                Updated
              </dt>

              <dd className="font-mono text-right text-sm uppercase">
                <time dateTime={note.updatedAt}>
                  {formatContentDate(
                    note.updatedAt,
                  )}
                </time>
              </dd>
            </div>
          ) : null}

          <div
            className="
              flex
              items-start
              justify-between
              gap-6
              border-b
              border-line
              py-4
            "
          >
            <dt className="type-meta text-muted uppercase">
              Language
            </dt>

            <dd className="font-mono text-sm uppercase">
              {note.language}
            </dd>
          </div>
        </dl>
      </div>

      <div>
        <p className="type-label text-muted">
          Tags
        </p>

        <ul
          aria-label="Note tags"
          className="
            mt-4
            flex
            flex-wrap
            border-t
            border-l
            border-line
          "
        >
          {note.tags.map((tag) => (
            <li
              key={tag}
              className="
                border-r
                border-b
                border-line
                px-3
                py-2
                font-mono
                text-xs
                uppercase
              "
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}