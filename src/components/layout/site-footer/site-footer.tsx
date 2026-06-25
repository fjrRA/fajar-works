// src/components/layout/site-footer/site-footer.tsx
import siteData from "../../../../content/site.json";

import { Container } from "@/components/layout/container";
import {
  FooterNavigation,
} from "@/components/layout/footer-navigation";

import { FooterIntro } from "./footer-intro";
import {
  FooterLegalBar,
} from "./footer-legal-bar";
import {
  FooterStatusPanel,
} from "./footer-status-panel";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-muted bg-ink text-inverse">
      <Container>
        <div className="border-x border-b border-muted">
          <div
            className="
              grid
              lg:grid-cols-[minmax(0,1.4fr)_minmax(20rem,0.6fr)]
            "
          >
            <FooterIntro
              siteCode={siteData.siteCode}
              description={siteData.description}
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-1">
              <div
                className="
                  border-b
                  border-muted
                  p-6
                  md:p-8
                  sm:border-r
                  lg:border-r-0
                "
              >
                <FooterNavigation />
              </div>

              <FooterStatusPanel
                availabilityCode={
                  siteData.availabilityCode
                }
                availability={siteData.availability}
                locationCode={siteData.locationCode}
                location={siteData.location}
              />
            </div>
          </div>

          <FooterLegalBar
            currentYear={currentYear}
            name={siteData.name}
            siteCode={siteData.siteCode}
          />
        </div>
      </Container>
    </footer>
  );
}