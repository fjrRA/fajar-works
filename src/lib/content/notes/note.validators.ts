import {
  createContentFieldValidators,
} from "@/lib/content/validation/content-field.validators";

const validators =
  createContentFieldValidators("Note", {
    requireUniqueStringArrays: true,
  });

export const {
  requireString,
  requireBoolean,
  requireStringArray,
  requireAllowedValue,
  requireDateString,
  optionalString,
  optionalDateString,
  optionalGitHubRepositoryUrl,
} = validators;

export function requireSlug(
  value: unknown,
  fileName: string,
): string {
  const slug = requireString(
    value,
    "slug",
    fileName,
  );

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(
      [
        `Note "${fileName}" has invalid slug "${slug}".`,
        "Use lowercase kebab-case without spaces.",
      ].join(" "),
    );
  }

  return slug;
}

export function optionalLocalImagePath(
  value: unknown,
  fieldName: string,
  fileName: string,
): string | undefined {
  const imagePath = optionalString(
    value,
    fieldName,
    fileName,
  );

  if (!imagePath) {
    return undefined;
  }

  if (
    !imagePath.startsWith("/images/") ||
    imagePath.includes("..")
  ) {
    throw new Error(
      [
        `Note "${fileName}" has invalid "${fieldName}" path "${imagePath}".`,
        'Use a local path inside "/public/images/".',
      ].join(" "),
    );
  }

  return imagePath;
}

export function validateDateOrder(
  publishedAt: string,
  updatedAt: string | undefined,
  fileName: string,
): void {
  if (updatedAt && updatedAt < publishedAt) {
    throw new Error(
      `Note "${fileName}" has "updatedAt" earlier than "publishedAt".`,
    );
  }
}

export function validateKnownFields(
  data: Record<string, unknown>,
  allowedFields: readonly string[],
  fileName: string,
): void {
  const unknownFields = Object.keys(data).filter(
    (field) =>
      !allowedFields.includes(field),
  );

  if (unknownFields.length > 0) {
    throw new Error(
      `Note "${fileName}" has unsupported frontmatter field(s): ${unknownFields.join(
        ", ",
      )}.`,
    );
  }
}
