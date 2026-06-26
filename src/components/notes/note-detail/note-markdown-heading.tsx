// src/components/notes/note-detail/
// note-markdown-heading.tsx

import {
  isValidElement,
  type ReactNode,
} from "react";

export type NoteMarkdownHeadingTag =
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type NoteMarkdownHeadingProps = {
  as: NoteMarkdownHeadingTag;
  id: string;
  children: ReactNode;
};

export function getNoteHeadingText(
  value: ReactNode,
): string {
  if (
    typeof value === "string" ||
    typeof value === "number"
  ) {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value
      .map(getNoteHeadingText)
      .join("");
  }

  if (
    isValidElement<{
      children?: ReactNode;
    }>(value)
  ) {
    return getNoteHeadingText(
      value.props.children,
    );
  }

  return "";
}

export function NoteMarkdownHeading({
  as,
  id,
  children,
}: NoteMarkdownHeadingProps) {
  const Heading = as;

  const headingText =
    getNoteHeadingText(children).trim();

  return (
    <Heading
      id={id}
      className="note-markdown-heading"
    >
      <a
        className="note-markdown-heading-anchor"
        href={`#${id}`}
        aria-label={`Link to section: ${headingText}`}
      >
        <span aria-hidden="true">
          #
        </span>
      </a>

      <span>{children}</span>
    </Heading>
  );
}