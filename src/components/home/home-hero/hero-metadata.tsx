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
    <dl className="mt-8 grid grid-cols-2 gap-x-6 border-t border-line pt-5 font-mono text-sm">
      {metadataItems.map((item) => (
        <div
          key={item.label}
          className="
            flex
            min-w-0
            flex-col
            gap-2
          "
        >
          <dt className="type-meta shrink-0 text-muted uppercase">
            {item.label}
          </dt>

          <dd className="min-w-0 uppercase">
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
