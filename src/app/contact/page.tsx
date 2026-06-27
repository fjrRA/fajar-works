// src/app/contact/page.tsx

import {
  createPageMetadata,
} from "@/lib/metadata/create-page-metadata";

import {
  ContactAvailability,
  ContactChannels,
  ContactOpportunities,
} from "@/components/contact";
import {
  PageHeader,
} from "@/components/layout/page-header";
import {
  getContactContent,
} from "@/lib/content/get-contact-content";
import {
  getSiteContent,
} from "@/lib/content/get-site-content";
import {
  getSocials,
} from "@/lib/content/get-socials";
import {
  MainContent,
} from "@/components/layout/main-content";

export const metadata =
  createPageMetadata({
    title: "Contact",

    description:
      "Contact Fajar Rahmana Akbar regarding web development opportunities and professional discussions.",

    pathname: "/contact",
  });

export default function ContactPage() {
  const content =
    getContactContent();

  const site =
    getSiteContent();

  const socials =
    getSocials();

  const email =
    socials.find(
      (social) => social.id === "email",
    );

  if (!email) {
    throw new Error(
      'Contact social with id "email" was not found.',
    );
  }

  return (
    <MainContent>
      <PageHeader
        index={content.header.index}
        label={content.header.label}
        titleSize="long"
        title={
          <>
            Start a
            <br />
            Conversation
          </>
        }
        description={
          content.header.description
        }
      />

      <ContactAvailability
        content={content.availability}
        site={site}
      />

      <ContactChannels
        content={content.channels}
        socials={socials}
      />

      <ContactOpportunities
        opportunities={
          content.opportunities
        }
        closing={content.closing}
        email={email}
      />
    </MainContent>
  );
}