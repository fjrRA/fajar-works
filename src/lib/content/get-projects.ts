// src/lib/content/get-projects.ts
import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type {
  Project,
  ProjectStatus,
} from "@/types/project";

const PROJECTS_DIRECTORY = path.join(
  process.cwd(),
  "content",
  "projects",
);

const PROJECT_STATUSES: ProjectStatus[] = [
  "Completed",
  "In Development",
  "Archived",
];

function requireString(
  value: unknown,
  fieldName: string,
  fileName: string,
): string {
  if (
    typeof value !== "string" ||
    value.trim().length === 0
  ) {
    throw new Error(
      `Project "${fileName}" has an invalid "${fieldName}" field.`,
    );
  }

  return value;
}

function requireNumber(
  value: unknown,
  fieldName: string,
  fileName: string,
): number {
  if (
    typeof value !== "number" ||
    !Number.isFinite(value)
  ) {
    throw new Error(
      `Project "${fileName}" has an invalid "${fieldName}" field.`,
    );
  }

  return value;
}

function requireBoolean(
  value: unknown,
  fieldName: string,
  fileName: string,
): boolean {
  if (typeof value !== "boolean") {
    throw new Error(
      `Project "${fileName}" has an invalid "${fieldName}" field.`,
    );
  }

  return value;
}

function requireStringArray(
  value: unknown,
  fieldName: string,
  fileName: string,
): string[] {
  if (
    !Array.isArray(value) ||
    value.some(
      (item) =>
        typeof item !== "string" ||
        item.trim().length === 0,
    )
  ) {
    throw new Error(
      `Project "${fileName}" has an invalid "${fieldName}" field.`,
    );
  }

  return value;
}

function optionalString(
  value: unknown,
  fieldName: string,
  fileName: string,
): string | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }

  return requireString(
    value,
    fieldName,
    fileName,
  );
}

function parseProjectFile(
  fileName: string,
): Project {
  const filePath = path.join(
    PROJECTS_DIRECTORY,
    fileName,
  );

  const fileContent = fs.readFileSync(
    filePath,
    "utf8",
  );

  const { data, content } = matter(fileContent);

  const fileSlug = fileName.replace(/\.md$/, "");

  const slug = requireString(
    data.slug,
    "slug",
    fileName,
  );

  if (slug !== fileSlug) {
    throw new Error(
      `Project slug "${slug}" does not match filename "${fileSlug}".`,
    );
  }

  const status = requireString(
    data.status,
    "status",
    fileName,
  ) as ProjectStatus;

  if (!PROJECT_STATUSES.includes(status)) {
    throw new Error(
      `Project "${fileName}" has unsupported status "${status}".`,
    );
  }

  return {
    slug,
    title: requireString(
      data.title,
      "title",
      fileName,
    ),
    summary: requireString(
      data.summary,
      "summary",
      fileName,
    ),
    year: requireNumber(
      data.year,
      "year",
      fileName,
    ),
    status,
    category: requireString(
      data.category,
      "category",
      fileName,
    ),
    role: requireString(
      data.role,
      "role",
      fileName,
    ),
    featured: requireBoolean(
      data.featured,
      "featured",
      fileName,
    ),
    order: requireNumber(
      data.order,
      "order",
      fileName,
    ),
    stack: requireStringArray(
      data.stack,
      "stack",
      fileName,
    ),
    repositoryUrl: requireString(
      data.repositoryUrl,
      "repositoryUrl",
      fileName,
    ),
    liveUrl: optionalString(
      data.liveUrl,
      "liveUrl",
      fileName,
    ),
    coverImage: optionalString(
      data.coverImage,
      "coverImage",
      fileName,
    ),
    content: content.trim(),
  };
}

export function getAllProjects(): Project[] {
  const projectFiles = fs
    .readdirSync(PROJECTS_DIRECTORY)
    .filter((fileName) =>
      fileName.endsWith(".md"),
    );

  return projectFiles
    .map(parseProjectFile)
    .sort((firstProject, secondProject) => {
      return firstProject.order - secondProject.order;
    });
}

export function getProjectsBySlugs(
  projectSlugs: readonly string[],
): Project[] {
  const projects = getAllProjects();

  const projectsBySlug = new Map(
    projects.map((project) => [
      project.slug,
      project,
    ]),
  );

  return projectSlugs.map((slug) => {
    const project = projectsBySlug.get(slug);

    if (!project) {
      throw new Error(
        `Featured project with slug "${slug}" was not found.`,
      );
    }

    return project;
  });
}