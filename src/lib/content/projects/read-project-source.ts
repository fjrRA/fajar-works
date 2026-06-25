// src/lib/content/projects/read-project-source.ts
import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import { PROJECTS_DIRECTORY } from "./project.constants";

export type ProjectSource = {
  fileName: string;
  fileSlug: string;
  data: Record<string, unknown>;
  content: string;
};

function normalizeFileContent(
  rawFileContent: string,
): string {
  return rawFileContent.replace(
    /^\uFEFF/,
    "",
  );
}

function hasFrontmatterDelimiter(
  fileContent: string,
): boolean {
  return (
    fileContent.startsWith("---\n") ||
    fileContent.startsWith("---\r\n")
  );
}

function parseFrontmatter(
  fileContent: string,
  fileName: string,
): ReturnType<typeof matter> {
  try {
    return matter(fileContent);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : String(error);

    throw new Error(
      `Project "${fileName}" has invalid YAML frontmatter: ${errorMessage}`,
    );
  }
}

export function readProjectSource(
  fileName: string,
): ProjectSource {
  const filePath = path.join(
    PROJECTS_DIRECTORY,
    fileName,
  );

  const rawFileContent = fs.readFileSync(
    filePath,
    "utf8",
  );

  const fileContent = normalizeFileContent(
    rawFileContent,
  );

  if (!hasFrontmatterDelimiter(fileContent)) {
    throw new Error(
      `Project "${fileName}" must start directly with a "---" frontmatter delimiter.`,
    );
  }

  const parsedFile = parseFrontmatter(
    fileContent,
    fileName,
  );

  const data =
    parsedFile.data as Record<
      string,
      unknown
    >;

  if (Object.keys(data).length === 0) {
    throw new Error(
      `Project "${fileName}" has empty frontmatter.`,
    );
  }

  return {
    fileName,
    fileSlug: path.basename(
      fileName,
      path.extname(fileName),
    ),
    data,
    content: parsedFile.content.trim(),
  };
}