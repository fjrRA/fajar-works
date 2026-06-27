// src/app/learning-log/page.tsx

import { PageHeader } from "@/components/layout/page-header";
import {
  MainContent,
} from "@/components/layout/main-content";

import {
  LearningLogIndex,
} from "@/components/learning-log/learning-log-index";

import {
  getPublishedLearningLogs,
} from "@/lib/content/get-learning-logs";

import {
  createPageMetadata,
} from "@/lib/metadata/create-page-metadata";

export const metadata =
  createPageMetadata({
    title: "Learning Log",
    description:
      "A structured record of programming study, technical practice, and learning progress.",
    pathname: "/learning-log",
  });

export default function LearningLogPage() {
  const learningLogs =
    getPublishedLearningLogs();

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

      <LearningLogIndex
        learningLogs={learningLogs}
      />
    </MainContent>
  );
}