// src/components/not-found/not-found-recovery-link.tsx

import Link from "next/link";

type NotFoundRecoveryLinkProps = {
  index: string;
  label: string;
  href: string;
};

export function NotFoundRecoveryLink({
  index,
  label,
  href,
}: NotFoundRecoveryLinkProps) {
  return (
    <Link
      href={href}
      className="
        group
        grid
        min-w-0
        grid-cols-[2.5rem_minmax(0,1fr)_auto]
        items-center
        gap-3
        border-b
        border-line
        py-5
        transition-colors
        duration-150
        hover:bg-panel
        hover:text-accent-strong
        motion-reduce:transition-none
      "
    >
      <span
        className="
          type-meta
          text-muted
          group-hover:text-accent-strong
        "
      >
        {index}
      </span>

      <span
        className="
          min-w-0
          text-base
          font-semibold
          tracking-[-0.01em]
          uppercase
        "
      >
        {label}
      </span>

      <span
        aria-hidden="true"
        className="
          font-mono
          text-sm
          transition-transform
          duration-200
          group-hover:translate-x-1
          motion-reduce:transition-none
        "
      >
        →
      </span>
    </Link>
  );
}
