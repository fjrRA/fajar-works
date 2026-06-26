// src/components/projects/project-markdown/project-markdown-heading.tsx

import {
  Children,
  isValidElement,
  type ReactNode,
} from "react";

export type ProjectMarkdownHeadingTag =
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type ProjectMarkdownHeadingProps = {
  as: ProjectMarkdownHeadingTag;
  id: string;
  children: ReactNode;
};

/**
 * Mengambil teks polos dari children React.
 *
 * Fungsi ini tetap bekerja ketika heading memakai
 * format Markdown seperti:
 *
 * ## Main **Features**
 * ## Using `react-markdown`
 */
export function getHeadingText(
  children: ReactNode,
): string {
  return Children.toArray(children)
    .map((child) => {
      if (
        typeof child === "string" ||
        typeof child === "number"
      ) {
        return String(child);
      }

      if (
        isValidElement<{
          children?: ReactNode;
        }>(child)
      ) {
        return getHeadingText(
          child.props.children,
        );
      }

      return "";
    })
    .join("");
}

export function ProjectMarkdownHeading({
  as: Heading,
  id,
  children,
}: ProjectMarkdownHeadingProps) {
  const headingText =
    getHeadingText(children).trim();

  const anchorLabel =
    headingText.length > 0
      ? `Permalink to section: ${headingText}`
      : "Permalink to this section";

  return (
    <Heading
      id={id}
      className="project-markdown-heading"
    >
      <a
        className="project-markdown-heading-anchor"
        href={`#${id}`}
        aria-label={anchorLabel}
      >
        <span aria-hidden="true">#</span>
      </a>

      {children}
    </Heading>
  );
}