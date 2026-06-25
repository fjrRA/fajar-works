// src/components/projects/project-markdown/project-markdown.tsx
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  projectMarkdownComponents,
} from "./project-markdown-components";

type ProjectMarkdownProps = {
  content: string;
};

export function ProjectMarkdown({
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

  return (
    <div className="project-markdown">
      <Markdown
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
        components={
          projectMarkdownComponents
        }
        skipHtml
      >
        {content}
      </Markdown>
    </div>
  );
}