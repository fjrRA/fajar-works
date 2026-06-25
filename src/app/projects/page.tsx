// src/app/projects/page.tsx
import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";

import { ProjectIndex } from "@/components/projects/project-index";
import { getPublishedProjects } from "@/lib/content/get-projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected web development projects and technical case studies by Fajar Rahmana Akbar.",
};

export default function ProjectsPage() {
  const projects = getPublishedProjects();

  return (
    <main id="main-content">
      <PageHeader
        index="01"
        label="Work"
        title="Selected Work"
        description="A collection of web applications, ticketing systems, local content management tools, and other practical development projects."
      />

      <ProjectIndex projects={projects} />
    </main>
  );
}