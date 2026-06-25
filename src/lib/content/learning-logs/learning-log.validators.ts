// src/lib/content/learning-logs/learning-log.validators.ts
function createInvalidFieldError(
  fieldName: string,
  fileName: string,
) {
  return new Error(
    `Learning log "${fileName}" has a missing or invalid "${fieldName}" field.`,
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

  return value.map((item) => item.trim());
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
      `Learning log "${fileName}" has unsupported "${fieldName}" value "${normalizedValue}".`,
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
      `Learning log "${fileName}" must use YYYY-MM-DD for "${fieldName}".`,
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
    parsedDate.getUTCMonth() === month - 1 &&
    parsedDate.getUTCDate() === day;

  if (!isValidDate) {
    throw new Error(
      `Learning log "${fileName}" has an invalid "${fieldName}" date.`,
    );
  }

  return dateValue;
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