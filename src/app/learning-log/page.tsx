// src/app/learning-log/page.tsx
import {
  createPageMetadata,
} from "@/lib/metadata/create-page-metadata";

import { PageHeader } from "@/components/layout/page-header";

import {
  MainContent,
} from "@/components/layout/main-content";

export const metadata =
  createPageMetadata({
    title: "Learning Log",

    description:
      "A structured record of programming study, technical practice, and learning progress.",

    pathname: "/learning-log",
  });

export default function LearningLogPage() {
  return (
    <MainContent>
      <PageHeader
        index="03"
        label="Learning Log"
        title={
          <>
            Learning
            <br />
            Progress
          </>
        }
        description="Structured records of courses, programming exercises, experiments, mistakes, discoveries, and ongoing technical development."
      />
    </MainContent>
  );
}