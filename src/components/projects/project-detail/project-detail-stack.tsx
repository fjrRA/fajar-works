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
          flex
          flex-wrap
          border-t
          border-l
          border-line
        "
      >
        {stack.map((technology) => (
          <li
            key={technology}
            className="
              border-r
              border-b
              border-line
              px-4
              py-3
              font-mono
              text-xs
              tracking-[0.08em]
              uppercase
            "
          >
            {technology}
          </li>
        ))}
      </ul>
    </section>
  );
}