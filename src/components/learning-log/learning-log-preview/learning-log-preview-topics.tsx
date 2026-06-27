// src/components/learning-log/
// learning-log-preview/
// learning-log-preview-topics.tsx

type LearningLogPreviewTopicsProps = {
  topics: readonly string[];
};

export function LearningLogPreviewTopics({
  topics,
}: LearningLogPreviewTopicsProps) {
  const readableTopics =
    topics.join(", ");

  const displayedTopics =
    topics.join(" / ");

  return (
    <p
      className="
        mt-6
        font-mono
        text-xs
        leading-6
        tracking-[0.06em]
        text-muted
        uppercase
      "
      aria-label={`Topics: ${readableTopics}`}
    >
      {displayedTopics}
    </p>
  );
}