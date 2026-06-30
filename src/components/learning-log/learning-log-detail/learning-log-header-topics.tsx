type LearningLogHeaderTopicsProps = {
  topics: readonly string[];
};

export function LearningLogHeaderTopics({
  topics,
}: LearningLogHeaderTopicsProps) {
  return (
    <div
      className="
        grid
        border-t
        border-line
        lg:grid-cols-[14rem_minmax(0,1fr)]
      "
    >
      <p
        className="
          bg-panel
          px-6
          py-5
          type-label
          text-muted
          md:px-8
          lg:border-r
          lg:border-line
        "
      >
        Topics in record
      </p>

      <ul
        aria-label="Learning Log topics"
        className="
          flex
          flex-wrap
          items-center
          gap-x-3
          gap-y-2
          px-6
          py-5
          font-mono
          text-xs
          leading-5
          text-muted
          uppercase
          md:px-8
          lg:px-10
        "
      >
        {topics.map((topic, index) => (
          <li
            key={topic}
            className="flex items-center gap-3"
          >
            <span>{topic}</span>

            {index < topics.length - 1 ? (
              <span
                aria-hidden="true"
                className="text-accent"
              >
                /
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
