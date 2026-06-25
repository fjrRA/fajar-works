// src/components/home/home-capabilities.tsx
import { CapabilityItem } from "@/components/home/capability-item";
import { CurrentFocusList } from "@/components/home/current-focus-list";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import type { Capability } from "@/types/capability";
import type {
  CurrentFocusItem,
  HomeCapabilitiesContent,
} from "@/types/home";

type HomeCapabilitiesProps = {
  content: HomeCapabilitiesContent;
  capabilities: Capability[];
  currentFocus: CurrentFocusItem[];
};

export function HomeCapabilities({
  content,
  capabilities,
  currentFocus,
}: HomeCapabilitiesProps) {
  return (
    <section className="border-b border-line">
      <Container>
        <div
          className="
            grid
            border-x
            border-line
            lg:grid-cols-[minmax(16rem,0.42fr)_minmax(0,1fr)]
          "
        >
          <header
            className="
              section-block
              border-b
              border-line
              px-6
              md:px-8
              lg:border-r
              lg:border-b-0
              lg:px-10
            "
          >
            <SectionLabel index="02">
              Capabilities
            </SectionLabel>

            <SectionHeading className="mt-3">
              {content.heading}
            </SectionHeading>

            <p className="type-body mt-6 max-w-md text-muted">
              {content.description}
            </p>
          </header>

          <div
            className="
              min-w-0
              xl:grid
              xl:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]
            "
          >
            <ol className="min-w-0">
              {capabilities.map((capability) => (
                <li
                  key={capability.id}
                  className="
                    border-b
                    border-line
                    last:border-b-0
                    xl:last:border-b-0
                  "
                >
                  <CapabilityItem
                    capability={capability}
                  />
                </li>
              ))}
            </ol>

            <CurrentFocusList
              heading={content.focusHeading}
              description={
                content.focusDescription
              }
              items={currentFocus}
              className="
                border-t
                border-line
                xl:border-t-0
                xl:border-l
              "
            />
          </div>
        </div>
      </Container>
    </section>
  );
}