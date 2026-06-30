import {
  Container,
} from "@/components/layout/container";
import type {
  AboutHeaderContent,
} from "@/types/about";

import {
  AboutHeroIdentity,
} from "./about-hero/about-hero-identity";
import {
  AboutHeroNameplate,
} from "./about-hero/about-hero-nameplate";
import {
  AboutHeroRegister,
} from "./about-hero/about-hero-register";
import type {
  AboutHeroSite,
} from "./about-hero/about-hero.types";

type AboutHeroProps = {
  content: AboutHeaderContent;
  site: AboutHeroSite;
};

const ABOUT_HERO_HEADING_ID =
  "about-hero-heading";

export function AboutHero({
  content,
  site,
}: AboutHeroProps) {
  return (
    <section
      id="profile-top"
      aria-labelledby={
        ABOUT_HERO_HEADING_ID
      }
      className="border-b border-line"
    >
      <Container>
        <div className="min-w-0 border-x border-line">
          <AboutHeroRegister
            index={content.index}
            label={content.label}
          />

          <div
            className="
              grid
              min-w-0
              lg:grid-cols-[minmax(0,1fr)_24rem]
            "
          >
            <AboutHeroNameplate
              eyebrow={content.title}
              name={site.name}
              headingId={ABOUT_HERO_HEADING_ID}
            />

            <AboutHeroIdentity
              description={content.description}
              site={site}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
