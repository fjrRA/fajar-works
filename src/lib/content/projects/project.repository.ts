// src/lib/content/projects/project.repository.ts
import fs from "node:fs";

import type { Project } from "@/types/project";

import { PROJECTS_DIRECTORY } from "./project.constants";
import { parseProjectFile } from "./parse-project-file";

function sortProjectsByOrder(
  firstProject: Project,
  secondProject: Project,
) {
  const orderComparison =
    firstProject.order - secondProject.order;

  if (orderComparison !== 0) {
    return orderComparison;
  }

  return firstProject.slug.localeCompare(
    secondProject.slug,
  );
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIRECTORY)) {
    return [];
  }

  const projectFiles = fs
    .readdirSync(PROJECTS_DIRECTORY)
    .filter((fileName) =>
      fileName.endsWith(".md"),
    )
    .sort((firstFile, secondFile) =>
      firstFile.localeCompare(secondFile),
    );

  return projectFiles
    .map(parseProjectFile)
    .sort(sortProjectsByOrder);
}

export function getPublishedProjects():
  Project[] {
  return getAllProjects().filter(
    (project) => project.published,
  );
}

export function getProjectsBySlugs(
  projectSlugs: readonly string[],
): Project[] {
  const publishedProjects =
    getPublishedProjects();

  const projectsBySlug = new Map(
    publishedProjects.map((project) => [
      project.slug,
      project,
    ]),
  );

  return projectSlugs.map((slug) => {
    const project = projectsBySlug.get(slug);

    if (!project) {
      throw new Error(
        `Published project with slug "${slug}" was not found.`,
      );
    }

    return project;
  });
}

export function getProjectBySlug(
  slug: string,
): Project | undefined {
  return getPublishedProjects().find(
    (project) => project.slug === slug,
  );
}

export function getPublishedProjectSlugs():
  string[] {
  return getPublishedProjects().map(
    (project) => project.slug,
  );
}