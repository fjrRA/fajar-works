// src/components/projects/project-detail/
// project-detail-responsibilities.tsx

type ProjectDetailResponsibilitiesProps = {
  responsibilities: readonly string[];
};

const PROJECT_RESPONSIBILITIES_HEADING_ID =
  "project-responsibilities-heading";

export function ProjectDetailResponsibilities({
  responsibilities,
}: ProjectDetailResponsibilitiesProps) {
  return (
    <section
      aria-labelledby={
        PROJECT_RESPONSIBILITIES_HEADING_ID
      }
      className="
        border-b
        border-line
        px-6
        py-10
        md:px-8
        lg:px-10
        lg:py-12
      "
    >
      <p className="type-label text-muted">
        Contribution
      </p>

      <h3
        id={
          PROJECT_RESPONSIBILITIES_HEADING_ID
        }
        className="
          mt-4
          text-3xl
          leading-none
          font-semibold
          tracking-[-0.04em]
          uppercase
        "
      >
        Responsibilities
      </h3>

      <ol className="mt-8 border-t border-line">
        {responsibilities.map(
          (responsibility, index) => (
            <li
              key={responsibility}
              className="
                grid
                grid-cols-[2rem_minmax(0,1fr)]
                gap-4
                border-b
                border-line
                py-5
              "
            >
              <span className="type-meta text-muted">
                {String(index + 1).padStart(
                  2,
                  "0",
                )}
              </span>

              <p className="type-body">
                {responsibility}
              </p>
            </li>
          ),
        )}
      </ol>
    </section>
  );
}