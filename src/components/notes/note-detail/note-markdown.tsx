// src/components/notes/note-detail/
// note-markdown.tsx

import {
  MarkdownAsync,
} from "react-markdown";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

import {
  notePrettyCodeOptions,
} from "@/lib/content/note-pretty-code-options";

import {
  createNoteMarkdownComponents,
} from "./note-markdown-components";

type NoteMarkdownProps = {
  content: string;
};

export async function NoteMarkdown({
  content,
}: NoteMarkdownProps) {
  const components =
    createNoteMarkdownComponents();

  return (
    <div className="note-markdown">
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
            notePrettyCodeOptions,
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