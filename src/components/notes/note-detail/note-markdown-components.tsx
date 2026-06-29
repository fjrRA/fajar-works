// src/components/notes/note-detail/
// note-markdown-components.tsx

import type { ReactNode } from "react";
import type {
  Components,
} from "react-markdown";

import {
  createHeadingIdGenerator,
} from "@/lib/content/heading-id";

import {
  getNoteHeadingText,
  NoteMarkdownHeading,
  type NoteMarkdownHeadingTag,
} from "./note-markdown-heading";
import {
  NoteMarkdownImage,
} from "./note-markdown-image";

type HeadingIdGenerator = (
  headingText: string,
) => string;

function renderNoteHeading(
  as: NoteMarkdownHeadingTag,
  children: ReactNode,
  getHeadingId: HeadingIdGenerator,
) {
  const headingText =
    getNoteHeadingText(children).trim();

  const id = getHeadingId(
    headingText,
  );

  return (
    <NoteMarkdownHeading
      as={as}
      id={id}
    >
      {children}
    </NoteMarkdownHeading>
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

export function createNoteMarkdownComponents():
  Components {
  /*
   * Generator baru dibuat untuk setiap artikel.
   * Dengan begitu, hitungan ID heading duplikat
   * tidak terbawa ke artikel lain.
   */
  const getHeadingId =
    createHeadingIdGenerator();

  return {
    /*
     * Judul Note sudah menjadi H1 halaman.
     * Markdown H1 diturunkan menjadi H2.
     */
    h1({ children }) {
      return renderNoteHeading(
        "h2",
        children,
        getHeadingId,
      );
    },

    h2({ children }) {
      return renderNoteHeading(
        "h2",
        children,
        getHeadingId,
      );
    },

    h3({ children }) {
      return renderNoteHeading(
        "h3",
        children,
        getHeadingId,
      );
    },

    h4({ children }) {
      return renderNoteHeading(
        "h4",
        children,
        getHeadingId,
      );
    },

    h5({ children }) {
      return renderNoteHeading(
        "h5",
        children,
        getHeadingId,
      );
    },

    h6({ children }) {
      return renderNoteHeading(
        "h6",
        children,
        getHeadingId,
      );
    },

    /*
     * Markdown membungkus image tunggal dengan
     * paragraf. Karena renderer image menghasilkan
     * <figure>, wrapper <p> perlu dilepas agar struktur
     * HTML tetap valid dan hydration tidak berbeda.
     */
    p({ node, children }) {
      const meaningfulChildren =
        node?.children.filter(
          (child) =>
            child.type !== "text" ||
            child.value.trim().length > 0,
        ) ?? [];

      const hasStandaloneImage =
        meaningfulChildren.length === 1 &&
        meaningfulChildren[0].type ===
          "element" &&
        meaningfulChildren[0].tagName ===
          "img";

      if (hasStandaloneImage) {
        return <>{children}</>;
      }

      return <p>{children}</p>;
    },

    /*
     * Link eksternal dibuka pada tab baru.
     * Link internal dan fragment anchor tetap
     * berada di tab yang sama.
     */
    a({ href, title, children }) {
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
              ? "noreferrer"
              : undefined
          }
        >
          {children}
        </a>
      );
    },

    img({ src, alt, title }) {
      return (
        <NoteMarkdownImage
          src={src}
          alt={alt}
          title={title}
        />
      );
    },

    /*
     * Tabel lebar memiliki scroll lokal.
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
