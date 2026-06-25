// src/app/page.tsx
import type { Metadata } from "next";

import siteData from "../../content/site.json";

import { HomeDirectory } from "@/components/home/home-directory";
import { HomeHero } from "@/components/home/home-hero";
import { getHomeContent } from "@/lib/content/get-home-content";
import { HomeSelectedWork } from "@/components/home/home-selected-work";
import { getProjectsBySlugs } from "@/lib/content/get-projects";
import { HomeCapabilities } from "@/components/home/home-capabilities";
import { getCapabilitiesByIds } from "@/lib/content/get-capabilities";
import { HomeLatestNotes } from "@/components/home/home-latest-notes";
import { getLatestNotes } from "@/lib/content/get-notes";
import { HomeLearningProgress } from "@/components/home/home-learning-progress";
import { getLatestLearningLogs } from "@/lib/content/get-learning-logs";
import { HomeContactCta } from "@/components/home/home-contact-cta";
import { HomeShortProfile } from "@/components/home/home-short-profile";

export const metadata: Metadata = {
  title: {
    absolute:
      "Fajar Rahmana Akbar — Web Developer | Fajar Works",
  },
  description: siteData.description,
};

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
    <main id="main-content">
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
    </main>
  );
}
