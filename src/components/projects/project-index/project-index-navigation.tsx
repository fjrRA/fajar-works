// src/components/projects/project-index/project-index-navigation.tsx
import type {
  Project,
  ProjectStatus,
} from "@/types/project";

type ProjectIndexNavigationProps = {
  projects: Project[];
};

const PROJECT_STATUS_ORDER: readonly ProjectStatus[] = [
  "In Development",
  "Completed",
  "Paused",
  "Archived",
];

function formatCount(count: number): string {
  return String(count).padStart(2, "0");
}

export function ProjectIndexNavigation({
  projects,
}: ProjectIndexNavigationProps) {
  const statusSummary = PROJECT_STATUS_ORDER.map(
    (status) => ({
      status,
      count: projects.filter(
        (project) => project.status === status,
      ).length,
    }),
  ).filter((item) => item.count > 0);

  return (
    <div className="mt-10">
      <dl
        className="
          border-t
          border-line
          font-mono
          text-xs
          uppercase
        "
      >
        <div
          className="
            flex
            items-start
            justify-between
            gap-6
            border-b
            border-line
            py-4
          "
        >
          <dt className="text-muted">
            Published
          </dt>

          <dd>{formatCount(projects.length)}</dd>
        </div>

        {statusSummary.map((item) => (
          <div
            key={item.status}
            className="
              flex
              items-start
              justify-between
              gap-6
              border-b
              border-line
              py-4
            "
          >
            <dt className="text-muted">
              {item.status}
            </dt>

            <dd>{formatCount(item.count)}</dd>
          </div>
        ))}

        <div
          className="
            flex
            items-start
            justify-between
            gap-6
            border-b
            border-line
            py-4
          "
        >
          <dt className="text-muted">
            Order
          </dt>

          <dd>Curated</dd>
        </div>
      </dl>

      {projects.length > 0 ? (
        <nav
          aria-label="Jump to a project"
          className="mt-10"
        >
          <p className="type-label text-muted">
            Project Directory
          </p>

          <ol className="mt-4 border-t border-line">
            {projects.map((project, index) => (
              <li
                key={project.slug}
                className="border-b border-line"
              >
                <a
                  href={`#project-${project.slug}`}
                  className="
                    group
                    grid
                    grid-cols-[2rem_minmax(0,1fr)_auto]
                    items-start
                    gap-3
                    py-4
                    font-mono
                    text-xs
                    uppercase
                    transition-colors
                    duration-150
                    hover:text-accent
                  "
                >
                  <span className="text-muted group-hover:text-accent">
                    {formatCount(index + 1)}
                  </span>

                  <span
                    className="
                      min-w-0
                      font-semibold
                      tracking-[0.06em]
                    "
                  >
                    {project.title}
                  </span>

                  <span className="text-muted">
                    {project.year}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
    </div>
  );
}