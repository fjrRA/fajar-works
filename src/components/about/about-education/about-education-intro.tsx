import {
  SectionHeading,
} from "@/components/ui/section-heading";
import {
  SectionLabel,
} from "@/components/ui/section-label";
import type {
  AboutEducationContent,
} from "@/types/about";

type AboutEducationIntroProps = {
  content: Pick<
    AboutEducationContent,
    "label" | "title" | "description"
  >;
  headingId: string;
};

export function AboutEducationIntro({
  content,
  headingId,
}: AboutEducationIntroProps) {
  return (
    <div
      className="
        min-w-0
        px-6
        py-12
        md:px-8
        md:py-16
        lg:px-10
        lg:py-20
      "
    >
      <SectionLabel index="03">
        {content.label}
      </SectionLabel>

      <SectionHeading
        id={headingId}
        className="mt-4 max-w-5xl"
      >
        {content.title}
      </SectionHeading>

      <div
        className="
          mt-10
          grid
          max-w-5xl
          gap-6
          text-muted
          md:grid-cols-2
        "
      >
        {content.description.map((paragraph) => (
          <p key={paragraph} className="type-body">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
