// src/lib/content/heading-id.ts
/**
 * Mengubah teks heading menjadi ID yang aman digunakan
 * sebagai fragment URL.
 *
 * Contoh:
 * "Main Features"     -> "main-features"
 * "API & Integration" -> "api-integration"
 * "Évaluation"        -> "evaluation"
 */
export function slugifyHeading(value: string): string {
  const slug = value
    .normalize("NFKD")
    .toLowerCase()
    .trim()
    .replace(/\p{M}/gu, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "section";
}

/**
 * Membuat generator ID yang menangani heading duplikat.
 *
 * Contoh:
 * Overview -> overview
 * Overview -> overview-2
 * Overview -> overview-3
 */
export function createHeadingIdGenerator(): (
  headingText: string,
) => string {
  const occurrences = new Map<string, number>();

  return function getHeadingId(
    headingText: string,
  ): string {
    const baseId = slugifyHeading(headingText);
    const occurrence =
      (occurrences.get(baseId) ?? 0) + 1;

    occurrences.set(baseId, occurrence);

    if (occurrence === 1) {
      return baseId;
    }

    return `${baseId}-${occurrence}`;
  };
}