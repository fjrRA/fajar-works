// src/components/home/home-hero/hero-actions.tsx
import Link from "next/link";

export function HeroActions() {
  return (
    <nav
      aria-label="Homepage primary actions"
      className="
        flex
        flex-wrap
        items-center
        gap-x-8
        gap-y-4
      "
    >
      <Link
        href="#selected-work"
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
        Selected Work

        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-y-0.5 motion-reduce:transition-none"
        >
          &darr;
        </span>
      </Link>

      <Link
        href="/about"
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
        About Fajar
      </Link>
    </nav>
  );
}
