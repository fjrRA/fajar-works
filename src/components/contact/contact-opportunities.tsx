// src/components/contact/
// contact-opportunities.tsx

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import type {
  ContactClosingContent,
  ContactOpportunitiesContent,
} from "@/types/contact";
import type { Social } from "@/types/social";

import {
  ContactOpportunityList,
} from "./contact-opportunity-list";
import {
  ContactProfessionalNote,
} from "./contact-professional-note";

type ContactOpportunitiesProps = {
  opportunities: ContactOpportunitiesContent;
  closing: ContactClosingContent;
  email: Social;
};

const CONTACT_OPPORTUNITIES_HEADING_ID =
  "contact-opportunities-heading";

export function ContactOpportunities({
  opportunities,
  closing,
  email,
}: ContactOpportunitiesProps) {
  return (
    <section
      aria-labelledby={
        CONTACT_OPPORTUNITIES_HEADING_ID
      }
      className="border-b border-line"
    >
      <Container>
        <div
          className="
            grid
            min-w-0
            border-x
            border-line
            lg:grid-cols-2
          "
        >
          <div
            className="
              min-w-0
              border-b
              border-line
              px-6
              py-10
              md:px-8
              lg:border-r
              lg:border-b-0
              lg:px-10
              lg:py-14
            "
          >
            <SectionLabel index="03">
              {opportunities.label}
            </SectionLabel>

            <SectionHeading
              id={
                CONTACT_OPPORTUNITIES_HEADING_ID
              }
              className="mt-4"
            >
              {opportunities.title}
            </SectionHeading>

            <p className="type-body mt-6 max-w-xl text-muted">
              {opportunities.description}
            </p>

            <ContactOpportunityList
              items={opportunities.items}
            />
          </div>

          <ContactProfessionalNote
            content={closing}
            email={email}
          />
        </div>
      </Container>
    </section>
  );
}