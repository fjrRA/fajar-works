import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import type {
  RelatedNoteItem,
} from "@/lib/content/note-related";

import {
  NoteRelatedNoteCard,
} from "./note-related-note-card";

type NoteRelatedNotesProps = {
  notes: readonly RelatedNoteItem[];
};

const RELATED_NOTES_HEADING_ID =
  "related-notes-heading";

export function NoteRelatedNotes({
  notes,
}: NoteRelatedNotesProps) {
  if (notes.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby={
        RELATED_NOTES_HEADING_ID
      }
      className="border-t border-line"
    >
      <header
        className="
          grid
          gap-6
          border-b
          border-line
          px-6
          py-10
          md:px-8
          lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.38fr)]
          lg:px-12
          lg:py-12
        "
      >
        <div>
          <SectionLabel index="03">
            Continue Reading
          </SectionLabel>

          <SectionHeading
            id={
              RELATED_NOTES_HEADING_ID
            }
            className="mt-3"
          >
            Further Notes
          </SectionHeading>
        </div>

        <p className="type-body max-w-md text-muted lg:justify-self-end">
          More writing connected by
          category, tags, or publication
          context.
        </p>
      </header>

      <div className="grid md:grid-cols-2">
        {notes.map((note, index) => (
          <NoteRelatedNoteCard
            key={note.slug}
            note={note}
            displayIndex={String(
              index + 1,
            ).padStart(2, "0")}
          />
        ))}
      </div>
    </section>
  );
}
