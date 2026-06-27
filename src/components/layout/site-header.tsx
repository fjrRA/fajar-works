// src/components/layout/site-header.tsx
import Link from "next/link";

import siteData from "../../../content/site.json";

import { Container } from "@/components/layout/container";
import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <Container className="flex h-[var(--header-height)] items-stretch">
        <div className="flex min-w-0 flex-1 items-stretch">
          <Link
            href="/"
            aria-label="Fajar Works home"
            className="
              flex
              shrink-0
              items-center
              border-r
              border-line
              pr-4
              font-mono
              text-[0.6875rem]
              font-semibold
              tracking-[0.12em]
              uppercase
              sm:pr-5
              lg:pr-6
            "
          >
            <span>{siteData.siteCode}</span>

            <span className="hidden text-muted sm:inline">
              &nbsp;/ {siteData.siteName}
            </span>
          </Link>

          <DesktopNavigation />

          <MobileNavigation
            availability={siteData.availability}
            availabilityCode={
              siteData.availabilityCode
            }
            location={siteData.location}
            locationCode={siteData.locationCode}
          />

          <div
            className="
              ml-auto
              hidden
              shrink-0
              items-center
              gap-2
              border-l
              border-line
              pl-4
              font-mono
              text-[0.625rem]
              font-medium
              tracking-[0.1em]
              uppercase
              xl:flex
            "
          >
            <span className="sr-only">
              {siteData.availability}.
              Located in {siteData.location}.
            </span>

            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 bg-accent"
            />

            <span aria-hidden="true">
              {siteData.availabilityCode}
            </span>

            <span
              aria-hidden="true"
              className="text-muted"
            >
              /
            </span>

            <span
              aria-hidden="true"
              className="text-muted"
            >
              {siteData.locationCode}
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}