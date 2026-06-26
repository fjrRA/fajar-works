// src/lib/content/project-headings.ts

import type { Heading } from "mdast";
import { toString } from "mdast-util-to-string";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";

import {
  createHeadingIdGenerator,
} from "./heading-id";

export type ProjectHeadingDepth =
  | 2
  | 3
  | 4
  | 5
  | 6;

export type ProjectHeading = {
  id: string;
  text: string;
  depth: ProjectHeadingDepth;
};

/**
 * Project detail sudah mempunyai satu H1 berupa
 * nama proyek.
 *
 * Karena itu, Markdown H1 dirender sebagai H2
 * oleh ProjectMarkdown. Depth Table of Contents
 * harus mengikuti hasil render tersebut.
 */
function getRenderedHeadingDepth(
  depth: Heading["depth"],
): ProjectHeadingDepth {
  if (depth === 1) {
    return 2;
  }

  return depth;
}

/**
 * Mengambil seluruh heading dari Markdown
 * menggunakan syntax tree.
 *
 * Generator ID yang digunakan sama dengan
 * generator pada ProjectMarkdown agar href TOC
 * selalu cocok dengan id heading artikel.
 */
export function extractProjectHeadings(
  markdown: string,
): ProjectHeading[] {
  if (markdown.trim().length === 0) {
    return [];
  }

  const tree = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .parse(markdown);

  const getHeadingId =
    createHeadingIdGenerator();

  const headings: ProjectHeading[] = [];

  visit(
    tree,
    "heading",
    (node: Heading) => {
      const text = toString(node).trim();

      /*
       * ID tetap dibuat sebelum heading kosong
       * dilewati. Ini menjaga urutan generator
       * tetap sama dengan ProjectMarkdown.
       */
      const id = getHeadingId(text);

      if (text.length === 0) {
        return;
      }

      headings.push({
        id,
        text,
        depth:
          getRenderedHeadingDepth(
            node.depth,
          ),
      });
    },
  );

  return headings;
}