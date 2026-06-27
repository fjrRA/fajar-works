// src/components/contact/
// contact-availability-file.tsx

import type {
  SiteContent,
} from "@/types/site";

export type ContactAvailabilitySite = Pick<
  SiteContent,
  | "role"
  | "location"
  | "locationCode"
  | "availability"
  | "availabilityCode"
>;

type ContactAvailabilityFileProps = {
  site: ContactAvailabilitySite;
};

export function ContactAvailabilityFile({
  site,
}: ContactAvailabilityFileProps) {
  const informationItems = [
    {
      label: "Role",
      value: site.role,
      className: "font-medium",
    },
    {
      label: "Location",
      value: site.location,
      className: "font-medium",
    },
    {
      label: "Location Code",
      value: site.locationCode,
      className:
        "font-mono text-sm uppercase",
    },
  ];

  return (
    <aside
      aria-label="Current availability information"
      className="
        flex
        min-w-0
        flex-col
        justify-between
        gap-12
        px-6
        py-10
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
      "
    >
      <div>
        <p className="type-label text-muted">
          Availability File
        </p>

        <dl className="mt-8 border-t border-line">
          <div
            className="
              border-b
              border-line
              py-4
            "
          >
            <dt className="type-meta text-muted uppercase">
              Status
            </dt>

            <dd
              className="
                mt-2
                inline-flex
                items-center
                gap-3
                font-mono
                text-sm
                font-semibold
                tracking-[0.08em]
                text-accent-strong
                uppercase
              "
            >
              <span
                aria-hidden="true"
                className="size-2 bg-accent"
              />

              {site.availabilityCode}
            </dd>
          </div>

          {informationItems.map(
            ({
              label,
              value,
              className,
            }) => (
              <div
                key={label}
                className="
                  border-b
                  border-line
                  py-4
                "
              >
                <dt className="type-meta text-muted uppercase">
                  {label}
                </dt>

                <dd
                  className={`
                    mt-2
                    ${className}
                  `}
                >
                  {value}
                </dd>
              </div>
            ),
          )}
        </dl>
      </div>

      <p className="type-body text-muted">
        {site.availability}
      </p>
    </aside>
  );
}