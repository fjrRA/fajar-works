// src/lib/content/projects/validators/project-date.validators.ts
import {
  requireString,
} from "./project-required.validators";

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
      `Project "${fileName}" must use YYYY-MM-DD for "${fieldName}".`,
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
      `Project "${fileName}" has an invalid "${fieldName}" date.`,
    );
  }

  return dateValue;
}