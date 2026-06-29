type NoteRepositoryReferenceProps = {
  repositoryUrl: string;
};

function getRepositoryName(
  repositoryUrl: string,
): string {
  return new URL(repositoryUrl).pathname
    .replace(/^\//, "")
    .replace(/\/$/, "");
}

export function NoteRepositoryReference({
  repositoryUrl,
}: NoteRepositoryReferenceProps) {
  const repositoryName =
    getRepositoryName(repositoryUrl);

  return (
    <aside
      aria-label="Project repository"
      className="border-t border-line bg-panel"
    >
      <div
        className="
          grid
          min-w-0
          lg:grid-cols-[14rem_minmax(0,1fr)_auto]
          lg:items-stretch
        "
      >
        <div
          className="
            border-b
            border-line
            px-6
            py-6
            md:px-8
            lg:border-r
            lg:border-b-0
            lg:px-10
          "
        >
          <p className="type-label text-accent">
            Project Source
          </p>

          <p className="type-meta mt-3 wrap-break-word text-muted">
            {repositoryName}
          </p>
        </div>

        <p
          className="
            max-w-2xl
            px-6
            py-6
            text-base
            leading-7
            text-muted
            md:px-8
            lg:self-center
            lg:px-10
          "
        >
          Want to inspect the project behind
          this note? Its public source and
          current progress are available on
          GitHub.
        </p>

        <a
          href={repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="
            group
            flex
            min-h-20
            items-center
            justify-between
            gap-8
            bg-mauve-400
            px-6
            py-5
            font-mono
            text-xs
            font-semibold
            tracking-widest
            text-white
            uppercase
            transition-colors
            hover:bg-accent
            focus-visible:outline-2
            focus-visible:-outline-offset-4
            focus-visible:outline-inverse
            md:px-8
            lg:min-w-64
          "
        >
          View Repository

          <span
            aria-hidden="true"
            className="
              text-lg
              transition-transform
              group-hover:translate-x-1
              group-hover:-translate-y-1
              motion-reduce:transition-none
            "
          >
            ↗
          </span>
        </a>
      </div>
    </aside>
  );
}
