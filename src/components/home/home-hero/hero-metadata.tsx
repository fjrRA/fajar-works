// src/components/home/home-hero/hero-metadata.tsx
type HeroMetadataProps = {
  locationCode: string;
  availabilityCode: string;
};

export function HeroMetadata({
  locationCode,
  availabilityCode,
}: HeroMetadataProps) {
  const metadataItems = [
    {
      label: "Location",
      value: locationCode,
      showIndicator: false,
    },
    {
      label: "Status",
      value: availabilityCode,
      showIndicator: true,
    },
  ] as const;

  return (
    <dl className="border-t border-line font-mono text-sm">
      {metadataItems.map((item) => (
        <div
          key={item.label}
          className="
            flex
            min-w-0
            items-center
            justify-between
            gap-6
            border-b
            border-line
            py-4
          "
        >
          <dt className="type-meta shrink-0 text-muted uppercase">
            {item.label}
          </dt>

          <dd className="min-w-0 text-right uppercase">
            {item.showIndicator ? (
              <span
                aria-hidden="true"
                className="
                  mr-2
                  inline-block
                  h-1.5
                  w-1.5
                  bg-accent
                "
              />
            ) : null}

            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}