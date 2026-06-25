// src/components/layout/site-footer/footer-status-panel.tsx
type FooterStatusPanelProps = {
  availabilityCode: string;
  availability: string;
  locationCode: string;
  location: string;
};

export function FooterStatusPanel({
  availabilityCode,
  availability,
  locationCode,
  location,
}: FooterStatusPanelProps) {
  return (
    <div className="p-6 md:p-8">
      <p className="type-label text-line">
        Current Status
      </p>

      <div className="mt-6">
        <p className="font-mono text-sm font-medium uppercase">
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

          {availabilityCode}
        </p>

        <p className="type-meta mt-3 max-w-sm text-line">
          {availability}
        </p>
      </div>

      <div className="mt-8 border-t border-muted pt-6">
        <p className="type-label text-line">
          Location
        </p>

        <p className="mt-3 font-mono text-sm uppercase">
          {locationCode}
        </p>

        <p className="type-meta mt-2 text-line">
          {location}
        </p>
      </div>
    </div>
  );
}