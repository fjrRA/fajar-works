import type {
  ContentValidationContext,
} from "./content-validation.types";
import {
  optionalContentString,
} from "./content-value.validators";

export function optionalGitHubRepositoryUrl(
  context: ContentValidationContext,
  value: unknown,
  fieldName: string,
  fileName: string,
): string | undefined {
  const repositoryUrl = optionalContentString(
    context,
    value,
    fieldName,
    fileName,
  );

  if (!repositoryUrl) {
    return undefined;
  }

  let parsedUrl: URL;

  try {
    parsedUrl = new URL(repositoryUrl);
  } catch {
    throw new Error(
      `${context.contentType} "${fileName}" has invalid "${fieldName}" URL "${repositoryUrl}".`,
    );
  }

  const pathSegments = parsedUrl.pathname
    .split("/")
    .filter(Boolean);

  const isGitHubRepository =
    parsedUrl.protocol === "https:" &&
    parsedUrl.hostname.toLowerCase() ===
      "github.com" &&
    pathSegments.length === 2 &&
    parsedUrl.search.length === 0 &&
    parsedUrl.hash.length === 0;

  if (!isGitHubRepository) {
    throw new Error(
      [
        `${context.contentType} "${fileName}" has unsupported "${fieldName}" URL "${repositoryUrl}".`,
        "Use a direct HTTPS GitHub repository URL such as",
        '"https://github.com/owner/repository".',
      ].join(" "),
    );
  }

  return repositoryUrl.replace(/\/$/, "");
}
