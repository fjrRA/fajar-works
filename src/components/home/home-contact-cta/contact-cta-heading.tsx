// src/components/home/home-contact-cta/contact-cta-heading.tsx
import { SectionLabel } from "@/components/ui/section-label";

type ContactCtaHeadingProps = {
  heading: string;
  headingId: string;
};

export function ContactCtaHeading({
  heading,
  headingId,
}: ContactCtaHeadingProps) {
  return (
    <header
      className="
        min-w-0
        border-b
        border-line
        px-6
        py-12
        md:px-8
        md:py-16
        lg:border-r
        lg:border-b-0
        lg:px-10
        lg:py-20
      "
    >
      <SectionLabel index="07">
        Contact
      </SectionLabel>

      <h2
        id={headingId}
        className="
    mt-8
    max-w-full
    text-balance
    text-[clamp(2.25rem,11vw,3.25rem)]
    leading-[0.92]
    font-bold
    tracking-[-0.045em]
    uppercase
    sm:text-[clamp(2.75rem,9vw,5rem)]
    sm:leading-[0.9]
    sm:tracking-[-0.055em]
    lg:max-w-6xl
    lg:text-[clamp(3.5rem,6.5vw,7rem)]
  "
      >
        {heading}
      </h2>
    </header>
  );
}