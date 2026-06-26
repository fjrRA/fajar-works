// src/lib/content/notes/
// parse-note-file.ts

import type { Note } from "@/types/note";

import {
  parseNoteFrontmatter,
} from "./parse-note-frontmatter";
import {
  readNoteDocument,
} from "./read-note-document";

export function parseNoteFile(
  fileName: string,
): Note {
  const document =
    readNoteDocument(fileName);

  return parseNoteFrontmatter({
    document,
    fileName,
  });
}