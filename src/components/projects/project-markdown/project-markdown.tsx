// src/components/projects/project-markdown/project-markdown.tsx

import { MarkdownAsync } from "react-markdown";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

import { projectPrettyCodeOptions } from "@/lib/content/project-pretty-code-options";

import {
  createProjectMarkdownComponents,
} from "./project-markdown-components";

type ProjectMarkdownProps = {
  content: string;
};

export async function ProjectMarkdown({
  content,
}: ProjectMarkdownProps) {
  if (content.trim().length === 0) {
    return (
      <div className="border border-line bg-panel p-6">
        <p className="type-label text-muted">
          Case Study in Progress
        </p>

        <p className="type-body mt-4 max-w-xl text-muted">
          The detailed development record for
          this project is still being prepared.
        </p>
      </div>
    );
  }

  const components =
    createProjectMarkdownComponents();

  return (
    <div className="project-markdown">
      <MarkdownAsync
        /*
         * singleTilde false berarti hanya
         * ~~teks~~ yang dianggap strikethrough.
         * Satu tanda ~ tetap menjadi teks biasa.
         */
        remarkPlugins={[
          [
            remarkGfm,
            {
              singleTilde: false,
            },
          ],
        ]}
        rehypePlugins={[
          [
            rehypePrettyCode,
            projectPrettyCodeOptions,
          ],
        ]}
        components={components}
        skipHtml
      >
        {content}
      </MarkdownAsync>
    </div>
  );
}
