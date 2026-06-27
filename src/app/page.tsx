// src/app/page.tsx

import siteData from "../../content/site.json";

import {
  HomeCapabilities,
} from "@/components/home/home-capabilities";
import {
  HomeContactCta,
} from "@/components/home/home-contact-cta";
import {
  HomeDirectory,
} from "@/components/home/home-directory";
import {
  HomeHero,
} from "@/components/home/home-hero";
import {
  HomeLatestNotes,
} from "@/components/home/home-latest-notes";
import {
  HomeLearningProgress,
} from "@/components/home/home-learning-progress";
import {
  HomeSelectedWork,
} from "@/components/home/home-selected-work";
import {
  HomeShortProfile,
} from "@/components/home/home-short-profile";
import {
  getCapabilitiesByIds,
} from "@/lib/content/get-capabilities";
import {
  getHomeContent,
} from "@/lib/content/get-home-content";
import {
  getLatestLearningLogs,
} from "@/lib/content/get-learning-logs";
import {
  getLatestNotes,
} from "@/lib/content/get-notes";
import {
  getProjectsBySlugs,
} from "@/lib/content/get-projects";
import {
  createPageMetadata,
} from "@/lib/metadata/create-page-metadata";
import {
  MainContent,
} from "@/components/layout/main-content";

export const metadata =
  createPageMetadata({
    title:
      "Fajar Rahmana Akbar — Web Developer | Fajar Works",

    description:
      siteData.description,

    pathname: "/",

    absoluteTitle: true,
  });

export default function HomePage() {
  const homeContent = getHomeContent();

  const featuredProjects = getProjectsBySlugs(
    homeContent.featuredProjectSlugs,
  );

  const featuredCapabilities =
    getCapabilitiesByIds(
      homeContent.featuredCapabilityIds,
    );

  const latestNotes = getLatestNotes(
    homeContent.latestNotesLimit,
  );

  const latestLearningLogs =
    getLatestLearningLogs(
      homeContent.latestLearningLogsLimit,
    );

  return (
    <MainContent>
      <HomeHero
        eyebrow={homeContent.heroEyebrow}
      />

      <HomeSelectedWork
        content={homeContent.selectedWork}
        projects={featuredProjects}
      />

      <HomeCapabilities
        content={homeContent.capabilities}
        capabilities={featuredCapabilities}
        currentFocus={homeContent.currentFocus}
      />

      <HomeLatestNotes
        content={homeContent.latestNotes}
        notes={latestNotes}
      />

      <HomeLearningProgress
        content={homeContent.learningProgress}
        learningLogs={latestLearningLogs}
      />

      <HomeShortProfile
        content={homeContent.shortProfile}
      />

      <HomeDirectory
        heading={homeContent.directory.heading}
        description={
          homeContent.directory.description
        }
      />

      <HomeContactCta
        content={homeContent.contact}
      />
    </MainContent>
  );
}
