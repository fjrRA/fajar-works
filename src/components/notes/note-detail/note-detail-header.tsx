import type {
  NoteReadingStats,
} from "@/lib/content/note-reading-stats";
import type {
  Note,
} from "@/types/note";

import {
  NoteDetailHeaderIntro,
} from "./note-detail-header-intro";
import {
  NoteDetailHeaderMetadata,
} from "./note-detail-header-metadata";
import {
  NoteDetailHeaderNavigation,
} from "./note-detail-header-navigation";

type NoteDetailHeaderProps = {
  note: Note;
  headingId: string;
  readingStats: NoteReadingStats;
};

export function NoteDetailHeader({
  note,
  headingId,
  readingStats,
}: NoteDetailHeaderProps) {
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
        <NoteDetailHeaderNavigation
          publishedAt={note.publishedAt}
        />

        <NoteDetailHeaderIntro
          note={note}
          headingId={headingId}
          readingStats={readingStats}
        />
      </div>

      <NoteDetailHeaderMetadata note={note} />
    </header>
  );
}
