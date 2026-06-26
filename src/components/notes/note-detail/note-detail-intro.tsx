// src/components/notes/note-detail/
// note-detail-intro.tsx

import Link from "next/link";

import {
  SectionLabel,
} from "@/components/ui/section-label";
import type { Note } from "@/types/note";

type NoteDetailIntroProps = {
  note: Pick<
    Note,
    | "category"
    | "title"
    | "excerpt"
  >;
  headingId: string;
};

export function NoteDetailIntro({
  note,
  headingId,
}: NoteDetailIntroProps) {
  return (
    <div
      className="
        min-w-0
        border-b
        border-line
        px-6
        py-10
        md:px-8
        md:py-14
        lg:border-r
        lg:border-b-0
        lg:px-10
        lg:py-16
      "
    >
      <Link
        href="/notes"
        className="
          group
          inline-flex
          items-center
          gap-4
          border-b
          border-line
          pb-2
          font-mono
          text-xs
          font-semibold
          tracking-widest
          uppercase
          transition-colors
          duration-150
          hover:border-accent
          hover:text-accent
        "
      >
        <span
          aria-hidden="true"
          className="
            h-px
            w-8
            bg-current
            transition-transform
            duration-200
            group-hover:-translate-x-1
            motion-reduce:transition-none
          "
        />

        Back to Notes / 02
      </Link>

      <div className="mt-14">
        <SectionLabel index="02">
          Published Note
        </SectionLabel>

        <p className="type-meta mt-8 text-accent uppercase">
          {note.category}
        </p>

        <h1
          id={headingId}
          className="
            mt-4
            max-w-5xl
            wrap-break-word
            text-balance
            text-[clamp(2.5rem,7vw,6.5rem)]
            leading-[0.9]
            font-bold
            tracking-[-0.055em]
            uppercase
            max-[359px]:text-[2.15rem]
          "
        >
          {note.title}
        </h1>

        <p className="type-body mt-8 max-w-3xl text-muted">
          {note.excerpt}
        </p>
      </div>
    </div>
  );
}