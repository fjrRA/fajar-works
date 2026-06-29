export type NoteReadingStats = {
  wordCount: number;
  readingMinutes: number;
};

const WORDS_PER_MINUTE = 220;

function getReadableText(
  markdown: string,
): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/~~~[\s\S]*?~~~/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[`*_>#~|\-]/g, " ");
}

export function getNoteReadingStats(
  markdown: string,
): NoteReadingStats {
  const words = getReadableText(markdown).match(
    /[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu,
  );

  const wordCount = words?.length ?? 0;

  return {
    wordCount,
    readingMinutes: Math.max(
      1,
      Math.ceil(
        wordCount / WORDS_PER_MINUTE,
      ),
    ),
  };
}
