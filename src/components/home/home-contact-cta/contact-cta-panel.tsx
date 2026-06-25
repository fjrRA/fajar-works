// src/components/home/home-contact-cta/contact-cta-panel.tsx
import { ContactCtaLink } from "./contact-cta-link";
import { ContactCtaMetadata } from "./contact-cta-metadata";

import type { HomeContactContent } from "@/types/home";

type ContactCtaPanelProps = {
  content: HomeContactContent;
  availabilityCode: string;
  locationCode: string;
};

export function ContactCtaPanel({
  content,
  availabilityCode,
  locationCode,
}: ContactCtaPanelProps) {
  return (
    <div
      className="
        flex
        min-w-0
        flex-col
        justify-between
        gap-12
        px-6
        py-12
        md:px-8
        md:py-16
        lg:px-10
        lg:py-20
      "
    >
      <div>
        <p
          className="
            font-mono
            text-xs
            font-medium
            tracking-[0.14em]
            text-accent
            uppercase
          "
        >
          {content.eyebrow}
        </p>

        <p className="type-body mt-6 max-w-lg text-muted">
          {content.description}
        </p>
      </div>

      <ContactCtaMetadata
        availabilityCode={availabilityCode}
        locationCode={locationCode}
      />

      <ContactCtaLink
        href={content.href}
        label={content.linkLabel}
      />
    </div>
  );
}