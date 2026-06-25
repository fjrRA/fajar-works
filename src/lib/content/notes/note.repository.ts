// src/lib/content/notes/note.repository.ts
import fs from "node:fs";

import type { Note } from "@/types/note";

import { NOTES_DIRECTORY } from "./note.constants";
import { parseNoteFile } from "./parse-note-file";

function validateLimit(limit: number) {
  if (
    !Number.isInteger(limit) ||
    limit < 1
  ) {
    throw new Error(
      "Latest notes limit must be a positive integer.",
    );
  }
}

export function getAllNotes(): Note[] {
  if (!fs.existsSync(NOTES_DIRECTORY)) {
    return [];
  }

  const noteFiles = fs
    .readdirSync(NOTES_DIRECTORY)
    .filter((fileName) =>
      fileName.endsWith(".md"),
    )
    .sort((firstFile, secondFile) =>
      firstFile.localeCompare(secondFile),
    );

  return noteFiles.map(parseNoteFile);
}

export function getPublishedNotes(): Note[] {
  return getAllNotes()
    .filter(
      (note) => note.status === "Published",
    )
    .sort((firstNote, secondNote) =>
      secondNote.publishedAt.localeCompare(
        firstNote.publishedAt,
      ),
    );
}

export function getLatestNotes(
  limit: number,
): Note[] {
  validateLimit(limit);

  return getPublishedNotes().slice(
    0,
    limit,
  );
}