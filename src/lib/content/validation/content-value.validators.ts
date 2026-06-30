import type {
  ContentValidationContext,
} from "./content-validation.types";

function createInvalidFieldError(
  context: ContentValidationContext,
  fieldName: string,
  fileName: string,
) {
  return new Error(
    `${context.contentType} "${fileName}" has a missing or invalid "${fieldName}" field.`,
  );
}

export function requireContentString(
  context: ContentValidationContext,
  value: unknown,
  fieldName: string,
  fileName: string,
): string {
  if (
    typeof value !== "string" ||
    value.trim().length === 0
  ) {
    throw createInvalidFieldError(
      context,
      fieldName,
      fileName,
    );
  }

  return value.trim();
}

export function requireContentBoolean(
  context: ContentValidationContext,
  value: unknown,
  fieldName: string,
  fileName: string,
): boolean {
  if (typeof value !== "boolean") {
    throw createInvalidFieldError(
      context,
      fieldName,
      fileName,
    );
  }

  return value;
}

export function requireContentStringArray(
  context: ContentValidationContext,
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
      context,
      fieldName,
      fileName,
    );
  }

  const normalizedItems = value.map(
    (item) => item.trim(),
  );

  if (context.requireUniqueStringArrays) {
    const normalizedKeys = normalizedItems.map(
      (item) => item.toLowerCase(),
    );

    if (
      new Set(normalizedKeys).size !==
      normalizedKeys.length
    ) {
      throw new Error(
        `${context.contentType} "${fileName}" has duplicate values in "${fieldName}".`,
      );
    }
  }

  return normalizedItems;
}

export function requireAllowedContentValue<
  TValue extends string,
>(
  context: ContentValidationContext,
  value: unknown,
  allowedValues: readonly TValue[],
  fieldName: string,
  fileName: string,
): TValue {
  const normalizedValue = requireContentString(
    context,
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
      `${context.contentType} "${fileName}" has unsupported "${fieldName}" value "${normalizedValue}".`,
    );
  }

  return normalizedValue as TValue;
}

export function optionalContentString(
  context: ContentValidationContext,
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

  return requireContentString(
    context,
    value,
    fieldName,
    fileName,
  );
}
