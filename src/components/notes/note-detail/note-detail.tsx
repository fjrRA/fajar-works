// src/components/notes/note-detail/
// note-detail.tsx

import { Container } from "@/components/layout/container";
import {
  extractNoteHeadings,
} from "@/lib/content/note-headings";
import {
  getNoteReadingStats,
} from "@/lib/content/note-reading-stats";
import type {
  RelatedNoteItem,
} from "@/lib/content/note-related";
import type { Note } from "@/types/note";

import {
  NoteBackToTop,
} from "./note-back-to-top";
import {
  NoteDetailHeader,
} from "./note-detail-header";
import {
  NoteMarkdown,
} from "./note-markdown";
import {
  NoteRelatedNotes,
} from "./note-related-notes";
import {
  NoteRepositoryReference,
} from "./note-repository-reference";
import {
  NoteTableOfContents,
} from "./note-table-of-contents";

type NoteDetailProps = {
  note: Note;
  relatedNotes: readonly RelatedNoteItem[];
};

const NOTE_DETAIL_HEADING_ID =
  "note-detail-heading";

export function NoteDetail({
  note,
  relatedNotes,
}: NoteDetailProps) {
  const headings =
    extractNoteHeadings(
      note.content,
    ).filter(
      (heading) =>
        heading.depth === 2,
    );

  const hasHeadings =
    headings.length > 0;

  const readingStats =
    getNoteReadingStats(note.content);

  return (
    <section className="border-b border-line">
      <Container>
        <div
          className="
            min-w-0
            border-x
            border-line
          "
        >
          <article
            id="note-top"
            lang={note.language}
            className="scroll-mt-[calc(var(--header-height)+1rem)]"
            aria-labelledby={
              NOTE_DETAIL_HEADING_ID
            }
          >
            <NoteDetailHeader
              note={note}
              headingId={
                NOTE_DETAIL_HEADING_ID
              }
              readingStats={readingStats}
            />

            <div
              className={
                hasHeadings
                  ? `
                    grid
                    min-w-0
                    lg:grid-cols-[minmax(0,1fr)_20rem]
                  `
                  : "min-w-0"
              }
            >
              {hasHeadings ? (
                <aside
                  aria-label="Note contents"
                  className="
                    min-w-0
                    border-b
                    border-line
                    px-6
                    py-10
                    md:px-8
                    lg:col-start-2
                    lg:row-start-1
                    lg:border-b-0
                    lg:px-7
                    lg:py-20
                  "
                >
                  <NoteTableOfContents
                    headings={headings}
                  />
                </aside>
              ) : null}

              <section
                aria-label="Note article content"
                className={`
                  min-w-0
                  px-6
                  py-12
                  md:px-8
                  md:py-16
                  lg:col-start-1
                  lg:row-start-1
                  lg:px-12
                  lg:py-20
                  ${hasHeadings
                    ? "lg:border-r lg:border-line"
                    : ""
                  }
                `}
              >
                <div className="mx-auto max-w-4xl">
                  <NoteMarkdown
                    content={note.content}
                  />

                  <div
                    className="
                      mt-16
                      flex
                      flex-wrap
                      items-center
                      justify-between
                      gap-5
                      border-t
                      border-line
                      pt-6
                    "
                  >
                    <p className="type-label text-muted">
                      End of note
                    </p>

                    <p className="type-meta text-muted uppercase">
                      {note.category} / {readingStats.readingMinutes} min
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </article>

          {note.repositoryUrl ? (
            <NoteRepositoryReference
              repositoryUrl={
                note.repositoryUrl
              }
            />
          ) : null}

          <NoteRelatedNotes
            notes={relatedNotes}
          />
        </div>
      </Container>

      <NoteBackToTop />
    </section>
  );
}
