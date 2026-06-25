// src/components/home/home-hero/hero-actions.tsx
import Link from "next/link";

export function HeroActions() {
  return (
    <nav
      aria-label="Homepage primary actions"
      className="
        flex
        flex-col
        items-start
        gap-4
        sm:flex-row
        sm:flex-wrap
        sm:gap-x-8
      "
    >
      <Link
        href="/projects"
        className="
          group
          inline-flex
          items-center
          gap-4
          border-b
          border-ink
          pb-2
          font-mono
          text-xs
          font-semibold
          tracking-[0.12em]
          uppercase
          transition-colors
          duration-150
          hover:border-accent
          hover:text-accent
        "
      >
        View Work / 01

        <span
          aria-hidden="true"
          className="
            h-px
            w-8
            bg-current
            transition-transform
            duration-200
            ease-out
            group-hover:translate-x-1
            motion-reduce:transition-none
          "
        />
      </Link>

      <Link
        href="/notes"
        className="
          inline-flex
          items-center
          border-b
          border-line
          pb-2
          font-mono
          text-xs
          font-semibold
          tracking-[0.12em]
          uppercase
          transition-colors
          duration-150
          hover:border-accent
          hover:text-accent
        "
      >
        Read Notes / 02
      </Link>
    </nav>
  );
}