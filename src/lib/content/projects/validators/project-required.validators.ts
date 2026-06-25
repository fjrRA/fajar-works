// src/lib/content/projects/validators/project-required.validators.ts
import {
  createInvalidFieldError,
} from "./project-validator-error";

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

export function requirePositiveInteger(
  value: unknown,
  fieldName: string,
  fileName: string,
): number {
  if (
    typeof value !== "number" ||
    !Number.isInteger(value) ||
    value < 1
  ) {
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
      `Project "${fileName}" has unsupported "${fieldName}" value "${normalizedValue}".`,
    );
  }

  return normalizedValue as TValue;
}