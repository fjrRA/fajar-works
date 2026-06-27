// src/components/learning-log/
// learning-log-detail/
// learning-log-table-of-contents.tsx

import type {
  LearningLogHeading,
} from "@/lib/content/learning-log-headings";

type LearningLogTableOfContentsProps = {
  headings: readonly LearningLogHeading[];
};

function formatIndex(
  index: number,
): string {
  return String(index + 1).padStart(
    2,
    "0",
  );
}

function formatCount(
  count: number,
): string {
  return String(count).padStart(
    2,
    "0",
  );
}

export function LearningLogTableOfContents({
  headings,
}: LearningLogTableOfContentsProps) {
  if (headings.length === 0) {
    return null;
  }

  return (
    /*
     * note-toc digunakan sebagai
     * shared table-of-contents style.
     */
    <nav
      className="note-toc"
      aria-label="Learning Log sections"
    >
      <div className="note-toc__header">
        <p className="note-toc__label">
          On This Page
        </p>

        <p className="note-toc__count">
          {formatCount(headings.length)}{" "}
          {headings.length === 1
            ? "Section"
            : "Sections"}
        </p>
      </div>

      <ol className="note-toc__list">
        {headings.map(
          (heading, index) => (
            <li
              key={heading.id}
              className="note-toc__item"
              data-depth={
                heading.depth
              }
            >
              <a
                className="note-toc__link"
                href={`#${heading.id}`}
              >
                <span
                  className="note-toc__index"
                  aria-hidden="true"
                >
                  {formatIndex(index)}
                </span>

                <span className="note-toc__text">
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