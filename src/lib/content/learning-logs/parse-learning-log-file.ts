// src/lib/content/learning-logs/parse-learning-log-file.ts
import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { LearningLog } from "@/types/learning-log";

import {
  LEARNING_LOGS_DIRECTORY,
  LEARNING_LOG_STATUSES,
} from "./learning-log.constants";
import {
  optionalDateString,
  optionalGitHubRepositoryUrl,
  requireAllowedValue,
  requireBoolean,
  requireDateString,
  requireString,
  requireStringArray,
} from "./learning-log.validators";

export function parseLearningLogFile(
  fileName: string,
): LearningLog {
  const filePath = path.join(
    LEARNING_LOGS_DIRECTORY,
    fileName,
  );

  const rawFileContent = fs.readFileSync(
    filePath,
    "utf8",
  );

  const fileContent = rawFileContent.replace(
    /^\uFEFF/,
    "",
  );

  const hasFrontmatterDelimiter =
    fileContent.startsWith("---\n") ||
    fileContent.startsWith("---\r\n");

  if (!hasFrontmatterDelimiter) {
    throw new Error(
      `Learning log "${fileName}" must start directly with a "---" frontmatter delimiter.`,
    );
  }

  let parsedFile: ReturnType<typeof matter>;

  try {
    parsedFile = matter(fileContent);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : String(error);

    throw new Error(
      `Learning log "${fileName}" has invalid YAML frontmatter: ${errorMessage}`,
    );
  }

  const { data, content } = parsedFile;

  if (Object.keys(data).length === 0) {
    throw new Error(
      `Learning log "${fileName}" has empty frontmatter.`,
    );
  }

  const fileSlug = path.basename(
    fileName,
    ".md",
  );

  const slug = requireString(
    data.slug,
    "slug",
    fileName,
  );

  if (slug !== fileSlug) {
    throw new Error(
      `Learning log slug "${slug}" does not match filename "${fileSlug}".`,
    );
  }

  const status = requireAllowedValue(
    data.status,
    LEARNING_LOG_STATUSES,
    "status",
    fileName,
  );

  return {
    slug,
    title: requireString(
      data.title,
      "title",
      fileName,
    ),
    excerpt: requireString(
      data.excerpt,
      "excerpt",
      fileName,
    ),
    loggedAt: requireDateString(
      data.loggedAt,
      "loggedAt",
      fileName,
    ),
    updatedAt: optionalDateString(
      data.updatedAt,
      "updatedAt",
      fileName,
    ),
    published: requireBoolean(
      data.published,
      "published",
      fileName,
    ),
    status,
    category: requireString(
      data.category,
      "category",
      fileName,
    ),
    source: requireString(
      data.source,
      "source",
      fileName,
    ),
    module: requireString(
      data.module,
      "module",
      fileName,
    ),
    progress: requireString(
      data.progress,
      "progress",
      fileName,
    ),
    topics: requireStringArray(
      data.topics,
      "topics",
      fileName,
    ),
    repositoryUrl:
      optionalGitHubRepositoryUrl(
        data.repositoryUrl,
        "repositoryUrl",
        fileName,
      ),
    content: content.trim(),
  };
}
