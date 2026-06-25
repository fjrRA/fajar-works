// src/lib/content/projects/project.constants.ts
import path from "node:path";

import type { ProjectStatus } from "@/types/project";

export const PROJECTS_DIRECTORY = path.join(
  process.cwd(),
  "content",
  "projects",
);

export const PROJECT_STATUSES = [
  "Completed",
  "In Development",
  "Paused",
  "Archived",
] as const satisfies readonly ProjectStatus[];