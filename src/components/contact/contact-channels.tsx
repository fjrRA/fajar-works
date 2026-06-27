// src/components/contact/
// contact-channels.tsx

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import type {
  ContactChannelsContent,
} from "@/types/contact";
import type { Social } from "@/types/social";

import {
  ContactChannelCard,
} from "./contact-channel-card";

type ContactChannelsProps = {
  content: ContactChannelsContent;
  socials: readonly Social[];
};

const CONTACT_CHANNELS_HEADING_ID =
  "contact-channels-heading";

export function ContactChannels({
  content,
  socials,
}: ContactChannelsProps) {
  return (
    <section
      aria-labelledby={
        CONTACT_CHANNELS_HEADING_ID
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
              <SectionLabel index="02">
                {content.label}
              </SectionLabel>

              <SectionHeading
                id={
                  CONTACT_CHANNELS_HEADING_ID
                }
                className="mt-4 max-w-4xl"
              >
                {content.title}
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
              {content.description}
            </p>
          </header>

          <div
            className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {socials.map((social) => (
              <ContactChannelCard
                key={social.id}
                social={social}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}