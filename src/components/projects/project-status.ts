// src/components/projects/project-status.ts
import type {
  ProjectStatus,
} from "@/types/project";

export function getProjectStatusClassName(
  status: ProjectStatus,
): string {
  switch (status) {
    case "In Development":
      return "text-accent";

    case "Paused":
    case "Archived":
      return "text-muted";

    case "Completed":
    default:
      return "text-ink";
  }
}