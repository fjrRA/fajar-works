import {
  SectionHeading,
} from "@/components/ui/section-heading";
import {
  SectionLabel,
} from "@/components/ui/section-label";
import type {
  AboutCapabilitiesContent,
} from "@/types/about";

type AboutCapabilitiesHeaderProps = {
  content: AboutCapabilitiesContent;
  headingId: string;
};

export function AboutCapabilitiesHeader({
  content,
  headingId,
}: AboutCapabilitiesHeaderProps) {
  return (
    <header
      className="
        grid
        gap-8
        border-b
        border-line
        px-6
        py-10
        md:px-8
        lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)]
        lg:px-10
        lg:py-14
      "
    >
      <div>
        <SectionLabel index="04">
          {content.label}
        </SectionLabel>

        <SectionHeading
          id={headingId}
          className="mt-4 max-w-4xl"
        >
          {content.title}
        </SectionHeading>
      </div>

      <p className="type-body max-w-lg text-muted lg:justify-self-end">
        {content.description}
      </p>
    </header>
  );
}
