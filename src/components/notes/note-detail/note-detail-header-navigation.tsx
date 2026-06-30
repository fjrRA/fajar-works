import Link from "next/link";

import {
  formatContentDate,
} from "@/lib/utils/format-content-date";

type NoteDetailHeaderNavigationProps = {
  publishedAt: string;
};

export function NoteDetailHeaderNavigation({
  publishedAt,
}: NoteDetailHeaderNavigationProps) {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        justify-between
        gap-5
      "
    >
      <Link
        href="/notes"
        className="
          group
          inline-flex
          items-center
          gap-3
          font-mono
          text-xs
          font-semibold
          tracking-widest
          uppercase
          transition-colors
          hover:text-accent
        "
      >
        <span
          aria-hidden="true"
          className="
            inline-block
            transition-transform
            group-hover:-translate-x-1
            motion-reduce:transition-none
          "
        >
          ←
        </span>

        Notes / 02
      </Link>

      <p className="type-label text-muted">
        Published {formatContentDate(publishedAt)}
      </p>
    </div>
  );
}
