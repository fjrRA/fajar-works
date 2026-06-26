// src/components/projects/project-markdown/
// project-markdown-content-components.tsx

import type { Components } from "react-markdown";

import {
  ProjectMarkdownImage,
} from "./project-markdown-image";

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

export const projectMarkdownContentComponents =
  {
    p({ node, children }) {
      const imageChildren =
        node?.children.filter(
          (child) =>
            child.type === "element" &&
            child.tagName === "img",
        ) ?? [];

      if (imageChildren.length === 0) {
        return <p>{children}</p>;
      }

      /*
       * Gambar harus menjadi satu-satunya elemen
       * dalam paragraph agar <figure> tidak berada
       * di dalam elemen <p>.
       */
      if (
        imageChildren.length === 1 &&
        node?.children.length === 1
      ) {
        return <>{children}</>;
      }

      throw new Error(
        [
          "Project Markdown images must be placed",
          "in their own paragraph.",
          "Add an empty line before and after the image.",
        ].join(" "),
      );
    },

    img({ src, alt, title }) {
      const imageSource =
        typeof src === "string"
          ? src
          : undefined;

      return (
        <ProjectMarkdownImage
          src={imageSource}
          alt={alt}
          title={title}
        />
      );
    },

    /*
     * Link eksternal dibuka pada tab baru.
     * Link internal dan fragment anchor tetap
     * dibuka pada tab yang sama.
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

    /*
     * Wrapper memungkinkan tabel lebar di-scroll
     * secara lokal tanpa menyebabkan halaman
     * mengalami horizontal overflow.
     */
    table({ children }) {
      return (
        <div className="project-markdown-table">
          <table>{children}</table>
        </div>
      );
    },
  } satisfies Components;