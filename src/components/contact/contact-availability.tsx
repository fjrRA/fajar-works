// src/components/contact/
// contact-availability.tsx

import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import type {
  ContactAvailabilityContent,
} from "@/types/contact";

import {
  ContactAvailabilityFile,
  type ContactAvailabilitySite,
} from "./contact-availability-file";

type ContactAvailabilityProps = {
  content: ContactAvailabilityContent;
  site: ContactAvailabilitySite;
};

const CONTACT_AVAILABILITY_HEADING_ID =
  "contact-availability-heading";

export function ContactAvailability({
  content,
  site,
}: ContactAvailabilityProps) {
  return (
    <section
      aria-labelledby={
        CONTACT_AVAILABILITY_HEADING_ID
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
            lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]
          "
        >
          <div
            className="
              section-block
              min-w-0
              border-b
              border-line
              px-6
              md:px-8
              lg:border-r
              lg:border-b-0
              lg:px-10
            "
          >
            <SectionLabel index="01">
              {content.label}
            </SectionLabel>

            <h2
              id={
                CONTACT_AVAILABILITY_HEADING_ID
              }
              className="
                mt-6
                max-w-5xl
                wrap-break-word
                text-balance
                text-[clamp(2.25rem,6vw,5.5rem)]
                leading-[0.92]
                font-bold
                tracking-[-0.05em]
                uppercase
              "
            >
              {content.title}
            </h2>

            <p
              className="
                type-body
                mt-10
                max-w-3xl
                text-muted
              "
            >
              {content.description}
            </p>
          </div>

          <ContactAvailabilityFile
            site={site}
          />
        </div>
      </Container>
    </section>
  );
}