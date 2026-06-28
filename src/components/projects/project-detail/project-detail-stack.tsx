// src/components/projects/project-detail/
// project-detail-stack.tsx

type ProjectDetailStackProps = {
  stack: readonly string[];
};

const PROJECT_STACK_HEADING_ID =
  "project-stack-heading";

export function ProjectDetailStack({
  stack,
}: ProjectDetailStackProps) {
  return (
    <section
      aria-labelledby={
        PROJECT_STACK_HEADING_ID
      }
      className="
        px-6
        py-10
        md:px-8
        lg:px-10
        lg:py-12
      "
    >
      <p className="type-label text-muted">
        Technology Stack
      </p>

      <h3
        id={PROJECT_STACK_HEADING_ID}
        className="
          mt-4
          text-3xl
          leading-none
          font-semibold
          tracking-[-0.04em]
          uppercase
        "
      >
        Tools & Technologies
      </h3>

      <ul
        aria-label="Project technology stack"
        className="
          mt-8
          border-t
          border-line
        "
      >
        {stack.map((technology, index) => (
          <li
            key={technology}
            className="
              border-b
              border-line
              py-4
            "
          >
            <span className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4">
              <span className="type-meta text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="font-mono text-xs font-semibold tracking-[0.08em] uppercase">
                {technology}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
