// src/lib/content/note-related.ts

import type { Note } from "@/types/note";

export type RelatedNoteItem =
  Readonly<
    Pick<
      Note,
      | "slug"
      | "title"
      | "excerpt"
      | "category"
      | "publishedAt"
      | "language"
    >
  >;

type ScoredNote = {
  note: Note;
  score: number;
};

function normalizeValue(
  value: string,
): string {
  return value.trim().toLowerCase();
}

function calculateRelatedScore(
  currentNote: Note,
  candidateNote: Note,
): number {
  let score = 0;

  if (
    normalizeValue(
      currentNote.category,
    ) ===
    normalizeValue(
      candidateNote.category,
    )
  ) {
    score += 3;
  }

  const currentTags = new Set(
    currentNote.tags.map(
      normalizeValue,
    ),
  );

  const sharedTagCount =
    candidateNote.tags.filter((tag) =>
      currentTags.has(
        normalizeValue(tag),
      ),
    ).length;

  score += sharedTagCount * 2;

  return score;
}

function toRelatedNoteItem(
  note: Note,
): RelatedNoteItem {
  return {
    slug: note.slug,
    title: note.title,
    excerpt: note.excerpt,
    category: note.category,
    publishedAt: note.publishedAt,
    language: note.language,
  };
}

export function getRelatedNotes(
  publishedNotes: readonly Note[],
  currentNoteSlug: string,
  limit = 3,
): RelatedNoteItem[] {
  if (
    !Number.isInteger(limit) ||
    limit < 0
  ) {
    throw new Error(
      "Related notes limit must be a non-negative integer.",
    );
  }

  const currentNote =
    publishedNotes.find(
      (note) =>
        note.slug ===
        currentNoteSlug,
    );

  if (!currentNote) {
    throw new Error(
      `Cannot find current Note "${currentNoteSlug}" when creating related content.`,
    );
  }

  const scoredNotes: ScoredNote[] =
    publishedNotes
      .filter(
        (note) =>
          note.slug !==
          currentNoteSlug,
      )
      .map((note) => ({
        note,
        score:
          calculateRelatedScore(
            currentNote,
            note,
          ),
      }))
      .sort(
        (
          firstItem,
          secondItem,
        ) => {
          const scoreComparison =
            secondItem.score -
            firstItem.score;

          if (scoreComparison !== 0) {
            return scoreComparison;
          }

          const dateComparison =
            secondItem.note.publishedAt.localeCompare(
              firstItem.note
                .publishedAt,
            );

          if (dateComparison !== 0) {
            return dateComparison;
          }

          return firstItem.note.slug.localeCompare(
            secondItem.note.slug,
          );
        },
      );

  const directlyRelated =
    scoredNotes.filter(
      (item) => item.score > 0,
    );

  const fallbackNotes =
    scoredNotes.filter(
      (item) => item.score === 0,
    );

  return [
    ...directlyRelated,
    ...fallbackNotes,
  ]
    .slice(0, limit)
    .map(({ note }) =>
      toRelatedNoteItem(note),
    );
}