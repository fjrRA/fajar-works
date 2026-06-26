// src/lib/content/notes/note.repository.ts

import fs from "node:fs";

import type { Note } from "@/types/note";

import {
  NOTES_DIRECTORY,
  NOTE_FILE_EXTENSION,
} from "./note.constants";
import {
  parseNoteFile,
} from "./parse-note-file";

function sortNotesByPublishedDate(
  firstNote: Note,
  secondNote: Note,
): number {
  const dateComparison =
    secondNote.publishedAt.localeCompare(
      firstNote.publishedAt,
    );

  if (dateComparison !== 0) {
    return dateComparison;
  }

  return firstNote.slug.localeCompare(
    secondNote.slug,
  );
}

export function getAllNotes(): Note[] {
  if (!fs.existsSync(NOTES_DIRECTORY)) {
    return [];
  }

  const noteFiles = fs
    .readdirSync(NOTES_DIRECTORY)
    .filter((fileName) =>
      fileName.endsWith(
        NOTE_FILE_EXTENSION,
      ),
    )
    .sort((firstFile, secondFile) =>
      firstFile.localeCompare(secondFile),
    );

  return noteFiles
    .map(parseNoteFile)
    .sort(sortNotesByPublishedDate);
}

export function getPublishedNotes():
  Note[] {
  return getAllNotes().filter(
    (note) =>
      note.status === "Published",
  );
}

export function getLatestNotes(
  limit = 3,
): Note[] {
  if (
    !Number.isInteger(limit) ||
    limit < 0
  ) {
    throw new Error(
      "Latest notes limit must be a non-negative integer.",
    );
  }

  return getPublishedNotes().slice(
    0,
    limit,
  );
}

export function getNoteBySlug(
  slug: string,
): Note | undefined {
  return getPublishedNotes().find(
    (note) => note.slug === slug,
  );
}

export function getPublishedNoteSlugs():
  string[] {
  return getPublishedNotes().map(
    (note) => note.slug,
  );
}