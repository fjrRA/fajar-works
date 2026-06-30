type LearningLogHeaderStatusProps = {
  status: string;
  source: string;
  repositoryUrl?: string;
};

function getRepositoryName(
  repositoryUrl: string,
): string {
  return new URL(repositoryUrl).pathname
    .replace(/^\//, "")
    .replace(/\/$/, "");
}

export function LearningLogHeaderStatus({
  status,
  source,
  repositoryUrl,
}: LearningLogHeaderStatusProps) {
  const repositoryName = repositoryUrl
    ? getRepositoryName(repositoryUrl)
    : undefined;

  return (
    <aside
      aria-label="Learning record status"
      className="
        flex
        min-w-0
        flex-col
        bg-ink
        px-6
        py-8
        text-inverse
        md:px-8
        lg:min-h-[31rem]
        lg:border-r
        lg:border-line
        lg:px-7
        lg:py-10
      "
    >
      <div>
        <p className="type-label text-accent">
          Learning Ledger
        </p>

        <p
          className="
            mt-8
            flex
            items-center
            gap-3
            font-mono
            text-xs
            tracking-[0.12em]
            uppercase
          "
        >
          <span
            aria-hidden="true"
            className="h-2 w-2 bg-accent"
          />

          {status}
        </p>
      </div>

      <div className="mt-12 lg:mt-auto">
        <p className="type-meta text-line uppercase">
          Source
        </p>

        <p className="mt-2 text-sm leading-6">
          {source}
        </p>

        {repositoryUrl && repositoryName ? (
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="
              group
              mt-8
              flex
              items-end
              justify-between
              gap-4
              border-t
              border-muted
              pt-5
              font-mono
              text-[0.6875rem]
              leading-5
              tracking-[0.08em]
              uppercase
              transition-colors
              hover:text-accent
            "
          >
            <span className="wrap-break-word">
              {repositoryName}
            </span>

            <span
              aria-hidden="true"
              className="
                shrink-0
                text-base
                transition-transform
                group-hover:translate-x-1
                group-hover:-translate-y-1
                motion-reduce:transition-none
              "
            >
              ↗
            </span>
          </a>
        ) : null}
      </div>
    </aside>
  );
}
