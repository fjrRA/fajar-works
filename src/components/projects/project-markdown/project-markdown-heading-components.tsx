// src/components/projects/project-markdown/
// project-markdown-heading-components.tsx

// src/components/projects/project-markdown/
// project-markdown-heading-components.tsx

import type { ReactNode } from "react";
import type { Components } from "react-markdown";

import {
  getHeadingText,
  ProjectMarkdownHeading,
  type ProjectMarkdownHeadingTag,
} from "./project-markdown-heading";

type HeadingIdGenerator = (
  headingText: string,
) => string;

function renderProjectHeading(
  as: ProjectMarkdownHeadingTag,
  children: ReactNode,
  getHeadingId: HeadingIdGenerator,
) {
  const headingText =
    getHeadingText(children).trim();

  const id = getHeadingId(headingText);

  return (
    <ProjectMarkdownHeading
      as={as}
      id={id}
    >
      {children}
    </ProjectMarkdownHeading>
  );
}

export function createProjectMarkdownHeadingComponents(
  getHeadingId: HeadingIdGenerator,
): Components {
  return {
    /*
     * Halaman detail sudah memiliki satu H1
     * berupa nama proyek.
     *
     * Markdown H1 diturunkan menjadi H2 agar
     * halaman tidak memiliki dua heading utama.
     */
    h1({ children }) {
      return renderProjectHeading(
        "h2",
        children,
        getHeadingId,
      );
    },

    h2({ children }) {
      return renderProjectHeading(
        "h2",
        children,
        getHeadingId,
      );
    },

    h3({ children }) {
      return renderProjectHeading(
        "h3",
        children,
        getHeadingId,
      );
    },

    h4({ children }) {
      return renderProjectHeading(
        "h4",
        children,
        getHeadingId,
      );
    },

    h5({ children }) {
      return renderProjectHeading(
        "h5",
        children,
        getHeadingId,
      );
    },

    h6({ children }) {
      return renderProjectHeading(
        "h6",
        children,
        getHeadingId,
      );
    },
  };
}