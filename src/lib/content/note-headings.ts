// src/lib/content/note-headings.ts

import {
  createHeadingIdGenerator,
} from "./heading-id";

export type NoteHeadingDepth =
  | 2
  | 3
  | 4
  | 5
  | 6;

export type NoteHeading = Readonly<{
  id: string;
  text: string;
  depth: NoteHeadingDepth;
}>;

type MarkdownFence = {
  character: "`" | "~";
  length: number;
};

function getPlainHeadingText(
  value: string,
): string {
  return value
    .replace(
      /!\[([^\]]*)\]\([^)]*\)/g,
      "$1",
    )
    .replace(
      /\[([^\]]+)\]\([^)]*\)/g,
      "$1",
    )
    .replace(/`([^`]+)`/g, "$1")
    .replace(/[*_~]/g, "")
    .trim();
}

function getFenceToken(
  line: string,
): string | undefined {
  return line
    .trimStart()
    .match(/^(`{3,}|~{3,})/)?.[1];
}

export function extractNoteHeadings(
  content: string,
): NoteHeading[] {
  const headings: NoteHeading[] = [];
  const getHeadingId =
    createHeadingIdGenerator();

  let activeFence:
    | MarkdownFence
    | null = null;

  for (
    const line of content.split(/\r?\n/)
  ) {
    const fenceToken =
      getFenceToken(line);

    if (fenceToken) {
      const character =
        fenceToken[0] as "`" | "~";

      if (!activeFence) {
        activeFence = {
          character,
          length: fenceToken.length,
        };
      } else if (
        activeFence.character ===
        character &&
        fenceToken.length >=
        activeFence.length
      ) {
        activeFence = null;
      }

      continue;
    }

    if (activeFence) {
      continue;
    }

    const headingMatch = line.match(
      /^(#{1,6})[ \t]+(.+?)[ \t]*#*[ \t]*$/,
    );

    if (!headingMatch) {
      continue;
    }

    const markdownDepth =
      headingMatch[1].length;

    const depth = Math.max(
      2,
      markdownDepth,
    ) as NoteHeadingDepth;

    const text = getPlainHeadingText(
      headingMatch[2],
    );

    if (!text) {
      continue;
    }

    headings.push({
      id: getHeadingId(text),
      text,
      depth,
    });
  }

  return headings;
}