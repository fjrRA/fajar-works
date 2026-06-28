// src/components/home/home-hero/hero-profile-panel.tsx
import { HeroActions } from "./hero-actions";
import { HeroMetadata } from "./hero-metadata";

type HeroProfilePanelProps = {
  description: string;
  locationCode: string;
  availabilityCode: string;
};

export function HeroProfilePanel({
  description,
  locationCode,
  availabilityCode,
}: HeroProfilePanelProps) {
  return (
    <div
      className="
        grid
        w-full
        min-w-0
        border-t
        border-line
        lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.46fr)]
      "
    >
      <div className="min-w-0 px-6 py-8 md:px-8 md:py-10 lg:px-10">
        <p
          className="
            max-w-4xl
            text-xl
            leading-snug
            font-medium
            tracking-[-0.025em]
            md:text-2xl
          "
        >
          {description}
        </p>
      </div>

      <div className="border-t border-line px-6 py-8 md:px-8 lg:border-t-0 lg:border-l lg:px-10">
        <HeroActions />

        <HeroMetadata
          locationCode={locationCode}
          availabilityCode={availabilityCode}
        />
      </div>
    </div>
  );
}
