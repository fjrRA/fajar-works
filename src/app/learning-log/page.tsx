// src/app/learning-log/page.tsx
import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Learning Log",
  description:
    "A structured record of programming study, technical practice, and learning progress.",
};

export default function LearningLogPage() {
  return (
    <main id="main-content">
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
    </main>
  );
}