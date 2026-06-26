// src/lib/content/note-pretty-code-options.ts

import type {
  Options,
} from "rehype-pretty-code";

export const notePrettyCodeOptions = {
  /*
   * Background utama tetap dikendalikan CSS
   * Fajar Works, bukan background bawaan tema.
   */
  keepBackground: false,

  /*
   * Inline code tetap memakai style editorial
   * sederhana. Shiki hanya menangani fenced
   * code blocks.
   */
  bypassInlineCode: true,

  /*
   * Code block tanpa language tetap dapat
   * dirender sebagai plain text.
   */
  defaultLang: {
    block: "plaintext",
    inline: "plaintext",
  },

  /*
   * Membantu highlighted line memenuhi
   * seluruh lebar code block.
   */
  grid: true,

  theme: "github-dark-dimmed",
} satisfies Options;