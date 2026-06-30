import type {
  ContactAvailabilityContent,
} from "@/types/contact";

import type {
  ContactHeroEmail,
} from "./contact-hero.types";

type ContactAvailabilitySignalProps = {
  content: ContactAvailabilityContent;
  availabilityCode: string;
  email: ContactHeroEmail;
};

export function ContactAvailabilitySignal({
  content,
  availabilityCode,
  email,
}: ContactAvailabilitySignalProps) {
  return (
    <aside
      aria-label="Current contact availability"
      className="contact-hero__signal flex min-w-0 flex-col"
    >
      <div
        className="
          contact-hero__signal-body
          flex
          flex-1
          flex-col
          px-6
          py-10
          md:px-8
          md:py-14
          lg:px-10
          lg:py-16
        "
      >
        <p className="type-label">
          01 / {content.label}
        </p>

        <div className="mt-12 md:mt-16 lg:mt-auto">
          <p
            className="
              flex
              items-center
              gap-3
              font-mono
              text-sm
              font-semibold
              tracking-[0.12em]
              uppercase
            "
          >
            <span
              aria-hidden="true"
              className="size-2 bg-inverse"
            />

            {availabilityCode}
          </p>

          <h2
            className="
              contact-hero__availability-title
              mt-6
              max-w-xl
              font-semibold
              uppercase
            "
          >
            {content.title}
          </h2>

          <p className="contact-hero__signal-copy type-body mt-8 max-w-lg">
            {content.description}
          </p>
        </div>
      </div>

      <a
        href={email.href}
        className="contact-hero__email group block px-6 py-6 md:px-8 lg:px-10"
      >
        <span className="type-meta uppercase">
          Primary channel
        </span>

        <span
          className="
            mt-3
            flex
            min-w-0
            items-end
            justify-between
            gap-5
          "
        >
          <span className="min-w-0 wrap-break-word font-medium">
            {email.value}
          </span>

          <span
            aria-hidden="true"
            className="shrink-0 text-xl transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
          >
            →
          </span>
        </span>
      </a>
    </aside>
  );
}
