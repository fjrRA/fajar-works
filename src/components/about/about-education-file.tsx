// src/components/about/
// about-education-file.tsx

import type {
  AboutEducationContent,
} from "@/types/about";

type AboutEducationFileContent = Pick<
  AboutEducationContent,
  | "institution"
  | "field"
  | "level"
  | "duration"
  | "graduationYear"
>;

type AboutEducationFileProps = {
  content: AboutEducationFileContent;
};

export function AboutEducationFile({
  content,
}: AboutEducationFileProps) {
  const educationItems = [
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
    {
      label: "Graduation",
      value: String(
        content.graduationYear,
      ),
    },
  ];

  return (
    <aside
      aria-label="Education information"
      className="
        min-w-0
        px-6
        py-10
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
      "
    >
      <p className="type-label text-muted">
        Education File
      </p>

      <dl className="mt-8 border-t border-line">
        {educationItems.map(
          ({ label, value }) => (
            <div
              key={label}
              className="
                border-b
                border-line
                py-4
              "
            >
              <dt className="type-meta text-muted uppercase">
                {label}
              </dt>

              <dd
                className="
                  mt-2
                  min-w-0
                  wrap-break-word
                  font-medium
                "
              >
                {value}
              </dd>
            </div>
          ),
        )}
      </dl>
    </aside>
  );
}