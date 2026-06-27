// src/components/learning-log/
// learning-log-detail/
// learning-log-markdown-heading.tsx

import {
  isValidElement,
  type ReactNode,
} from "react";

export type LearningLogMarkdownHeadingTag =
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type LearningLogMarkdownHeadingProps = {
  as: LearningLogMarkdownHeadingTag;
  id: string;
  children: ReactNode;
};

export function getLearningLogHeadingText(
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
      .map(getLearningLogHeadingText)
      .join("");
  }

  if (
    isValidElement<{
      children?: ReactNode;
    }>(value)
  ) {
    return getLearningLogHeadingText(
      value.props.children,
    );
  }

  return "";
}

export function LearningLogMarkdownHeading({
  as,
  id,
  children,
}: LearningLogMarkdownHeadingProps) {
  const Heading = as;

  const headingText =
    getLearningLogHeadingText(
      children,
    ).trim();

  return (
    <Heading
      id={id}
      className="note-markdown-heading"
    >
      <a
        href={`#${id}`}
        aria-label={`Link to section: ${headingText}`}
        className="note-markdown-heading-anchor"
      >
        #
      </a>

      <span>{children}</span>
    </Heading>
  );
}