// src/components/home/home-contact-cta/contact-cta-metadata.tsx
type ContactCtaMetadataProps = {
  availabilityCode: string;
  locationCode: string;
};

export function ContactCtaMetadata({
  availabilityCode,
  locationCode,
}: ContactCtaMetadataProps) {
  const metadataItems = [
    {
      label: "Status",
      value: availabilityCode,
      showIndicator: true,
    },
    {
      label: "Location",
      value: locationCode,
      showIndicator: false,
    },
  ] as const;

  return (
    <dl className="border-t border-line font-mono text-xs uppercase">
      {metadataItems.map((item) => (
        <div
          key={item.label}
          className="
            flex
            items-start
            justify-between
            gap-6
            border-b
            border-line
            py-4
          "
        >
          <dt className="text-muted">
            {item.label}
          </dt>

          <dd className="text-right">
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