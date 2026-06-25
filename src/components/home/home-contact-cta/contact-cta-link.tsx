// src/components/home/home-contact-cta/contact-cta-link.tsx
import Link from "next/link";

type ContactCtaLinkProps = {
  href: string;
  label: string;
};

export function ContactCtaLink({
  href,
  label,
}: ContactCtaLinkProps) {
  return (
    <Link
      href={href}
      className="
        group
        inline-flex
        w-fit
        items-center
        gap-5
        border-b
        border-ink
        pb-3
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
      {label} / 05

      <span
        aria-hidden="true"
        className="
          h-px
          w-10
          bg-current
          transition-transform
          duration-200
          ease-out
          group-hover:translate-x-2
          motion-reduce:transition-none
        "
      />
    </Link>
  );
}