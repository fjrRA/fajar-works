import type {
  ContactHeroSite,
} from "./contact-hero.types";

type ContactHeroLedgerProps = {
  site: ContactHeroSite;
};

export function ContactHeroLedger({
  site,
}: ContactHeroLedgerProps) {
  const items = [
    {
      label: "Status",
      value: site.availabilityCode,
      status: true,
    },
    {
      label: "Role",
      value: site.role,
    },
    {
      label: "Based in",
      value: site.location,
    },
    {
      label: "Primary route",
      value: "Email first",
    },
  ];

  return (
    <dl
      className="
        contact-hero__ledger
        grid
        min-w-0
        border-t
        border-line
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {items.map(
        ({ label, value, status }) => (
          <div
            key={label}
            className="
              min-w-0
              border-b
              border-line
              px-6
              py-6
              sm:border-r
              md:px-8
              lg:border-b-0
              lg:px-10
            "
          >
            <dt className="type-meta text-muted uppercase">
              {label}
            </dt>

            <dd
              className={`
                mt-3
                min-w-0
                wrap-break-word
                font-mono
                text-sm
                font-medium
                ${
                  status
                    ? "text-accent-strong uppercase"
                    : ""
                }
              `}
            >
              {status && (
                <span
                  aria-hidden="true"
                  className="mr-3 inline-block size-2 bg-accent"
                />
              )}

              {value}
            </dd>
          </div>
        ),
      )}
    </dl>
  );
}
