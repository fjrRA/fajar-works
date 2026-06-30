import type {
  AboutEducationContent,
} from "@/types/about";

type AboutEducationRecordProps = {
  content: Pick<
    AboutEducationContent,
    | "institution"
    | "field"
    | "level"
    | "duration"
    | "graduationYear"
  >;
};

export function AboutEducationRecord({
  content,
}: AboutEducationRecordProps) {
  const items = [
    {
      label: "Institution",
      value: content.institution,
    },
    {
      label: "Field",
      value: content.field,
    },
    {
      label: "Level",
      value: content.level,
    },
    {
      label: "Duration",
      value: content.duration,
    },
  ];

  return (
    <aside
      aria-label="Education record"
      className="
        min-w-0
        border-t
        border-line
        bg-panel
        px-6
        py-10
        md:px-8
        lg:border-t-0
        lg:border-l
        lg:px-10
        lg:py-14
      "
    >
      <p className="type-label text-muted">
        Education Record
      </p>

      <p
        className="
          mt-8
          text-[clamp(4rem,8vw,7rem)]
          leading-none
          font-semibold
          tracking-[-0.06em]
        "
      >
        {content.graduationYear}
      </p>

      <p className="type-meta mt-2 text-accent uppercase">
        Graduation
      </p>

      <dl className="mt-10 border-t border-line">
        {items.map(({ label, value }) => (
          <div
            key={label}
            className="border-b border-line py-4"
          >
            <dt className="type-meta text-muted uppercase">
              {label}
            </dt>

            <dd className="mt-2 wrap-break-word font-medium">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
