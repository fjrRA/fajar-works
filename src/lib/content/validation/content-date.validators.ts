import type {
  ContentValidationContext,
} from "./content-validation.types";
import {
  requireContentString,
} from "./content-value.validators";

export function requireContentDateString(
  context: ContentValidationContext,
  value: unknown,
  fieldName: string,
  fileName: string,
): string {
  const dateValue = requireContentString(
    context,
    value,
    fieldName,
    fileName,
  );

  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
    throw new Error(
      `${context.contentType} "${fileName}" must use YYYY-MM-DD for "${fieldName}".`,
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
      `${context.contentType} "${fileName}" has an invalid "${fieldName}" date.`,
    );
  }

  return dateValue;
}

export function optionalContentDateString(
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

  return requireContentDateString(
    context,
    value,
    fieldName,
    fileName,
  );
}
