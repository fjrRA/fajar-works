// src/components/layout/site-footer.tsx
import Link from "next/link";

import siteData from "../../../content/site.json";

import { Container } from "@/components/layout/container";
import { FooterNavigation } from "@/components/layout/footer-navigation";

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
            <section
              className="
                border-b
                border-muted
                p-6
                md:p-8
                lg:border-r
                lg:border-b-0
                lg:p-10
              "
            >
              <p className="type-label text-accent">
                {siteData.siteCode} / End of File
              </p>

              <h2
                className="
                  mt-8
                  max-w-4xl
                  text-[clamp(2.75rem,7vw,7rem)]
                  leading-[0.88]
                  font-bold
                  tracking-[-0.055em]
                  uppercase
                "
              >
                Works.
                <br />
                Notes.
                <br />
                Progress.
              </h2>

              <p className="type-body mt-8 max-w-xl text-line">
                {siteData.description}
              </p>

              <Link
                href="/contact"
                className="
                  group
                  mt-10
                  inline-flex
                  items-center
                  gap-4
                  border-b
                  border-inverse
                  pb-2
                  font-mono
                  text-xs
                  font-semibold
                  tracking-[0.12em]
                  uppercase
                  transition-colors
                  duration-150
                  hover:border-accent
                  hover:text-accent
                "
              >
                Contact / 05

                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-10
                    bg-current
                    transition-transform
                    duration-200
                    ease-out
                    group-hover:translate-x-2
                    motion-reduce:transition-none
                  "
                />
              </Link>
            </section>

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

              <section className="p-6 md:p-8">
                <p className="type-label text-line">
                  Current Status
                </p>

                <div className="mt-6">
                  <p className="font-mono text-sm font-medium uppercase">
                    <span
                      aria-hidden="true"
                      className="
                        mr-2
                        inline-block
                        h-1.5
                        w-1.5
                        bg-accent
                      "
                    />

                    {siteData.availabilityCode}
                  </p>

                  <p className="type-meta mt-3 max-w-sm text-line">
                    {siteData.availability}
                  </p>
                </div>

                <div className="mt-8 border-t border-muted pt-6">
                  <p className="type-label text-line">
                    Location
                  </p>

                  <p className="mt-3 font-mono text-sm uppercase">
                    {siteData.locationCode}
                  </p>

                  <p className="type-meta mt-2 text-line">
                    {siteData.location}
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div
            className="
              flex
              flex-col
              gap-3
              border-t
              border-muted
              px-6
              py-4
              sm:flex-row
              sm:items-center
              sm:justify-between
              md:px-8
            "
          >
            <p className="type-meta text-line">
              © {currentYear} {siteData.name}
            </p>

            <p className="type-meta text-line uppercase">
              {siteData.siteCode} / Bekasi / Indonesia
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}