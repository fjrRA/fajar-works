// src/components/contact/
// contact-professional-note.tsx

import type {
  ContactClosingContent,
} from "@/types/contact";
import type { Social } from "@/types/social";

type ContactProfessionalNoteProps = {
  content: ContactClosingContent;
  email: Pick<Social, "href">;
};

export function ContactProfessionalNote({
  content,
  email,
}: ContactProfessionalNoteProps) {
  return (
    <aside
      aria-label="Professional contact note"
      className="
        flex
        min-w-0
        flex-col
        justify-between
        gap-12
        bg-panel
        px-6
        py-10
        md:px-8
        lg:px-10
        lg:py-14
      "
    >
      <div>
        <p className="type-label text-accent">
          {content.label}
        </p>

        <h3
          className="
            mt-5
            max-w-xl
            wrap-break-word
            text-balance
            text-[clamp(2rem,4vw,3.5rem)]
            leading-[0.95]
            font-semibold
            tracking-[-0.045em]
            uppercase
          "
        >
          {content.title}
        </h3>

        <div className="mt-8 max-w-xl space-y-5">
          {content.paragraphs.map(
            (paragraph) => (
              <p
                key={paragraph}
                className="type-body text-muted"
              >
                {paragraph}
              </p>
            ),
          )}
        </div>
      </div>

      <a
        href={email.href}
        className="
          group
          inline-flex
          items-center
          justify-between
          gap-6
          border-t
          border-b
          border-line
          py-5
          font-mono
          text-sm
          font-semibold
          tracking-widest
          text-accent-strong
          uppercase
        "
      >
        {content.ctaLabel}

        <span
          aria-hidden="true"
          className="
            transition-transform
            duration-200
            group-hover:translate-x-1
            motion-reduce:transition-none
          "
        >
          →
        </span>
      </a>
    </aside>
  );
}