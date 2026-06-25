// src/components/projects/project-index/project-index-item/project-index-item-links.tsx
type ProjectIndexItemLinksProps = {
  projectTitle: string;
  repositoryUrl: string;
  liveUrl?: string;
};

export function ProjectIndexItemLinks({
  projectTitle,
  repositoryUrl,
  liveUrl,
}: ProjectIndexItemLinksProps) {
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
        Repository

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
        </a>
      ) : null}
    </nav>
  );
}