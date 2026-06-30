import {
  Container,
} from "@/components/layout/container";
import {
  SectionHeading,
} from "@/components/ui/section-heading";
import {
  SectionLabel,
} from "@/components/ui/section-label";
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
                id={
                  ABOUT_CAPABILITIES_HEADING_ID
                }
                className="mt-4 max-w-4xl"
              >
                {content.title}
              </SectionHeading>
            </div>

            <p className="type-body max-w-lg text-muted lg:justify-self-end">
              {content.description}
            </p>
          </header>

          <div
            className="
              hidden
              border-b
              border-line
              bg-panel
              font-mono
              text-[0.6875rem]
              tracking-[0.12em]
              text-muted
              uppercase
              lg:grid
              lg:grid-cols-[5rem_18rem_minmax(0,1fr)_22rem]
            "
          >
            <p className="px-6 py-4">
              No.
            </p>

            <p className="border-l border-line px-8 py-4">
              Practice Area
            </p>

            <p className="border-l border-line px-8 py-4">
              Applied Scope
            </p>

            <p className="border-l border-line px-8 py-4">
              Working Tools
            </p>
          </div>

          <div>
            {capabilities.map(
              (capability) => (
                <article
                  key={capability.id}
                  className="
                    grid
                    min-w-0
                    border-b
                    border-line
                    lg:grid-cols-[5rem_18rem_minmax(0,1fr)_22rem]
                  "
                >
                  <p
                    className="
                      bg-panel
                      px-6
                      py-6
                      type-label
                      text-accent
                      lg:bg-transparent
                    "
                  >
                    {capability.index}
                  </p>

                  <div
                    className="
                      min-w-0
                      px-6
                      py-6
                      md:px-8
                      lg:border-l
                      lg:border-line
                    "
                  >
                    <p className="type-label mb-3 text-muted lg:hidden">
                      Practice Area
                    </p>

                    <h3
                      className="
                        text-2xl
                        leading-[1.05]
                        font-semibold
                        tracking-[-0.035em]
                      "
                    >
                      {capability.title}
                    </h3>
                  </div>

                  <div
                    className="
                      min-w-0
                      border-t
                      border-line
                      px-6
                      py-6
                      md:px-8
                      lg:border-t-0
                      lg:border-l
                    "
                  >
                    <p className="type-label mb-3 text-muted lg:hidden">
                      Applied Scope
                    </p>

                    <p className="type-body text-muted">
                      {capability.description}
                    </p>
                  </div>

                  <div
                    className="
                      min-w-0
                      border-t
                      border-line
                      px-6
                      py-6
                      md:px-8
                      lg:border-t-0
                      lg:border-l
                    "
                  >
                    <p className="type-label mb-3 text-muted lg:hidden">
                      Working Tools
                    </p>

                    <ul
                      aria-label={`${capability.title} technologies`}
                      className="
                        flex
                        flex-wrap
                        gap-x-3
                        gap-y-2
                        font-mono
                        text-[0.6875rem]
                        leading-5
                        uppercase
                      "
                    >
                      {capability.technologies.map(
                        (technology, index) => (
                          <li
                            key={technology}
                            className="flex items-center gap-3"
                          >
                            <span>{technology}</span>

                            {index <
                            capability.technologies
                              .length -
                              1 ? (
                              <span
                                aria-hidden="true"
                                className="text-accent"
                              >
                                /
                              </span>
                            ) : null}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
