import type {
  AboutHeroSite,
} from "./about-hero.types";

type AboutHeroIdentityProps = {
  description: string;
  site: AboutHeroSite;
};

export function AboutHeroIdentity({
  description,
  site,
}: AboutHeroIdentityProps) {
  const identityItems = [
    {
      label: "Role",
      value: site.role,
    },
    {
      label: "Based in",
      value: site.location,
    },
  ];

  return (
    <aside
      aria-label="Professional identity"
      className="
        flex
        min-w-0
        flex-col
        bg-ink
        px-6
        py-10
        text-inverse
        md:px-8
        md:py-14
        lg:border-l
        lg:border-line
        lg:px-10
        lg:py-16
      "
    >
      <p
        className="
          text-xl
          leading-8
          tracking-[-0.02em]
          text-balance
        "
      >
        {description}
      </p>

      <dl className="mt-12 border-t border-muted lg:mt-auto">
        {identityItems.map(({ label, value }) => (
          <div
            key={label}
            className="
              grid
              gap-2
              border-b
              border-muted
              py-5
              sm:grid-cols-[6rem_minmax(0,1fr)]
            "
          >
            <dt className="type-meta text-line uppercase">
              {label}
            </dt>

            <dd className="font-medium">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10">
        <p
          className="
            flex
            items-center
            gap-3
            font-mono
            text-xs
            font-semibold
            tracking-[0.12em]
            uppercase
          "
        >
          <span
            aria-hidden="true"
            className="h-2 w-2 bg-accent"
          />

          {site.availabilityCode}
        </p>

        <p className="mt-3 text-sm leading-6 text-line">
          {site.availability}
        </p>
      </div>
    </aside>
  );
}
