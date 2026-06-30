import type {
  NoteReadingStats,
} from "@/lib/content/note-reading-stats";
import type {
  Note,
} from "@/types/note";

type NoteDetailHeaderIntroProps = {
  note: Pick<
    Note,
    "category" | "title" | "excerpt"
  >;
  headingId: string;
  readingStats: NoteReadingStats;
};

export function NoteDetailHeaderIntro({
  note,
  headingId,
  readingStats,
}: NoteDetailHeaderIntroProps) {
  return (
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
  );
}
