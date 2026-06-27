// src/components/projects/project-preview/project-preview-links.tsx

type ProjectPreviewLinksProps = {
  projectTitle: string;
  repositoryUrl: string;
  liveUrl?: string;
};

export function ProjectPreviewLinks({
  projectTitle,
  repositoryUrl,
  liveUrl,
}: ProjectPreviewLinksProps) {
  return (
    <nav
      aria-label={`${projectTitle} external links`}
      className="
        mt-8
        flex
        flex-wrap
        items-center
        gap-x-8
        gap-y-4
      "
    >
      <a
        href={repositoryUrl}
        target="_blank"
        rel="noreferrer"
        className="
          group
          inline-flex
          items-center
          gap-4
          border-b
          border-ink
          pb-2
          font-mono
          text-xs
          font-semibold
          tracking-[0.1em]
          uppercase
          transition-colors
          duration-150
          hover:border-accent
          hover:text-accent
        "
      >
        <span>
          Repository

          <span className="sr-only">
            {` for ${projectTitle}, opens in a new tab`}
          </span>
        </span>

        <span
          aria-hidden="true"
          className="
            h-px
            w-8
            bg-current
            transition-transform
            duration-200
            ease-out
            group-hover:translate-x-1
            motion-reduce:transition-none
          "
        />
      </a>

      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex
            items-center
            border-b
            border-line
            pb-2
            font-mono
            text-xs
            font-semibold
            tracking-[0.1em]
            uppercase
            transition-colors
            duration-150
            hover:border-accent
            hover:text-accent
          "
        >
          Live Website

          <span className="sr-only">
            {` for ${projectTitle}, opens in a new tab`}
          </span>
        </a>
      ) : null}
    </nav>
  );
}