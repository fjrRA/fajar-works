// src/components/about/about-profile.tsx

import {
  Container,
} from "@/components/layout/container";
import type {
  AboutProfileContent,
} from "@/types/about";

import {
  AboutProfileFile,
  type AboutProfileSite,
} from "./about-profile-file";
import {
  AboutProfileStatement,
} from "./about-profile-statement";

type AboutProfileProps = {
  content: AboutProfileContent;
  site: AboutProfileSite;
};

const ABOUT_PROFILE_HEADING_ID =
  "about-profile-heading";

export function AboutProfile({
  content,
  site,
}: AboutProfileProps) {
  return (
    <section
      aria-labelledby={
        ABOUT_PROFILE_HEADING_ID
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
          <AboutProfileStatement
            content={content}
            headingId={
              ABOUT_PROFILE_HEADING_ID
            }
          />

          <AboutProfileFile
            site={site}
          />
        </div>
      </Container>
    </section>
  );
}