// src/app/projects/page.tsx
import {
  createPageMetadata,
} from "@/lib/metadata/create-page-metadata";

import { PageHeader } from "@/components/layout/page-header";

import { ProjectIndex } from "@/components/projects/project-index";
import { getPublishedProjects } from "@/lib/content/get-projects";

import {
  MainContent,
} from "@/components/layout/main-content";

export const metadata =
  createPageMetadata({
    title: "Projects",

    description:
      "Selected web development projects and technical case studies by Fajar Rahmana Akbar.",

    pathname: "/projects",
  });

export default function ProjectsPage() {
  const projects = getPublishedProjects();

  return (
    <MainContent>
      <PageHeader
        index="01"
        label="Work"
        title="Selected Work"
        description="A collection of web applications, ticketing systems, local content management tools, and other practical development projects."
      />

      <ProjectIndex projects={projects} />
    </MainContent>
  );
}