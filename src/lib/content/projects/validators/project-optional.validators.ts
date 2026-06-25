// src/lib/content/projects/validators/project-optional.validators.ts
import {
  requireDateString,
} from "./project-date.validators";
import {
  requireString,
} from "./project-required.validators";

function isNullish(
  value: unknown,
): value is null | undefined {
  return (
    value === undefined ||
    value === null
  );
}

export function optionalString(
  value: unknown,
  fieldName: string,
  fileName: string,
): string | undefined {
  if (isNullish(value)) {
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
  if (isNullish(value)) {
    return undefined;
  }

  return requireDateString(
    value,
    fieldName,
    fileName,
  );
}