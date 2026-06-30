import {
  Container,
} from "@/components/layout/container";
import type {
  AboutCapabilitiesContent,
} from "@/types/about";
import type {
  Capability,
} from "@/types/capability";

import {
  AboutCapabilitiesHeader,
} from "./about-capabilities/about-capabilities-header";
import {
  AboutCapabilitiesTableHeader,
} from "./about-capabilities/about-capabilities-table-header";
import {
  AboutCapabilityRow,
} from "./about-capabilities/about-capability-row";

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
          <AboutCapabilitiesHeader
            content={content}
            headingId={
              ABOUT_CAPABILITIES_HEADING_ID
            }
          />

          <AboutCapabilitiesTableHeader />

          <div>
            {capabilities.map((capability) => (
              <AboutCapabilityRow
                key={capability.id}
                capability={capability}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
