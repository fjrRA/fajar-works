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

export function LearningLogTableOfContents({
  headings,
}: LearningLogTableOfContentsProps) {
  if (headings.length === 0) {
    return null;
  }

  return (
    <nav
      className="learning-log-toc"
      aria-label="Learning Log checkpoints"
    >
      <div className="learning-log-toc__header">
        <p className="learning-log-toc__label">
          Learning Index
        </p>

        <p className="learning-log-toc__count">
          {formatIndex(
            headings.length - 1,
          )} checkpoints
        </p>
      </div>

      <ol className="learning-log-toc__list">
        {headings.map(
          (heading, index) => (
            <li
              key={heading.id}
              className="learning-log-toc__item"
            >
              <a
                className="learning-log-toc__link"
                href={`#${heading.id}`}
              >
                <span
                  className="learning-log-toc__index"
                  aria-hidden="true"
                >
                  {formatIndex(index)}
                </span>

                <span className="learning-log-toc__text">
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
