// src/components/about/
// about-profile-file.tsx

import type {
  SiteContent,
} from "@/types/site";

export type AboutProfileSite = Pick<
  SiteContent,
  | "name"
  | "role"
  | "location"
  | "availability"
  | "availabilityCode"
>;

type AboutProfileFileProps = {
  site: AboutProfileSite;
};

export function AboutProfileFile({
  site,
}: AboutProfileFileProps) {
  const profileItems = [
    {
      label: "Name",
      value: site.name,
    },
    {
      label: "Role",
      value: site.role,
    },
    {
      label: "Location",
      value: site.location,
    },
  ];

  return (
    <aside
      aria-label="Professional profile information"
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
          Profile File
        </p>

        <dl className="mt-8 border-t border-line">
          {profileItems.map(
            ({ label, value }) => (
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

                <dd className="mt-2 font-medium">
                  {value}
                </dd>
              </div>
            ),
          )}
        </dl>
      </div>

      <div>
        <p className="type-label text-muted">
          Current Status
        </p>

        <div
          className="
            mt-4
            border-t
            border-line
            pt-4
          "
        >
          <p
            className="
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
              className="
                size-2
                bg-accent
              "
            />

            {site.availabilityCode}
          </p>

          <p className="type-body mt-3 text-muted">
            {site.availability}
          </p>
        </div>
      </div>
    </aside>
  );
}