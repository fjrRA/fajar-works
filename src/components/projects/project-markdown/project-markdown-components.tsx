// src/components/projects/project-markdown/project-markdown-components.tsx
import type { Components } from "react-markdown";

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

export const projectMarkdownComponents: Components =
{
  /*
   * Halaman detail sudah memiliki satu H1
   * berupa nama proyek. Apabila isi Markdown
   * tidak sengaja menggunakan "# Heading",
   * heading tersebut diturunkan menjadi H2.
   */
  h1({ children }) {
    return <h2>{children}</h2>;
  },

  /*
   * Link eksternal dibuka pada tab baru.
   * Link internal dan anchor tetap dibuka
   * pada tab yang sama.
   */
  a({ href, title, children }) {
    const isExternal =
      isExternalHref(href);

    return (
      <a
        href={href}
        title={title}
        target={
          isExternal ? "_blank" : undefined
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
   * Wrapper dibutuhkan agar tabel lebar dapat
   * di-scroll secara lokal tanpa membuat
   * seluruh halaman mengalami overflow.
   */
  table({ children }) {
    return (
      <div className="project-markdown-table">
        <table>{children}</table>
      </div>
    );
  },
};