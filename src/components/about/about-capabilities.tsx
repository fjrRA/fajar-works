// src/components/about/about-capabilities.tsx

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import type {
  AboutCapabilitiesContent,
} from "@/types/about";
import type {
  Capability,
} from "@/types/capability";

type AboutCapabilitiesProps = {
  content: AboutCapabilitiesContent;
  capabilities: readonly Capability[];
};

const ABOUT_CAPABILITIES_HEADING_ID =
  "about-capabilities-heading";

export function AboutCapabilities({
  content,
  capabilities,
}: AboutCapabilitiesProps) {
  return (
    <section
      aria-labelledby={
        ABOUT_CAPABILITIES_HEADING_ID
      }
      className="border-b border-line"
    >
      <Container>
        <div className="min-w-0 border-x border-line">
          <header
            className="
              grid
              gap-8
              border-b
              border-line
              px-6
              py-10
              md:px-8
              lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)]
              lg:px-10
              lg:py-14
            "
          >
            <div>
              <SectionLabel index="04">
                {content.label}
              </SectionLabel>

              <SectionHeading
                id={ABOUT_CAPABILITIES_HEADING_ID}
                className="mt-4 max-w-4xl"
              >
                {content.title}
              </SectionHeading>
            </div>

            <p className="type-body max-w-lg text-muted lg:justify-self-end">
              {content.description}
            </p>
          </header>

          <div className="grid md:grid-cols-2">
            {capabilities.map((capability) => (
              <article
                key={capability.id}
                className="
                  min-w-0
                  border-b
                  border-line
                  px-6
                  py-10
                  md:border-r
                  md:px-8
                  lg:px-10
                  lg:py-12
                "
              >
                <p className="type-label text-accent-strong">
                  {capability.index}
                </p>

                <h3
                  className="
                    mt-5
                    text-2xl
                    leading-none
                    font-semibold
                    tracking-[-0.035em]
                    uppercase
                  "
                >
                  {capability.title}
                </h3>

                <p className="type-body mt-5 text-muted">
                  {capability.description}
                </p>

                <ul
                  aria-label={`${capability.title} technologies`}
                  className="
                    mt-8
                    flex
                    flex-wrap
                    border-t
                    border-l
                    border-line
                  "
                >
                  {capability.technologies.map(
                    (technology) => (
                      <li
                        key={technology}
                        className="
                          border-r
                          border-b
                          border-line
                          px-3
                          py-2
                          font-mono
                          text-xs
                          uppercase
                        "
                      >
                        {technology}
                      </li>
                    ),
                  )}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}