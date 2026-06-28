// src/components/home/home-hero/home-hero.tsx
import siteData from "../../../../content/site.json";

import { HeroIdentity } from "./hero-identity";
import { HeroProfilePanel } from "./hero-profile-panel";

import { Container } from "@/components/layout/container";

const HOME_HERO_HEADING_ID =
  "home-hero-heading";

type HomeHeroProps = {
  eyebrow: string;
  statement: string;
  description: string;
};

export function HomeHero({
  eyebrow,
  statement,
  description,
}: HomeHeroProps) {
  return (
    <section
      aria-labelledby={HOME_HERO_HEADING_ID}
      className="border-b border-line"
    >
      <Container>
        <div
          className="
            w-full
            min-w-0
            border-x
            border-line
          "
        >
          <HeroIdentity
            eyebrow={eyebrow}
            headingId={HOME_HERO_HEADING_ID}
            name={siteData.name}
            role={siteData.role}
            statement={statement}
          />

          <HeroProfilePanel
            description={description}
            locationCode={siteData.locationCode}
            availabilityCode={
              siteData.availabilityCode
            }
          />
        </div>
      </Container>
    </section>
  );
}
