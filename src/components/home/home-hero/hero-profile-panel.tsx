// src/components/home/home-hero/hero-profile-panel.tsx
import { HeroActions } from "./hero-actions";
import { HeroMetadata } from "./hero-metadata";

import { SectionLabel } from "@/components/ui/section-label";

type HeroProfilePanelProps = {
  role: string;
  description: string;
  locationCode: string;
  availabilityCode: string;
};

export function HeroProfilePanel({
  role,
  description,
  locationCode,
  availabilityCode,
}: HeroProfilePanelProps) {
  return (
    <div
      className="
        flex
        w-full
        min-w-0
        flex-col
        justify-between
        gap-12
        px-6
        py-10
        md:px-8
        md:py-12
        lg:px-10
        xl:py-14
      "
    >
      <div className="min-w-0">
        <SectionLabel index="00">
          Profile
        </SectionLabel>

        <p
          className="
            mt-6
            text-3xl
            leading-none
            font-semibold
            tracking-[-0.04em]
            uppercase
            md:text-4xl
          "
        >
          {role}
        </p>

        <p className="type-body mt-6 max-w-lg text-muted">
          {description}
        </p>
      </div>

      <HeroMetadata
        locationCode={locationCode}
        availabilityCode={availabilityCode}
      />

      <HeroActions />
    </div>
  );
}