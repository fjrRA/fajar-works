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
  ContactClosingContent,
  ContactOpportunitiesContent,
} from "@/types/contact";
import type {
  Social,
} from "@/types/social";

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
        <div className="min-w-0 border-x border-line">
          <header
            className="
              grid
              min-w-0
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
              <SectionLabel index="03">
                {opportunities.label}
              </SectionLabel>

              <SectionHeading
                id={
                  CONTACT_OPPORTUNITIES_HEADING_ID
                }
                className="mt-4 max-w-4xl"
              >
                {opportunities.title}
              </SectionHeading>
            </div>

            <p
              className="
                type-body
                max-w-lg
                text-muted
                lg:justify-self-end
              "
            >
              {opportunities.description}
            </p>
          </header>

          <div
            className="
              grid
              min-w-0
              lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)]
            "
          >
            <div
              className="
                contact-opportunities__scope
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
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-5
                  border-b
                  border-line
                  pb-5
                "
              >
                <p className="type-label text-muted">
                  Current scope
                </p>

                <p className="type-meta text-accent uppercase">
                  {String(
                    opportunities.items.length,
                  ).padStart(2, "0")} routes
                </p>
              </div>

              <ContactOpportunityList
                items={opportunities.items}
              />
            </div>

            <ContactProfessionalNote
              content={closing}
              email={email}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
