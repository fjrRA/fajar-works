// src/components/projects/project-index/project-index-item/project-index-item-details.tsx
type ProjectIndexItemDetailsProps = {
  context: string;
  role: string;
};

export function ProjectIndexItemDetails({
  context,
  role,
}: ProjectIndexItemDetailsProps) {
  const details = [
    {
      label: "Context",
      value: context,
    },
    {
      label: "Role",
      value: role,
    },
  ] as const;

  return (
    <dl
      className="
        mt-8
        grid
        border-y
        border-line
        sm:grid-cols-2
      "
    >
      {details.map((detail, index) => {
        const isFirstItem = index === 0;

        return (
          <div
            key={detail.label}
            className={
              isFirstItem
                ? `
                    border-b
                    border-line
                    py-5
                    sm:border-r
                    sm:border-b-0
                    sm:pr-6
                  `
                : "py-5 sm:pl-6"
            }
          >
            <dt className="type-label text-muted">
              {detail.label}
            </dt>

            <dd className="mt-3 text-base font-medium">
              {detail.value}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}