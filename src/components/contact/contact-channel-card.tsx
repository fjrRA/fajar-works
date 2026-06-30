import type {
  Social,
} from "@/types/social";

type ContactChannelCardProps = {
  social: Social;
  variant: "primary" | "supporting";
};

export function ContactChannelCard({
  social,
  variant,
}: ContactChannelCardProps) {
  const isPrimary = variant === "primary";

  return (
    <article
      className={`
        contact-channel-card
        contact-channel-card--${variant}
        min-w-0
      `}
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
          min-w-0
          flex-col
          px-6
          py-8
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
            items-center
            justify-between
            gap-4
          "
        >
          <span className="contact-channel-card__register type-label">
            {isPrimary
              ? "Primary route"
              : "Supporting route"}
          </span>

          <span
            aria-hidden="true"
            className="contact-channel-card__index type-label"
          >
            {social.index}
          </span>
        </div>

        <div className="mt-auto pt-16 lg:pt-20">
          <h3
            className={`
              contact-channel-card__title
              font-semibold
              tracking-[-0.055em]
              uppercase
              ${
                isPrimary
                  ? "text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.82]"
                  : "text-[clamp(2rem,4vw,3.25rem)] leading-[0.9]"
              }
            `}
          >
            {social.label}
          </h3>

          <div
            className="
              contact-channel-card__footer
              mt-8
              flex
              min-w-0
              items-end
              justify-between
              gap-6
              border-t
              pt-5
            "
          >
            <div className="min-w-0">
              <p className="contact-channel-card__meta type-meta uppercase">
                {isPrimary
                  ? "Write directly"
                  : "Review profile"}
              </p>

              <p
                className="
                  mt-2
                  min-w-0
                  wrap-break-word
                  font-mono
                  text-sm
                  leading-6
                "
              >
                {social.value}
              </p>
            </div>

            <span
              aria-hidden="true"
              className="contact-channel-card__action flex size-11 shrink-0 items-center justify-center border text-lg"
            >
              {social.external ? "↗" : "→"}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}
