// src/components/learning-log/
// learning-log-detail/
// learning-log-detail-topics.tsx

import type {
  LearningLog,
} from "@/types/learning-log";

type LearningLogDetailTopicsProps = {
  topics: LearningLog["topics"];
};

export function LearningLogDetailTopics({
  topics,
}: LearningLogDetailTopicsProps) {
  return (
    <div>
      <p className="type-label text-muted">
        Topics
      </p>

      <ul
        aria-label="Learning Log topics"
        className="
          mt-4
          flex
          flex-wrap
          border-t
          border-l
          border-line
        "
      >
        {topics.map((topic) => (
          <li
            key={topic}
            className="
              border-r
              border-b
              border-line
              px-3
              py-2
              font-mono
              text-xs
              uppercase
            "
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}