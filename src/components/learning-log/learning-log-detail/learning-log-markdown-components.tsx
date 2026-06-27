// src/components/learning-log/
// learning-log-detail/
// learning-log-markdown-components.tsx

import type {
  ReactNode,
} from "react";

import type {
  Components,
} from "react-markdown";

import {
  createHeadingIdGenerator,
} from "@/lib/content/heading-id";

import {
  getLearningLogHeadingText,
  LearningLogMarkdownHeading,
  type LearningLogMarkdownHeadingTag,
} from "./learning-log-markdown-heading";

type HeadingIdGenerator = (
  headingText: string,
) => string;

function renderLearningLogHeading(
  as: LearningLogMarkdownHeadingTag,
  children: ReactNode,
  getHeadingId: HeadingIdGenerator,
) {
  const headingText =
    getLearningLogHeadingText(
      children,
    ).trim();

  const id = getHeadingId(headingText);

  return (
    <LearningLogMarkdownHeading
      as={as}
      id={id}
    >
      {children}
    </LearningLogMarkdownHeading>
  );
}

function isExternalHref(
  href: string | undefined,
): boolean {
  if (!href) {
    return false;
  }

  return (
    href.startsWith("https://") ||
    href.startsWith("http://") ||
    href.startsWith("//")
  );
}

export function createLearningLogMarkdownComponents():
  Components {
  /*
   * Generator baru dibuat untuk
   * setiap Learning Log.
   */
  const getHeadingId =
    createHeadingIdGenerator();

  return {
    /*
     * Judul Learning Log sudah menjadi
     * H1 halaman. H1 Markdown diturunkan
     * menjadi H2.
     */
    h1({ children }) {
      return renderLearningLogHeading(
        "h2",
        children,
        getHeadingId,
      );
    },

    h2({ children }) {
      return renderLearningLogHeading(
        "h2",
        children,
        getHeadingId,
      );
    },

    h3({ children }) {
      return renderLearningLogHeading(
        "h3",
        children,
        getHeadingId,
      );
    },

    h4({ children }) {
      return renderLearningLogHeading(
        "h4",
        children,
        getHeadingId,
      );
    },

    h5({ children }) {
      return renderLearningLogHeading(
        "h5",
        children,
        getHeadingId,
      );
    },

    h6({ children }) {
      return renderLearningLogHeading(
        "h6",
        children,
        getHeadingId,
      );
    },

    a({
      href,
      title,
      children,
    }) {
      const isExternal =
        isExternalHref(href);

      return (
        <a
          href={href}
          title={title}
          target={
            isExternal
              ? "_blank"
              : undefined
          }
          rel={
            isExternal
              ? "noreferrer noopener"
              : undefined
          }
        >
          {children}
        </a>
      );
    },

    /*
     * Table yang lebih lebar daripada
     * area artikel memiliki scroll lokal.
     */
    table({ children }) {
      return (
        <div className="note-markdown-table">
          <table>{children}</table>
        </div>
      );
    },
  };
}