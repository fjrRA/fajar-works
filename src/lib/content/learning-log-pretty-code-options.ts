// src/lib/content/learning-log-pretty-code-options.ts

import type {
  Options,
} from "rehype-pretty-code";

export const learningLogPrettyCodeOptions =
  {
    /*
     * Background code block tetap
     * dikendalikan oleh CSS Fajar Works.
     */
    keepBackground: false,

    /*
     * Inline code tetap menggunakan
     * typography editorial sederhana.
     */
    bypassInlineCode: true,

    /*
     * Code block tanpa nama bahasa
     * tetap dapat ditampilkan.
     */
    defaultLang: {
      block: "plaintext",
      inline: "plaintext",
    },

    grid: true,
    theme: "github-dark-dimmed",
  } satisfies Options;