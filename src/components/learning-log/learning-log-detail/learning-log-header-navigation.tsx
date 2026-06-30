import Link from "next/link";

import {
  formatContentDate,
} from "@/lib/utils/format-content-date";

type LearningLogHeaderNavigationProps = {
  loggedAt: string;
};

export function LearningLogHeaderNavigation({
  loggedAt,
}: LearningLogHeaderNavigationProps) {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        justify-between
        gap-5
        border-b
        border-line
        px-6
        py-5
        md:px-8
        lg:px-10
      "
    >
      <Link
        href="/learning-log"
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

        Learning Log / 03
      </Link>

      <p className="type-label text-muted">
        Logged {formatContentDate(loggedAt)}
      </p>
    </div>
  );
}
