// src/lib/content/projects/parse-project-file.ts
import type { Project } from "@/types/project";

import { parseProjectData } from "./parse-project-data";
import { readProjectSource } from "./read-project-source";

export function parseProjectFile(
  fileName: string,
): Project {
  const projectSource =
    readProjectSource(fileName);

  return parseProjectData(projectSource);
}