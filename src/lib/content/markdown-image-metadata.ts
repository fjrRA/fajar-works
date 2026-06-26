// src/lib/content/markdown-image-metadata.ts

export type MarkdownImageMetadata = {
  caption: string;
  width: number;
  height: number;
};

/**
 * Format title Markdown image:
 *
 * "Caption gambar [1600x900]"
 *
 * Caption boleh kosong:
 *
 * "[1600x900]"
 */
export function parseMarkdownImageMetadata(
  title: string | undefined,
  source: string,
): MarkdownImageMetadata {
  const normalizedTitle = title?.trim();

  if (!normalizedTitle) {
    throw new Error(
      [
        `Markdown image "${source}" is missing its metadata.`,
        "Use the title format:",
        '"Image caption [1600x900]".',
      ].join(" "),
    );
  }

  const match = normalizedTitle.match(
    /^(.*?)\s*\[(\d+)x(\d+)\]\s*$/i,
  );

  if (!match) {
    throw new Error(
      [
        `Markdown image "${source}" has invalid metadata.`,
        "Expected:",
        '"Image caption [1600x900]".',
      ].join(" "),
    );
  }

  const caption = match[1].trim();
  const width = Number(match[2]);
  const height = Number(match[3]);

  if (
    !Number.isInteger(width) ||
    !Number.isInteger(height) ||
    width <= 0 ||
    height <= 0
  ) {
    throw new Error(
      `Markdown image "${source}" must have positive integer dimensions.`,
    );
  }

  return {
    caption,
    width,
    height,
  };
}