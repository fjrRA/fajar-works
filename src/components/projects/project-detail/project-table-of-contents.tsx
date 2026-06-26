// src/components/projects/project-detail/
// project-table-of-contents.tsx

import type {
  ProjectHeading,
} from "@/lib/content/project-headings";

type ProjectTableOfContentsProps = {
  headings: readonly ProjectHeading[];
};

function formatSectionNumber(
  index: number,
): string {
  return String(index + 1).padStart(
    2,
    "0",
  );
}

function formatSectionCount(
  count: number,
): string {
  return String(count).padStart(
    2,
    "0",
  );
}

export function ProjectTableOfContents({
  headings,
}: ProjectTableOfContentsProps) {
  if (headings.length === 0) {
    return null;
  }

  return (
    <nav
      className="project-toc"
      aria-label="Case study sections"
    >
      <div className="project-toc__header">
        <p className="project-toc__label">
          On This Page
        </p>

        <p className="project-toc__count">
          {formatSectionCount(
            headings.length,
          )}{" "}
          {headings.length === 1
            ? "Section"
            : "Sections"}
        </p>
      </div>

      <ol className="project-toc__list">
        {headings.map(
          (heading, index) => (
            <li
              key={heading.id}
              className="project-toc__item"
              data-depth={heading.depth}
            >
              <a
                className="project-toc__link"
                href={`#${heading.id}`}
              >
                <span
                  className="project-toc__index"
                  aria-hidden="true"
                >
                  {formatSectionNumber(
                    index,
                  )}
                </span>

                <span className="project-toc__text">
                  {heading.text}
                </span>
              </a>
            </li>
          ),
        )}
      </ol>
    </nav>
  );
}