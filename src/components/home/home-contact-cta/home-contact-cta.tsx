// src/components/home/home-contact-cta/home-contact-cta.tsx
import siteData from "../../../../content/site.json";

import { ContactCtaHeading } from "./contact-cta-heading";
import { ContactCtaPanel } from "./contact-cta-panel";

import { Container } from "@/components/layout/container";
import type { HomeContactContent } from "@/types/home";

const CONTACT_HEADING_ID =
  "home-contact-cta-heading";

type HomeContactCtaProps = {
  content: HomeContactContent;
};

export function HomeContactCta({
  content,
}: HomeContactCtaProps) {
  return (
    <section
      aria-labelledby={CONTACT_HEADING_ID}
      className="
        border-b
        border-line
        bg-panel-strong
      "
    >
      <Container>
        <div
          className="
            grid
            border-x
            border-line
            lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]
          "
        >
          <ContactCtaHeading
            heading={content.heading}
            headingId={CONTACT_HEADING_ID}
          />

          <ContactCtaPanel
            content={content}
            availabilityCode={
              siteData.availabilityCode
            }
            locationCode={
              siteData.locationCode
            }
          />
        </div>
      </Container>
    </section>
  );
}