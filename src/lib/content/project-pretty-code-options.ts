// src/lib/content/project-pretty-code-options.ts

import type { Options } from "rehype-pretty-code";

export const projectPrettyCodeOptions = {
  keepBackground: false,
  bypassInlineCode: true,
  defaultLang: {
    block: "plaintext",
    inline: "plaintext",
  },
  grid: true,
  theme: "github-dark-dimmed",
} satisfies Options;
