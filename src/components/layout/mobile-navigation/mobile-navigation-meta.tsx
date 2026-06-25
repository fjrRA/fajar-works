// src/components/layout/mobile-navigation/mobile-navigation-meta.tsx
import type { MobileNavigationProps } from "./mobile-navigation.types";

type MobileNavigationMetaProps =
  MobileNavigationProps;

export function MobileNavigationMeta({
  availability,
  availabilityCode,
  location,
  locationCode,
}: MobileNavigationMetaProps) {
  return (
    <div className="mt-auto border-t border-line">
      <div
        className="
          site-container
          grid
          sm:grid-cols-2
        "
      >
        <div
          className="
            border-b
            border-line
            py-5
            sm:border-r
            sm:border-b-0
            sm:pr-6
          "
        >
          <p className="type-label text-muted">
            Status
          </p>

          <p className="mt-2 font-mono text-sm uppercase">
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
        </div>

        <div className="py-5 sm:pl-6">
          <p className="type-label text-muted">
            Location
          </p>

          <p className="mt-2 font-mono text-sm uppercase">
            {locationCode}
          </p>
        </div>
      </div>

      <p className="sr-only">
        {availability}. Located in {location}.
      </p>
    </div>
  );
}