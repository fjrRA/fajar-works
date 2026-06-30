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
  ContactChannelsContent,
} from "@/types/contact";
import type {
  Social,
} from "@/types/social";

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
  const primaryChannel = socials.find(
    (social) => social.id === "email",
  );

  const supportingChannels = socials.filter(
    (social) => social.id !== "email",
  );

  if (!primaryChannel) {
    throw new Error(
      'Contact channel with id "email" was not found.',
    );
  }

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
              border-b
              border-line
              lg:grid-cols-[15rem_minmax(0,1fr)]
            "
          >
            <div
              className="
                contact-channels__register
                flex
                min-w-0
                flex-col
                justify-between
                gap-12
                border-b
                border-line
                px-6
                py-8
                md:px-8
                lg:border-r
                lg:border-b-0
                lg:px-7
                lg:py-10
              "
            >
              <SectionLabel index="02">
                {content.label}
              </SectionLabel>

              <p
                className="
                  font-mono
                  text-xs
                  leading-6
                  tracking-[0.1em]
                  text-muted
                  uppercase
                "
              >
                03 routes<br />
                01 primary<br />
                02 supporting
              </p>
            </div>

            <div
              className="
                grid
                min-w-0
                gap-8
                px-6
                py-10
                md:px-8
                lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)]
                lg:px-10
                lg:py-14
              "
            >
              <SectionHeading
                id={
                  CONTACT_CHANNELS_HEADING_ID
                }
                className="max-w-4xl"
              >
                {content.title}
              </SectionHeading>

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
            </div>
          </header>

          <div
            className="
              grid
              min-w-0
              lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)]
            "
          >
            <ContactChannelCard
              social={primaryChannel}
              variant="primary"
            />

            <div className="grid min-w-0 sm:grid-cols-2 lg:grid-cols-1">
              {supportingChannels.map((social) => (
                <ContactChannelCard
                  key={social.id}
                  social={social}
                  variant="supporting"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
