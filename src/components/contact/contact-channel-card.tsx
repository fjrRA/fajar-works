// src/components/contact/
// contact-channel-card.tsx

import type { Social } from "@/types/social";

type ContactChannelCardProps = {
  social: Social;
};

export function ContactChannelCard({
  social,
}: ContactChannelCardProps) {
  return (
    <article
      className="
        min-w-0
        border-b
        border-line
        md:border-r
      "
    >
      <a
        href={social.href}
        target={
          social.external
            ? "_blank"
            : undefined
        }
        rel={
          social.external
            ? "noreferrer"
            : undefined
        }
        className="
          group
          flex
          min-h-72
          min-w-0
          flex-col
          px-6
          py-8
          transition-colors
          duration-150
          hover:bg-panel
          focus-visible:outline-2
          focus-visible:-outline-offset-2
          focus-visible:outline-accent
          md:px-8
          lg:px-10
          lg:py-10
        "
        aria-label={
          social.external
            ? `Open ${social.label} in a new tab`
            : `Contact via ${social.label}`
        }
      >
        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <span className="type-label text-accent-strong">
            {social.index}
          </span>

          <span
            aria-hidden="true"
            className="
              text-accent-strong
              transition-transform
              duration-200
              group-hover:translate-x-1
              motion-reduce:transition-none
            "
          >
            {social.external
              ? "↗"
              : "→"}
          </span>
        </div>

        <div className="mt-auto pt-16">
          <p className="type-meta text-muted uppercase">
            Contact Channel
          </p>

          <h3
            className="
              mt-3
              text-3xl
              leading-none
              font-semibold
              tracking-[-0.04em]
              uppercase
            "
          >
            {social.label}
          </h3>

          <p
            className="
              mt-5
              min-w-0
              wrap-break-word
              font-mono
              text-sm
              leading-6
              text-muted
            "
          >
            {social.value}
          </p>
        </div>
      </a>
    </article>
  );
}