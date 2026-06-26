// src/components/notes/note-detail/
// note-detail.tsx

import { Container } from "@/components/layout/container";
import {
  extractNoteHeadings,
} from "@/lib/content/note-headings";
import type {
  RelatedNoteItem,
} from "@/lib/content/note-related";
import type { Note } from "@/types/note";

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
    );

  const hasHeadings =
    headings.length > 0;

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
            lang={note.language}
            aria-labelledby={
              NOTE_DETAIL_HEADING_ID
            }
          >
            <NoteDetailHeader
              note={note}
              headingId={
                NOTE_DETAIL_HEADING_ID
              }
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
                    lg:px-8
                    lg:py-16
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
                  lg:px-10
                  lg:py-20
                  ${hasHeadings
                    ? "lg:border-r lg:border-line"
                    : ""
                  }
                `}
              >
                <NoteMarkdown
                  content={note.content}
                />
              </section>
            </div>
          </article>

          <NoteRelatedNotes
            notes={relatedNotes}
          />
        </div>
      </Container>
    </section>
  );
}