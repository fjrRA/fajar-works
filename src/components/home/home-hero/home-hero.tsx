// src/components/home/home-hero/home-hero.tsx
import siteData from "../../../../content/site.json";

import { HeroIdentity } from "./hero-identity";
import { HeroProfilePanel } from "./hero-profile-panel";

import { Container } from "@/components/layout/container";

const HOME_HERO_HEADING_ID =
  "home-hero-heading";

type HomeHeroProps = {
  eyebrow: string;
};

export function HomeHero({
  eyebrow,
}: HomeHeroProps) {
  return (
    <section
      aria-labelledby={HOME_HERO_HEADING_ID}
      className="border-b border-line"
    >
      <Container>
        <div
          className="
            grid
            min-h-[calc(100svh-var(--header-height))]
            w-full
            min-w-0
            border-x
            border-line
            lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)]
          "
        >
          <HeroIdentity
            eyebrow={eyebrow}
            headingId={HOME_HERO_HEADING_ID}
          />

          <HeroProfilePanel
            role={siteData.role}
            description={siteData.description}
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