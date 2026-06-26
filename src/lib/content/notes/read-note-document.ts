// src/lib/content/notes/
// read-note-document.ts

import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import {
  NOTES_DIRECTORY,
  NOTE_FILE_EXTENSION,
} from "./note.constants";

export type NoteDocument = Readonly<{
  data: Record<string, unknown>;
  content: string;
  fileSlug: string;
}>;

function removeByteOrderMark(
  value: string,
): string {
  return value.replace(/^\uFEFF/, "");
}

function validateFrontmatterDelimiter(
  fileContent: string,
  fileName: string,
): void {
  const hasFrontmatterDelimiter =
    fileContent.startsWith("---\n") ||
    fileContent.startsWith("---\r\n");

  if (!hasFrontmatterDelimiter) {
    throw new Error(
      `Note "${fileName}" must start directly with a "---" frontmatter delimiter.`,
    );
  }
}

function parseDocumentContent(
  fileContent: string,
  fileName: string,
): ReturnType<typeof matter> {
  try {
    return matter(fileContent);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : String(error);

    throw new Error(
      `Note "${fileName}" has invalid YAML frontmatter: ${errorMessage}`,
    );
  }
}

function validateDocumentContent(
  data: Record<string, unknown>,
  content: string,
  fileName: string,
): void {
  if (Object.keys(data).length === 0) {
    throw new Error(
      `Note "${fileName}" has empty frontmatter.`,
    );
  }

  if (content.length === 0) {
    throw new Error(
      `Note "${fileName}" has empty Markdown content.`,
    );
  }
}

export function readNoteDocument(
  fileName: string,
): NoteDocument {
  const filePath = path.join(
    NOTES_DIRECTORY,
    fileName,
  );

  const rawFileContent = fs.readFileSync(
    filePath,
    "utf8",
  );

  const fileContent =
    removeByteOrderMark(rawFileContent);

  validateFrontmatterDelimiter(
    fileContent,
    fileName,
  );

  const parsedDocument =
    parseDocumentContent(
      fileContent,
      fileName,
    );

  const data =
    parsedDocument.data as Record<
      string,
      unknown
    >;

  const content =
    parsedDocument.content.trim();

  validateDocumentContent(
    data,
    content,
    fileName,
  );

  return {
    data,
    content,
    fileSlug: path.basename(
      fileName,
      NOTE_FILE_EXTENSION,
    ),
  };
}