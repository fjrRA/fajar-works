// src/components/notes/note-detail/
// note-detail-header.tsx

import type { Note } from "@/types/note";

import {
  NoteDetailFile,
} from "./note-detail-file";
import {
  NoteDetailIntro,
} from "./note-detail-intro";

type NoteDetailHeaderProps = {
  note: Note;
  headingId: string;
};

export function NoteDetailHeader({
  note,
  headingId,
}: NoteDetailHeaderProps) {
  return (
    <header
      className="
        grid
        border-b
        border-line
        lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]
      "
    >
      <NoteDetailIntro
        note={note}
        headingId={headingId}
      />

      <NoteDetailFile note={note} />
    </header>
  );
}