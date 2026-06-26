// src/components/notes/notes-index.tsx

import { Container } from "@/components/layout/container";
import type { Note } from "@/types/note";

import { NotePreview } from "./note-preview";
import {
  NotesEmptyState,
} from "./notes-empty-state";
import {
  NotesIndexHeader,
} from "./notes-index-header";

type NotesIndexProps = {
  notes: readonly Note[];
};

const NOTES_INDEX_HEADING_ID =
  "notes-index-heading";

export function NotesIndex({
  notes,
}: NotesIndexProps) {
  return (
    <section
      aria-labelledby={
        NOTES_INDEX_HEADING_ID
      }
      className="border-b border-line"
    >
      <Container>
        <div
          className="
            min-w-0
            border-x
            border-line
          "
        >
          <NotesIndexHeader
            headingId={
              NOTES_INDEX_HEADING_ID
            }
            noteCount={notes.length}
          />

          {notes.length > 0 ? (
            <div className="divide-y divide-line">
              {notes.map((note, index) => (
                <NotePreview
                  key={note.slug}
                  note={note}
                  displayIndex={String(
                    index + 1,
                  ).padStart(2, "0")}
                />
              ))}
            </div>
          ) : (
            <NotesEmptyState />
          )}
        </div>
      </Container>
    </section>
  );
}