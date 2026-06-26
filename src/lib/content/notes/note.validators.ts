// src/lib/content/notes/note.validators.ts

function createInvalidFieldError(
  fieldName: string,
  fileName: string,
) {
  return new Error(
    `Note "${fileName}" has a missing or invalid "${fieldName}" field.`,
  );
}

export function requireString(
  value: unknown,
  fieldName: string,
  fileName: string,
): string {
  if (
    typeof value !== "string" ||
    value.trim().length === 0
  ) {
    throw createInvalidFieldError(
      fieldName,
      fileName,
    );
  }

  return value.trim();
}

export function requireBoolean(
  value: unknown,
  fieldName: string,
  fileName: string,
): boolean {
  if (typeof value !== "boolean") {
    throw createInvalidFieldError(
      fieldName,
      fileName,
    );
  }

  return value;
}

export function requireSlug(
  value: unknown,
  fileName: string,
): string {
  const slug = requireString(
    value,
    "slug",
    fileName,
  );

  const isValidSlug =
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(
      slug,
    );

  if (!isValidSlug) {
    throw new Error(
      [
        `Note "${fileName}" has invalid slug "${slug}".`,
        "Use lowercase kebab-case without spaces.",
      ].join(" "),
    );
  }

  return slug;
}

export function requireStringArray(
  value: unknown,
  fieldName: string,
  fileName: string,
): string[] {
  if (
    !Array.isArray(value) ||
    value.length === 0 ||
    value.some(
      (item) =>
        typeof item !== "string" ||
        item.trim().length === 0,
    )
  ) {
    throw createInvalidFieldError(
      fieldName,
      fileName,
    );
  }

  const normalizedItems = value.map(
    (item) => item.trim(),
  );

  const normalizedKeys =
    normalizedItems.map((item) =>
      item.toLowerCase(),
    );

  if (
    new Set(normalizedKeys).size !==
    normalizedKeys.length
  ) {
    throw new Error(
      `Note "${fileName}" has duplicate values in "${fieldName}".`,
    );
  }

  return normalizedItems;
}

export function requireAllowedValue<
  TValue extends string,
>(
  value: unknown,
  allowedValues: readonly TValue[],
  fieldName: string,
  fileName: string,
): TValue {
  const normalizedValue = requireString(
    value,
    fieldName,
    fileName,
  );

  if (
    !allowedValues.includes(
      normalizedValue as TValue,
    )
  ) {
    throw new Error(
      `Note "${fileName}" has unsupported "${fieldName}" value "${normalizedValue}".`,
    );
  }

  return normalizedValue as TValue;
}

export function requireDateString(
  value: unknown,
  fieldName: string,
  fileName: string,
): string {
  const dateValue = requireString(
    value,
    fieldName,
    fileName,
  );

  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
    throw new Error(
      `Note "${fileName}" must use YYYY-MM-DD for "${fieldName}".`,
    );
  }

  const [year, month, day] = dateValue
    .split("-")
    .map(Number);

  const parsedDate = new Date(
    Date.UTC(year, month - 1, day),
  );

  const isValidDate =
    parsedDate.getUTCFullYear() === year &&
    parsedDate.getUTCMonth() ===
    month - 1 &&
    parsedDate.getUTCDate() === day;

  if (!isValidDate) {
    throw new Error(
      `Note "${fileName}" has an invalid "${fieldName}" date.`,
    );
  }

  return dateValue;
}

export function optionalString(
  value: unknown,
  fieldName: string,
  fileName: string,
): string | undefined {
  if (
    value === undefined ||
    value === null
  ) {
    return undefined;
  }

  return requireString(
    value,
    fieldName,
    fileName,
  );
}

export function optionalDateString(
  value: unknown,
  fieldName: string,
  fileName: string,
): string | undefined {
  if (
    value === undefined ||
    value === null
  ) {
    return undefined;
  }

  return requireDateString(
    value,
    fieldName,
    fileName,
  );
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
  if (
    updatedAt &&
    updatedAt < publishedAt
  ) {
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
  const unknownFields = Object.keys(
    data,
  ).filter(
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