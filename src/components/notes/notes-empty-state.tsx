// src/components/notes/
// notes-empty-state.tsx

export function NotesEmptyState() {
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
        No Published Notes
      </h3>

      <p className="type-body mt-6 max-w-xl text-muted">
        Published writing will appear here
        once it has been added to the
        archive.
      </p>
    </div>
  );
}