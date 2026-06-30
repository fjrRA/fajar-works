// src/components/learning-log/
// learning-log-detail/
// learning-log-markdown.tsx

import {
  MarkdownAsync,
} from "react-markdown";

import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

import {
  learningLogPrettyCodeOptions,
} from "@/lib/content/learning-log-pretty-code-options";

import {
  createLearningLogMarkdownComponents,
} from "./learning-log-markdown-components";

type LearningLogMarkdownProps = {
  content: string;
};

export async function LearningLogMarkdown({
  content,
}: LearningLogMarkdownProps) {
  const components =
    createLearningLogMarkdownComponents();

  return (
    <div className="note-markdown learning-log-markdown">
      <MarkdownAsync
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
            learningLogPrettyCodeOptions,
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
