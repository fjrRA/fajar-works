// src/app/about/page.tsx

import {
  createPageMetadata,
} from "@/lib/metadata/create-page-metadata";

import {
  JsonLd,
} from "@/components/seo/json-ld";
import {
  getSocials,
} from "@/lib/content/get-socials";
import {
  createProfilePageStructuredData,
} from "@/lib/metadata/structured-data";

import {
  AboutCapabilities,
  AboutCv,
  AboutDirection,
  AboutEducation,
  AboutProfile,
} from "@/components/about";
import {
  PageHeader,
} from "@/components/layout/page-header";
import {
  getAboutContent,
} from "@/lib/content/get-about-content";
import {
  getCapabilities,
} from "@/lib/content/get-capabilities";
import {
  getSiteContent,
} from "@/lib/content/get-site-content";
import {
  MainContent,
} from "@/components/layout/main-content";

export const metadata =
  createPageMetadata({
    title: "Profile",

    description:
      "Profile, background, capabilities, and professional direction of Fajar Rahmana Akbar.",

    pathname: "/about",
  });

export default function AboutPage() {
  const content =
    getAboutContent();

  const site =
    getSiteContent();

  const capabilities =
    getCapabilities();

  const socials =
    getSocials();

  const profileStructuredData =
    createProfilePageStructuredData(
      socials,
    );

  return (
    <>
      <JsonLd
        data={profileStructuredData}
      />

      <MainContent>
        <PageHeader
          index={content.header.index}
          label={content.header.label}
          title={content.header.title}
          description={
            content.header.description
          }
        />

        <AboutProfile
          content={content.profile}
          site={site}
        />

        <AboutDirection
          content={content.direction}
        />

        <AboutEducation
          content={content.education}
        />

        <AboutCapabilities
          content={content.capabilities}
          capabilities={capabilities}
        />

        <AboutCv
          content={content.cv}
        />
      </MainContent>
    </>
  );
}