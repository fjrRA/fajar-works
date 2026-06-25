// src/lib/content/projects/validators/project-validator-error.ts
export function createInvalidFieldError(
  fieldName: string,
  fileName: string,
): Error {
  return new Error(
    `Project "${fileName}" has a missing or invalid "${fieldName}" field.`,
  );
}