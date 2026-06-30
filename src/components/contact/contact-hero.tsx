import {
  Container,
} from "@/components/layout/container";
import type {
  ContactAvailabilityContent,
  ContactHeaderContent,
} from "@/types/contact";

import {
  ContactAvailabilitySignal,
} from "./contact-hero/contact-availability-signal";
import {
  ContactHeroIntro,
} from "./contact-hero/contact-hero-intro";
import {
  ContactHeroLedger,
} from "./contact-hero/contact-hero-ledger";
import {
  ContactHeroRegister,
} from "./contact-hero/contact-hero-register";
import type {
  ContactHeroEmail,
  ContactHeroSite,
} from "./contact-hero/contact-hero.types";

type ContactHeroProps = {
  header: ContactHeaderContent;
  availability: ContactAvailabilityContent;
  site: ContactHeroSite;
  email: ContactHeroEmail;
};

const CONTACT_HERO_HEADING_ID =
  "contact-hero-heading";

export function ContactHero({
  header,
  availability,
  site,
  email,
}: ContactHeroProps) {
  return (
    <section
      id="contact-top"
      aria-labelledby={
        CONTACT_HERO_HEADING_ID
      }
      className="contact-hero border-b border-line"
    >
      <Container>
        <div className="min-w-0 border-x border-line">
          <ContactHeroRegister
            index={header.index}
            label={header.label}
            locationCode={site.locationCode}
          />

          <div
            className="
              grid
              min-w-0
              lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)]
            "
          >
            <ContactHeroIntro
              headingId={CONTACT_HERO_HEADING_ID}
              title={header.title}
              description={header.description}
            />

            <ContactAvailabilitySignal
              content={availability}
              availabilityCode={
                site.availabilityCode
              }
              email={email}
            />
          </div>

          <ContactHeroLedger site={site} />
        </div>
      </Container>
    </section>
  );
}
