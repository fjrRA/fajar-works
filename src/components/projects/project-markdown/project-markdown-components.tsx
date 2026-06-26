// src/components/projects/project-markdown/
// project-markdown-components.tsx

import type { Components } from "react-markdown";

import {
  createHeadingIdGenerator,
} from "@/lib/content/heading-id";

import {
  projectMarkdownContentComponents,
} from "./project-markdown-content-components";
import {
  createProjectMarkdownHeadingComponents,
} from "./project-markdown-heading-components";

export function createProjectMarkdownComponents(): Components {
  /*
   * Generator dibuat secara terpisah untuk
   * setiap artikel agar hitungan heading
   * duplikat tidak terbawa ke artikel lain.
   */
  const getHeadingId =
    createHeadingIdGenerator();

  return {
    ...projectMarkdownContentComponents,

    ...createProjectMarkdownHeadingComponents(
      getHeadingId,
    ),
  };
}