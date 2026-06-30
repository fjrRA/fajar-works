import type {
  ContactClosingContent,
} from "@/types/contact";
import type {
  Social,
} from "@/types/social";

type ContactProfessionalNoteProps = {
  content: ContactClosingContent;
  email: Pick<
    Social,
    "href" | "value"
  >;
};

export function ContactProfessionalNote({
  content,
  email,
}: ContactProfessionalNoteProps) {
  return (
    <aside
      aria-label="Professional contact note"
      className="contact-professional-note flex min-w-0 flex-col"
    >
      <div
        className="
          flex
          flex-1
          flex-col
          px-6
          py-10
          md:px-8
          lg:px-10
          lg:py-14
        "
      >
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between
            gap-4
          "
        >
          <p className="type-label text-accent-strong">
            {content.label}
          </p>

          <p className="type-meta text-muted uppercase">
            Message brief / 02 fields
          </p>
        </div>

        <h3
          className="
            mt-12
            max-w-4xl
            wrap-break-word
            text-balance
            text-[clamp(2.75rem,6vw,6rem)]
            leading-[0.9]
            font-semibold
            tracking-[-0.06em]
            uppercase
          "
        >
          {content.title}
        </h3>

        <div
          className="
            mt-14
            grid
            min-w-0
            border-t
            border-line
            md:grid-cols-2
          "
        >
          {content.paragraphs.map(
            (paragraph, index) => (
              <div
                key={paragraph}
                className="
                  min-w-0
                  border-b
                  border-line
                  py-7
                  md:border-r
                  md:px-6
                  md:first:pl-0
                  md:last:border-r-0
                  md:last:pr-0
                "
              >
                <p className="type-meta text-accent-strong uppercase">
                  {String(index + 1).padStart(
                    2,
                    "0",
                  )} / Context
                </p>

                <p className="type-body mt-5 text-muted">
                  {paragraph}
                </p>
              </div>
            ),
          )}
        </div>
      </div>

      <a
        href={email.href}
        className="contact-professional-note__cta group block px-6 py-7 md:px-8 lg:px-10"
      >
        <span
          className="
            flex
            min-w-0
            items-center
            justify-between
            gap-6
          "
        >
          <span>
            <span className="type-label block">
              {content.ctaLabel}
            </span>

            <span className="mt-2 block min-w-0 wrap-break-word font-mono text-xs">
              {email.value}
            </span>
          </span>

          <span
            aria-hidden="true"
            className="contact-professional-note__arrow flex size-12 shrink-0 items-center justify-center border text-xl transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
          >
            →
          </span>
        </span>
      </a>
    </aside>
  );
}
