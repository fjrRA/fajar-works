// src/components/learning-log/learning-log-empty-state.tsx

export function LearningLogEmptyState() {
  return (
    <div
      className="
        px-6
        py-16
        md:px-8
        lg:px-10
        lg:py-24
      "
    >
      <p className="type-label text-accent">
        Archive Empty
      </p>

      <h3
        className="
          mt-4
          text-3xl
          leading-none
          font-semibold
          tracking-[-0.04em]
          uppercase
        "
      >
        No Published Learning Logs
      </h3>

      <p className="type-body mt-6 max-w-xl text-muted">
        Published learning records will appear here
        once they have been added to the archive.
      </p>
    </div>
  );
}